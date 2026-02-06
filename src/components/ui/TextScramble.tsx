"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "-_~=+*&^%$#@!AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

interface TextScrambleProps {
    text: string;
    className?: string;
    trigger?: boolean;
}

export default function TextScramble({ text, className, trigger = false }: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);

    const scramble = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    };

    useEffect(() => {
        if (trigger) {
            scramble();
        }
    }, [text, trigger]);

    return (
        <motion.span
            className={className}
            onHoverStart={scramble}
            style={{ display: 'inline-block' }}
        >
            {displayText}
        </motion.span>
    );
}
