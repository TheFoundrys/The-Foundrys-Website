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
    FileText,
    Plus,
    Minus,
    ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Quantum Research Pillars Data - Aligned with The Foundry's 4 Core Pillars
const RESEARCH_PILLARS = [
    {
        id: "deep-tech",
        title: "Deep Tech & Quantum Intelligence",
        shortDesc: "Quantum algorithms, variational quantum eigensolvers, and multi-qubit entanglement simulation.",
        badge: "Pillar 01",
        fullDesc: "Our Quantum Intelligence lab pioneers quantum-classical hybrid algorithms, Quantum Approximate Optimization Algorithms (QAOA), and fault-tolerant quantum error correction to achieve quadratic and exponential speedups over classical supercomputers.",
        highlights: [
            "Superconducting Qubit & Trapped-Ion Circuit Architectures",
            "Variational Quantum Eigensolver (VQE) Molecular Simulation",
            "Post-Quantum Cryptography & Lattice-Based Key Exchange",
            "Quantum Machine Learning (QML) & Neural Quantum States"
        ],
        stats: { metrics: "128+", label: "Simulated Qubit Capacity" },
        specPaper: {
            title: "Technical Spec Paper 01: Sub-Quadratic Quantum Entanglement Simulation",
            downloadUrl: "https://ieeexplore.ieee.org/document/11525967"
        }
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Quantum Venture",
        shortDesc: "Translating quantum speedups into commercial financial, logistics, and industrial software.",
        badge: "Pillar 02",
        fullDesc: "Bridging quantum physics with commercial enterprise software. We develop quantum portfolio optimization models, supply chain routing solvers, and commercial QPU translation SDKs for global industry leaders.",
        highlights: [
            "Commercial Quantum Software & QPU SDK Translation",
            "Quantum Portfolio Risk & Option Pricing Solvers",
            "Logistics & Combinatorial Optimization (QAOA)",
            "Enterprise Quantum Readiness & Patent Portfolios"
        ],
        stats: { metrics: "99.8%", label: "Quantum Gate Fidelity" },
        specPaper: {
            title: "Technical Spec Paper 02: Enterprise Quantum Portfolio Optimization Solvers",
            downloadUrl: "https://ieeexplore.ieee.org/document/11526131"
        }
    },
    {
        id: "sustainability",
        title: "Sustainability & Quantum Chemistry",
        shortDesc: "Simulating molecular catalysts, carbon capture reactions, and battery informatics.",
        badge: "Pillar 03",
        fullDesc: "Solving the chemistry of planetary sustainability. By simulating complex electron correlation in molecules beyond classical limits, we accelerate the discovery of nitrogen-fixation catalysts and high-capacity solid-state batteries.",
        highlights: [
            "Macromolecular Electronic Structure Quantum Simulation",
            "Direct Carbon Capture Chemical Reaction Modeling",
            "Solid-State Electrolyte & Battery Chemistry Informatics",
            "Zero-Emission Catalyst Synthesis Algorithms"
        ],
        stats: { metrics: "100%", label: "Verifiable Quantum Accuracy" },
        specPaper: {
            title: "Technical Spec Paper 03: Quantum Chemical Solvers for Carbon Fixation Catalysts",
            downloadUrl: "https://ieeexplore.ieee.org/document/11040757"
        }
    },
    {
        id: "energy",
        title: "Renewable Energy & Power Systems",
        shortDesc: "Quantum grid routing, high-voltage power flow solvers, and energy storage optimization.",
        badge: "Pillar 04",
        fullDesc: "Optimizing the power distribution grid at quantum scale. We implement quantum annealing and tensor network algorithms to solve ultra-high dimension power routing, microgrid stability, and renewable energy dispatch.",
        highlights: [
            "Quantum Annealing for Ultra-Large Grid Dispatch",
            "Sub-Millisecond Power Flow Tensor Network Solvers",
            "Microgrid Dynamic Frequency Stability Algorithms",
            "Renewable Storage Capacity Quantum Allocation"
        ],
        stats: { metrics: "< 2ms", label: "Quantum Grid Solve Latency" },
        specPaper: {
            title: "Technical Spec Paper 04: Quantum Tensor Network Algorithms for Sovereign Grids",
            downloadUrl: "https://ieeexplore.ieee.org/document/11525967"
        }
    }
];

