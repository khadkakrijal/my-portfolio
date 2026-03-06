import React from "react";
import Navbar from "./navbar";
import { FaFacebookMessenger } from "react-icons/fa";

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 h-[calc(100vh-80px)] mt-[80px] overflow-hidden">
        {children}
      </main>

      {/* Messenger */}
      <div className="hidden fixed bottom-5 right-2 z-50 md:flex items-center gap-2 bg-teal-600 text-white py-3 md:px-5 px-3 rounded-full shadow-lg hover:bg-teal-700 cursor-pointer transition duration-300">
        <FaFacebookMessenger className="text-2xl" />
        <a
          href="https://m.me/stylishkrijal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium"
        >
          Chat with Me
        </a>
      </div>
    </div>
  );
};

export default MasterLayout;