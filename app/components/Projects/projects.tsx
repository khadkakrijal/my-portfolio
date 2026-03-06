import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  title: string;
  link?: string;
  description: string;
  stack?: string[];
};

const frontendProjects: Project[] = [
  {
    title: 'Chillax FC',
    link: 'https://chillaxfc.vercel.app/',
    description:
      'Designed and developed a modern soccer club website with a responsive and visually engaging interface. Built team, player, gallery, and branding-focused sections with smooth interactions and a clean user experience.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Digital Library and Resource Center (DLRC)',
    link: 'https://digitallibrary.fwd.gov.np/',
    description:
      'Developed a responsive user interface using Next.js and Tailwind CSS. Integrated APIs to enable dynamic content management and enhanced functionality for the digital library system.',
    stack: ['Next.js', 'Tailwind CSS', 'API Integration'],
  },
  {
    title: 'Needy Store Online',
    link: 'https://needystoreonline.com/',
    description:
      'Built an e-commerce platform with React.js and Next.js, incorporating APIs for product management and payment processing.',
    stack: ['React.js', 'Next.js', 'API Integration'],
  },
  {
    title: 'RECS HOMES',
    link: 'https://recshomes.com/',
    description:
      'Created a real estate website with a responsive design using Next.js and Tailwind CSS. Integrated APIs for property listings and user interactions, ensuring an intuitive browsing experience.',
    stack: ['Next.js', 'Tailwind CSS', 'API Integration'],
  },
  {
    title: 'KPG International',
    link: 'https://kpg.zerologicspace.com/',
    description:
      'Developed a comprehensive website using React.js and Next.js, featuring a responsive layout and integrated APIs for dynamic content.',
    stack: ['React.js', 'Next.js', 'Responsive UI'],
  },
  {
    title: 'Squeaky Klin',
    link: 'https://squeakyklin.com/',
    description:
      'Designed and developed a responsive appointment management platform using React.js and Tailwind CSS. Integrated APIs for appointment scheduling and notifications.',
    stack: ['React.js', 'Tailwind CSS', 'API Integration'],
  },
  {
    title: 'Peace Destination Nepal',
    link: 'https://peacedestinationnepal.com/',
    description:
      'Created a travel and tourism website using React.js and Next.js, featuring a responsive design and integrated APIs for booking and information management.',
    stack: ['React.js', 'Next.js', 'Responsive UI'],
  },
  {
    title: 'PVE Network',
    description:
      'Developed a network management platform with a responsive design using React.js and Next.js. Integrated APIs for network monitoring and management, providing users with real-time data and insights.',
    stack: ['React.js', 'Next.js', 'API Integration'],
  },
  {
    title: 'Buy Me Smokes',
    link: 'https://www.buymesmokes.com/',
    description:
      'Designed and developed a user-friendly interface using React.js and Tailwind CSS. Implemented dynamic components for enhanced user experience.',
    stack: ['React.js', 'Tailwind CSS'],
  },
];

const backendProjects: Project[] = [
  {
    title: 'Squeaky Klin',
    description:
      'Built with Node.js and Express.js, integrating Google APIs for synchronization with Google Calendar. Added Twilio integration to send SMS notifications to clients for appointment confirmations and reminders.',
    stack: ['Node.js', 'Express.js', 'Google API', 'Twilio'],
  },
  {
    title: 'Needy Store Online',
    description:
      'Utilized Supabase for backend services, including database management and authentication to support the e-commerce platform functionalities.',
    stack: ['Supabase', 'Database', 'Authentication'],
  },
  {
    title: 'KPG International',
    description:
      'Used MongoDB for backend data management, supporting a comprehensive website with dynamic content and user interactions.',
    stack: ['MongoDB', 'Backend Data Management'],
  },
  {
    title: 'RECS HOMES',
    description:
      'Developed backend services using PostgreSQL, Node.js, and Express.js to support property management and interactions with a scalable database.',
    stack: ['PostgreSQL', 'Node.js', 'Express.js'],
  },
];

const appProjects: Project[] = [
  {
    title: 'PrabhuPay Wallet',
    description:
      'Upgraded React libraries and addressed app crashing issues. Implemented numerous UI changes to enhance user experience and functionality for this iOS application.',
    stack: ['React Native', 'iOS', 'UI Improvements'],
  },
  {
    title: 'Buy and Stamp (BNS)',
    description:
      'Developed numerous components and completed the UI design. Created and implemented the core API for seamless functionality and integration.',
    stack: ['App UI', 'Components', 'API Development'],
  },
];

const Section = ({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) => (
  <section className="mb-16">
    <div className="mb-8 flex items-center gap-4">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      <h2 className="shrink-0 text-center text-2xl font-bold tracking-wide text-slate-800 md:text-3xl">
        {title}
      </h2>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={`${project.title}-${index}`}
          className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
              >
                Visit <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>

          <p className="mb-4 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          {project.stack && (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            A collection of frontend, backend, and app development projects I
            have worked on using modern technologies and scalable solutions.
          </p>
        </div>

        <Section title="Frontend Development" projects={frontendProjects} />
        <Section title="Backend Development" projects={backendProjects} />
        <Section title="App Development" projects={appProjects} />
      </div>
    </div>
  );
};

export default Projects;