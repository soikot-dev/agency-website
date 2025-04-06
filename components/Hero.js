"use client";
import { useState } from "react";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      className={`relative ${darkMode ? "bg-gray-900" : "bg-black"} text-white py-12 sm:py-32 lg:py-20 overflow-hidden transition-all`}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12">
          {/* Left Content */}
          <div className="relative text-left">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[230px] font-extrabold leading-tight relative">
              <span className="relative inline-block">
                Digital
                {/* Positioned Image (Adjusted for Mobile) */}
                <div className="absolute -right-[20rem] sm:-right-[24rem] lg:-right-[32rem] top-1/2 -translate-y-1/2 w-[280px] sm:w-[356px] lg:w-[456px] h-[120px] sm:h-[140px] lg:h-[168px] rounded-full overflow-hidden hidden sm:block">
                  <img
                    src="/dm_banner.webp" // Use your image path here
                    alt="Digital Marketing Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </span>
              <br /> 
              <span className="relative inline-block sm:ml-16 md:ml-24 lg:ml-32 mt-10">
                Marketing
                <p className="mt-6 font-normal text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl py-10  w-[1050px]">
                  Welcome to our digital agency! We specialize in helping businesses like yours succeed online. 
                  From website design and development to digital marketing and advertising, we have the tools.
                </p>
                {/* Circular Button (Adjusted for Mobile) */}
                <button className="absolute -left-20 sm:-left-28 md:-left-36 lg:-left-40 top-[120px] -translate-y-1/2 w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 flex items-center justify-center rounded-full border border-white text-sm sm:text-lg md:text-xl font-semibold transition-all hover:bg-white hover:text-black">
                  Our Projects
                </button>
              </span>
            </h1>
          </div>
        </div>

        {/* Social Media Floating Icons */}
        <div className="absolute sm:right-10 top-[285px] transform -translate-y-1/2 flex flex-col items-center space-y-4 sm:space-y-6 hidden lg:flex">
          <a href="#" className="text-gray-400 hover:text-white text-lg sm:text-xl transition-transform hover:scale-110">f</a>
          <a href="#" className="text-gray-400 hover:text-white text-lg sm:text-xl transition-transform hover:scale-110">in</a>
          <div className="w-px h-8 sm:h-12 bg-gray-600"></div>
          <p className="text-gray-400 text-xs tracking-widest rotate-90 py-[20px]">FOLLOW US</p>
        </div>

        {/* Dark Mode Toggle (Fixed) */}
        <button 
          className="fixed right-4 top-[400px] p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition z-50"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

    {/* Video Section (Full Width) */}
    <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <div className="w-full max-w-full overflow-hidden rounded-lg shadow-lg">
            <video className="w-full h-auto" controls>
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
