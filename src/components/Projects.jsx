import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "BUGZX_MOTION",
        image: "/projects/bugzx_motion.png",
        description: "A specialized UI and motion library for React and Next.js, providing performant, motion-ready components.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Motion"],
        live: "https://bugzx-motion.netlify.app",
        github: "https://github.com/Bagavathisingh/bugzx-motion"
    },
    {
        title: "E-LEARNING SYSTEM",
        image: "/projects/elearning.png",
        description: "Full-featured course management with video content delivery and progress tracking.",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        live: "https://metastudy.vercel.app",
        github: "https://github.com/Bagavathisingh/metalearn"
    },
    {
        title: "CYBERBOY BOT",
        image: "/projects/cyberboy.png",
        description: "Automated assistent built with custom LLM configurations for technical support.",
        tech: ["React", "OpenRouter", "Node.js", "MongoDB"],
        live: "https://cyberboybot.netlify.app",
        github: "https://github.com/Bagavathisingh/cyberBoy"
    },
    {
        title: "TASK ARCHITECT",
        image: "/projects/task_manager.png",
        description: "Collaborative project management with real-time status updates and workspace organization.",
        tech: ["React", "Firebase", "Tailwind", "Dnd-Kit"],
        live: "https://task-manger-rust.vercel.app/",
        github: "https://github.com/Bagavathisingh/task-Manger"
    },
    {
        title: "WEATHER ANALYTICS",
        image: "/projects/weather.png",
        description: "Data-driven dashboard visualizing global weather conditions with real-time API integration.",
        tech: ["Vue.js", "D3.js", "OpenWeather", "Vite"],
        live: "https://weather-motion.vercel.app",
        github: "https://github.com/Bagavathisingh/weatherApp"
    },
    {
        title: "SECURE_CHAT",
        image: "/projects/cli_chat.png",
        description: "Terminal-style messaging featuring end-to-end encryption and WebSocket-based communication.",
        tech: ["Node.js", "WebSockets", "Crypto API", "Render"],
        live: "https://bugzx-chat.vercel.app",
        github: "https://github.com/Bagavathisingh/CLI_chat"
    },
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="bg-[#050505] font-mono border-t border-white/5 relative">
            {/* Project Header */}
            <div className="flex border-b border-white/5 bg-white/[0.01]">
                <div className="flex-1 p-8 md:p-12 lg:p-20">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white">PROJECTS_</h2>
                </div>
            </div>

            {/* Project List */}
            <div className="flex flex-col relative z-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group border-b border-white/5 relative overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'bg-white/[0.03]' : 'bg-transparent'}`}
                    >
                        <div className="flex flex-col lg:flex-row min-h-[140px] relative z-10">
                            {/* Main Info */}
                            <div className="flex-1 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 order-2 lg:order-1">
                                <div className="max-w-2xl">
                                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white group-hover:text-neon transition-colors duration-500 mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <div key={t} className="px-3 py-1 border border-white/5 bg-black text-[8px] md:text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:border-neon/30 transition-colors">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="lg:w-64 border-b lg:border-b-0 lg:border-l border-white/5 p-8 flex lg:flex-col justify-start lg:justify-center gap-8 order-3 lg:order-2">
                                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-4 group/btn">
                                    <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 flex items-center justify-center group-hover/btn:bg-neon group-hover/btn:border-neon transition-all">
                                        <ArrowUpRight size={16} className="group-hover/btn:!text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-gray-500 group-hover/btn:!text-white transition-colors uppercase">Live Demo</span>
                                </a>
                                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group/btn">
                                    <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all">
                                        <Github size={16} className="group-hover/btn:!text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-gray-500 group-hover/btn:!text-white transition-colors uppercase">View Code</span>
                                </a>
                            </div>

                            {/* Hover Dynamic Background (Right side overlay) */}
                            <div className={`absolute inset-0 lg:left-auto lg:right-0 lg:w-[40%] pointer-events-none overflow-hidden transition-all duration-700 ease-in-out z-[-1] opacity-0 group-hover:opacity-10 lg:group-hover:opacity-20 ${hoveredIndex === index ? 'translate-x-0' : 'translate-y-10 lg:translate-x-20'}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-[#050505]/80 to-[#050505]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
