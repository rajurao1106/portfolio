import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/Asidebar/home.png'
import about from '../assets/Asidebar/user.png'
import portfolio from '../assets/Asidebar/portfolio.png'
import contact from '../assets/Asidebar/open-mail.png'
import blog from '../assets/Asidebar/blog.png'

export default function Asidebar() {
  return (
    <div className='h-screen'>
      <aside className="w-40 h-screen bg-gray-950 text-white flex flex-col justify-center items-center">
      <ul className='flex flex-col justify-end items-end w-full pr-8'>
      <Link to={'/portfolio/'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block fixed'>Home</p>
            <div className="bg-gray-700  absolute p-4 rounded-full right-0">
                <img src={home} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link to={'/portfolio/about'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block fixed'>About</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={about} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link to={'/portfolio/portfolio'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block fixed'>Portfolio</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={portfolio} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link to={'/portfolio/contact'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block fixed'>Contact</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={contact} alt="" className='w-4 '/>
            </div>
        </Link>
        <Link to={'/portfolio/blog'} className="mb-4 bg-gray-700 hover:bg-yellow-500 p-2 rounded-full w-[50px] h-[50px] 
        hover:w-[100%] transition-all duration-300 right-0 flex justify-center pr-10 items-center group relative">
            <p className='hidden group-hover:block fixed'>Blog</p>
            <div className="bg-gray-700 absolute p-4 rounded-full right-0">
                <img src={blog} alt="" className='w-4 '/>
            </div>
        </Link>

      </ul>
    </aside>

    </div>
  )
}
