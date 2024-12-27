import React from 'react';
const Projects: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen ">
      {/* Frontend Projects */}
      <section className="mb-16">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 border-b-4 border-teal-500">
          Frontend Development
        </h2>
        <ul className="space-y-6 text-gray-700">
          <li>
            <strong>Needy Store Online:</strong>
            <a
              href="https://needystoreonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-2"
            >
              Visit Project
            </a>
            <p>
              Built an e-commerce platform with React.js and Next.js,
              incorporating APIs for product management and payment processing.
            </p>
          </li>
          <li>
            <strong>RECS HOMES:</strong>
            <a
              href="https://recshomes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-2"
            >
              Visit Project
            </a>
            <p>
              Created a real estate website with a responsive design using
              Next.js and Tailwind CSS. Integrated APIs for property listings
              and user interactions, ensuring an intuitive browsing experience.
            </p>
          </li>
          <li>
            <strong>KPG International:</strong>
            <a
              href="https://kpg.zerologicspace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-2"
            >
              Visit Project
            </a>
            <p>
              Developed a comprehensive website using React.js and Next.js for
              KPG International, featuring a responsive layout and integrated
              APIs for dynamic content.
            </p>
          </li>
          <li>
            <strong>Squeaky Klin:</strong>
            <a
              href="https://squeakyklin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-2"
            >
              Visit Project
            </a>
            <p>
              Designed and developed a responsive appointment management
              platform using React.js and Tailwind CSS. Integrated APIs for
              appointment scheduling and notifications.
            </p>
          </li>
          <li>
            <strong>Peace Destination Nepal:</strong>
            <a
              href="https://peacedestinationnepal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-2"
            >
              Visit Project
            </a>
            <p>
              Created a travel and tourism website using React.js and Next.js,
              featuring a responsive design and integrated APIs for booking and
              information management.
            </p>
          </li>
          <li>
            <strong>PVE Network:</strong>
            <p>
              Developed a network management platform with a responsive design
              using React.js and Next.js. Integrated APIs for network monitoring
              and management, providing users with real-time data and insights.
            </p>
          </li>
          <li>
            <strong>Buy Me Smokes:</strong>
            <a
              href="https://www.buymesmokes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline ml-2"
            >
              Visit Project
            </a>
            <p>
              Designed and developed a user-friendly interface using React.js
              and Tailwind CSS. Implemented dynamic components for enhanced user
              experience.
            </p>
          </li>
        </ul>
      </section>

      {/* Backend Projects */}
      <section className="mb-16">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 border-b-4 border-teal-500">
          Backend Development
        </h2>
        <ul className="space-y-6 text-gray-700">
          <li>
            <strong>Squeaky Klin:</strong>
            <p>
              Built with Node.js and Express.js, integrating Google APIs for
              synchronization with Google Calendar. Added Twilio integration to
              send SMS notifications to clients for appointment confirmations
              and reminders.
            </p>
          </li>
          <li>
            <strong>Needy Store Online:</strong>
            <p>
              Utilized Supabase for backend services, including database
              management and authentication to support the e-commerce platform&apos;s
              functionalities.
            </p>
          </li>
          <li>
            <strong>KPG International:</strong>
            <p>
              Used MongoDB for backend data management, supporting a
              comprehensive website with dynamic content and user interactions.
            </p>
          </li>
          <li>
            <strong>RECS HOMES:</strong>
            <p>
              Developed backend services using PostgreSQL, Node.js, and
              Express.js to support property management and interactions with a
              scalable database.
            </p>
          </li>
        </ul>
      </section>

      {/* App Development Projects */}
      <section>
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6 border-b-4 border-teal-500">
          App Development
        </h2>
        <ul className="space-y-6 text-gray-700">
          <li>
            <strong>PrabhuPay Wallet:</strong>
            <p>
              Upgraded React libraries and addressed app crashing issues.
              Implemented numerous UI changes to enhance user experience and
              functionality for this iOS application.
            </p>
          </li>
          <li>
            <strong>Buy and Stamp (BNS):</strong>
            <p>
              Developed numerous components and completed the UI design. Created
              and implemented the core API for seamless functionality and
              integration.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
