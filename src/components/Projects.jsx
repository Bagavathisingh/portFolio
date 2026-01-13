import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "BUGZX_MOTION",
        id: "PRJ-01",
        description: "Built bugzx-motion, an experimental UI and motion framework for React and Next.js focused on motion-first components and clean developer experience.",
        tech: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS 4" , "Radix UI" , "Lucide React"],
        live: "https://website.bugzx-motion.pages.dev",
        github: "https://github.com/Bagavathisingh/bugzx-motion"
    },
    {
        title: "E-LEARNING PLATFORM",
        id: "PRJ-02",
        description: "A comprehensive LMS with video streaming, progress tracking, and interactive quizzes.",
        tech: ["Next.js", "TypeScript", "Prisma"],
        live: "https://metastudy.vercel.app",
        github: "https://github.com/Bagavathisingh/metalearn"
    },
    {
        title: "CYBERBOY CHATBOT",
        id: "PRJ-03",
        description: "Intelligent chatbot for cybersecurity queries and tech solutions.",
        tech: ["React", "OpenRouter", "MongoDB"],
        live: "https://cyberboybot.netlify.app",
        github: "https://github.com/Bagavathisingh/cyberBoy"
    },
    {
        title: "TASK MANAGER",
        id: "PRJ-04",
        description: "Real-time collaboration tool with drag-and-drop kanban boards.",
        tech: ["React", "Firebase", "Tailwind"],
        live: "https://task-manger-rust.vercel.app/",
        github: "https://github.com/Bagavathisingh/task-Manger"
    },
    {
        title: "WEATHER DASHBOARD",
        id: "PRJ-05",
        description: "Beautiful data visualization of weather analytics across the globe.",
        tech: ["Vue.js", "D3.js", "OpenWeather"],
        live: "https://weather-motion.vercel.app",
        github: "https://github.com/Bagavathisingh/weatherApp"
    },
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section id="projects" className="py-0 border-b-grid">
            <div className="grid md:grid-cols-12 min-h-screen">

                {/* Sticky Header Left */}
                <div className="md:col-span-2 p-8 border-r-grid flex flex-row md:flex-col justify-between items-start md:items-start bg-[#0a0a0a] z-10">
                    <h2 className="text-4xl font-black writing-vertical-rl">PROJECTS</h2>

                </div>

                {/* Project List Right */}
                <div className="md:col-span-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-b-grid last:border-b-0 relative"
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="p-8 md:p-12 transition-all duration-300 group-hover:bg-[#111]">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                                    <div className="flex items-baseline gap-4">

                                        <h3 className="text-3xl md:text-5xl font-black uppercase group-hover:translate-x-4 transition-transform duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-mono border-grid px-2 py-1">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <p className="text-gray-400 font-mono leading-relaxed group-hover:text-gray-300">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-start md:justify-end gap-6">
                                        <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-neon underline decoration-neon font-bold">
                                            LIVE DEMO <ArrowUpRight size={16} />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-neon underline decoration-neon font-bold">
                                            GITHUB REPO <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
