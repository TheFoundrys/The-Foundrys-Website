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
    Terminal,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    ServerCog,
    ChevronDown,
    Users,
    BarChart3,
    Rocket,
    BrainCircuit,
    Database,
    Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";


const CAREER_ROLES = [
    {
        id: "neural-architect",
        label: "Neural Architect",
        title: "Neural Architect",
        desc: "Designs novel transformer blocks and customized model architectures for hyper-efficient edge deployments and massive scale clusters.",
        salary: "₹85L - 1.2Cr",
        growth: "+45% YoY",
        skills: [
            "PyTorch & TensorFlow",
            "CUDA Optimization",
            "LLM Architecture Design",
            "TPU/GPU Tuning",
            "Distributed Systems"
        ],
        responsibilities: [
            "Designing enterprise-grade neural architectures",
            "Optimizing model weights for inference speed",
            "Scaling distributed training clusters",
            "Researching novel attention mechanisms",
            "Publishing findings in top-tier conferences"
        ]
    },
    {
        id: "agentic-systems-engineer",
        label: "Agentic Systems Engineer",
        title: "Agentic Systems Engineer",
        desc: "Architects swarms of AI agents that can autonomously manage complex enterprise supply chains, legal filings, and real-time operations.",
        salary: "₹65L - 95L",
        growth: "+60% YoY",
        skills: [
            "LangChain & Autogen",
            "Agent Orchestration",
            "System Design",
            "API Integration",
            "Memory Systems"
        ],
        responsibilities: [
            "Building multi-agent task frameworks",
            "Implementing agent error correction loops",
            "Integrating AI memory layers",
            "Managing real-world API connectivity",
            "Designing fault-tolerant agent networks"
        ]
    },
    {
        id: "ai-security-lead",
        label: "AI Security & Ethics Lead",
        title: "AI Security & Ethics Lead",
        desc: "Ensures the safety and alignment of large-scale cognitive systems, protecting against prompt injection, model extraction, and ethical drift.",
        salary: "₹55L - 85L",
        growth: "+35% YoY",
        skills: [
            "Red Teaming",
            "Cybersecurity",
            "AI Alignment",
            "Governance Frameworks",
            "Adversarial ML"
        ],
        responsibilities: [
            "Conducting adversarial red teaming",
            "Guaranteeing model compliance & safety",
            "Implementing data privacy shields",
            "Monitoring AI decisions for bias",
            "Defining organizational AI ethics policies"
        ]
    },
    {
        id: "chief-ai-officer",
        label: "Chief AI Officer (CAIO)",
        title: "Chief AI Officer (CAIO)",
        desc: "The executive steward of a corporation's intelligence strategy, overseeing the transition from legacy software to an AI-native operating model.",
        salary: "₹1.5Cr+",
        growth: "+25% YoY",
        skills: [
            "AI Strategy",
            "P&L Management",
            "Innovation Leadership",
            "Executive Communication",
            "Vendor Evaluation"
        ],
        responsibilities: [
            "Leading corporate AI digital transformation",
            "Managing enterprise intelligence budgets",
            "Selecting vendor vs custom AI stacks",
            "Defining AI-driven product roadmaps",
            "Reporting AI ROI to the board"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        year: 1,
        title: "Foundations of Intelligence",
        topics: [
            "Mathematical Foundations: Linear Algebra, Calculus, Probability & Statistics",
            "Python Mastery: From Zero to Production-Grade Engineering",
            "Core Data Structures & Algorithms for AI",
            "Introduction to Machine Learning: Supervised & Unsupervised Learning",
            "Neural Network Fundamentals: Perceptrons to Deep Networks",
            "Entrepreneurship 101: Problem Discovery & Ideation"
        ]
    },
    {
        year: 2,
        title: "Engineering & Specialization",
        topics: [
            "Deep Learning: CNNs, RNNs, LSTMs, and Attention Mechanisms",
            "Natural Language Processing & Large Language Models",
            "Computer Vision: Object Detection, Segmentation, GANs",
            "Reinforcement Learning & Multi-Agent Systems",
            "MLOps: Model Deployment, Monitoring & Scaling",
            "Startup Lab: Building Your First AI Product (MVP)"
        ]
    },
    {
        year: 3,
        title: "Mastery & Real-World Impact",
        topics: [
            "Advanced Transformer Architectures & LLM Fine-Tuning",
            "Agentic AI: Autonomous Systems & Orchestration",
            "AI Security, Ethics & Responsible AI",
            "Distributed Training on HPC Clusters (H100/A100)",
            "Capstone: Production-Grade AI System with Industry Partner",
            "Founder Track: Pitch Deck, Fundraising & Go-to-Market Strategy"
        ]
    }
];

function CurriculumTabs() {
    const [activeYear, setActiveYear] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.year === activeYear);

    return (
        <div className="space-y-8">
            {/* Year Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
                    <button
                        key={item.year}
                        onClick={() => setActiveYear(item.year)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeYear === item.year
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Year {item.year}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeYear}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                            Year {activeContent?.year}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {activeContent?.title}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                        {activeContent?.topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function AISchoolPage() {
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 select-none">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img
                            src="/images/program-bg/ai-hero.png"
                            alt="AI Engineering"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl mx-auto"
                    >

                        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                            Artificial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200">Intelligence.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                            A 3-year degree merging AI Engineering with Entrepreneurship. <br />
                            <span className="text-white font-medium">Graduate with Mastery, Vision & Real-World Impact.</span>
                        </p>


                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </motion.div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-14 mb-12">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Length</p>
                                <p className="text-lg font-bold text-slate-900">3-Year Full-Time</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Delivery Mode</p>
                                <p className="text-lg font-bold text-slate-900">On-Campus, Immersive</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Campus</p>
                                <p className="text-lg font-bold text-slate-900">Hyderabad, India</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Admissions</p>
                                <p className="text-lg font-bold text-slate-900">Now Open</p>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full lg:w-auto">
                            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1. Overview */}
            <section id="overview" className="py-28 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">Program Overview</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                A Degree Built for <br />
                                <span className="text-blue-600">the AI Era.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                The Foundry&apos;s 3-year AI program combines rigorous academic foundations with hands-on engineering and entrepreneurial execution. Students don&apos;t just learn theory — they architect neural networks, deploy agent systems, and ship production-grade AI products before graduation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Neural Networks", "LLMs & Agents", "MLOps", "Startup Lab", "GPU Clusters", "Ethics & Safety"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { value: "3", unit: "Years", label: "Full-time immersive program" },
                                { value: "6", unit: "Semesters", label: "Progressive skill building" },
                                { value: "100%", unit: "Hands-on", label: "Project-based from day one" },
                                { value: "H100", unit: "GPUs", label: "Industry-grade infrastructure" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-slate-900">{stat.value}</div>
                                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">{stat.unit}</div>
                                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Is This For — Dark section with numbered cards */}
            <section className="py-24 px-6 bg-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-14">
                        <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Built for the next generation</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Who Is This For</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { num: "01", title: "Aspiring AI Engineers", desc: "Class 12 / Intermediate graduates from any stream — MPC, BiPC, CEC, HEC, Commerce, or Arts. Your background doesn't define your future.", icon: Rocket, color: "from-blue-500 to-cyan-400" },
                            { num: "02", title: "Future Founders", desc: "Students who want to build AI-powered startups, not just get a degree. You'll ship real products before you graduate.", icon: BrainCircuit, color: "from-violet-500 to-purple-400" },
                            { num: "03", title: "Zero Coding Background", desc: "No prior programming required. We teach from the ground up, starting with logic and systems thinking.", icon: Code2, color: "from-emerald-500 to-teal-400" },
                            { num: "04", title: "Global Thinkers", desc: "Individuals who want access to Silicon Valley networks, H100 GPU clusters, and world-class mentors.", icon: Globe, color: "from-amber-500 to-orange-400" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/80"
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.icon size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-mono text-slate-500 tracking-widest">{item.num}</span>
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You'll Achieve — Milestone cards with accent strip */}
            <section className="py-24 px-6 bg-slate-50 overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-14">
                        <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Your Transformation</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What You&apos;ll Achieve</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { num: "01", text: "Design & build production-grade neural network architectures", highlight: "Neural Networks" },
                            { num: "02", text: "Train large-scale models on H100/A100 GPU clusters", highlight: "GPU Clusters" },
                            { num: "03", text: "Build and deploy autonomous AI agent systems", highlight: "Agentic AI" },
                            { num: "04", text: "Launch your own AI-powered startup with seed funding access", highlight: "Startup Launch" },
                            { num: "05", text: "Graduate with a portfolio of deployed AI products, not just a certificate", highlight: "Real Portfolio" },
                            { num: "06", text: "Join a global alumni network of AI engineers, researchers, and founders", highlight: "Global Network" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500" />
                                <div className="p-7">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">{item.num}</span>
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-full">{item.highlight}</span>
                                    </div>
                                    <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Eligibility */}
            <section id="eligibility" className="py-24 px-6 bg-slate-50 overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Eligibility</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Admission to The Foundry is based on your potential to create and lead. We value diverse backgrounds and look for individuals who demonstrate logical clarity and a hunger for building.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <div className="bg-slate-900 px-8 py-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <Award size={20} className="text-blue-400" />
                                    Academic Eligibility
                                </h3>
                            </div>
                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Standard Pathway</h4>
                                        <ul className="space-y-4 text-slate-700">
                                            <li className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                                <span>Successful completion of <strong>Class 12 / Intermediate</strong> (or equivalent).</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                                <span><strong>No Mandatory Subjects</strong>: Students from MPC, BiPC, CEC, HEC, Commerce, or Arts are all eligible.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                                <span>Minimum aggregate of <strong>60%</strong> in core subjects.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Alternative Credentials</h4>
                                        <ul className="space-y-4 text-slate-700">
                                            <li className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                                <span><strong>IB Diploma</strong>: Minimum 24 points.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                                <span><strong>A-Levels</strong>: Passed in at least 3 subjects.</span>
                                            </li>
                                            <li className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                                <span><strong>BTEC/Vocational</strong>: Evaluated on a case-by-case basis.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <ShieldCheck className="text-blue-600" />
                                    <h3 className="text-xl font-bold text-slate-900">Prerequisites</h3>
                                </div>
                                <ul className="space-y-5">
                                    <li>
                                        <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Coding Experience</p>
                                        <p className="text-slate-600 text-sm"><strong>Zero prior coding experience</strong> is required. We teach you from the ground up.</p>
                                    </li>
                                    <li>
                                        <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">English Proficiency</p>
                                        <p className="text-slate-600 text-sm"><strong>No IELTS or TOEFL</strong> required. We value clear communication over test scores.</p>
                                    </li>
                                    <li>
                                        <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Entrance Tests</p>
                                        <p className="text-slate-600 text-sm"><strong>No traditional entrance exams</strong>. Seats allocated based on academic merit and profile evaluation.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-blue-600 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold italic mb-4">Who we look for</h3>
                                <p className="text-blue-50 leading-relaxed mb-6">
                                    We are looking for the "misfits" and the "builders" — individuals who are dissatisfied with the status quo and want to build the future.
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

            {/* 3. What You Will Study (Curriculum) */}
            <section id="curriculum" className="py-24 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What You Will Study</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">From mathematical foundations to shipping production AI systems. Every year builds on the last.</p>
                    </div>
                    <CurriculumTabs />
                </div>
            </section>

            {/* 4. AI Post 2035 Jobs */}
            <section id="careers" className="py-24 px-6 bg-slate-50 overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">AI Post 2035 Jobs</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">The roles our graduates are being trained to lead. These aren't jobs — they're missions.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {CAREER_ROLES.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveRole(role)}
                                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeRole.id === role.id
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {role.label}
                            </button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                        >
                            <div className="flex flex-col lg:flex-row gap-10">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{activeRole.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{activeRole.desc}</p>
                                    <div className="flex gap-6 mb-8">
                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Avg. Compensation</div>
                                            <div className="text-xl font-bold text-slate-900">{activeRole.salary}</div>
                                        </div>
                                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                            <div className="text-xs text-emerald-600 uppercase tracking-widest font-bold mb-1">Growth</div>
                                            <div className="text-xl font-bold text-emerald-600">{activeRole.growth}</div>
                                        </div>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Skills</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeRole.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-[350px]">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Responsibilities</h4>
                                    <div className="space-y-3">
                                        {activeRole.responsibilities.map((resp, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                                <span className="text-sm font-medium text-slate-700">{resp}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function AudienceItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors group">
            <div className="p-3 bg-white rounded-lg text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900">{title}</h4>
                <p className="text-sm text-slate-600">{desc}</p>
            </div>
        </div>
    );
}

function OutcomeItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
            <span className="text-slate-800 font-medium">{text}</span>
        </div>
    );
}

