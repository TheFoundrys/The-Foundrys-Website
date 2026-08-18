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
    Copy
} from "lucide-react";
import Link from "next/link";

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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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

    const activePillarObj = RESEARCH_PILLARS.find(p => p.id === selectedPillar) || RESEARCH_PILLARS[0];

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-20 sm:pt-24 pb-4 px-4 sm:px-6 md:px-auto max-w-[1400px] mx-auto">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10 relative overflow-hidden">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#002f86] leading-tight mb-2">
                            Distributed Ledger & Blockchain Lab (DLBL)
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                            Advancing decentralization protocols, trust infrastructure, and smart contract optimization.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
                            The Distributed Ledger & Blockchain Lab (DLBL) at The Foundry leads research into zero-knowledge rollups, formally verified smart contracts, decentralized identity, and sovereign green ledger infrastructure for enterprise and government applications.
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
                                <span>Partner with DLBL</span>
                            </a>
                        </div>
                    </div>

                    {/* Metric Stats Cards in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#b8d1ea]">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">15,000+ TPS</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Scaled Throughput</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">35+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Peer-Reviewed Papers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">99.99%</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Ledger Reliability</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">$15M+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Validator Infrastructure</p>
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
                            Our institute centers its blockchain investigations around the four core pillars of The Foundry.
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
                                DLBL Technical Protocol Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical blockchain protocol whitepaper covering consensus benchmarks, zero-knowledge prover mechanics, and smart contract verification specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-xl bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900">Spec Details:</p>
                                <p>• Publication ID: DLBL-SPEC-2026-05</p>
                                <p>• Format: IEEE Xplore / Protocol PDF</p>
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

            {/* INTERACTIVE CONSENSUS & SMART CONTRACT SIMULATOR */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5">
                            <span className="px-2.5 py-0.5 rounded bg-white text-[#002f86] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2 mb-3">
                                Ledger Consensus Simulator
                            </h2>
                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                Experience how DLBL&apos;s zero-knowledge rollup architecture batches transactions, generates succinct zk-SNARK proofs, validates BFT consensus, and commits blocks with sub-second finality.
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
                                <span>{isSimulating ? "Simulating Ledger Consensus..." : "Simulate Consensus Engine"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#002f86]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">dlbl-chain-runtime v3.8</span>
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
                            Applied Protocol Innovations
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            Featured Blockchain Projects
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
                            Validator Nodes & Key Storage Labs
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2">
                            Distributed Ledger Infrastructure
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
                                Blockchain Publications & Papers
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                                Academic & Industry Protocol Outputs
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
                        Join the Frontier of Distributed Ledger Research
                    </h2>
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                        Partner with DLBL to deploy zero-knowledge rollups, co-sponsor protocol research grants, or benchmark smart contracts on enterprise validator infrastructure.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/apply?type=fellowship&domain=Blockchain"
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
