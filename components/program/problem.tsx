"use client";
import { motion } from "framer-motion";
import { TrendingUp, Minus, AlertTriangle } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 px-4 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <span className="text-red-600 font-bold tracking-widest text-sm uppercase mb-4 block">Critical Error: System Desync</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    The Industry is Exponential. <br/>
                    <span className="text-slate-400">Education is Linear.</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Universities are optimized for accreditation, not innovation. While AI rewrites the codebase of the world every 6 months, traditional curriculums struggle to update every 6 years.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Visual Graph */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-4 left-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                    </div>
                    
                    <div className="mt-8 h-64 relative border-l border-b border-slate-200">
                        {/* Industry Curve (Exponential) */}
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "circIn" }}
                            className="absolute bottom-0 left-0 right-0"
                        >
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path d="M0,256 C 100,250 200,200 400,0" fill="none" stroke="#2563eb" strokeWidth="4" />
                            </svg>
                        </motion.div>
                         <div className="absolute top-0 right-0 text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded">Industry Velocity</div>

                        {/* Academic Curve (Linear/Flat) */}
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="absolute bottom-0 left-0"
                        >
                             <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path d="M0,256 L 400,220" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 4" />
                            </svg>
                        </motion.div>
                        <div className="absolute bottom-12 right-0 text-slate-400 font-bold text-sm bg-slate-50 px-2 py-1 rounded">Academic Standards</div>
                    </div>
                    
                    <div className="mt-8 text-center text-sm font-mono text-slate-400">
                        FIG 1.0: THE VELOCITY GAP
                    </div>
                </div>

                {/* Text Points */}
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                            <AlertTriangle className="text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">The Legacy Trap</h3>
                            <p className="text-slate-600">You are being trained for a world that used to exist. Java 8 and monolithic architectures won't survive the age of Agents and Edge Computing.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                            <Minus className="text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Safe is Risky</h3>
                            <p className="text-slate-600">Following the syllabus is the fastest way to become obsolete. The safe path of "getting good grades" is now the riskiest career strategy.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                            <TrendingUp className="text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">The Foundry's Advantage</h3>
                            <p className="text-slate-600">We align with the asymptote. We optimize for adaptability, first-principles thinking, and raw shipping velocity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
