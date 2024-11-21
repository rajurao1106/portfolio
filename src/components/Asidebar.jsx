import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/Asidebar/home.png'
import about from '../assets/Asidebar/user.png'
import portfolio from '../assets/Asidebar/portfolio.png'
import contact from '../assets/Asidebar/open-mail.png'
import blog from '../assets/Asidebar/blog.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

export default function Asidebar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  

  return (
    <div className='h-[100%] fixed right-0 z-10 '>
        {/* Menu Button for Mobile */}
      <button 
        className="fixed top-4 right-4 z-20 bg-gray-700 text-white p-2 rounded-md md:hidden" 
        onClick={toggleMenu}
      >
        {isMenuOpen ? <img src={close} className='w-5' alt="" /> : <img src={menu} className='w-5'/>}
      </button>

      <aside className={`fixed z-10 top-0 right-0 w-40 max-md:w-60 h-screen bg-gray-950 text-white flex flex-col justify-center items-center transition-transform duration-300 md:static ${
          isMenuOpen ? '-translate-x-0' : 'max-md:translate-x-full'
        }`}>
      <ul className='flex flex-col justify-end items-end w-full pr-8 max-md:pl-8'>
      <Link onClick={toggleMenu} to={'/portfolio/'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] max-md:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block max-md:block fixed'>Home</p>
            <div className="bg-gray-700  absolute p-4 rounded-full right-0">
                <img src={home} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link onClick={toggleMenu} to={'/portfolio/about'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] max-md:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block max-md:block fixed'>About</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={about} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link onClick={toggleMenu} to={'/portfolio/portfolio'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] max-md:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block max-md:block fixed'>Portfolio</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={portfolio} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link onClick={toggleMenu} to={'/portfolio/contact'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] max-md:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block max-md:block fixed'>Contact</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={contact} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link onClick={toggleMenu} to={'/portfolio/blog'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] max-md:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block max-md:block fixed'>Blog</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={blog} alt="" className='w-4 '/>
            </div>
        </Link>

      </ul>
    </aside>
{/* Overlay for Mobile when Menu is Open */}
{isMenuOpen && (
        <div
          className="max-md:fixed inset-0 bg-black bg-opacity-50 -z-0"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  )
}