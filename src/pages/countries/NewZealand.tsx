
import React from 'react';
import CountryPage, { VisaProgram, LifeCard } from '@/components/CountryPage';

const NewZealand = () => {
  // New Zealand visa programs
  const visaPrograms: VisaProgram[] = [
    {
      title: "Skilled Migrant Category Resident Visa",
      description: "New Zealand's main points-based residence pathway for skilled workers who are already working in, or have a job offer for, a skilled role in New Zealand.",
      eligibility: [
        "Score at least 6 skilled residence points from professional registration, qualifications or income",
        "Skilled employment or a job offer with an accredited employer",
        "Be aged 55 or under",
        "Meet English language, health and character requirements"
      ],
      processingTime: "6-12 months"
    },
    {
      title: "Accredited Employer Work Visa (AEWV)",
      description: "The main temporary work visa, allowing skilled workers to work for an accredited New Zealand employer who has been unable to find a suitable local candidate.",
      eligibility: [
        "Job offer from an accredited New Zealand employer",
        "Employer has an approved job check for the role",
        "Paid at least the market rate for the position",
        "Relevant qualifications or work experience for the role"
      ],
      processingTime: "4-8 weeks"
    },
    {
      title: "Green List Residence Visa",
      description: "A fast-track residence pathway for people working in hard-to-fill occupations on the Green List, either straight to residence (Tier 1) or after 2 years of work (Tier 2).",
      eligibility: [
        "Job offer or employment in a Green List occupation",
        "Accredited employer and full-time, ongoing role",
        "Meet the occupation's registration, qualification or pay requirements",
        "Be aged 55 or under"
      ],
      processingTime: "3-6 months"
    },
    {
      title: "Student Visa",
      description: "Allows international students to study full-time at an approved New Zealand education provider, with part-time work rights and post-study work options for eligible graduates.",
      eligibility: [
        "Offer of place from an approved education provider",
        "Tuition fees paid or proof you can pay them",
        "Proof of funds for living costs during your studies",
        "Meet health, character and genuine intention requirements"
      ],
      processingTime: "4-8 weeks"
    },
    {
      title: "Partner of a New Zealander Resident Visa",
      description: "Allows the partner of a New Zealand citizen or resident to live in New Zealand permanently, based on a genuine and stable relationship.",
      eligibility: [
        "Partner is a New Zealand citizen or resident who can support your application",
        "Living together in a genuine and stable relationship for at least 12 months",
        "Both partners aged 18 or over",
        "Meet health and character requirements"
      ],
      processingTime: "6-12 months"
    }
  ];

  const lifeCards: LifeCard[] = [
    {
      title: "Cost of Living",
      description: "Auckland is the most expensive city, while Wellington, Christchurch and regional towns offer more affordable housing and a relaxed pace of life.",
      facts: [
        { label: "Average rent (1BR apartment)", value: "$1,800 - $2,600 NZD" },
        { label: "Average monthly utilities", value: "$200 - $300 NZD" },
        { label: "Monthly public transport", value: "$150 - $250 NZD" },
        { label: "Average meal (restaurant)", value: "$20 - $30 NZD" }
      ]
    },
    {
      title: "Employment",
      description: "New Zealand has ongoing skill shortages in healthcare, construction, engineering, IT, education and agriculture, and a strong focus on work-life balance.",
      facts: [
        { label: "Median salary", value: "~$70,000 NZD/year" },
        { label: "Minimum wage", value: "~$23.50 NZD/hr" },
        { label: "Unemployment rate", value: "~5%" },
        { label: "Work week", value: "40 hours" }
      ]
    },
    {
      title: "Healthcare & Education",
      description: "Residents and eligible work visa holders can access free or subsidised public healthcare. New Zealand's education system is highly regarded internationally.",
      facts: [
        { label: "Healthcare system", value: "Public (free/subsidised)" },
        { label: "University tuition (international)", value: "$22,000 - $45,000 NZD/year" },
        { label: "State school (residents)", value: "Free" },
        { label: "Childcare (monthly, before subsidy)", value: "$1,200 - $1,800 NZD" }
      ]
    }
  ];

  return (
    <CountryPage
      name="New Zealand"
      heroTitle="Migrate to New Zealand"
      heroSubtitle="Discover a balanced lifestyle and breathtaking landscapes with our expert New Zealand visa and immigration services."
      heroImage="https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop"
      overview={[
        "New Zealand is known for its stunning natural beauty, safe and friendly communities, and excellent work-life balance. It consistently ranks among the most peaceful and least corrupt countries in the world, making it an ideal place to raise a family.",
        "New Zealand actively recruits skilled workers to fill shortages in key industries. With the Accredited Employer Work Visa, the Green List fast-track and the Skilled Migrant Category, there are clear pathways from work to permanent residence."
      ]}
      highlights={[
        "Work-life balance",
        "Safe & peaceful",
        "Stunning nature",
        "Skills in demand",
        "Quality education",
        "Friendly communities"
      ]}
      mainImage={{
        src: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&h=400",
        alt: "Auckland waterfront and Sky Tower at dusk"
      }}
      galleryImages={[
        { src: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?auto=format&fit=crop&w=200&h=150", alt: "Wellington harbour at sunset" },
        { src: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&w=200&h=150", alt: "Road to Aoraki / Mount Cook" },
        { src: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=200&h=150", alt: "Lake Wakatipu near Queenstown" }
      ]}
      stats={[
        { value: "5.3M", label: "Population" },
        { value: "~29%", label: "Population born overseas" },
        { value: "16", label: "Regions" },
        { value: "40 hrs", label: "Standard work week" }
      ]}
      programsHeading="New Zealand Visa"
      programsIntro="New Zealand offers skilled residence, work, student and partner visas. Explore the options below to find the best fit for your situation."
      visaPrograms={visaPrograms}
      lifeIntro="What to expect when starting your new life in Aotearoa New Zealand."
      lifeCards={lifeCards}
      consultationHeading="Start Your New Zealand"
      consultationIntro="Our New Zealand immigration experts will help you find accredited employers, check your residence points and Green List eligibility, and guide you through every step of your application."
    />
  );
};

export default NewZealand;
