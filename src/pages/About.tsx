
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import Chatbot from '@/components/Chatbot';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection
        title="About GlobalMigrate Solutions"
        subtitle="Your trusted partner for migration and visa services since 2010."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop"
      />
      
      <main>
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gold-highlight">Story</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010 by Victoria Chen, GlobalMigrate Solutions began with a simple mission: to make the migration process accessible, transparent, and successful for everyone. After witnessing the challenges faced by her own family during their migration journey, Victoria was determined to create a consultancy that truly put clients first.
                </p>
                <p className="text-gray-700 mb-4">
                  Starting as a small team of three consultants, we've since grown to a team of 25+ migration experts across multiple countries. Our headquarters in New York serves as our main hub, with satellite offices in Toronto, London, Sydney, and Auckland.
                </p>
                <p className="text-gray-700">
                  Over the years, we've helped more than 5,000 individuals and families successfully relocate to their dream destinations. Our approach combines deep expertise in immigration law with a personalized touch that ensures each client receives tailored guidance throughout their journey.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop"
                  alt="GlobalMigrate Solutions Office"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-lg shadow-xl">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-bold text-globalmigrate-blue">12+</span>
                    <span className="text-gray-600 mt-2">Years of Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16 bg-globalmigrate-lightblue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & <span className="gold-highlight">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're driven by a set of core values that guide everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-globalmigrate-blue w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Integrity</h3>
                <p className="text-gray-600 text-center">
                  We prioritize honesty and transparency in all our client interactions, providing realistic assessments of migration prospects.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-globalmigrate-blue w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Excellence</h3>
                <p className="text-gray-600 text-center">
                  We strive for excellence in all our services, continuously updating our knowledge to provide the best guidance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-globalmigrate-blue w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Empathy</h3>
                <p className="text-gray-600 text-center">
                  We understand the emotional journey of migration and provide compassionate support throughout the process.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-globalmigrate-blue w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Global Perspective</h3>
                <p className="text-gray-600 text-center">
                  We embrace diversity and bring a global mindset to our work, understanding the unique needs of different cultures.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-globalmigrate-blue text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Migration Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation with one of our expert migration consultants today.
            </p>
            <Button asChild className="bg-white text-globalmigrate-blue hover:bg-globalmigrate-gold hover:text-white px-8 py-3 text-lg rounded-md transition-colors">
              <a href="/contact">Book a Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
