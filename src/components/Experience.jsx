import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-semibold text-center text-blue-600">Experience</h3>
        <p className="text-center text-gray-600 mt-2">A snapshot of my professional journey</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <ExperienceCard 
            role="Frontend Developer Intern"
            company="Propel Mentorship"
            description="Learned Redux, Tailwind CSS, Docker, and LLM, enhancing my skill set for modern web development."
            logo="https://example.com/logo-propel-mentorship.png" // Replace with actual logo URL
            duration="2021 - 2022"
          />
          <ExperienceCard 
            role="Web Developer"
            company="SP Advertising"
            description="Gained hands-on experience in web development, contributing to various projects and learning best practices."
            logo="https://example.com/logo-sp-advertising.png" // Replace with actual logo URL
            duration="2019 - 2020"
          />
          
          
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ role, company, description, logo, duration }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <img src={logo} alt={`${company} logo`} className="h-12 w-12 rounded-full mr-4" />
        <div>
          <h4 className="text-xl font-bold text-blue-500">{role}</h4>
          <h5 className="text-md font-semibold text-gray-800">{company}</h5>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Duration: {duration}</p>
    </div>
  );
};
