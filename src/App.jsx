import React from 'react';
import './App.css'; // Add your Tailwind CSS here if using it
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
