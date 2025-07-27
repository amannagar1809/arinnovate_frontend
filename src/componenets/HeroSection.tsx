export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[85vh] overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-20 bg-black/40 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Empowering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We build scalable, secure, and innovative software solutions for your business growth.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}