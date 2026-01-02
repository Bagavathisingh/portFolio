import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Terminal, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    { name: 'INDEX', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top Status Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b-grid h-16 flex items-center justify-between px-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-neon rounded-none animate-pulse" />
          <span className="font-bold text-xl tracking-tighter">BAGAVATHISINGH</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center h-full">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative h-full px-8 flex items-center border-l-grid hover:bg-white hover:text-black transition-colors"
            >
              <span className="font-bold tracking-wide">{link.name}</span>
            </a>
          ))}

        </div>

        {/* Mobile Toggle */}
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-6 text-center hover:bg-neon hover:text-black transition-colors font-bold text-xl border-b-grid last:border-b-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
