"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Briefcase, Target, Zap, Award, Layers, Cpu } from "lucide-react";
import Link from "next/link";

export default function SoujanyaKanagalaProfile() {
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
                                <div className="aspect-[3/4] relative overflow-hidden shadow-md bg-white border border-slate-200/80">
                                    <Image
                                        src="/images/soujanya.jpg"
                                        alt="Soujanya Kanagala"
                                        fill
                                        priority
                                        className="object-cover"
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
                                        Head of Design & Product Development
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Soujanya Kanagala
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Human-Centric UX & Scalable Digital Architecture Specialist
                                    </p>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Layers size={14} className="text-[#002f86]" /> Design Systems
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Cpu size={14} className="text-[#002f86]" /> Product Strategy
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 pb-5 sm:pb-6 md:pb-6 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Professional Experience
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Management Consultant with 14 years of industry experience in business setup, operations, marketing, sales strategy, and organizational management. Experienced in working with small and growing organizations to establish, streamline, and scale their business operations.
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
                                <h4 className="font-bold text-slate-900 text-sm mb-2">Business Setup & Execution</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">End-to-end involvement in idea implementation, infrastructure planning, process design, and operational launch.</p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2">Operations Management</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">Designing workflows, defining SOPs, aligning teams, and ensuring smooth day-to-day business functioning.</p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2">Marketing & Sales Strategy</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">Developing pricing strategies, go-to-market plans, lead generation models include Digital Marketing, and sales execution frameworks.</p>
                            </div>
                            <div className="bg-white p-5 border border-slate-200/80 shadow-xs">
                                <h4 className="font-bold text-slate-900 text-sm mb-2">Consulting & Advisory</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">Acting as a management consultant for organizations to structure business models, improve efficiency, and support growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Governance Roles Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <h3 className="font-serif text-xl font-bold text-[#002f86] mb-6 flex items-center gap-2">
                            <Briefcase className="text-[#002f86]" size={22} /> Leadership & Governance Roles
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-[#F7F7F4] border border-slate-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-[#002f86] block mb-1">Managing Director</span>
                                <span className="text-xs font-bold text-slate-900">Anantha Engineerings Private Limited</span>
                            </div>
                            <div className="p-4 bg-[#F7F7F4] border border-slate-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-[#002f86] block mb-1">Partner</span>
                                <span className="text-xs font-bold text-slate-900">Autometrics Car Care Solutions</span>
                            </div>
                            <div className="p-4 bg-[#F7F7F4] border border-slate-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-[#002f86] block mb-1">General Secretary</span>
                                <span className="text-xs font-bold text-slate-900">Aloka Mathru Chaya Foundation (NGO)</span>
                            </div>
                            <div className="p-4 bg-[#F7F7F4] border border-slate-200/80">
                                <span className="text-[10px] font-mono uppercase font-bold text-[#002f86] block mb-1">Principal Member</span>
                                <span className="text-xs font-bold text-slate-900">Jeevodaya Home for the Children (NGO)</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
