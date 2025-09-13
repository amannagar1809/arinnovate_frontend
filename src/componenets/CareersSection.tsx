import React from 'react';
import Link from 'next/link';
import { Users, TrendingUp, Heart, Zap, Target, Award } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Career Growth',
    description: 'Continuous learning opportunities and career advancement paths.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and supportive work environment.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Work on cutting-edge projects with the latest technologies.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Collaboration',
    description: 'Collaborate with talented professionals in a dynamic team.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Impact',
    description: 'Make a real difference in transforming businesses worldwide.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Recognition',
    description: 'Get rewarded for your contributions and achievements.'
  }
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-6 animate-fadeInDown">
            Join Our Innovative Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp">
            Shape the future of digital transformation. We are looking for passionate individuals ready to innovate, grow, and make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-6">
              Explore exciting career opportunities and be part of a team that&apos;s driving innovation in the tech industry.
            </p>
            <Link
              href="/careers"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-4 rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
