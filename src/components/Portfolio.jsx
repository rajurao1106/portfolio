import React from 'react'
import educity from '../assets/educity.png'
import visit from '../assets/external-link.png'
import food_delivery from '../assets/food_delivery.png'
import kundli from '../assets/kundli.png'

export default function Portfolio() {
  return (
    <section className='w-full flex flex-col justify-center items-center bg-gray-950 h-screen max-md:h-[100%] py-10 text-white'>
      <div className="w-[90%] flex flex-col justify-center items-center ">
      <h1 className="w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">MY<p className='ml-2 text-yellow-400'>PORTFOLIO</p> <p className='absolute text-8xl max-md:text-6xl opacity-10'>WORK</p></h1>
      
      <div className="w-full flex gap-10 flex-wrap justify-center items-center">
      <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={educity} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125 group relative"/>
          <a href="https://rajurao1106.github.io/educity-website/" className='absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3'>
          <p className='hidden group-hover:block'><p className='flex justify-center items-center gap-1'>visit website <img src={visit} className='w-8 h-8' alt="" /></p></p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={kundli} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125 group relative"/>
          <a href="https://rajurao1106.github.io/Life-Prediction/" className='absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3'>
          <p className='hidden group-hover:block'><p className='flex justify-center items-center gap-1'>visit website <img src={visit} className='w-8 h-8' alt="" /></p></p></a>
        </div>
        <div className="w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl">
          <img src={food_delivery} alt="" className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125 group relative"/>
          <a href="https://rajurao1106.github.io/food-website/" className='absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3'>
          <p className='hidden group-hover:block'><p className='flex justify-center items-center gap-1'>visit website <img src={visit} className='w-8 h-8' alt="" /></p></p></a>
        </div>
        
      </div>

      </div>
    </section>
  )
}
