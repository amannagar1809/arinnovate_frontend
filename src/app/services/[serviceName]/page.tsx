'use client';

import React, { useState } from 'react';
import Image from 'next/image';
const serviceDetails = {
  assurance: {
    title: 'Assurance',
    description: 'Providing trusted audit and assurance services to enhance stakeholder confidence.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_ASSURANCE',
    imageUrl: 'https://via.placeholder.com/800x400?text=Assurance+Service',
  },
  consulting: {
    title: 'Consulting',
    description: 'Strategic advice to transform your business and drive growth.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_CONSULTING',
    imageUrl: 'https://via.placeholder.com/800x400?text=Consulting+Service',
  },
  'strategy-and-transactions': {
    title: 'Strategy and Transactions',
    description: 'Helping you navigate complex transactions and strategic decisions.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_STRATEGY',
    imageUrl: 'https://via.placeholder.com/800x400?text=Strategy+and+Transactions',
  },
  tax: {
    title: 'Tax',
    description: 'Comprehensive tax advisory and compliance services.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_TAX',
    imageUrl: 'https://via.placeholder.com/800x400?text=Tax+Service',
  },
  technology: {
    title: 'Technology',
    description: 'Innovative technology solutions tailored to your needs.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_TECHNOLOGY',
    imageUrl: 'https://via.placeholder.com/800x400?text=Technology+Service',
  },
  'risk-management': {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_RISK',
    imageUrl: 'https://via.placeholder.com/800x400?text=Risk+Management',
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    description: 'Empowering your business with cutting-edge digital tools.',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_DIGITAL',
    imageUrl: 'https://via.placeholder.com/800x400?text=Digital+Transformation',
  },
};

interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { serviceName } = params;
  const service = serviceDetails[serviceName as keyof typeof serviceDetails];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!service) {
    return <div className="p-10 text-center">Service not found.</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for contacting us about ${service.title}, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <Image src={service.imageUrl} alt={`${service.title} image`} className="w-full rounded mb-6" />
      <p className="mb-6">{service.description}</p>
      <div className="mb-6 aspect-video">
        <iframe
          src={service.videoUrl}
          title={`${service.title} video`}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded"
        ></iframe>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Contact Us About {service.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
