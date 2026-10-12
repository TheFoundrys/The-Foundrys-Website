"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Briefcase, Target, ArrowLeft, Layers, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function SanjeevaReddyGaddamPage() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-white p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50 relative overflow-hidden">
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
                                <div className="aspect-[3/4] relative overflow-hidden shadow-md bg-white border border-slate-200/80 max-w-[320px] mx-auto lg:max-w-none">
                                    <Image
                                        src="/images/sanjeeva-reddy-v2.png"
                                        alt="Sanjeeva Reddy Gaddam"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 450px"
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
                                        Partner
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Sanjeeva Reddy Gaddam
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Strategic Operations Leader, Entrepreneur & Organizational Scaling Specialist
                                    </p>
                                </div>

                                {/* Contact Links */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/sanjeevareddygaddam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                </div>

                                {/* Focus Areas */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["Operations Strategy", "Enterprise Scaling", "Process Optimization", "Cross-Functional Execution"].map((skill) => (
                                        <div key={skill} className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 pb-5 sm:pb-6 md:pb-6 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                            <Briefcase className="text-[#002f86]" size={26} /> Professional Profile
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Sanjeeva Reddy Gaddam is an experienced entrepreneur and operations leader with a proven track record of establishing, scaling, and managing technology and multi-stakeholder ventures. Serving as Operations Head at The Foundry, he steers operational excellence, workflow governance, and strategic execution across all divisions.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            With deep experience as the founder of GHSL Technologies and co-founder of healthcare platform docNmeds, Sanjeeva brings seasoned leadership in building foundational operating models, driving resource efficiency, and aligning high-performance teams to achieve scalable institutional impact.
                        </p>
                    </div>
                </section>

                {/* Core Expertise Grid */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <h3 className="font-serif text-xl font-bold text-[#002f86] mb-6 flex items-center gap-2">
                            <Target className="text-[#002f86]" size={22} /> Core Expertise
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                                    <TrendingUp size={16} className="text-[#002f86]" /> Strategic Operations & Execution
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                    Designing scalable operating frameworks, streamlining day-to-day organizational workflows, and ensuring seamless execution across programs.
                                </p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                                    <Layers size={16} className="text-[#002f86]" /> Venture & Startup Scaling
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                    Building organizations from zero to one, optimizing resource allocation, and scaling multi-channel digital and operational ecosystems.
                                </p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-[#002f86]" /> Process Optimization & Quality Benchmarks
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                    Instituting rigorous operational KPIs, quality control frameworks, and standard operating procedures (SOPs) for continuous performance improvement.
                                </p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                                    <Users size={16} className="text-[#002f86]" /> Cross-Functional Team Leadership
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                    Mobilizing interdisciplinary teams across technology, education, and administration towards unified organizational goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Entrepreneurial & Leadership Roles Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <h3 className="font-serif text-xl font-bold text-[#002f86] mb-6 flex items-center gap-2">
                            <Briefcase className="text-[#002f86]" size={22} /> Leadership & Venture Experience
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-[#F7F7F4] border border-slate-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-[#002f86] block mb-1">Founder</span>
                                <span className="text-xs font-bold text-slate-900">GHSL Technologies Pvt Ltd</span>
                            </div>
                            <div className="p-4 bg-[#F7F7F4] border border-slate-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-[#002f86] block mb-1">Co-Founder</span>
                                <span className="text-xs font-bold text-slate-900">docNmeds Digital Healthcare</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
