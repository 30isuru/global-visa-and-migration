
import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  country: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "GlobalMigrate Solutions made my dream of studying in Australia a reality. Their team guided me through every step of the visa process and provided invaluable advice.",
      name: "Sarah Johnson",
      title: "International Student",
      country: "Australia"
    },
    {
      quote: "After trying to navigate the skilled migration process on my own, I turned to GlobalMigrate. Best decision ever! They secured my PR visa in just 6 months.",
      name: "Michael Chen",
      title: "Software Engineer",
      country: "Canada"
    },
    {
      quote: "The family sponsorship process seemed overwhelming until we found GlobalMigrate. Their expertise reunited our family in the UK seamlessly.",
      name: "Priya Patel",
      title: "Permanent Resident",
      country: "United Kingdom"
    }
  ];

  return (
    <section className="py-16 bg-globalmigrate-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success <span className="text-globalmigrate-gold">Stories</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who have successfully migrated with our help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Quote className="h-10 w-10 text-globalmigrate-gold mb-4" />
              <p className="text-white mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-globalmigrate-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/70">
                    {testimonial.title} • {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/testimonials" className="inline-flex items-center text-white hover:text-globalmigrate-gold">
            View More Success Stories
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
