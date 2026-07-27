"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, BookOpen, Briefcase, Quote, Compass } from "lucide-react";

export default function SrinivasSadasyulaPage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Header/Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-4 border-slate-800 shrink-0"
                        >
                            <Image
                                src="/images/srinivas-sadasyula.jpg"
                                alt="Srinivas (Vasu) Sadasyula"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                Vice President
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                Srinivas Sadasyula
                            </h1>
                            <p className="text-xl text-blue-400 font-medium mb-6">Operations Leader & Systems Architect</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="https://www.linkedin.com/in/srinivas-sadasyula-411b79161/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Linkedin size={20} className="text-blue-400" />
                                </a>
                                <a href="mailto:#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Mail size={20} className="text-blue-400" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Column - Main Bio */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Briefcase className="text-blue-600" /> Professional Profile
                                </h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        With 35 years of experience in the logistics sector, Srinivas has spent his career mastering the art of systems, efficiency, and scalable operations. He believes that true professional transformation happens when deep-rooted operational expertise meets the frontier of emerging technology.
                                    </p>
                                    <p>
                                        As Vice President at The Foundry’s, he leads the charge in redefining education by forging not just engineers, but innovators, founders, and architects in Deep Tech, AI, and Sustainability.
                                    </p>
                                    <p>
                                        His mandate is simple: to bring the rigor of large-scale operational management to the agility of a venture ecosystem. He is passionate about scaling the infrastructure that empowers the next generation to move from consumers of technology to creators of the future.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 italic relative">
                                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                                <p className="text-xl text-slate-800 relative z-10 leading-relaxed">
                                    "True professional transformation happens when deep-rooted operational expertise meets the frontier of emerging technology."
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column - Qualifications & Expertise */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-10"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Compass className="text-blue-600" /> Mission & Vision
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Ecosystem Mandate</p>
                                        <p className="text-sm text-slate-600 mt-1">
                                            Bringing corporate-level operational rigor to the flexibility and rapid scaling of a modern venture builder model.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Logistics Mastery</p>
                                        <p className="text-sm text-slate-600 mt-1">
                                            35+ years of designing and maintaining systems that prioritize throughput, quality control, and supply chain efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" /> Core Competencies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Strategic Leadership", 
                                        "Operational Scaling", 
                                        "Cross-Functional Team Management", 
                                        "Ecosystem Growth", 
                                        "Future-Ready Education", 
                                        "Systems Thinking"
                                    ].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
