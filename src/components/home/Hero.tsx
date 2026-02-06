"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import MagneticButton from "../ui/MagneticButton";
import TextScramble from "../ui/TextScramble";
import Interactive3DCard from "../ui/Interactive3DCard";

function TimeDisplay() {
    const [time, setTime] = useState<string | null>(null);

    const updateTime = useCallback(() => {
        setTime(new Date().toLocaleTimeString());
    }, []);

    useEffect(() => {
        // Delay to avoid cascading render lint issue
        const timeoutId = setTimeout(updateTime, 0);
        const timer = setInterval(updateTime, 1000);
        return () => {
            clearTimeout(timeoutId);
            clearInterval(timer);
        };
    }, [updateTime]);

    if (!time) return <span className="opacity-0">00:00:00 AM</span>;
    return <span>{time}</span>;
}

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-start pt-32 pb-40 bg-transparent">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
                <div className="absolute top-[10%] left-[5%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="absolute bottom-[15%] left-[20%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Primary Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for Architecture
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-8"
                            >
                                <TextScramble text="Mo Aarif // Global System Architect" />
                            </motion.div>

                            <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black italic tracking-tighter mb-12">
                                <span className="block stroke-text relative overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <TextScramble text="THE EDGE" />
                                    </motion.span>
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
                                    />
                                </span>
                                <span className="block overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className="inline-block"
                                    >
                                        <TextScramble text="OF REALITY" />
                                    </motion.span>
                                </span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
                                <motion.p
                                    className="text-lg text-muted-foreground/80 leading-relaxed font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    I am <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Mo Aarif</span>, a Python Developer based in <span className="text-foreground font-bold">Dehradun</span>.
                                    Building scalable web systems with Django, React, and Next.js.
                                </motion.p>

                                <motion.div
                                    className="border-l border-white/10 pl-6 py-1 space-y-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Current Status</span>
                                        <span className="text-sm font-mono font-bold text-foreground tracking-tighter uppercase whitespace-nowrap">                                        <TextScramble text="Full-stack Developer @ SGSN Associates" />
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Specialization</span>
                                        <span className="text-sm font-mono font-bold text-foreground tracking-tighter uppercase whitespace-nowrap">                                        <TextScramble text="FULL STACK ARCHITECTURE" />
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <MagneticButton onClick={() => window.location.href = '/projects'}>
                                    Explore Works
                                </MagneticButton>

                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground group cursor-pointer" onClick={() => window.location.href = '/about'}>
                                    <span className="w-12 h-px bg-white/10 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                                    <span>Scroll to explore</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Dashboard */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            style={{ y: y1, rotate: isMobile ? 0 : rotate }}
                            className="relative max-w-[320px] md:max-w-none mx-auto lg:mx-0"
                        >
                            <Interactive3DCard className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                <Image
                                    src="/moaarif.jpg"
                                    alt="Mo Aarif"
                                    fill
                                    priority
                                    fetchPriority="high"
                                    sizes="(max-width: 640px) 400px, (max-width: 1024px) 500px, 400px"
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />

                                {/* UI Overlays on Image */}
                                <div className="absolute top-6 left-6 flex flex-col gap-1">
                                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/40">Identification</span>
                                    <span className="text-[12px] font-black tracking-tighter text-white">AARIF_01.M</span>
                                </div>

                                <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-1 h-3 bg-primary/40 rounded-full" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">Verified Identity</span>
                                </div>
                            </Interactive3DCard>

                            {/* Floating Tech Data Card */}
                            <motion.div
                                style={{ y: y2 }}
                                className="absolute bottom-6 -left-6 md:-left-12 w-48 p-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl z-20 hidden md:block"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.4 }}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-center text-[8px] uppercase font-bold text-muted-foreground">
                                        <span>System Health</span>
                                        <span className="text-primary">99%</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary"
                                            initial={{ width: 0 }}
                                            animate={{ width: "99%" }}
                                            transition={{ duration: 2, delay: 1.5 }}
                                        />
                                    </div>
                                    <div className="text-[10px] font-mono text-foreground/80 leading-tight">
                                        ARCH_X64_READY<br />
                                        CORE: ACTIVE<br />
                                        UI_RENDER: PASS
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Indicators */}
            <motion.div
                className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-4 font-mono text-[10px] text-muted-foreground group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors cursor-help">
                    <span className="w-8 h-px bg-white/10 group-hover:bg-primary transition-all" />
                    28.6139° N, 77.2090° E
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-8 h-px bg-white/10" />
                    TIME: <TimeDisplay />
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"
                style={{ opacity }}
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
