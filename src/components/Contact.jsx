import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin } from 'lucide-react';
import ContactModal from './ui/ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="bg-[#050505] font-mono border-t border-white/5 relative overflow-hidden">
            {/* Contact Header */}
            <div className="flex border-b border-white/5 bg-white/[0.01]">
                <div className="flex-1 p-8 md:p-12 lg:p-20">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white">INITIATE<br />CONTACT_</h2>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                {/* Left: Info */}
                <div className="lg:w-1/3 p-8 md:p-12 lg:p-20 flex flex-col justify-between">
                    <div className="space-y-8">
                        <h3 className="text-xl font-black text-neon uppercase tracking-widest">Transmissions:</h3>
                        <p className="text-sm text-gray-400 uppercase tracking-widest leading-relaxed max-w-sm">
                            I am currently open to high-impact collaborations and architectural challenges. Expect a response within 24 standard hours.
                        </p>
                    </div>
                </div>

                {/* Right: Interaction Modules */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-white/5">

                    {/* Direct Message */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#050505] p-12 flex flex-col justify-between hover:bg-neon transition-all duration-500 group relative min-h-[300px]"
                    >
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white group-hover:!text-black leading-none uppercase">DIRECT<br />MESSAGE</h3>
                        <div className="flex justify-end">
                            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-black transition-colors">
                                <Send className="text-neon group-hover:!text-black transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </button>

                    {/* Email */}
                    <a
                        href="mailto:bagavathisingh5@gmail.com"
                        className="bg-[#050505] p-12 flex flex-col justify-between hover:bg-white transition-all duration-500 group min-h-[300px]"
                    >
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white group-hover:!text-black leading-none uppercase">EMAIL<br />UPLINK</h3>
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] text-gray-500 group-hover:!text-black uppercase tracking-widest truncate max-w-[150px]">bagavathisingh5@gmail.com</span>
                            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-black transition-colors">
                                <Mail className="text-gray-400 group-hover:!text-black" size={20} />
                            </div>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/bagavathi-singh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#050505] p-12 flex flex-col justify-between hover:bg-white transition-all duration-500 group min-h-[300px]"
                    >
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white group-hover:!text-black leading-none uppercase">LINKEDIN<br />SYNC</h3>
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] text-gray-500 group-hover:!text-black uppercase tracking-widest">PRO_CONNECT</span>
                            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-black transition-colors">
                                <Linkedin className="text-gray-400 group-hover:!text-black" size={20} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Contact;
