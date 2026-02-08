"use client";

import { motion } from "framer-motion";
import TextScramble from "../ui/TextScramble";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Award, Briefcase, GraduationCap, Code, ShieldCheck, Terminal, Layers } from "lucide-react";

export default function Resume() {
    const experiences = [
        {
            role: "Frontend Team Lead",
            company: "SGSN Associate Pvt Ltd",
            location: "Dehradun, Uttarakhand",
            period: "28-05-25 - PRESENT",
            points: [
                "Leading front-end development across 20+ applications with strong focus on debugging, UI architecture, and performance.",
                "Responsible for design decisions, scalable component development, and mentoring the team on best practices.",
                "Improved code quality and delivery speed through optimized workflows and modern front-end standards."
            ]
        },
        {
            role: "Software Developer Executive",
            company: "Boon",
            location: "Gurgaon",
            period: "15-01-2024 - 25-05-25",
            points: [
                "Worked primarily as a backend developer while also building full-stack features to modernize legacy applications.",
                "Developed responsive React.js UI with Pandas for state management, API integrations, and reusable components."
            ]
        }
    ];

    const projects = [
        {
            name: "WaterAI – AI-driven CRM & Smart Operations Platform",
            tag: "AI & CRM",
            details: "AI-powered platform for predictive maintenance, CRM analytics, billing management & field operations using Python, AWS, and React.js."
        },
        {
            name: "Smart Face Recognition Attendance System",
            tag: "Computer Vision",
            details: "Face recognition based system for automated attendance logging without manual intervention using Python, OpenCV, and dlib."
        },
        {
            name: "Plant Disease Detection System",
            tag: "ML & Image Classification",
            details: "ML-based disease detection system for plant leaf identification using image classification with React.js, TensorFlow, and FastAPI."
        }
    ];

    return (
        <div className="min-h-screen bg-transparent py-20 px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
                {/* Header */}
                <div className="p-8 md:p-12 border-b border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-accent/5">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase"><TextScramble text="Amaan Ansari" /></h1>
                            <p className="text-primary font-bold tracking-widest uppercase text-sm">Computer Science and Engineering</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[11px] text-muted-foreground font-bold uppercase tracking-widest">
                            <a href="mailto:ansarizamil41@email.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Mail size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>ansarizamil41@email.com</span>
                            </a>
                            <a href="tel:+918077701409" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Phone size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>+91-8077701409</span>
                            </a>
                            <div className="flex items-center gap-3 cursor-default">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span className="text-[9px]">Uttarakhand, India</span>
                            </div>
                            <a href="https://www.linkedin.com/in/amaan-ansari-b01b37224" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Linkedin size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/Amaanansari313" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Github size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 space-y-16">
                    {/* Summary */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-4 text-primary">
                            <Terminal size={20} />
                            <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Executive Summary" /></h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-medium">
                            Frontend Team Lead and Full Stack Developer with expertise in leading development across 20+ applications.
                            Strong focus on debugging, UI architecture, and performance. Experienced in backend development,
                            API integrations, and modernizing legacy applications.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-4 text-primary">
                            <Code size={20} />
                            <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Technical Arsenal" /></h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { cat: "Languages", val: "JavaScript, Python, C++, C" },
                                { cat: "Frameworks", val: "React.js, FastAPI, Node.js, TensorFlow" },
                                { cat: "Cloud/DevOps", val: "AWS, Docker, REST APIs" },
                                { cat: "Databases", val: "DynamoDB, MySQL" },
                                { cat: "Tools", val: "Git, VS Code, Postman" },
                                { cat: "AI & ML", val: "OpenCV, dlib, Machine Learning" }
                            ].map(item => (
                                <div key={item.cat} className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                                    <div className="text-[8px] uppercase tracking-[0.2em] text-primary/60 mb-1">{item.cat}</div>
                                    <div className="text-xs font-bold text-foreground">{item.val}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-4 text-primary">
                            <Briefcase size={20} />
                            <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Experience" /></h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="space-y-12">
                            {experiences.map((exp, i) => (
                                <div key={i} className="relative pl-8 border-l border-white/10 space-y-4">
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                                            <div className="text-xs font-bold text-primary/60 uppercase tracking-widest mt-1">{exp.company}</div>
                                        </div>
                                        <span className="text-[10px] font-mono font-black bg-primary/10 text-primary px-3 py-1 rounded-full uppercase self-start">{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2 pt-2">
                                        {exp.points.map((point, j) => (
                                            <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                                                <span className="text-primary/40 pt-1 shrink-0">◢</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Featured Projects Highlight */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-4 text-primary">
                            <Layers size={20} />
                            <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Key Engineering" /></h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {projects.map(proj => (
                                <div key={proj.name} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-2">{proj.tag}</div>
                                    <h4 className="font-bold text-sm mb-2">{proj.name}</h4>
                                    <p className="text-[10px] text-muted-foreground leading-relaxed">{proj.details}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-4 text-primary">
                            <GraduationCap size={20} />
                            <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Education" /></h2>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { title: "Bachelors of Technology", school: "Uttarakhand Technical University", period: "2024", sub: "Computer Science and Engineering • CGPA: 8.0" }
                            ].map(edu => (
                                <div key={edu.title} className="space-y-1">
                                    <h4 className="font-bold text-foreground tracking-tight">{edu.title}</h4>
                                    <div className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-medium">{edu.school}</div>
                                    <div className="text-[10px] text-primary/60 font-mono font-bold pt-1">{edu.period} • {edu.sub}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certs & Sims - Keeping structure but removing old certs unless specified, or keeping as placeholder since resume didn't explicitly list them in the provided snippet but usually they exist. 
                       The prompt says "update the content... with my resume content". I'll comment out or reduce to generic if none found, but actually looking at the image again:
                       The image shows "POSITIONS OF RESPONSIBILITY" at the bottom. 
                       It DOES NOT show Certifications. It shows "Technical Skills and Interests".
                       I will replace the Certs/Sims section with "Positions of Responsibility".
                    */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                        <section className="space-y-6">
                            <div className="flex items-center gap-4 text-primary">
                                <ShieldCheck size={20} />
                                <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Positions of Responsibility" /></h2>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Front-End Team Lead SGSN Associates PVT L.T.D. (Jan 2025 - Present)",
                                    "Head of AI & Cloud Integration WaterAI Project (Jan 2024 - 2025)"
                                ].map(pos => (
                                    <div key={pos} className="flex items-center gap-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                                        {pos}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="p-8 md:p-12 bg-white/5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            <Github size={18} /> GitHub
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            <Linkedin size={18} /> LinkedIn
                        </div>
                        <a href="mailto:ansarizamil41@email.com" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={18} /> Email
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-background font-black uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-all shadow-lg active:scale-95"
                        >
                            <Download size={16} /> Save Narrative PDF
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
