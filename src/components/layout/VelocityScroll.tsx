"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { ReactNode } from "react";

interface VelocityScrollProps {
    children: ReactNode;
}

export default function VelocityScroll({ children }: VelocityScrollProps) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    const skewY = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);

    return (
        <motion.div
            className="w-full min-h-screen will-change-transform origin-center"
            style={{ skewY }}
        >
            {children}
        </motion.div>
    );
}
