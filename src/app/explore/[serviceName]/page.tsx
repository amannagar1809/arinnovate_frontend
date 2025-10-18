'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Header from '../../../componenets/Header';
import ContactSection from '../../../componenets/ContactSection';
import FooterSection from '../../../componenets/FooterSection';

const serviceDetails = {
  technology: {
    title: 'Technology',
    description: 'Innovative technology solutions tailored to your needs.',
    detailedDescription: 'We offer custom software development, IT consulting, cybersecurity, and digital transformation services. Our technology experts help businesses leverage the latest tools to improve efficiency and competitiveness.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_TECHNOLOGY',
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    description: 'Empowering your business with cutting-edge digital tools.',
    detailedDescription: 'We guide businesses through digital transformation journeys, implementing cloud solutions, automation, data analytics, and AI-driven technologies. Our goal is to help companies adapt to the digital age and stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_DIGITAL',
  },
  consulting: {
    title: 'Consulting',
    description: 'Strategic advice to transform your business and drive growth.',
    detailedDescription: 'Our consulting services cover business strategy, operational improvements, and organizational development. We provide expert guidance to help companies navigate challenges and seize opportunities for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_CONSULTING',
  },
  assurance: {
    title: 'Assurance',
    description: 'Providing trusted audit and assurance services to enhance stakeholder confidence.',
    detailedDescription: 'Our assurance services include financial audits, compliance audits, and internal controls assessments. We help organizations build trust with stakeholders through independent verification of financial statements and operational effectiveness.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_ASSURANCE',
  },
  'strategy-and-transactions': {
    title: 'Strategy and Transactions',
    description: 'Helping you navigate complex transactions and strategic decisions.',
    detailedDescription: 'We assist with mergers and acquisitions, divestitures, joint ventures, and strategic planning. Our team provides valuation services, due diligence, and transaction advisory to ensure successful outcomes.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_STRATEGY',
  },
  tax: {
    title: 'Tax',
    description: 'Comprehensive tax advisory and compliance services.',
    detailedDescription: 'Our tax services include tax planning, compliance, and advisory. We help individuals and businesses optimize their tax strategies, ensure compliance with regulations, and manage tax risks effectively.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_TAX',
  },
  'risk-management': {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    detailedDescription: 'Our risk management services include enterprise risk management, compliance risk, operational risk, and financial risk assessments. We help organizations identify, assess, and mitigate risks to protect their assets and reputation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_RISK',
  },
  'cloud-services': {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern businesses.',
    detailedDescription: 'We provide cloud migration, infrastructure management, and cloud-native development services. Our experts help businesses leverage AWS, Azure, and Google Cloud to achieve scalability, cost-efficiency, and innovation.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_CLOUD',
  },
  'data-analytics': {
    title: 'Data Analytics',
    description: 'Transforming data into actionable insights.',
    detailedDescription: 'Our data analytics services include big data processing, machine learning, predictive analytics, and business intelligence. We help organizations turn raw data into strategic advantages for better decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_DATA',
  },
};

export default function ExploreServicePage() {
  const params = useParams();
  const serviceName = params.serviceName as string;
  const service = serviceDetails[serviceName as keyof typeof serviceDetails];

  if (!service) {
    return (
      <>
        <Header />
        <div className="p-10 text-center">Service not found.</div>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-10 pt-24 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-white">{service.title} - Explore with AI</h1>
          <Image src={service.image} alt={`${service.title} image`} width={800} height={400} className="w-full rounded mb-6" />
          <p className="mb-6 text-lg text-gray-200">{service.detailedDescription}</p>
          <div className="mb-6 aspect-video">
            <iframe
              src={service.videoUrl}
              title={`${service.title} video`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
        </div>
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}
