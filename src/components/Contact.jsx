import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importing icons

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-semibold text-blue-600">Let’s Work Together</h3>
        <p className="mt-4 text-lg text-gray-700">
          I’m always open to discussing new opportunities, creative ideas, or partnerships. Feel free to reach out at:
        </p>
        <p className="mt-4 text-xl font-bold text-gray-900">rajurao1106@gmail.com</p>

        <div className="flex justify-center space-x-6 mt-6">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl mr-2" />
            Connect on LinkedIn
          </a>

          <a 
            href="https://github.com/yourprofile" 
            className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl mr-2" />
            Check out GitHub
          </a>

          <a 
            href="https://instagram.com/yourprofile" 
            className="flex items-center px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl mr-2" />
            Follow on Instagram
          </a>

          <a 
            href="https://facebook.com/yourprofile" 
            className="flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl mr-2" />
            Like on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
