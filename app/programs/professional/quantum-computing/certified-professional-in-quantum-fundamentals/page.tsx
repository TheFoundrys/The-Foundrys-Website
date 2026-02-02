"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Clock,
    Award,
    ArrowUpRight,
    Atom,
    Cpu,
    ShieldCheck,
    Network,
    BookOpen,
    Zap,
    ChevronDown,
    Microscope,
    Layers
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function QuantumFundamentalsCoursePage() {

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/programs/professional/quantum-computing" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to Quantum Programs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">
                                <Award size={16} /> Professional Certification
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Certified Professional in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Quantum Fundamentals</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                Master the 4 pillars of the National Quantum Mission. A comprehensive introduction to the physics and applications of the next technological revolution.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">4 Weeks</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">Hybrid</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://compass.thefoundrys.com/courses/quantum-computing/fundamentals-of-quantum-technologies" className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25 text-center">
                                    Enroll Now
                                </Link>
                                <Link href="#overview" className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700 text-center">
                                    Explore Course
                                </Link>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 lg:p-10">
                            <h3 className="text-white text-xl font-bold mb-6">Program Fee</h3>
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl lg:text-5xl font-bold text-white">₹5,000</span>
                                <span className="text-xl text-slate-500 line-through">₹10,000</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded uppercase">50% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-4">
                                <InfoRow text="Aligned with National Quantum Mission" />
                                <InfoRow text="Comprehensive 4-Pillar Coverage" />
                                <InfoRow text="Industry Recognized Certification" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    {/* Pedagogical Philosophy - Hero Style */}
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-widest mb-6">
                            Pedagogical Philosophy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-sans tracking-tight">
                            "No equations first." <br />
                            <span className="text-purple-600">We build intuition before abstraction.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            We show impact before theory. This course connects quantum ideas to everyday technology, removing the fear of "quantum" and building curiosity and confidence.
                        </p>
                    </div>

                    {/* Target Audience & Outcomes Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
                        {/* Who is this for? */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                Who is this for?
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-full min-h-[50px] bg-blue-200 rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Undergraduates & Freshers</h4>
                                        <p className="text-slate-600 text-sm">Perfect for ECE, Physics, Materials, CS, or General Engineering students looking to future-proof their careers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-full min-h-[50px] bg-blue-200 rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Curious Minds</h4>
                                        <p className="text-slate-600 text-sm">Anyone with high-school math & physics knowledge. No advanced prerequisites required.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What you will gain */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Award size={20} />
                                </div>
                                What you will gain
                            </h3>
                            <div className="space-y-4">
                                <OutcomeItem text="Explain 'quantum' in simple, confident language" />
                                <OutcomeItem text="Identify the 4 major quantum technology domains" />
                                <OutcomeItem text="Appreciate the role of materials & engineering" />
                                <OutcomeItem text="Pathway to advanced specializations" />
                                <OutcomeItem text="Align with India's National Quantum Mission" />
                            </div>
                        </div>
                    </div>

                    {/* The 4 Pillars / Highlights */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The 4 Pillars of Quantum Tech</h2>
                        <p className="text-slate-600">Explore the four critical domains that define the quantum revolution.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <HighlightCard icon={Cpu} title="Quantum Computing" desc="How can a computer think in more than 0s and 1s? Explore parallel possibilities and the power of qubits." />
                        <HighlightCard icon={Network} title="Quantum Communication" desc="Can communication be unhackable? Learn how physics itself acts as a security guard for information." />
                        <HighlightCard icon={Microscope} title="Quantum Sensing" desc="How can we measure things we cannot see? Use quantum systems as ultra-sensitive detectors." />
                        <HighlightCard icon={Layers} title="Quantum Materials" desc="What materials make quantum tech possible? Discover the hidden heroes like superconductors and diamond defects." />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                        <p className="text-lg text-slate-600">A structured 4-week journey through the quantum landscape.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <WeekCard
                            week="Week 1"
                            title="What is Quantum Computing?"
                            topics={[
                                "Classical bits vs quantum bits (qubits)",
                                "The Mechanics of Superposition",
                                "Entanglement: The Power of Connection",
                                "Measurement & Uncertainty: The Observer Effect",
                                "Intuition Builders: Visualizing the Quantum World",
                                "The Quantum Advantage: Realities and Myths",
                                "Hardware Awareness: The Physical Reality",
                                "Week 1 Quiz"
                            ]}
                        />
                        <WeekCard
                            week="Week 2"
                            title="Quantum Communication (Secure Connections)"
                            topics={[
                                "Information as Physical (Photons & No-Cloning)",
                                "The 'Eavesdropping' Detection",
                                "Quantum Key Distribution (QKD) vs. Classical Encryption",
                                "Real-World Tech (Fiber, Satellites, & Quantum Internet)",
                                "Activities (Polarization Demo) & Assessment"
                            ]}
                        />
                        <WeekCard
                            week="Week 3"
                            title="Quantum Sensing (Seeing the Invisible)"
                            topics={[
                                "Limits of Classical Measurement",
                                "Quantum Sensitivity (Spins & Atoms)",
                                "Atomic Clocks & GPS",
                                "Medical & Earth Applications (MRI, Gravimeters)",
                                "Activities & Assessment"
                            ]}
                        />
                        <WeekCard
                            week="Week 4"
                            title="Quantum Materials & Devices (The Hidden Heroes)"
                            topics={[
                                "Why Ordinary Materials Fail (Noise & Defects)",
                                "Key Materials (Superconductors, Semiconductors, Diamonds)",
                                "Engineering Challenges (Cooling & Scaling)",
                                "Sustainability & Energy Costs",
                                "Capstone Activity (Building the Stack)",
                                "Final Assessment"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-xl">
                                <Image
                                    src="/sample-certificate.png"
                                    alt="Foundry Professional Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Upgrade your profile with a certification that validates your understanding of the core technologies driving the future.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-purple-100 text-purple-600"><CheckCircle2 size={16} /></div>
                                    Validated skills in 4 Quantum Pillars
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-purple-100 text-purple-600"><CheckCircle2 size={16} /></div>
                                    Pathway to Advanced Specializations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Step into the Quantum Future</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Secure your place in the next generation of technologists.
                    </p>
                    <Link
                        href="https://compass.thefoundrys.com/courses/quantum-computing/fundamentals-of-quantum-technologies"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 text-white rounded-full font-bold text-xl hover:bg-purple-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Start Application <ArrowUpRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function InfoRow({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
}

function HighlightCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function WeekCard({ week, title, topics }: { week: string, title: string, topics: string[] }) {
    return (
        <div className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-purple-200 transition-colors shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="shrink-0 w-24">
                    <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">{week}</div>
                </div>
                <div className="flex-grow">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                {topic}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function OutcomeItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 size={14} />
            </div>
            <span className="text-slate-700 font-medium">{text}</span>
        </div>
    )
}
