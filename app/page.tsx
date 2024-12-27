'use client';
import Link from 'next/link';
import MasterLayout from './components/masterlayout/master';
import Image from 'next/image';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <MasterLayout>
      <div className="w-full md:h-full md:-mt-0 -mt-[90px] flex items-center justify-center bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 overflow-hidden">
        <div className="w-full md:h-full md:flex md:flex-row flex flex-col-reverse ">
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col gap-5 justify-center items-center text-white md:p-6 relative">
            <h1 className="text-4xl font-extrabold uppercase wave-gradient-animation">
              Krijal Khadka
            </h1>
            <style jsx>{`
              @keyframes wave {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }

              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                100% {
                  background-position: 100% 50%;
                }
              }

              .wave-gradient-animation {
                display: inline-block;
                animation:
                  wave 2s infinite ease-in-out,
                  gradient 5s infinite linear;
                background: linear-gradient(90deg, white, teal, cyan, white);
                background-size: 300% 300%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `}</style>
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold uppercase md:flex md:flex-row flex flex-col justify-center items-center md:gap-2 gap-1">
                Full-Stack Developer{' '}
                <span className="text-sm font-light">
                  (React.js, Next.js, Node.js, Express.js)
                </span>
              </h2>
              <h3 className="text-lg font-medium uppercase flex justify-center items-center gap-3">
                National Futsal Player (2022){' '}
                <Image
                  src="/nepal logo.jpg"
                  alt="logo"
                  width={20}
                  height={10}
                  className="object-cover"
                />
              </h3>
            </div>

            {/* About Me Button */}
            <Link
              href="/about"
              className="relative group flex justify-center items-center md:ml-0 ml-7 gap-3 w-[230px] py-3 text-l font-bold uppercase text-white bg-blue-600 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
              <span className="relative z-10 uppercase">About Me</span>
              <FaArrowRight className="relative z-10 text-white text-xl transition-transform duration-500 group-hover:translate-x-2" />
            </Link>

            {/* Download Resume Button */}

            <div className="absolute fixed md:block  md:bottom-5 md:-bottom-0 -bottom-20 pb-2 md:flex md:flex-col flex flex-row justify-center items-center md:gap-o gap-2">
              <div className="relative flex flex-col items-center">
                <FaArrowDown className="text-white md:text-4xl text-2xl animate-bounce" />
              </div>
              <a
                href="/Krijal_resume.pdf"
  download="Krijal_Khadka_Resume"
                className="relative flex items-center justify-center w-[230px] py-3 text-l font-semibold text-white bg-blue-600 rounded-full overflow-hidden group"
              >
                <span className="z-10 uppercase"> Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex justify-center items-center  md:p-0 p-6">
            <div className="bg-white md:h-[450px] md:w-[450px] rounded-full flex justify-center items-center overflow-hidden">
              <Image
                src="/picC.jpeg"
                alt="Profile"
                width={450}
                height={450}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}