// Featured Quantum Projects Data
const FEATURED_PROJECTS = [
    {
        id: "q-entangle",
        name: "Project Q-Entangle",
        category: "Quantum Algorithms",
        status: "Live Beta",
        desc: "High-fidelity 128-qubit quantum circuit simulator utilizing GPU-accelerated tensor networks for multi-qubit entanglement verification.",
        tags: ["Tensor Networks", "Quantum Circuit", "Entanglement", "GPU Acceleration"],
        metrics: "128-Qubit State Space"
    },
    {
        id: "quantumvqe",
        name: "QuantumVQE Chemical Core",
        category: "Quantum Chemistry",
        status: "In Production",
        desc: "Variational Quantum Eigensolver engine calculating ground-state molecular energies for novel battery electrolytes with chemical precision.",
        tags: ["VQE Solvers", "Quantum Chemistry", "Battery Informatics", "Qiskit Integration"],
        metrics: "10^-5 Hartree Precision"
    },
    {
        id: "q-optimizer",
        name: "Q-Optimizer Logistics Engine",
        category: "Industrial Solvers",
        status: "Research Paper",
        desc: "Quantum Approximate Optimization Algorithm (QAOA) suite delivering 14x faster solving times for NP-hard global fleet routing problems.",
        tags: ["QAOA Solvers", "Combinatorial Math", "Fleet Routing", "QPU Solvers"],
        metrics: "14x Faster Route Solve"
    },
    {
        id: "q-crypto",
        name: "Q-Crypto Lattice Suite",
        category: "Quantum Defense",
        status: "Grant Project",
        desc: "Post-quantum cryptographic key distribution framework resilient against Shor's algorithm, verified against quantum adversary simulations.",
        tags: ["Post-Quantum Crypto", "Lattice Cryptography", "Cyber Defense"],
        metrics: "NIST Level 5 Quantum Safe"
    }
];

// Research Publications Data
const PUBLICATIONS = [
    {
        id: "pub-1",
        title: "A Multi-Agent Quantum Chain of Thought Reasoning and Accuracy Accelerators Framework",
        venue: "IEEE Xplore 2025",
        authors: "The Foundry Quantum Research Team",
        year: "2025",
        pdfLink: "https://ieeexplore.ieee.org/document/11525967",
        topic: "Quantum Reasoning & Algorithms",
        citation: "@article{quantumchainofthought2025, title={A Multi-Agent Quantum Chain of Thought Reasoning Framework}, author={The Foundry Quantum Lab}, journal={IEEE Xplore}, year={2025}}",
        abstract: "A novel multiagent quantum-classical hybrid architecture that significantly outperforms existing machine learning and LLM-based approaches in complex reasoning tasks."
    },
    {
        id: "pub-2",
        title: "Quantum-Enhanced Tax Revenue via A-Challan: ML, LLMs, and QML Approaches",
        venue: "IEEE Xplore 2025",
        authors: "The Foundry Quantum Research Team",
        year: "2025",
        pdfLink: "https://ieeexplore.ieee.org/document/11526131",
        topic: "QML & Industrial Solvers",
        citation: "@article{quantumenthancedtax2025, title={Quantum-Enhanced Tax Revenue via A-Challan}, author={The Foundry Quantum Lab}, journal={IEEE Xplore}, year={2025}}",
        abstract: "Integrating machine learning, LLM reasoning, and Quantum Machine Learning algorithms to optimize tax compliance and detect financial fraud."
    },
    {
        id: "pub-3",
        title: "Hybrid Q-Learning with VLMs Reasoning Features",
        venue: "IEEE Xplore 2025",
        authors: "The Foundry Quantum Research Team",
        year: "2025",
        pdfLink: "https://ieeexplore.ieee.org/document/11040757",
        topic: "Quantum Reinforcement Learning",
        citation: "@article{hybridqlearning2025, title={Hybrid Q-Learning with VLMs Reasoning Features}, author={The Foundry Quantum Lab}, journal={IEEE Xplore}, year={2025}}",
        abstract: "Enhancing reinforcement learning Q-agents with zero-shot semantic features extracted from Vision Language Models for faster state space convergence."
    }
];

