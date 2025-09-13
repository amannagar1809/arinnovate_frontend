import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '../../componenets/FooterSection';

const services = [
  {
    title: 'Technology',
    description: 'Innovative technology solutions tailored to your needs.',
    detailedDescription: 'We offer custom software development, IT consulting, cybersecurity, and digital transformation services. Our technology experts help businesses leverage the latest tools to improve efficiency and competitiveness.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    description: 'Empowering your business with cutting-edge digital tools.',
    detailedDescription: 'We guide businesses through digital transformation journeys, implementing cloud solutions, automation, data analytics, and AI-driven technologies. Our goal is to help companies adapt to the digital age and stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Consulting',
    description: 'Strategic advice to transform your business and drive growth.',
    detailedDescription: 'Our consulting services cover business strategy, operational improvements, and organizational development. We provide expert guidance to help companies navigate challenges and seize opportunities for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Assurance',
    description: 'Providing trusted audit and assurance services to enhance stakeholder confidence.',
    detailedDescription: 'Our assurance services include financial audits, compliance audits, and internal controls assessments. We help organizations build trust with stakeholders through independent verification of financial statements and operational effectiveness.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Strategy and Transactions',
    description: 'Helping you navigate complex transactions and strategic decisions.',
    detailedDescription: 'We assist with mergers and acquisitions, divestitures, joint ventures, and strategic planning. Our team provides valuation services, due diligence, and transaction advisory to ensure successful outcomes.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Tax',
    description: 'Comprehensive tax advisory and compliance services.',
    detailedDescription: 'Our tax services include tax planning, compliance, and advisory. We help individuals and businesses optimize their tax strategies, ensure compliance with regulations, and manage tax risks effectively.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    detailedDescription: 'Our risk management services include enterprise risk management, compliance risk, operational risk, and financial risk assessments. We help organizations identify, assess, and mitigate risks to protect their assets and reputation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern businesses.',
    detailedDescription: 'We provide cloud migration, infrastructure management, and cloud-native development services. Our experts help businesses leverage AWS, Azure, and Google Cloud to achieve scalability, cost-efficiency, and innovation.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description: 'Transforming data into actionable insights.',
    detailedDescription: 'Our data analytics services include big data processing, machine learning, predictive analytics, and business intelligence. We help organizations turn raw data into strategic advantages for better decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6 text-white animate-float">
            Our AI-Powered Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge solutions tailored to transform your business. From technology innovation to strategic consulting, we empower you with AI-driven services that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/" className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-400 transition duration-300 w-full sm:w-auto text-center">
              Home
            </Link>
            <Link href="/contact" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 animate-glow w-full sm:w-auto text-center">
              Contact Us
            </Link>
            <Link href="/about" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition duration-300 w-full sm:w-auto text-center">
              Learn More About Us
            </Link>
            <Link href="/industries" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition duration-300 w-full sm:w-auto text-center">
              Explore Industries
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-gray-800 p-8 rounded-3xl shadow-2xl hover:shadow-3xl flex flex-col justify-between border border-gray-700 animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4 animate-glow">
                    {service.icon}
                  </div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-20 h-20 object-cover rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{service.detailedDescription}</p>
              </div>
              <div className="mt-8">
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  Explore with AI
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
