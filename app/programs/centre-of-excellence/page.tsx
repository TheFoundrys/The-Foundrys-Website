"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    PlayCircle,
    X,
    FileText,
    Plus,
    Minus,
    Cpu,
    BookOpen,
    Compass,
    Award
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const excellencePillars = [
    {
        id: "01",
        title: "High-Performance Supercomputing",
        shortDesc: "Infrastructure for AI, simulation, cybersecurity, data, and advanced research workloads.",
        badge: "Pillar 01",
        fullDesc: "Deploying physical liquid-cooled GPU clusters, sub-millisecond InfiniBand fabrics, and sovereign air-gapped sandboxes for academic institutions and enterprise R&D centers.",
        highlights: [
            "NVIDIA H100 / A100 Supercomputer Cluster Deployment",
            "Liquid-Cooled Green Compute Architecture & Data Metrics",
            "High-Throughput Vector & Graph Database Acceleration",
            "Sovereign Air-Gapped AI Sandbox Environments"
        ],
        stats: { metrics: "50+", label: "CoE Superclusters Deployed" }
    },
    {
        id: "02",
        title: "Multidisciplinary Integrated Labs",
        shortDesc: "Applied labs connecting Deeptech, entrepreneurship, sustainability, and renewable energy.",
        badge: "Pillar 02",
        fullDesc: "Bridging core academic research with real-world applications. We equip institutions with specialized hardware, sensor suites, and physical testbeds across the 4 Schools of Thought.",
        highlights: [
            "Hardware-in-the-Loop Microgrid Power Simulators",
            "SCADA & Industrial IoT Cyber Security Testbeds",
            "Material Informatics & Bio-Synthetic Polymer Labs",
            "Autonomous Multi-Agent Enterprise Operations Hubs"
        ],
        stats: { metrics: "120+", label: "Startups Incubated via CoE" }
    },
    {
        id: "03",
        title: "Curriculum & Faculty Enablement",
        shortDesc: "Industry-aligned curriculum, train-the-trainer programs, and execution frameworks.",
        badge: "Pillar 03",
        fullDesc: "Empowering educators with world-class courseware. We provide turn-key syllabus modules, certified Train-the-Trainer (FDP) bootcamps, and continuous pedagogical support.",
        highlights: [
            "Accredited Industry-Aligned Deep Tech Courseware",
            "Faculty Development Programs (FDP) & Masterclasses",
            "Hands-On Sandbox Lab Assignments & Capstone Projects",
            "Global Research Exchange & Co-Authoring Pathways"
        ],
        stats: { metrics: "25,000+", label: "Trained Faculty & Students" }
    },
    {
        id: "04",
        title: "Innovation & Industry Collaboration",
        shortDesc: "Project studios, research pathways, startup support, and enterprise engagement.",
        badge: "Pillar 04",
        fullDesc: "Connecting campus labs with global venture capital and corporate R&D. We establish campus venture studios, assist with patent commercialization, and run enterprise hackathons.",
        highlights: [
            "On-Campus Deep Tech Startup Incubators & Seed Capital",
            "IP Licensing, Patent Translation & Commercialization",
            "Enterprise Corporate R&D Sponsorship & Hackathons",
            "IEEE Peer-Reviewed Co-Publication & Research Grants"
        ],
        stats: { metrics: "$20M+", label: "Equipment & Lab Funding" }
    }
];

const skillCompassFeatures = [
    { title: "AI Learning Recommendations", desc: "Personalized skill mapping powered by adaptive LLM engines." },
    { title: "Integrated Enrollment & Payments", desc: "Seamless course registration, payment processing, and seat management." },
    { title: "Assessments & Capstones", desc: "Automated code grading, security labs, and hands-on benchmarks." },
    { title: "Cohort Analytics Dashboard", desc: "Real-time institutional reporting on student engagement and outcomes." }
];

