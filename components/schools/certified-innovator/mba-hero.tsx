"use client";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export function MBAHero() {
    return (
        <section className="relative pt-32 pb-40 overflow-hidden bg-white border-b border-neutral-100">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-indigo-200 bg-white text-indigo-600 text-xs font-mono tracking-widest uppercase mb-8 shadow-sm"
                    >
                        <GraduationCap size={14} />
                        <span>Certified Innovator MBA (3+1 Program)</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold leading-[0.9] text-neutral-900 mb-8 tracking-tighter"
                    >
                        Integrated <br />
                        <span className="text-indigo-600">MBA Programs.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl leading-relaxed"
                    >
                        Master the future of leadership. Choose your specialization: **MBA in Artificial Intelligence** or **MBA in Cybersecurity**. A 4-year elite path (3+1) designed for future founders.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/apply" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-sm hover:bg-indigo-700 transition-all flex items-center gap-3 group">
                            Secure Your Future
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
