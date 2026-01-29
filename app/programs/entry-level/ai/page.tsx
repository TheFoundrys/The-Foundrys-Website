"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function EntryLevelAIPage() {
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
                        AI Foundations
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Start your journey into Artificial Intelligence. Master the basics and build a strong foundation for your career.
                    </p>
                </div>
            </section>

            {/* Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <CourseCard
                            sku="AI 001"
                            title="Certified Professional in AI Foundations"
                            originalPrice="100,000"
                            discountedPrice="50,000"
                            duration="45 Days"
                            desc="Build the mathematical and logical bedrock required to understand and work with intelligent systems."
                            persona="For Students & AI enthusiasts"
                            href="/programs/entry-level/ai/certified-professional-in-ai-foundations"
                        />
                        <CourseCard
                            sku="AI 002"
                            title="Certified Professional in AI Foundations (Telugu)"
                            originalPrice="100,000"
                            discountedPrice="50,000"
                            duration="45 Days"
                            desc="Build the mathematical and logical bedrock required to understand and work with intelligent systems."
                            persona="For Students & AI enthusiasts"
                            href="/programs/entry-level/ai/certified-professional-in-ai-foundations-in-telugu"
                        />
                        <CourseCard
                            sku="AI 005"
                            title="Certified Professional in Prompt Engineering"
                            originalPrice="100,000"
                            discountedPrice="50,000"
                            duration="45 Days"
                            desc="Master the art of communicating with AI. Learn to design and optimize prompts to unlock the full potential of Large Language Models."
                            discountLabel="50% Discount"
                            persona="For Students & AI enthusiasts"
                            href="/programs/entry-level/ai/certified-professional-in-prompt-engineering"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CourseCard({ sku, title, originalPrice, discountedPrice, desc, discountLabel = "50% Discount", href = "/apply", duration = "3 Months", persona = "UG / PG Students" }: { sku: string, title: string, originalPrice: string, discountedPrice: string, desc: string, discountLabel?: string, href?: string, duration?: string, persona?: string }) {
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
                        Professional {duration} Course
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Weekend / Hybrid
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Hands-on Capstone Project
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Industry Recognized Certification
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        {persona}
                    </div>
                </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-4">
                <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Starting from</div>
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-400 line-through font-medium">₹{originalPrice}</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-slate-900">₹{discountedPrice}</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded uppercase tracking-wide">{discountLabel}</span>
                        </div>
                    </div>
                </div>
                <Link
                    href={href}
                    className="w-full sm:w-auto md:w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25"
                >
                    View Curriculum <ArrowUpRight size={18} />
                </Link>
            </div>
        </motion.div>
    )
}
