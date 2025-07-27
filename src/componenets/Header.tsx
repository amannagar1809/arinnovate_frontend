import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Company Logo */}
        <div className="flex items-center">
          <Image src="/logo1.png" alt="Company Logo" width={48} height={48} />
          <span className="ml-2 text-xl font-bold text-blue-700">Arinnovate Solutions</span>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-700 focus:outline-none">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>
    </header>
  );
}