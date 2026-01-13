import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/About'; // Re-using About as a features/skills section
import Projects from './components/Projects';
import Contact from './components/Contact';

import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-neon selection:text-black">
      <div className="bg-grid" />

      <div className="relative z-10 pt-16">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
