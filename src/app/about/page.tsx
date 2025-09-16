"use client";

import React from 'react';
import Header from '../../componenets/Header';
import FooterSection from '../../componenets/FooterSection';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 text-white animate-float">
              About Arinnovate Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a leading technology consulting firm dedicated to transforming businesses through innovative AI-powered solutions. Our mission is to empower organizations to thrive in the digital age.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Our Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Founded in 2024, Arinnovate Solutions emerged from a vision to bridge the gap between cutting-edge technology and business needs. Our founders, a team of seasoned technology experts and business strategists, recognized the transformative potential of AI and digital technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                What started as a small consultancy has grown into a comprehensive technology partner, serving clients across various industries. We&apos;ve helped hundreds of businesses navigate digital transformation, implement AI solutions, and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, we continue to push the boundaries of what&apos;s possible, combining technical expertise with deep industry knowledge to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Arinnovate Solutions Logo"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We embrace cutting-edge technologies and creative solutions to solve complex business challenges.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We deliver high-quality solutions and maintain the highest standards in everything we do.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Collaboration</h3>
                <p className="text-gray-300 leading-relaxed">
                  We work closely with our clients as partners, building long-term relationships based on trust and mutual success.
                </p>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AN</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Aman Nagar</h3>
                <p className="text-yellow-400 mb-4">CEO & Founder</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Visionary leader in technology consulting and digital transformation.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">RN</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Rohit Nagar</h3>
                <p className="text-yellow-400 mb-4">CTO</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  AI and machine learning expert driving our technological innovation initiatives.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MB</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Mike Brown</h3>
                <p className="text-yellow-400 mb-4">Head of Consulting</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Strategic consultant specializing in business transformation and operational excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help transform your business with our AI-powered solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
