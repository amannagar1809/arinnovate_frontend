export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image or Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="/logo2.jpg"
            alt="About Arinnovate Solutions"
            className="w-80 h-80 object-contain rounded-2xl shadow-lg"
          />
        </div>
        {/* About Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
            About Arinnovate Solutions
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-blue-700">Arinnovate Solutions</span> is a leading software company dedicated to empowering businesses through innovative technology. With a passionate team of experts, we deliver end-to-end digital solutions that drive growth, efficiency, and transformation.
          </p>
          <ul className="mb-4 space-y-2">
            <li>
              <span className="font-semibold text-blue-700">• Our Mission:</span> To enable organizations to achieve their full potential by leveraging cutting-edge software, AI, and digital strategies.
            </li>
            <li>
              <span className="font-semibold text-blue-700">• Our Expertise:</span> From custom software development and cloud solutions to AI, cybersecurity, and digital transformation, we cover the full spectrum of IT services.
            </li>
            <li>
              <span className="font-semibold text-blue-700">• Why Choose Us?</span> We combine technical excellence, creative design, and a client-centric approach to deliver solutions that are robust, scalable, and future-ready.
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full">10+ Years Experienced Team</span>
            <span className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-full">Certified Professionals</span>
            <span className="inline-block bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full">Global Clients</span>
            <span className="inline-block bg-yellow-100 text-yellow-700 font-semibold px-4 py-2 rounded-full">Innovation Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}