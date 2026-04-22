"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Landmark, Leaf, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ARCHETYPES = [
    { title: "Engineer Intelligence", school: "Deep Tech", icon: BrainCircuit, color: "text-blue-600", desc: "Architect machines that think." },
    { title: "Build Empires", school: "Venture Builder", icon: Landmark, color: "text-amber-600", desc: "Construct sovereign systems." },
    { title: "Nature is Blueprint", school: "Sustainability", icon: Leaf, color: "text-emerald-600", desc: "Biology as technology." },
    { title: "Power is Harvested", school: "Energy", icon: Zap, color: "text-cyan-600", desc: "Capture energy from cosmos." }
];

export function AboutClient() {
    return (
        <main className="min-h-screen bg-slate-100 text-slate-900 selection:bg-blue-200 selection:text-blue-900">
            <Navbar />

            {/* Scroll 1: Impact Hero & Vision - Robust Grey Grid */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-100 border-b border-slate-200 pt-32 pb-20">
                <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-15" />
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full" />

                <div className="container mx-auto max-w-5xl px-6 text-center z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-white font-extrabold uppercase tracking-[0.4em] text-[10px] mb-8 inline-block bg-slate-900 px-4 py-1 rounded-full shadow-lg">The Origin</span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-slate-900">
                            We didn&apos;t build a school. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We built a Foundry.</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                            Replacing rote memorization with rigorous creation. We forge sovereign innovators who architect the new foundations of the Deep Tech economy.
                        </p>
                        <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto pt-10">
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
                                <h4 className="text-blue-600 font-bold mb-2">The Vision</h4>
                                <p className="text-slate-500 text-sm">Forge a generation of innovators who don&apos;t just participate—they architect the future.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
                                <h4 className="text-indigo-600 font-bold mb-2">The Mission</h4>
                                <p className="text-slate-500 text-sm">Bridging the void between academic theory and the raw velocity of deep tech industry.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll 2: Philosophy & Archetypes - Warm Sand/Gallery Aesthetics */}
            <section className="min-h-screen flex flex-col justify-center bg-[#f7f5ef] px-6 py-24 relative overflow-hidden border-b border-slate-200">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/20 blur-[150px] rounded-full -mr-32 -mt-32" />
                <div className="container mx-auto max-w-6xl z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 text-slate-900">
                            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase border-b-2 border-blue-600 pb-1">Philosophy</span>
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                Degrees are printed. <br />
                                <span className="text-slate-400">Skills are forged.</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg">
                                <p>The lecture hall is dead. success is measured by what you ship, not what you memorize.</p>
                                <ul className="space-y-4 font-bold text-slate-900">
                                    <li className="flex items-center gap-4">
                                        <span className="text-slate-300 line-through">Memorize Syntax</span>
                                        <div className="h-0.5 w-8 bg-blue-200" />
                                        <span>Architect Logic</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="text-slate-300 line-through">Pass Exams</span>
                                        <div className="h-0.5 w-8 bg-blue-200" />
                                        <span>Deploy Products</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {ARCHETYPES.map((arch) => (
                                <div key={arch.title} className="p-8 rounded-[3rem] bg-white border border-slate-200 shadow-lg shadow-slate-300/20 group hover:shadow-blue-500/10 transition-all">
                                    <arch.icon className={`${arch.color} mb-6`} size={36} />
                                    <h4 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-2">{arch.school}</h4>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900">{arch.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{arch.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll 3: The Founder (Vishwa) - High Contrast Dark Mode Finish */}
            <section className="min-h-screen flex flex-col justify-center bg-slate-900 px-6 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

                <div className="container mx-auto max-w-6xl z-10 text-white">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 w-full relative">
                            <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-20">
                                <Image src="/images/vishwa.png" alt="Vishwanath Akuthota" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="flex-[1.4] w-full space-y-6 md:space-y-8 z-10">
                            <div>
                                <h2 className="text-4xl md:text-7xl font-bold mb-3 md:mb-4 tracking-tighter text-white">Vishwanath Akuthota</h2>
                                <p className="text-xl md:text-2xl text-blue-400 font-medium tracking-tight">Founder & CEO</p>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-blue-500/30 pl-6 md:pl-8">
                                <p className="font-serif italic text-2xl md:text-3xl text-blue-50/80 leading-snug">&quot;Leadership is about building trust, resilience, and possibility.&quot;</p>
                                <p className="text-sm md:text-base">With 15+ years in AI, Quantum, and Blockchain, Vishwanath built The Foundry&apos;s to forge the next generation of architects who reshape global industries.</p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-3 md:gap-4 pt-6 pb-2 w-full">
                                {[
                                    { href: "https://www.linkedin.com/in/vishwanathakuthota/", text: "Connect LinkedIn" },
                                    { href: "https://www.drpinnacle.com", text: "Dr.Pinnacle Website", white: true },
                                    { href: "/about/team", text: "Foundry Team", blue: true }
                                ].map((btn) => (
                                    <Link key={btn.text} href={btn.href} className={`px-9 py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto ${btn.white ? 'bg-white text-slate-900 shadow-xl' : btn.blue ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-800 text-white border border-slate-700 shadow-sm'}`}>
                                        {btn.text} <ArrowUpRight size={16} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
