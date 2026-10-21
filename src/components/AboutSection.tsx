
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "Personalized migration strategies",
    "Expert visa application support",
    "Country-specific guidance",
    "Document verification and preparation",
    "Post-migration settlement assistance"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gold-highlight">GlobalMigrate Solutions</span>
            </h2>
            <p className="text-gray-700 mb-6">
              At GlobalMigrate Solutions, we understand that embarking on a migration journey is one of the most significant decisions in your life. Since 2010, we've been guiding individuals and families through the complex migration process with expertise, integrity, and personalized attention.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of certified migration consultants brings decades of combined experience, ensuring that your visa application has the highest chance of success. We pride ourselves on staying current with the latest immigration policies and regulations across all major destination countries.
            </p>
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-globalmigrate-gold mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Button asChild className="btn-primary">
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop"
                alt="GlobalMigrate Solutions Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-globalmigrate-gold text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">12+ Years</p>
              <p className="text-sm">Of Excellence</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-globalmigrate-blue text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">5,000+</p>
              <p className="text-sm">Successful Cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
