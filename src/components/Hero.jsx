import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Database, Smartphone, ArrowRight, MessageSquare } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] flex flex-col relative">
                <div className="flex-1 -z-10 grid grid-cols-1 md:grid-cols-12 border-b-grid md:overflow-hidden">
                    <div className="md:col-span-9 p-8 md:p-12 border-r-grid flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 border-grid px-3 py-1 text-xs font-mono mb-8 text-neon">
                                <span className="w-1.5 h-1.5 bg-neon animate-pulse" />
                                AVAILABLE FOR WORK
                            </div>

                            <p className="font-mono text-neon text-sm uppercase tracking-[0.3em] mb-4">
                                BAGAVATHISINGH
                            </p>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">
                                FULL<br />STACK<br />DEV_
                            </h1>

                            <p className="max-w-md text-lg text-gray-400 leading-relaxed font-mono mb-10">
                                I build functional web applications and digital solutions focusing on performance and user experience.
                            </p>

                            <a href="#contact" className="inline-flex items-center gap-4 bg-neon text-black px-8 py-4 font-bold hover:bg-white transition-all group w-fit">
                                GET IN TOUCH <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        <div className="absolute bottom-4 right-4 font-mono text-[8px] text-gray-600">
                            © 2026
                        </div>
                    </div>


                    <div className="md:col-span-3 grid grid-rows-4">
                        <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group cursor-pointer">
                            <Globe className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                            <h3 className="text-2xl font-bold mb-1 tracking-tight">WEB APPS</h3>
                            <p className="text-[10px] font-mono opacity-50 uppercase">Next.js / React / TS</p>
                        </div>
                        <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group cursor-pointer">
                            <Database className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                            <h3 className="text-2xl font-bold mb-1 tracking-tight">SYSTEMS</h3>
                            <p className="text-[10px] font-mono opacity-50 uppercase">Node.js / Cloud</p>
                        </div>
                        <div className="border-b-grid p-8 hover:bg-white hover:text-black transition-colors group cursor-pointer">
                            <Smartphone className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                            <h3 className="text-2xl font-bold mb-1 tracking-tight">APPS</h3>
                            <p className="text-[10px] font-mono opacity-50 uppercase">Flutter / Native</p>
                        </div>
                        <div className="p-8 hover:bg-white hover:text-black transition-colors group cursor-pointer">
                            <MessageSquare className="w-8 h-8 mb-4 text-neon group-hover:text-black" />
                            <h3 className="text-2xl font-bold mb-1 tracking-tight">AI BOTS</h3>
                            <p className="text-[10px] font-mono opacity-50 uppercase">LLM / OpenRouter</p>
                        </div>
                    </div>
                </div>

            </section>

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
        </>
    );
};

export default Hero;
