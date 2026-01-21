import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import ContactModal from './ui/ContactModal';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="min-h-[80vh] grid md:grid-cols-12 relative">
            <div className="md:col-span-12 p-12 md:p-24 flex flex-col items-center justify-center text-center bg-[#0a0a0a] relative z-10">

                <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter hover:text-stroke transition-all cursor-default">
                    Let's Talk
                </h2>

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex-1 group text-left"
                    >
                        <div className="border-grid p-8 bg-neon text-black hover:bg-white transition-all h-full flex flex-col justify-between min-h-[220px]">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest">Direct Channel</span>
                            <div>
                                <h3 className="text-3xl font-black mb-2 uppercase">SEND MSG</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="font-mono text-sm opacity-60 italic">Drop a project brief</span>
                                    <MessageSquare className="w-6 h-6 transform group-hover:scale-125 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </button>

                    <a href="mailto:bagavathisingh5@gmail.com" className="flex-1 group">
                        <div className="border-grid p-8 hover-neon transition-all h-full flex flex-col justify-between min-h-[220px]">
                            <span className="font-mono text-xs opacity-60">EMAIL</span>
                            <div className="flex justify-between items-end">
                                <span className="text-xl font-bold">SEND MAIL</span>
                                <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/bagavathi-singh" className="flex-1 group" target="_blank" rel="noopener noreferrer">
                        <div className="border-grid p-8 hover:bg-white hover:text-black transition-all h-full flex flex-col justify-between min-h-[220px]">
                            <span className="font-mono text-xs opacity-60">SOCIAL</span>
                            <div className="flex justify-between items-end">
                                <span className="text-xl font-bold">LINKEDIN</span>
                                <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Contact;
