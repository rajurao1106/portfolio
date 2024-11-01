import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/Asidebar/home.png';
import about from '../assets/Asidebar/user.png';
import portfolio from '../assets/Asidebar/portfolio.png';
import contact from '../assets/Asidebar/open-mail.png';
import blog from '../assets/Asidebar/blog.png';

export default function Asidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-full">
      {/* Menu Button for Mobile */}
      <button 
        className="fixed top-4 left-4 z-20 bg-gray-700 text-white p-2 rounded-md md:hidden" 
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'Close Menu' : 'Menu'}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-40 h-screen bg-gray-950 text-white flex flex-col justify-center items-center transition-transform duration-300 md:static ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col justify-end items-end w-full pr-8">
          {/* Sidebar Links */}
          <Link
            to={'/portfolio/'}
            className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
              hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative"
          >
            <p className="hidden group-hover:block fixed">Home</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
              <img src={home} alt="Home" className="w-4" />
            </div>
          </Link>

          <Link
            to={'/portfolio/about'}
            className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
              hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative"
          >
            <p className="hidden group-hover:block fixed">About</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
              <img src={about} alt="About" className="w-4" />
            </div>
          </Link>

          <Link
            to={'/portfolio/portfolio'}
            className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
              hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative"
          >
            <p className="hidden group-hover:block fixed">Portfolio</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
              <img src={portfolio} alt="Portfolio" className="w-4" />
            </div>
          </Link>

          <Link
            to={'/portfolio/contact'}
            className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
              hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative"
          >
            <p className="hidden group-hover:block fixed">Contact</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
              <img src={contact} alt="Contact" className="w-4" />
            </div>
          </Link>

          <Link
            to={'/portfolio/blog'}
            className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
              hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative"
          >
            <p className="hidden group-hover:block fixed">Blog</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
              <img src={blog} alt="Blog" className="w-4" />
            </div>
          </Link>
        </ul>
      </aside>

      {/* Overlay for Mobile when Menu is Open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
