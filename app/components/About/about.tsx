import React from 'react';
import Image from 'next/image';
import {
  FaGraduationCap,
  FaFutbol,
  FaLaptopCode,
  FaUser,
} from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-teal-700">
            About Me
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Get to Know Me Better
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            A passionate developer, athlete, and lifelong learner focused on
            building impactful digital experiences and growing through every
            challenge.
          </p>
        </div>

        {/* Hero Intro */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
            <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-teal-100 shadow-2xl sm:h-[360px] sm:w-[360px]">
              <Image
                src="/picB.jpeg"
                alt="Krijal Khadka"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 300px, 360px"
                priority
              />
            </div>
          </div>

          {/* Right - Intro */}
          <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3 text-teal-600">
              <FaUser className="text-2xl" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                Introduction
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Hi, I&apos;m Krijal Khadka
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              I am a passionate{' '}
              <span className="font-semibold text-slate-800">
                Full-Stack Developer
              </span>{' '}
              with experience in building responsive, modern, and scalable web
              applications. I enjoy creating clean user interfaces and solving
              real-world problems through technology.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              I am currently pursuing a{' '}
              <span className="font-semibold text-slate-800">
                Master of Information Technology
              </span>{' '}
              at{' '}
              <span className="font-semibold text-slate-800">
                Charles Darwin University
              </span>{' '}
              in Darwin, Australia, where I continue to strengthen my technical,
              academic, and professional journey.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                React.js
              </span>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                Next.js
              </span>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                TypeScript
              </span>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                Node.js
              </span>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                Express.js
              </span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Education */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3 text-teal-600">
              <FaGraduationCap className="text-2xl" />
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="space-y-5 text-slate-600">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h4 className="font-semibold text-slate-800">
                  Master of Information Technology
                </h4>
                <p className="mt-1 text-sm leading-6">
                  Charles Darwin University, Darwin, Australia
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h4 className="font-semibold text-slate-800">
                  Bachelor of Science in Computer Science and Information
                  Technology (B.Sc. CSIT)
                </h4>
                <p className="mt-1 text-sm leading-6">
                  Bhaktapur Multiple Campus, Tribhuvan University, Nepal
                  <br />
                  2018 – 2022
                </p>
              </div>
            </div>
          </div>

          {/* More About Me */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3 text-teal-600">
              <FaLaptopCode className="text-2xl" />
              <h3 className="text-2xl font-bold text-slate-900">
                More About Me
              </h3>
            </div>

            <p className="text-slate-600 leading-8">
              Beyond technology and football, I have a strong passion for
              continuous learning, discipline, and self-improvement. I enjoy
              taking on challenges, exploring new ideas, and growing through
              both technical and personal experiences.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              I believe in{' '}
              <span className="font-semibold text-slate-800">teamwork</span>,{' '}
              <span className="font-semibold text-slate-800">dedication</span>,
              and{' '}
              <span className="font-semibold text-slate-800">
                continuous growth
              </span>{' '}
              as the key foundations of success — whether in software
              development, academics, or sports.
            </p>
          </div>
        </div>

        {/* Football / Futsal Section */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
          <div className="mb-8 flex items-center gap-3 text-teal-600">
            <FaFutbol className="text-2xl" />
            <h3 className="text-2xl font-bold text-slate-900">
              Football / Futsal - My Passion
            </h3>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="space-y-5 text-slate-600 leading-8">
              <p>
                Football has always been a major part of my life. In 2022, I had
                the honor of representing Nepal as a{' '}
                <span className="font-semibold text-slate-800">
                  National Futsal Player
                </span>
                , which remains one of the proudest achievements of my journey.
              </p>

              <p>
                I also participated in the{' '}
                <span className="font-semibold text-slate-800">
                  AFC Futsal Qualifiers in Kyrgyzstan
                </span>
                , where I had the opportunity to compete on an international
                stage and represent my country with pride.
              </p>

              <p>
                Alongside my international experience, I have also competed in
                the{' '}
                <span className="font-semibold text-slate-800">
                  Darwin Top Tier Football League
                </span>{' '}
                with{' '}
                <span className="font-semibold text-slate-800">
                  Darwin Olympic Sporting Club
                </span>
                . During the 2025 season, our team achieved remarkable success
                by winning three major trophies — the{' '}
                <span className="font-semibold text-slate-800">Glenti Cup</span>
                , the{' '}
                <span className="font-semibold text-slate-800">
                  Men's Premier League
                </span>
                , and qualifying for the{' '}
                <span className="font-semibold text-slate-800">
                  Australia Cup
                </span>
                .
              </p>

              <p>
                I was also honored by the{' '}
                <span className="font-semibold text-slate-800">
                  Chief Minister of the Northern Territory
                </span>{' '}
                as the{' '}
                <span className="font-semibold text-slate-800">
                  Player of the Season (2025)
                </span>
                , recognizing my performance and contribution throughout the
                season.
              </p>

              <p>
                The values I have learned from football — discipline,
                resilience, teamwork, and consistency — continue to shape the
                way I approach both life and software development.
              </p>
            </div>

            <div className="relative h-[280px] w-full overflow-hidden rounded-3xl shadow-xl sm:h-[360px]">
              <Image
                src="/nt.jpeg"
                alt="National Team of Nepal - Futsal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
