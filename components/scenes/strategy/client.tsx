"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Target, Users, Zap } from "lucide-react";

export function StrategyClient() {
    return (
        <main className="min-h-screen bg-neutral-50 font-sans selection:bg-black selection:text-white">
            <Navbar />

            {/* Hero / Section 1: The "What" */}
            <section className="pt-32 pb-40 md:pb-20 px-6 relative overflow-hidden bg-white">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block border border-neutral-200 bg-white px-3 py-1 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm"
                            >
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold">
                                    The Foundry Certified Innovator (FCI)
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold leading-tight text-neutral-900 mb-6 tracking-tight"
                            >
                                The Fellowship for the Next Generation of <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)]">Innovators, Founders, and Systems-Thinkers.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed"
                            >
                                The Foundry’s Certified Innovator (FCI) Fellowship is an elite, 4-week intensive program designed for Team AI Enthusiasts,Team AI Founders, Team AI Innovators , Team CEOs. This is not a classroom experience; it is a professional-grade incubator.
                            </motion.p>
                        </div>

                        {/* Visual: Triple Threat Diagram */}
                        <div className="flex-1 w-full flex justify-center">
                            <div className="relative w-[400px] h-[400px]">
                                {/* Center Intersection Glow - Soft White/Yellow warm glow behind */}
                                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-50/50 rounded-full blur-3xl z-0"></div>

                                {/* Circle 1: Technical - Top (Amber/Yellow - Matches Reference Top) */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full border border-amber-200/50 bg-amber-200/60 backdrop-blur-sm flex items-start justify-center pt-8 z-10 mix-blend-multiply"
                                >
                                    <span className="font-bold text-[10px] tracking-[0.2em] uppercase mt-6 text-amber-900/70">Technical</span>
                                </motion.div>
                                {/* Circle 2: Design - Bottom Left (Cyan/Blue - Matches Reference Left) */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute bottom-12 left-2 w-64 h-64 rounded-full border border-cyan-200/50 bg-cyan-200/60 backdrop-blur-sm flex items-end justify-start pb-20 pl-12 z-10 mix-blend-multiply"
                                >
                                    <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-cyan-900/70">Design</span>
                                </motion.div>
                                {/* Circle 3: Economic - Bottom Right (Emerald/Green - Matches Reference Right) */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute bottom-12 right-2 w-64 h-64 rounded-full border border-emerald-200/50 bg-emerald-200/60 backdrop-blur-sm flex items-end justify-end pb-20 pr-10 z-10 mix-blend-multiply"
                                >
                                    <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-emerald-900/70">Economic</span>
                                </motion.div>

                                {/* Center Intersection Text - Positioned exactly in the visual center of intersection */}
                                <div className="absolute top-[calc(50%-30px)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none">
                                    <div className="relative">
                                        <span className="block text-[9px] uppercase tracking-widest font-bold text-neutral-500 mb-0.5">The</span>
                                        <span className="block text-sm font-black uppercase tracking-wider text-neutral-900 leading-none">FCI Fellow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Block */}
            <div className="relative z-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
                    <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 flex-1 text-center md:text-left w-full">
                            <div className="border-r border-neutral-100 last:border-0 pr-4">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-neutral-900">4 Weeks</p>
                            </div>
                            <div className="border-r border-neutral-100 last:border-0 pr-4">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Location</p>
                                <p className="text-lg font-bold text-neutral-900">Hyderabad</p>
                            </div>
                            <div className="border-r border-neutral-100 last:border-0 pr-4">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-neutral-900">April 2026</p>
                            </div>
                            <div className="pr-4">
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <span className="text-sm text-neutral-400 line-through">₹30,000</span>
                                    <span className="text-lg font-bold text-neutral-900">₹20,000</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="w-full md:w-auto">
                            <Link href="/apply" className="block w-full text-center px-8 py-3 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: The "Why" */}
            <section className="pt-40 pb-20 md:py-20 px-6 bg-neutral-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-blue-400 mb-4 bg-blue-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Zap size={14} />
                                <span>The Purpose</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Why the FCI? <br /><span className="text-neutral-500">While your current classes likely teach students how to start a business (Founder), this program should focus on how they can solve a systemic problem in the community or an industry.</span>
                            </h2>
                            <div className="space-y-6 text-neutral-300">
                                <p>
                                    For the modern student, the gap isn't a lack of information it’s a lack of application. The FCI exists to transform academic potential into industrial-grade agency.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="mt-1 bg-neutral-800 p-1 rounded-md">
                                            <Users size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">For the Grade 12 Student</h4>
                                            <p className="text-sm text-neutral-400 mt-1">Develop a high-caliber portfolio of work that demonstrates leadership and critical thinking far beyond the standard curriculum.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 bg-neutral-800 p-1 rounded-md">
                                            <Target size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">For the Graduate</h4>
                                            <p className="text-sm text-neutral-400 mt-1">Acquire the "Zero-to-One" mindset required to lead projects in high-growth startups or to architect your own venture.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 bg-neutral-800 p-1 rounded-md">
                                            <Clock size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">For the Future</h4>
                                            <p className="text-sm text-neutral-400 mt-1">Master the ability to navigate ambiguity, a skill that remains the only hedge against an automated economy.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visual: Shift Infographic */}
                        <div className="bg-neutral-800 rounded-xl p-8 border border-neutral-700">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg border border-neutral-700 opacity-60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                            <span className="text-lg">📚</span>
                                        </div>
                                        <span className="font-medium">The Qualifier</span>
                                    </div>
                                    <span className="text-xs uppercase tracking-wider text-neutral-500">Certification</span>
                                </div>

                                <div className="flex justify-center -my-2 z-10">
                                    <div className="bg-white text-black p-2 rounded-full">
                                        <ArrowRight size={20} className="rotate-90" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border border-blue-500/30">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] flex items-center justify-center text-white">
                                            <span className="text-lg">🚀</span>
                                        </div>
                                        <span className="font-bold text-white">The Foundry Forge </span>
                                    </div>
                                    <span className="text-xs uppercase tracking-wider text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold">The "Academy" Experience</span>
                                </div>

                                <div className="flex justify-center -my-2 z-10">
                                    <div className="bg-white text-black p-2 rounded-full">
                                        <ArrowRight size={20} className="rotate-90" />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg border border-neutral-700 opacity-60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                            <span className="text-lg">📚</span>
                                        </div>
                                        <span className="font-medium">The Incubation Year </span>
                                    </div>
                                    <span className="text-xs uppercase tracking-wider text-neutral-500">The Project</span>
                                </div>


                                <div className="flex justify-center -my-2 z-10">
                                    <div className="bg-white text-black p-2 rounded-full">
                                        <ArrowRight size={20} className="rotate-90" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg border border-neutral-700 opacity-60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                                            <span className="text-lg">📚</span>
                                        </div>
                                        <span className="font-medium">The Exhibition Year</span>
                                    </div>
                                    <span className="text-xs uppercase tracking-wider text-neutral-500">Certification Earned</span>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-neutral-400 font-mono">The shift from Consumer to Creator.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The "How" */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">The Forge: How We Build.</h2>
                        <p className="text-lg text-neutral-600 max-w-2xl">The program follows a 5-day-a-week, 3-hour-daily high-intensity format using our proprietary "Foundry Framework".</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        {[
                            { week: "01", title: "Context & Fundamentals", desc: "We deconstruct 'Success Mechanics'. See the world as systems and frictions." },
                            { week: "02", title: "The Design Lab", desc: "Using human-centered design, move from Foundry to Field. Interview, map empathy, prototype." },
                            { week: "03", title: "The Venture Challenge", desc: "Business Logic. Build unit economics, revenue architectures, and market-entry strategies." },
                            { week: "04", title: "Agile Execution", desc: "The final sprint. Pivot under pressure using Scrum. Finalize Venture Dossier." }
                        ].map((item, i) => (
                            <div key={i} className="group p-6 border border-neutral-200 hover:border-black transition-colors duration-300">
                                <div className="text-4xl font-black text-neutral-200 group-hover:text-black mb-4 transition-colors">
                                    {item.week}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Section 4: Other Things */}
            <section className="py-20 px-6 bg-neutral-50 border-y border-neutral-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            {/* Visual: Dossier Preview */}
                            <div className="bg-white p-2 shadow-xl border border-neutral-200 rotate-1 max-w-sm mx-auto">
                                <div className="h-64 bg-neutral-100 flex items-center justify-center border border-neutral-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">📄</div>
                                        <span className="font-serif italic text-neutral-500">Venture Dossier</span>
                                    </div>
                                </div>
                                <div className="p-4 grid grid-cols-3 gap-2">
                                    <div className="h-2 bg-neutral-100 rounded"></div>
                                    <div className="h-2 bg-neutral-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-neutral-100 rounded col-span-2"></div>
                                    <div className="h-2 bg-neutral-100 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Result of the Residency.</h2>
                            <p className="text-lg text-neutral-600 mb-8">
                                Upon completion, an FCI Fellow does not just leave with a certificate; they leave with a professional identity.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-neutral-900 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="block text-neutral-900">The Venture Dossier</strong>
                                        <span className="text-neutral-600 text-sm">A 15–20 page comprehensive document detailing the problem-to-prototype journey essential for high-level university applications or job placements.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-neutral-900 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="block text-neutral-900">The FCI Digital Credential</strong>
                                        <span className="text-neutral-600 text-sm">A verifiable badge of merit recognized by our network of industry partners.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-neutral-900 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="block text-neutral-900">The Showcase</strong>
                                        <span className="text-neutral-600 text-sm">A high-stakes presentation to a panel of professional faculty, founders, and industry experts.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sample Certificate */}
            <section className="py-24 px-6 bg-neutral-100 border-b border-neutral-200">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8">Verified Certification</h2>

                    <div className="max-w-2xl mx-auto">
                        <div className="relative p-3 bg-white border border-neutral-200 rounded-2xl shadow-xl">
                            <div className="relative z-10">
                                <img
                                    src="/sample-certificate.png"
                                    alt="Sample Certificate"
                                    className="w-full h-auto rounded-lg shadow-sm"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-neutral-500/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900/5 rounded-full blur-3xl" />
                        </div>
                    </div>

                    <p className="mt-8 text-neutral-500 text-sm">
                        Successful graduates receive a verifiable digital credential and a physical certificate.
                    </p>
                </div>
            </section>

            {/* Section 5: Admissions */}
            <section className="py-24 px-6 bg-black text-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Selection by Merit. <br />Driven by Grit.</h2>
                    <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                        We do not look for the highest grades; we look for the highest levels of curiosity and persistence.
                    </p>

                    <Link href="/apply" className="bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] text-white px-8 py-4 text-lg font-bold rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2 group">
                        Start Your Application
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
