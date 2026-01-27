import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Radio, Send, Mail, Linkedin } from 'lucide-react';
import ContactModal from './ui/ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="bg-[#050505] font-mono border-t border-white/5 relative overflow-hidden">
            {/* Contact Header */}
            <div className="flex border-b border-white/5 bg-white/[0.01]">
                <div className="w-16 md:w-24 border-r border-white/5 flex items-center justify-center">
                    <span className="rotate-90 text-[10px] font-bold tracking-[0.5em] text-neon uppercase whitespace-nowrap">MODULE_04</span>
                </div>
                <div className="flex-1 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-neon text-[10px] font-bold tracking-[0.3em] mb-4 block uppercase leading-none">Transmission_Hub</span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">INITIATE<br />CONTACT_</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-[600px]">
                <div className="lg:w-1/3 border-r border-white/5 p-8 md:p-16 flex flex-col justify-between items-start">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-white/40 uppercase tracking-widest">Transmissions:</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                                Incoming messages are routed through private encrypted channels. Synchronous response latency varies by region.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#050505] p-12 flex flex-col justify-between hover:bg-neon transition-all duration-500 group relative overflow-hidden"
                    >
                        <div>
                            <h3 className="text-4xl font-black tracking-tighter text-white group-hover:!text-black leading-none uppercase">DIRECT<br />MESSAGE</h3>
                        </div>
                        <div className="flex justify-end">
                            <Send className="text-neon group-hover:!text-black transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </button>

                    <div className="flex flex-col gap-px bg-white/10">
                        <a
                            href="mailto:bagavathisingh5@gmail.com"
                            className="flex-1 bg-[#050505] p-12 flex flex-col justify-between hover:bg-white transition-all duration-500 group"
                        >
                            <div>
                                <h3 className="text-3xl font-black tracking-tighter text-white group-hover:!text-black leading-none uppercase">EMAIL_LINK</h3>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-[8px] text-gray-500 group-hover:!text-black/40 uppercase tracking-widest">bagavathisingh5@gmail.com</span>
                                <Mail className="text-gray-400 group-hover:!text-black" size={20} />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bagavathi-singh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#050505] p-12 flex flex-col justify-between hover:bg-white transition-all duration-500 group border-t border-white/5"
                        >
                            <div>
                                <h3 className="text-3xl font-black tracking-tighter text-white group-hover:!text-black leading-none uppercase">LINKEDIN_SYS</h3>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-[8px] text-gray-500 group-hover:!text-black/40 uppercase tracking-widest">Connect_Professional</span>
                                <Linkedin className="text-gray-400 group-hover:!text-black" size={20} />
                            </div>
                        </a>
                    </div>
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
