"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, BookOpen, Terminal, Cpu, Database, Globe, Lock, Shield, Layers, Binary } from 'lucide-react';
import { cyberCurriculum } from '@/data/cyber-curriculum';
import { cn } from '@/lib/utils';


export function CurriculumAccordion() {
    const [openYear, setOpenYear] = useState<number | null>(0); // Default Year 1 open

    return (
        <section id="syllabus" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
             {/* Background - Sci-Fi Grid */}
             <div className="absolute inset-0 z-0">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                 <div className="absolute top-0 left-0 w-full h-full bg-slate-950/80 radial-gradient(circle at center, transparent 0%, slate-950 100%)" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                     <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-4 block animate-pulse">
                         &gt; ACCESS_LEVEL::L1 &lt;
                     </span>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Zero to <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8 decoration-4">Red Teamer.</span>
                     </h2>
                     <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4 py-2 bg-slate-900/50">
                        Protocol: 3-Year Intensive. <br/>
                        Objective: Forge elite security engineers. <br/>
                        Status: <span className="text-emerald-400">Loading_Modules...</span>
                     </p>
                </div>

                <div className="space-y-6">
                    {cyberCurriculum.years.map((year, yearIdx) => (
                        <div key={yearIdx} className="border border-emerald-500/20 rounded-xl bg-slate-900/40 backdrop-blur-sm overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group">
                            <button 
                                onClick={() => setOpenYear(openYear === yearIdx ? null : yearIdx)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left relative overflow-hidden"
                            >
                                {/* Scanline hover effect */}
                                <div className="absolute inset-0 bg-emerald-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                
                                <div className="relative z-10">
                                    <div className="text-emerald-500 font-mono text-xs uppercase mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-sm" />
                                        {year.title}
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{year.subtitle}</div>
                                </div>
                                <div className={cn("w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all duration-300 border border-slate-700 group-hover:border-emerald-500/50", openYear === yearIdx && "rotate-180 bg-emerald-500/10 text-emerald-400")}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openYear === yearIdx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden bg-slate-950/30"
                                    >
                                        <div className="p-6 md:p-8 pt-0 border-t border-emerald-500/20">
                                            <p className="text-slate-400 mb-8 mt-6 italic font-mono text-sm opacity-70">
                                                // {year.goal}
                                            </p>
                                            
                                            <div className="grid gap-12">
                                                {year.semesters.map((sem, semIdx) => (
                                                    <div key={semIdx} className="relative pl-8 md:pl-10 border-l border-emerald-500/20">
                                                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                                        
                                                        <h4 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                                                            {sem.title}
                                                        </h4>
                                                        <p className="text-emerald-500/80 text-sm font-mono mb-6 bg-emerald-500/5 inline-block px-2 py-1 rounded">
                                                            {sem.theme}
                                                        </p>

                                                        <div className="grid gap-4">
                                                            {sem.modules.map((mod, modIdx) => (
                                                                <div key={modIdx} className="bg-slate-900 border border-slate-800 hover:border-emerald-500/30 rounded-lg p-5 transition-colors">
                                                                    <div className="text-xs font-bold text-slate-500 uppercase mb-3 tracking-wider flex items-center gap-2">
                                                                        <Binary className="w-3 h-3 text-emerald-500" />
                                                                        {mod.category}
                                                                    </div>
                                                                    <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                                                                        {mod.items.map((item, i) => (
                                                                            <li key={i} className="text-sm text-slate-300 flex items-start gap-3">
                                                                                <span className="text-emerald-500 font-mono text-xs mt-0.5">&gt;</span>
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        
                                                        {sem.project && (
                                                             <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-900 rounded-lg p-6 border border-emerald-500/20 relative group overflow-hidden">
                                                                <div className="absolute top-0 right-0 p-16 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
                                                                
                                                                <div className="text-emerald-500 text-xs font-bold uppercase mb-2 tracking-widest flex items-center gap-2">
                                                                    <Terminal className="w-4 h-4" />
                                                                    Hero_Project_v.{semIdx + 1}
                                                                </div>
                                                                <div className="font-bold text-white text-xl mb-2">{sem.project.title}</div>
                                                                <p className="text-sm text-slate-400 mb-4 max-w-xl">{sem.project.task}</p>
                                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded border border-emerald-500/20 text-xs text-emerald-400 font-mono">
                                                                    <Shield className="w-3 h-3" />
                                                                    XP_GAINED: {sem.project.outcome}
                                                                </div>
                                                             </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
