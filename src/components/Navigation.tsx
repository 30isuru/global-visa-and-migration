
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Countries', 
      path: '#',
      subItems: [
        { name: 'Canada', path: '/countries/canada' },
        { name: 'Australia', path: '/countries/australia' },
        { name: 'UK', path: '/countries/uk' },
        { name: 'New Zealand', path: '/countries/new-zealand' }
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Global Visa and Migration Logo" 
              className="h-14 mr-2" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {!item.subItems ? (
                  <Link to={item.path} className="text-gray-700 hover:text-globalmigrate-blue font-medium">
                    {item.name}
                  </Link>
                ) : (
                  <div className="relative group">
                    <button className="text-gray-700 hover:text-globalmigrate-blue font-medium flex items-center">
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-globalmigrate-lightblue hover:text-globalmigrate-blue"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button className="btn-primary">Free Consultation</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {!item.subItems ? (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-globalmigrate-blue font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <div className="text-gray-700 font-medium mb-1">{item.name}</div>
                      <div className="ml-4 flex flex-col space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="text-gray-600 hover:text-globalmigrate-blue"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button className="btn-primary w-full">Free Consultation</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
