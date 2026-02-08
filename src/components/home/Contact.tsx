"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, Github, Linkedin, MapPin, Terminal, Cpu, Share2, MessageSquare } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import TextScramble from "../ui/TextScramble";
import Interactive3DCard from "../ui/Interactive3DCard";

interface ContactProps {
    mode?: "simple" | "full";
}

export default function Contact({ mode = "simple" }: ContactProps) {
    const router = useRouter();

    if (mode === "full") {
        // Keeping the full mode (possibly for a dedicated Contact page) as a robust fallback/alternative
        return (
            <section id="contact" className="py-32 relative bg-transparent overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-6xl font-black tracking-tight mb-8 uppercase">
                                        <TextScramble text="Open" /> <span className="text-primary"><TextScramble text="Transmission" /></span>
                                    </h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                        I specialize in building modular, scalable, and high-performance digital solutions.
                                        Reach out and let&#39;s start a conversation about your vision.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { icon: Mail, label: "Email", val: "ansarizamil41@email.com", href: "mailto:ansarizamil41@email.com" },
                                        { icon: MessageSquare, label: "Mobile", val: "+91 8077701409", href: "tel:+918077701409" },
                                        { icon: MapPin, label: "Base", val: "Dehradun, India", href: "#" }
                                    ].map((item, i) => (
                                        <motion.a
                                            key={i}
                                            href={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                                        >
                                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-1">{item.label}</div>
                                                <div className="text-lg font-bold">{item.val}</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <form className="space-y-6 p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Terminal size={120} strokeWidth={0.5} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Identity</label>
                                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Comms Link</label>
                                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Subject</label>
                                    <input type="text" placeholder="Inquiry Status" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Payload</label>
                                    <textarea placeholder="Tell me about your vision..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                                </div>
                                <button className="w-full py-5 bg-primary text-background font-black rounded-xl hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/20 relative z-10 active:scale-95">
                                    Initiate Transmission
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-40 relative bg-transparent overflow-hidden">
            {/* Background Decorative VFX */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[120px] opacity-10 bg-radial-gradient from-primary via-transparent to-transparent" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* HUD / Status Indicator */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-12 flex items-center gap-4 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md"
                    >
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping opacity-75" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">MISSION STATUS: READY FOR COLLABORATION</span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-[5.5rem] leading-[0.9] font-black tracking-tighter mb-8 uppercase">
                            <TextScramble text="LET'S BUILD THE" /> <br />
                            <span className="stroke-text opacity-80"><TextScramble text="NEXT" /> </span>
                            <TextScramble text="DECADE" />
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                            Currently bridging the gap between imagination and execution.
                            Available for high-stakes software engineering and innovative digital architecture.
                        </p>
                    </div>

                    {/* Cinematic CTA */}
                    <div className="mb-24">
                        <MagneticButton
                            onClick={() => router.push('/contact')}
                            className="group relative px-12 py-6 bg-foreground text-background font-black uppercase text-xs tracking-[0.3em] rounded-full overflow-hidden transition-all hover:pr-[3.5rem]"
                        >
                            <span className="relative z-10 flex items-center gap-4">
                                GET IN TOUCH <span className="text-sm">→</span>
                            </span>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </MagneticButton>
                    </div>

                    {/* 3D Social Badge Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        <Interactive3DCard className="w-full">
                            <a
                                href="mailto:ansarizamil41@email.com"
                                className="w-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center gap-6 hover:bg-white/10 transition-colors group h-full"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={32} />
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Direct Comms</div>
                                    <div className="text-lg font-black uppercase tracking-tighter truncate w-full px-2">EMAIL ME</div>
                                </div>
                            </a>
                        </Interactive3DCard>

                        <Interactive3DCard className="w-full">
                            <a
                                href="https://github.com/Amaanansari313"
                                target="_blank"
                                className="w-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center gap-6 hover:bg-white/10 transition-colors group h-full"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform">
                                    <Github size={32} />
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Source Control</div>
                                    <div className="text-lg font-black uppercase tracking-tighter">GITHUB</div>
                                </div>
                            </a>
                        </Interactive3DCard>

                        <Interactive3DCard className="w-full">
                            <a
                                href="https://www.linkedin.com/in/amaan-ansari-b01b37224"
                                target="_blank"
                                className="w-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center gap-6 hover:bg-white/10 transition-colors group h-full"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform">
                                    <Linkedin size={32} />
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Network Base</div>
                                    <div className="text-lg font-black uppercase tracking-tighter">LINKEDIN</div>
                                </div>
                            </a>
                        </Interactive3DCard>
                    </div>

                    {/* Secondary Contact Info */}
                    <div className="mt-24 pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                            <Cpu size={14} className="text-primary" />
                            DEPLOYED FROM: DEHRADUN, INDIA
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                            <Share2 size={14} className="text-primary" />
                            LAST SYNC: FEB 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
