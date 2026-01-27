import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6 lg:px-10 overflow-hidden flex flex-col font-mono ">
            {/* Structural Borders */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-4 border border-white/5" />
                <div className="absolute top-4 left-4 w-12 h-12 md:w-24 md:h-24 border-t-2 border-l-2 border-neon" />
                <div className="absolute bottom-4 right-4 w-12 h-12 md:w-24 md:h-24 border-b-2 border-r-2 border-neon" />
            </div>

            <div className="flex-1 flex flex-col lg:flex-row relative z-10 mx-auto w-full max-w-7xl gap-8">
                {/* Left Section: Identity */}
                <div className="lg:w-[400px] border-b lg:border-b-0 lg:border-r border-white/5 p-6 md:p-12 flex flex-col justify-center bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-6 text-white uppercase text-center lg:text-left">
                            BAGAVATHI<br />
                            <span className="text-neon italic">SINGH</span>
                        </h2>
                        <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed max-w-[280px] mx-auto lg:mx-0 text-center lg:text-left">
                            Full stack engineer building structural digital experiences. Focus on performance, scalability, and technical elegance.
                        </p>
                    </motion.div>
                </div>

                {/* Right Section: Core Statement */}
                <div className="flex-1 flex flex-col relative overflow-hidden bg-grid-pattern opacity-95">
                    <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative">
                        <div className="relative text-center lg:text-left">
                            <motion.h1
                                initial={{ y: 60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                                className="text-[14vw] sm:text-[12vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase mb-12"
                            >
                                BUILD<br />
                                <span className="text-transparent text-stroke opacity-30">BEYOND</span><br />
                                <span className="text-white">LIMITS_</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12"
                            >
                                <a href="#projects" className="group flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-neon font-black tracking-widest uppercase text-[10px] md:text-xs">View My Work</span>
                                        <ArrowRight className="text-neon transform group-hover:translate-x-3 transition-transform w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-neon transition-all duration-500" />
                                </a>
                                <a href="#contact" className="group flex flex-col gap-2 opacity-50 hover:opacity-100 transition-opacity">
                                    <span className="text-white font-black tracking-widest uppercase text-[10px] md:text-xs">Contact Me</span>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-white transition-all duration-500" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Status Bar */}
            <div className="h-8 border-t border-white/10 flex items-center px-4 md:px-8 bg-black mt-8">
                <div className="flex items-center w-full">
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                            className="whitespace-nowrap font-mono text-[8px] text-gray-700 tracking-[0.5em] uppercase"
                        >
                            Deploying Scalable Systems // Integrated AI Modules // Next.js Performance Optimization // React Native Mobile Architecture // Cloud-Native Solutions // Full-Stack Excellence //
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
