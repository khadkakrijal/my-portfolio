import React from 'react';
import Navbar from './navbar';
import { FaFacebookMessenger } from 'react-icons/fa';

interface MasterLayoutProps {
  children: React.ReactNode;
}


const MasterLayout: React.FC<MasterLayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-full  min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex mt-[80px]">{children}</main>
      <div className=" hidden fixed bottom-5 right-2 z-50 md:flex items-center gap-2 bg-teal-600 text-white py-3 md:px-5 px-3 rounded-full shadow-lg hover:bg-teal-700 cursor-pointer transition duration-300">
        <FaFacebookMessenger className="text-2xl" />
        <a
          href="https://m.me/stylishkrijal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium "
        >
          Chat with Me
        </a>
      </div>
    </div>
  );
};

export default MasterLayout;
