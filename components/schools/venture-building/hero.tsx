"use client";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, CircleDot } from "lucide-react";
import Link from "next/link";

export function VentureHero() {
    return (
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white text-center">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-64 bg-neutral-50 -skew-y-3 z-0" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B31B1B]/10 text-[#B31B1B] text-xs font-bold uppercase tracking-widest mb-8 border border-[#B31B1B]/20"
                >
                    <Rocket size={14} />
                    <span>School of Entrepreneurship</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black leading-[0.9] text-neutral-900 mb-8 tracking-tighter"
                >
                    Venture <br />
                    <span className="text-[#B31B1B]">Building.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Stop looking for a job. Create them. Master the mechanics of building high-growth startups from zero to one.
                </motion.p>

                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16 relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200"
                >
                    <div className="absolute inset-0 bg-neutral-100" />
                    
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

                    <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="relative text-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[#B31B1B]/20 rounded-full scale-150"
                            />
                            <Rocket size={120} className="text-[#B31B1B]/10 rotate-45" />
                            <div className="mt-8">
                                <span className="text-4xl font-black text-neutral-900/10 uppercase tracking-[0.5em]">Idea to IPO</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-white via-white/80 to-transparent">
                        <div className="flex gap-4 items-center justify-center">
                            <div className="h-0.5 w-12 bg-[#B31B1B]" />
                            <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400">The Foundry Framework</span>
                            <div className="h-0.5 w-12 bg-[#B31B1B]" />
                        </div>
                    </div>
                </motion.div> */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Link href="/apply" className="px-10 py-5 bg-[#B31B1B] text-white font-bold rounded-lg hover:bg-[#911616] transition-all flex items-center gap-2 group shadow-xl shadow-red-900/20 active:scale-95">
                        Apply to the School
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
