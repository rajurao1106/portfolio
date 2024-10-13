import React from 'react';

// Sample project data
const projects = [
  {
    title: "Astrology App",
    description: "A web application that provides astrological insights and personalized predictions.",
    image: "/path/to/astrology-app-image.jpg", // Replace with your image path
    link: "https://example.com/astrology-app" // Replace with your project link
  },
  {
    title: "SP Advertising Website",
    description: "A professional website for SP Advertising showcasing services and portfolio.",
    image: "/path/to/sp-advertising-image.jpg", // Replace with your image path
    link: "https://example.com/sp-advertising" // Replace with your project link
  },
  {
    title: "Sushant Paretkar Portfolio",
    description: "A portfolio website for Sushant Paretkar featuring projects and skills.",
    image: "/path/to/sushant-paretkar-image.jpg", // Replace with your image path
    link: "https://example.com/sushant-paretkar" // Replace with your project link
  },
  {
    title: "Solution Gurus Website",
    description: "A dynamic website for Solution Gurus offering various tech solutions.",
    image: "/path/to/solution-gurus-image.jpg", // Replace with your image path
    link: "https://example.com/solution-gurus" // Replace with your project link
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-10 py-10 bg-gray-100">
      <h3 className="text-4xl font-semibold text-center text-blue-600">Projects</h3>
      <div className="flex flex-wrap gap-8 mt-6 container  mx-auto px-4 justify-center items-center">
        {projects.map((project, index) => (
          <div key={index} className="relative group w-96 ">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-lg font-bold">{project.title}</h4>
              <p className="text-center">{project.description}</p>
              <a href={project.link} className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
