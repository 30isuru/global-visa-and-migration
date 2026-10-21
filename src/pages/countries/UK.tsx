
import React from 'react';
import CountryPage, { VisaProgram, LifeCard } from '@/components/CountryPage';

const UK = () => {
  // UK visa programs
  const visaPrograms: VisaProgram[] = [
    {
      title: "Skilled Worker Visa",
      description: "The main UK work route for skilled professionals with a job offer from a Home Office licensed sponsor. It can lead to settlement (Indefinite Leave to Remain) after the qualifying period.",
      eligibility: [
        "Job offer from a UK employer with a valid sponsor licence",
        "Certificate of Sponsorship (CoS) for an eligible occupation",
        "Salary at or above the required threshold for the role",
        "Meet the English language requirement"
      ],
      processingTime: "3-8 weeks"
    },
    {
      title: "Health and Care Worker Visa",
      description: "A dedicated route for qualified doctors, nurses and other health professionals working for the NHS or approved health and social care employers, with reduced visa fees and no Immigration Health Surcharge.",
      eligibility: [
        "Job offer in an eligible health occupation from an approved employer",
        "Relevant professional registration (e.g. NMC, GMC, HCPC)",
        "Certificate of Sponsorship from your employer",
        "Meet the English language requirement"
      ],
      processingTime: "3-8 weeks"
    },
    {
      title: "Student Visa",
      description: "Allows international students to study at a licensed UK university, college or school, with part-time work rights during term time for degree-level students.",
      eligibility: [
        "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor",
        "Proof of funds for course fees and living costs",
        "Meet the English language requirement",
        "Pay the Immigration Health Surcharge"
      ],
      processingTime: "3-6 weeks"
    },
    {
      title: "Graduate Visa",
      description: "Lets international students who have completed an eligible UK degree stay and work, or look for work, at any skill level without needing a sponsor.",
      eligibility: [
        "Currently in the UK on a Student visa",
        "Successfully completed an eligible UK degree or qualification",
        "Education provider has reported your completion to the Home Office",
        "Apply before your Student visa expires"
      ],
      processingTime: "8 weeks"
    },
    {
      title: "Family Visa (Spouse / Partner)",
      description: "Allows the spouse, civil partner or long-term partner of a British citizen or settled person to join them in the UK, with a route to settlement.",
      eligibility: [
        "Partner is a British citizen, settled in the UK, or has refugee or protection status",
        "Genuine and subsisting relationship",
        "Meet the minimum income requirement",
        "Meet the English language and accommodation requirements"
      ],
      processingTime: "8-24 weeks"
    }
  ];

  const lifeCards: LifeCard[] = [
    {
      title: "Cost of Living",
      description: "London is one of the most expensive cities in the world, while cities such as Manchester, Birmingham, Leeds and Glasgow offer a significantly lower cost of living.",
      facts: [
        { label: "Average rent (1BR apartment)", value: "£900 - £2,200" },
        { label: "Average monthly utilities", value: "£150 - £300" },
        { label: "Monthly public transport", value: "£70 - £190" },
        { label: "Average meal (restaurant)", value: "£15 - £25" }
      ]
    },
    {
      title: "Employment",
      description: "The UK has a large, diverse economy with strong demand in healthcare, engineering, IT, finance and education, and statutory paid holiday for all workers.",
      facts: [
        { label: "Median full-time salary", value: "~£39,000/year" },
        { label: "National Living Wage (21+)", value: "~£12.50/hr" },
        { label: "Unemployment rate", value: "~5%" },
        { label: "Work week", value: "37.5 hours" }
      ]
    },
    {
      title: "Healthcare & Education",
      description: "The NHS provides healthcare free at the point of use. Most visa holders pay the Immigration Health Surcharge with their application to access it.",
      facts: [
        { label: "Healthcare system", value: "NHS (public)" },
        { label: "University tuition (international)", value: "£15,000 - £38,000/year" },
        { label: "State school", value: "Free" },
        { label: "Childcare (full-time, monthly)", value: "£900 - £1,800" }
      ]
    }
  ];

  return (
    <CountryPage
      name="the UK"
      heroTitle="Migrate to the United Kingdom"
      heroSubtitle="Work, study and build a new life in the UK with our expert British visa and immigration services."
      heroImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop"
      overview={[
        "The United Kingdom combines world-renowned universities, a global financial centre and a rich cultural heritage. Its diverse cities offer excellent career opportunities, and the NHS provides healthcare free at the point of use.",
        "The UK's points-based immigration system offers clear routes for skilled workers, healthcare professionals, students, graduates and families. Many of these routes lead to Indefinite Leave to Remain and, eventually, British citizenship."
      ]}
      highlights={[
        "World-class universities",
        "NHS healthcare",
        "Global career hub",
        "Post-study work route",
        "Rich history & culture",
        "Easy travel to Europe"
      ]}
      mainImage={{
        src: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=600&h=400",
        alt: "Big Ben and a red London bus at Westminster"
      }}
      galleryImages={[
        { src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=200&h=150", alt: "Houses of Parliament, London" },
        { src: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?auto=format&fit=crop&w=200&h=150", alt: "Edinburgh Castle, Scotland" },
        { src: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=200&h=150", alt: "Edinburgh skyline at sunset" }
      ]}
      stats={[
        { value: "69M+", label: "Population" },
        { value: "4", label: "Nations" },
        { value: "4", label: "Universities in the world top 10" },
        { value: "2 yrs", label: "Post-study work (Graduate visa)" }
      ]}
      programsHeading="UK Visa"
      programsIntro="The UK offers work, study and family visa routes under its points-based system. Explore the options below to find the best fit for your situation."
      visaPrograms={visaPrograms}
      lifeIntro="What to expect when starting your new life in the United Kingdom."
      lifeCards={lifeCards}
      consultationHeading="Start Your UK"
      consultationIntro="Our UK immigration experts will help you find the right route, check your sponsorship, salary and English requirements, and guide you through every step of your visa application."
    />
  );
};

export default UK;
