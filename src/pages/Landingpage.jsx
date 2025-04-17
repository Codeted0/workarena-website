import React from 'react';
import HeroSection from "../components/hero";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import AboutSection from '../components/Aboutsection';
import ContactSection from '../components/Contact';

function LandingPage() {
  return (
    <div className="font-sans overflow-y-scroll custom-scroll text-gray-900">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Feature />

      {/* About Section */}
      <AboutSection/>

      <ContactSection/>

      {/* Footer Section */}
      <footer className=" bg-[#5A54B4]  text-white py-10">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    
    {/* Logo & Tagline */}
    <div className="mb-6 md:mb-0 text-center md:text-left">
      <img src="/Logo.png" alt="WorkArena Logo" className="h-10 mx-auto md:mx-0 mb-2" />
      <p className="text-sm">Your Productivity, Our Priority.</p>
    </div>

    {/* Quick Links */}
    <div className="flex space-x-8 text-sm mb-6 md:mb-0">
      <a href="#features" className="hover:underline">Features</a>
      <a href="#about" className="hover:underline">About</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </div>

    {/* Social Links */}
    <div className="flex space-x-4 text-xl">
      <a href="#" className="hover:text-gray-300">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#" className="hover:text-gray-300">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-gray-300">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  </div>

  <div className="text-center text-xs mt-8 border-t border-white/20 pt-4">
    © {new Date().getFullYear()} WorkArena — All Rights Reserved.
  </div>
</footer>

    </div>
  );
}

export default LandingPage;
