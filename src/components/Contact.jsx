import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-[80vh] grid md:grid-cols-12 relative">
            <div className="md:col-span-12 p-12 md:p-24 flex flex-col items-center justify-center text-center bg-[#0a0a0a] relative z-10">


                <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase tracking-tighter hover:text-stroke transition-all cursor-default">
                    Let's Talk
                </h2>

                <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                    <a href="mailto:hello@bagavathisingh.dev" className="flex-1 group">
                        <div className="border-grid p-8 hover:bg-neon hover:text-black transition-all h-full flex flex-col justify-between min-h-[200px]">
                            <span className="font-mono text-xs opacity-60">EMAIL</span>
                            <div className="flex justify-between items-end">
                                <span className="text-xl font-bold">SEND MAIL</span>
                                <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex-1 group">
                        <div className="border-grid p-8 hover:bg-white hover:text-black transition-all h-full flex flex-col justify-between min-h-[200px]">
                            <span className="font-mono text-xs opacity-60">SOCIAL</span>
                            <div className="flex justify-between items-end">
                                <span className="text-xl font-bold">LINKEDIN</span>
                                <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </div>
                    </a>
                </div>


            </div>

            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        </section>
    );
};

export default Contact;
