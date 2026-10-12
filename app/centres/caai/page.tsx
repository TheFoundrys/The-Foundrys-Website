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
    Copy,
    Check,
    FileText,
    Plus,
    Minus,
    ExternalLink,
    BrainCircuit,
    Cpu,
    Server,
    Sparkles,
    Layers,
    ShieldCheck,
    Database,
    Zap,
    Code2,
    Bot
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Research Pillars Data - Specialized 4 AI Pillars
const RESEARCH_PILLARS = [
    {
        id: "foundation-models",
        title: "Generative AI & Multimodal LLMs",
        shortDesc: "Multimodal LLMs, Vision-Language models, fine-tuning, and RAG vector fabrics.",
        badge: "Pillar 01",
        icon: BrainCircuit,
        accentColor: "from-blue-600 to-indigo-600",
        fullDesc: "Our Foundation Models lab investigates core machine learning foundations, Large Language Models (LLMs), vision-language processing, and graph-augmented retrieval systems for high-reasoning enterprise tasks.",
        highlights: [
            "Generative Models & Multimodal LLM Engineering",
            "Retrieval-Augmented Generation (RAG) & Graph Vector Fabrics",
            "Small Language Models (SLM) Fine-Tuning & Quantization",
            "Non-Deterministic Reasoning & Safety Evaluation Benchmark"
        ],
        stats: { metrics: "1.2B+", label: "Tokens Processed/Sec" },
        specPaper: {
            title: "Technical Spec Paper 01: Sub-Millisecond LLM Inference & Vector Fabrics",
            downloadUrl: "https://ieeexplore.ieee.org/document/11525902/"
        }
    },
    {
        id: "neural-compute",
        title: "Neural Compute & Triton Kernel Engineering",
        shortDesc: "Custom Triton kernels, FlashAttention acceleration, and sub-millisecond FP8 execution.",
        badge: "Pillar 02",
        icon: Cpu,
        accentColor: "from-indigo-600 to-violet-600",
        fullDesc: "Optimizing the silicon execution layer for generative AI. We write custom GPU Triton kernels, memory-efficient attention operations, and low-precision FP8 quantization passes to maximize throughput.",
        highlights: [
            "Sub-Millisecond Custom Triton CUDA Kernel Synthesis",
            "FlashAttention-3 & Linear Attention Memory Reductions",
            "FP8 / INT4 Quantization Passes for Edge Hardware",
            "High-Throughput Distributed Tensor Parallelism"
        ],
        stats: { metrics: "3.8x", label: "Kernel Execution Speedup" },
        specPaper: {
            title: "Technical Spec Paper 02: High-Throughput Triton Kernels for Edge Inference",
            downloadUrl: "https://ieeexplore.ieee.org/document/11118759"
        }
    },
    {
        id: "agentic-swarms",
        title: "Autonomous Multi-Agent Swarms & Reasoning",
        shortDesc: "Multi-agent planning, tool-use execution loops, and self-reflective safety guardrails.",
        badge: "Pillar 03",
        icon: Bot,
        accentColor: "from-purple-600 to-pink-600",
        fullDesc: "Engineering autonomous agent swarms capable of multi-step tool call reasoning, code synthesis, self-reflection, and sandboxed safety verification for complex software engineering workflows.",
        highlights: [
            "Autonomous Multi-Agent Swarm Orchestration",
            "Tool-Use Reasoning Loops & External API Integration",
            "Self-Reflective AST Verification & Code Synthesis",
            "Real-Time Safety Guardrails & Context Pruning"
        ],
        stats: { metrics: "99.4%", label: "Tool Call Execution Accuracy" },
        specPaper: {
            title: "Technical Spec Paper 03: Multi-Agent Swarms in Non-Deterministic Workflows",
            downloadUrl: "https://ieeexplore.ieee.org/document/11429303"
        }
    },
    {
        id: "sovereign-ai",
        title: "Sovereign Enterprise & Edge AI",
        shortDesc: "Air-gapped VPC deployments, local privacy-compliant SLMs, and zero-trust data vaults.",
        badge: "Pillar 04",
        icon: Server,
        accentColor: "from-[#002f86] to-blue-800",
        fullDesc: "Deploying sovereign AI architectures within air-gapped enterprise environments. We build zero-leakage local inference engines, private vector vaults, and sovereign compliance guardrails.",
        highlights: [
            "Air-Gapped Private VPC Deployment Architectures",
            "Zero-Leakage Local SLM Inference & Privacy Protection",
            "Enterprise Access-Control Vector Data Vaults",
            "Sovereign AI Governance & Audit Frameworks"
        ],
        stats: { metrics: "0.0%", label: "External Data Leakage" },
        specPaper: {
            title: "Technical Spec Paper 04: Sovereign Enterprise Air-Gapped AI Deployments",
            downloadUrl: "https://ieeexplore.ieee.org/document/11429262"
        }
    }
];

