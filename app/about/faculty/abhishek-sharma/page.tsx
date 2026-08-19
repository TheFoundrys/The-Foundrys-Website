"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Zap, BookOpen, BarChart3, Target, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AbhishekSharmaProfile() {
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
                                        src="/images/abhishek shaarma.png"
                                        alt="Abhishek Sharma"
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
                                        SME in Data Analytics
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Abhishek Sharma
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Senior Data Analyst & Strategic Automation Specialist
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://linkedin.com/in/abhishek-sharma-27b585ba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <BarChart3 size={14} className="text-[#002f86]" /> 8+ Years Experience
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Zap size={14} className="text-[#002f86]" /> 220+ Hours Saved
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <GraduationCap size={14} className="text-[#002f86]" /> Master in Economics
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
                            A Narrative of Data & Precision
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Abhishek Sharma is an analytical and results-driven professional who believes that the true value of data lies in its power to uncover hidden truths. With a career spanning over eight years, he has dedicated himself to impacting organizational performance by digging deep into metrics and transforming complex datasets into actionable business intelligence.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            His journey is characterized by a relentless drive for efficiency. At State Street, he single-handedly revolutionized the daily Mark-to-Market (MTM) reporting process. By integrating Python-driven workflows with AI-integrated analytics, he shifted the paradigm from manual data collection to high-level strategic analysis, saving hundreds of hours of manual labor in the process.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <BookOpen className="text-[#002f86]" size={22} /> Academic Lens
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Master in Economics from the University Of Hyderabad, providing a unique lens for interpreting complex market factors.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Bachelor in Economics from the University Of Delhi, grounding his analytical approach in macroeconomic theory.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">His academic background allows him to blend theoretical economics with modern data engineering to solve aggressive business objectives.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Target className="text-[#002f86]" size={22} /> Professional Impact
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Spearheaded function-level Treasury reports for self-service analytics and automated commentary.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Built KPIs and customer insight platforms for key cloud-native storage solutions at Pure Storage.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Established Visualization Centers of Excellence (CoE) to set new standards in digital reporting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed mb-6">
                            &quot;Deep data insights are the only way to navigate aggressive business objectives in a volatile market. Automation is the key to unlocking human potential for strategic thinking.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
