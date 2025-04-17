import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-br overflow-hidden from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Contact Info */}
        <div className="md:w-1/3 w-full overflow-hidden bg-[#5A54B4] text-white p-8 relative">
          {/* Decorative Circle */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 opacity-30 rounded-full translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-300 opacity-15 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <h2 className="text-2xl font-bold mb-3">
            Let’s Connect!
            <br /> With WorkArena
          </h2>
          <p className="text-sm w-60 mt-10 mb-6">
            Have an idea or feedback? <br/>Fill out the form — we’d love to hear from
            you!
          </p>

          {/* Clean Right-Pointing Arrow */}
          <svg
            className="w-12 h-12 absolute left-70 top-40 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Right Contact Form */}
        <div className="md:w-2/3 w-full overflow-hidden bg-white p-8">
          <h2 className="text-2xl font-bold text-[#5A54B4] mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full md:w-1/2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 p-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 p-2"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 p-2"
            />
            <textarea
              rows="2"
              placeholder="Write here your message"
              className="w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 p-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#5A54B4] hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
