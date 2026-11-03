"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, BookOpen, Briefcase, Globe, GraduationCap, Linkedin, MapPin, ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";

export default function VishwanadhRajuProfile() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-white p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-xs font-bold uppercase tracking-wider font-mono">
                            <ArrowLeft size={14} /><span>Back to Team</span>
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
                                        src="/images/vishwanadh-raju-partner.png"
                                        alt="Vishwanadh Raju"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 450px"
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
                                   Executive Partner 
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Vishwanadh Raju
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Global Talent Acquisition, GCC &amp; Workforce Strategy Leader
                                    </p>
                                </div>

                                {/* Contact Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/vishwanadh-ceo-chro/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <Linkedin size={15} /><span>LinkedIn Profile</span>
                                    </a>
                                    {/* <a
                                        href="https://www.plugscale.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <Globe size={15} /> PlugScale Website
                                    </a> */}
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Award size={14} className="text-[#002f86]" /> CEO &amp; Co-Founder, PlugScale
                                    </div> */}
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <GraduationCap size={14} className="text-[#002f86]" /><span>IIM Bangalore Alumnus</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Briefcase size={14} className="text-[#002f86]" /><span>GCC Strategy &amp; Scale</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Users size={14} className="text-[#002f86]" /><span>Global Talent Operations</span>
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
                            Vishwanadh Raju serves as Executive Partner at The Foundry&apos;s and is the Co-Founder &amp; CEO of PlugScale, an innovation consultancy helping international companies build, manage, and scale high-performance Global Capability Centers (GCCs) and engineering teams across India.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            With over two decades of leadership spanning ANSR, Dun &amp; Bradstreet, Wells Fargo, Bank of America, and Deutsche Bank, Vishwanadh is recognized as an international award-winning talent acquisition strategist, author, and thought leader in HR tech and AI-driven talent transformation. An alumnus of IIM Bangalore and Osmania University, he brings invaluable perspectives on building world-class workforce ecosystems and bridging deep tech learning with industry talent requirements.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F1F1EC] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Briefcase className="text-[#002f86]" size={22} /><span>Strategic Leadership</span>
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Guiding GCC talent architecture and enterprise hiring standards for high-growth tech ecosystems.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Advising on curriculum alignment with global capability centers and multinational employers.</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Mentoring leadership on scalable workforce development and employer-of-record strategies.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Target className="text-[#002f86]" size={22} /><span>Core Focus Areas</span>
                            </h3>
                            <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Global Capability Center (GCC) Strategy &amp; Expansion</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">AI-Driven Recruitment &amp; Talent Intelligence Systems</p>
                                <p className="p-4 bg-white border border-slate-200/80 shadow-xs">Executive Search &amp; Enterprise Workforce Scaling</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl space-y-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-[#002f86]" size={22} /><span>Leadership Philosophy</span>
                            </h3>
                            <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                                &quot;Sustainable business growth is unlocked when organizations view talent not as a resource to manage, but as an engine of innovation. Equipping rising professionals with production-grade deep tech skills prepares them to lead the future from day one.&quot;
                            </p>
                        </div>

                        <div className="p-6 bg-[#F7F7F4] border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">Organizations</span>
                                <span className="text-xs text-slate-700 flex items-center gap-1.5"><Users size={14} /><span>The Foundry&apos;s &amp; PlugScale</span></span>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">Location</span>
                                <span className="text-xs text-slate-700 flex items-center gap-1.5"><MapPin size={14} /><span>Bengaluru / Hyderabad, India</span></span>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">LinkedIn</span>
                                <a
                                    href="https://www.linkedin.com/in/vishwanadh-ceo-chro/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-[#002f86] hover:underline flex items-center gap-1.5 truncate"
                                >
                                    <Linkedin size={14} /><span>vishwanadh-ceo-chro</span>
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

