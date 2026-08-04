"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export default function EntryLevelAIPage() {
    const { currency, symbol } = useRegionalPricing();
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <BrainCircuit size={16} /> Entry Level Certification Program
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        AI Launchpad
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Start your journey into Artificial Intelligence. Master the basics and build a strong foundation for your career.
                    </p>
                </div>
            </section>

            {/* Package Header Card & Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    
                    {/* Mastery Package Card */}
                    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800 text-white relative overflow-hidden mb-16">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                    Unified Domain Bundle
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                    AI Launchpad Mastery Package
                                </h2>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    Kickstart your path in artificial intelligence. This package bundles all 5 of our foundational AI tracks—covering Research, Engineering, Prompt Design, LLMs, and Strategy—into a single program and credential.
                                </p>
                                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-300 font-medium">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        5 Introductory Tracks Included
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        Interactive Building Labs
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-blue-400" />
                                        AI Launchpad Credential
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-6">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Key Technical Pillars</span>
                                    <div className="flex flex-wrap gap-2">
                                        {["AI Engineering Foundations", "Prompt Engineering & Design", "Large Language Model Basics", "Intro to Machine Learning", "AI Strategy & Leadership"].map(pillar => (
                                            <span key={pillar} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-blue-300">
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
                                        <span className="text-4xl md:text-5xl font-black text-white">{symbol}{COURSE_PRICING.entryLevelAIPackage.original[currency]}</span>
                                    </div>
                                </div>
                                <Link
                                    href="/apply?course=AI Launchpad Mastery Package"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 text-center"
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
                            sku="AI 001"
                            title="Certified in AI Research"
                            duration="6 Weeks"
                            desc="Dive deep into algorithms and model architectures that power modern AI. Learn how to push the boundaries of intelligent systems through research and experimentation."
                            persona="For Data & ML Researchers"
                            href="/apply?course=Certified in AI Research"
                        />
                        <CourseCard
                            sku="AI 002"
                            title="Certified in AI Engineering"
                            duration="6 Weeks"
                            desc="Focus on the engineering lifecycle. Learn to build, scale, and optimize production-grade AI applications."
                            href="/programs/entry-level/ai/certified-in-ai-engineering"
                            persona="For Software Developers (Full-stack, Backend, MERN ...)"
                        />
                        <CourseCard
                            sku="AI 003"
                            title="Certified Prompt Engineering"
                            duration="2 weeks"
                            desc="Master the art of communicating with AI. Learn to design and optimize prompts to unlock the full potential of Large Language Models."
                            persona="For Students & AI enthusiasts"
                            href="/programs/entry-level/ai/certified-in-prompt-engineering"
                        />
                        <CourseCard
                            sku="AI 004"
                            title="0-1 LLM: Certified in Large Language Models"
                            duration="8 Weeks"
                            desc="Master the architecture, training, and deployment of Large Language Models. From transformer foundations to building complex agentic systems."
                            persona="For Developers & AI enthusiasts"
                            href="/programs/entry-level/ai/certified-in-zero-to-one-llm"
                        />
                        <CourseCard
                            sku="AI 006"
                            title="AI Strategy & Institutional Intelligence"
                            duration="9 Weeks"
                            desc="Bridge the gap between AI technology and organizational leadership. Master AI frameworks, deployment strategy, institutional governance, and data privacy to drive AI initiatives."
                            persona="For Executives, Leaders & Managers"
                            href="/programs/entry-level/ai/ai-strategy-and-institutional-intelligence"
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
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                        <span>Hybrid</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                        <span>Hands-on Capstone Project</span>
                    </div>

                    <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                        <span>Industry Recognized Certification</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                        <span>{persona}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                    Included in Package
                </span>
            </div>
        </motion.div>
    )
}
