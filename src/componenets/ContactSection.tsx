export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight">
          Contact Us
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              Have a project in mind or want to learn more about our services? Fill out the form or reach us directly!
            </p>
            <ul className="mb-4 text-gray-600">
              <li>
                <span className="font-semibold text-blue-700">Email:</span> info@arinnovate.com
              </li>
              <li>
                <span className="font-semibold text-blue-700">Phone:</span> +91 708989475790
              </li>
              <li>
                <span className="font-semibold text-blue-700">Address:</span> 123 Innovation Drive, Tech City Indore, Madhya Pradesh, India [452001]
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <form className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}