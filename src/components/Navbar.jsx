import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Logo.png" alt="Workarena Logo" className="h-8 mr-2" />
          <span className="text-white text-2xl font-bold">Workarena</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-white hover:text-purple-300 transition duration-300">Home</a>
          <a href="#features" className="text-white hover:text-purple-300 transition duration-300">Features</a>
          <a href="#about" className="text-white hover:text-purple-300 transition duration-300">About</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full shadow-lg transition-all">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
//  export default Navbar;