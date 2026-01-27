import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Cpu } from 'lucide-react';

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
        <>

            <section id="about" className="border-b-grid bg-[#0d0d0d]">
                <div className="grid md:grid-cols-2 min-h-[500px]">
                    <div className="p-8 md:p-20 border-r-grid flex flex-col justify-center">
                        <h3 className="text-5xl font-black mb-10 uppercase tracking-tighter">Who Am I?</h3>
                        <div className="space-y-6 text-gray-400 font-mono text-base leading-relaxed max-w-2xl">
                        <p>
                            I am an India-based developer focused on creating effective digital solutions through full-stack web and mobile development. My background in building scalable applications has taught me that the best software isn't just about the latest features, but about reliability and long-term maintainability.
                        </p>
                        <p>
                            I believe in a pragmatic approach to development. Instead of chasing every new trend, I prioritize selecting the right tools for the specific problem at hand. This ensures that the systems I build are robust, efficient, and tailored to the actual needs of the users and businesses.
                        </p>
                            <p>
                                Over the years, I've developed a strong discipline for writing clean, documented code and maintaining open communication with clients. I find deep satisfaction in taking a complex requirement and breaking it down into a series of logical, manageable components that work together seamlessly.
                            </p>
                            <p>
                                Outside of coding, I'm constantly learning new technologies and refining my existing skills. Whether it's optimizing a backend query or polishing a mobile UI, I'm committed to delivering work that I'm proud of and that provides genuine value.
                        </p>
                    </div>

                        <div className="flex flex-wrap gap-4 mt-10">
                        <a
                            href="https://www.upwork.com/freelancers/~01d0a3304780aaa39a"
                            target="_blank"
                            rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-[#14a800] text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors md:w-fit"
                        >
                                HIRE ME ON UPWORK <ArrowUpRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.fiverr.com/s/99Dmwmx"
                            target="_blank"
                            rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-[#1dbf73] text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors md:w-fit"
                        >
                                HIRE ME ON FIVERR <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                    <div className="relative overflow-hidden h-[1000px] hidden md:block group bg-black/40 ">
                    <img
                        src="/profile.png"
                        alt="Bagavathisingh Profile"
                            className="w-full h-[1500px] object-cover transition-all duration-1000 group-hover:scale-101 opacity-60 group-hover:opacity-100"
                    />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent hidden md:block" />
                    </div>
                </div>
            </section>

            {/* Technical Parameters */}
            <section id="capabilities" className="grid grid-cols-1 bg-black lg:grid-cols-12 border-b border-white/5">
                <div className="lg:col-span-4 p-8 md:p-16 border-r border-white/5 flex flex-col justify-center">
                    <div>
                        <h3 className="text-4xl font-black tracking-tighter uppercase leading-none text-white mb-8">TECH<br />STACK_</h3>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed uppercase tracking-widest">
                            Curated selection of frameworks and languages for high-performance development.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-8 p-6 md:p-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
            </section>

            {/* Capabilities Modules */}
            <section className="p-8 md:p-16  bg-black flex flex-col gap-16">
                <div>
                    <h3 className="text-5xl font-black tracking-tighter uppercase leading-none text-white">CAPABILITIES_</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {[
                        { icon: Database, label: "Architecture", val: "Backend Systems", desc: "Design and management of server-side logic, database structures (SQL/NoSQL)." },
                        { icon: Globe, label: "Interface", val: "Web & Mobile", desc: "Building responsive UIs with Next.js and Cross-platform Mobile apps." },
                        { icon: Cpu, label: "Automation", val: "AI Integration", desc: "LLM implementation and automated workflows for intelligent experiences." },
                        { icon: Code2, label: "Execution", val: "Cloud Systems", desc: "Infrastructure deployment and maintenance on AWS, Vercel, and Docker." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 border border-white/5 bg-white/[0.02] hover:bg-neon transition-all duration-500 group relative overflow-hidden">
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-12">
                                    <item.icon className="text-neon group-hover:!text-black transition-colors" size={32} />
                                </div>
                                <div>
                                    <div className="text-xl font-black tracking-tighter uppercase text-white group-hover:!text-black mb-4">{item.val}</div>
                                    <p className="text-xs text-gray-500 font-medium group-hover:!text-black/60 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

const Database = ({ className, size }) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>;

export default About;
