
import React from 'react';
import CountryPage, { VisaProgram, LifeCard } from '@/components/CountryPage';

const Australia = () => {
  // Australia visa programs
  const visaPrograms: VisaProgram[] = [
    {
      title: "Skilled Independent Visa (Subclass 189)",
      description: "A points-tested permanent visa for skilled workers who are not sponsored by an employer, state or family member. It lets you live and work anywhere in Australia.",
      eligibility: [
        "Occupation on the relevant skilled occupation list",
        "Positive skills assessment from the assessing authority",
        "Score at least 65 points and receive an invitation through SkillSelect",
        "Be under 45 years of age and have at least Competent English"
      ],
      processingTime: "6-12 months"
    },
    {
      title: "Skilled Nominated Visa (Subclass 190)",
      description: "A permanent visa for skilled workers nominated by an Australian state or territory government, with an additional 5 points awarded for the nomination.",
      eligibility: [
        "Nomination from a state or territory government",
        "Occupation on the relevant state or territory skilled list",
        "Positive skills assessment and at least 65 points",
        "Commitment to live and work in the nominating state"
      ],
      processingTime: "6-12 months"
    },
    {
      title: "Skilled Work Regional Visa (Subclass 491)",
      description: "A 5-year provisional visa for skilled workers who want to live and work in regional Australia, with a pathway to permanent residence through the Subclass 191 visa.",
      eligibility: [
        "Nomination by a state or territory, or sponsorship by an eligible relative in a regional area",
        "Positive skills assessment in an eligible occupation",
        "Score at least 65 points (including 15 points for nomination or sponsorship)",
        "Live, work and study only in designated regional areas"
      ],
      processingTime: "6-12 months"
    },
    {
      title: "Skills in Demand Visa (Subclass 482)",
      description: "An employer-sponsored temporary work visa that allows Australian businesses to fill skill shortages with overseas workers, with pathways to permanent residence.",
      eligibility: [
        "Job offer from an approved Australian employer sponsor",
        "At least 1 year of relevant work experience",
        "Salary at or above the applicable income threshold",
        "Meet English language, health and character requirements"
      ],
      processingTime: "1-4 months"
    },
    {
      title: "Student Visa (Subclass 500)",
      description: "Allows international students to study full-time at a registered Australian institution, with limited work rights during study and post-study work options after graduation.",
      eligibility: [
        "Confirmation of Enrolment (CoE) from a registered course provider",
        "Meet the Genuine Student requirement",
        "Proof of funds for tuition, living costs and travel",
        "Overseas Student Health Cover (OSHC) for the length of your stay"
      ],
      processingTime: "4-12 weeks"
    },
    {
      title: "Partner Visa (Subclasses 820/801 and 309/100)",
      description: "Allows the spouse or de facto partner of an Australian citizen, permanent resident or eligible New Zealand citizen to live in Australia, first temporarily and then permanently.",
      eligibility: [
        "Married to, or in a de facto relationship with, an eligible sponsor",
        "Demonstrate a genuine and continuing relationship",
        "Sponsor must be approved and meet sponsorship obligations",
        "Meet health and character requirements"
      ],
      processingTime: "12-24 months"
    }
  ];

  const lifeCards: LifeCard[] = [
    {
      title: "Cost of Living",
      description: "Living costs depend heavily on the city. Sydney and Melbourne are the most expensive, while cities like Adelaide, Perth and regional areas are more affordable.",
      facts: [
        { label: "Average rent (1BR apartment)", value: "$1,800 - $3,000 AUD" },
        { label: "Average monthly utilities", value: "$150 - $300 AUD" },
        { label: "Monthly public transport", value: "$150 - $220 AUD" },
        { label: "Average meal (restaurant)", value: "$20 - $35 AUD" }
      ]
    },
    {
      title: "Employment",
      description: "Australia has strong demand for skilled workers in healthcare, engineering, construction, IT, education and trades, with some of the highest minimum wages in the world.",
      facts: [
        { label: "Average full-time salary", value: "~$100,000 AUD/year" },
        { label: "Minimum wage", value: "~$25 AUD/hr" },
        { label: "Unemployment rate", value: "~4%" },
        { label: "Work week", value: "38 hours" }
      ]
    },
    {
      title: "Healthcare & Education",
      description: "Permanent residents and citizens can access Medicare, Australia's public healthcare system. Australia is also home to several of the world's top-ranked universities.",
      facts: [
        { label: "Healthcare system", value: "Medicare (public)" },
        { label: "University tuition (international)", value: "$20,000 - $50,000 AUD/year" },
        { label: "Public school (residents)", value: "Free" },
        { label: "Childcare (daily, before subsidy)", value: "$120 - $180 AUD" }
      ]
    }
  ];

  return (
    <CountryPage
      name="Australia"
      heroTitle="Migrate to Australia"
      heroSubtitle="Build your future in the Land Down Under with our expert Australian visa and migration services."
      heroImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop"
      overview={[
        "Australia offers an outstanding quality of life, with a strong economy, high wages, a warm climate and a relaxed outdoor lifestyle. Its major cities consistently rank among the world's most liveable, and its multicultural communities make newcomers feel at home.",
        "Australia runs a well-structured, points-based migration program that welcomes skilled workers, students, families and business people. With state nomination and regional pathways in addition to independent skilled visas, there are many routes to permanent residency."
      ]}
      highlights={[
        "High wages",
        "Medicare healthcare",
        "Top universities",
        "Strong job market",
        "Multicultural society",
        "Outdoor lifestyle"
      ]}
      mainImage={{
        src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&h=400",
        alt: "Sydney Harbour with the Opera House and city skyline"
      }}
      galleryImages={[
        { src: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?auto=format&fit=crop&w=200&h=150", alt: "Melbourne city skyline" },
        { src: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=200&h=150", alt: "Uluru in the Northern Territory" },
        { src: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=200&h=150", alt: "Flinders Street Station, Melbourne" }
      ]}
      stats={[
        { value: "185k", label: "Permanent migration places a year" },
        { value: "8", label: "States & territories" },
        { value: "~30%", label: "Population born overseas" },
        { value: "27M+", label: "Population" }
      ]}
      programsHeading="Australian Visa"
      programsIntro="Australia offers skilled, employer-sponsored, student and family visas. Explore the options below to find the best fit for your situation."
      visaPrograms={visaPrograms}
      lifeIntro="What to expect when starting your new life in Australia."
      lifeCards={lifeCards}
      consultationHeading="Start Your Australian"
      consultationIntro="Our Australian migration experts will help you understand your points score, choose the right visa subclass, and guide you through skills assessments, state nominations and your visa application."
    />
  );
};

export default Australia;
