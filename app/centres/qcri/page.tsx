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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
                            Quantum Computing Research Initiative (QCRI)
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                            Exploring quantum entanglement simulation, algorithmic speedups, and industrial optimization.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
                            The Quantum Computing Research Initiative (QCRI) at The Foundry leads foundational investigations into quantum algorithms, superconducting architectures, fault-tolerant error correction, and quantum-classical hybrid solvers to transform global industry.
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
                                <span>Partner with QCRI</span>
                            </a>
                        </div>
                    </div>

                    {/* Metric Stats Cards in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#b8d1ea]">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">128+ Qubits</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Simulated Volume</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">35+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Peer-Reviewed Papers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">99.8%</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Gate Fidelity</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">$18M+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Cryogenic Infrastructure</p>
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
                            Our institute centers its quantum investigations around the four core pillars of The Foundry.
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
                                QCRI Technical Quantum Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical quantum architecture paper detailing quantum gate sequences, Hamiltonian simulation algorithms, and VQE convergence benchmarks for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-xl bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900">Spec Details:</p>
                                <p>• Publication ID: QCRI-SPEC-2026-08</p>
                                <p>• Format: Physical Review / Quantum PDF</p>
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

            {/* INTERACTIVE QUANTUM CIRCUIT & ENTANGLEMENT SIMULATOR */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5">
                            <span className="px-2.5 py-0.5 rounded bg-white text-[#002f86] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2 mb-3">
                                Quantum Circuit Simulator
                            </h2>
                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                Experience how QCRI&apos;s quantum-classical architecture initializes cryogenic qubits, executes Hadamard superposition and CNOT entanglement, and solves VQE Hamiltonians with quantum speedups.
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
                                <span>{isSimulating ? "Simulating Quantum Gates..." : "Simulate Quantum Circuit"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#002f86]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">qcri-quantum-runtime v3.1</span>
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
                            Applied Quantum Innovations
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            Featured Quantum Projects
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
                            Cryogenic Facilities & Lab Hardware
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2">
                            Quantum Compute Infrastructure
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
                                Quantum Publications & Papers
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                                Academic & Industry Quantum Outputs
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
                        Join the Frontier of Quantum Research
                    </h2>
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                        Partner with QCRI to build quantum-classical algorithms, co-sponsor quantum research grants, or benchmark industrial solvers on cryogenic hardware.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/apply?type=fellowship&domain=Quantum%20Computing"
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
