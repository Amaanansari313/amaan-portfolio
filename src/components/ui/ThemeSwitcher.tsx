"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor, Zap, Gem, Snowflake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeSwitcherProps {
    variant?: "dropdown" | "grid";
}

export default function ThemeSwitcher({ variant = "dropdown" }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (theme === "system") {
            const t = ["light", "dark", "cyberpunk", "luxury", "glacier"];
            const random = t[Math.floor(Math.random() * t.length)];
            setTheme(random);
        }
    }, []);

    if (!mounted) return null;

    const themes = [
        { name: "light", icon: <Sun size={16} />, label: "Paper" },
        { name: "dark", icon: <Moon size={16} />, label: "Dark" },
        { name: "cyberpunk", icon: <Zap size={16} />, label: "Cyber" },
        { name: "luxury", icon: <Gem size={16} />, label: "Luxe" },
        { name: "glacier", icon: <Snowflake size={16} />, label: "Ice" },
        { name: "system", icon: <Monitor size={16} />, label: "Auto" },
    ];

    if (variant === "grid") {
        return (
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 w-full">
                {themes.map((t) => (
                    <button
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`
                            flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all
                            ${theme === t.name
                                ? "bg-primary/20 border-primary text-primary"
                                : "bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10"
                            }
                        `}
                    >
                        {t.icon}
                        <span className="text-[10px] font-black uppercase tracking-widest">{t.label}</span>
                    </button>
                ))}
            </div>
        );
    }

    const shuffleTheme = () => {
        const t = ["light", "dark", "cyberpunk", "luxury", "glacier"];
        const random = t[Math.floor(Math.random() * t.length)];
        setTheme(random);
    };

    return (
        <div className="relative flex items-center gap-2">
            <button
                onClick={shuffleTheme}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all border border-primary/20 text-primary group"
                title="Shuffle Theme"
            >
                <motion.div
                    whileTap={{ rotate: 180 }}
                >
                    <Zap size={18} className="group-hover:scale-110 transition-transform" />
                </motion.div>
            </button>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm flex items-center gap-2 pr-4"
                aria-label="Toggle Theme Menu"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest hidden sm:inline opacity-60">Themes</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute top-12 right-0 p-2 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl grid grid-cols-2 gap-2 min-w-[240px] shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />

                            {themes.map((t) => (
                                <button
                                    key={t.name}
                                    onClick={() => {
                                        setTheme(t.name);
                                        setIsOpen(false);
                                    }}
                                    className={`relative z-10 flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs transition-all ${theme === t.name
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "hover:bg-white/5 text-muted-foreground hover:text-foreground hover:translate-x-1"
                                        }`}
                                >
                                    {t.icon}
                                    <span className="font-semibold uppercase tracking-tighter">{t.label}</span>
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
