"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Code, Cpu, Database, Server, Terminal, Laptop, Globe } from "lucide-react";
import Link from "next/link";

export default function JayavardhanReddyProfile() {
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
                                        src="/images/jayavardhan-reddy.jpg"
                                        alt="Jayavardhan Reddy"
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
                                        Full Stack Developer
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Jayavardhan Reddy
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Full-Stack Systems Engineering, Modern Web Applications & Scalable Software Architecture
                                    </p>
                                </div>

                                {/* Key Skills */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {[
                                        "Full Stack Development",
                                        "Frontend & Backend Engineering",
                                        "System Design",
                                        "Database Architecture",
                                        "API Integration",
                                        "Scalable Web Apps"
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
                            Jayavardhan Reddy is a Full Stack Developer at The Foundry&apos;s specializing in building robust web applications, responsive user interfaces, and scalable backend infrastructure. Driven by a passion for creating seamless digital experiences, he crafts high-performance software solutions tailored for deep tech innovation.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Under the mentorship of Vishwanath Akuthota, Jayavardhan has developed deep expertise in full-stack architecture, clean code practices, and system design. He continuously focuses on building foundations from the ground up to deliver reliable, production-ready software systems.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Code className="text-[#002f86]" size={22} /> What He Does
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-slate-700 font-sans">
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Building scalable full-stack web applications and interactive platforms</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Designing responsive interfaces and high-performance UI components</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Architecting robust RESTful & GraphQL backend APIs</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Optimizing application performance, state management & deployment</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Cpu className="text-[#002f86]" size={22} /> Core Focus Areas
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-slate-700 font-sans">
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Full Stack Web Engineering (React, Next.js, Node.js)</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Database Design & ORM Integration</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">System Architecture & Clean Code Patterns</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Cloud Services & DevOps Pipeline Integration</p>
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
                                &quot;Software development is about turning complex logic into elegant, reliable tools. Mastery comes from focusing on strong core principles, continuous learning, and crafting seamless user experiences.&quot;
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
