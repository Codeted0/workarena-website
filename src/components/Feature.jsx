import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const features = [
    {
      title: "Task Management",
      desc: "Organize your tasks and meet deadlines efficiently.",
      icon: "/task.png",
    },
    {
      title: "Progress Tracking",
      desc: "Monitor your growth and see your productivity shine.",
      icon: "/dailyprogress.png",
    },
    {
      title: "Point System & Rewards",
      desc: "Earn points for every completed task and boost motivation.",
      icon: "/progress-icon.png",
    },
    {
      title: "Calendar Integration",
      desc: "Schedule and visualize tasks with an easy-to-use calendar view.",
      icon: "/calendar.png",
    },
    {
      title: "Pinned Tasks & Subtasks",
      desc: "Break goals into manageable subtasks and pin top priorities.",
      icon: "/pin.png",
    },
    {
      title: "Dark Mode",
      desc: "Switch between light and dark themes for better focus and comfort.",
      icon: "/darkmode.png",
    },
    {
      title: "Smart Notifications",
      desc: "Get timely alerts so you never miss an update or deadline.",
      icon: "/notification.png",
    },
    {
      title: "Share Your Progress",
      desc: "Showcase your achievements and progress on social platforms.",
      icon: "/share.png",
    },
  ];
  

export default function Feature() {
  return (
    <section id="features" className="py-16 bg-gradient-to-br overflow-hidden from-purple-50 via-pink-50 to-blue-50 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Key Features</h2>

      <Swiper
        modules={[Autoplay]}  // <-- This is important!
        slidesPerView={3}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl h-60 pt-60 mx-auto"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-xl p-6 hover:scale-105 transition-transform duration-500">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
