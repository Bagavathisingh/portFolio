import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Tailwind", "Framer Motion", "MongoDB", "PostgreSQL",
    "Docker", "AWS", "Git", "Figma"
];

const About = () => {
    return (
        <section id="about" className="border-b-grid bg-[#0d0d0d]">
            <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-24 border-r-grid">

                    <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase leading-none">
                        Engineering <br /> <span className="text-stroke text-transparent">The Future</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-mono leading-relaxed mb-8">
                        I approach development with an engineer's mindset and an artist's eye. Every line of code is a brushstroke in a larger digital composition.
                    </p>
                    <p className="text-lg text-gray-400 font-mono leading-relaxed">
                        Specializing in building scalable web applications that prioritize user experience without sacrificing performance.
                    </p>
                </div>

                <div className="p-12 md:p-24 bg-grid-pattern">
                    <h3 className="text-xl font-bold mb-8 border-b-grid pb-4 inline-block">TECHNICAL ARSENAL</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <div key={skill} className="flex items-center gap-3 group cursor-crosshair">
                                <div className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-neon transition-colors" />
                                <span className="font-mono text-sm uppercase group-hover:text-white transition-colors text-gray-400">{skill}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-6 border-grid bg-[#0a0a0a]">
                        <div className="flex justify-between font-mono text-xs text-gray-500 mb-2">
                            <span>STATUS</span>
                            <span className="text-neon">ACTIVE</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1">
                            <div className="bg-neon h-full w-[85%] animate-pulse" />
                        </div>
                        <p className="font-mono text-xs mt-4 text-gray-400">
                            CURRENTLY OPTIMIZING ALGORITHMS AND LEARNING RUST.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
