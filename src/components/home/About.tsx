"use client";

import { motion } from "framer-motion";
import TextScramble from "../ui/TextScramble";

const skills = [
    { name: "Python / Django", level: "Expert" },
    { name: "Django REST (DRF)", level: "Expert" },
    { name: "Next.js / React", level: "Advanced" },
    { name: "SQL (Postgres/MySQL)", level: "Senior" },
    { name: "Docker / AWS", level: "Intermediate" },
    { name: "PyQt (Desktop)", level: "Senior" },
    { name: "Machine Learning", level: "Concepts" },
    { name: "Git / Postman", level: "Tools" },
];

const experiences = [
    {
        num: "01",
        year: "2025 - PRESENT",
        role: "Full-stack Developer",
        company: "SGSN Associates Pvt Ltd",
        details: "Orchestrating the convergence of web (Next.js) and desktop (PyQt) systems into a unified digital infrastructure."
    },
    {
        num: "02",
        year: "2024 - 2025",
        role: "Python Developer",
        company: "Mobiloitte Technologies",
        details: "Optimized RESTful APIs, strengthened security protocols for 1,000+ accounts, and streamlined development with reusable components."
    },
    {
        num: "03",
        year: "2021 - 2024",
        role: "BTech Scholar",
        company: "Tula's Institute",
        details: "Deep-dived into Computer Science & Engineering with a focus on DSA, OOPS, and full-stack architecture."
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-transparent">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
                <div className="absolute w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Sticky Sidebar Info */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary/60 block mb-4"><TextScramble text="Biography" /></span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                                    <TextScramble text="CRAFTING" /><br />
                                    <span className="stroke-text"><TextScramble text="DIGITAL" /></span><br />
                                    <TextScramble text="LEGACIES." />
                                </h2>
                            </div>

                            <div className="space-y-6 text-muted-foreground/80 font-medium leading-relaxed">
                                <p>
                                    I am Mo Aarif. I don&#39;t just build applications; I architect digital systems that are as scalable as they are elegant.
                                </p>
                                <p>
                                    Specializing in the Python ecosystem (Django, PyQt) and modern frontend (Next.js), I bridge the gap between complex backend logic and user-centric interfaces.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-2xl font-black tracking-tighter">02+</div>
                                    <div className="text-[8px] uppercase tracking-widest text-muted-foreground font-bold">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black tracking-tighter">20+</div>
                                    <div className="text-[8px] uppercase tracking-widest text-muted-foreground font-bold">Systems Built</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scrolling Content Area */}
                    <div className="lg:col-span-8 space-y-32">

                        {/* Skills Grid */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary/60"><TextScramble text="Core Technology" /></span>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">{skill.name}</span>
                                            <span className="text-[8px] uppercase font-black text-muted-foreground tracking-tighter opacity-40">{skill.level}</span>
                                        </div>
                                        <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary/20 group-hover:bg-primary/60 transition-all duration-500 w-1/3 group-hover:w-full" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Experience List */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary/60"><TextScramble text="Professional Path" /></span>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="space-y-16">
                                {experiences.map((exp, i) => (
                                    <motion.div
                                        key={exp.num}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                                    >
                                        <div className="md:col-span-1">
                                            <span className="text-5xl font-black text-primary/10 group-hover:text-primary/30 transition-colors duration-500">{exp.num}</span>
                                        </div>
                                        <div className="md:col-span-3 pt-4">
                                            <div className="text-[10px] font-mono tracking-widest text-primary mb-1 uppercase bg-primary/10 w-fit px-2 py-0.5 rounded-sm">{exp.year}</div>
                                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{exp.company}</div>
                                        </div>
                                        <div className="md:col-span-8 pt-2">
                                            <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">{exp.role}</h3>
                                            <p className="text-muted-foreground/80 leading-relaxed max-w-xl">
                                                {exp.details}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Education & Certs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-white/5">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary/60"><TextScramble text="Education" /></span>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-foreground">BTech in Computer Science</h4>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Tula&#39;s Institute • 2021 - 2024</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">Diploma in CSE</h4>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Digamber Jain Polytechnic • 2018 - 2021</p>
                                        </div>
                                        <div className="pt-4 border-t border-white/5 space-y-4">
                                            <div>
                                                <h6 className="font-bold text-foreground/80 text-xs uppercase tracking-widest">Intermediate</h6>
                                                <p className="text-[10px] text-muted-foreground">Digamber Jain Inter College • 2017</p>
                                            </div>
                                            <div>
                                                <h6 className="font-bold text-foreground/80 text-xs uppercase tracking-widest">High School</h6>
                                                <p className="text-[10px] text-muted-foreground">A. S. M. Siksha Mandir Inter College • 2014</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary/60"><TextScramble text="Certifications" /></span>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            "OCI 2024 Generative AI Professional",
                                            "Vertex AI Prompt Design (Skill Badge)",
                                            "Deloitte Australia - Data Analytics",
                                            "Software Engineering Virtual Experience"
                                        ].map(cert => (
                                            <div key={cert} className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                {cert}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

