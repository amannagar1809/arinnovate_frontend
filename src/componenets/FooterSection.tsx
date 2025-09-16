import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 sm:py-12 lg:py-16 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">Arinnovate Solutions</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Driving innovation through cutting-edge technology solutions. Empowering businesses to thrive in the digital age.
            </p>
            <p className="text-xs">© {new Date().getFullYear()} Arinnovate Solutions. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="hover:text-yellow-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-yellow-400 transition duration-300">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-yellow-400 transition duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-yellow-400 transition duration-300">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-xs sm:text-sm">info@arinnovatesolutions.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-xs sm:text-sm">+91 89894 75790</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5" />
                <span className="text-xs sm:text-sm">Innovation Drive, vijay Nagar ,AB Road Indore, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs sm:text-sm mb-2">Subscribe to our newsletter for the latest updates.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 text-xs sm:text-sm"
                  />
                  <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-r-md hover:bg-yellow-400 transition duration-300 text-xs sm:text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm mb-2">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/arinnovate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/arinnovate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/arinnovate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            Built with innovation in mind. Transforming ideas into reality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
