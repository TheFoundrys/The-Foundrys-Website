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
    ExternalLink,
    Atom,
    Cpu,
    Server,
    Sparkles,
    Layers,
    ShieldCheck,
    Zap,
    Rocket,
    Leaf,
    Activity,
    Code2,
    CircuitBoard
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Quantum Research Pillars Data - Specialized 4 Quantum Pillars
const RESEARCH_PILLARS = [
    {
        id: "quantum-algos",
        title: "Quantum Algorithms & Variational Solvers",
        shortDesc: "Quantum Approximate Optimization Algorithms (QAOA), VQE, and circuit compilation.",
        badge: "Pillar 01",
        icon: Atom,
        accentColor: "from-[#002f86] to-cyan-600",
        fullDesc: "Our Quantum Intelligence lab pioneers quantum-classical hybrid algorithms, Quantum Approximate Optimization Algorithms (QAOA), and fault-tolerant quantum error correction to achieve quadratic and exponential speedups over classical supercomputers.",
        highlights: [
            "Superconducting Qubit & Trapped-Ion Circuit Architectures",
            "Variational Quantum Eigensolver (VQE) Molecular Simulation",
            "Post-Quantum Cryptography & Lattice-Based Key Exchange",
            "Quantum Approximate Optimization (QAOA) Graph Solvers"
        ],
        stats: { metrics: "128+", label: "Simulated Qubit Capacity" },
        specPaper: {
            title: "Technical Spec Paper 01: Sub-Quadratic Quantum Entanglement Simulation",
            downloadUrl: "https://ieeexplore.ieee.org/document/11525967"
        }
    },
    {
        id: "cryo-hardware",
        title: "Cryogenic QPU & Error Mitigation",
        shortDesc: "Superconducting qubits, mK dilution systems, and surface code error mitigation.",
        badge: "Pillar 02",
        icon: CircuitBoard,
        accentColor: "from-cyan-600 to-blue-700",
        fullDesc: "Engineering sub-kelvin cryogenic testbeds for quantum processing units (QPUs). We develop microwave pulse shaping, active thermal isolation, and Zero-Noise Extrapolation (ZNE) error mitigation techniques.",
        highlights: [
            "mK Dilution Refrigerator Cryogenic Testbeds",
            "Zero-Noise Extrapolation (ZNE) Error Mitigation",
            "Microwave Pulse Shaping & Active Gate Calibration",
            "Surface Code Fault-Tolerant Logical Qubit Design"
        ],
        stats: { metrics: "99.8%", label: "Two-Qubit Gate Fidelity" },
        specPaper: {
            title: "Technical Spec Paper 02: Zero-Noise Extrapolation in Superconducting QPU Arrays",
            downloadUrl: "https://ieeexplore.ieee.org/document/11526131"
        }
    },
    {
        id: "quantum-ml",
        title: "Quantum Machine Learning & Neural States",
        shortDesc: "Parameterized quantum circuits, quantum neural networks, and Q-learning accelerators.",
        badge: "Pillar 03",
        icon: Cpu,
        accentColor: "from-indigo-600 to-purple-600",
        fullDesc: "Blending quantum mechanics with deep neural networks. We construct Parameterized Quantum Circuits (PQCs), Quantum Neural States (QNS), and hybrid Q-learning reinforcement agents for high-dimensional data.",
        highlights: [
            "Parameterized Quantum Circuits (PQC) for Deep Learning",
            "Hybrid Q-Learning with Vision-Language Semantic Vectors",
            "Quantum Kernel Methods for High-Dimensional Classification",
            "Quantum Convolutional Neural Networks (QCNN)"
        ],
        stats: { metrics: "1,200x", label: "State Convergence Speedup" },
        specPaper: {
            title: "Technical Spec Paper 03: Hybrid Q-Learning with VLMs Reasoning Features",
            downloadUrl: "https://ieeexplore.ieee.org/document/11040757"
        }
    },
    {
        id: "quantum-chemistry",
        title: "Quantum Chemistry & Molecular Simulation",
        shortDesc: "Simulating macromolecular electronic correlation, carbon capture catalysts, and battery materials.",
        badge: "Pillar 04",
        icon: Sparkles,
        accentColor: "from-purple-600 to-indigo-800",
        fullDesc: "Solving complex chemical systems beyond classical limits. By accurately calculating electron correlation in macromolecular structures, we accelerate catalyst discovery for nitrogen-fixation and solid-state batteries.",
        highlights: [
            "Macromolecular Electronic Structure Quantum Simulation",
            "Direct Carbon Capture Chemical Reaction Modeling",
            "Solid-State Electrolyte & Battery Chemistry Informatics",
            "Zero-Emission Catalyst Synthesis Algorithms"
        ],
        stats: { metrics: "100%", label: "Verifiable Quantum Accuracy" },
        specPaper: {
            title: "Technical Spec Paper 04: Quantum Chemical Solvers for Carbon Fixation Catalysts",
            downloadUrl: "https://ieeexplore.ieee.org/document/11040757"
        }
    }
];