// Cognitive Architecture Layers
const COGNITIVE_LAYERS = [
    {
        num: "01",
        name: "Foundation Models Layer",
        desc: "Generative Multimodal LLMs, Vision-Language Transformers, & Small Language Models (SLMs)",
        icon: BrainCircuit,
        badge: "Generative AI"
    },
    {
        num: "02",
        name: "Neural Compute Engine",
        desc: "Sub-Millisecond Triton Kernels, FlashAttention-3, & CUDA Parallel Execution Acceleration",
        icon: Cpu,
        badge: "Triton & CUDA"
    },
    {
        num: "03",
        name: "Agentic Swarm Fabric",
        desc: "Autonomous Planning, Multi-Tool Reasoning Loops, & Self-Reflective Safety Guardrails",
        icon: Layers,
        badge: "Multi-Agent Swarm"
    },
    {
        num: "04",
        name: "Sovereign Enterprise API",
        desc: "Air-Gapped Private VPC Deployment, Graph RAG Retrieval, & Real-Time Substation Telemetry",
        icon: Server,
        badge: "Production API"
    }
];

// Research Publications Data
const PUBLICATIONS = [
    {
        id: "pub-1",
        title: "MentalLLM: A Transformer-Based Large Language Model Framework for Depression Detection",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Applied AI Research Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11525902/",
        topic: "Generative Models & LLMs",
        citation: "@article{mentalllm2026, title={MentalLLM: A Transformer-Based Large Language Model Framework}, author={The Foundry AI Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "This paper introduces MentalLLM, a novel transformer-based framework specifically designed for depression detection in social media text."
    },
    {
        id: "pub-2",
        title: "Multi-Agent Phishing Detection And Deletion via Small VLM and LLM Reasoning",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Applied AI Research Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11429303",
        topic: "Agentic Systems",
        citation: "@article{phishingmultiagent2026, title={Multi-Agent Phishing Detection And Deletion}, author={The Foundry AI Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "A cooperative multi-agent architecture utilizing Vision Language Models and LLM reasoning to detect and neutralize advanced phishing attacks."
    },
    {
        id: "pub-[#002f86]",
        title: "Hybrid ML-SLM RAG System for Large Technical PDFs",
        venue: "IEEE Xplore 2025",
        authors: "The Foundry Applied AI Research Team",
        year: "2025",
        pdfLink: "https://ieeexplore.ieee.org/document/11118759",
        topic: "Neural Architectures & RAG",
        citation: "@article{hybridmlslmrag2025, title={Hybrid ML-SLM RAG System for Large Technical PDFs}, author={The Foundry AI Lab}, journal={IEEE Xplore}, year={2025}}",
        abstract: "A high-throughput Retrieval-Augmented Generation pipeline combining traditional ML filters with Small Language Models for parsing large manuals."
    },
    {
        id: "pub-4",
        title: "RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection Using SLMs",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Applied AI Research Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11429262",
        topic: "AI Safety & Security",
        citation: "@article{ragenhancedvulnerability2026, title={RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection}, author={The Foundry AI Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "An ensemble framework combining lightweight Small Language Models with RAG vector search to run local, privacy-compliant vulnerability auditing."
    }
];



