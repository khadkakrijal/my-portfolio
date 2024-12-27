import React from 'react';
import {
  FaConnectdevelop,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen w-full">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center justify-center w-24 h-24 bg-teal-500 rounded-full shadow-lg">
          <FaConnectdevelop className="text-white text-6xl" />
        </div>
        {/* <h1 className="text-4xl font-bold uppercase text-gray-800 mt-4">Connect with Me</h1> */}
        <p className="text-lg text-gray-600 text-center mt-2">
          Let&apos;s build something amazing together!
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Email */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <FaEnvelope className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Email Me</h2>
          <a
            href="mailto:khadkakrijal36@gmail.com"
            className="text-lg text-gray-600 hover:text-teal-500 mt-2"
          >
            khadkakrijal36@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <FaPhone className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Call Me</h2>
          <a
            href="tel:+61425453667"
            className="text-lg text-gray-600 hover:text-teal-500 mt-2"
          >
            +61 425 453 667
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <FaLinkedin className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/krijal-khadka-b1a174278"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-teal-500 mt-2"
          >
            linkedin.com/in/krijal-khadka
          </a>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <FaFacebook className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Facebook</h2>
          <a
            href="https://www.facebook.com/stylishkrijal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-teal-500 mt-2"
          >
            facebook.com/stylishkrijal
          </a>
        </div>

        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <FaInstagram className="text-teal-500 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Instagram</h2>
          <a
            href="https://www.instagram.com/krijal_khadka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 hover:text-teal-500 mt-2"
          >
            instagram.com/krijal_khadka
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-lg">
          Thank you for visiting! Feel free to reach out for any inquiries.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
