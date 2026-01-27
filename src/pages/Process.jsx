import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Layers,
    Code2,
    Rocket,
    ArrowRight,
} from 'lucide-react';
import ContactModal from '../components/ui/ContactModal';

const workflow = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "ANALYSIS",
        desc: "Defining functional requirements and ensuring a clear technical roadmap.",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "ARCHITECTURE",
        desc: "Structuring databases and UI components for scalability and performance.",
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "DEVELOPMENT",
        desc: "Building core logic with clean, maintainable, high-precision code.",
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "DEPLOYMENT",
        desc: "Final optimization and deployment to a stable cloud-native environment.",
    }
];

const techStack = [
    { name: "React / Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Firebase", category: "Cloud" },
    { name: "Figma", category: "Design" },
    { name: "TypeScript", category: "Logic" },
];

const Process = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-[#050505] min-h-screen pt-16 font-mono text-white">
            {/* Header / Intro */}
            <header className="border-b border-white/5 flex">
                <div className="flex-1 p-8 md:p-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase mb-12">
                            THE <br /> <span className="text-transparent text-stroke opacity-30">PROCESS_</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-gray-500 leading-relaxed">
                            A structural engineering methodology for the delivery of high-performance digital systems.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Workflow Modules */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/5">
                {workflow.map((item, index) => (
                    <div key={index} className="p-12 border-b md:border-b-0 lg:border-r border-white/5 group hover:bg-neon transition-all duration-500 cursor-default">
                        <div className="flex justify-between items-start mb-12">
                            <div className="text-gray-700 group-hover:text-black transition-colors">{item.icon}</div>
                        </div>
                        <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-white group-hover:text-black">{item.title}</h3>
                        <p className="text-xs text-gray-500 font-medium group-hover:text-black/60 leading-relaxed uppercase tracking-widest mb-12 min-h-[60px]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </section>

            {/* Tech Manifest */}
            <section className="border-b border-white/5 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
                <div className="lg:col-span-4 p-8 md:p-16 border-r border-white/5 bg-white/[0.01] flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 tracking-tighter text-white leading-none">DEV_STACK</h2>
                </div>

                <div className="lg:col-span-8 p-1 gap-px bg-white/5 grid grid-cols-2 md:grid-cols-4">
                    {techStack.map((tech, index) => (
                        <div key={index} className="bg-[#050505] p-8 hover:bg-white/[0.03] transition-colors group">
                            <div className="text-xs font-black uppercase tracking-widest text-white mb-2">{tech.name}</div>
                            <div className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">{tech.category}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action: Dispatch */}
            <section className="p-12 md:p-32 text-center relative overflow-hidden flex flex-col items-center">
                <div className="mb-12">
                    <h2 className="text-5xl md:text-8xl font-black mb-16 uppercase tracking-tighter text-white leading-none">GET IN TOUCH_</h2>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative px-16 py-8 border border-neon flex items-center gap-6 overflow-hidden hover:bg-neon transition-all duration-500"
                >
                    <div className="relative z-10 flex items-center gap-4">
                        <span className="text-neon group-hover:text-black font-black uppercase tracking-[0.3em] text-2xl">Contact Me</span>
                        <ArrowRight className="text-neon group-hover:text-black transform group-hover:translate-x-4 transition-transform" size={32} />
                    </div>
                </button>
            </section>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Process;
