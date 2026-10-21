
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  backgroundImage 
}: HeroSectionProps) => {
  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-in">
            {subtitle}
          </p>
          <Button asChild className="btn-primary text-lg px-8 py-6 animate-fade-in">
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
