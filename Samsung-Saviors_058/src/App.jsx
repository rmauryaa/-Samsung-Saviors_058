// src/App.jsx
import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Plan from './components/Plan';
import Widget from './components/Widget';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ContactInfoWithMap from './components/ContactInfoWithMap';
import UpcomingEvents from './components/UpcomingEvents';
import CalendarPage from './components/CalendarPage';
import { auth } from './services/firebase';
import { signOutFromGoogle } from './services/authService';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
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
          <Route path="/" element={
            <div>
              <div id="home">
                <HeroSection />
              </div>
              <div id="about">
                <AboutUs />
              </div>
              <div id="services">
                <Plan />
                <Widget />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <div id="contact">
                <ContactForm />
                <ContactInfoWithMap />
              </div>
              {isLoggedIn && <UpcomingEvents />}
            </div>
          } />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
