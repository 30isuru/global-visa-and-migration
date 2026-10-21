
import React from 'react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CountriesSection from '@/components/CountriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection
        title="Your Journey to a New Beginning Starts Here"
        subtitle="Global Visa and Migration provides expert guidance for all your migration needs to Canada, Australia, UK, and New Zealand."
        buttonText="Free Consultation"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop"
      />
      
      <main>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Migration <span className="gold-highlight">Consultancy</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              At Global Visa and Migration, we guide you through every step of your migration journey with expertise and personalized support. 
              Our team of certified consultants specializes in visas for Canada, Australia, UK, and New Zealand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="btn-primary">
                <a href="/about">About Us</a>
              </Button>
              <Button asChild className="btn-secondary">
                <a href="/services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
        
        <AboutSection />
        <ServicesSection />
        <CountriesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
