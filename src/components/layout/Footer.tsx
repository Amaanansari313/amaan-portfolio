import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Terminal, Cpu, Globe } from "lucide-react";
import TextScramble from "../ui/TextScramble";

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 border-t border-white/5 bg-transparent overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand & Mission */}
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <div>
                            <Link href="/" className="text-2xl font-black tracking-tighter group flex items-center gap-2">
                                <span className="bg-primary w-2 h-8 block rounded-full" />
                                <TextScramble text="MO AARIF" className="uppercase" />
                                <span className="text-primary">.IN</span>
                            </Link>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-medium">
                            Architecting high-performance digital systems. Bridging the gap between
                            complex backend logic and immersive frontend experiences.
                            Built for the next decade of the web.
                        </p>
                        <div className="flex items-center gap-6">
                            {[
                                { icon: <Github size={18} />, href: "https://github.com/moaarif-brt", label: "GitHub Profile" },
                                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/moaarif-brt", label: "LinkedIn Profile" },
                                { icon: <Twitter size={18} />, href: "#", label: "Twitter Profile" },
                                { icon: <Mail size={18} />, href: "mailto:moaarif.brt@gmail.com", label: "Email Contact" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-4 bg-white/5 border border-white/5 rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Neural Paths</h3>
                        <nav className="flex flex-col gap-4 font-bold uppercase tracking-widest text-[11px]">
                            <Link href="/about" className="text-muted-foreground hover:text-foreground hover:pl-2 transition-all">About Archive</Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-foreground hover:pl-2 transition-all">Project Log</Link>
                            <Link href="/contact" className="text-muted-foreground hover:text-foreground hover:pl-2 transition-all">Secure Comms</Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground hover:pl-2 transition-all">Data Sheet</Link>
                        </nav>
                    </div>

                    {/* System Info */}
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">System Status</h3>
                        <div className="space-y-4 font-bold uppercase tracking-widest text-[10px] text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <Globe size={14} className="text-primary" />
                                <span>LOC: DEHRADUN // UTC+5:30</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Cpu size={14} className="text-primary" />
                                <span>CORE: V1.0.8-STABLE</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Terminal size={14} className="text-primary" />
                                <span>STATUS: OPERATIONAL</span>
                            </div>
                            <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-primary leading-none">Available for contracts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
                        &copy; {new Date().getFullYear()} Mo Aarif. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
                        <span className="hidden md:inline">Built with Next.js & Framer Motion</span>
                        <div className="flex items-center gap-2">
                            <span>Ping: 14ms</span>
                            <div className="w-1 h-3 bg-primary/40 rounded-full" />
                            <div className="w-1 h-2 bg-primary/40 rounded-full" />
                            <div className="w-1 h-4 bg-primary/40 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
