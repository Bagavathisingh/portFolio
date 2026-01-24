import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Layers,
    Code2,
    Rocket,
    Cpu,
    Globe,
    Zap,
    Database,
    Figma,
    Terminal,
    ArrowRight
} from 'lucide-react';
import ContactModal from '../components/ui/ContactModal';

const workflow = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "ANALYSIS",
        desc: "We start by defining project goals and functional requirements to ensure a clear development roadmap.",
        color: "text-blue-400"
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "ARCHITECTURE",
        desc: "Structuring the database and UI components. I focus on creating a layout that is both intuitive and scalable.",
        color: "text-purple-400"
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "DEVELOPMENT",
        desc: "Building the core logic using modern frameworks. Writing clean, maintainable code is the primary focus.",
        color: "text-neon"
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "DEPLOYMENT",
        desc: "Final testing followed by deployment to a stable cloud environment, ensuring everything runs smoothly.",
        color: "text-orange-400"
    }
];

const techStack = [
    { name: "React / Next.js", icon: <Globe className="w-5 h-5" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <Layers className="w-5 h-5" />, category: "Styling" },
    { name: "Framer Motion", icon: <Zap className="w-5 h-5" />, category: "Animation" },
    { name: "Node.js", icon: <Cpu className="w-5 h-5" />, category: "Backend" },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, category: "Database" },
    { name: "Firebase", icon: <Rocket className="w-5 h-5" />, category: "Cloud" },
    { name: "Figma", icon: <Figma className="w-5 h-5" />, category: "Design" },
    { name: "TypeScript", icon: <Terminal className="w-5 h-5" />, category: "Logic" },
];

const Process = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-[#0a0a0a] min-h-screen pt-20">

            <header className="p-8 md:p-24 border-b-grid relative overflow-hidden bg-[#0d0d0d]">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <span className="font-mono text-neon text-xs tracking-[0.4em] mb-6 inline-block opacity-60">WORKFLOW_OVERVIEW</span>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase mb-8">
                        THE <br /> <span className="text-stroke text-transparent">PROCESS_</span>
                    </h1>
                    <p className="max-w-2xl text-xl text-gray-400 font-mono leading-relaxed">
                        A structured approach to building digital solutions, focusing on clarity, performance, and long-term maintainability.
                    </p>
                </motion.div>
            </header>

            <section className="grid lg:grid-cols-4 border-b-grid">
                {workflow.map((item, index) => (
                    <div key={index} className="p-12 border-b-grid md:border-b-0 lg:border-r-grid last:border-r-0 group hover:bg-white/[0.02] transition-colors relative">
                        <div className={`${item.color} mb-12 group-hover:scale-110 transition-transform duration-500 w-fit`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-gray-500 font-mono text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </section>

            <section className="p-8 md:p-24 border-b-grid bg-[#0d0d0d]">
                <div className="grid md:grid-cols-12 gap-16 items-center">
                    <div className="md:col-span-4">
                        <span className="font-mono text-neon text-xs tracking-widest mb-4 block">TOOLS</span>
                        <h2 className="text-5xl font-black uppercase mb-8 tracking-tighter">Development <br /> Stack_</h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                            I use a curated selection of frameworks and tools to build scalable, high-performance applications.
                        </p>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {techStack.map((tech, index) => (
                            <div key={index} className="p-6 border-grid bg-black/40 flex flex-col gap-4 group hover:border-neon transition-colors">
                                <div className="text-neon">
                                    {tech.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-white">{tech.name}</div>
                                    <div className="text-[9px] font-mono text-gray-600 mt-1">{tech.category}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="p-12 md:p-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter">Ready to Start?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center gap-4 bg-neon text-black px-12 py-6 font-black uppercase tracking-widest hover:bg-white transition-all text-xl"
                        >
                            Contact Now <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                    <p className="mt-10 font-mono text-sm text-gray-500 uppercase tracking-widest">
                        Available for new projects starting 2026
                    </p>
                </motion.div>
            </section>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Process;
