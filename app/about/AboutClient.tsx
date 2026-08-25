"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Landmark, Leaf, Zap, Target, Rocket, Compass, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ARCHETYPES = [
    { title: "Engineer Intelligence", school: "Deep Tech", icon: BrainCircuit, desc: "Architect machines that think, reason, and optimize complex workflows." },
    { title: "Build Empires", school: "Venture Builder", icon: Landmark, desc: "Construct sovereign systems and scale products into market leaders." },
    { title: "Nature is Blueprint", school: "Sustainability", icon: Leaf, desc: "Biology as technology—designing systems that align with global ESG standards." },
    { title: "Power is Harvested", school: "Energy", icon: Zap, desc: "Capture energy from nature and optimize next-generation clean grids." }
];

export function AboutClient() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Introduction Section */}
                <section className="p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50 bg-white">
                    <div className="max-w-4xl space-y-6">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#002f86] mb-4 leading-tight">
                            We didn&apos;t build a school. <br />
                            <span className="text-slate-900">We built a Foundry.</span>
                        </h1>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans max-w-3xl">
                            Replacing rote memorization with rigorous creation. We forge sovereign innovators who architect the new foundations of the Deep Tech economy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="p-6 bg-[#F1F1EC] border border-slate-200/80">
                                <h4 className="font-serif text-lg font-bold text-[#002f86] mb-2">The Vision</h4>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">Forge a generation of innovators who don&apos;t just participate—they architect the future.</p>
                            </div>
                            <div className="p-6 bg-[#F1F1EC] border border-slate-200/80">
                                <h4 className="font-serif text-lg font-bold text-[#002f86] mb-2">The Mission</h4>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">Bridging the void between academic theory and the raw velocity of deep tech industry.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <div>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                                Degrees are printed. Skills are forged.
                            </h2>
                            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans mb-6">
                                The lecture hall is dead. Success is measured by what you ship, deploy, and scale—not what you memorize for exams.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-bold text-slate-800 font-sans">
                                <div className="p-4 bg-[#F1F1EC] border border-slate-200/80 flex items-center justify-between">
                                    <span className="text-slate-400 line-through">Memorize Syntax</span>
                                    <span className="text-[#002f86]">Architect Logic</span>
                                </div>
                                <div className="p-4 bg-[#F1F1EC] border border-slate-200/80 flex items-center justify-between">
                                    <span className="text-slate-400 line-through">Pass Written Exams</span>
                                    <span className="text-[#002f86]">Deploy Real Products</span>
                                </div>
                            </div>
                        </div>

                        {/* Archetypes Grid */}
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4">Core Schools & Disciplines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {ARCHETYPES.map((arch) => (
                                    <div key={arch.title} className="p-6 bg-[#F1F1EC] border border-slate-200/80 hover:border-[#002f86] transition-colors shadow-xs">
                                        <arch.icon className="text-[#002f86] mb-3" size={28} />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86] block mb-1">{arch.school}</span>
                                        <h4 className="font-bold text-slate-900 text-sm mb-2">{arch.title}</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed font-sans">{arch.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Spotlight Section */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 bg-white">
                    <div className="max-w-4xl flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="aspect-[3/4] relative overflow-hidden shadow-md bg-[#F1F1EC] border border-slate-200/80">
                                <Image src="/images/vishwa-new.jpg" alt="Vishwanath Akuthota" fill className="object-cover object-top" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <span className="inline-block px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono mb-3">
                                    Founder & CEO
                                </span>
                                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#002f86] mb-2">Vishwanath Akuthota</h2>
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Deep-Tech Entrepreneur & AI Architect</p>
                            </div>
                            <p className="font-serif italic text-base md:text-lg text-slate-700 leading-relaxed">
                                &quot;Creating valuable products requires an engineering mindset combined with the precision of a mathematician. Our mission is to build responsible, ethical, and trustworthy AI that empowers humanity.&quot;
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link href="/vishwanathakuthota" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold font-sans transition-colors">
                                    View Full Profile <ArrowUpRight size={14} />
                                </Link>
                                <Link href="/about/team" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-sans transition-colors">
                                    Meet The Team <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
