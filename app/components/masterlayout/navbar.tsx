'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC<any> = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-200 shadow-lg'
          : 'bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200'
      }`}
    >
      <div className="h-[80px] flex justify-between items-center text-white px-[150px]">
        {/* Logo */}
        <Link
          href="/"
          className="uppercase text-5xl text-black font-extrabold text-violet-950"
        >
          K.k
        </Link>

        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-10">
          {['/', '/project', '/about', '/connect'].map((path, index) => (
            <div className="relative group" key={index}>
              <Link
                href={path}
                className={`uppercase text-[15px] ${
                  isActive(path)
                    ? 'font-bold text-violet-950'
                    : 'text-gray-500 group-hover:text-black'
                }`}
              >
                {path.replace('/', '') || 'home'}
              </Link>
              <div
                className={`absolute bottom-[-5px] left-0 h-[2px] bg-violet-950 ${
                  isActive(path) ? 'w-[100%]' : 'w-0 group-hover:w-full'
                } transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-3">
          <Link
            href="https://www.linkedin.com/in/krijal-khadka-b1a174278"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:scale-150 duration-300 text-blue-900 hover:text-violet-950"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/stylishkrijal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:scale-150 duration-300 hover:text-violet-950 text-blue-800"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/krijal_khadka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl hover:scale-150 duration-300 text-red-800 hover:text-violet-950"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
