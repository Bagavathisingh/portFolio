import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Cpu, Database } from 'lucide-react';

const skills = [
    { name: "React", level: "95%" },
    { name: "Next.js", level: "90%" },
    { name: "TypeScript", level: "85%" },
    { name: "Node.js", level: "88%" },
    { name: "Express.js", level: "85%" },
    { name: "React-Native", level: "82%" },
    { name: "Tailwind", level: "95%" },
    { name: "Framer Motion", level: "90%" },
    { name: "MongoDB", level: "80%" },
    { name: "PostgreSQL", level: "80%" },
    { name: "Docker", level: "75%" },
    { name: "AWS", level: "70%" },
    { name: "Git", level: "92%" }
];

const About = () => {
    return (
        <div className="bg-[#050505] overflow-hidden font-mono">
            <section id="about" className="border-b-grid bg-[#0d0d0d]">
                <div className="grid md:grid-cols-2 min-h-[500px]">
                    <div className="p-8 md:p-16 lg:p-24 border-r-grid flex flex-col justify-center">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 uppercase tracking-tighter text-white">Who Am I?</h3>
                        <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                            <p>
                                I am an India-based developer focused on creating effective digital solutions through full-stack web and mobile development. My background in building scalable applications has taught me that the best software isn't just about the latest features, but about reliability and long-term maintainability.
                            </p>
                            <p>
                                I believe in a pragmatic approach to development. Instead of chasing every new trend, I prioritize selecting the right tools for the specific problem at hand. This ensures that the systems I build are robust, efficient, and tailored to the actual needs of the users and businesses.
                            </p>
                            <p className="hidden sm:block">
                                Over the years, I've developed a strong discipline for writing clean, documented code and maintaining open communication with clients. I find deep satisfaction in taking a complex requirement and breaking it down into a series of logical, manageable components.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-10 md:mt-16">
                            <a
                                href="https://www.upwork.com/freelancers/~01d0a3304780aaa39a"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-[#14a800] text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors text-sm"
                            >
                                UPWORK <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.fiverr.com/s/99Dmwmx"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-[#1dbf73] text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors text-sm"
                            >
                                FIVERR <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="relative overflow-hidden hidden md:block h-[400px] md:h-auto group bg-black/40 border-t md:border-t-0 border-white/5">
                        <img
                            src="/profile.png"
                            alt="Bagavathisingh Profile"
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-40 md:opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            <section id="capabilities" className="border-b-grid bg-black">
                <div className="grid lg:grid-cols-12 min-h-[400px]">
                    <div className="lg:col-span-4 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none text-white mb-6">TECH<br />STACK_</h3>
                            <p className="text-[10px] md:text-xs text-gray-500 font-medium leading-relaxed uppercase tracking-widest">
                                Curated selection of frameworks and languages for high-performance development.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 p-6 md:p-12 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 bg-grid-pattern">
                        {skills.map((skill) => (
                            <div key={skill.name} className="p-4 border border-white/5 bg-white/[0.01] hover:bg-neon transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[9px] font-bold text-gray-500 group-hover:!text-black transition-colors">{skill.level}</span>
                                    <div className="w-1.5 h-1.5 bg-gray-800 group-hover:!bg-black transition-colors" />
                                </div>
                                <span className="text-xs font-black tracking-widest text-white uppercase group-hover:!text-black transition-colors">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="p-8 md:p-16 lg:p-24 bg-black flex flex-col gap-12 md:gap-16">
                <div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-white">CAPABILITIES_</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-1">
                    {[
                        { icon: Database, val: "Backend Systems", desc: "Design and management of server-side logic, database structures (SQL/NoSQL)." },
                        { icon: Globe, val: "Web & Mobile", desc: "Building responsive UIs with Next.js and Cross-platform Mobile apps." },
                        { icon: Cpu, val: "AI Integration", desc: "LLM implementation and automated workflows for intelligent experiences." },
                        { icon: Code2, val: "Execution", desc: "Infrastructure deployment and maintenance on AWS, Vercel, and Docker." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 md:p-10 border border-white/5 bg-white/[0.02] hover:bg-neon transition-all duration-500 group relative overflow-hidden">
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-12">
                                    <item.icon className="text-neon group-hover:!text-black transition-colors" size={32} />
                                </div>
                                <div>
                                    <div className="text-lg md:text-xl font-black tracking-tighter uppercase text-white group-hover:!text-black mb-4">{item.val}</div>
                                    <p className="text-xs text-gray-500 font-medium group-hover:!text-black/60 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
