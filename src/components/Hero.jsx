import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Database, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-16 flex flex-col relative overflow-hidden">

            {/* Decorative Grid Numbers */}


            <div className="flex-1 grid md:grid-cols-12 border-b-grid">
                {/* Left Column: Massive Text */}
                <div className="md:col-span-8 p-6 md:p-12 md:border-r-grid flex flex-col justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 border-grid px-3 py-1 text-xs font-mono mb-8 text-neon">
                            <span className="w-2 h-2 bg-neon animate-ping" />
                            SYSTEM ONLINE
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tighter mix-blend-difference">
                            FULL<br />STACK<br />DEV_
                        </h1>
                        <p className="max-w-xl text-xl text-gray-400 leading-relaxed font-mono">
                            I architect digital solutions with precision and performance. Transforming complex problems into elegant code.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Stats & Stack */}
                <div className="md:col-span-4 grid grid-rows-3">
                    <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group">
                        <Globe className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2">WEB</h3>
                        <p className="text-sm font-mono opacity-60">Next.js / React / Vue</p>
                    </div>
                    <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group">
                        <Database className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2">BACKEND</h3>
                        <p className="text-sm font-mono opacity-60">Node / Python / SQL</p>
                    </div>
                    <div className="p-8 hover:bg-white hover:text-black transition-colors group">
                        <Smartphone className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2">MOBILE</h3>
                        <p className="text-sm font-mono opacity-60">Flutter / React Native</p>
                    </div>
                </div>
            </div>

            {/* Marquee Banner */}
            <div className="overflow-hidden border-b-grid bg-neon text-black py-4">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="whitespace-nowrap flex gap-8 font-mono text-lg font-bold"
                >
                    {Array(10).fill("AVAILABLE FOR FREELANCE WORK • BUILDING DIGITAL EXPERTIES • ").map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
