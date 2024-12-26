import Link from 'next/link';
import MasterLayout from './components/masterlayout/master';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <MasterLayout>
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 overflow-hidden">
        <div className="w-full h-full flex">
          {/* Left Section */}
          <div className="w-1/2 flex flex-col gap-5 justify-center items-center text-white p-6">
            <h1 className="text-4xl font-extrabold uppercase">Krijal Khadka</h1>
            <div className="text-center">
              <h2 className="text-lg font-semibold uppercase">
                Full-Stack Developer{' '}
                <span className="text-sm font-light">
                  (React.js, Next.js, Node.js)
                </span>
              </h2>
              <h3 className="text-lg font-medium uppercase flex justify-center items-center gap-4">
                National Futsal Player{' '}
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
              className="relative flex items-center gap-3 px-6 py-3 text-lg font-bold uppercase text-white bg-blue-600 rounded-full overflow-hidden group"
            >
              <FaArrowRight
                className="text-white text-xl animate-bounce-horizontal transition-transform duration-500 group-hover:translate-x-2"
              />
              About Me
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="bg-white h-[450px] w-[450px] rounded-full flex justify-center items-center overflow-hidden">
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
