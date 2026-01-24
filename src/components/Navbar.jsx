import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'INDEX', href: '/' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'CONTACT', href: '/#contact' },
    { name: 'WORKFLOW', href: '/process' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b-grid h-16 flex items-center justify-between px-6"
      >
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-neon border border-[#0a0a0a]" />
          </div>
          <Link to="/" className="font-bold text-xl tracking-tighter hidden sm:block">BAGAVATHISINGH</Link>
          <Link to="/" className="md:hidden font-bold text-xl tracking-tighter">BS</Link>
          <div className="border-grid px-2 py-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400">OPEN FOR WORK</span>
          </div>
        </div>


        <div className="hidden md:flex items-center h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`group relative h-full px-8 flex items-center border-l-grid hover:bg-white hover:text-black transition-colors ${location.pathname === link.href ? 'bg-white text-black' : ''
                }`}
            >
              <span className="font-bold tracking-wide">{link.name}</span>
            </Link>
          ))}
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border-grid hover:bg-neon hover:text-black transition-colors"
        >
          {isOpen ? <X size={24} /> : <Terminal size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full z-40 bg-[#0a0a0a] border-b-grid overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-6 text-center hover:bg-neon hover:text-black transition-colors font-bold text-xl border-b-grid last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
