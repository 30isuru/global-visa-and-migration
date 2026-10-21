
import React from 'react';
import { Link } from 'react-router-dom';

interface Country {
  name: string;
  image: string;
  description: string;
  link: string;
}

const CountriesSection = () => {
  const countries: Country[] = [
    {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&h=400",
      description: "Discover opportunities in Canada's welcoming communities and strong economy.",
      link: "/countries/canada"
    },
    {
      name: "Australia",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400",
      description: "Explore Australia's vibrant lifestyle and world-class education system.",
      link: "/countries/australia"
    },
    {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      description: "Experience the UK's rich culture and diverse professional opportunities.",
      link: "/countries/uk"
    },
    {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=400",
      description: "Start a new life in New Zealand's stunning landscapes and relaxed lifestyle.",
      link: "/countries/new-zealand"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Destination <span className="gold-highlight">Countries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the most popular destination countries that offer exceptional opportunities for immigrants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="country-card group">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
              <p className="text-gray-600 mb-4">{country.description}</p>
              <Link 
                to={country.link}
                className="text-globalmigrate-blue hover:text-blue-700 font-medium"
              >
                Explore Options →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
