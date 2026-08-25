"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, BookOpen, GraduationCap, Users, Shield, Briefcase } from "lucide-react";
import Link from "next/link";

export default function DrJayaramProfile() {
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
                                        src="/images/dr-jayaram.jpg"
                                        alt="Dr. Jayaram"
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
                                        Advisory Member
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Dr. Jayaram
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        President of TTPOA & Vice President of All India TPO Association
                                    </p>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Award size={14} className="text-[#002f86]" /> TTPOA President
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Users size={14} className="text-[#002f86]" /> All India TPO VP
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Briefcase size={14} className="text-[#002f86]" /> Placement Leadership
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
                            Aligning Academic Talent with Industry Demand
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Dr. Jayaram serves as the President of the Telangana Training and Placement Officers Association (TTPOA) and Vice President of the All India TPO Association. With decades of leadership in campus placements, institutional training ecosystems, and corporate relations, he plays a strategic advisory role at The Foundry.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            His extensive work spans forging high-impact industry partnerships, establishing corporate hiring benchmarks, and ensuring that emerging engineering and deep tech graduates transition smoothly into high-demand technology roles nationwide.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F1F1EC] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <BookOpen className="text-[#002f86]" size={22} /> Strategic Leadership
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Pioneer in standardizing training & placement frameworks for technical institutions across Telangana.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Key advisor on aligning curriculum outcomes with real-world enterprise requirements.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Briefcase className="text-[#002f86]" size={22} /> Industry Alignment
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Facilitates large-scale recruitment drives and national placement initiatives for top-tier tech talent.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Guides deep tech finishing programs to match current hiring standards in AI, Quantum, and Software Engineering.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed mb-6">
                            &quot;The gap between degree completion and enterprise readiness is bridged when students learn by building production-grade solutions from day one.&quot;
                        </p>
                        <div className="p-6 bg-[#F1F1EC] border border-slate-200/80">
                            <h4 className="font-serif text-lg font-bold text-[#002f86] mb-2 flex items-center gap-2">
                                <GraduationCap size={20} /> Advisory Impact
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                                As an Advisory Member at The Foundry, Dr. Jayaram guides strategic placement channels and corporate engagement initiatives, ensuring our graduates enter the industry as job-ready creators and problem solvers.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
