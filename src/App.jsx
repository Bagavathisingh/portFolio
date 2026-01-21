import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import Process from './pages/Process';
import { useNavigate } from 'react-router-dom';

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

const AdminTrigger = () => {
  const navigate = useNavigate();

  useEffect(() => {

    Object.defineProperty(window, import.meta.env.VITE_ADMIN_KEY, {
      get: function () {
        console.log("%c ACCESS GRANTED: Redirecting to Admin Panel...", "color: #cf0; font-weight: bold; font-size: 14px;");
        sessionStorage.setItem('admin_auth', 'true');
        navigate('/admin');
        return "System authorization successful.";
      },
      configurable: true
    });

    return () => {
      delete window[import.meta.env.VITE_ADMIN_KEY];
    };
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <AdminTrigger />
      <div className="relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-neon selection:text-black">
        <div className="bg-grid" />

        <div className="relative z-10 pt-16">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
