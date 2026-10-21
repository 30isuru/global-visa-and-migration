
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import ConsultationForm from '@/components/ConsultationForm';
import Chatbot from '@/components/Chatbot';

const Services = () => {
  const { hash } = useLocation();

  // Scroll to the service section in the URL hash (e.g. /services#work-visa)
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  // Service categories
  const serviceCategories = [
    {
      id: "student-visa",
      title: "Student Visa Services",
      icon: "/placeholder.svg",
      description: "Our comprehensive student visa services help you pursue educational opportunities at prestigious institutions worldwide.",
      features: [
        "Personalized institution selection based on your academic profile",
        "Application preparation and documentation assistance",
        "SOP (Statement of Purpose) and essay guidance",
        "Pre-departure orientation and accommodation support",
        "Post-arrival assistance and visa extension services"
      ],
      countries: ["Canada", "Australia", "United Kingdom", "New Zealand"]
    },
    {
      id: "work-visa",
      title: "Work Visa Services",
      icon: "/placeholder.svg",
      description: "Explore international career opportunities with our expert work visa guidance for professionals across various industries.",
      features: [
        "Skills assessment and occupation mapping",
        "Employer sponsorship assistance",
        "Job search strategies for international markets",
        "Work permit application preparation",
        "Employment contract review and negotiation support"
      ],
      countries: ["Canada", "Australia", "United Kingdom", "New Zealand"]
    },
    {
      id: "skilled-migration",
      title: "Skilled Migration Programs",
      icon: "/placeholder.svg",
      description: "Leverage your qualifications for permanent residency through points-based skilled migration programs.",
      features: [
        "Points assessment and eligibility evaluation",
        "Skills assessment documentation",
        "Expression of Interest (EOI) preparation",
        "Permanent residency application assistance",
        "Post-landing settlement services"
      ],
      countries: ["Canada", "Australia", "New Zealand"]
    },
    {
      id: "family-sponsorship",
      title: "Family Sponsorship",
      icon: "/placeholder.svg",
      description: "Reunite with your loved ones through family sponsorship and partner visa programs.",
      features: [
        "Sponsor eligibility assessment",
        "Relationship documentation preparation",
        "Financial requirement guidance",
        "Interview preparation",
        "Appeal process assistance if needed"
      ],
      countries: ["Canada", "Australia", "United Kingdom", "New Zealand"]
    },
    {
      id: "business-visa",
      title: "Business Immigration",
      icon: "/placeholder.svg",
      description: "Expand your business globally or invest in new markets with our business immigration services.",
      features: [
        "Investor and entrepreneur program selection",
        "Business plan development",
        "Investment strategy guidance",
        "Company registration and compliance assistance",
        "Business visa application preparation"
      ],
      countries: ["Canada", "Australia", "United Kingdom", "New Zealand"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection
        title="Our Migration Services"
        subtitle="Comprehensive visa and immigration services tailored to your unique needs and goals."
        buttonText="Free Consultation"
        buttonLink="#consultation"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop"
      />
      
      <main>
        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive <span className="gold-highlight">Migration Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At GlobalMigrate Solutions, we offer a full range of migration services designed to make your international relocation as smooth as possible. Our team of experts provides personalized guidance at every step of the process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-globalmigrate-blue">
                <div className="bg-globalmigrate-lightblue w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-globalmigrate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Strategy</h3>
                <p className="text-gray-600">
                  We develop customized migration plans tailored to your specific circumstances, goals, and timeline.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-globalmigrate-blue">
                <div className="bg-globalmigrate-lightblue w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-globalmigrate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Documentation Support</h3>
                <p className="text-gray-600">
                  Our experts ensure all your documentation is complete, accurate, and meets the strict requirements of immigration authorities.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-globalmigrate-blue">
                <div className="bg-globalmigrate-lightblue w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-8 w-8 text-globalmigrate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                <p className="text-gray-600">
                  We provide comprehensive assistance from initial consultation through to arrival and settlement in your new country.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Service Categories */}
        {serviceCategories.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? '' : 'order-last'}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Services Include:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-globalmigrate-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Available for:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.countries.map((country, idx) => (
                        <span key={idx} className="bg-globalmigrate-lightblue text-globalmigrate-blue px-3 py-1 rounded-md">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="btn-primary">
                    <a href="#consultation">Get Free Consultation</a>
                  </Button>
                </div>
                <div>
                  <div className="bg-white rounded-lg shadow-lg p-6 relative">
                    <img
                      src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80`}
                      alt={service.title}
                      className="w-full h-auto rounded-md mb-4"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg absolute -bottom-5 -right-5">
                      <div className="flex items-center">
                        <div className="bg-globalmigrate-blue rounded-full p-2 mr-3">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Processing Time</p>
                          <p className="font-semibold">3-6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* Our Process */}
        <section className="py-16 bg-globalmigrate-lightblue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gold-highlight">Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure your migration journey is smooth and successful.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-globalmigrate-blue"></div>
              
              {/* Timeline steps */}
              <div className="grid grid-cols-1 gap-12">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-globalmigrate-blue">Initial Consultation</h3>
                      <p className="text-gray-600">
                        We begin with a comprehensive assessment of your background, goals, and eligibility for various migration pathways.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mt-6 md:mt-0">
                    <div className="hidden md:flex absolute -left-4 transform -translate-x-1/2 w-12 h-12 bg-globalmigrate-blue text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      1
                    </div>
                    <div className="md:hidden w-12 h-12 bg-globalmigrate-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      1
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="relative flex items-center justify-center mt-6 md:mt-0 md:order-first">
                    <div className="hidden md:flex absolute -right-4 transform translate-x-1/2 w-12 h-12 bg-globalmigrate-blue text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      2
                    </div>
                    <div className="md:hidden w-12 h-12 bg-globalmigrate-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      2
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-globalmigrate-blue">Strategy Development</h3>
                      <p className="text-gray-600">
                        We create a personalized migration plan with clear timelines, requirements, and step-by-step guidance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-globalmigrate-blue">Document Preparation</h3>
                      <p className="text-gray-600">
                        Our team assists with gathering, organizing, and reviewing all required documentation to ensure completeness and accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mt-6 md:mt-0">
                    <div className="hidden md:flex absolute -left-4 transform -translate-x-1/2 w-12 h-12 bg-globalmigrate-blue text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      3
                    </div>
                    <div className="md:hidden w-12 h-12 bg-globalmigrate-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      3
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="relative flex items-center justify-center mt-6 md:mt-0 md:order-first">
                    <div className="hidden md:flex absolute -right-4 transform translate-x-1/2 w-12 h-12 bg-globalmigrate-blue text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      4
                    </div>
                    <div className="md:hidden w-12 h-12 bg-globalmigrate-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      4
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-globalmigrate-blue">Application Submission</h3>
                      <p className="text-gray-600">
                        We submit your application to the relevant authorities and track its progress, providing regular updates.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-globalmigrate-blue">Pre-Departure Preparation</h3>
                      <p className="text-gray-600">
                        Once approved, we help you prepare for the move with comprehensive guidance on what to expect in your new country.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mt-6 md:mt-0">
                    <div className="hidden md:flex absolute -left-4 transform -translate-x-1/2 w-12 h-12 bg-globalmigrate-blue text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      5
                    </div>
                    <div className="md:hidden w-12 h-12 bg-globalmigrate-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      5
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="relative flex items-center justify-center mt-6 md:mt-0 md:order-first">
                    <div className="hidden md:flex absolute -right-4 transform translate-x-1/2 w-12 h-12 bg-globalmigrate-blue text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      6
                    </div>
                    <div className="md:hidden w-12 h-12 bg-globalmigrate-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      6
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-globalmigrate-blue">Settlement Support</h3>
                      <p className="text-gray-600">
                        Our support continues after arrival with assistance in setting up essential services and connecting with local communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Free Consultation */}
        <section id="consultation" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request a Free <span className="gold-highlight">Consultation</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Let our experts assess your eligibility and create a personalized migration plan tailored to your goals.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ConsultationForm />
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="gold-highlight">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and the migration process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">How long does the migration process usually take?</h3>
                  <p className="text-gray-600">
                    The timeline varies depending on the visa type and destination country. Generally, the process can take anywhere from 3 months to 2 years. During your consultation, we provide estimated timelines based on your specific situation.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">What are your fees for migration services?</h3>
                  <p className="text-gray-600">
                    Our fees vary based on the complexity of your case and the services required. We provide transparent fee structures during the initial consultation with no hidden costs. Payment plans are available to make our services accessible.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Can you guarantee my visa application will be successful?</h3>
                  <p className="text-gray-600">
                    While we cannot guarantee approval as final decisions rest with immigration authorities, our high success rate comes from thorough preparation and expertise. We only proceed with applications that have a strong chance of success.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">Do I need to have a job offer before applying for migration?</h3>
                  <p className="text-gray-600">
                    This depends on the visa category and country. Some skilled migration pathways don't require job offers, while work visas typically do. During your consultation, we'll explore all options based on your qualifications and circumstances.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">What happens if my application is rejected?</h3>
                  <p className="text-gray-600">
                    If an application is rejected, we provide a comprehensive analysis of the reasons and advise on the available options, which may include appeals, reviews, or alternative pathways. Our team has extensive experience in handling complex cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
