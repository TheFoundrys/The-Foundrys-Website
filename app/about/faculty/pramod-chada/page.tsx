"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, GraduationCap, Award, BookOpen, Briefcase, Quote, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PramodChadaPage() {
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
                                        src="/images/pramod-chada.jpg"
                                        alt="Pramod Chada"
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
                                        Chief Operating Officer
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Pramod Chada
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        CEO, TechOptima | 2.5 Decades of IT Delivery & SDLC Evolution
                                    </p>
                                </div>

                                {/* Contact Links */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/pramodchada/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                </div>

                                {/* Focus Areas */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["IT Delivery Management", "Program Management", "AI Solutions", "SDLC Evolution"].map((skill) => (
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
                    <div className="max-w-4xl space-y-8">
                        <div>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-6 flex items-center gap-3">
                                <Briefcase className="text-[#002f86]" size={28} /> Professional Profile
                            </h2>
                            <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                                <p>
                                    Pramod Chada is a visionary leader in the field of Information Technology, contributing 2.5 decades of dedicated research, expertise, and unwavering commitment to advancing the evolution of SDLC (Software Development Life Cycle) across various roles.
                                </p>
                                <p>
                                    His expertise spans IT Delivery Management, Program/Project Management, Business Development, and setting up offshore delivery centers from the ground up, including establishing business entities, infrastructure, and talent acquisition.
                                </p>
                                <p>
                                    In January 2021, Pramod co-founded TechOptima with a vision to transform businesses through cutting-edge AI solutions. As CEO, he is responsible for strategic planning, global operations, and fostering a culture of excellence. Pramod&apos;s extensive experience in delivering complex, high-visibility engagements across the US, India, and APAC makes him a cornerstone of TechOptima&apos;s success.
                                </p>
                            </div>
                        </div>

                        {/* Quote Box */}
                        <div className="bg-[#F7F7F4] p-8 border border-slate-200/80 relative">
                            <Quote className="w-10 h-10 text-[#002f86]/20 mb-2" />
                            <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                                &quot;True leadership isn&apos;t about titles; it&apos;s about the ability to inspire and empower others to reach their fullest potential.&quot;
                            </p>
                        </div>
                    </div>
                </section>

                {/* Education & Expertise Grid */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4]">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education & Credentials */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                    <GraduationCap className="text-[#002f86]" size={22} /> Education
                                </h3>
                                <div className="p-5 bg-white border border-slate-200/80 shadow-xs">
                                    <p className="font-bold text-slate-900 text-sm">Master&apos;s Degree</p>
                                    <p className="text-xs text-slate-600">Electronics & Instrumentation</p>
                                    <p className="text-xs font-mono font-bold text-[#002f86] mt-1">NIT Warangal</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                    <Award className="text-[#002f86]" size={22} /> Certifications
                                </h3>
                                <div className="p-5 bg-white border border-slate-200/80 shadow-xs">
                                    <p className="text-xs text-slate-800 font-medium">Six Sigma Green Belt Certified</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Expertise */}
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <BookOpen className="text-[#002f86]" size={22} /> Core Competencies
                            </h3>
                            <div className="grid gap-2.5">
                                {[
                                    "IT Delivery Management",
                                    "Program Management",
                                    "AI Solutions Architecture",
                                    "Business Development",
                                    "SDLC Evolution",
                                    "Offshore Operations & Scaling"
                                ].map((skill) => (
                                    <div key={skill} className="p-3 bg-white border border-slate-200/80 text-xs font-bold text-slate-800 shadow-xs">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
