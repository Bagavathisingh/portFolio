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
        icon: <Search className="w-6 md:w-8 h-6 md:h-8" />,
        title: "ANALYSIS",
        desc: "Defining functional requirements and ensuring a clear technical roadmap.",
    },
    {
        icon: <Layers className="w-6 md:w-8 h-6 md:h-8" />,
        title: "ARCHITECTURE",
        desc: "Structuring databases and UI components for scalability and performance.",
    },
    {
        icon: <Code2 className="w-6 md:w-8 h-6 md:h-8" />,
        title: "DEVELOPMENT",
        desc: "Building core logic with clean, maintainable, high-precision code.",
    },
    {
        icon: <Rocket className="w-6 md:w-8 h-6 md:h-8" />,
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
        <div className="bg-[#050505] min-h-screen pt-20 md:pt-24 font-mono text-white overflow-hidden">
            {/* Header / Intro */}
            <header className="border-b border-white/5 flex">
                <div className="flex-1 p-8 md:p-16 lg:p-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none uppercase mb-8 md:mb-12">
                            THE <br /> <span className="text-transparent text-stroke opacity-30">PROCESS_</span>
                        </h1>
                        <p className="max-w-2xl text-sm md:text-lg text-gray-500 leading-relaxed uppercase tracking-widest">
                            A structural engineering methodology for the delivery of high-performance digital systems.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Workflow Modules */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/5 bg-white/[0.01]">
                {workflow.map((item, index) => (
                    <div key={index} className="p-8 md:p-12 border-b sm:border-b-0 sm:border-r border-white/5 group hover:bg-neon transition-all duration-500 cursor-default min-h-[300px] flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="text-gray-700 group-hover:!text-black transition-colors">{item.icon}</div>
                            <span className="text-[10px] text-white/10 group-hover:!text-black/20 font-black">0{index + 1}</span>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-white group-hover:!text-black">{item.title}</h3>
                            <p className="text-[10px] md:text-xs text-gray-500 font-medium group-hover:!text-black/60 leading-relaxed uppercase tracking-widest">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Tech Manifest */}
            <section className="border-b border-white/5 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-black">
                <div className="lg:col-span-4 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter text-white leading-none">DEV_STACK</h2>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Core Technologies & Frameworks</p>
                </div>

                <div className="lg:col-span-8 p-1 gap-px bg-white/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {techStack.map((tech, index) => (
                        <div key={index} className="bg-[#050505] p-6 md:p-10 hover:bg-white/[0.03] transition-colors group">
                            <div className="text-xs md:text-sm font-black uppercase tracking-widest text-white mb-2">{tech.name}</div>
                            <div className="text-[8px] md:text-[9px] font-bold text-gray-600 uppercase tracking-widest">{tech.category}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="p-12 md:p-32 text-center relative overflow-hidden flex flex-col items-center">
                <div className="mb-12">
                    <h2 className="text-5xl md:text-8xl font-black mb-16 uppercase tracking-tighter text-white leading-none">GET IN TOUCH_</h2>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative px-10 md:px-16 py-6 md:py-8 border border-neon flex items-center gap-6 overflow-hidden hover:bg-neon transition-all duration-500"
                >
                    <div className="relative z-10 flex items-center gap-4">
                        <span className="text-neon group-hover:!text-black font-black uppercase tracking-[0.3em] text-xl md:text-2xl">Contact Me</span>
                        <ArrowRight className="text-neon group-hover:!text-black transform group-hover:translate-x-4 transition-transform w-6 h-6 md:w-8 md:h-8" />
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
