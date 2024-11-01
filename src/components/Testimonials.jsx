import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-semibold text-center text-blue-600">What My Clients Say</h3>
        <p className="text-center text-gray-600 mt-2">Here’s what my clients have to say about working with me</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            feedback="Raju’s work is fantastic! He created a website that exceeded our expectations and delivered on time."
            client="John Doe"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard
            feedback="His attention to detail and understanding of our needs made him a perfect fit for our project."
            client="Sarah Williams"
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard
            feedback="Amazing service! Raju’s skills and creativity helped us build a great platform that runs flawlessly."
            client="Michael Scott"
            image="https://randomuser.me/api/portraits/men/76.jpg"
          />
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ feedback, client, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl">
      <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
      <p className="text-lg text-gray-700 mb-6 italic">"{feedback}"</p>
      <div className="flex items-center">
        <img src={image} alt={client} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-blue-600">{client}</h4>
          <p className="text-gray-500">Client</p>
        </div>
      </div>
    </div>
  );
};
