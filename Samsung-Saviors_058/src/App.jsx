// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Plan from './components/Plan';
import Widget from './components/Widget';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ContactInfoWithMap from './components/ContactInfoWithMap';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Plan />
        <Widget />
        <Testimonials />
        <ContactForm />
        <ContactInfoWithMap />
      </div>
    </ChakraProvider>
  );
}

export default App;