export default function CAAIReseachCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

    // Interactive Agent Workflow Simulator steps
    const simSteps = [
        { label: "User Goal Ingestion", status: "Parsing natural language intent...", detail: "Extracted high-level task: 'Optimize Neural Model for Edge Inference'" },
        { label: "Agentic Task Decomposition", status: "Agent Swarm initializing...", detail: "Planner Agent generated 4 sub-tasks for Code Synthesis & Benchmark Agents" },
        { label: "Parallel Tool Execution", status: "Running sandbox CUDA benchmark...", detail: "Generated custom Triton kernel; profiling latency across simulated FP8 hardware" },
        { label: "Self-Reflection & Verification", status: "Checking safety & memory bounds...", detail: "Safety Guardrail Agent verified 0 out-of-bounds memory accesses" },
        { label: "Final Synthesized Artifact", status: "Workflow Complete!", detail: "Optimized Mamba-SSM kernel deployed with 3.8x speedup and verified accuracy" }
    ];

    const runSimulation = () => {
        setIsSimulating(true);
        setSimStep(0);
        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            if (current < simSteps.length) {
                setSimStep(current);
            } else {
                clearInterval(interval);
                setIsSimulating(false);
            }
        }, 1200);
    };

    const handleCopyCitation = (id: string, citationText: string) => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(citationText);
            setCopiedCitationId(id);
            setTimeout(() => setCopiedCitationId(null), 2500);
        }
    };

    const activePillarObj = RESEARCH_PILLARS.find(p => p.id === selectedPillar) || RESEARCH_PILLARS[0];

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Banner Image Section with Visual Glass Badges */}
            <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden mt-16">
                <Image
                    src="/images/caai_centre_banner.jpg"
                    alt="Centre for Applied Artificial Intelligence"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-7xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
                            Centre for Applied Artificial Intelligence (CAAI)
                        </h1>
                        <p className="text-slate-200 text-sm md:text-base mt-3 max-w-2xl font-light">
                            Engineering sovereign cognitive systems, multi-agent swarms, and sub-millisecond neural compute architectures.
                        </p>

                        {/* Quick Anchor Badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            <a href="#pillars" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                AI Pillars
                            </a>
                            <a href="#architecture" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Cognitive Stack
                            </a>
                            <a href="#simulator" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Agentic Simulator
                            </a>
                            <a href="#publications" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                IEEE Papers
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-2xl shadow-xl shadow-black/10 border border-slate-200/60 mt-[30px] mb-16 overflow-hidden">

                {/* Introduction & Visual Key Stats Grid */}
                <section className="text-slate-800 p-8 sm:p-12 md:p-16 pb-8 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#002f86] text-xs font-bold font-mono mb-3">
                                🧠 Sovereign AI Frameworks
                            </div>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Bridging Frontier AI Research with Enterprise Scale
                            </h2>
                            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
                                The Centre for Applied Artificial Intelligence (CAAI) at The Foundry bridges fundamental scientific research with real-world enterprise implementation. We engineer sovereign cognitive systems, multi-agent frameworks, and high-performance neural computing architectures to solve the world&apos;s most demanding technological challenges.
                            </p>
                        </div>

                        {/* Visual Research Image */}
                        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[320px] rounded-lg overflow-hidden border border-slate-200/80 shadow-lg">
                            <Image
                                src="/images/caai_research_lab.jpg"
                                alt="Centre for Applied Artificial Intelligence Research Laboratory"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </section>

                {/* Core Research Pillars - Interactive Tab Switcher & Visual Cards */}
                <section className="text-slate-800 border-t border-slate-200/50 bg-[#F7F7F4] p-8 sm:p-12 md:p-16" id="pillars">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono mb-1">
                                AI RESEARCH MATRIX
                            </span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Core Applied AI Research Pillars
                            </h2>
                        </div>
                        <p className="text-xs text-slate-500 max-w-md mt-2 md:mt-0 font-medium">
                            Select an AI research pillar to explore specialized neural labs, kernel highlights, and technical whitepapers.
                        </p>
                    </div>

                    {/* Interactive Tab Switcher */}
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
                        {RESEARCH_PILLARS.map((pillar) => {
                            const IconComp = pillar.icon;
                            const isSelected = selectedPillar === pillar.id;
                            return (
                                <button
                                    key={pillar.id}
                                    onClick={() => setSelectedPillar(pillar.id)}
                                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${isSelected
                                            ? "bg-[#002f86] text-white shadow-md scale-102"
                                            : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                                        }`}
                                >
                                    <IconComp size={16} className={isSelected ? "text-white" : "text-slate-500"} />
                                    <span>{pillar.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Pillar Card Showcase */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePillarObj.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div className="lg:col-span-7 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs uppercase font-bold tracking-widest text-slate-400 font-mono">
                                                {activePillarObj.badge}
                                            </span>
                                            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#002f86] text-[10px] font-bold font-mono">
                                                {activePillarObj.stats.metrics} • {activePillarObj.stats.label}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-3">
                                            {activePillarObj.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-sans">
                                            {activePillarObj.fullDesc}
                                        </p>
                                    </div>

                                    {/* Highlights Checklist */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                        {activePillarObj.highlights.map((item, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F7F4] border border-slate-200/70">
                                                <CheckCircle2 className="w-4 h-4 text-[#002f86] shrink-0 mt-0.5" />
                                                <span className="text-xs text-slate-800 font-semibold">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            onClick={() => setActiveSpecModal(activePillarObj.id)}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#002f86] hover:bg-[#002266] text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                                        >
                                            <FileText size={16} />
                                            <span>Read Technical AI Spec</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Graphic Card Preview */}
                                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#001f5c] to-slate-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden font-mono text-xs">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <BrainCircuit size={160} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-sans">
                                            <span className="text-blue-300 font-bold text-xs">SPEC PAPER PREVIEW</span>
                                            <span className="text-slate-400 text-[10px]">IEEE XPLORE VERIFIED</span>
                                        </div>
                                        <p className="text-white font-serif text-base font-bold mb-3 leading-snug">
                                            {activePillarObj.specPaper.title}
                                        </p>
                                        <p className="text-slate-300 text-xs font-sans leading-relaxed mb-6">
                                            Includes benchmark datasets, CUDA kernel profiles, and formal latency proofs under heavy multi-tenant load.
                                        </p>

                                        <a
                                            href={activePillarObj.specPaper.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#002f86] rounded-lg font-bold text-xs hover:bg-blue-50 transition-colors cursor-pointer"
                                        >
                                            <ExternalLink size={14} />
                                            <span>IEEE Document Link</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* Cognitive Architecture Stack Diagram Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50" id="architecture">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] font-mono block mb-2">
                            SYSTEM ARCHITECTURE
                        </span>
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-3">
                            The Cognitive Systems Stack
                        </h2>
                        <p className="text-sm text-slate-600">
                            Our proprietary four-tier architecture powering autonomous multi-agent reasoning and low-latency neural inference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {COGNITIVE_LAYERS.map((layer, idx) => {
                            const LayerIcon = layer.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#F7F7F4] border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 relative group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold text-slate-400">{layer.num}</span>
                                            <span className="px-2 py-0.5 rounded bg-blue-100 text-[#002f86] text-[10px] font-bold font-mono">
                                                {layer.badge}
                                            </span>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#002f86] mb-4 shadow-xs group-hover:scale-110 transition-transform">
                                            <LayerIcon size={24} />
                                        </div>
                                        <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                                            {layer.name}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                            {layer.desc}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-[#002f86]">
                                        <CheckCircle2 size={13} />
                                        <span>Production Verified</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Interactive Agent Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50" id="simulator">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Autonomous Agent Workflow
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how CAAI&apos;s multi-agent swarm architecture ingests complex developer intent, performs tool call reasoning loops, runs sandboxed CUDA kernel profiling, and verifies safe deployment.
                            </p>

                            <button
                                onClick={runSimulation}
                                disabled={isSimulating}
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm text-white transition-all shadow-md cursor-pointer rounded-xl ${isSimulating
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : "bg-[#002f86] hover:bg-[#002266]"
                                    }`}
                            >
                                <PlayCircle className="w-4 h-4" />
                                <span>{isSimulating ? "Running Agent Simulation..." : "Simulate Agent Workflow"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 bg-white border border-slate-200/80 font-mono text-xs rounded-2xl shadow-md">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">caai-agentic-runtime v2.4</span>
                                    </div>
                                    <span className="text-[#002f86] text-[11px] font-bold">
                                        Step {simStep + 1} of {simSteps.length}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    {simSteps.map((step, idx) => {
                                        const isActive = idx === simStep;
                                        const isDone = idx < simStep;
                                        return (
                                            <div
                                                key={idx}
                                                className={`p-3 rounded-lg border transition-all ${isActive
                                                        ? "bg-[#DCE7F1] border-[#002f86] text-slate-900"
                                                        : isDone
                                                            ? "bg-slate-50 border-slate-200 text-slate-600"
                                                            : "bg-white border-slate-100 text-slate-400"
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between font-sans mb-1">
                                                    <span className="font-bold text-xs text-slate-900 flex items-center gap-2">
                                                        {isDone ? (
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                        ) : isActive ? (
                                                            <div className="w-2 h-2 rounded-full bg-[#002f86] animate-ping" />
                                                        ) : (
                                                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                        )}
                                                        {step.label}
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 font-medium">{step.status}</span>
                                                </div>
                                                <p className="text-[11px] text-slate-600 font-mono pl-6 mt-0.5">
                                                    {step.detail}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Publications & Papers Section */}
                <section id="publications" className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono mb-1">
                                IEEE & PEER REVIEWED
                            </span>
                            <h2 className="font-serif text-3xl font-bold text-[#002f86]">
                                Research Publications
                            </h2>
                        </div>
                        <Link href="/blog?category=research" className="mt-4 md:mt-0 text-sm font-bold text-[#002f86] hover:underline flex items-center gap-1">
                            <span>Browse All Research Articles</span>
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {PUBLICATIONS.map((pub) => (
                            <div key={pub.id} className="p-6 bg-[#F7F7F4] border border-slate-200/80 hover:border-slate-300 rounded-xl transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold font-mono">
                                        {pub.venue}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">{pub.year} • {pub.topic}</span>
                                </div>
                                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1 hover:text-[#002f86] transition-colors">
                                    <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer">
                                        {pub.title}
                                    </a>
                                </h3>
                                <p className="text-xs text-slate-600 mb-2 font-medium">
                                    Authors: {pub.authors}
                                </p>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-sans">
                                    {pub.abstract}
                                </p>
                                <div className="flex items-center gap-4">
                                    <a
                                        href={pub.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-[#002f86] hover:underline flex items-center gap-1"
                                    >
                                        <span>Download IEEE PDF</span>
                                        <ArrowRight size={14} />
                                    </a>
                                    <button
                                        onClick={() => handleCopyCitation(pub.id, pub.citation)}
                                        className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer hover:underline"
                                    >
                                        <Copy size={12} />
                                        <span>{copiedCitationId === pub.id ? "Citation Copied!" : "Cite Paper"}</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* FAQ Section */}
            <section className="py-16 px-6 bg-white border-t border-b border-slate-200/60">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002f86] mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about CAAI research fellowships, compute grants, and industry partnerships.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is CAAI's primary research focus?">
                                CAAI conducts research across 4 specialized AI pillars: Generative AI & Multimodal LLMs, Neural Compute & Triton Kernel Engineering, Autonomous Multi-Agent Swarms & Reasoning, and Sovereign Enterprise & Edge AI.
                            </FAQItem>
                            <FAQItem question="How can researchers apply for AI Fellowships?">
                                Doctoral fellows, AI engineers, and computer scientists can apply for fellowships through our open application calls or sponsored research grants.
                            </FAQItem>
                            <FAQItem question="Can enterprises request custom Triton kernel optimization?">
                                Yes. Enterprises partner with CAAI to optimize proprietary LLMs, write sub-millisecond Triton kernels, and build autonomous multi-agent pipelines.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="What hardware infrastructure powers CAAI labs?">
                                CAAI operates dedicated NVIDIA H100 and A100 Tensor Core superclusters connected via 3.2 Tbps InfiniBand high-speed interconnect fabric.
                            </FAQItem>
                            <FAQItem question="Are CAAI research publications open access?">
                                Yes. All research outputs produced by CAAI are published in peer-reviewed IEEE venues and open-access AI repositories.
                            </FAQItem>
                            <FAQItem question="How does CAAI support deep tech startups?">
                                Through Pillar 04 (Sovereign Enterprise), early-stage AI startups receive supercluster compute access, technical auditing, and incubation support.
                            </FAQItem>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Technical Spec Paper Modal */}
            <AnimatePresence>
                {activeSpecModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setActiveSpecModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative"
                        >
                            <button
                                onClick={() => setActiveSpecModal(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[10px] font-bold uppercase tracking-wider font-mono">
                                CAAI Technical AI Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical research whitepaper covering Triton kernel benchmarks, CUDA memory profiles, and multi-agent reasoning specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900 font-sans">Spec Details:</p>
                                <p>• Publication ID: CAAI-SPEC-2026-01</p>
                                <p>• Format: IEEE Xplore / AI PDF</p>
                                <p>• Status: Peer Reviewed & Verified</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={activePillarObj.specPaper.downloadUrl}
                                    target={activePillarObj.specPaper.downloadUrl.startsWith("http") ? "_blank" : undefined}
                                    rel={activePillarObj.specPaper.downloadUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-3 px-4 bg-[#002f86] hover:bg-[#002266] text-white text-center font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <ExternalLink size={14} />
                                    <span>Read Full Research Paper (IEEE Xplore)</span>
                                </a>
                                <a
                                    href="#publications"
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-center font-bold text-xs transition-all block cursor-pointer"
                                >
                                    Browse All Papers on Page
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

function FAQItem({ question, children }: { question: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#F7F7F4] border border-slate-200/80 overflow-hidden transition-all duration-300">
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
