"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Briefcase, Target, TrendingUp, Award, Linkedin, Handshake, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function RavikanthNProfile() {
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
                                        src="/images/ravikanth.png"
                                        alt="Ravikanth N"
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
                                        Manager - Sales and Business Development (Enterprises & Products)
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Ravikanth N
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Commercial Strategy, Enterprise Client Partnerships &amp; Scalable Revenue Growth
                                    </p>
                                </div>

                                {/* Contact Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/ravikanth-n-5973ba164/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <Linkedin size={15} /> LinkedIn Profile
                                    </a>
                                    {/* <a
                                        href="mailto:contact@thefoundrys.com"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <Mail size={15} /> Get in Touch
                                    </a> */}
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Briefcase size={14} className="text-[#002f86]" /> Enterprise Sales
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <TrendingUp size={14} className="text-[#002f86]" /> Revenue Strategy
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Handshake size={14} className="text-[#002f86]" /> B2B Partnerships
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Award size={14} className="text-[#002f86]" /> Account Management
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
                            Profile Overview
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Ravikanth N serves as Sales Manager at The Foundry’s, spearheading revenue initiatives, corporate partnerships, and client engagement strategies that connect enterprise organizations with cutting-edge workforce readiness programs.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            With deep expertise in solution selling and consultative business development, he acts as a trusted advisor to institutional leaders and corporate hiring partners, helping align tech curriculum offerings with dynamic industry talent demands across AI, Data Science, and modern engineering disciplines.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Briefcase className="text-[#002f86]" size={22} /> What He Does
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-slate-700 font-sans">
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Driving enterprise client acquisition and pipeline execution</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Structuring customized learning and upskilling solutions for organizations</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Cultivating long-term stakeholder and corporate hiring relationships</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Collaborating across teams to ensure exceptional client satisfaction and onboarding</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Target className="text-[#002f86]" size={22} /> Core Focus Areas
                            </h3>
                            <div className="space-y-2.5 text-xs md:text-sm text-slate-700 font-sans">
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Enterprise Sales &amp; Key Account Management</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Workforce Development &amp; Talent Pipeline Solutions</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">B2B Negotiation &amp; Strategic Alliances</p>
                                <p className="p-3.5 bg-white border border-slate-200/80 shadow-xs">Market Penetration &amp; Revenue Operations</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact & Philosophy Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl space-y-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-[#002f86]" size={22} /> Professional Philosophy
                            </h3>
                            <p className="font-serif italic text-base md:text-xl text-slate-700 leading-relaxed">
                                &quot;Sustainable business growth is grounded in active listening and solving real challenges. In an era redefined by AI and deep tech, empowering organizations with the right human talent is the single greatest competitive differentiator.&quot;
                            </p>
                        </div>

                        <div className="p-6 bg-[#F7F7F4] border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">Organization</span>
                                <span className="text-xs text-slate-700 flex items-center gap-1.5"><Users size={14} /> The Foundry&apos;s</span>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">Location</span>
                                <span className="text-xs text-slate-700 flex items-center gap-1.5"><MapPin size={14} /> Hyderabad, India</span>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">LinkedIn</span>
                                <a
                                    href="https://www.linkedin.com/in/ravikanth-n-5973ba164/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-[#002f86] hover:underline flex items-center gap-1.5 truncate"
                                >
                                    <Linkedin size={14} /> ravikanth-n-5973ba164
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
