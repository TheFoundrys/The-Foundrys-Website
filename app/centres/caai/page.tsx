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
    Check
} from "lucide-react";
import Link from "next/link";

// Research Pillars Data - Aligned with The Foundry's 4 Core Pillars
const RESEARCH_PILLARS = [
    {
        id: "deep-tech",
        title: "Deep Tech & Applied AI",
        shortDesc: "Mastering the fundamental layers of the intelligence age — LLMs, Neural Networks, and Quantum Compute.",
        badge: "Pillar 01",
        fullDesc: "Our Deep Tech lab investigates core machine learning foundations, Large Language Models (LLMs), neural compute optimization, and quantum-classical hybrid algorithms to power next-generation software and hardware.",
        highlights: [
            "Generative Models & Multimodal LLM Engineering",
            "Neural Architectures & Sub-Millisecond Triton Kernels",
            "Quantum-Classical Hybrid Computing & QML Algorithms",
            "High-Throughput Vector Databases & Graph RAG Fabrics"
        ],
        stats: { metrics: "1.2B+", label: "Tokens Processed/Sec" },
        specPaper: {
            title: "Technical Spec Paper 01: Sub-Millisecond LLM Inference & Triton Kernels",
            downloadUrl: "#publications"
        }
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Venture Building",
        shortDesc: "Translating cutting-edge research into zero-to-one commercial tech ventures.",
        badge: "Pillar 02",
        fullDesc: "Bridging technical breakthroughs with market leadership. We build autonomous multi-agent frameworks, enterprise operations, and incubation systems that scale deep tech innovations into global enterprises.",
        highlights: [
            "Zero-to-One Deep Tech Venture Incubation",
            "Autonomous Multi-Agent Swarm Orchestration",
            "Enterprise AI Strategy & Leadership Frameworks",
            "Commercialization & IP Translation Models"
        ],
        stats: { metrics: "99.4%", label: "Venture Execution Accuracy" },
        specPaper: {
            title: "Technical Spec Paper 02: Multi-Agent Swarms in Non-Deterministic Workflows",
            downloadUrl: "#publications"
        }
    },
    {
        id: "sustainability",
        title: "Sustainability & Green Tech",
        shortDesc: "Designing eco-efficiency metrics, ESG systems, and AI-driven climate solutions.",
        badge: "Pillar 03",
        fullDesc: "Engineering for a permanent future. We fuse artificial intelligence with ESG compliance, material informatics, and carbon accounting to solve pressing global environmental challenges.",
        highlights: [
            "AI-Driven Carbon Accounting & ESG Compliance",
            "Material Informatics & Bio-Synthetic Modeling",
            "Resource Optimization & Closed-Loop Eco-Metrics",
            "Climate Risk Modeling & Predictive Analytics"
        ],
        stats: { metrics: "100%", label: "Verifiable ESG Coverage" },
        specPaper: {
            title: "Technical Spec Paper 03: Closed-Loop Carbon Analytics via AI Informatics",
            downloadUrl: "#publications"
        }
    },
    {
        id: "energy",
        title: "Renewable Energy & Power Systems",
        shortDesc: "Fueling the next civilization with smart grids, solar, and clean power architectures.",
        badge: "Pillar 04",
        fullDesc: "Optimizing the power core of the future. We develop smart grid algorithms, power distribution intelligence, and renewable storage models to ensure sovereign, sustainable energy infrastructure.",
        highlights: [
            "Smart Grid Optimization & Real-Time Power Routing",
            "Solar & Wind Predictive Maintenance Algorithms",
            "Sub-Station Load Balancing & Microgrid Controls",
            "Clean Power Storage & Energy Metric Monitoring"
        ],
        stats: { metrics: "< 4ms", label: "Grid Telemetry Latency" },
        specPaper: {
            title: "Technical Spec Paper 04: Real-Time Smart Grid Load Optimization & Microgrids",
            downloadUrl: "#publications"
        }
    }
];

