import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import call from '../assets/phone-call.png'
import open_mail from '../assets/Asidebar/open-mail.png'

export default function Contact() {
  return (
    <section id="contact" className="w-full max-md:py-20 flex flex-col justify-center items-center h-screen max-md:h-[100%] bg-gray-950 text-white">
      <h1 className="w-full text-5xl font-extrabold mb-10 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">GET IN<p className='ml-2 text-yellow-400'>TOUCH</p> <p className='absolute text-8xl max-md:text-6xl opacity-10'>CONTACT</p></h1>
      
      <div className="w-[75%] flex flex-col lg:flex-row items-center justify-center gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">DON'T BE SHY!</h2>
          <p className="max-w-md text-left">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex items-center gap-4 mt-4">
          <img src={open_mail} className="text-blue-500 text-2xl w-8" />
            <div>
              <p className="text-lg font-semibold">MAIL ME</p>
              <p className="text-sm">rajurao1106@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <img src={call} className="text-blue-500 text-2xl w-8" />
            <div>
              <p className="text-lg font-semibold">CALL ME</p>
              <p className="text-sm">+91 7470578448</p>
            </div>
          </div>
          <div className="flex gap-5 text-3xl mt-4">
            <a href="https://www.linkedin.com/in/raju-rao/"><FaLinkedin className="hover:text-blue-600" /></a>
            <a href="https://github.com/rajurao1106"><FaGithub className="hover:text-gray-400" /></a>          
            <a href="https://www.instagram.com/rajurao1107/"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="https://www.facebook.com/profile.php?id=100035409559017"><FaFacebook className="hover:text-blue-500" /></a>        
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-auto max-md:items-center">
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
