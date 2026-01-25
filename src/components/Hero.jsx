import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Database, Smartphone, ArrowRight, MessageSquare } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 border-b-grid">

                    <div className="hidden lg:flex lg:col-span-1 border-r-grid flex-col justify-end p-6 py-12">
                        <div className="rotate-180 [writing-mode:vertical-lr] flex items-center gap-4">
                            <span className="font-mono text-[10px] text-neon uppercase tracking-[0.3em]">Developer Portfolio</span>
                            <div className="w-[1px] h-20 bg-grid-pattern opacity-30" />
                            <h2 className="font-bold text-2xl tracking-tighter text-white">BAGAVATHI<span className="text-neon">SINGH</span></h2>
                        </div>
                    </div>

                    <div className="lg:col-span-7 border-r-grid p-8 md:p-16 flex flex-col justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 mb-10">
                                <span className="w-8 h-[1px] bg-neon" />
                                <span className="font-mono text-[11px] text-neon uppercase tracking-[0.4em]">Full Stack Developer</span>
                            </div>

                            <h1 className="text-7xl md:text-8xl lg:text-[100px] font-black leading-[0.9] tracking-tighter mb-10">
                                DEVELOPING<br />
                                <span className="text-neutral-500 italic font-normal">FOR THE</span><br />
                                WEB_
                            </h1>

                            <div className="max-w-md space-y-8">
                                <p className="text-lg text-gray-400 leading-relaxed font-mono">
                                    I focus on building functional web applications and learning new ways to solve technical problems efficiently.
                                </p>

                                <div className="flex items-center gap-6">
                                    <a href="#contact" className="group relative px-8 py-4 bg-neon text-black font-bold uppercase tracking-wider hover:bg-white transition-colors">
                                        Get in touch
                                        <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                        {[
                            { icon: Globe, title: "Web Apps", desc: "Building with Next.js & React" },
                            { icon: Database, title: "Backend", desc: "Server logic with Node.js" },
                            { icon: Smartphone, title: "Mobile", desc: "Developing Flutter apps" },
                            { icon: MessageSquare, title: "AI Work", desc: "Exploring LLM integrations" }
                        ].map((service, i) => (
                            <div key={i} className="p-8 border-b-grid border-white/5 hover:bg-white/[0.01] transition-colors group cursor-default">
                                <div className="flex items-start justify-between mb-4">
                                    <service.icon className="w-8 h-8 text-neutral-700 group-hover:text-neon transition-colors" />
                                </div>
                                <h3 className="font-bold text-xl mb-1 text-neutral-200">{service.title}</h3>
                                <p className="text-xs font-mono text-neutral-500 uppercase">{service.desc}</p>
                            </div>
                        ))}
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
