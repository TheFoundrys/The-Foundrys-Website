"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { 
    ChevronRight, 
    ChevronDown, 
    Code2, 
    Database, 
    BrainCircuit, 
    Rocket, 
    Terminal,
    GraduationCap,
    Languages,
    SearchCode,
    ClipboardCheck,
    CheckCircle2,
    Cpu,
    Target,
    Users,
    Lightbulb,
    Zap,
    Trophy,
    TrendingUp,
    Shield
} from "lucide-react";

// Data
import { aiCurriculum } from "@/data/ai-curriculum";
import { useRegionalPricing } from "@/lib/useRegionalPricing";

// Global Components
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

// Types
interface ProgramInvestmentProps {
    courseId?: string;
    accentColor?: string;
}

// --- Internal Components (Inlined) ---

function AIHero() {
    return (
        <section id="hero" className="relative pt-32 pb-48 px-4 flex flex-col justify-center items-center bg-slate-900 overflow-hidden text-center min-h-[90vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/program-bg/ai-hero.png"
                    alt="AI Neural Network Background"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl"
                >
                    Graduate with <br />
                    Mastery, Vision & <br />
                    Real-World Impact.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-10"
                >
                    Not just code. A 3 year degree program merging AI Engineering with Entrepreneurship.
                    Built by Engineers & Founders, for future Architects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link
                        href="/apply"
                        className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
                    >
                        Apply Now   
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

const NAV_LINKS = [
    { name: "Overview", target: "overview" },
    { name: "Entry requirements", target: "entry-requirements" },
    { name: "Why this degree is for", target: "advantage" },
    { name: "Career outcomes", target: "future-vision" },
];

function CourseSubNav() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 800;
            setIsSticky(window.scrollY > heroHeight - 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full transition-all duration-300 ${isSticky ? "fixed top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 z-[60]" : "relative bg-white border-b border-slate-200 pt-8 pb-4 z-40"}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className={`flex items-center justify-center transition-all duration-300 ${isSticky ? "py-2" : "py-0.5"} relative`}>
                    <nav className={`flex items-center justify-center gap-x-3 md:gap-x-8 lg:gap-x-12 overflow-x-auto no-scrollbar transition-all duration-300 ${isSticky ? "py-2.5" : "py-1.5"} w-full`}>
                        {NAV_LINKS.map((link) => (
                            <ScrollLink
                                key={link.target}
                                to={link.target}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="text-[9px] md:text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 cursor-pointer relative py-1 transition-colors active:text-blue-600 group whitespace-nowrap"
                                activeClass="text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </nav>

                    <AnimatePresence>
                        {isSticky && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute right-0 hidden lg:block"
                            >
                                <Link
                                    href="/contact"
                                    className="px-5 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center gap-2 hover:bg-blue-500 transition-all shadow-md active:scale-95"
                                >
                                    Contact Us
                                    <ChevronRight size={14} />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function WhyUs() {
    const reasons = [
        {
            title: "HPC Computing Clusters",
            desc: "Access to private H100 and A100 GPU clusters for training large-scale models.",
            icon: <Cpu className="text-blue-500" />,
        },
        {
            title: "AI Research Lab",
            desc: "Work on real-world research problems in collaboration with industry partners.",
            icon: <Target className="text-blue-500" />,
        },
        {
            title: "Global Standards",
            desc: "Curriculum designed by engineers from top tech companies and research institutions.",
            icon: <Zap className="text-blue-500" />,
        },
        {
            title: "Rapid Prototyping",
            desc: "Move from idea to functioning production-ready AI models in weeks, not months.",
            icon: <Rocket className="text-blue-500" />,
        },
    ];

    return (
        <section id="overview" className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProgramStats() {
    const stats = [
        { label: "Academic Sessions", value: "30%", color: "#2563eb", desc: "Core engineering, math, and AI theory modules." },
        { label: "Start-up Lab", value: "30%", color: "#3b82f6", desc: "Building and scaling your own AI-first project." },
        { label: "Industry Exposure", value: "20%", color: "#60a5fa", desc: "Internships and real-world company problem sets." },
        { label: "Beyond Academics", value: "10%", color: "#93c5fd", desc: "Soft skills, leadership, and emotional intelligence." },
        { label: "Student Circles", value: "10%", color: "#bfdbfe", desc: "Peer learning, clubs, and extracurricular activities." },
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Holistic Breakdown</h2>
                        <div className="space-y-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative"
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">{stat.label}</span>
                                        <span className="text-blue-600 font-bold">{stat.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 rounded-full" style={{ width: stat.value }} />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">{stat.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square relative flex items-center justify-center">
                           <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[100px]" />
                           <div className="relative w-full aspect-square max-w-sm rounded-full border-[20px] border-blue-600/10 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-blue-600 mb-2">100%</div>
                                    <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Immersion</div>
                                </div>
                                {/* Theoretical "Chart" Elements */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full" />
                                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-300 rounded-full" />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EntryRequirements() {
    return (
        <section id="entry-requirements" className="py-24 px-6 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Entry requirements</h2>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        Admission to The Foundry is based on your potential to create and lead. We value diverse backgrounds 
                        and look for individuals who demonstrate logical clarity and a hunger for building.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="bg-slate-900 px-8 py-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <GraduationCap size={20} className="text-blue-400" />
                                Academic Eligibility
                            </h3>
                        </div>
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Standard Pathway</h4>
                                    <ul className="space-y-4 text-slate-700">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>Successful completion of **Class 12 / Intermediate** (or equivalent).</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**No Mandatory Subjects**: Students from **MPC, BiPC, CEC, HEC, Commerce, or Arts** are all eligible to apply.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>Minimum aggregate of **60%** in core subjects.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Alternative Credentials</h4>
                                    <ul className="space-y-4 text-slate-700">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**IB Diploma**: Minimum **24 points**.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**A-Levels**: Passed in at least **3 subjects**.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                            <span>**BTEC/Vocational**: Evaluated on a case-by-case basis.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm leading-relaxed">
                            <div className="flex items-center gap-4 mb-6">
                                <SearchCode className="text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Program Prerequisites</h3>
                            </div>
                            <ul className="space-y-6">
                                <li>
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Coding Experience</p>
                                    <p className="text-slate-600 text-sm">
                                        **Zero prior coding experience** is required. We teach you from the ground up, starting with core logic and systems thinking.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">English Proficiency</p>
                                    <p className="text-slate-600 text-sm">
                                        **No standardized English tests** (like IELTS or TOEFL) are mandatory for admission. We value clear communication over test scores.
                                    </p>
                                </li>
                                <li>
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Entrance Tests</p>
                                    <p className="text-slate-600 text-sm">
                                        The Foundry does **not conduct traditional entrance exams**. Seats are allocated based on **academic merit** and **profile evaluation**.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-blue-600 rounded-2xl text-white flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <ClipboardCheck size={32} />
                                <h3 className="text-2xl font-bold italic">Who we look for</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-6">
                                We are looking for the "misfits" and the "builders"—individuals who are dissatisfied with the status quo 
                                and want to build the future.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    Intellectual Curiosity
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    Logical Problem Solving
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-lg border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                    Persistence & Grit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EngineeringSkills() {
    const skills = [
        "Neural Architecture Search",
        "Data Pipeline Engineering",
        "Distributed Training",
        "Kernel Optimization",
    ];

    return (
        <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Engineering Mastery</h2>
                        <p className="text-slate-400 text-lg mb-12">
                            We don't just teach you how to use AI—we teach you how to build it from scratch. 
                            From raw hardware optimization to massive scale deployments.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="font-bold text-sm tracking-wide">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-slate-950 p-10 md:p-14 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                             <div className="space-y-10 relative z-10">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold uppercase tracking-widest text-xs text-blue-300">Model Efficiency</h4>
                                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">99.8%</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "99.8%" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-blue-500" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold uppercase tracking-widest text-xs text-purple-300">Distributed Training</h4>
                                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">H100 Ready</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-purple-500" 
                                        />
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-white/10">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-3xl font-black text-white">2.4ms</div>
                                            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">Inference Latency</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-black text-white">1.2T</div>
                                            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">Token Throughput</div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function ComparisonSection() {
    return (
        <section id="advantage" className="py-24 px-6 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">The Foundry Advantage</h2>
                    <p className="text-slate-500">How we differ from traditional engineering colleges.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                    <div className="bg-white p-12">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Conventional Education</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Textbook Driven</h4>
                                    <p className="text-slate-500 text-sm">Learning from decades-old curriculum that lacks modern industry relevance.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Isolated Learning</h4>
                                    <p className="text-slate-500 text-sm">Theory-heavy environments without access to production-grade compute.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-blue-600 p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-48 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-xs font-bold text-blue-200 uppercase tracking-[0.3em] mb-8 relative z-10">The Foundry Model</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle2 className="text-white w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Production Driven</h4>
                                    <p className="text-blue-100 text-sm">Building and deploying models that handle real token traffic and users.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle2 className="text-white w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Ecosystem Immersion</h4>
                                    <p className="text-blue-100 text-sm">Direct access to VCs, founders, and the world's most powerful H100 clusters.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EntrepreneurshipHighlight() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            {/* <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="w-full aspect-[4/3] bg-slate-100 rounded-[2rem] overflow-hidden relative group shadow-2xl">
                            <Image 
                                src="/images/global-fellowship.png"
                                alt="Founder Lab"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                                            <Trophy className="text-white" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">The Fellowship</div>
                                            <div className="text-blue-200 text-xs">Tier-1 Access Only</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">Beyond Employment</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Graduate with a Net Worth, <br />Not just a Degree.</h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            The Foundry isn't a classroom; it's an asset launchpad. We treat our students like Founders-in-Residence. 
                            While other colleges gift you a piece of paper, we provide the infrastructure, capital access, and global network to ensure you graduate with a functioning, revenue-generating AI product.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                </div>
                                <span className="font-semibold text-slate-700">Guaranteed $10k Seed credits for Student Projects</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                </div>
                                <span className="font-semibold text-slate-700">Elite Global Builder Hub Access (Silicon Valley & Dubai)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

interface FutureJob {
    role: string;
    desc: string;
    salary: string;
    growth: string;
    tags: string[];
    responsibilities: string[];
    icon: React.ReactNode;
}

interface FutureVisionProps {
    schoolName: string;
    accentColor: string;
    whyAIImportant: string;
    futureJobs: FutureJob[];
}

function FutureVision({
    schoolName,
    accentColor,
    whyAIImportant,
    futureJobs
}: FutureVisionProps) {
    const [activeJob, setActiveJob] = useState(0);

    return (
        <section id="future-vision" className="py-20 px-6 bg-slate-950 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-600/5 animate-aurora mix-blend-screen opacity-50" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{schoolName}</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                            {whyAIImportant}
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Role Tabs */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[280px] flex-shrink-0"
                    >
                        <div className="space-y-3">
                            {futureJobs.map((job, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveJob(idx)}
                                    className={`w-full text-left py-3 px-5 rounded-xl transition-all flex items-center gap-4 group relative ${activeJob === idx ? "bg-blue-600/10 text-white shadow-[inset_0_0_20px_rgba(37,99,235,0.1)]" : "text-slate-500 hover:text-slate-300"}`}
                                >
                                    {activeJob === idx && (
                                        <motion.div 
                                            layoutId="tabIndicator"
                                            className="absolute left-0 w-1 h-6 bg-blue-500 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        />
                                    )}
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${activeJob === idx ? "bg-blue-600 text-white shadow-lg" : "bg-slate-900 text-slate-600 group-hover:bg-slate-800"}`}>
                                        {job.icon}
                                    </div>
                                    <span className={`text-sm font-bold transition-colors ${activeJob === idx ? "text-white" : "text-slate-500"}`}>
                                        {job.role}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Role Display Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeJob}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-slate-900/40 backdrop-blur-3xl p-6 md:p-10 rounded-[2rem] border border-white/5 relative z-10 w-full shadow-2xl"
                            >
                                <div className="flex flex-col xl:flex-row justify-between items-start gap-10 mb-12">
                                    <div className="flex-1">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-5">Landscape Projection 2035</div>
                                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white leading-none">
                                            {futureJobs[activeJob].role}
                                        </h3>
                                        <p className="text-base text-slate-400 mb-8 leading-relaxed max-w-2xl">
                                            {futureJobs[activeJob].desc}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {futureJobs[activeJob].tags.map((tag, i) => (
                                                <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:w-[220px]">
                                        <div className="flex-1 p-6 bg-slate-950/50 border border-white/5 rounded-2xl group hover:border-blue-500/20 transition-all duration-500">
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Avg. Comp</div>
                                            <div className="text-2xl font-black text-white italic">{futureJobs[activeJob].salary}</div>
                                        </div>
                                        <div className="flex-1 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl group hover:border-emerald-500/20 transition-all duration-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Growth</div>
                                                <TrendingUp size={12} className="text-emerald-500" />
                                            </div>
                                            <div className="text-2xl font-black text-emerald-400 italic">{futureJobs[activeJob].growth}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-white/5">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Mission Critical Responsibilities</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {futureJobs[activeJob].responsibilities.map((resp, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,1)] group-hover:scale-125 transition-transform" />
                                                <span className="text-sm font-bold text-slate-300">{resp}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}


// --- Main Page Component ---

export default function AISchoolPage() {
    return (
        <main className="bg-white selection:bg-blue-100">
            <Navbar />
            <AIHero />
            <CourseSubNav />
            <WhyUs />
            <ProgramStats />
            <EntryRequirements />
            <EngineeringSkills />
            <ComparisonSection />
            <EntrepreneurshipHighlight />
            <FutureVision 
                schoolName="Artificial Intelligence"
                accentColor="#2563eb"
                whyAIImportant="AI is not just a tool; it is the entire operating system of the next century. Mastering it today means being the architect of a world where machine intelligence and human creativity merge."
                futureJobs={[
                    { 
                        role: "Neural Architect", 
                        icon: <Cpu size={24} />,
                        desc: "Designing novel transformer blocks and customized model architectures for hyper-efficient edge deployments and massive scale clusters.",
                        salary: "₹85L - 1.2Cr",
                        growth: "+45% YoY",
                        tags: ["PyTorch", "CUDA", "LLM Design", "TPU Tuning"],
                        responsibilities: [
                            "Designing enterprise-grade neural architectures",
                            "Optimizing model weights for inference speed",
                            "Scaling distributed training clusters",
                            "Researching novel attention mechanisms"
                        ]
                    },
                    { 
                        role: "Agentic Systems Engineer", 
                        icon: <BrainCircuit size={24} />,
                        desc: "Architecting swarms of AI agents that can autonomously manage complex enterprise supply chains, legal filings, and real-time operations.",
                        salary: "₹65L - 95L",
                        growth: "+60% YoY",
                        tags: ["LangChain", "Autogen", "Orchestration", "System Logic"],
                        responsibilities: [
                            "Building multi-agent task frameworks",
                            "Implementing agent error correction loops",
                            "Integrating AI memory layers",
                            "Managing real-world API connectivity"
                        ]
                    },
                    { 
                        role: "AI Security & Ethics Lead", 
                        icon: <Shield size={24} />,
                        desc: "Ensuring the safety and alignment of large-scale cognitive systems, protecting against prompt injection, model extraction, and ethical drift.",
                        salary: "₹55L - 85L",
                        growth: "+35% YoY",
                        tags: ["Red Teaming", "Cybersec", "Alignment", "Governance"],
                        responsibilities: [
                            "Conducting adversarial red teaming",
                            "Guaranteeing model compliance & safety",
                            "Implementing data privacy shields",
                            "Monitoring AI decisions for bias"
                        ]
                    },
                    { 
                        role: "Chief AI Officer (CAIO)", 
                        icon: <Rocket size={24} />,
                        desc: "The executive steward of a corporation's intelligence strategy, overseeing the transition from legacy software to an AI-native operating model.",
                        salary: "₹1.5Cr+",
                        growth: "+25% YoY",
                        tags: ["Strategy", "P&L", "Innovation", "Executive"],
                        responsibilities: [
                            "Leading corporate AI digital transformation",
                            "Managing enterprise intelligence budgets",
                            "Selecting vendor vs custom AI stacks",
                            "Defining AI-driven product roadmaps"
                        ]
                    }
                ]}
            />
            
            {/* CTA Footer Section */}
            {/* <section className="py-32 px-6 bg-white overflow-hidden text-center relative">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Build the Intelligence.</h2>
                        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
                            The Foundry is more than a school. It's an engine for those who want to build, scale, and lead. 
                            The next cohort starts soon.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/apply" className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-xl hover:shadow-blue-200">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="px-10 py-5 bg-slate-100 text-slate-900 rounded-full font-bold text-xl hover:bg-slate-200 transition-all">
                                Contact Admissions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section> */}
            
            <Footer />
        </main>
    );
}
