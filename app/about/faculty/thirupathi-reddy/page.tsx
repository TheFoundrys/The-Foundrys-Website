"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, BookOpen, GraduationCap, Users, Shield, Landmark } from "lucide-react";
import Link from "next/link";

export default function ThirupathiReddyProfile() {
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
                                        src="/images/ThirupathiReddy.jpeg"
                                        alt="Thirupathi Reddy"
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
                                        SME in Academics
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Thirupathi Reddy
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        23+ Years of Excellence in Teaching & Academic Leadership
                                    </p>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <GraduationCap size={14} className="text-[#002f86]" /> M.Com & MSW
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Landmark size={14} className="text-[#002f86]" /> 18+ Yrs Degree & Jr Principal
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <BookOpen size={14} className="text-[#002f86]" /> Academic Strategy
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
                            Pioneering Academic Governance & Student Success
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Thirupathi Reddy holds a Master of Commerce (M.Com) and a Master of Social Work (MSW), bringing over twenty-three years of dedicated teaching experience across higher education. His career includes 5 years as a Junior College Principal and 13 years as a Degree College Principal.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            At The Foundry, he brings his extensive expertise in academic administration, curriculum delivery frameworks, and student welfare to ensure high standards of academic rigor and continuous learning support.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F1F1EC] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <BookOpen className="text-[#002f86]" size={22} /> Academic Excellence
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Over 23 years of teaching experience across Commerce, Social Work, and Higher Education.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">18 years of combined leadership as Degree and Junior College Principal.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Shield className="text-[#002f86]" size={22} /> Institutional Governance
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Specialist in student mentorship, institutional compliance, and faculty development.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Pioneering applied learning models that integrate social awareness and commercial acumen.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed mb-6">
                            &quot;True education empowers individuals with both the commercial capability to build and the social responsibility to serve.&quot;
                        </p>
                        <div className="p-6 bg-[#F1F1EC] border border-slate-200/80">
                            <h4 className="font-serif text-lg font-bold text-[#002f86] mb-2 flex items-center gap-2">
                                <GraduationCap size={20} /> Academic Role
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                                As Subject Matter Expert in Academics at The Foundry, Mr. Thirupathi Reddy oversees academic governance, curriculum alignment, and institutional quality assurance for our finishing school programs.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
