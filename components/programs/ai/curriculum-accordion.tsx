"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Database, BrainCircuit, Rocket, Terminal } from "lucide-react";
import { aiCurriculum } from "@/data/ai-curriculum";

export function CurriculumAccordion() {
    const [openYear, setOpenYear] = useState<number | null>(0); // Default Year 1 open

    return (
        <section id="syllabus" className="py-24 px-4 bg-white relative overflow-hidden">
             {/* Background Image */}
             <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/90" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                     <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">The Syllabus</span>
                     <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Zero to Architect. <br/><span className="text-slate-400">Step by Step.</span></h2>
                </div>

                <div className="space-y-8">
                    {aiCurriculum.years.map((year, yearIdx) => (
                        <div key={yearIdx} className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                            
                            {/* Year Header - Toggle */}
                            <button 
                                onClick={() => setOpenYear(openYear === yearIdx ? null : yearIdx)}
                                className="w-full flex items-center justify-between p-6 md:p-8 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                            >
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">{year.title}</div>
                                    <div className="text-2xl font-bold text-slate-900">{year.subtitle}</div>
                                </div>
                                <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${openYear === yearIdx ? "rotate-180" : ""}`}>
                                    <ChevronDown className="text-slate-400" />
                                </div>
                            </button>

                            {/* Year Content */}
                            <AnimatePresence>
                                {openYear === yearIdx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 md:p-8 border-t border-slate-100">
                                            <p className="text-slate-600 italic mb-8 border-l-4 border-blue-200 pl-4 py-2">{year.goal}</p>
                                            
                                            <div className="space-y-12">
                                                {year.semesters.map((sem, semIdx) => (
                                                    <div key={sem.id} className="relative pl-8 md:pl-12 border-l border-slate-200 pb-12 last:pb-0 last:border-0">
                                                        <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_0_4px_white]" />
                                                        
                                                        <h4 className="text-xl font-bold text-slate-900 mb-1">{sem.title}</h4>
                                                        <p className="text-slate-500 font-mono text-sm mb-6">{sem.theme}</p>

                                                        {/* Modules Grid */}
                                                        <div className="grid grid-cols-1 gap-6 mb-8">
                                                            {sem.modules.map((mod, modIdx) => (
                                                                <div key={modIdx} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                                                    <div className="flex items-center gap-2 mb-3">
                                                                        <Terminal size={16} className="text-blue-500" />
                                                                        <h5 className="font-bold text-sm text-slate-700 uppercase">{mod.category}</h5>
                                                                    </div>
                                                                    <ul className="space-y-2">
                                                                        {mod.items.map((item, i) => (
                                                                            <li key={i} className="text-sm text-slate-600 pl-4 border-l border-slate-200 leading-relaxed">
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Hero Project Card */}
                                                        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden group">
                                                            <div className="absolute top-0 right-0 p-32 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-colors" />
                                                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                                Hero Project
                                                            </div>
                                                            
                                                            <div className="relative z-10">
                                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                                                                    <Rocket className="text-white" />
                                                                </div>
                                                                <h4 className="text-2xl font-bold mb-2">{sem.project.title}</h4>
                                                                <div className="mb-4">
                                                                    <span className="text-slate-400 text-sm font-bold uppercase mr-2">Mission:</span>
                                                                    <span className="text-slate-200">{sem.project.task}</span>
                                                                </div>
                                                                 <div className="p-3 bg-white/5 rounded-lg border border-white/10 inline-block">
                                                                    <span className="text-green-400 text-xs font-bold uppercase mr-2">XP Gained:</span>
                                                                    <span className="text-slate-300 text-sm">{sem.project.outcome}</span>
                                                                </div>
                                                            </div>
                                                        </div>
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
