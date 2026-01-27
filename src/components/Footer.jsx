import React from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const navLinks = [
        { name: 'Index', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Contact', href: '/#contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Bagavathisingh', icon: Github },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/bagavathi-singh', icon: Linkedin },
        { name: 'Twitter', url: 'https://x.com/BagavathiSingh', icon: Twitter },
        { name: 'Email', url: 'mailto:bagavathisingh5@gmail.com', icon: Mail }
    ];

    return (
        <footer className="relative bg-[#050505] font-mono border-t border-white/5 pt-20 pb-10 overflow-hidden">

            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 relative z-10">

                <div className="lg:col-span-6 space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl font-black tracking-tighter uppercase text-white">BAGAVATHISINGH<span className="text-neon"></span></h2>
                    </div>
                    <p className="text-sm text-gray-500 max-w-md leading-relaxed uppercase tracking-widest">
                        Focusing on structural integrity and cross-platform scalability. Available for new projects in 2026.
                    </p>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="text-neon text-[10px] font-bold tracking-[0.4em] mb-8 uppercase opacity-50">NAVIGATION</h3>
                    <ul className="space-y-4">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="text-gray-500 hover:text-white transition-colors uppercase font-bold tracking-[0.2em] text-xs flex items-center gap-3 group">
                                    {item.name}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="lg:col-span-3">
                    <h3 className="text-neon text-[10px] font-bold tracking-[0.4em] mb-8 uppercase opacity-50">SOCIALS</h3>
                    <ul className="space-y-4">
                        {socialLinks.map((item) => (
                            <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors uppercase font-bold tracking-[0.2em] text-xs flex items-center gap-3 group">
                                    <item.icon size={12} className="text-white/10 group-hover:text-neon transition-colors" />
                                    {item.name}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="border-t border-white/5 pt-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[8px] text-gray-700 tracking-[0.4em] uppercase gap-4 relative z-10">
                <div className="flex items-center gap-8">
                    <span>© 2026 ALL RIGHTS RESERVED</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                        <span className="text-neon">ONLINE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
