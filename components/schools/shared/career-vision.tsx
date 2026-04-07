"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { RoleDetailsContent } from "@/components/role-details-content";

interface CareerRole {
    icon: LucideIcon;
    title: string;
    salary: string;
    growth: string;
    desc: string;
    skills: string[];
    responsibilities: string[];
}

interface CareerVisionProps {
    roles: CareerRole[];
    title?: string;
    subtitle?: string;
    themeColor?: "blue" | "emerald" | "indigo" | "stone";
    isDark?: boolean;
}

export function CareerVision({
    roles,
    title = "What You'll Become",
    subtitle = "Explore career paths at the intersection of expertise and innovation",
    themeColor = "blue",
    isDark = false
}: CareerVisionProps) {
    const [selectedCareer, setSelectedCareer] = useState(0);
    const roleRefs = useRef<(HTMLDivElement | null)[]>([]);

    const themeStyles = {
        blue: {
            bg: "bg-blue-600",
            text: "text-blue-600",
            lightBg: "bg-blue-50",
            border: "hover:border-blue-300",
            accentText: "text-blue-800",
            selection: "selection:bg-blue-100"
        },
        emerald: {
            bg: "bg-emerald-600",
            text: "text-emerald-600",
            lightBg: "bg-emerald-50",
            border: "hover:border-emerald-300",
            accentText: "text-emerald-800",
            selection: "selection:bg-emerald-200"
        },
        indigo: {
            bg: "bg-indigo-600",
            text: "text-indigo-600",
            lightBg: "bg-indigo-50",
            border: "hover:border-indigo-300",
            accentText: "text-indigo-800",
            selection: "selection:bg-indigo-100"
        },
        stone: {
            bg: "bg-stone-600",
            text: "text-stone-600",
            lightBg: "bg-stone-50",
            border: "hover:border-stone-300",
            accentText: "text-stone-800",
            selection: "selection:bg-stone-100"
        }
    };

    const currentTheme = themeStyles[themeColor];

    return (
        <section className={`py-24 border-y relative overflow-hidden ${isDark
            ? "bg-slate-950 border-slate-800 cyber-grid"
            : `bg-gradient-to-b from-white to-slate-50 border-slate-200 ${currentTheme.selection}`}`}>
            {isDark && (
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
            )}
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h2>
                    <p className={`text-lg font-light max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Mobile Layout (Accordion) */}
                    <div className="w-full lg:hidden flex flex-col gap-4">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) roleRefs.current[index] = el;
                                }}
                                className={`${isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"} rounded-xl border overflow-hidden scroll-mt-32`}
                            >
                                <button
                                    onClick={() => {
                                        setSelectedCareer(index);
                                        setTimeout(() => {
                                            roleRefs.current[index]?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            });
                                        }, 100);
                                    }}
                                    className={`w-full text-left p-4 min-h-[48px] flex items-center justify-between transition-colors ${selectedCareer === index
                                        ? (isDark ? "bg-emerald-950/30" : `${currentTheme.lightBg}/50`)
                                        : (isDark ? "bg-transparent" : "bg-white")}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${selectedCareer === index
                                            ? (isDark ? "bg-emerald-500/20" : currentTheme.lightBg)
                                            : (isDark ? "bg-slate-800" : "bg-slate-50")}`}>
                                            <role.icon size={20} className={currentTheme.text} />
                                        </div>
                                        <div>
                                            <h3 className={`font-serif text-lg ${selectedCareer === index
                                                ? (isDark ? "text-emerald-400" : currentTheme.accentText)
                                                : (isDark ? "text-slate-200" : "text-slate-900")}`}>
                                                {role.title}
                                            </h3>
                                            <div className={`text-sm font-bold ${currentTheme.text}`}>
                                                {role.salary}
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 transition-transform duration-300 ${selectedCareer === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {selectedCareer === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-4 pt-0 border-t border-slate-100">
                                                <div className="pt-4">
                                                    <RoleDetailsContent role={role} isDark={isDark} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout - Horizontal Tabs Style mimicking Sustainability */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 w-full">
                        {/* Left: Roles List */}
                        <div className="space-y-3">
                            {roles.map((role, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedCareer(i)}
                                    className={`w-full p-5 rounded-lg transition-all text-left ${selectedCareer === i
                                        ? `${currentTheme.bg} text-white shadow-lg`
                                        : `${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"} border-2 ${currentTheme.border} hover:shadow-md`
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${selectedCareer === i ? 'bg-white/20' : currentTheme.lightBg
                                            }`}>
                                            <role.icon size={22} className={selectedCareer === i ? 'text-white' : currentTheme.text} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-base font-serif leading-tight mb-1.5 ${selectedCareer === i
                                                ? 'text-white'
                                                : (isDark ? 'text-slate-200' : 'text-slate-900')
                                                }`}>
                                                {role.title}
                                            </h3>
                                            <div className={`text-sm font-bold ${selectedCareer === i ? 'text-white/80' : currentTheme.text
                                                }`}>
                                                {role.salary}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right: Selected Role Details */}
                        <div className="lg:sticky lg:top-6 h-fit">
                            <div className={`${isDark ? "bg-slate-900/60 border-slate-800 backdrop-blur-sm" : "bg-white border-slate-200"} border-2 rounded-2xl p-8 md:p-10 shadow-sm`}>
                                <RoleDetailsContent role={roles[selectedCareer]} isDark={isDark} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
