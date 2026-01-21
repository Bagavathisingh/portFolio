import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] overflow-hidden border-t-grid pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">

                <div className="md:col-span-2">
                    <h2 className="text-8xl font-black mb-6 tracking-tighter text-white/10 uppercase">
                        End_
                    </h2>
                    <p className="font-mono text-gray-400 max-w-sm leading-relaxed">
                        Developing digital solutions with precision, passion, and a touch of neon. Let's build something extraordinary together.
                    </p>
                </div>

                <div>
                    <h3 className="font-mono text-neon mb-6 block text-sm">NAVIGATION</h3>
                    <ul className="space-y-4">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors uppercase font-bold tracking-widest text-sm flex items-center gap-2 group">
                                    {item}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-mono text-neon mb-6 block text-sm">SOCIALS</h3>
                    <ul className="space-y-4">
                        {[
                            { name: 'GitHub', url: 'https://github.com/Bagavathisingh' },
                            { name: 'LinkedIn', url: 'https://linkedin.com/in/bagavathi-singh' },
                            { name: 'Twitter', url: 'https://x.com/BagavathiSingh' },
                            { name: 'Email', url: 'mailto:bagavathisingh5@gmail.com' }
                        ].map((item) => (
                            <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors uppercase font-bold tracking-widest text-sm flex items-center gap-2 group">
                                    {item.name}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="border-t-grid pt-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 gap-4">
                <span>© 2025 BAGAVATHISINGH. SYSTEM SECURE.</span>
                <span className="animate-pulse text-neon">● ONLINE</span>
            </div>

            <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-5">
                <h1 className="text-[15vw] font-black whitespace-nowrap leading-none text-white">
                    BAGAVATHISINGH
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
