"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const mouseDown = () => setClicked(true);
        const mouseUp = () => setClicked(false);

        const handleLinkHover = () => setLinkHovered(true);
        const handleLinkLeave = () => setLinkHovered(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", mouseDown);
        window.addEventListener("mouseup", mouseUp);

        const links = document.querySelectorAll("a, button, .magnetic");
        links.forEach((link) => {
            link.addEventListener("mouseenter", handleLinkHover);
            link.addEventListener("mouseleave", handleLinkLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", mouseDown);
            window.removeEventListener("mouseup", mouseUp);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", handleLinkHover);
                link.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference backdrop-blur-[2px] hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: 12,
                    y: 12
                }}
            />
        </>
    );
}
