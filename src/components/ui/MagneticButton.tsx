"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function MagneticButton({ children, onClick, className = "" }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            className={`relative inline-flex items-center justify-center px-8 py-4 bg-primary text-foreground rounded-full font-medium overflow-hidden group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onClick={onClick}
        >
            {/* Fill effect handled by standard CSS or simplistic hover because liquid fill is complex in Tailwind without custom CSS. Keeping it simple and premium. */}
            <span className="relative z-10">{children}</span>

            {/* Glow behind */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-150"></div>
        </motion.button>
    );
}
