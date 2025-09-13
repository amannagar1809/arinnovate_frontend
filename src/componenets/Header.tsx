'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // If on services page, scroll to contact form section
    if (pathname.startsWith('/services')) {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise navigate to contact page
      router.push('/contact');
    }
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Arinnovate Solutions Logo"
            width={32}
            height={32}
            className="h-6 sm:h-8 w-auto"
          />
          <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Arinnovate Solutions</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm font-semibold">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="hover:text-yellow-400 transition"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-400 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="hover:text-yellow-400 transition"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-yellow-400 transition"
              >
                Careers
              </Link>
            </li>
            <li>
              <a href="/contact" onClick={handleContactClick} className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden hover:text-yellow-400 transition"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>


      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 sm:px-6 py-4">
          <ul className="space-y-4 text-sm font-semibold">
            <li>
              <Link
                href="/"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
            <li>
              <a href="/contact" onClick={handleContactClick} className="block hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
            </li>
          </ul>

        </div>
      )}
    </header>
  );
}
