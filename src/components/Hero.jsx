import React from 'react';
import profileImage from '../assets/raju.jpg';

export default function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col justify-center items-center h-screen bg-gray-950">
      <div className="w-[90%] flex flex-col max-lg:flex-col max-lg:items-center lg:flex-row lg:justify-between">
        
        {/* Profile Image */}
        <img
          src={profileImage}
          className="w-[20rem] max-lg:w-[15rem] max-md:w-[12rem] rounded-3xl mb-8 max-lg:mb-8 lg:mb-0"
          alt="Profile"
        />
        
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start w-full lg:w-[50%] text-white gap-6 max-md:gap-4 text-center lg:text-left">
          <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl font-bold">
            I'm Steve Milner, Web Designer
          </h1>
          <p className="text-lg max-lg:text-base max-md:text-sm">
            I'm a Tunisian-based web designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
          </p>
          <button className="rounded-full p-3 font-semibold border-yellow-300 border-2 hover:bg-yellow-300 hover:text-gray-950 transition duration-300">
            More About Me
          </button>
        </div>
        
      </div>
    </section>
  );
}
