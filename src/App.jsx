import React from 'react';
import './App.css'; // Make sure Tailwind CSS is configured
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Asidebar from './components/Asidebar';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog'; // Import the Blog component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Router>
        <div className="flex">
          <main className="flex-1 ">
            <Routes>
              <Route path="/portfolio/" element={<Hero />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/blog" element={<Blog />} />
              <Route path="/portfolio/contact" element={<Contact />} />
            </Routes>
          </main>
          <Asidebar />
        </div>
      </Router>
    </div>
  );
}

export default App;
