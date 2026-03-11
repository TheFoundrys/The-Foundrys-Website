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
    Globe,
    Bot,
    Layers
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CareerVision } from "@/components/schools/shared/career-vision";
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
    },
    {
        id: "embodied-ai-specialist",
        label: "Embodied AI Specialist",
        title: "Embodied AI Specialist",
        desc: "Specializes in the intersection of LLMs and physical robotics, designing the 'brain' for humanoid and industrial autonomous robots.",
        salary: "₹75L - 1.1Cr",
        growth: "+55% YoY",
        skills: [
            "Robotics (ROS2)",
            "Computer Vision",
            "Kinematics",
            "Real-time Inference",
            "Sensor Fusion"
        ],
        responsibilities: [
            "Mapping vision to physical motor control",
            "Optimizing onboard model latency",
            "Designing gesture-based interaction",
            "Leading humanoid cognitive research",
            "Implementing spatial reasoning loops"
        ]
    },
    {
        id: "synthetic-data-architect",
        label: "Synthetic Data Architect",
        title: "Synthetic Data Architect",
        desc: "Engineers complex simulations and generative pipelines to produce high-fidelity training data for frontier model development.",
        salary: "₹65L - 90L",
        growth: "+40% YoY",
        skills: [
            "Generative AI",
            "Data Engineering",
            "Simulation (Unreal/Unity)",
            "Statistical Validation",
            "GANs/VAEs"
        ],
        responsibilities: [
            "Building high-fidelity simulation worlds",
            "Mitigating data bias in synthetic sets",
            "Designing recursive training loops",
            "Validating synthetic data distribution",
            "Scaling automated data pipelines"
        ]
    },
    {
        id: "cross-modal-systems-designer",
        label: "Cross-Modal Systems Designer",
        title: "Cross-Modal Systems Designer",
        desc: "Architects systems that seamlessly translate intelligence across text, vision, audio, and tactile sensors for unified world-models.",
        salary: "₹70L - 1.Cr",
        growth: "+48% YoY",
        skills: [
            "Multi-modal LLMs",
            "Audio Processing",
            "Transformer Architecture",
            "Latent Space Analysis",
            "Feature Embedding"
        ],
        responsibilities: [
            "Aligning visual and textual embeddings",
            "Designing cross-attention mechanisms",
            "Optimizing multi-modal batching",
            "Building unified sensory-input layers",
            "Evaluating model cross-modal coherence"
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

            {/* 2. Eligibility - REVISED EXPANSIVE DESIGN */}
            <section id="eligibility" className="py-32 px-6 bg-white overflow-hidden relative">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 z-0" />
                <div className="absolute top-40 left-10 text-[15rem] font-black text-slate-100/50 select-none pointer-events-none z-0 tracking-tighter">
                    QUALIFY
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
                        {/* Left Column: Heading & Narrative */}
                        <div className="lg:col-span-5 pt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em] mb-6">Entry Standards</p>
                                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 tracking-tight leading-[0.9]">
                                    Unlocking <br />
                                    <span className="text-slate-400">Potential.</span>
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed font-light mb-12">
                                    Admissions at The Foundry prioritized logical clarity over rote memorization. We seek the architects of tomorrow, regardless of their academic stream or prior technical experience.
                                </p>

                                <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                                    <h3 className="text-2xl font-bold italic mb-4">Who we look for</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        We look for the <span className="text-white font-bold">&quot;misfits&quot;</span> and the <span className="text-white font-bold">&quot;builders&quot;</span>—individuals who are dissatisfied with the status quo and see the world as a series of problems to be solved.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Curious", "Logical", "Persistent", "Grit"].map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href="/apply" className="mt-8 inline-flex items-center gap-2 text-white font-bold group">
                                        Unlock Potential
                                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Requirements Grid */}
                        <div className="lg:col-span-7 space-y-20">
                            {/* Academic Row */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="h-px bg-slate-200 flex-1" />
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Academic Eligibility</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">1</div>
                                        <h4 className="text-xl font-bold text-slate-900">Standard Pathway</h4>
                                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                <span>Grade 12 / Intermediate from any recognized board.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                <span>MPC, BiPC, CEC, HEC, or Arts—all streams are eligible.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                <span>Min. 60% aggregate in core subjects.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">2</div>
                                        <h4 className="text-xl font-bold text-slate-900">Global Credentials</h4>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-end pb-2 border-b border-slate-100">
                                                <span className="text-sm text-slate-500">IB Diploma</span>
                                                <span className="font-bold text-slate-900">24+ Points</span>
                                            </div>
                                            <div className="flex justify-between items-end pb-2 border-b border-slate-100">
                                                <span className="text-sm text-slate-500">A-Levels</span>
                                                <span className="font-bold text-slate-900">3 Subjects</span>
                                            </div>
                                            <p className="text-[10px] text-slate-400 italic">Other vocational boards evaluated case-by-case.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Zero-Gate Row */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-10"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="h-px bg-slate-200 flex-1" />
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Zero-Gate Admissions</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-slate-900">
                                            <Code2 className="text-blue-600" size={24} />
                                            <h4 className="text-lg font-bold">No Code Start</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            We teach from the absolute ground up. No prior programming knowledge or technical background is required to begin your journey.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-slate-900">
                                            <ShieldCheck className="text-indigo-600" size={24} />
                                            <h4 className="text-lg font-bold">Aptitude Driven</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Forget high-stress entrance exams. We evaluate you on logical clarity, situational persistence, and your profile potential.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
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




            <CareerVision
                roles={CAREER_ROLES.map(role => ({
                    icon: role.id === "neural-architect" ? Cpu :
                        role.id === "agentic-systems-engineer" ? BrainCircuit :
                            role.id === "ai-security-lead" ? ShieldCheck :
                                role.id === "chief-ai-officer" ? Briefcase :
                                    role.id === "embodied-ai-specialist" ? Bot :
                                        role.id === "synthetic-data-architect" ? Database :
                                            role.id === "cross-modal-systems-designer" ? Layers : Cpu,
                    title: role.title,
                    salary: role.salary,
                    growth: role.growth,
                    desc: role.desc,
                    skills: role.skills,
                    responsibilities: role.responsibilities
                }))}
                title="What You'll Become"
                subtitle="From mathematical foundations to architecting global cognitive systems. This is your career in 2035."
                themeColor="blue"
            />

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


