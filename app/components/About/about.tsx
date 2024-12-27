import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen ">
      {/* Profile Picture and Introduction */}
      <div className="flex flex-col  items-center gap-8 w-full ">
        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-[200px] md:h-[200px]">
          <Image
            src="/picB.jpeg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg "
          />
        </div>

        {/* Introduction Section */}
        <div className="text-center md:text-left text-gray-700">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m Krijal Khadka
          </h1>
          <p className="text-lg leading-relaxed">
            I am a passionate{' '}
            <span className="font-semibold">Full-Stack Developer</span> and{' '}
            <span className="font-semibold">iOS Application Developer</span>. My
            expertise lies in building scalable applications and intuitive user
            interfaces. Currently, I am pursuing my studies at{' '}
            <span className="font-semibold text-gray-800">
              Charles Darwin University in Darwin, Australia
            </span>
            .
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 mb-4">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">
              Bachelor of Science in Computer Science and Information Technology
              (B.Sc. CSIT)
            </span>
            , Bhaktapur Multiple Campus, Tribhuvan University, Nepal (2018 -
            2022)
          </li>
          <li>
            Currently pursuing further studies at{' '}
            <span className="font-semibold">Charles Darwin University</span>,
            Darwin, Australia.
          </li>
        </ul>
      </div>

      {/* Soccer Passion Section */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 mb-4">
          Soccer - My Passion
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-gray-700 space-y-4">
            <p>
              Soccer has been a lifelong passion of mine. In 2022, I had the
              honor of becoming a{' '}
              <span className="font-semibold">
                National Futsal Player of Nepal
              </span>
              . This remarkable journey led me to represent my country on an
              international platform.
            </p>
            <p>
              I proudly participated in the{' '}
              <span className="font-semibold">
                AFC Futsal Qualifiers held in Kyrgyzstan
              </span>
              , an experience that allowed me to showcase my skills and
              dedication to the sport.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 h-72">
            <Image
              src="/nt.jpeg"
              alt="National Team of Nepal - Futsal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg w-full md:w-1/2 h-72"
            />
          </div>
        </div>
      </div>

      {/* Additional Skills and Interests */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 mb-4">
          More About Me
        </h2>
        <p className="text-gray-700">
          Beyond soccer and technology, I have a deep passion for learning and
          self-improvement. I thrive on taking challenges head-on, whether they
          are in the field of development or on the soccer pitch. I believe in
          teamwork, dedication, and continuous learning as key drivers of
          success.
        </p>
      </div>
    </div>
  );
};

export default About;
