import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col gap-16 px-4">

        {/* First Row: Image Left - Text Right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src="/about1.png"
              alt="WorkArena Illustration"
              className=" ml-40 w-80"

            />
          </div>
          <div className="w-full pr-20 md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What is WorkArena?</h2>
            <p className="text-lg text-gray-600">
              WorkArena is your all-in-one productivity partner. Manage tasks, track goals, and boost your growth with progress-based rewards. Stay focused, stay driven, and enjoy organized success!
            </p>
            <p className="text-lg text-gray-600">
              WorkArena turns your workflow into a gamified journey. Earn points for completing tasks, collaborate with your team in real-time, get smart notifications, and share your progress on social platforms!
            </p>
          </div>
        </div>

        {/* Second Row: Text Left - Image Right */}
        {/* <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src="/how-workarena-helps.png"
              alt="How WorkArena Helps"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">How does WorkArena help?</h3>
            <p className="text-lg text-gray-600">
              WorkArena turns your workflow into a gamified journey. Earn points for completing tasks, collaborate with your team in real-time, get smart notifications, and share your progress on social platforms!
            </p>
          </div>
        </div> */}

      </div>
    </section>
  );
}
