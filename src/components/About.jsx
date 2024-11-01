import React from 'react';
import { FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaServer } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

export default function About() {
  const downloadCV = () => {
    // This would be the URL to your CV file
    const link = document.createElement('a');
    link.href = '/path-to-your-cv-file.pdf';
    link.download = 'D_Raju_Rao_CV.pdf';
    link.click();
  };

  return (
    <section id="about" className="w-full flex flex-col justify-center items-center py-10 bg-gray-950 text-white h-screen">
      <h1 className="text-5xl font-bold mb-10 max-lg:text-4xl max-md:text-3xl">About Me</h1>
      
      {/* Container for Personal Info and Stats */}
      <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center gap-10">
        
        {/* Personal Info */}
        <div className="w-full max-lg:text-center flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-4">PERSONAL INFOS</h2>
          <div className="flex max-md:flex-wrap text-left gap-6">
            <div className="w-full lg:w-1/2">
              <p>First Name : D Raju</p>
              <p>Last Name : Rao</p>
              <p>Age : 21</p>
              <p>Nationality : Indian</p>
              <p>Freelance : None</p>
            </div>
            <div className="w-full lg:w-1/2">
              <p>Address : Raipur, Chhattisgarh</p>
              <p>Phone : +91-7470578448</p>
              <p>Email : rajurao1106@gmail.com</p>
              <p>LinkedIn : <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Profile Link</a></p>
              <p>Languages : Hindi, Telugu, English</p>
            </div>
          </div>
          <button onClick={downloadCV} className="bg-red-500 mt-4 w-52 p-3 rounded-full self-center lg:self-start">
            Download CV
          </button>
        </div>

        {/* Experience Stats */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5 max-lg:justify-center">
          <div className="p-5 w-[10rem] h-[8rem] border-2 rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold">12+</p>
            <p>years of experience</p>
          </div>
          <div className="p-5 w-[10rem] h-[8rem] border-2 rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold">100+</p>
            <p>projects completed</p>
          </div>
          <div className="p-5 w-[10rem] h-[8rem] border-2 rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold">5+</p>
            <p>years in industry</p>
          </div>
          <div className="p-5 w-[10rem] h-[8rem] border-2 rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold">50+</p>
            <p>happy clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
