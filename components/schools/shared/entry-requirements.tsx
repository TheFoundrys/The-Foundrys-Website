"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Languages, SearchCode, ClipboardCheck } from "lucide-react";

export function EntryRequirements() {
    return (
        <section id="entry-requirements" className="py-24 px-6 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Entry requirements</h2>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        Admission to The Foundry is based on your potential to create and lead. We value diverse backgrounds 
                        and look for individuals who demonstrate logical clarity and a hunger for building.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Academic Eligibility Section */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="bg-slate-900 px-8 py-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <GraduationCap size={20} className="text-blue-400" />
                                Academic Eligibility
                            </h3>
                        </div>
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Standard Pathway</h4>
                                    <ul className="space-y-4 text-slate-700">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>Successful completion of **Class 12 / Intermediate** (or equivalent).</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**No Mandatory Subjects**: Students from **MPC, BiPC, CEC, HEC, Commerce, or Arts** are all eligible to apply.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>Minimum aggregate of **60%** in core subjects.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Alternative Credentials</h4>
                                    <ul className="space-y-4 text-slate-700">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**IB Diploma**: Minimum **24 points**.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**A-Levels**: Passed in at least **3 subjects**.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**BTEC/Vocational**: Evaluated on a case-by-case basis.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Prerequisite Policy Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm leading-relaxed">
                            <div className="flex items-center gap-4 mb-6">
                                <SearchCode className="text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Program Prerequisites</h3>
                            </div>
                            <ul className="space-y-6">
                                <li>
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Coding Experience</p>
                                    <p className="text-slate-600 text-sm">
                                        **Zero prior coding experience** is required. We teach you from the ground up, starting with core logic and systems thinking.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">English Proficiency</p>
                                    <p className="text-slate-600 text-sm">
                                        **No standardized English tests** (like IELTS or TOEFL) are mandatory for admission. We value clear communication over test scores.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Entrance Tests</p>
                                    <p className="text-slate-600 text-sm">
                                        The Foundry does **not conduct traditional entrance exams**. Seats are allocated based on **academic merit** and **profile evaluation**.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-blue-600 rounded-2xl text-white flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <ClipboardCheck size={32} />
                                <h3 className="text-2xl font-bold italic">Who we look for</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-6">
                                We are looking for the "misfits" and the "builders"—individuals who are dissatisfied with the status quo 
                                and want to build the future.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    Intellectual Curiosity
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    Logical Problem Solving
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    Persistence & Grit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
