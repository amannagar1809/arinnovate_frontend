import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '../../componenets/FooterSection';

const industries = [
  {
    title: 'Healthcare',
    description: 'Revolutionizing patient care with AI-driven diagnostics and personalized treatment plans.',
    detailedDescription: 'Our healthcare solutions leverage AI and machine learning to improve diagnostic accuracy, streamline operations, and enhance patient outcomes. We work with hospitals, clinics, and healthcare providers to implement cutting-edge technologies that save lives and reduce costs.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Finance',
    description: 'Enhancing financial services with intelligent automation and risk management solutions.',
    detailedDescription: 'We help financial institutions harness the power of AI for fraud detection, algorithmic trading, personalized financial advice, and regulatory compliance. Our solutions drive efficiency while ensuring security and compliance in the complex financial landscape.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    description: 'Optimizing production processes with predictive maintenance and smart manufacturing.',
    detailedDescription: 'Our AI solutions for manufacturing include predictive maintenance, quality control automation, supply chain optimization, and smart factory implementations. We help manufacturers reduce downtime, improve quality, and increase operational efficiency.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Retail',
    description: 'Transforming retail experiences with personalized shopping and inventory management.',
    detailedDescription: 'We empower retailers with AI-driven personalization, demand forecasting, dynamic pricing, and customer behavior analytics. Our solutions help retailers create exceptional shopping experiences, optimize inventory, and drive revenue growth.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Education',
    description: 'Enhancing learning outcomes with adaptive learning platforms and educational analytics.',
    detailedDescription: 'Our educational technology solutions include adaptive learning systems, student performance analytics, personalized curriculum recommendations, and virtual learning environments. We help educational institutions improve student engagement and academic success.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Transportation',
    description: 'Revolutionizing mobility with autonomous systems and smart logistics.',
    detailedDescription: 'We develop AI solutions for transportation companies including route optimization, predictive maintenance for vehicles, autonomous driving systems, and smart traffic management. Our technology improves safety, efficiency, and sustainability in transportation.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6 text-white animate-float">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered solutions are transforming industries across the globe. From healthcare to transportation, we deliver innovative technology that drives real business impact.
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
            <Link href="/services" className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition duration-300 w-full sm:w-auto text-center">
              Explore Our Services
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="industry-card bg-gray-800 p-8 rounded-3xl shadow-2xl hover:shadow-3xl flex flex-col justify-between border border-gray-700 animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4 animate-glow">
                    {industry.icon}
                  </div>
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={600}
                    height={300}
                    className="w-20 h-20 object-cover rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">{industry.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{industry.detailedDescription}</p>
              </div>
              <div className="mt-8">
                <Link
                  href={`/services/${industry.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  Learn More
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
