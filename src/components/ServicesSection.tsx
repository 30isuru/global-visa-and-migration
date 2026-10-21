
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Award, Users, LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "Student Visa",
      description: "Pursue your educational dreams abroad with our comprehensive student visa services.",
      icon: GraduationCap,
      link: "/services#student-visa"
    },
    {
      title: "Work Visa",
      description: "Explore international career opportunities with our expert work visa guidance.",
      icon: Briefcase,
      link: "/services#work-visa"
    },
    {
      title: "Skilled Migration",
      description: "Leverage your qualifications for permanent residency through skilled migration programs.",
      icon: Award,
      link: "/services#skilled-migration"
    },
    {
      title: "Family Sponsorship",
      description: "Reunite with your loved ones with our family sponsorship visa assistance.",
      icon: Users,
      link: "/services#family-sponsorship"
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
                <div className="w-16 h-16 rounded-full bg-globalmigrate-lightblue flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-globalmigrate-blue" strokeWidth={1.75} />
                </div>
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
