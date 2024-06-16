// src/App.jsx
import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import MyTripsPage from './components/MyTripsPage';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user was logged in before refresh
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAuth = (token) => {
    setAccessToken(token);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setAccessToken('');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <ChakraProvider>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogin={handleAuth} onLogout={handleLogout} />
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
              {accessToken && <UpcomingEvents accessToken={accessToken} />}
            </div>
          } />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/my-trips" element={<MyTripsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
