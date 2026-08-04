"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export default function EntryLevelQuantumPage() {
    const { currency, symbol } = useRegionalPricing();
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        <Cpu size={16} /> Entry Level Certification Program
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Quantum Launchpad
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Prepare for the paradigm shift. Understanding Qubits and Superposition today is like learning the Internet in 1990. Build a strong foundation for your future in Quantum.
                    </p>
                </div>
            </section>

            {/* Package Header Card & Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    
                    {/* Mastery Package Card */}
                    <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800 text-white relative overflow-hidden mb-16">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                    Unified Domain Bundle
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                    Quantum Launchpad Mastery Package
                                </h2>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    Begin your quantum career trajectory. This package bundles all 8 of our foundational quantum tracks—including Fundamentals, Engineering, Computing, Sensing, Communication, Information Theory, Post-Quantum Cryptography, and Quantum AI—under a single program.
                                </p>
                                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-300 font-medium">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-purple-400" />
                                        8 Foundational Tracks Included
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-purple-400" />
                                        Qubits & Circuitry Simulation Labs
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-purple-400" />
                                        Quantum Launchpad Credential
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-6">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Key Technical Pillars</span>
                                    <div className="flex flex-wrap gap-2">
                                        {["Linear Algebra for Quantum", "Postulates of Quantum Mechanics", "Basic Quantum Logic Gates", "Quantum Key Distribution (QKD)", "Post-Quantum Cryptography Basics"].map(pillar => (
                                            <span key={pillar} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-purple-300">
                                                {pillar}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 w-full lg:w-auto min-w-[280px] shrink-0 text-center lg:text-left flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Package Price</span>
                                    <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-6">
                                        <span className="text-4xl md:text-5xl font-black text-white">{symbol}{COURSE_PRICING.entryLevelQuantumPackage.original[currency]}</span>
                                    </div>
                                </div>
                                <Link
                                    href="/apply?course=Quantum Launchpad Mastery Package"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25 active:scale-95 text-center"
                                >
                                    Apply for Package <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Included Courses</h3>
                        <p className="text-slate-500">The package includes full access to the following entry-level programs:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <CourseCard
                            sku="Q 001"
                            title="Certified in Quantum Fundamentals"
                            duration="4 Weeks"
                            desc="From Linear Algebra to Quantum Hardware in 30 Days. Master the mathematical postulates, quantum logic, and basic circuit design."
                            href="/programs/professional/quantum-computing/certified-professional-in-quantum-fundamentals"
                            persona="For Students & Quantum enthusiasts"
                        />
                        <CourseCard
                            sku="Q 002"
                            title="Certified in Quantum Engineering"
                            duration="4 Weeks"
                            desc="Master the physical implementation of qubits and quantum circuitry."
                        />
                        <CourseCard
                            sku="Q 003"
                            title="Certified in Quantum Computing"
                            duration="4 Weeks"
                            desc="Learn core quantum algorithms and simulation techniques."
                        />
                        <CourseCard
                            sku="Q 004"
                            title="Certified in Quantum Sensing"
                            duration="4 Weeks"
                            desc="Explore high-precision metrology using quantum properties."
                        />
                        <CourseCard
                            sku="Q 005"
                            title="Certified in Quantum Communication"
                            duration="4 Weeks"
                            desc="Learn secure communication protocols and QKD."
                        />
                        <CourseCard
                            sku="Q 006"
                            title="Certified in Quantum Information"
                            duration="4 Weeks"
                            desc="Information theory re-imagined with entanglement and entropy."
                        />
                        <CourseCard
                            sku="Q 007"
                            title="Certified in Post Quantum Cryptography"
                            duration="4 Weeks"
                            desc="Preparing classical systems to withstand quantum attacks."
                        />
                        <CourseCard
                            sku="QAI 001"
                            title="Certified in Quantum AI"
                            duration="4 Weeks"
                            desc="The intersection of quantum computing and machine learning."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CourseCard({ sku, title, desc, href = "/apply", duration = "3 Months", persona = "UG / PG Students" }: { sku: string, title: string, desc: string, href?: string, duration?: string, persona?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
            <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase bg-slate-100 px-2 py-1 rounded">{sku}</span>
                    <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                        Entry-Level {duration} Course
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        Hybrid
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        Hands-on Projects
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        Industry Recognized Certification
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        {persona}
                    </div>
                </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                    Included in Package
                </span>
            </div>
        </motion.div>
    )
}
