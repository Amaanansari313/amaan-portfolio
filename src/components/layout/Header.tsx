"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import TextScramble from "../ui/TextScramble";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body Scroll Lock when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-6 px-4 pointer-events-none"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div
                    className={`
                        flex items-center justify-between gap-8 px-8 py-4
                        rounded-full border border-white/10 backdrop-blur-3xl 
                        transition-all duration-700 ease-[0.16, 1, 0.3, 1] pointer-events-auto
                        shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                        ${isScrolled ? "bg-background/60 w-full max-w-5xl translate-y-2 scale-[0.98]" : "bg-white/5 w-full max-w-6xl"}
                    `}
                >
                    <Link
                        href="/"
                        aria-label="Mo Aarif Portfolio Home"
                        className="text-xl font-black tracking-tighter group flex items-center gap-1"
                    >
                        <span className="bg-primary w-2 h-8 block rounded-full group-hover:h-4 transition-all duration-300" />
                        <span><TextScramble text="moaarif" /></span>
                        <span className="text-primary"><TextScramble text=".in" /></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://linkedin.com/in/moaarif-brt"
                            aria-label="LinkedIn Profile"
                            className="p-4 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                        >
                            <Linkedin size={16} />
                        </Link>
                        <Link
                            href="https://github.com/moaarif-brt"
                            aria-label="GitHub Profile"
                            className="p-4 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                        >
                            <Github size={16} />
                        </Link>
                        <div className="w-px h-6 bg-white/10 mx-2" />
                        <ThemeSwitcher />
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        aria-label="Open Mobile Menu"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-2xl flex flex-col"
                    >
                        {/* Animated Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full delay-1000 animate-pulse" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full overflow-y-auto p-6 xs:p-8 md:p-12 no-scrollbar">
                            {/* Header inside Menu */}
                            <div className="flex justify-between items-center mb-10 md:mb-20 shrink-0">
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary/60">Command Center</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-label="Close Mobile Menu"
                                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
                                >
                                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-4 md:gap-8 mb-12 md:mb-20">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="group flex items-end gap-3 md:gap-4"
                                        >
                                            <span className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter transition-all group-hover:text-primary group-hover:pl-4">
                                                <TextScramble text={link.name} />
                                            </span>
                                            <span className="text-primary text-base md:text-xl mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-all">/0{i + 1}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer Area: Themes & Socials */}
                            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-white/5 shrink-0">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground block mb-4 md:mb-6">Environment Settings</span>
                                    <ThemeSwitcher variant="grid" />
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground block mb-4 md:mb-6">Neural Links</span>
                                        <div className="flex gap-4">
                                            {[
                                                { icon: <Github size={20} />, href: "https://github.com/moaarif-brt", label: "GitHub" },
                                                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/moaarif-brt", label: "LinkedIn" },
                                                { icon: <Mail size={20} />, href: "mailto:moaarif.brt@gmail.com", label: "Email" }
                                            ].map((social, i) => (
                                                <a
                                                    key={i}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={social.label}
                                                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-full hover:border-primary/50 hover:text-primary transition-all"
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 md:mt-0 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">System Online: v1.0.4</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

