"use client";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SustainabilityHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white text-center">
            <div className="absolute top-0 inset-x-0 h-64 bg-emerald-50/50 -skew-y-3 z-0" />
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8"
                >
                    <Leaf size={14} />
                    <span>School of Sustainability</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-black text-neutral-900 mb-8 tracking-tighter leading-[0.9]"
                >
                    The Planet's <br />
                    <span className="text-emerald-600">Powerhouse.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Sustainability is no longer a corporate report; it's a technical challenge. Master the intersection of AI, Climate Tech, and ESG.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-16 aspect-video md:aspect-[21/9] bg-emerald-900 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-2xl"
                >
                    <Leaf size={120} className="text-white/10 animate-pulse" />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end">
                        <div className="text-left">
                            <p className="text-white font-bold">Resilience by Design</p>
                            <p className="text-emerald-200 text-sm">Quantifying the future of our ecosystem.</p>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-emerald-400/50 font-mono text-xs uppercase tracking-[0.4em]">Environmental Intelligence</span>
                        </div>
                    </div>
                </motion.div>

                <Link href="/apply" className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-2 group w-fit mx-auto shadow-xl shadow-emerald-900/20">
                    Apply to the School
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