// Compute & Lab Stats
const INFRA_STATS = [
    { label: "Dilution Refrigerator Systems", value: "Cryogenic mK Superconducting Testbeds" },
    { label: "Simulated Quantum Volume", value: "128+ High-Fidelity Entangled Qubits" },
    { label: "Quantum Classical Fabric", value: "Hybrid QPU-GPU InfiniBand Interconnect" },
    { label: "Active Quantum Researchers", value: "35+ Physicists & Algorithm Engineers" }
];

export default function QCRIResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

    // Interactive Quantum Circuit Simulator steps
    const simSteps = [
        { label: "Qubit Initialization", status: "Setting ground state |00...0>...", detail: "Initialized 16 superconducting qubits in mK cryogenic vacuum" },
        { label: "Hadamard Gate Superposition", status: "Applying H-gates in parallel...", detail: "Created equal superposition state across all 16 qubit channels" },
        { label: "Entangled CNOT Gate Execution", status: "Coupling adjacent qubit pairs...", detail: "Generated maximally entangled Bell pairs with 99.8% two-qubit gate fidelity" },
        { label: "Phase Estimation & VQE Solver", status: "Running variational quantum loop...", detail: "Executed 500 classical optimization steps; energy converged within 10^-5 Hartree" },
        { label: "Measurement & Quantum Speedup", status: "Collapsing wave function...", detail: "Extracted ground-state eigenvector with 14x algorithmic speedup over classical solver" }
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

            {/* Banner Image Section matching Entry-Level / Program pages */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <Image
                    src="/images/qcri_centre_banner.jpg"
                    alt="Quantum Computing Research Initiative"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-8xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                            Quantum Computing Research Initiative (QCRI)
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
                        The Quantum Computing Research Initiative (QCRI) at The Foundry investigates quantum entanglement, variational eigensolvers, and quantum-classical hybrid architectures to achieve exponential computational speedups in chemistry, finance, and industrial optimization.
                    </p>

                    {/* Metric Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">128+ Qubits</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">State Space Volume</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">35+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Peer-Reviewed Papers</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">99.8%</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">2-Qubit Gate Fidelity</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">$8M+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Cryogenic Labs</p>
                        </div>
                    </div>
                </section>

                {/* Core Research Pillars - Row Layout matching Program Rows */}
                <section className="text-slate-800 border-t border-slate-200/50" id="pillars">
                    <div className="p-8 sm:p-12 md:p-16 pb-4 bg-[#F7F7F4]">
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-2">
                            Core Quantum Research Pillars
                        </h2>
                        <p className="text-sm text-slate-600 max-w-3xl">
                            Our institute centers its quantum investigations around the four core pillars of The Foundry.
                        </p>
                    </div>

                    {RESEARCH_PILLARS.map((pillar, idx) => (
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
                                        <button
                                            onClick={() => setActiveSpecModal(pillar.id)}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#002f86] hover:bg-[#002266] text-white rounded-lg font-bold text-sm transition-all shadow-sm cursor-pointer"
                                        >
                                            <FileText size={16} />
                                            <span>Technical Quantum Spec</span>
                                        </button>
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

                {/* Interactive Quantum Circuit Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Quantum Circuit Simulator
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how QCRI&apos;s quantum algorithms initialize qubits, generate Hadamard superposition states, execute entangled CNOT gates, and run VQE eigensolvers.
                            </p>
                            
                            <button
                                onClick={runSimulation}
                                disabled={isSimulating}
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-all shadow-md cursor-pointer ${
                                    isSimulating
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : "bg-[#002f86] hover:bg-[#002266]"
                                }`}
                            >
                                <PlayCircle className="w-4 h-4" />
                                <span>{isSimulating ? "Simulating Quantum Circuit..." : "Simulate Quantum Circuit"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">qcri-qiskit-runtime v3.2</span>
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
                                                className={`p-3 rounded-md border transition-all ${
                                                    isActive
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

                {/* Featured Quantum Innovations */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-8">
                        Featured Quantum Innovations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FEATURED_PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                className="p-6 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-[#002f86] transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold font-mono">
                                            {project.status}
                                        </span>
                                        <span className="text-xs font-bold text-[#002f86]">{project.metrics}</span>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-2.5 py-0.5 rounded bg-white text-[11px] font-medium text-slate-600 border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-3 border-t border-slate-200 flex items-center justify-end">
                                    <a
                                        href="#publications"
                                        className="text-xs font-bold text-[#002f86] hover:underline flex items-center gap-1"
                                    >
                                        <span>View Quantum Specs</span>
                                        <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dilution Refrigerator & Quantum Cryo Labs */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-8">
                        Cryogenic & Quantum Hardware Labs
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {INFRA_STATS.map((stat, idx) => (
                            <div key={idx} className="p-6 rounded-lg bg-white border border-slate-200 text-center shadow-sm">
                                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">{stat.label}</h4>
                                <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publications & Papers Section */}
                <section id="publications" className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                IEEE Peer-Reviewed Quantum Publications
                            </h2>
                            <p className="text-sm text-slate-600 mt-2">
                                Scientific outputs published in top international physics, quantum computing, and IEEE venues.
                            </p>
                        </div>
                        <Link href="/blog?category=research" className="mt-4 md:mt-0 text-sm font-bold text-[#002f86] hover:underline flex items-center gap-1">
                            <span>View All Publications</span>
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {PUBLICATIONS.map((pub) => (
                            <div key={pub.id} className="p-6 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-slate-300 transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold font-mono">
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

            {/* FAQ Section matching Entry-Level Program Page */}
            <section className="py-16 px-6 bg-white border-t border-b border-slate-200/60">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002f86] mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about QCRI research fellowships, quantum grants, and cryogenic labs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is QCRI's primary research focus?">
                                QCRI conducts quantum research across 4 core pillars: Deep Tech & Quantum Intelligence, Entrepreneurship & Quantum Venture, Sustainability & Quantum Chemistry, and Renewable Energy & Power Systems.
                            </FAQItem>
                            <FAQItem question="Do researchers get access to QPU hardware?">
                                Yes. Researchers access hybrid QPU-GPU quantum testbeds, IBM Quantum systems, and Qiskit tensor network simulators.
                            </FAQItem>
                            <FAQItem question="Are QCRI publications open access?">
                                Yes. All quantum scientific outputs are published in peer-reviewed IEEE venues and open-access research spec whitepapers.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="How do enterprise partnerships work at QCRI?">
                                Enterprise partners collaborate with QCRI to develop quantum portfolio optimization models, QAOA logistics solvers, and molecular chemistry simulation algorithms.
                            </FAQItem>
                            <FAQItem question="Can startups incubate quantum algorithms at QCRI?">
                                Yes. Through Pillar 02 (Quantum Venture), early-stage deep tech startups receive QPU compute access, physics mentorship, and IP incubation support.
                            </FAQItem>
                            <FAQItem question="What background is required for QCRI Fellowships?">
                                Candidates with backgrounds in Physics, Computer Science, Mathematics, or Electrical Engineering can apply for doctoral and postdoc fellowships.
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
                                QCRI Technical Quantum Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical quantum whitepaper covering algorithm methodology, QPU gate fidelity, and variational eigensolver specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900 font-sans">Spec Details:</p>
                                <p>• Publication ID: QCRI-SPEC-2026-01</p>
                                <p>• Format: IEEE Xplore / Quantum PDF</p>
                                <p>• Status: Peer Reviewed & Verified</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={activePillarObj.specPaper.downloadUrl}
                                    target={activePillarObj.specPaper.downloadUrl.startsWith("http") ? "_blank" : undefined}
                                    rel={activePillarObj.specPaper.downloadUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-3 px-4 rounded-lg bg-[#002f86] hover:bg-[#002266] text-white text-center font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <ExternalLink size={14} />
                                    <span>Read Full Research Paper (IEEE Xplore)</span>
                                </a>
                                <a
                                    href="#publications"
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-center font-bold text-xs transition-all block cursor-pointer"
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
