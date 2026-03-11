"use client";

import React, { useState, useEffect } from "react";

interface DecryptTextProps {
    text: string;
    parentHover: boolean;
}

export const DecryptText = ({ text, parentHover }: DecryptTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    useEffect(() => {
        if (!parentHover) {
            setDisplayText(text);
            return;
        }

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev.split("").map((letter, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [parentHover, text]);

    return <span>{displayText}</span>;
}
