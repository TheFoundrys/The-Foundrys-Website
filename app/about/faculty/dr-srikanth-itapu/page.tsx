"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, BookOpen, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function DrSrikanthProfile() {
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
                                        src="/images/dr-itapu-srikanth.jpg"
                                        alt="Dr. Srikanth Itapu"
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
                                        SME in Quantum Technologies
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Dr. Srikanth Itapu
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Subject Matter Expert in Quantum Technologies, Advanced Materials, & Semiconductor Devices
                                    </p>
                                </div>

                                {/* Social Link */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/sitapu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn Profile
                                    </a>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["Quantum Technologies", "Advanced Materials", "Semiconductor Devices", "Spintronics"].map((tag) => (
                                        <div key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                            {tag}
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
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Research & Leadership Overview
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Dr. Srikanth Itapu is a subject matter expert in quantum technologies, advanced materials, and semiconductor devices, with over 12 years of international research experience and significant leadership roles in academia and innovation ecosystems.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <BookOpen className="text-[#002f86]" size={22} /> Research Expertise
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                His expertise spans quantum materials, spintronics, solid-state qubits, nano-fabrication, and energy-efficient quantum hardware. He has led interdisciplinary programs integrating quantum physics, materials science, and sustainable energy technologies.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Award className="text-[#002f86]" size={22} /> Leadership & Impact
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                Director of E-Spin Lab and Chair of ECE at Alliance University. Extensive experience in curriculum design, workforce development, and mentoring talent in quantum engineering and VLSI domains.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Publications Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-2xl font-bold text-[#002f86] mb-6 flex items-center gap-2">
                            <Zap className="text-[#002f86]" size={24} /> Select Publications
                        </h2>
                        <div className="space-y-3">
                            {[
                                "Vamsi Borra, Srikanth Itapu, et al., \"Modification of Metal Surfaces by Surface Plasmon Polariton Excitation\", IEEE Transactions on Materials and Device Reliability, 2021.",
                                "Selvendran S, I. Srikanth, et al., \"Impact of different types of modulators on optical hybrid FSO/Fiber communication\", Optical and Quantum Electronics, 2021.",
                                "P. Manoj Reddy, Srikanth Itapu, et al., \"Tuning the electrical parameters of p-NiOx based TFTs by pulsed laser irradiation\", Condensed Matter, 2021.",
                                "I B Madhuri and Srikanth Itapu, \"Rationally designed graphene-PVA composite fillers for modern manufacturing applications\", Journal of Materials Science Research and Reviews, 2020.",
                                "Srikanth Itapu, et al., \"Laser-based fabrication of microstructures on nickel thin films and its application in on-chip spiral inductors\", IEEE Transactions on Nanotechnology, 2020.",
                                "Kamruzzaman Khan, Srikanth Itapu, et al., \"Negative Differential Resistance (NDR) behavior Nickel Oxide (NiO) based MIS Structures\", Journal of Electronic Materials, 2020."
                            ].map((pub, idx) => (
                                <div key={idx} className="p-4 bg-[#F7F7F4] border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                                    {pub}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
