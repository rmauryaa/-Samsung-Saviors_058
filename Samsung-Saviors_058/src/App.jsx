import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Plan from './components/Plan';
import Widget from './components/Widget';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ContactInfoWithMap from './components/ContactInfoWithMap';
import GoogleAuth from './components/GoogleAuth';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  const [accessToken, setAccessToken] = useState('');

  const handleAuth = (token) => {
    setAccessToken(token);
  };

  return (
      <div className="App">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Plan />
        <Widget />
        <Testimonials />
        <ContactForm />
        <ContactInfoWithMap />
        <GoogleAuth handleAuth={handleAuth} />
        {accessToken && <UpcomingEvents accessToken={accessToken} />}
      </div>
  );
}

export default App;
