"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, GraduationCap, Award, BookOpen, Briefcase, Quote } from "lucide-react";
import Link from "next/link";

export default function PramodJPPage() {
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
                                        src="/images/pramod-jp.png"
                                        alt="Pramod J. P."
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
                                        Head of R&D
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Pramod J. P.
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        3+ Decades in Semiconductors, Piezotronics, & Sustainable Energy Research
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/jp-pramod-a710985a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn Profile
                                    </a>
                                </div>

                                {/* Key Metrics */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["12+ Scopus Articles", "62+ Multi-disciplinary Papers", "3 Book Chapters", "2 Patents Held"].map((badge) => (
                                        <div key={badge} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                            {badge}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4 flex items-center gap-3">
                            <Briefcase className="text-[#002f86]" size={28} /> Professional Profile
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Pramod J. P. is a distinguished academic leader and researcher with over three decades of expertise and international exposure at the intersection of advanced physics, semiconductor technology, and sustainable energy.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Exemplifying a rigorous school of finish, his portfolio focuses on piezotronics, ferroelectric ceramics, and green energy systems through global collaborations with premier institutions like IIT Hyderabad, IICT, CSIR, and Avira University.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4]">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <GraduationCap className="text-[#002f86]" size={22} /> Education & Research
                            </h3>
                            <div className="p-5 bg-white border border-slate-200/80 shadow-xs">
                                <p className="font-bold text-slate-900 text-sm">Ph.D. in Material Science</p>
                                <p className="text-xs text-slate-600">Lincoln University (in collab with Avira Univ & IITH)</p>
                                <p className="text-xs text-slate-500 mt-2">Degrees: M.Sc.(Phy), M.Sc.(Psy), M.Ed.(Edtec), PGDIPR</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Award className="text-[#002f86]" size={22} /> Awards & Accolades
                            </h3>
                            <div className="p-5 bg-white border border-slate-200/80 shadow-xs space-y-1 text-xs font-bold text-slate-700 font-sans">
                                <p>• Best Teacher Award</p>
                                <p>• Best Mentor Award</p>
                                <p>• Best Paper & Poster Awards</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50">
                    <div className="max-w-4xl">
                        <Quote className="w-8 h-8 text-[#002f86]/20 mb-2" />
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                            &quot;My primary objective is to provide a safe and nurturing learning environment that encourages student growth and development, fostering an interest for research, learning, critical thinking, and problem-solving skills.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
