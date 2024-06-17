// src/App.jsx
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Plan from "./components/Plan";
import Widget from "./components/Widget";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ContactInfoWithMap from "./components/ContactInfoWithMap";
import UpcomingEvents from "./components/UpcomingEvents";
import CalendarPage from "./components/CalendarPage";
import { auth } from "./services/firebase";
import { signOutFromGoogle } from "./services/authService";
import ServiceCard1 from "./pages/ServiceCard1";
import ServiceCard2 from "./pages/ServiceCard2";
import ServiceCard3 from "./pages/ServiceCard3";
import { Element } from 'react-scroll';
import { Fade, Slide, Zoom, Bounce } from 'react-awesome-reveal';
// import './styles/App.css'; // Make sure to import your CSS for the background

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOutFromGoogle().then(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <ChakraProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Element name="home" id="home">
                  <Fade>
                    <HeroSection />
                  </Fade>
                </Element>
                <Element name="about" id="about">
                  <Slide direction="left">
                    <AboutUs />
                  </Slide>
                </Element>
                <Element name="services" id="services">
                  <Zoom>
                    <Plan />
                    <Widget />
                  </Zoom>
                </Element>
                <Element name="testimonials" id="testimonials">
                  <Bounce>
                    <Testimonials />
                  </Bounce>
                </Element>
                <Element name="contact" id="contact">
                  <Slide direction="right">
                    <ContactForm />
                    <ContactInfoWithMap />
                  </Slide>
                </Element>
                {isLoggedIn && (
                  <Element name="events" id="events">
                    <Fade>
                      <UpcomingEvents />
                    </Fade>
                  </Element>
                )}
              </div>
            }
          />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/serviceCard1" element={<ServiceCard1 />} />
          <Route path="/serviceCard2" element={<ServiceCard2 />} />
          <Route path="/serviceCard3" element={<ServiceCard3 />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
