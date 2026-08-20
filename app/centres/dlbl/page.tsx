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

// Distributed Ledger Research Pillars Data - Aligned with The Foundry's 4 Core Pillars
const RESEARCH_PILLARS = [
    {
        id: "deep-tech",
        title: "Deep Tech & Distributed Intelligence",
        shortDesc: "High-throughput consensus protocols, Zero-Knowledge Proofs (ZKP), and EVM optimization.",
        badge: "Pillar 01",
        fullDesc: "Our Distributed Intelligence lab investigates sub-second consensus algorithms, Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (zk-SNARKs), and parallel EVM execution environments to scale blockchain infrastructure.",
        highlights: [
            "zk-SNARKs & Zero-Knowledge Rollup Scalability",
            "Parallel EVM Execution & Bytecode Optimization",
            "Formally Verified Smart Contract Bytecode Analyzers",
            "Sub-Second Finality BFT Consensus Algorithms"
        ],
        stats: { metrics: "15,000+", label: "Transactions/Sec (TPS)" },
        specPaper: {
            title: "Technical Spec Paper 01: Sub-Second BFT Consensus & Parallel EVM Execution",
            downloadUrl: "https://ieeexplore.ieee.org/document/11526131"
        }
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Decentralized Venture",
        shortDesc: "Commercial tokenomics design, DAO governance, and sovereign settlement engines.",
        badge: "Pillar 02",
        fullDesc: "Translating decentralized protocols into commercial enterprise vehicles. We build sovereign asset tokenization frameworks, decentralized finance (DeFi) risk analytics, and enterprise settlement infrastructure for global markets.",
        highlights: [
            "Commercial Asset Tokenization & Smart Settlement Engines",
            "Decentralized Autonomous Organization (DAO) Governance",
            "DeFi Risk Modeling & Algorithmic Stability Protocols",
            "Sovereign Institutional Key Management Infrastructure"
        ],
        stats: { metrics: "99.99%", label: "Ledger Network Reliability" },
        specPaper: {
            title: "Technical Spec Paper 02: Sovereign Institutional Settlement Infrastructure",
            downloadUrl: "https://ieeexplore.ieee.org/document/10456393"
        }
    },
    {
        id: "sustainability",
        title: "Sustainability & Green Blockchain",
        shortDesc: "Proof-of-Stake eco-efficiency, carbon offset ledgers, and supply chain transparency.",
        badge: "Pillar 03",
        fullDesc: "Engineering eco-friendly distributed ledgers. We implement energy-efficient Proof-of-Stake consensus mechanisms, immutable carbon offset tracking ledgers, and end-to-end sustainable supply chain provenance systems.",
        highlights: [
            "Energy-Efficient Proof-of-Stake (PoS) Protocol Design",
            "Immutable Carbon Credit & Offset Tracking Ledgers",
            "Sustainable Supply Chain Material Provenance Tracking",
            "Zero-Emission Distributed Validator Node Operations"
        ],
        stats: { metrics: "99.9%", label: "Energy Reduction vs PoW" },
        specPaper: {
            title: "Technical Spec Paper 03: Immutable Carbon Credit Provenance via PoS Ledgers",
            downloadUrl: "https://ieeexplore.ieee.org/document/11429262"
        }
    },
    {
        id: "energy",
        title: "Renewable Energy & Smart Grid Settlement",
        shortDesc: "Peer-to-peer energy trading ledgers, microgrid renewable credit oracles, and smart meters.",
        badge: "Pillar 04",
        fullDesc: "Powering decentralized energy economies. We engineer real-time peer-to-peer energy trading contracts, cryptographic oracle networks for solar/wind microgrids, and automated power settlement ledgers.",
        highlights: [
            "Peer-to-Peer Microgrid Renewable Energy Trading",
            "Cryptographic Oracle Integration for Solar/Wind Production",
            "Automated Smart Contract Power Billing & Credit Settlement",
            "Submetering Cryptographic Proofs of Clean Power Origin"
        ],
        stats: { metrics: "< 3ms", label: "Oracle Telemetry Settlement" },
        specPaper: {
            title: "Technical Spec Paper 04: Cryptographic Microgrid Energy Oracles & P2P Trading",
            downloadUrl: "https://ieeexplore.ieee.org/document/11526131"
        }
    }
];

