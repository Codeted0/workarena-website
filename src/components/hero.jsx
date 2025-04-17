import React from "react";
import { Link } from 'react-router-dom';
export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-purple-700 via-indigo-300 to-blue-400 min-h-screen flex items-center justify-between overflow-hidden animate-gradient px-6 md:px-12">
      {/* Left Content */}
      <div className="relative z-10 text-left max-w-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Boost Your Productivity with WorkArena
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
        Track your tasks, earn points, and stay motivated to complete your goals!
        </p>

        <div className="mt-8 flex justify-start gap-4">
          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all btn-bounce">
            Get Started
          </button> */}
          <Link
              to="https://workarena-app.vercel.app/login"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all btn-bounce"
            >
              Get Started
            </Link>
          {/* <button className="border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-purple-700 transition-all btn-bounce">
            Try Free Trial
          </button> */}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 mt-10 md:mt-0 w-full md:w-1/2 flex justify-end">
        {/* <div className="inline-block bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-2xl"> */}
        {/* <div className=" backdrop-blur-lg p-6 rounded-2xl shadow-2xl"> */}
          <img
            src="/img.png"
            alt="App UI Mockup"
            className="mt-20"
          />
        {/* </div> */}
      </div>

      {/* Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,101.3C160,139,320,213,480,218.7C640,224,800,160,960,122.7C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
