"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export default function EntryLevelCyberSecurityPage() {
    const { symbol, currency } = useRegionalPricing();

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                        <ShieldCheck size={16} /> Entry Level Certification Program
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Cyber Launchpad
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Start your journey into Cyber Security. Master the fundamentals of digital defense and secure the future.
                    </p>
                </div>
            </section>

            {/* Package Header Card & Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    
                    {/* Mastery Package Card */}
                    <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-800 text-white relative overflow-hidden mb-16">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                                    Unified Domain Bundle
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                    Cyber Launchpad Mastery Package
                                </h2>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    Start your digital security path. This package bundles all 5 of our entry-level cyber tracks—including Cybersecurity CC fundamentals, Malware Analysis, VAPT, Security for AI, and AI Security—into a unified program.
                                </p>
                                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-300 font-medium">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-teal-400" />
                                        5 Introductory Tracks Included
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-teal-400" />
                                        Threat Simulation Sandbox Exercises
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-teal-400" />
                                        Cyber Defense Launchpad Credential
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-6">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Key Technical Pillars</span>
                                    <div className="flex flex-wrap gap-2">
                                        {["Fundamentals of Cybersecurity", "Basic Malware Analysis", "Introduction to VAPT", "Securing AI Integrations", "Information Security Basics"].map(pillar => (
                                            <span key={pillar} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-teal-300">
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
                                        <span className="text-4xl md:text-5xl font-black text-white">{symbol}{COURSE_PRICING.entryLevelCyberSecurityPackage.original[currency]}</span>
                                    </div>
                                </div>
                                <Link
                                    href="/apply?course=Cyber Launchpad Mastery Package"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/25 active:scale-95 text-center"
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
                            sku="CC 001"
                            title="Certified in Cyber Security (CC)"
                            desc="Master (ISC)² cybersecurity domains. Build a strong foundation in network security, access control, and security operations."
                            href="/programs/entry-level/cyber-security/certified-in-cybersecurity"
                        />
                        <CourseCard
                            sku="CS 002"
                            title="Certified in VAPT for AI"
                            desc="Introduction to Vulnerability Assessment and Penetration Testing with a focus on AI components."
                        />
                        <CourseCard
                            sku="CS 003"
                            title="Certified in Malware Analysis"
                            desc="Learn the art of reverse engineering. Deconstruct malicious software, understand its behavior, and develop defense strategies."
                            href="/programs/entry-level/cyber-security/certified-in-malware-analysis"
                        />
                        <CourseCard
                            sku="CS 004"
                            title="Certified in Security for AI"
                            desc="Understanding the unique security challenges posed by artificial intelligence and how to mitigate them."
                        />
                        <CourseCard
                            sku="CS 005"
                            title="Certified in AI Security"
                            desc="Master the core protocols for securing AI systems and protecting neural networks."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CourseCard({ sku, title, desc, href = "/apply", duration = "6 Weeks", persona = "UG / PG Students" }: { sku: string, title: string, desc: string, href?: string, duration?: string, persona?: string }) {
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
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        Hybrid Format
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        (ISC)² Alignment
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        Professional Labs
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        {persona}
                    </div>
                </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-100">
                    Included in Package
                </span>
            </div>
        </motion.div>
    )
}
