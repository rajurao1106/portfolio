import React from 'react';
import website1 from '../assets/background.jpg';

export default function Portfolio() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-gray-950 min-h-screen text-white py-10">
      <div className="w-[90%] flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-10 max-lg:text-4xl max-md:text-3xl">Portfolio</h1>
        
        {/* Portfolio Grid */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-80 h-44 bg-red-500 relative overflow-hidden group">
              <img
                src={website1}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-125"
              />
              {/* Link Overlay */}
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
