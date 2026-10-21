
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import ConsultationForm from '@/components/ConsultationForm';
import Chatbot from '@/components/Chatbot';

const Canada = () => {
  // Canada visa programs
  const visaPrograms = [
    {
      title: "Express Entry",
      description: "Canada's flagship immigration system for skilled workers, managing applications for permanent residence under Federal Skilled Worker Program, Federal Skilled Trades Program, and Canadian Experience Class.",
      eligibility: [
        "Score sufficient points in the Comprehensive Ranking System (CRS)",
        "Have eligible work experience in skilled occupations",
        "Meet language proficiency requirements in English or French",
        "Have sufficient funds for settlement (unless already working in Canada)"
      ],
      processingTime: "6-8 months"
    },
    {
      title: "Provincial Nominee Programs (PNP)",
      description: "Programs that allow Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and who are interested in settling in a particular province.",
      eligibility: [
        "Meet the requirements of the specific provincial program",
        "Have skills, education and work experience to contribute to the province's economy",
        "Demonstrate intention to live in the nominating province",
        "Some streams require a job offer from a provincial employer"
      ],
      processingTime: "12-18 months"
    },
    {
      title: "Study Permits",
      description: "Permits that allow international students to study at designated learning institutions in Canada, with potential pathways to permanent residency after graduation.",
      eligibility: [
        "Acceptance letter from a designated learning institution",
        "Proof of financial support for tuition fees and living expenses",
        "Clean criminal record",
        "Good health condition (medical exam may be required)"
      ],
      processingTime: "8-12 weeks"
    },
    {
      title: "Work Permits",
      description: "Temporary permits allowing foreign nationals to work in Canada, including open work permits and employer-specific work permits.",
      eligibility: [
        "Job offer from a Canadian employer (for employer-specific permits)",
        "Labour Market Impact Assessment (LMIA) may be required",
        "Meet educational and professional qualifications for the job",
        "Demonstrate intention to leave Canada when permit expires"
      ],
      processingTime: "4-12 weeks"
    },
    {
      title: "Family Sponsorship",
      description: "Programs allowing Canadian citizens and permanent residents to sponsor family members for immigration to Canada.",
      eligibility: [
        "Sponsor must be a Canadian citizen or permanent resident",
        "Demonstrate ability to financially support sponsored family member",
        "Eligible family members include spouse, common-law partner, dependent children, parents, and grandparents",
        "Meet minimum income requirements for certain family classes"
      ],
      processingTime: "12-24 months"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <HeroSection
        title="Migrate to Canada"
        subtitle="Discover opportunities in the Great White North with our expert Canadian immigration services."
        buttonText="Free Consultation"
        buttonLink="#consultation"
        backgroundImage="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop"
      />
      
      <main>
        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="gold-highlight">Canada?</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Canada consistently ranks among the top countries for quality of life, offering newcomers a welcoming multicultural society, a strong economy, and a stable political environment. With its vast landscapes, vibrant cities, and world-class education and healthcare systems, Canada presents an exceptional opportunity for those seeking a new beginning.
                </p>
                <p className="text-gray-700 mb-6">
                  The Canadian government actively encourages immigration through various pathways, recognizing the valuable contributions that newcomers make to the country's economic and cultural fabric. With over 100 immigration programs and streams, Canada offers flexible options for skilled workers, entrepreneurs, students, and families.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>High quality of life</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Universal healthcare</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>World-class education</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Strong job market</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Multicultural society</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Safe communities</span>
                  </div>
                </div>
                
                <Button asChild className="btn-primary">
                  <a href="#visa-programs">Explore Visa Options</a>
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=600&h=400"
                  alt="Downtown Toronto skyline with CN Tower"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=200&h=150"
                    alt="Canadian Rockies"
                    className="rounded-lg shadow-md w-full h-24 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=150"
                    alt="Vancouver harbor"
                    className="rounded-lg shadow-md w-full h-24 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=200&h=150"
                    alt="Montreal in autumn"
                    className="rounded-lg shadow-md w-full h-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Statistics */}
        <section className="py-12 bg-globalmigrate-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-globalmigrate-gold text-4xl font-bold mb-2">400k+</div>
                <p className="text-white/80">New immigrants annually</p>
              </div>
              <div>
                <div className="text-globalmigrate-gold text-4xl font-bold mb-2">100+</div>
                <p className="text-white/80">Immigration pathways</p>
              </div>
              <div>
                <div className="text-globalmigrate-gold text-4xl font-bold mb-2">13</div>
                <p className="text-white/80">Provinces & territories</p>
              </div>
              <div>
                <div className="text-globalmigrate-gold text-4xl font-bold mb-2">2</div>
                <p className="text-white/80">Official languages</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Visa Programs */}
        <section id="visa-programs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Canadian Visa <span className="gold-highlight">Programs</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Canada offers various immigration pathways tailored to different needs and qualifications. Explore the options below to find the best fit for your situation.
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
                            <svg className="h-5 w-5 text-globalmigrate-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
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
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-globalmigrate-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-gray-600">Eligibility assessment</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-globalmigrate-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-gray-600">Document preparation</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-globalmigrate-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-gray-600">Application submission</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Life in Canada */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Life in <span className="gold-highlight">Canada</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What to expect when starting your new life in the Great White North.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="h-6 w-6 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  Cost of Living
                </h3>
                <p className="text-gray-600 mb-4">
                  Canada's cost of living varies significantly by city and region. Major cities like Toronto and Vancouver have higher costs, while smaller cities and towns offer more affordable options.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Average rent (1BR apartment)</span>
                    <span className="font-medium">$1,200 - $2,500 CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average monthly utilities</span>
                    <span className="font-medium">$150 - $250 CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly public transport</span>
                    <span className="font-medium">$100 - $150 CAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average meal (restaurant)</span>
                    <span className="font-medium">$15 - $25 CAD</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="h-6 w-6 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Employment
                </h3>
                <p className="text-gray-600 mb-4">
                  Canada has a strong job market with opportunities across various sectors. Key industries include technology, healthcare, finance, natural resources, and manufacturing.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Average salary</span>
                    <span className="font-medium">$54,000 CAD/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minimum wage</span>
                    <span className="font-medium">$11.75 - $16.00 CAD/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unemployment rate</span>
                    <span className="font-medium">~5.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Work week</span>
                    <span className="font-medium">40 hours</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="h-6 w-6 text-globalmigrate-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  Healthcare & Education
                </h3>
                <p className="text-gray-600 mb-4">
                  Canada is known for its universal healthcare system and high-quality education. Permanent residents and citizens have access to public healthcare coverage.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Healthcare system</span>
                    <span className="font-medium">Universal (public)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>University tuition (domestic)</span>
                    <span className="font-medium">$6,000 - $10,000 CAD/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public school (K-12)</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Childcare (monthly)</span>
                    <span className="font-medium">$800 - $1,600 CAD</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="btn-primary">
                <a href="/resources/living-in-canada">Learn More About Life in Canada</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-globalmigrate-lightblue">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Success <span className="gold-highlight">Stories</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our clients who have successfully migrated to Canada with our help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-globalmigrate-blue rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    J
                  </div>
                  <div>
                    <h4 className="font-semibold">James Rodriguez</h4>
                    <p className="text-sm text-gray-500">Express Entry • Software Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "GlobalMigrate made my Express Entry application incredibly smooth. They handled all the paperwork and kept me updated throughout the process. Within 6 months, I received my PR and am now happily settled in Toronto!"
                </p>
                <div className="flex text-globalmigrate-gold">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-globalmigrate-blue rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    P
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">Provincial Nominee Program • Nurse</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "I had applied on my own twice and was rejected. GlobalMigrate identified the issues with my previous applications and helped me secure a provincial nomination from Manitoba. Their expertise was invaluable!"
                </p>
                <div className="flex text-globalmigrate-gold">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-globalmigrate-blue rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael & Lisa Chen</h4>
                    <p className="text-sm text-gray-500">Family Sponsorship • Vancouver</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "After I received my PR through Express Entry, GlobalMigrate helped me sponsor my wife. The process was complex, but they guided us every step of the way. We're now happily building our life together in Vancouver."
                </p>
                <div className="flex text-globalmigrate-gold">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Free Consultation */}
        <section id="consultation" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Your Canadian <span className="gold-highlight">Journey Today</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Our team of Canadian immigration experts is ready to help you navigate the various pathways to Canada. We'll assess your eligibility, recommend the best immigration program for your situation, and guide you through every step of the process.
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
                  Schedule your free 30-minute consultation today and take the first step toward your new life in Canada.
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

export default Canada;
