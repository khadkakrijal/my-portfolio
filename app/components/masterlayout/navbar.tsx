'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC<any> = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-200 h-[80px] flex justify-between items-center text-white px-[150px] shadow-md">
      <Link href="/" className="uppercase text-5xl text-black font-extrabold text-violet-950 ">K.k</Link>
      <div className="flex justify-center items-center gap-10">
        <div className="relative group">
          <Link
            href="/"
            className={`uppercase text-[15px] ${
              isActive('/')
                ? 'font-bold text-violet-950'
                : 'text-gray-500 group-hover:text-black'
            }`}
          >
            home
          </Link>
          <div
            className={`absolute bottom-[-5px] left-0 h-[2px] bg-violet-950 ${
              isActive('/') ? 'w-[100%]' : 'w-0 group-hover:w-full'
            } transition-all duration-300`}
          />
        </div>
        <div className="relative group">
          <Link
            href="/about"
            className={`uppercase text-[15px]  ${
              isActive('/about')
                ? 'font-bold text-violet-950'
                : 'text-gray-500 group-hover:text-violet-950'
            }`}
          >
            about
          </Link>
          <div
            className={`absolute bottom-[-5px] left-0 h-[2px] bg-violet-950 ${
              isActive('/about') ? 'w-[100%]' : 'w-0 group-hover:w-full'
            } transition-all duration-300`}
          />
        </div>
        <div className="relative group">
          <Link
            href="/project"
            className={`uppercase text-[15px] ${
              isActive('/project')
                ? 'font-bold text-violet-950'
                : 'text-gray-500 group-hover:text-violet-950'
            }`}
          >
            projects
          </Link>
          <div
            className={`absolute bottom-[-5px] left-0 h-[2px] bg-violet-950 ${
              isActive('/project') ? 'w-[100%]' : 'w-0 group-hover:w-full'
            } transition-all duration-300`}
          />
        </div>
        <div className="relative group">
          <Link
            href="/contact"
            className={`uppercase text-[15px]  ${
              isActive('/contact')
                ? 'font-bold text-violet-950'
                : 'text-gray-500 group-hover:text-violet-950'
            }`}
          >
            contact
          </Link>
          <div
            className={`absolute bottom-[-5px] left-0 h-[2px] bg-violet-950 ${
              isActive('/contact') ? 'w-[100%]' : 'w-0 group-hover:w-full'
            } transition-all duration-300`}
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-3">
        <Link
          href="https://www.linkedin.com/in/krijal-khadka-b1a174278"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-l hover:scale-150 duration-300 "
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com/stylishkrijal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-l hover:scale-150 duration-300"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/krijal_khadka/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-l hover:scale-150 duration-300"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
