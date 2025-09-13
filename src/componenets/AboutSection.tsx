import React from 'react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 drop-shadow-lg">About Arinnovate Solutions</h2>
        <p className="max-w-3xl text-base sm:text-lg mb-4 sm:mb-6 drop-shadow-md mx-auto">
          Arinnovate Solutions is committed to building a better working world through innovative technology and digital transformation. We partner with businesses to create scalable, secure, and sustainable solutions that drive growth and efficiency.
        </p>
        <p className="max-w-3xl text-base sm:text-lg drop-shadow-md mx-auto">
          Our team of experts brings deep industry knowledge and cutting-edge technology expertise to help you navigate complex challenges and seize new opportunities.
        </p>
      </div>
    </section>
  );
}