// Featured Projects Data
const FEATURED_PROJECTS = [
    {
        id: "aether",
        name: "Project Aether",
        category: "Agentic Workflows",
        status: "Live Beta",
        desc: "Autonomous multi-agent software engineering framework that plans, writes, audits, and deploys full-stack applications with built-in sandbox validation.",
        tags: ["Multi-Agent Swarm", "Code Synthesis", "Sandboxed Execution", "Self-Healing"],
        metrics: "8.4x Faster Dev Cycle"
    },
    {
        id: "neuralsynth",
        name: "NeuralSynth Edge",
        category: "Neural Architectures",
        status: "In Production",
        desc: "Sub-50ms local LLM reasoning engine optimized for FP8 edge hardware, running 180+ tokens/sec on consumer GPUs without precision degradation.",
        tags: ["State-Space Models", "Triton Kernels", "FP8 Quantization", "Edge Compute"],
        metrics: "180+ Tokens/Sec"
    },
    {
        id: "cogniflow",
        name: "CogniFlow Fabric",
        category: "Generative Models",
        status: "Research Paper",
        desc: "Hierarchical vector & graph memory system providing infinite-context recall and real-time knowledge graph dynamic synthesis for enterprise RAG.",
        tags: ["Knowledge Graph RAG", "Vector Search", "Episodic Memory"],
        metrics: "1M+ Context Recall"
    },
    {
        id: "biogen",
        name: "BioGen-AI Engine",
        category: "Generative Models",
        status: "Grant Project",
        desc: "Generative macromolecular modeling suite predicting tertiary protein folding dynamics and designing novel synthetic enzyme structures.",
        tags: ["Molecular GenAI", "3D Structure Synthesis", "Bio-Informatics"],
        metrics: "94.2% Folding Accuracy"
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
        id: "pub-3",
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

// Compute & Lab Stats
const INFRA_STATS = [
    { label: "AI Compute Infrastructure", value: "NVIDIA H100 / A100 Superclusters" },
    { label: "High-Speed Interconnect", value: "3.2 Tbps InfiniBand Fabric" },
    { label: "Vector & Graph Storage", value: "Petabyte-Scale Low-Latency Memory" },
    { label: "Active Research Fellows", value: "45+ Doctoral & Postdoc Researchers" }
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
        navigator.clipboard.writeText(citationText);
        setCopiedCitationId(id);
        setTimeout(() => setCopiedCitationId(null), 2500);
    };

    const activePillarObj = RESEARCH_PILLARS.find(p => p.id === selectedPillar) || RESEARCH_PILLARS[0];

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-20 sm:pt-24 pb-4 px-4 sm:px-6 md:px-auto max-w-[1400px] mx-auto">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10 relative overflow-hidden">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#002f86] leading-tight mb-2">
                            Centre for Applied Artificial Intelligence (CAAI)
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                            Fostering breakthroughs in generative models, agentic workflows, and neural architectures.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
                            The Centre for Applied Artificial Intelligence (CAAI) at The Foundry bridges fundamental research with real-world enterprise implementation. We engineer sovereign cognitive systems, multi-agent frameworks, and high-performance neural computing architectures to solve the world&apos;s most demanding technological challenges.
                        </p>

                        {/* CTA Buttons matching Foundry style */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="#pillars"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#002f86] hover:bg-[#002266] text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                            >
                                <span>Explore Research Pillars</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#collaborate"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#002f86] font-semibold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all cursor-pointer"
                            >
                                <span>Partner with CAAI</span>
                            </a>
                        </div>
                    </div>

                    {/* Metric Stats Cards in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#b8d1ea]">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">50+ TFLOPS</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Dedicated Compute</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">45+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Peer-Reviewed Papers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">12 Swarms</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Active Agent Systems</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">$15M+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Research Infrastructure</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE RESEARCH PILLARS SECTION */}
            <section id="pillars" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 max-w-3xl">
                        <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold uppercase tracking-wider">
                            Core Research Focus
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            Research Pillars
                        </h2>
                        <p className="text-slate-700 text-xs sm:text-sm mt-1">
                            Our institute centers its scientific investigations around the four core pillars of The Foundry.
                        </p>
                    </div>

                    {/* Pillar Tabs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                        {RESEARCH_PILLARS.map((pillar) => {
                            const isSelected = selectedPillar === pillar.id;
                            return (
                                <button
                                    key={pillar.id}
                                    onClick={() => setSelectedPillar(pillar.id)}
                                    className={`text-left p-4 sm:p-5 rounded-lg transition-all duration-300 border cursor-pointer ${
                                        isSelected
                                            ? "bg-[#DCE7F1] border-[#002f86] shadow-sm"
                                            : "bg-[#F7F7F4] border-slate-200 hover:bg-[#eef2f6]"
                                    }`}
                                >
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold text-[#002f86] uppercase tracking-wider">
                                            {pillar.badge}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-base font-bold text-slate-900 mb-1 leading-snug">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-sans">
                                        {pillar.shortDesc}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Pillar Highlight Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePillarObj.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="p-6 sm:p-8 rounded-lg bg-[#F7F7F4] border border-slate-200 shadow-sm"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                <div className="lg:col-span-8">
                                    <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[10px] font-bold uppercase tracking-wider">
                                        {activePillarObj.badge} Overview
                                    </span>
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-2 mb-2">
                                        {activePillarObj.title}
                                    </h3>
                                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                                        {activePillarObj.fullDesc}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {activePillarObj.highlights.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2 p-2.5 rounded-md bg-white border border-slate-200/80">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#002f86] shrink-0 mt-0.5" />
                                                <span className="text-xs text-slate-800 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-4 flex flex-col justify-center">
                                    <div className="p-5 rounded-lg bg-white border border-slate-200 text-center shadow-sm">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Key Performance Metric</p>
                                        <p className="text-3xl font-serif font-extrabold text-[#002f86] mb-1">
                                            {activePillarObj.stats.metrics}
                                        </p>
                                        <p className="text-xs text-slate-600 font-medium mb-4">{activePillarObj.stats.label}</p>

                                        {/* WORKING TECHNICAL SPEC PAPER BUTTON */}
                                        <button
                                            onClick={() => setActiveSpecModal(activePillarObj.id)}
                                            className="w-full py-2.5 px-3 rounded-md bg-[#002f86] hover:bg-[#002266] active:scale-98 text-white font-semibold text-xs flex items-center justify-center transition-all cursor-pointer shadow-sm"
                                        >
                                            <span>Technical Spec Paper</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* TECHNICAL SPEC PAPER MODAL */}
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
                            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative"
                        >
                            <button
                                onClick={() => setActiveSpecModal(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[10px] font-bold uppercase tracking-wider">
                                CAAI Technical Whitepaper
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical architecture spec paper covering experimental methodology, model benchmarks, and production deployment specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-xl bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900">Spec Details:</p>
                                <p>• Publication ID: CAAI-SPEC-2026-04</p>
                                <p>• Format: IEEE PDF / Research Document</p>
                                <p>• Status: Peer Reviewed & Verified</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <a
                                    href="#publications"
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-3 px-4 rounded-xl bg-[#002f86] hover:bg-[#002266] text-white text-center font-bold text-xs shadow-md transition-all block"
                                >
                                    Browse All Research Papers
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* INTERACTIVE AGENT WORKFLOW SIMULATOR */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5">
                            <span className="px-2.5 py-0.5 rounded bg-white text-[#002f86] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2 mb-3">
                                Autonomous Agent Workflow
                            </h2>
                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                Witness how CAAI&apos;s multi-agent swarm architecture ingests complex developer intent, performs tool call reasoning loops, runs sandboxed CUDA kernel profiling, and verifies safe deployment.
                            </p>
                            
                            <button
                                onClick={runSimulation}
                                disabled={isSimulating}
                                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-xs sm:text-sm text-white transition-all shadow-md cursor-pointer ${
                                    isSimulating
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : "bg-[#002f86] hover:bg-[#002266]"
                                }`}
                            >
                                <PlayCircle className="w-4 h-4" />
                                <span>{isSimulating ? "Running Simulation..." : "Simulate Agent Workflow"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">caai-agentic-runtime v2.4</span>
                                    </div>
                                    <span className="text-[#002f86] text-[11px] font-bold">
                                        Step {simStep + 1} of {simSteps.length}
                                    </span>
                                </div>

                                <div className="space-y-2.5">
                                    {simSteps.map((step, idx) => {
                                        const isActive = idx === simStep;
                                        const isDone = idx < simStep;
                                        return (
                                            <div
                                                key={idx}
                                                className={`p-2.5 rounded-md border transition-all ${
                                                    isActive
                                                        ? "bg-[#DCE7F1] border-[#002f86] text-slate-900"
                                                        : isDone
                                                        ? "bg-slate-50 border-slate-200 text-slate-600"
                                                        : "bg-white border-slate-100 text-slate-400"
                                                }`}
                                            >
                                                <div className="flex items-center justify-between font-sans mb-0.5">
                                                    <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                                        {isDone ? (
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                                        ) : isActive ? (
                                                            <div className="w-2 h-2 rounded-full bg-[#002f86] animate-ping" />
                                                        ) : (
                                                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                        )}
                                                        {step.label}
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 font-medium">{step.status}</span>
                                                </div>
                                                <p className="text-[11px] text-slate-600 font-mono pl-5 mt-0.5">
                                                    {step.detail}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED RESEARCH PROJECTS */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 max-w-3xl">
                        <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold uppercase tracking-wider">
                            Applied Innovations
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            Featured Applied Projects
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        {FEATURED_PROJECTS.map((project) => {
                            return (
                                <div
                                    key={project.id}
                                    className="p-5 sm:p-6 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-[#002f86] hover:bg-[#f0f4f8] transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="px-2 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold">
                                                {project.status}
                                            </span>
                                            <span className="text-xs font-bold text-[#002f86]">{project.metrics}</span>
                                        </div>
                                        <h3 className="font-serif text-lg font-bold text-slate-900 mb-1.5">
                                            {project.name}
                                        </h3>
                                        <p className="text-slate-700 text-xs leading-relaxed mb-3 font-sans">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-0.5 rounded bg-white text-[10px] font-medium text-slate-600 border border-slate-200">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200 flex items-center justify-end">
                                        <a
                                            href="#publications"
                                            className="text-xs font-bold text-slate-700 hover:text-[#002f86] flex items-center gap-1 cursor-pointer"
                                        >
                                            <span>Repository & Specs</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* COMPUTE INFRASTRUCTURE & HARDWARE LABS */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 text-center max-w-3xl mx-auto">
                        <span className="px-2.5 py-0.5 rounded bg-white text-[#002f86] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                            Facilities & Lab Compute
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2">
                            High-Performance Compute Infrastructure
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {INFRA_STATS.map((stat, idx) => {
                            return (
                                <div key={idx} className="p-4 rounded-lg bg-white border border-slate-200 text-center shadow-sm">
                                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</h4>
                                    <p className="text-xs font-bold text-slate-900">{stat.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* RECENT PUBLICATIONS */}
            <section id="publications" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
                        <div>
                            <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold uppercase tracking-wider">
                                Publications & Papers
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                                Academic & Industry Research Outputs
                            </h2>
                        </div>
                        <Link href="/blog?category=research" className="mt-3 md:mt-0 text-xs font-bold text-[#002f86] hover:underline flex items-center gap-1">
                            <span>View All Publications</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {PUBLICATIONS.map((pub) => (
                            <div key={pub.id} className="p-5 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-slate-300 transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <span className="px-2 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold">
                                        {pub.venue}
                                    </span>
                                    <span className="text-[11px] text-slate-500 font-mono">{pub.year} • {pub.topic}</span>
                                </div>
                                <h3 className="font-serif text-base font-bold text-slate-900 mb-1 hover:text-[#002f86] transition-colors">
                                    <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer">
                                        {pub.title}
                                    </a>
                                </h3>
                                <p className="text-xs text-slate-600 mb-1.5 font-medium">
                                    Authors: {pub.authors}
                                </p>
                                <p className="text-xs text-slate-700 leading-relaxed mb-2.5 font-sans">
                                    {pub.abstract}
                                </p>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={pub.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-[#002f86] hover:underline"
                                    >
                                        Download PDF
                                    </a>
                                    <a
                                        href={pub.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer hover:underline"
                                    >
                                        <Copy className="w-3 h-3" />
                                        <span>Cite Paper</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION / COLLABORATE SECTION */}
            <section id="collaborate" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-12">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-8 sm:p-12 text-center relative overflow-hidden">
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#002f86] mb-3">
                        Join the Frontier of Applied AI Research
                    </h2>
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                        Partner with CAAI to deploy sovereign agentic frameworks, co-sponsor PhD fellowship grants, or build deep tech innovations with our research labs.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/apply?type=fellowship&domain=AI"
                            className="px-6 py-3 rounded-lg bg-[#002f86] hover:bg-[#002266] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                        >
                            Apply for Research Fellowship
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#002f86] font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all"
                        >
                            Enterprise Partnership Inquiry
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
