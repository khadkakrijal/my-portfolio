'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import MasterLayout from './components/masterlayout/master';

export default function Home() {
  return (
    <MasterLayout>
      <section className="relative h-full min-h-[calc(100svh-80px)] w-full overflow-y-auto md:overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_28%),linear-gradient(to_bottom_right,#020617,#0f172a,#111827)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl md:h-[520px] md:w-[520px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 py-6 sm:px-6 md:px-10 md:py-0">
          <div className="grid w-full grid-cols-1 items-center gap-8 md:h-full md:grid-cols-2 md:gap-12">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 mt-2 inline-flex w-fit rounded-full border border-cyan-400/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur-xl">
                Portfolio • Full Stack Developer
              </div>

              <h1 className="leading-[0.92]">
                <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-[clamp(2.2rem,7vw,5.4rem)] font-black uppercase tracking-tight text-transparent">
                  Krijal
                </span>
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-[clamp(2.2rem,7vw,5.4rem)] font-black uppercase tracking-tight text-transparent">
                  Khadka
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
                Full-stack developer building modern digital experiences with
                React.js, Next.js, Node.js, and Express.js.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase sm:text-sm">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/90">
                  React.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/90">
                  Next.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/90">
                  Node.js
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/90">
                  Express.js
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 text-sm font-medium uppercase text-white/90 sm:text-base">
                <span>National Futsal Player (2022)</span>
                <Image
                  src="/nepal logo.jpg"
                  alt="Nepal logo"
                  width={24}
                  height={24}
                  className="h-5 w-5 rounded-sm object-cover sm:h-6 sm:w-6"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="group inline-flex h-11 items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-6 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-500/25 sm:h-12 sm:px-7"
                >
                  About Me
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="/Krijal_I.pdf"
                  download="Krijal_Khadka_Resume"
                  className="group inline-flex h-11 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/20 sm:h-12 sm:px-7"
                >
                  Resume
                  <FaDownload className="transition-transform duration-300 group-hover:translate-y-[1px]" />
                </a>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative rounded-[28px] border border-white/15 bg-white/10 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                  <div className="overflow-hidden rounded-[22px] border border-white/10">
                    <Image
                      src="/picC.jpeg"
                      alt="Profile"
                      width={500}
                      height={620}
                      priority
                      className="h-[260px] w-[260px] object-cover sm:h-[320px] sm:w-[320px] md:h-[58vh] md:w-[min(30vw,420px)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MasterLayout>
  );
}
