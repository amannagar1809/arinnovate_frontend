import React from 'react';

const industries = [
  {
    name: 'Technology & Software',
    description: 'Driving innovation with cutting-edge software solutions.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Technology and software innovation image
  },
  {
    name: 'E-commerce & Retail',
    description: 'Enhancing retail experiences with digital transformation.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Retail and e-commerce technology image
  },
  {
    name: 'E-Learning & Education',
    description: 'Empowering education through technology and innovation.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.578c0 4.418-3.582 8-8 8s-8-3.582-8-8a12.083 12.083 0 01.84-4.578L12 14z" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Software company contributing to education technology
  },
  {
    name: 'Finance & Banking',
    description: 'Secure and efficient financial services and solutions.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-10h-2M4 12H2" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Digital transaction and fintech image
  },
  {
    name: 'Healthcare & Medical',
    description: 'Developing EHR systems, telemedicine platforms, medical imaging software, patient management systems, and health data analytics to improve patient care and operational efficiency.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center', // Healthcare technology image
  },
  {
    name: 'Manufacturing & Industry',
    description: 'Optimizing production processes with smart technologies.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Manufacturing technology image
  },
  {
    name: 'Real Estate & Brokershipping',
    description: 'Revolutionizing property management and transactions.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Real estate technology image
  },
  {
    name: 'Transportation & Logistics',
    description: 'Streamlining supply chains and mobility solutions.',
    icon: (
      <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 104 0m4 0v-4a1 1 0 011-1h2a1 1 0 011 1v4m-4 0h4" />
      </svg>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80', // Transportation and logistics technology image
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-400">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{industry.name}</h3>
              <img
                src={industry.imageUrl}
                alt={`${industry.name} Animated 3D Image`}
                className="w-full h-48 rounded-lg object-cover mb-4"
              />
              <p className="text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
