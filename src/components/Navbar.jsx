import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md py-4 fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center px-6 w-[80%]">
        {/* Logo */}
        <a href="#home" className=" text-5xl font-Whisper text-white">
          Raju Rao
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-white mt-4 md:mt-0">
            <li><a href="#hero" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-300 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
