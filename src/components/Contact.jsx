import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="w-full max-md:py-20 flex flex-col justify-center items-center h-screen max-md:h-[100%] bg-gray-950 text-white">
      <h1 className="text-5xl font-bold mb-8">Get In Touch</h1>
      <div className="w-[75%] flex flex-col lg:flex-row items-center justify-center gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">DON'T BE SHY!</h2>
          <p className="max-w-md text-left">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <FaFacebook className="text-blue-500 text-2xl" />
            <div>
              <p className="text-lg font-semibold">MAIL ME</p>
              <p className="text-sm">rajurao1106@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <FaFacebook className="text-blue-500 text-2xl" />
            <div>
              <p className="text-lg font-semibold">MAIL ME</p>
              <p className="text-sm">rajurao1106@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5 text-3xl mt-4">
            <FaLinkedin className="hover:text-blue-600" />
            <FaGithub className="hover:text-gray-400" />
            <FaInstagram className="hover:text-pink-500" />
            <FaFacebook className="hover:text-blue-500" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-auto items-center">
          <div className="flex flex-col lg:flex-row gap-5 mb-5 w-full lg:w-auto">
            <input type="text" placeholder="Your Name" className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full lg:w-52" />
            <input type="email" placeholder="Your Email" className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full lg:w-52" />
            <input type="text" placeholder="Your Subject" className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full lg:w-52" />
          
          </div>
          <textarea placeholder="Your Message" className="p-2 rounded bg-gray-800 text-white outline-none border border-gray-600 w-full h-32 mb-5"></textarea>
          <button className="bg-red-500 w-full lg:w-60 p-2 rounded-full hover:bg-red-600 transition duration-300">Send Message</button>
        </div>
      </div>
    </section>
  );
}
