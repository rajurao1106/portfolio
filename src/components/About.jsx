import React from 'react';
import { FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaServer } from 'react-icons/fa'; // Importing icons
import { SiRedux } from 'react-icons/si'; // Importing React-Redux icon

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-10 mt-10 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-semibold text-center text-blue-600">About Me</h3>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto">
          I am a passionate Frontend Developer with 3 years of experience mastering HTML, CSS and Javascript. 
          Currently, I am focused on expanding my skills to become a Full Stack Software Engineer. I specialize 
          in building and designing modern, responsive web applications, and creating seamless, modern user interfaces with a full-stack approach.
        </p>
        <h4 className="mt-6 font-semibold text-xl text-gray-800">Skills:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <SkillCard skill="React.js" color="bg-blue-500" Icon={FaReact} />
          <SkillCard skill="Tailwind CSS" color="bg-blue-600" Icon={FaCss3Alt} />
          <SkillCard skill="Redux" color="bg-purple-600" Icon={SiRedux} />
          <SkillCard skill="Node.js" color="bg-green-600" Icon={FaNodeJs} />
          <SkillCard skill="Git" color="bg-orange-500" Icon={FaGitAlt} />
          <SkillCard skill="Rest-API" color="bg-blue-700" Icon={FaServer} />
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ skill, color, Icon }) => (
  <div className={`flex items-center p-4 ${color} text-white rounded-lg shadow-md`}>
    <Icon className="text-3xl mr-3" />
    <span className="text-lg font-medium">{skill}</span>
  </div>
);
