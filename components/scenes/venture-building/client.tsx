"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Target, Users, Zap, ShieldCheck, BrainCircuit, Briefcase } from "lucide-react";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export function VentureClient() {
    const { symbol, currency } = useRegionalPricing();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const originalPrice = COURSE_PRICING.certifiedInnovator.original[currency];

    return (
        <main className="min-h-screen font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Hero & Specs (Master White Card Container) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
                <section className="bg-white p-8 sm:p-12 md:p-16 text-neutral-900 overflow-hidden relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-3.5 py-1 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm rounded-full"
                                >
                                    <Rocket size={14} className="text-[#002f86]" />
                                    <span className="font-bold text-[#002f86]">
                                        School of Entrepreneurship
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-5xl font-bold leading-tight text-[#031a57] mb-6 tracking-tight font-serif"
                                >
                                    Bachelors of <br />
                                    <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold">Venture Building.</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-base text-neutral-600 mb-8 max-w-xl leading-relaxed font-light"
                                >
                                    Stop looking for a job. Create them. Master the mechanics of building high-growth startups from zero to one. Learn to validate ideas, engineer team culture, raise funding, and scale autonomous AI-native ventures.
                                </motion.p>
                            </div>

                            {/* Hero Right Visual */}
                            <div className="flex-1 w-full flex justify-center scale-95 lg:scale-100">
                                <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#002f86]">The Founder&apos;s Path</span>
                                        <Rocket size={20} className="text-[#002f86]" />
                                    </div>

                                    <div className="space-y-4 my-auto">
                                        <div className="p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                                            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Phase 01</div>
                                            <div className="font-serif font-bold text-slate-900 text-sm">Zero-to-One MVP</div>
                                        </div>
                                        <div className="p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                                            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Phase 02</div>
                                            <div className="font-serif font-bold text-slate-900 text-sm">Autonomous Growth Architecture</div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                                        <span>Outcome</span>
                                        <span className="font-bold text-[#002f86]">Unicorn of One</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specs Bar */}
                <div className="bg-[#F7F7F4] border-t border-slate-200/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-14 flex-1 text-left w-full">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Length</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">4 Years / 12-24 Mo Tracks</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Delivery Mode</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">Hybrid / On-Campus</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Campus Location</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">Hyderabad, India</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Fee</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">{mounted ? `${symbol}${originalPrice}` : '₹20,000'}</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <Link href="/apply" className="block w-full text-center px-8 py-3.5 bg-[#002f86] text-white border border-[#002f86] font-bold rounded-xl hover:bg-[#002f86]/90 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,47,134,0.15)] whitespace-nowrap text-sm">
                            Apply to the School
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 2: Why Venture Building? (Pastel Card Container #DDE7DE) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DDE7DE] border border-[#c8dac7] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-[#DDE7DE] relative overflow-hidden">
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 text-slate-800 mb-4 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
                                <Zap size={14} className="text-[#002f86]" />
                                <span>The Purpose</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif mb-4 leading-tight">
                                Why Venture Building?
                            </h2>
                            <p className="text-base text-slate-650 max-w-2xl font-light leading-relaxed">
                                Traditional MBAs teach you how to manage existing businesses. We teach you how to create them.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <Target className="text-[#002f86]" size={24} />,
                                    title: "Validation First",
                                    desc: "Don't build in the dark. Master customer discovery and rapid validation before writing a line of code."
                                },
                                {
                                    icon: <Users className="text-[#002f86]" size={24} />,
                                    title: "Team & Culture",
                                    desc: "Hiring the first 10 employees is harder than the next 100. Learn to engineer high-velocity culture."
                                },
                                {
                                    icon: <Zap className="text-[#002f86]" size={24} />,
                                    title: "Growth Mechanics",
                                    desc: "Understand the levers of viral growth, retention loops, and unit economics that sustain scale."
                                },
                                {
                                    icon: <ShieldCheck className="text-[#002f86]" size={24} />,
                                    title: "Founder Resilience",
                                    desc: "The startup journey is a marathon. Build the mental framework required to lead under pressure."
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-6 bg-white border border-slate-200/80 rounded-2xl hover:shadow-md transition-all group"
                                >
                                    <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block group-hover:bg-[#002f86]/10 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{feature.title}</h3>
                                    <p className="text-slate-600 text-xs leading-relaxed font-sans">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 3: Venture Tracks (White Card Container) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-12 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif mb-4">Venture Tracks</h2>
                            <p className="text-base text-slate-500 max-w-2xl font-light leading-relaxed">
                                Choose the track that fits your stage. From ideation to market explosion.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-[#002f86]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono">Phase 01</span>
                                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">12 Months</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[#031a57] mb-3">Zero-to-One</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                                    The prototype track. Validate your idea, build your MVP, and find your first 100 customers with zero ad spend.
                                </p>
                            </div>

                            <div className="p-8 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-[#002f86]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono">Phase 02</span>
                                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">24 Months</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[#031a57] mb-3">Growth Architect</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                                    The scaling track. Build your team, automate operations with agentic AI, and raise seed capital from global partners.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 4: Future Vision (Pastel Card Container #DDE7DE) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DDE7DE] border border-[#c8dac7] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-[#DDE7DE]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif mb-4">Post-AI Job Landscape (2035)</h2>
                            <p className="text-base text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                                In the next decade, startups won&apos;t just &quot;use&quot; AI; they will be autonomous AI-native entities. Venture building today requires understanding how to architect business logic that resides directly within LLMs and agentic swarms.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    title: "AI-Venture Architect",
                                    desc: "Designing autonomous business units that run with 90%+ automation using agentic workflows."
                                },
                                {
                                    title: "Algorithmic Growth Officer",
                                    desc: "Managing neural-network driven customer acquisition and retention loops that evolve in real-time."
                                },
                                {
                                    title: "Decentralized CEO",
                                    desc: "Governing global, AI-coordinated organizations that operate without traditional central management."
                                }
                            ].map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-xs"
                                >
                                    <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block">
                                        <Briefcase size={22} className="text-[#002f86]" />
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{job.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{job.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl text-center max-w-3xl mx-auto shadow-sm">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-2">Outcome</span>
                            <p className="text-sm font-semibold text-slate-800 font-serif leading-relaxed">&quot;A high-velocity founder capable of building a &apos;Unicorn of One&apos;—an AI-native startup that achieves massive scale with minimal human overhead and maximum technical leverage.&quot;</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
