import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Database, Smartphone, ArrowRight, MessageSquare } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-16 flex flex-col relative overflow-hidden">

            <div className="flex-1 grid md:grid-cols-12 border-b-grid">

                <div className="md:col-span-8 md:-mt-10 p-6 md:p-12 md:border-r-grid flex flex-col justify-center relative">
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
                        <a href="#contact" className="inline-flex items-center gap-2 bg-neon text-black px-6 py-3 font-bold mt-8 hover:bg-white transition-colors">
                            START A PROJECT <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                <div className="md:col-span-4 md:-mt-10 grid grid-rows-4">
                    <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group">
                        <Globe className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2 text-balance">WEB APPS</h3>
                        <p className="text-sm font-mono opacity-60 uppercase">Next.js / React / TypeScript</p>
                    </div>
                    <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group">
                        <Database className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2 text-balance">SYSTEMS</h3>
                        <p className="text-sm font-mono opacity-60 uppercase">Node.js / Python / Cloud</p>
                    </div>
                    <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group">
                        <Smartphone className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2 text-balance">APPS</h3>
                        <p className="text-sm font-mono opacity-60 uppercase">Flutter / React Native</p>
                    </div>
                    <div className="p-8 hover:bg-white hover:text-black transition-colors group">
                        <MessageSquare className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                        <h3 className="text-2xl font-bold mb-2 text-balance">AI CHATBOTS</h3>
                        <p className="text-sm font-mono opacity-60 uppercase">Custom LLM Integration / OpenRouter</p>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden border-b-grid bg-neon text-black py-4">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="whitespace-nowrap flex gap-8 font-mono text-lg font-bold"
                >
                    {Array(10).fill("AVAILABLE FOR FREELANCE WORK • CUSTOM AI CHATBOTS • MODERN WEB SOLUTIONS • ").map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
