"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Interactive3DCard from "../ui/Interactive3DCard";
import TextScramble from "../ui/TextScramble";

const projects = [
    {
        title: "WaterAI - CRM",
        description: "AI-driven CRM & Smart Operations Platform for predictive maintenance, billing management & field operations.",
        tech: ["Python", "AWS", "React.js", "DynamoDB"],
        image: "",
        color: "#3B82F6"
    },
    {
        title: "Face Recognition",
        description: "Automated attendance system using Face Recognition with timestamp-based Excel logging.",
        tech: ["Python", "OpenCV", "dlib", "HOG"],
        image: "",
        color: "#8B5CF6"
    },
    {
        title: "Plant Disease AI",
        description: "ML-based disease detection system for plant leaf identification using image classification.",
        tech: ["React.js", "TensorFlow", "FastAPI"],
        image: "",
        color: "#10B981"
    }
];

interface ProjectsProps {
    mode?: "featured" | "grid";
    limit?: number;
}

export default function Projects({ mode = "featured", limit }: ProjectsProps) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: mode === "featured" ? targetRef : undefined,
    });

    const displayProjects = limit ? projects.slice(0, limit) : projects;

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

    if (mode === "grid") {
        return (
            <section ref={targetRef} id="projects" className="py-24 md:py-32 relative bg-transparent">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase">
                            <TextScramble text="FULL" /> <span className="text-primary"><TextScramble text="ARCHIVE" /></span>
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-medium">
                            A comprehensive collection of my engineering contributions and creative experiments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {displayProjects.map((project, index) => (
                            <div key={index} className="group relative">
                                <Interactive3DCard className="w-full h-auto md:aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 group">
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-all duration-700 grayscale contrast-125">
                                            {project.image && (
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} - ${project.description}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                        <div
                                            className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                                            style={{ background: `radial-gradient(circle at top right, ${project.color}, transparent)` }}
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 min-h-[320px] md:h-full flex flex-col justify-end relative z-10">
                                        {/* Tech Tags - Flow on mobile, Absolute on MD+ */}
                                        <div className="relative md:absolute md:top-8 md:left-8 flex flex-wrap gap-2 mb-4 md:mb-0">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2.5 py-1 bg-primary/10 md:bg-white/5 backdrop-blur-md border border-primary/20 md:border-white/10 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary md:text-primary/80">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter"><TextScramble text={project.title} /></h3>
                                        <p className="text-sm text-muted-foreground/90 font-medium mb-6 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <Link
                                            href={`/projects`}
                                            aria-label={`View details for ${project.title}`}
                                            className="text-[10px] md:text-xs uppercase font-black tracking-[0.3em] group-hover:text-primary transition-colors inline-flex items-center gap-2"
                                        >
                                            VIEW DETAILS <span className="text-lg md:text-xl">→</span>
                                        </Link>
                                    </div>
                                </Interactive3DCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={targetRef} id="projects" className="relative h-[400vh] bg-transparent">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pl-[5vw]">
                <div className="mb-12 pl-8">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                        <TextScramble text="SELECTED" /> <span className="stroke-text opacity-100 italic"><TextScramble text="WORKS" /></span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 md:gap-16 w-max pr-[5vw]">
                    {displayProjects.map((project, index) => (
                        <div key={index} className="flex-none w-[88vw] md:w-[65vw] h-[70vh] md:h-[65vh] relative">
                            <Interactive3DCard className="w-full h-full">
                                <div
                                    className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm z-0"
                                    style={{ background: `linear-gradient(to bottom right, ${project.color}15, ${project.color}05)` }}
                                />

                                <div className="relative z-10 w-full h-full p-6 md:p-12 flex flex-col md:flex-row justify-between items-center overflow-hidden rounded-3xl">
                                    <div className="flex-1 max-w-lg z-20 flex flex-col h-full">
                                        <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
                                            <span className="font-black text-2xl md:text-4xl text-primary/30">0{index + 1}</span>
                                            <div className="flex flex-wrap gap-2 text-[9px] md:text-xs text-primary uppercase tracking-[0.2em] font-black">
                                                {project.tech.map(t => <span key={t} className="px-2 py-1 bg-primary/10 rounded-md">#{t}</span>)}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl md:text-[4rem] leading-[1] font-black mb-6 uppercase tracking-tighter">
                                            <TextScramble text={project.title} trigger={false} />
                                        </h3>
                                        <p className="text-base md:text-xl text-muted-foreground/80 leading-relaxed mb-10 font-medium line-clamp-4 md:line-clamp-none">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto md:mt-0 pb-4 md:pb-0">
                                            <Link
                                                href={`/projects`}
                                                aria-label={`View case study for ${project.title}`}
                                                className="inline-flex px-8 py-4 bg-foreground text-background rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300"
                                            >
                                                VIEW CASE STUDY
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Decorative Visual/Gradient */}
                                    <div className="absolute right-0 top-0 w-full md:w-[45%] h-full md:border-l border-white/10 overflow-hidden group pointer-events-none md:pointer-events-auto">
                                        <div className="absolute inset-0 z-0 opacity-10 md:opacity-40 group-hover:opacity-60 transition-all duration-1000 grayscale contrast-125 brightness-[0.8]">
                                            {project.image && (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                        <div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] blur-[120px] opacity-20 md:opacity-30 z-10"
                                            style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
                                        />
                                    </div>
                                </div>
                            </Interactive3DCard>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
