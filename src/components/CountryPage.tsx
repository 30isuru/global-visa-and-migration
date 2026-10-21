
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import ConsultationForm from '@/components/ConsultationForm';
import Chatbot from '@/components/Chatbot';

export interface VisaProgram {
  title: string;
  description: string;
  eligibility: string[];
  processingTime: string;
}

export interface LifeCard {
  title: string;
  description: string;
  facts: { label: string; value: string }[];
}

export interface CountryPageProps {
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  overview: string[];
  highlights: string[];
  mainImage: { src: string; alt: string };
  galleryImages: { src: string; alt: string }[];
  stats: { value: string; label: string }[];
  programsHeading: string;
  programsIntro: string;
  visaPrograms: VisaProgram[];
  lifeIntro: string;
  lifeCards: LifeCard[];
  consultationHeading: string;
  consultationIntro: string;
}

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

// Icons for the "Life in ..." cards, in order: cost of living, employment, healthcare & education
const lifeIconPaths = [
  "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
];

const CountryPage = ({
  name,
  heroTitle,
  heroSubtitle,
  heroImage,
  overview,
  highlights,
  mainImage,
  galleryImages,
  stats,
  programsHeading,
  programsIntro,
  visaPrograms,
  lifeIntro,
  lifeCards,
  consultationHeading,
  consultationIntro
}: CountryPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        buttonText="Free Consultation"
        buttonLink="#consultation"
        backgroundImage={heroImage}
      />

      <main>
        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="gold-highlight">{name}?</span>
                </h2>
                {overview.map((paragraph, index) => (
                  <p key={index} className={`text-gray-700 ${index === overview.length - 1 ? 'mb-6' : 'mb-4'}`}>
                    {paragraph}
                  </p>
                ))}

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-globalmigrate-gold mr-2" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="btn-primary">
                  <a href="#visa-programs">Explore Visa Options</a>
                </Button>
              </div>
              <div>
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg shadow-md w-full h-24 object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-12 bg-globalmigrate-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-globalmigrate-gold text-4xl font-bold mb-2">{stat.value}</div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Programs */}
        <section id="visa-programs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {programsHeading} <span className="gold-highlight">Programs</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {programsIntro}
              </p>
            </div>

            <div className="space-y-8">
              {visaPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        Eligibility Requirements
                      </h4>
                      <ul className="space-y-2">
                        {program.eligibility.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-globalmigrate-blue mr-2 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="bg-globalmigrate-lightblue rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-3 flex items-center">
                          <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Processing Time
                        </h4>
                        <p className="text-gray-700 font-medium text-xl">{program.processingTime}</p>
                        <div className="mt-4 pt-4 border-t border-globalmigrate-blue/20">
                          <h4 className="text-lg font-semibold mb-2">How we can help:</h4>
                          <ul className="space-y-2">
                            {["Eligibility assessment", "Document preparation", "Application submission"].map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-globalmigrate-blue mr-2 mt-0.5" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center mt-8">
              Processing times and requirements are indicative and change regularly. We confirm the latest rules for your case during your consultation.
            </p>
          </div>
        </section>

        {/* Life in the country */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Life in <span className="gold-highlight">{name}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {lifeIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifeCards.map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="h-6 w-6 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={lifeIconPaths[index % lifeIconPaths.length]}></path>
                    </svg>
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {card.description}
                  </p>
                  <div className="space-y-2">
                    {card.facts.map((fact, idx) => (
                      <div key={idx} className="flex justify-between gap-4">
                        <span>{fact.label}</span>
                        <span className="font-medium text-right">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Consultation */}
        <section id="consultation" className="py-16 bg-globalmigrate-lightblue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {consultationHeading} <span className="gold-highlight">Journey Today</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  {consultationIntro}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-globalmigrate-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Assessment</h3>
                      <p className="text-gray-600">We'll evaluate your profile and recommend the best immigration pathways for your unique situation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-globalmigrate-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">End-to-End Support</h3>
                      <p className="text-gray-600">From document preparation to application submission and follow-up, we handle all aspects of your immigration process.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-globalmigrate-gold mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1">Ongoing Updates</h3>
                      <p className="text-gray-600">Stay informed with regular updates on your application status and any policy changes that might affect your case.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">
                  Schedule your free 30-minute consultation today and take the first step toward your new life in {name}.
                </p>
              </div>
              <div>
                <ConsultationForm />
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

export default CountryPage;
