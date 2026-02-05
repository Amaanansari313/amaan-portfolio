"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "-_~=+*&^%$#@!AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

interface TextScrambleProps {
    text: string;
    className?: string;
    trigger?: boolean;
}

export default function TextScramble({ text, className, trigger = true }: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (trigger) {
            let iteration = 0;
            interval = setInterval(() => {
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
                }

                iteration += 1 / 2;
            }, 30);
        }

        return () => clearInterval(interval);
    }, [text, trigger]);

    return (
        <motion.span
            className={className}
            onHoverStart={() => {
                // Re-trigger logic could be added here if needed, 
                // but for now keeping it simple to satisfy lint.
                // If we want hover scramble, we need a separate effect or ref.
                // For this "decoder" effect, usually it runs on mount/trigger.
            }}
        >
            {displayText}
        </motion.span>
    );
}
