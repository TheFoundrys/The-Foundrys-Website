"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DrSrikanthProfile() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Team
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/3 relative"
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                                <Image
                                    src="/images/dr-itapu-srikanth.jpg"
                                    alt="Dr. Srikanth Itapu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl rounded-full" />
                        </motion.div>

                        {/* Header Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 space-y-6"
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                    Faculty & Leadership
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Dr. Srikanth Itapu
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4">
                                    SME in the Quantum Technologies
                                </p>

                                <a
                                    href="https://www.linkedin.com/in/sitapu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors mb-6"
                                >
                                    <Linkedin size={16} /> Connect on LinkedIn
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Quantum Technologies
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Advanced Materials
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Semiconductor Devices
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Spintronics
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Biography & Research Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-700 font-medium leading-relaxed mb-8">
                            Dr. Srikanth Itapu is a subject matter expert in quantum technologies, advanced materials, and semiconductor devices, with over 12 years of international research experience and significant leadership roles in academia and innovation ecosystems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" size={24} /> Research Expertise
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    His expertise spans quantum materials, spintronics, solid-state qubits, nano-fabrication, and energy-efficient quantum hardware. He has led interdisciplinary programs integrating quantum physics, materials science, and sustainable energy technologies.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Award className="text-blue-600" size={24} /> Leadership
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    Director of E-Spin Lab and Chair of ECE at Alliance University. Extensive experience in curriculum design, workforce development, and mentoring talent in quantum engineering and VLSI domains.
                                </p>
                            </div>
                        </div>

                        {/* Publications Section */}
                        <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8 flex items-center gap-2">
                            Select Publications
                        </h3>
                        <div className="space-y-6 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-16">
                            {[
                                "Vamsi Borra, Srikanth Itapu, et al., \"Modification of Metal Surfaces by Surface Plasmon Polariton Excitation\", IEEE Transactions on Materials and Device Reliability, 2021.",
                                "Selvendran S, I. Srikanth, et al., \"Impact of different types of modulators on optical hybrid FSO/Fiber communication\", Optical and Quantum Electronics, 2021.",
                                "P. Manoj Reddy, Srikanth Itapu, et al., \"Tuning the electrical parameters of p-NiOx based TFTs by pulsed laser irradiation\", Condensed Matter, 2021.",
                                "I B Madhuri and Srikanth Itapu, \"Rationally designed graphene-PVA composite fillers for modern manufacturing applications\", Journal of Materials Science Research and Reviews, 2020.",
                                "Srikanth Itapu, et al., \"Laser-based fabrication of microstructures on nickel thin films and its application in on-chip spiral inductors\", IEEE Transactions on Nanotechnology, 2020.",
                                "Kamruzzaman Khan, Srikanth Itapu, et al., \"Negative Differential Resistance (NDR) behavior Nickel Oxide (NiO) based MIS Structures\", Journal of Electronic Materials, 2020.",
                                "Srikanth Itapu, et al., \"A computational study of native defects in non-stoichimetric NiO and doping Pd, Pt in stoichiometric NiO\", Condensed Matter, 2018.",
                                "Vamsi Borra, Srikanth Itapu, et al., \"Sn whisker mitigation by using NiO sublayer\", Journal of Physics D: Applied Physics, 2017.",
                                "Srikanth Itapu, et al., \"Modification of reactively sputtered NiOx thin films by pulsed laser irradiation\", Physica Status Solidi A, 2017.",
                                "Srikanth Itapu, et al., \"Effect of UV laser irradiation on the properties of NiO and NiO/ZnO heterostructures\", MRS Advances, 2016."
                            ].map((pub, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                    <p className="text-sm text-slate-600 leading-relaxed m-0">{pub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Patents Section */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                            Patents
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">US Patent 10,967,463</span>
                                <h4 className="text-lg font-bold mb-2">Sn whisker growth mitigation by using NiO sublayers</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">April 2021 • Inventors: Vamsi Borra, Daniel G Georgiev, Srikanth Itapu</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">India Patent 202041003461A</span>
                                <h4 className="text-lg font-bold mb-2">Intelligent medicinal and aromatic plant specimen detection system</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">January 2020 • Integrated IoT solutions for medicinal botany.</p>
                            </div>
                        </div>

                        {/* Research Network */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Research Network & Collaborators</h3>
                        <p className="text-slate-600 leading-relaxed mb-10">
                            Dr. Itapu maintains a robust global research network, frequently collaborating with leading experts in micro-electronics and materials science, including colleagues from the <span className="text-blue-600 font-semibold">University of Toledo (USA)</span> and <span className="text-blue-600 font-semibold">Alliance University</span>. His work bridges fundamental science with scalable device engineering through industry–academia partnerships.
                        </p>

                        <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">Explore Deep Tech at The Foundry</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join Dr. Srikanth Itapu and our team of architects as we build the next generation of Quantum and Semiconductor systems.
                            </p>
                            <Link href="/schools/quantum-computing" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
                                Join the Program
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Add these imports at the top
import { BookOpen, Award } from "lucide-react";
