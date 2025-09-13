import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* Fallback video sources can be added here */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Building a better working world
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-6 sm:mb-8 drop-shadow-md">
          At Arinnovate Solutions, we help businesses transform and grow with innovative technology solutions.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-105 text-sm sm:text-base"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
