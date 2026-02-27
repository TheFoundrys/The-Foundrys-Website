"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
    { name: "Overview", target: "overview" },
    { name: "Entry requirements", target: "entry-requirements" },
    { name: "What you'll study", target: "curriculum" },
    { name: "Career outcomes", target: "future-vision" },
];

export function CourseSubNav() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 800;
            setIsSticky(window.scrollY > heroHeight - 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full transition-all duration-300 ${isSticky ? "fixed top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 z-[60]" : "relative bg-white border-b border-slate-200 pt-8 pb-4 z-40"}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className={`flex items-center justify-center transition-all duration-300 ${isSticky ? "py-2" : "py-0.5"} relative`}>
                    <nav className={`flex items-center justify-center gap-x-3 md:gap-x-8 lg:gap-x-12 overflow-x-auto no-scrollbar transition-all duration-300 ${isSticky ? "py-2.5" : "py-1.5"} w-full`}>
                        {NAV_LINKS.map((link) => (
                            <ScrollLink
                                key={link.target}
                                to={link.target}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="text-[9px] md:text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 cursor-pointer relative py-1 transition-colors active:text-blue-600 group whitespace-nowrap"
                                activeClass="text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </nav>

                    <AnimatePresence>
                        {isSticky && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute right-0 hidden lg:block"
                            >
                                <Link
                                    href="/apply"
                                    className="px-5 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center gap-2 hover:bg-blue-500 transition-all shadow-md active:scale-95"
                                >
                                    Apply Now
                                    <ChevronRight size={14} />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
