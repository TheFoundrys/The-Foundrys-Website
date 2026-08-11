"use client";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SustainabilityHero() {
    return (
        <>
            {/* 1. TOP BANNER IMAGE SECTION */}
            <section className="relative h-[260px] md:h-[380px] mt-16 flex items-center justify-center overflow-hidden">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .school-title-white {
                        color: #ffffff !important;
                    }
                    .school-tag-white {
                        color: #ffffff !important;
                        border-color: rgba(255, 255, 255, 0.2) !important;
                        background-color: rgba(255, 255, 255, 0.1) !important;
                    }
                    .card-text-white {
                        color: #ffffff !important;
                    }
                    `
                }} />
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 select-none">
                    <img 
                        src="/images/classroom_session.png" 
                        alt="Classroom Session" 
                        className="w-full h-full object-cover brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm school-tag-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        School of Sustainability
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase font-serif school-title-white">
                        AI & Sustainability
                    </h1>
                </div>
            </section>

            {/* 2. INTRODUCTION SECTION */}
            <section className="py-16 px-6 relative z-10 text-center" style={{ backgroundColor: "#EEE5D7" }}>
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tighter leading-[1.1]">
                        The Planet's <span className="text-emerald-600">Powerhouse.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Sustainability is no longer a corporate report; it's a technical challenge. Master the intersection of AI, Climate Tech, and ESG.
                    </p>

                    <div className="mb-12 aspect-video md:aspect-[21/9] bg-emerald-900 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-2xl">
                        <Leaf size={120} className="text-white/10 animate-pulse" />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end">
                            <div className="text-left">
                                <p className="font-bold card-text-white">Resilience by Design</p>
                                <p className="text-emerald-200 text-sm">Quantifying the future of our ecosystem.</p>
                            </div>
                            <div className="hidden md:block">
                                <span className="text-emerald-400/50 font-mono text-xs uppercase tracking-[0.4em]">Environmental Intelligence</span>
                            </div>
                        </div>
                    </div>

                    <Link href="/apply" className="px-10 py-5 bg-slate-950 text-white font-bold rounded-lg hover:bg-slate-900 transition-all flex items-center gap-2 group w-fit mx-auto shadow-xl hover:shadow-2xl active:scale-95">
                        Apply to the School
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
}
