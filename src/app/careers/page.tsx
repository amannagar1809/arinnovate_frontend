"use client";

import React, { useState } from 'react';
import Header from '../../componenets/Header';
import FooterSection from '../../componenets/FooterSection';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Design and implement cutting-edge AI solutions for our clients. Work with machine learning frameworks and cloud technologies.',
    requirements: ['5+ years experience in AI/ML', 'Python, TensorFlow/PyTorch', 'Cloud platforms (AWS/Azure/GCP)', 'Strong problem-solving skills'],
  },
  {
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Analyze complex datasets to extract insights and build predictive models that drive business decisions.',
    requirements: ['3+ years in data science', 'R/Python, SQL', 'Statistical modeling', 'Data visualization tools'],
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Build scalable web applications using modern technologies. Work across the entire stack from frontend to backend.',
    requirements: ['4+ years web development', 'React, Node.js', 'Database design', 'API development'],
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Manage and optimize our cloud infrastructure, CI/CD pipelines, and ensure high availability of our services.',
    requirements: ['3+ years DevOps experience', 'Docker, Kubernetes', 'AWS/Azure', 'Infrastructure as Code'],
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap. Work closely with engineering teams to deliver innovative AI solutions.',
    requirements: ['4+ years product management', 'Technical background', 'Agile methodologies', 'Data-driven decision making'],
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Create intuitive and beautiful user experiences for our AI-powered applications and platforms.',
    requirements: ['3+ years UX/UI design', 'Figma, Adobe Creative Suite', 'User research', 'Prototyping tools'],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 text-white animate-float">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that&apos;s shaping the future of AI and technology. We&apos;re looking for passionate individuals who want to make a real impact.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Work on cutting-edge AI projects that push the boundaries of technology.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                Join a diverse team of experts working together to solve complex challenges.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Growth</h3>
              <p className="text-gray-300 leading-relaxed">
                Continuous learning opportunities and career development support.
              </p>
            </div>
          </div>

          {/* Job Openings Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Current Openings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-3xl shadow-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-yellow-400 text-sm mb-1">{job.department}</p>
                      <p className="text-gray-400 text-sm">{job.location} • {job.type}</p>
                    </div>
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details Modal */}
          {selectedJob && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                    <p className="text-yellow-400 mb-1">{selectedJob.department}</p>
                    <p className="text-gray-400">{selectedJob.location} • {selectedJob.type}</p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Job Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Requirements</h3>
                  <ul className="text-gray-300 space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Don&apos;t See the Right Fit?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;re always looking for talented individuals. Send us your resume and let&apos;s discuss opportunities.
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
