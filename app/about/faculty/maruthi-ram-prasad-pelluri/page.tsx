"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, Zap, BookOpen, GraduationCap, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function MaruthiPelluriProfile() {
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
                                        src="/images/maruthi.jpg"
                                        alt="Maruthi Ram Prasad Pelluri"
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
                                        Maruthi Ram Prasad Pelluri
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        36+ Years of Excellence in Education & Academic Leadership
                                    </p>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Award size={14} className="text-[#002f86]" /> National Awardee
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Globe size={14} className="text-[#002f86]" /> Global Outreach
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Shield size={14} className="text-[#002f86]" /> NCC Commissioned Officer
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
                            A Legacy of Educational Leadership
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            With over thirty-six years of experience in teaching and academic administration, Maruthi Ram Prasad Pelluri is a cornerstone of the educational landscape in India. His journey began at The Hyderabad Public School (Begumpet), where he served as Principal (FAC), HOD, and Vice Principal for nearly two decades, shaping thousands of young minds.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            A professional visionary, he has held pivotal roles in the Association of ICSE and ISC Schools (ASISC) at both regional and national levels, including serving as its President. His leadership has been instrumental in modernizing school curricula and fostering cultural excellence through global exchange programs with the UK, Singapore, Japan, and China.
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
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Life member and International Ambassador for several prestigious educational forums, including ERU (USA) and Bestow Edutrgex.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Pioneer of innovative systems like the Mentor-Mentee System, Weekend Academic Programs (WAP), and Language Learning Labs.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Conducted numerous Leadership (LeaP) and Faculty Development Programs (FDP) at National and International levels.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Zap className="text-[#002f86]" size={22} /> Strategic Impact
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">National Award recipient from the Govt. of India for leadership at Ramadevi Public School.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Designated Inspector for CISCE, overseeing affiliations and quality standards across multiple Indian states.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Designed the &apos;Skill Olympiad&apos; concept for ICSE schools, bridging the gap between classroom learning and real-world application.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed mb-6">
                            &quot;Education is not just about academic results; it&apos;s about building character and fostering global consciousness through sheer WILL and perseverance.&quot;
                        </p>
                        <div className="p-6 bg-[#F7F7F4] border border-slate-200/80">
                            <h4 className="font-serif text-lg font-bold text-[#002f86] mb-2 flex items-center gap-2">
                                <GraduationCap size={20} /> Beyond the Classroom
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                                A commissioned officer of the NCC (Junior Division Army Wing) for a decade, Mr. Pelluri embodies the discipline and service he instills in his students. From organizing National Games to leading literary competitions, his commitment to holistic development remains supreme.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
