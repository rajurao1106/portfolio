import React from 'react'
import website1 from '../assets/background.jpg'

export default function Portfolio() {
  return (
    <section className='w-full flex flex-col justify-center items-center bg-gray-950 h-[100%] py-10 text-white'>
      <div className="w-[90%] flex flex-col justify-center items-center ">
      <h1 className="w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">MY<p className='ml-2 text-yellow-400'>PORTFOLIO</p> <p className='absolute text-8xl opacity-10'>WORK</p></h1>
      
      <div className="w-full flex gap-10 flex-wrap justify-center items-center">
      <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={website1} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group relative"/>
          <a href="" className='absolute group-hover:bg-[#00000065] w-full h-full flex flex-col justify-center items-center'><p className='hidden group-hover:block'>visit website</p></a>
        </div>
  
      </div>

      </div>
    </section>
  )
}
