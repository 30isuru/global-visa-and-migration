
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import Chatbot from '@/components/Chatbot';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team of migration experts for personalized assistance."
        buttonText="Schedule a Call"
        buttonLink="#contact"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop"
      />
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
