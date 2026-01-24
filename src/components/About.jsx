import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Express.js", "React-Native",
    "Tailwind", "Framer Motion", "MongoDB", "PostgreSQL",
    "Docker", "AWS", "Git"
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

                    <div className="relative overflow-hidden hidden md:block group bg-black/40 ">
                        <img
                            src="/profile.png"
                            alt="Bagavathisingh Profile"
                            className="w-full h-full object-cover md:grayscale hover:grayscale-0 transition-all duration-1000 scale-130 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent hidden md:block" />
                    </div>
                </div>
            </section>


            <section id="capabilities" className="border-b-grid bg-[#0a0a0a]">
                <div className="grid md:grid-cols-12 border-b-grid">
                    <div className="md:col-span-12 p-8 md:p-20 flex flex-col items-center text-center border-b-grid">
                        <h3 className="text-5xl font-black mb-8 uppercase tracking-tighter">Technical Stack</h3>
                        <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                            {skills.map((skill) => (
                                <div key={skill} className="px-6 py-3 border-grid bg-black/40 hover:bg-neon hover:scale-110 cursor-pointer rounded-lg hover:rounded-none transition-all group flex items-center gap-4">
                                    <div className="w-2 h-2 bg-neon group-hover:bg-black transition-colors" />
                                    <span className="font-mono text-sm uppercase font-bold tracking-widest">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 min-h-[500px]">
                    <div className="md:col-span-12 p-8 md:p-20 flex flex-col justify-center bg-grid-pattern">
                        <h3 className="text-5xl font-black mb-12 uppercase tracking-tighter">What Can I Do?</h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-8 border-grid bg-black/60 backdrop-blur-sm space-y-4 hover:border-neon transition-colors group">
                                <div className="w-12 h-1 bg-neon group-hover:w-full transition-all duration-500" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">Backend Architecture</h4>
                                <p className="text-gray-500 font-mono text-xs leading-relaxed">
                                    I design and manage server-side logic, database structures (SQL and NoSQL), and cloud infrastructure to ensure applications are stable and performant.
                                </p>
                            </div>
                            <div className="p-8 border-grid bg-black/60 backdrop-blur-sm space-y-4 hover:border-neon transition-colors group">
                                <div className="w-12 h-1 bg-neon group-hover:w-full transition-all duration-500" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">Web & Mobile</h4>
                                <p className="text-gray-500 font-mono text-xs leading-relaxed">
                                    Using React, Next.js, and Flutter, I build responsive user interfaces that work seamlessly across browsers and mobile platforms.
                                </p>
                            </div>
                            <div className="p-8 border-grid bg-black/60 backdrop-blur-sm space-y-4 hover:border-neon transition-colors group">
                                <div className="w-12 h-1 bg-neon group-hover:w-full transition-all duration-500" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">AI Automation</h4>
                                <p className="text-gray-500 font-mono text-xs leading-relaxed">
                                    I integrate large language models and automated tools into existing systems to streamline processes and provide intelligent user experiences.
                                </p>
                            </div>
                            <div className="p-8 border-grid bg-black/60 backdrop-blur-sm space-y-4 hover:border-neon transition-colors group">
                                <div className="w-12 h-1 bg-neon group-hover:w-full transition-all duration-500" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">Cloud & Systems</h4>
                                <p className="text-gray-500 font-mono text-xs leading-relaxed">
                                    Experience in deploying and maintaining applications on cloud platforms like AWS and Vercel, focusing on uptime and security.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