// Featured Blockchain Projects Data
const FEATURED_PROJECTS = [
    {
        id: "trustledger",
        name: "Project TrustLedger",
        category: "ZKP Scalability",
        status: "Live Beta",
        desc: "Zero-Knowledge Rollup framework providing private, sub-second transaction batching with L1 Ethereum security guarantees.",
        tags: ["Zero-Knowledge Proofs", "zk-SNARKs", "L2 Rollup", "EVM Compatible"],
        metrics: "15,000+ Scaled TPS"
    },
    {
        id: "smartaudit",
        name: "SmartAudit Engine",
        category: "Smart Contract Verification",
        status: "In Production",
        desc: "Automated formal verification tool static-analyzing smart contract bytecode to eliminate reentrancy and integer overflow exploits.",
        tags: ["Formal Verification", "Bytecode Audit", "Solidity Security"],
        metrics: "0 Exploit Vulnerabilities"
    },
    {
        id: "gridchallan-ledger",
        name: "A-Challan Tax & Energy Ledger",
        category: "Government & Grid",
        status: "Research Paper",
        desc: "Decentralized ledger system integrating ML, LLMs, and QML to audit tax revenues and clear microgrid energy credits.",
        tags: ["A-Challan Tax", "QML Integration", "Microgrid Settlement"],
        metrics: "IEEE Verified Framework"
    },
    {
        id: "sovereignid",
        name: "SovereignID Infrastructure",
        category: "Decentralized Identity",
        status: "Grant Project",
        desc: "Self-sovereign identity protocol allowing users to control verifiable credentials without centralized identity providers.",
        tags: ["Self-Sovereign ID", "Verifiable Credentials", "W3C Standard"],
        metrics: "W3C Compliant Standard"
    }
];

// Research Publications Data - Official IEEE Papers from The Foundry
const PUBLICATIONS = [
    {
        id: "pub-1",
        title: "Quantum-Enhanced Tax Revenue via A-Challan: ML, LLMs, and QML Approaches",
        venue: "IEEE Xplore 2025",
        authors: "The Foundry Distributed Ledger Team",
        year: "2025",
        pdfLink: "https://ieeexplore.ieee.org/document/11526131",
        topic: "Ledger Settlement & QML",
        citation: "@article{quantumenthancedtax2025, title={Quantum-Enhanced Tax Revenue via A-Challan}, author={The Foundry DLBL Lab}, journal={IEEE Xplore}, year={2025}}",
        abstract: "Integrating machine learning, LLM reasoning, and Quantum Machine Learning algorithms to optimize tax compliance and detect financial fraud."
    },
    {
        id: "pub-2",
        title: "Vulnerability Detection and Monitoring Using LLM",
        venue: "IEEE Xplore 2023",
        authors: "The Foundry Distributed Ledger Team",
        year: "2023",
        pdfLink: "https://ieeexplore.ieee.org/document/10456393",
        topic: "Smart Contract Verification",
        citation: "@article{vulnerabilityllm2023, title={Vulnerability Detection and Monitoring Using LLM}, author={The Foundry DLBL Lab}, journal={IEEE Xplore}, year={2023}}",
        abstract: "An automated system utilizing Large Language Models to scan source code repositories, identify security vulnerabilities, and monitor software health."
    },
    {
        id: "pub-3",
        title: "RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection Using SLMs",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Distributed Ledger Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11429262",
        topic: "Code & Contract Auditing",
        citation: "@article{ragvulnerability2026, title={RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection}, author={The Foundry DLBL Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "An ensemble framework combining lightweight Small Language Models with RAG vector search to run local, privacy-compliant vulnerability auditing."
    }
];

// Compute & Lab Stats
const INFRA_STATS = [
    { label: "Distributed Validator Nodes", value: "Multi-Region Enterprise Clusters" },
    { label: "ZK-Prover Acceleration", value: "GPU-Accelerated Prover Farm" },
    { label: "Hardware Key Storage", value: "FIPS 140-2 Level 3 HSM Vaults" },
    { label: "Active Blockchain Researchers", value: "30+ Protocol Engineers & Cryptographers" }
];

