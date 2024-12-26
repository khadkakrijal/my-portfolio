import React from "react";
import { FaArrowDown } from "react-icons/fa";

const AnimatedButton = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black space-y-4">
      {/* Animated Arrow */}
      <div className="relative flex flex-col items-center">
        <FaArrowDown className="text-white text-4xl animate-bounce" />
      </div>

      {/* More Info Button */}
      <a
        href="#"
        className="relative flex items-center justify-center w-64 h-16 text-lg font-semibold text-white bg-blue-600 rounded-full overflow-hidden group"
      >
        <span className="z-10">MORE INFO</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      </a>
    </div>
  );
};

export default AnimatedButton;
