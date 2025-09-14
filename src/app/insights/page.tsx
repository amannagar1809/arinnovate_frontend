import React from 'react';
import Header from '../../componenets/Header';
import FooterSection from '../../componenets/FooterSection';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
const insights = [
  {
    id: 1,
    title: 'The Future of AI in Digital Transformation',
    excerpt: 'Explore how artificial intelligence is reshaping industries and driving innovation in the digital age.',
    author: 'Arinnovate Team',
    date: '2024-09-15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Modern Businesses',
    excerpt: 'Learn essential strategies to protect your organization from evolving cyber threats.',
    author: 'Security Expert',
    date: '2024-09-10',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    category: 'Security'
  },
  {
    id: 3,
    title: 'Cloud Migration: A Strategic Approach',
    excerpt: 'Discover the key considerations and benefits of migrating to cloud-based solutions.',
    author: 'Cloud Architect',
    date: '2024-09-05',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    category: 'Cloud'
  },
  {
    id: 4,
    title: 'Data Analytics: Turning Information into Insights',
    excerpt: 'How businesses can leverage data analytics to make informed decisions and drive growth.',
    author: 'Data Scientist',
    date: '2024-08-30',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    category: 'Analytics'
  },
  {
    id: 5,
    title: 'Sustainable Technology Solutions',
    excerpt: 'Exploring eco-friendly tech innovations and their impact on business sustainability.',
    author: 'Sustainability Lead',
    date: '2024-08-25',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    category: 'Sustainability'
  },
  {
    id: 6,
    title: 'The Rise of Low-Code Development',
    excerpt: 'How low-code platforms are democratizing software development and accelerating innovation.',
    author: 'Development Team',
    date: '2024-08-20',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
    category: 'Development'
  }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Insights & Perspectives
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on technology, innovation, and industry trends.
            </p>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {insights.map((insight) => (
                <article
                  key={insight.id}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-white hover:text-yellow-400 transition">
                      {insight.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{insight.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(insight.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      href={`/insights/${insight.id}`}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-3 bg-yellow-500 text-black font-semibold rounded-r-lg hover:bg-yellow-400 transition text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
