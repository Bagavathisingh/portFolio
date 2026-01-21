import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './pages/Process';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <main>
    <Hero />
    <Features />
    <Projects />
    <Contact />
  </main>
);

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-neon selection:text-black">
        <div className="bg-grid" />

        <div className="relative z-10 pt-16">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