// Quantum Architecture Stack Layers
const QUANTUM_STACK_LAYERS = [
    {
        num: "01",
        name: "Variational Circuit Ingestion",
        desc: "QAOA, VQE, & Quantum Gate Circuit Compilation & Pulse Shaping",
        icon: Atom,
        badge: "Circuit Compiler"
    },
    {
        num: "02",
        name: "Cryogenic Hardware Layer",
        desc: "Dilution Refrigeration (mK), Superconducting Qubits & Microwave Control",
        icon: CircuitBoard,
        badge: "mK Cryo QPU"
    },
    {
        num: "03",
        name: "Tensor Network Emulator",
        desc: "128+ Qubit High-Fidelity Entanglement & Quantum Error Mitigation",
        icon: Layers,
        badge: "Tensor Network"
    },
    {
        num: "04",
        name: "Hybrid QPU-GPU Edge API",
        desc: "Sub-Millisecond Portfolio Risk, Logistics Solvers & Grid Optimization",
        icon: Server,
        badge: "Hybrid QPU API"
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



export default function QCRIResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

    // Interactive Quantum Circuit Simulator steps
    const simSteps = [
        { label: "Quantum Gate Initialization", status: "Initializing Hadamard & CNOT gates...", detail: "Prepared 32-qubit entangled Bell State register in cryogenic testbed" },
        { label: "VQE Hamiltonian Compilation", status: "Compiling molecular Hamiltonian...", detail: "Mapped nitrogen-fixation catalyst electron correlation matrix to Pauli spin operators" },
        { label: "Quantum Error Mitigation", status: "Applying Zero-Noise Extrapolation (ZNE)...", detail: "Mitigated thermal decoherence; achieved 99.8% two-qubit gate fidelity" },
        { label: "Variational Execution Loop", status: "Executing classical-quantum hybrid optimizer...", detail: "Converged ground state energy eigenvalue in 42 hybrid iteration cycles" },
        { label: "Quantum State Readout", status: "Quantum Supremacy Verified!", detail: "Extracted exact catalyst ground state with 1,200x speedup over classical ECP" }
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
        <main className="min-h-screen font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Banner Image Section with Visual Glass Badges */}
            <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden mt-16">
                <Image
                    src="/images/qcri_centre_banner.jpg"
                    alt="Quantum Computing Research Initiative"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-7xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
                            Quantum Computing Research Initiative (QCRI)
                        </h1>
                        <p className="text-slate-200 text-sm md:text-base mt-3 max-w-2xl font-light">
                            Pioneering quantum entanglement simulation, variational eigensolvers, quantum machine learning, and post-quantum key exchange.
                        </p>

                        {/* Quick Anchor Badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            <a href="#pillars" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Quantum Pillars
                            </a>
                            <a href="#architecture" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Quantum Stack
                            </a>
                            <a href="#simulator" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Quantum Simulator
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 text-[#002f86] text-xs font-bold font-mono mb-3">
                                ⚛️ Quantum Advantage & Speedups
                            </div>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Unlocking Exponential Compute Beyond Classical Limits
                            </h2>
                            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
                                The Quantum Computing Research Initiative (QCRI) at The Foundry explores quantum entanglement simulation, algorithmic speedups, variational eigensolvers, and industrial optimization to redefine computational feasibility.
                            </p>
                        </div>

                        {/* Visual Research Image */}
                        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[320px] rounded-lg overflow-hidden border border-slate-200/80 shadow-lg">
                            <Image
                                src="/images/qcri_research_lab.jpg"
                                alt="Quantum Computing Research Initiative Laboratory"
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
                                QUANTUM RESEARCH MATRIX
                            </span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Core Quantum Research Pillars
                            </h2>
                        </div>
                        <p className="text-xs text-slate-500 max-w-md mt-2 md:mt-0 font-medium">
                            Select a quantum research pillar to explore specialized quantum labs, algorithm highlights, and technical whitepapers.
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
                                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#002f86] text-[10px] font-bold font-mono">
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
                                            <span>Read Technical Quantum Spec</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Graphic Card Preview */}
                                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#001f5c] to-slate-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden font-mono text-xs">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <Atom size={160} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-sans">
                                            <span className="text-cyan-300 font-bold text-xs">SPEC PAPER PREVIEW</span>
                                            <span className="text-slate-400 text-[10px]">IEEE XPLORE VERIFIED</span>
                                        </div>
                                        <p className="text-white font-serif text-base font-bold mb-3 leading-snug">
                                            {activePillarObj.specPaper.title}
                                        </p>
                                        <p className="text-slate-300 text-xs font-sans leading-relaxed mb-6">
                                            Detailed quantum gate matrix algorithms, tensor network benchmarks, and error mitigation proofs.
                                        </p>

                                        <a
                                            href={activePillarObj.specPaper.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#002f86] rounded-lg font-bold text-xs hover:bg-cyan-50 transition-colors cursor-pointer"
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

                {/* Quantum Security Architecture Stack Diagram Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50" id="architecture">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] font-mono block mb-2">
                            SYSTEM ARCHITECTURE
                        </span>
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-3">
                            The Quantum-Classical Hybrid Stack
                        </h2>
                        <p className="text-sm text-slate-600">
                            Our four-tier architecture powering variational quantum solvers and hybrid supercomputing engines.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {QUANTUM_STACK_LAYERS.map((layer, idx) => {
                            const LayerIcon = layer.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#F7F7F4] border border-slate-200/80 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-300 relative group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold text-slate-400">{layer.num}</span>
                                            <span className="px-2 py-0.5 rounded bg-cyan-100 text-[#002f86] text-[10px] font-bold font-mono">
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
                                        <span>Verified Execution</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Interactive Quantum Circuit Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50" id="simulator">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Autonomous Quantum Circuit Simulator
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how QCRI&apos;s quantum-classical hybrid engine initializes entangled Bell State registers, applies Zero-Noise Extrapolation (ZNE), runs VQE Hamiltonian optimization, and reads out ground states.
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
                                <span>{isSimulating ? "Simulating Quantum Circuit..." : "Simulate Quantum Execution"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 bg-white border border-slate-200/80 font-mono text-xs rounded-2xl shadow-md">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#002f86]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">qcri-qpu-runtime v3.1</span>
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
                                IEEE & QUANTUM JOURNALS
                            </span>
                            <h2 className="font-serif text-3xl font-bold text-[#002f86]">
                                Research Publications
                            </h2>
                        </div>
                        <Link href="/blog?category=research" className="mt-4 md:mt-0 text-sm font-bold text-[#002f86] hover:underline flex items-center gap-1">
                            <span>View All Publications</span>
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
                        <p className="text-lg text-slate-600">Common queries about QCRI research fellowships, quantum testbeds, and QPU SDK access.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is QCRI's primary research focus?">
                                QCRI conducts research across 4 specialized quantum pillars: Quantum Algorithms & Variational Solvers, Cryogenic QPU & Error Mitigation, Quantum Machine Learning & Neural States, and Quantum Chemistry & Molecular Simulation.
                            </FAQItem>
                            <FAQItem question="How can researchers apply for Quantum Fellowships?">
                                Quantum physicists, algorithm engineers, and doctoral fellows can apply for research fellowships through our open application calls or sponsored quantum grants.
                            </FAQItem>
                            <FAQItem question="Can enterprises request quantum portfolio optimization solvers?">
                                Yes. Enterprises partner with QCRI to develop custom QAOA and VQE algorithms for portfolio risk, supply chain logistics, and material simulation.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="What hardware powers the QCRI Quantum Testbed?">
                                QCRI operates dilution refrigerator systems providing millikelvin (mK) cryogenic testbeds for superconducting qubits and high-fidelity 128+ qubit entanglement simulators.
                            </FAQItem>
                            <FAQItem question="Are QCRI research publications open access?">
                                Yes. All research outputs produced by QCRI are published in peer-reviewed IEEE venues and open-access quantum whitepapers.
                            </FAQItem>
                            <FAQItem question="How does QCRI support quantum tech startups?">
                                Through Pillar 02 (Cryogenic QPU), early-stage quantum startups receive QPU simulator access, algorithm auditing, and incubation support.
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
                                Detailed technical quantum whitepaper covering gate matrix compilation, error mitigation, and quantum speedup proofs for {activePillarObj.title}.
                            </p>

                            <div className="p-4 bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
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
