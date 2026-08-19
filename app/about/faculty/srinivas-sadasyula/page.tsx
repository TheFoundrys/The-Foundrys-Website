"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Briefcase, Compass, Quote } from "lucide-react";
import Link from "next/link";

export default function SrinivasSadasyulaPage() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-[#F7F7F4] p-8 sm:p-12 md:p-16 border-b border-slate-200/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-xs font-bold uppercase tracking-wider font-mono">
                            <ArrowLeft size={14} /> Back to Team
                        </Link>

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                            {/* Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full lg:w-1/3 shrink-0"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden shadow-md bg-white border border-slate-200/80">
                                    <Image
                                        src="/images/srinivas-sadasyula.jpg"
                                        alt="Srinivas Sadasyula"
                                        fill
                                        priority
                                        className="object-cover object-top"
                                    />
                                </div>
                            </motion.div>

                            {/* Header Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex-1 space-y-6"
                            >
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono mb-4">
                                        Vice President
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Srinivas Sadasyula
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Vice President | 35+ Years of Operational Mastery
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/srinivas-sadasyula-411b79161/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn Profile
                                    </a>
                                </div>

                                {/* Key Competencies */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["Strategic Leadership", "Operational Scaling", "Cross-Functional Management", "Ecosystem Growth"].map((skill) => (
                                        <div key={skill} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4 flex items-center gap-3">
                            <Briefcase className="text-[#002f86]" size={28} /> Professional Profile
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            With 35 years of experience in the logistics sector, Srinivas has spent his career mastering the art of systems, efficiency, and scalable operations. He believes that true professional transformation happens when deep-rooted operational expertise meets the frontier of emerging technology.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            As Vice President at The Foundry’s, he leads the charge in redefining education by forging not just engineers, but innovators, founders, and architects in Deep Tech, AI, and Sustainability.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <h3 className="font-serif text-xl font-bold text-[#002f86] mb-6 flex items-center gap-2">
                            <Compass className="text-[#002f86]" size={22} /> Mission & Vision
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2">Ecosystem Mandate</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">Bringing corporate-level operational rigor to the flexibility and rapid scaling of a modern venture builder model.</p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2">Logistics Mastery</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">35+ years of designing and maintaining systems that prioritize throughput, quality control, and supply chain efficiency.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <Quote className="w-8 h-8 text-[#002f86]/20 mb-2" />
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                            &quot;True professional transformation happens when deep-rooted operational expertise meets the frontier of emerging technology.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
