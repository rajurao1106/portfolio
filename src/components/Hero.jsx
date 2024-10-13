import React from 'react';
import profileImage from '../assets/raju.jpg';
import background from '../assets/background.jpg';
import 'animate.css'; // Import Animate.css

export default function Hero() {
  return (
    <section id='hero' className="text-center relative overflow-hidden py-20 mt-6">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src={background} // Replace with your background image path
          alt="Background"
          className="object-cover w-full h-full brightness-50" 
        />
      </div>

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>

      <div className="relative z-[2] flex flex-col items-center">
        <img 
          src={profileImage} 
          alt="D. Raju Rao" 
          className="w-56 h-60 rounded-full shadow-lg mb-6 animate__animated animate__fadeIn animate__delay-1s" 
        />
        <h1 className="text-4xl font-bold text-white animate__animated animate__fadeInDown animate__delay-2s">Hi, I'm D. Raju Rao</h1>
        <h2 className="text-2xl mt-2 text-white animate__animated animate__fadeInUp animate__delay-3s">Web Developer | Software Engineer in Progress</h2>
        <p className="w-[80%] mt-4 text-white animate__animated animate__fadeInUp animate__delay-4s">
          I am a skilled web developer with expertise in React, Vite, Node.js, Tailwind CSS, Redux, and Express. I specialize in building and designing modern, responsive web applications that offer seamless user experiences. With experience in MongoDB and REST APIs, Additionally, I have strong knowledge of SEO optimization, Figma for design, and effective team collaboration, ensuring high-quality and efficient project delivery.
        </p>
        <a 
          href="#projects" 
          className="mt-4 inline-block px-6 py-3 bg-white text-blue-500 rounded hover:bg-blue-200 transition transform hover:scale-105 animate__animated animate__pulse animate__delay-5s"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
