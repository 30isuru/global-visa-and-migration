
import React from 'react';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "Student Visa",
      description: "Pursue your educational dreams abroad with our comprehensive student visa services.",
      icon: "/placeholder.svg",
      link: "/services/student-visa"
    },
    {
      title: "Work Visa",
      description: "Explore international career opportunities with our expert work visa guidance.",
      icon: "/placeholder.svg",
      link: "/services/work-visa"
    },
    {
      title: "Skilled Migration",
      description: "Leverage your qualifications for permanent residency through skilled migration programs.",
      icon: "/placeholder.svg",
      link: "/services/skilled-migration"
    },
    {
      title: "Family Sponsorship",
      description: "Reunite with your loved ones with our family sponsorship visa assistance.",
      icon: "/placeholder.svg",
      link: "/services/family-sponsorship"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gold-highlight">Services</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive migration services tailored to your specific needs and circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="mb-4 flex justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 text-globalmigrate-blue"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <div className="text-center">
                <Link 
                  to={service.link}
                  className="text-globalmigrate-blue hover:text-blue-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
