"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, Zap, BookOpen, Heart } from "lucide-react";
import Link from "next/link";

export default function SumanRangabhashyamProfile() {
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
                                        src="/images/suman rangabhasyam.jpg"
                                        alt="Dr. Suman Rangabhashyam"
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
                                        Advisory Board Member
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Dr. Suman Rangabhashyam
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        SME in Social Entrepreneurship & Brand Building
                                    </p>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Award size={14} className="text-[#002f86]" /> 22+ Awards
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Zap size={14} className="text-[#002f86]" /> 600+ Sessions
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <BookOpen size={14} className="text-[#002f86]" /> PhD in Management
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            A Journey of Resilience & Purpose
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Coming from a proud family that dedicated itself to the service of the nation, daughter of an Air Commodore, wife of ace fighter pilot and Group Captain, Suman has spent her life exemplifying leadership, strength, and dedication.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            She is the Director of Markitome Pvt Ltd, a branding agency that has successfully empowered numerous individuals and enterprises to establish their market presence and scale up across FMCG, Tech, Fintech, and Digital Commerce.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <BookOpen className="text-[#002f86]" size={22} /> Academic Excellence
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Graduation in Science, BEd, Masters in English, Diploma holder in French.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Masters in Reiki, MBA in Finance and Marketing, PhD in Management.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Certified Independent Director from Indian Institute of Corporate Affairs.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Zap className="text-[#002f86]" size={22} /> Professional Impact
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Invited to speak on effective management and humanity across 11 countries.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">28,000+ students mentored across 600+ management sessions.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">6,500+ hours of keynote speaking in over 30 public forums.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote & Humanity Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl space-y-6">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                            &quot;Create more wealth and use it for a good cause. When opportunity knocks on your door, open it wide and share your light with the world.&quot;
                        </p>
                        <div className="p-6 bg-[#F7F7F4] border border-slate-200/80 flex items-start gap-4">
                            <Heart className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-serif text-base font-bold text-slate-900 mb-1">Humanity First</h4>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                                    Deeply committed to social welfare and animal rescue, Dr. Suman actively supports underprivileged communities and animal shelters 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
