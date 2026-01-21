import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "BUGZX_MOTION",
        id: "PRJ-01",
        image: "/projects/bugzx_motion.png",
        description: "Built bugzx-motion, an experimental UI and motion framework for React and Next.js focused on motion-first components and clean developer experience.",
        tech: ["Next.js 16", "TypeScript", "Tailwind 4", "Radix UI"],
        live: "https://bugzx-motion.netlify.app",
        github: "https://github.com/Bagavathisingh/bugzx-motion"
    },
    {
        title: "E-LEARNING PLATFORM",
        id: "PRJ-02",
        image: "/projects/elearning.png",
        description: "A comprehensive LMS with video streaming, progress tracking, and interactive quizzes.",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
        live: "https://metastudy.vercel.app",
        github: "https://github.com/Bagavathisingh/metalearn"
    },
    {
        title: "CYBERBOY CHATBOT",
        id: "PRJ-03",
        image: "/projects/cyberboy.png",
        description: "Intelligent chatbot for cybersecurity queries and tech solutions.",
        tech: ["React", "OpenRouter", "MongoDB", "Framer"],
        live: "https://cyberboybot.netlify.app",
        github: "https://github.com/Bagavathisingh/cyberBoy"
    },
    {
        title: "TASK MANAGER",
        id: "PRJ-04",
        image: "/projects/task_manager.png",
        description: "Real-time collaboration tool with drag-and-drop kanban boards.",
        tech: ["React", "Firebase", "Tailwind", "Dnd-Kit"],
        live: "https://task-manger-rust.vercel.app/",
        github: "https://github.com/Bagavathisingh/task-Manger"
    },
    {
        title: "WEATHER DASHBOARD",
        id: "PRJ-05",
        image: "/projects/weather.png",
        description: "Beautiful data visualization of weather analytics across the globe.",
        tech: ["Vue.js", "D3.js", "OpenWeather", "Vite"],
        live: "https://weather-motion.vercel.app",
        github: "https://github.com/Bagavathisingh/weatherApp"
    },
    {
        title: "CLI_CHAT",
        id: "PRJ-06",
        image: "/projects/cli_chat.png",
        description: "Secure terminal chat with AES-128-CBC on-device encryption, using WebSocket bidirectional relay and deterministic 16-byte KDF key derivation.",
        tech: ["WebSocket (WS)", "AES-128-CBC", "Passphrase KDF", "Node.js", "Render Cloud"],
        live: "https://bugzx-chat.vercel.app",
        github: "https://github.com/Bagavathisingh/CLI_chat"
    },
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="py-0 border-b-grid bg-[#0a0a0a] relative overflow-hidden">
            <div className="flex flex-col min-h-screen">

                {/* Slim Header */}
                <div className="p-6 border-b-grid flex items-center justify-between bg-[#0b0b0b] z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                        <h2 className="text-2xl font-black tracking-tighter uppercase italic">Project_Registry</h2>
                    </div>
                </div>

                <div className="flex-1">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group border-b-grid last:border-b-0 relative bg-[#0a0a0a] overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row items-stretch min-h-[180px] lg:min-h-[220px]">
                                <div className="flex-1 p-6 lg:p-10 relative overflow-hidden flex flex-col justify-center gap-4 transition-all duration-500 z-10 group-hover:bg-[#0c0c0c]">

                                    <div className="flex items-center gap-4">
                                        <span className="text-neon font-mono text-[10px] font-bold tracking-tighter">
                                            {project.id}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none group-hover:text-neon transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="hidden lg:flex items-center flex-wrap gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="text-[8px] font-mono border-grid px-5 py-1 bg-black/40 text-gray-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <p className="text-gray-500 font-mono text-xs leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors duration-500">
                                            {project.description}
                                        </p>

                                        <div className="flex gap-6 items-center flex-shrink-0">
                                            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[9px] font-black tracking-widest hover:text-neon transition-all uppercase border-b border-transparent hover:border-neon pb-0.5">
                                                VIEW <ArrowUpRight size={12} />
                                            </a>
                                            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[9px] font-black tracking-widest text-gray-500 hover:text-white transition-all uppercase border-b border-transparent hover:border-white pb-0.5">
                                                CODE <Github size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Ultra-Smooth Slim Expansion */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: hoveredIndex === index ? '35%' : '0%',
                                    }}
                                    transition={{
                                        width: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
                                    }}
                                    className="hidden lg:block relative overflow-hidden bg-black border-l-grid z-20"
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="w-full h-full relative"
                                            >
                                                <div className="absolute inset-0 bg-scanline opacity-10 z-20" />
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.7] transition-all duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />

                                                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 pointer-events-none">
                                                    <div className="flex items-center justify-between h-fit">
                                                        <div className="space-y-1">
                                                            <div className="h-0.5 w-6 bg-neon" />
                                                        </div>
                                                        <div className="w-8 h-8 border border-white/5 rounded-full flex items-center justify-center">
                                                            <div className="w-1 h-1 bg-neon rounded-full animate-pulse" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
