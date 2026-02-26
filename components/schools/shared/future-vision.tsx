"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Briefcase, UserCheck, ArrowRight } from "lucide-react";
import React from "react";

interface JobPrediction {
    title: string;
    desc: string;
}

interface FutureVisionProps {
    schoolName: string;
    whyAIImportant: string | React.ReactNode;
    futureJobs: JobPrediction[];
    outcomeStatement: string;
    accentColor?: string; // Default to Bowers Red #B31B1B
}

export function FutureVision({
    schoolName,
    whyAIImportant,
    futureJobs,
    outcomeStatement,
    accentColor = "#B31B1B"
}: FutureVisionProps) {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* 1. Why AI is Important */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-neutral-100 rounded text-xs font-mono tracking-widest uppercase text-neutral-500">
                            <BrainCircuit size={14} style={{ color: accentColor }} />
                            <span>The AI Imperative</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                            Why AI is the Foundation of <br />
                            <span style={{ color: accentColor }}>{schoolName}.</span>
                        </h2>
                        <div className="text-lg text-neutral-600 leading-relaxed space-y-4">
                            {typeof whyAIImportant === "string" ? <p>{whyAIImportant}</p> : whyAIImportant}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-center p-12 overflow-hidden shadow-sm">
                            <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)` }} />
                            <BrainCircuit size={200} strokeWidth={0.5} style={{ color: accentColor }} className="opacity-20 animate-pulse" />
                            <div className="relative z-10 text-center">
                                <div className="text-6xl font-black mb-2" style={{ color: accentColor }}>AI+</div>
                                <div className="text-xl font-bold text-neutral-900 uppercase tracking-[0.2em]">{schoolName}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Future Jobs (10-Year Horizon) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Post-AI Job Landscape (2035)</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">
                            The jobs of tomorrow won't use AI; they will be built within AI. Here is what you will be leading in 10 years.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {futureJobs.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-neutral-100 bg-neutral-50/50 rounded-xl hover:bg-white hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/40 transition-all group"
                            >
                                <div className="mb-6 p-4 rounded-lg bg-white inline-block shadow-sm group-hover:scale-110 transition-transform">
                                    <Briefcase size={24} style={{ color: accentColor }} />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">{job.title}</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">{job.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. The Transformation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ backgroundColor: accentColor }}
                    className="p-12 md:p-20 rounded-3xl text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                        <UserCheck size={400} className="translate-x-1/2 -translate-y-1/4" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-white/40" />
                            <span className="text-sm font-mono tracking-widest uppercase text-white/60">The Outcome</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Who you <br />
                            will <span className="opacity-50">become.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-white/90">
                            {outcomeStatement}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-white text-neutral-900 font-bold rounded-lg hover:bg-neutral-100 transition-colors flex items-center gap-2 group">
                                Apply to {schoolName}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
