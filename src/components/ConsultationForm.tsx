
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Request Submitted",
        description: "One of our migration experts will contact you shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        visaType: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const countries = [
    { value: "", label: "Select Destination Country" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "uk", label: "United Kingdom" },
    { value: "new-zealand", label: "New Zealand" },
    { value: "other", label: "Other" }
  ];

  const visaTypes = [
    { value: "", label: "Select Visa Type" },
    { value: "student", label: "Student Visa" },
    { value: "work", label: "Work Visa" },
    { value: "skilled", label: "Skilled Migration" },
    { value: "family", label: "Family Sponsorship" },
    { value: "business", label: "Business Visa" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Request Free Consultation</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
              placeholder="Your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Destination Country *</label>
            <select
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="visaType" className="block text-sm font-medium text-gray-700 mb-1">Visa Type *</label>
            <select
              id="visaType"
              name="visaType"
              required
              value={formData.visaType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
            >
              {visaTypes.map((visa) => (
                <option key={visa.value} value={visa.value}>
                  {visa.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
              placeholder="Tell us about your migration goals"
            ></textarea>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            type="submit" 
            className="btn-primary w-full md:w-auto" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