export default function DLBLResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

    // Interactive Consensus & Smart Contract Simulator steps
    const simSteps = [
        { label: "Transaction Ingestion & Batching", status: "Receiving user transactions...", detail: "Batched 5,000 micro-transactions into off-chain L2 state memory" },
        { label: "Zero-Knowledge Proof Generation", status: "Running zk-SNARK prover...", detail: "Generated succinct 256-byte zero-knowledge proof of transaction validity" },
        { label: "Consensus Node Verification", status: "Propagating to BFT validator swarm...", detail: "Validator nodes verified ZK-proof state transition in < 12ms" },
        { label: "EVM Bytecode Execution", status: "Executing verified smart contract...", detail: "EVM state transition committed with 0 gas optimization overhead" },
        { label: "Immutable Block Finality", status: "Block Finalized!", detail: "Committed cryptographic hash to mainnet ledger with absolute finality" }
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
                    src="/images/dlbl_centre_banner.jpg"
                    alt="Distributed Ledger & Blockchain Lab"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-8xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                            Distributed Ledger & Blockchain Lab (DLBL)
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
                        The Distributed Ledger & Blockchain Lab (DLBL) at The Foundry advances high-throughput BFT consensus protocols, zero-knowledge proofs (zk-SNARKs), formally verified smart contract compilers, and sovereign institutional settlement infrastructure.
                    </p>

                    {/* Metric Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">15,000+ TPS</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Scaled Throughput</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">40+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Peer-Reviewed Papers</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">99.99%</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Network Reliability</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">$4M+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Prover Infrastructure</p>
                        </div>
                    </div>
                </section>

                {/* Core Research Pillars - Row Layout matching Program Rows */}
                <section className="text-slate-800 border-t border-slate-200/50" id="pillars">
                    <div className="p-8 sm:p-12 md:p-16 pb-4 bg-[#F7F7F4]">
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-2">
                            Core Blockchain Research Pillars
                        </h2>
                        <p className="text-sm text-slate-600 max-w-3xl">
                            Our institute centers its distributed ledger investigations around the four core pillars of The Foundry.
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
                                            <span>Technical Protocol Spec</span>
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

                {/* Interactive Consensus & Smart Contract Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Consensus & ZK Prover Engine
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how DLBL&apos;s zero-knowledge rollup engine batches micro-transactions, generates zk-SNARK proofs, verifies state transitions across BFT node swarms, and finalizes blocks.
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
                                <span>{isSimulating ? "Simulating Consensus..." : "Simulate Consensus Engine"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">dlbl-zk-runtime v1.8</span>
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

                {/* Featured Blockchain Innovations */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-8">
                        Featured Protocol Innovations
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
                                        <span>View Protocol Specs</span>
                                        <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Distributed Validator & ZK Prover Infrastructure */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-8">
                        Validator Nodes & ZK-Prover Infrastructure
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
                                IEEE Peer-Reviewed Blockchain Publications
                            </h2>
                            <p className="text-sm text-slate-600 mt-2">
                                Research outputs published in top international distributed ledger, cryptography, and IEEE venues.
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
                        <p className="text-lg text-slate-600">Common queries about DLBL research fellowships, grants, and blockchain labs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is DLBL's primary research focus?">
                                DLBL conducts research across 4 core pillars: Deep Tech & Distributed Intelligence, Entrepreneurship & Decentralized Venture, Sustainability & Green Blockchain, and Renewable Energy & Smart Grid Settlement.
                            </FAQItem>
                            <FAQItem question="How do ZK-Rollup provers work at DLBL?">
                                DLBL operates dedicated GPU prover farms running zk-SNARK algorithms to generate zero-knowledge batch validity proofs for enterprise transactions.
                            </FAQItem>
                            <FAQItem question="Are DLBL publications open access?">
                                Yes. All protocol research papers are published in peer-reviewed IEEE venues and open-access technical whitepapers.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="How do enterprise partnerships work at DLBL?">
                                Enterprise partners collaborate with DLBL to audit smart contract bytecode, deploy custom asset tokenization engines, and integrate microgrid P2P settlement oracles.
                            </FAQItem>
                            <FAQItem question="Can startups incubate Web3 protocols at DLBL?">
                                Yes. Through Pillar 02 (Decentralized Venture), Web3 protocol founders receive validator node compute access, security audit support, and incubation grants.
                            </FAQItem>
                            <FAQItem question="What hardware security is available at DLBL?">
                                DLBL uses FIPS 140-2 Level 3 Hardware Security Modules (HSM) for institutional key management and zero-trust validator signing.
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
                                DLBL Technical Protocol Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical blockchain protocol whitepaper covering consensus finality benchmarks, ZK-proof generation methodology, and smart contract audit specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900 font-sans">Spec Details:</p>
                                <p>• Publication ID: DLBL-SPEC-2026-02</p>
                                <p>• Format: IEEE Xplore / Protocol PDF</p>
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
