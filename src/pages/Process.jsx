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
    Monitor,
    Database,
    Figma,
    Terminal
} from 'lucide-react';
import ContactModal from '../components/ui/ContactModal';

const workflow = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "01 / DISCOVERY",
        desc: "I dive deep into your brand, goals, and audience. We define the problem and architect a roadmap for success.",
        color: "text-blue-400"
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "02 / DESIGN",
        desc: "Wireframing and high-fidelity UI design. I focus on aesthetics that wow and UX that converts.",
        color: "text-purple-400"
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "03 / DEVELOPMENT",
        desc: "Clean, scalable, and modern code using the latest frameworks. Performance-first architecture.",
        color: "text-neon"
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "04 / DEPLOYMENT",
        desc: "Rigorous testing across all devices followed by a smooth launch and continuous optimization.",
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
        <div className="bg-[#0a0a0a] min-h-screen pt-20 pb-20">
            {/* Header */}
            <header className="p-8 md:p-24 border-b-grid relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <span className="font-mono text-neon text-sm tracking-widest border-grid px-3 py-1 mb-6 inline-block">THE_BLUEPRINT</span>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase">
                        How I <br /> <span className="text-stroke text-transparent">Build_</span>
                    </h1>
                    <p className="max-w-2xl text-xl text-gray-400 mt-8 font-mono leading-relaxed">
                        A systematic approach to transforming complex ideas into high-performance digital realities.
                    </p>
                </motion.div>

                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <div className="grid grid-cols-10 grid-rows-10 h-full border-l-grid border-t-grid">
                        {Array(100).fill(0).map((_, i) => (
                            <div key={i} className="border-r-grid border-b-grid" />
                        ))}
                    </div>
                </div>
            </header>

            {/* Workflow Steps */}
            <section className="p-8 md:p-24 grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-b-grid">
                {workflow.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="p-8 border-grid md:border-r-0 last:border-r-grid group hover:bg-[#111] transition-colors"
                    >
                        <div className={`mb-8 ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                        <p className="text-gray-500 font-mono text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </section>

            {/* Tech Stack */}
            <section className="p-8 md:p-24">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-black uppercase mb-6">Lite Tech <br /> Arsenal_</h2>
                        <p className="text-gray-400 font-mono text-sm mb-8 leading-relaxed">
                            I select the most efficient tools for each mission, ensuring speed, security, and scalability.
                        </p>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-4 border-grid bg-[#0d0d0d] flex flex-col gap-3 group"
                            >
                                <div className="text-neon group-hover:text-white transition-colors">
                                    {tech.icon}
                                </div>
                                <div>
                                    <div className="text-sm font-bold uppercase">{tech.name}</div>
                                    <div className="text-[10px] font-mono text-gray-600">{tech.category}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="p-8 md:p-24 border-t-grid text-center">
                <motion.div
                    whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">Ready to launch?</h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-neon transition-colors text-lg"
                    >
                        Send a Message <Rocket className="w-5 h-5" />
                    </button>
                    <div className="mt-8">
                        <a href="/#contact" className="text-gray-500 font-mono text-xs uppercase hover:text-neon underline underline-offset-4">
                            Or view other contact options
                        </a>
                    </div>
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
