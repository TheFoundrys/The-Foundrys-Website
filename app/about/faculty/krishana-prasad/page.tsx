"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Linkedin, Brain, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export default function KrishanaPrasadProfile() {
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
                                        src="/images/testimonials/Krishna.jpeg"
                                        alt="Krishana Prasad"
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
                                        AI Research Engineer
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Krishana Prasad
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Artificial Intelligence Research, Machine Learning Systems & Applied Data Science
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/krishnaprasadavula/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                </div>

                                {/* Key Skills */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {[
                                        "Artificial Intelligence",
                                        "Machine Learning",
                                        "Data Science",
                                        "System Design",
                                        "Deep Learning",
                                        "Real-world AI Engineering"
                                    ].map((skill) => (
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
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Profile Overview
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Krishana Prasad is an AI Research Engineer at The Foundry&apos;s specializing in artificial intelligence, machine learning algorithms, and real-world system architecture. Driven by deep curiosity and rigorous technical application, he builds intelligent models and data-driven solutions designed to tackle complex technical challenges.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Under the mentorship of Vishwanath Akuthota, Krishana mastered foundational AI/ML concepts, data science workflows, machine learning theory, and production system design. Through hands-on experimentation and end-to-end project engineering, he seamlessly bridges theoretical computer science with scalable AI implementations.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Brain className="text-[#002f86]" size={22} /> What He Does
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-slate-700 font-sans">
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Developing & training machine learning models for real-world applications</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Designing end-to-end data processing and analytics pipelines</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Architecting scalable AI infrastructure and system integrations</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Applying core ML theory & deep learning to deep tech solutions</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Cpu className="text-[#002f86]" size={22} /> Core Focus Areas
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-slate-700 font-sans">
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">AI Research & Applied Machine Learning</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Deep Learning & Neural Network Architectures</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Data Science & Exploratory Analytics</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">System Design & Machine Learning Operations (MLOps)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Philosophy */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl space-y-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Globe className="text-[#002f86]" size={22} /> Professional Philosophy
                            </h3>
                            <p className="font-serif italic text-base md:text-xl text-slate-700 leading-relaxed">
                                &quot;AI research isn&apos;t just about complex algorithms—it&apos;s about mastering fundamental principles, learning by building, and transforming raw data into practical tools that solve real-world problems.&quot;
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
