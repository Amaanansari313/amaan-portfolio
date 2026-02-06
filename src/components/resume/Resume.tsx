"use client";

import { motion } from "framer-motion";
import TextScramble from "../ui/TextScramble";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Award, Briefcase, GraduationCap, Code, ShieldCheck, Terminal, Layers } from "lucide-react";

export default function Resume() {
    const experiences = [
        {
            role: "Full-stack Developer",
            company: "SGSN Associates Pvt Ltd",
            location: "Dehradun, India",
            period: "2025 - PRESENT",
            points: [
                "Architecting high-performance web systems using Next.js and Django.",
                "Designing and deploying cross-platform desktop utilities with Python & PyQt.",
                "Engineering modular UI systems and optimizing backend data pipelines."
            ]
        },
        {
            role: "Python Developer",
            company: "Mobiloitte Technologies India Pvt. Ltd",
            location: "New Delhi, India",
            period: "2024 - 2025",
            points: [
                "Promoted from Trainee within 6 months for exceptional performance.",
                "Optimized RESTful APIs using DRF, enhancing data retrieval efficiency and reducing response times.",
                "Strengthened security protocols, securing 1,000+ accounts and minimizing errors.",
                "Developed scalable web apps using reusable code components to accelerate delivery."
            ]
        }
    ];

    const projects = [
        {
            name: "ICE Button SOS (IoT Emergency System)",
            tag: "IoT & Backend",
            details: "IoT-based emergency alert system with automated transaction, device, and contact management."
        },
        {
            name: "Sniper Bot (Arbitrage Trading)",
            tag: "Blockchain & Python",
            details: "Automated arbitrage trading bot for Uniswap V2/V3 with real-time market analysis."
        },
        {
            name: "Driver Drowsiness Detection",
            tag: "OpenCV & ML",
            details: "Real-time safety system using OpenCV and Haar cascades for high-accuracy eye detection."
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
                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase"><TextScramble text="Mo Aarif" /></h1>
                            <p className="text-primary font-bold tracking-widest uppercase text-sm">Python Developer & Full Stack Architect</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[11px] text-muted-foreground font-bold uppercase tracking-widest">
                            <a href="mailto:moaarif.brt@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Mail size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>moaarif.brt@gmail.com</span>
                            </a>
                            <a href="tel:+918430716493" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Phone size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>+91 8430716493</span>
                            </a>
                            <div className="flex items-center gap-3 cursor-default">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span className="text-[9px]">Dehradun, Uttarakhand, India</span>
                            </div>
                            <a href="https://linkedin.com/in/moaarif-brt" target="_blank" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <Linkedin size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                <span>moaarif-brt</span>
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
                            Results-driven Python Developer with expertise in Django, DRF, and Docker.
                            Proven track record in building scalable backend systems, ML-powered applications,
                            and IoT solutions. Delivered robust systems including optimized emergency alert
                            infrastructures and blockchain-integrated trading bots.
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
                                { cat: "Language", val: "Python, JS, SQL" },
                                { cat: "Backend", val: "Django, DRF" },
                                { cat: "Tools", val: "Docker, AWS, Postman" },
                                { cat: "Engine", val: "PyQt, OpenCV" },
                                { cat: "Analysis", val: "Tableau, Excel, SQL" }
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
                                { title: "BTech Scholar", school: "Tula's Institute, Dehradun", period: "2021 - 2024", sub: "CSE, Specialized in DSA & OOPS" },
                                { title: "Diploma", school: "Digamber Jain Polytechnic", period: "2018 - 2021", sub: "Computer Science (CSE) • 76%" },
                                { title: "Intermediate", school: "Digamber Jain Inter College", period: "2017", sub: "Science / Math Focus • 56%" },
                                { title: "High School", school: "A. S. M. Siksha Mandir", period: "2014", sub: "General Science • 77%" }
                            ].map(edu => (
                                <div key={edu.title} className="space-y-1">
                                    <h4 className="font-bold text-foreground tracking-tight">{edu.title}</h4>
                                    <div className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-medium">{edu.school}</div>
                                    <div className="text-[10px] text-primary/60 font-mono font-bold pt-1">{edu.period} • {edu.sub}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certs & Sims */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section className="space-y-6">
                            <div className="flex items-center gap-4 text-primary">
                                <Award size={20} />
                                <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Badges" /></h2>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>
                            <div className="space-y-3">
                                {[
                                    "OCI Generative AI Professional",
                                    "AWS Academy Graduate - Cloud Foundations",
                                    "Python (4-Star) - HackerRank",
                                    "Vertex AI Prompt Design"
                                ].map(cert => (
                                    <div key={cert} className="flex items-center gap-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                        <Award size={14} className="text-primary/50" />
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center gap-4 text-primary">
                                <ShieldCheck size={20} />
                                <h2 className="text-lg font-black uppercase tracking-widest"><TextScramble text="Simulations" /></h2>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Deloitte Australia Technology Simulation",
                                    "Deloitte Australia Data Analytics Simulation",
                                    "Software Engineering Job Simulation"
                                ].map(sim => (
                                    <div key={sim} className="flex items-center gap-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                                        {sim}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="p-8 md:p-12 bg-white/5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <a href="https://github.com/moaarif-brt" target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/moaarif-brt" target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a href="mailto:moaarif.brt@gmail.com" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
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