export default function CentreOfExcellencePage() {
    const [activePillar, setActivePillar] = useState(excellencePillars[0].id);

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Banner Image Section matching Entry-Level / Program pages */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <Image
                    src="/images/coe_centre_banner.jpg"
                    alt="Centre of Excellence"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-8xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                            Centre of Excellence (CoE)
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Card Container matching Entry-Level page design */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-16 overflow-hidden">
                
                {/* Introduction Section */}
                <section className="text-slate-800 p-8 sm:p-12 md:p-16 pb-6 sm:pb-8 md:pb-10 bg-white">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                        Introduction
                    </h2>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-4xl">
                        The Foundry&apos;s Centre of Excellence (CoE) model partners with universities, government bodies, and enterprise R&D hubs to build state-of-the-art supercomputing infrastructure, applied industry curriculum, faculty enablement, and multidisciplinary research environments across the 4 Schools of Thought.
                    </p>

                    {/* Metric Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-serif font-extrabold text-[#002f86]">50+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">CoE Hubs Established</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-serif font-extrabold text-[#002f86]">25,000+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Faculty & Students Trained</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-serif font-extrabold text-[#002f86]">$20M+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Supercomputing Equipment</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-serif font-extrabold text-[#002f86]">100%</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Industry Accreditation</p>
                        </div>
                    </div>
                </section>

                {/* Core Research & Excellence Pillars - Row Layout matching Program Rows */}
                <section className="text-slate-800 border-t border-slate-200/50" id="pillars">
                    <div className="p-8 sm:p-12 md:p-16 pb-4 bg-[#F7F7F4]">
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-2">
                            CoE Institutional Pillars
                        </h2>
                        <p className="text-sm text-slate-600 max-w-3xl">
                            Our Centre of Excellence framework empowers institutions through 4 comprehensive operational pillars.
                        </p>
                    </div>

                    {excellencePillars.map((pillar, idx) => (
                        <div
                            key={pillar.id}
                            className={`p-8 sm:p-12 md:p-16 ${
                                idx % 2 === 0 ? "bg-white" : "bg-[#F7F7F4]"
                            } border-t border-slate-200/50`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                                {/* Left Column */}
                                <div className="lg:col-span-5 flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block font-mono">
                                            {pillar.badge}
                                        </span>
                                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#002f86] leading-tight mb-4">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                            {pillar.shortDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#002f86] hover:bg-[#002266] text-white rounded-lg font-bold text-sm transition-all shadow-sm cursor-pointer"
                                        >
                                            <span>Discuss CoE Partnership</span>
                                            <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="lg:col-span-7 flex flex-col justify-between">
                                    <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                                        {pillar.fullDesc}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                        {pillar.highlights.map((item, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/80 border border-slate-200/80 shadow-xs">
                                                <CheckCircle2 className="w-4 h-4 text-[#002f86] shrink-0 mt-0.5" />
                                                <span className="text-xs text-slate-800 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Edith AI Platform Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                AI Learning Platform
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Edith
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Edith is The Foundry&apos;s proprietary AI-powered learning platform designed for institutional CoEs, delivering personalized skill pathways, automated assessments, and real-time student performance analytics.
                            </p>
                            
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white bg-[#002f86] hover:bg-[#002266] transition-all shadow-md cursor-pointer"
                            >
                                <span>Request Platform Demo</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skillCompassFeatures.map((feat, idx) => (
                                    <div key={idx} className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm">
                                        <h3 className="font-serif text-base font-bold text-[#002f86] mb-1">
                                            {feat.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                            {feat.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="p-8 sm:p-12 text-center bg-white border-t border-slate-200/50">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-3">
                        Ready to Build Your Institution&apos;s Centre of Excellence?
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                        Join top universities and enterprise R&D hubs deploying supercomputers, specialized labs, and accredited deep tech curriculum with The Foundry.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-3.5 bg-[#002f86] hover:bg-[#002266] text-white rounded-lg font-bold text-sm shadow-md transition-all"
                    >
                        Schedule CoE Consultation
                    </Link>
                </section>
            </div>

            {/* FAQ Section matching Entry-Level Program Page */}
            <section className="py-16 px-6 bg-white border-t border-b border-slate-200/60">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002f86] mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about establishing a Centre of Excellence at your institution.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="Who can partner to establish a CoE?">
                                Universities, engineering colleges, government R&D bodies, and corporate enterprises can partner with The Foundry to establish a CoE.
                            </FAQItem>
                            <FAQItem question="What supercomputing hardware is included?">
                                Turnkey CoE deployments include liquid-cooled GPU superclusters (NVIDIA H100/A100), high-speed InfiniBand switch fabrics, and air-gapped security sandboxes.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="Does The Foundry provide faculty & student training?">
                                Yes. All CoE deployments include complete faculty development programs (FDP) and accredited hands-on student learning modules.
                            </FAQItem>
                            <FAQItem question="How does Edith integrate with existing LMS?">
                                Edith provides LTI standards compliance and REST APIs to seamlessly integrate with Canvas, Blackboard, or custom institutional LMS platforms.
                            </FAQItem>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FAQItem({ question, children }: { question: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#F7F7F4] rounded-lg border border-slate-200/80 overflow-hidden transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#002f86] transition-colors"
            >
                <span className="font-serif text-base">{question}</span>
                <span className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-600 transition-transform ${isOpen ? "rotate-180 bg-[#DCE7F1] text-[#002f86]" : ""}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 mt-1">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
