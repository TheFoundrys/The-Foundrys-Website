"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon } from "lucide-react";

export type ProgramTheme =
    | "ai"
    | "blockchain"
    | "cybersecurity"
    | "quantum"
    | "sustainability"
    | "climate"
    | "executive";

interface ThemeConfig {
    gradient: string;
    primaryColor: string;
    secondaryColor: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    orbPrimary: string;
    orbSecondary: string;
}

const THEME_CONFIGS: Record<ProgramTheme, ThemeConfig> = {
    ai: {
        gradient: "from-blue-950 via-slate-900 to-cyan-900",
        primaryColor: "blue-400",
        secondaryColor: "cyan-400",
        badgeBg: "bg-blue-500/20",
        badgeBorder: "border-blue-400/30",
        badgeText: "text-blue-300",
        orbPrimary: "bg-blue-500/20",
        orbSecondary: "bg-cyan-400/10"
    },
    blockchain: {
        gradient: "from-purple-950 via-slate-900 to-violet-900",
        primaryColor: "purple-400",
        secondaryColor: "violet-400",
        badgeBg: "bg-purple-500/20",
        badgeBorder: "border-purple-400/30",
        badgeText: "text-purple-300",
        orbPrimary: "bg-purple-500/20",
        orbSecondary: "bg-violet-400/10"
    },
    cybersecurity: {
        gradient: "from-red-950 via-slate-900 to-orange-900",
        primaryColor: "red-400",
        secondaryColor: "orange-400",
        badgeBg: "bg-red-500/20",
        badgeBorder: "border-red-400/30",
        badgeText: "text-red-300",
        orbPrimary: "bg-red-500/20",
        orbSecondary: "bg-orange-400/10"
    },
    quantum: {
        gradient: "from-indigo-950 via-slate-900 to-purple-900",
        primaryColor: "indigo-400",
        secondaryColor: "purple-400",
        badgeBg: "bg-indigo-500/20",
        badgeBorder: "border-indigo-400/30",
        badgeText: "text-indigo-300",
        orbPrimary: "bg-indigo-500/20",
        orbSecondary: "bg-purple-400/10"
    },
    sustainability: {
        gradient: "from-emerald-950 via-stone-900 to-emerald-900",
        primaryColor: "emerald-400",
        secondaryColor: "green-400",
        badgeBg: "bg-emerald-500/20",
        badgeBorder: "border-emerald-400/30",
        badgeText: "text-emerald-300",
        orbPrimary: "bg-emerald-500/20",
        orbSecondary: "bg-emerald-400/10"
    },
    climate: {
        gradient: "from-teal-950 via-slate-900 to-cyan-900",
        primaryColor: "teal-400",
        secondaryColor: "cyan-400",
        badgeBg: "bg-teal-500/20",
        badgeBorder: "border-teal-400/30",
        badgeText: "text-teal-300",
        orbPrimary: "bg-teal-500/20",
        orbSecondary: "bg-cyan-400/10"
    },
    executive: {
        gradient: "from-amber-950 via-slate-900 to-yellow-900",
        primaryColor: "amber-400",
        secondaryColor: "yellow-400",
        badgeBg: "bg-amber-500/20",
        badgeBorder: "border-amber-400/30",
        badgeText: "text-amber-300",
        orbPrimary: "bg-amber-500/20",
        orbSecondary: "bg-yellow-400/10"
    }
};

interface Highlight {
    icon?: LucideIcon;
    text: string;
}

interface CTAButton {
    text: string;
    href: string;
    primary?: boolean;
}

interface PremiumHeroProps {
    theme: ProgramTheme;
    badge: {
        icon: LucideIcon;
        text: string;
    };
    title: string;
    titleAccent: string;
    description: string;
    highlights?: Highlight[];
    ctaButtons?: CTAButton[];
    backLink?: {
        href: string;
        text: string;
    };
}

export function PremiumHero({
    theme,
    badge,
    title,
    titleAccent,
    description,
    highlights = [],
    ctaButtons = [],
    backLink
}: PremiumHeroProps) {
    const config = THEME_CONFIGS[theme];
    const BadgeIcon = badge.icon;

    return (
        <section className={`relative pt-32 pb-48 px-6 bg-gradient-to-br ${config.gradient} overflow-hidden`}>
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Animated Gradient Orbs */}
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${config.orbPrimary} rounded-full blur-3xl animate-pulse`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${config.orbSecondary} rounded-full blur-3xl animate-pulse`}></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {backLink && (
                    <Link
                        href={backLink.href}
                        className={`inline-flex items-center gap-2 ${config.badgeText} hover:text-white transition-colors mb-8 text-sm font-medium backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10`}
                    >
                        ← {backLink.text}
                    </Link>
                )}

                <div className="text-center">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.badgeBg} border ${config.badgeBorder} ${config.badgeText} text-sm font-medium mb-8 backdrop-blur-sm`}>
                        <BadgeIcon size={16} />
                        <span>{badge.text}</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-white mb-6 leading-tight">
                        {title} <br />
                        <span className={`text-${config.primaryColor} italic`}>{titleAccent}</span>
                    </h1>

                    {/* Program Description */}
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                        {description}
                    </p>

                    {/* Quick Highlights */}
                    {highlights.length > 0 && (
                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-white/90 mb-12">
                            {highlights.map((highlight, index) => {
                                const HighlightIcon = highlight.icon || CheckCircle2;
                                return (
                                    <div key={index} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                        <HighlightIcon size={18} className={`text-${config.primaryColor}`} />
                                        <span>{highlight.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* CTA Buttons */}
                    {ctaButtons.length > 0 && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {ctaButtons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={
                                        button.primary
                                            ? `px-8 py-4 bg-${config.primaryColor.split('-')[0]}-600 text-white rounded-full font-bold text-lg hover:bg-${config.primaryColor.split('-')[0]}-500 transition-all shadow-lg hover:shadow-${config.primaryColor.split('-')[0]}-500/25 text-center`
                                            : "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20 text-center"
                                    }
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
