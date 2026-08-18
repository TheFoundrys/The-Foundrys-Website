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

// Cyber Research Pillars Data - Aligned with The Foundry's 4 Core Pillars
const RESEARCH_PILLARS = [
    {
        id: "deep-tech",
        title: "Deep Tech & Cyber Intelligence",
        shortDesc: "Automated vulnerability scanners, SLM code auditing, and AI threat modeling.",
        badge: "Pillar 01",
        fullDesc: "Our Cyber Intelligence lab pioneers deep learning vulnerability detection, Small Language Model (SLM) static code auditing, and automated red-teaming to protect AI pipelines and enterprise software repositories.",
        highlights: [
            "SLM-Powered Automated Static & Dynamic Code Auditing",
            "Multi-Agent AI Pipeline Threat Modeling & VAPT",
            "Zero-Day Exploitation & Reverse Engineering Defense",
            "Real-Time Adversarial ML & Prompt Injection Guardrails"
        ],
        stats: { metrics: "2.4M+", label: "Lines of Code Audited/Sec" },
        specPaper: {
            title: "Technical Spec Paper 01: Automated SLM Vulnerability Scanning in CI/CD",
            downloadUrl: "#publications"
        }
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Cyber Venture",
        shortDesc: "Enterprise defense architectures, VAPT for AI pipelines, and zero-trust operations.",
        badge: "Pillar 02",
        fullDesc: "Bridging deep cyber defense research with enterprise operations. We design zero-trust network frameworks, incident response automation engines, and compliance audit platforms for global commercial enterprises.",
        highlights: [
            "Zero-Trust Architecture & IAM Identity Verification",
            "VAPT Frameworks for Enterprise LLM & RAG Pipelines",
            "Automated Incident Response & Forensic Triage Engines",
            "Sovereign Cyber Security Compliance & Audit Vaults"
        ],
        stats: { metrics: "99.99%", label: "Defense System Uptime" },
        specPaper: {
            title: "Technical Spec Paper 02: Zero-Trust Frameworks for Enterprise RAG Deployments",
            downloadUrl: "#publications"
        }
    },
    {
        id: "sustainability",
        title: "Sustainability & Infrastructure Resilience",
        shortDesc: "Securing smart cities, environmental IoT networks, and resilient digital infrastructure.",
        badge: "Pillar 03",
        fullDesc: "Safeguarding critical public and environmental infrastructure. We deploy hardware-level firewalls, sensor network encryption, and supply chain integrity checkers to protect vital physical assets.",
        highlights: [
            "Hardware-Root-of-Trust (RoT) for Environmental IoT Sensors",
            "Supply Chain Code Provenance & Software Bill of Materials (SBOM)",
            "Smart City Traffic & Water Network Cyber Resilience",
            "Tamper-Proof Data Watermarking for Public Repositories"
        ],
        stats: { metrics: "100%", label: "Verifiable SBOM Coverage" },
        specPaper: {
            title: "Technical Spec Paper 03: Hardware-Level Root of Trust for Public Infrastructure",
            downloadUrl: "#publications"
        }
    },
    {
        id: "energy",
        title: "Renewable Energy & Power Grid Cyber Defense",
        shortDesc: "Substation IDS/IPS, SCADA industrial security, and microgrid anomaly detection.",
        badge: "Pillar 04",
        fullDesc: "Securing the power grid from nation-state cyber threats. We build real-time SCADA intrusion detection systems, Modbus/DNP3 protocol firewalls, and microgrid anomaly detection engines to prevent grid disruption.",
        highlights: [
            "SCADA & Modbus Industrial Control System Intrusion Defense",
            "Microgrid Dynamic Anomaly Detection & Frequency Protection",
            "Substation Optical Firewall & Encrypted Telemetry Channels",
            "Post-Quantum Key Exchange for Distributed Power Grids"
        ],
        stats: { metrics: "< 1ms", label: "Packet Inspection Latency" },
        specPaper: {
            title: "Technical Spec Paper 04: Real-Time SCADA Intrusion Detection in Sovereign Grids",
            downloadUrl: "#publications"
        }
    }
];

// Featured Cyber Projects Data
const FEATURED_PROJECTS = [
    {
        id: "aegis-vapt",
        name: "Project Aegis-VAPT",
        category: "Vulnerability Auditing",
        status: "Live Beta",
        desc: "Automated vulnerability scanner combining Small Language Models with RAG vector search to audit source code and flag zero-day flaws.",
        tags: ["SLM Code Audit", "VAPT", "RAG Vector Search", "Zero-Day Protection"],
        metrics: "98.7% Detection Rate"
    },
    {
        id: "sentinel-phish",
        name: "Sentinel-Phish Engine",
        category: "Multi-Agent Security",
        status: "In Production",
        desc: "Multi-agent VLM & LLM reasoning system detecting and neutralizing sophisticated spear-phishing attacks in enterprise email pipelines.",
        tags: ["Multi-Agent VLM", "Phishing Defense", "Email Security", "LLM Reasoning"],
        metrics: "Sub-Second Neutralization"
    },
    {
        id: "gridguard-ids",
        name: "GridGuard SCADA IDS",
        category: "Industrial Defense",
        status: "Research Paper",
        desc: "Deep learning packet inspection firewall designed for SCADA and Modbus protocols in renewable power substations.",
        tags: ["SCADA Security", "Modbus Firewall", "Industrial IoT", "Deep Learning"],
        metrics: "< 1ms Inspection Latency"
    },
    {
        id: "ciphermesh",
        name: "CipherMesh Zero-Trust",
        category: "Network Defense",
        status: "Grant Project",
        desc: "Quantum-resistant micro-segmentation network mesh securing distributed enterprise microservices against lateral movement.",
        tags: ["Zero-Trust Mesh", "Post-Quantum Crypto", "Microsegmentation"],
        metrics: "NIST Level 5 Compliant"
    }
];

// Research Publications Data - Official IEEE Papers from The Foundry
const PUBLICATIONS = [
    {
        id: "pub-1",
        title: "Vulnerability Detection and Monitoring Using LLM",
        venue: "IEEE Xplore 2023",
        authors: "The Foundry Cyber Defense Team",
        year: "2023",
        pdfLink: "https://ieeexplore.ieee.org/document/10456393",
        topic: "Vulnerability Auditing & LLMs",
        citation: "@article{vulnerabilityllm2023, title={Vulnerability Detection and Monitoring Using LLM}, author={The Foundry Cyber Lab}, journal={IEEE Xplore}, year={2023}}",
        abstract: "An automated system utilizing Large Language Models to scan source code repositories, identify security vulnerabilities, and monitor software health."
    },
    {
        id: "pub-2",
        title: "RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection Using SLMs",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Cyber Defense Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11429262",
        topic: "SLM Code Auditing",
        citation: "@article{ragvulnerability2026, title={RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection}, author={The Foundry Cyber Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "An ensemble framework combining lightweight Small Language Models with RAG vector search to run local, privacy-compliant vulnerability auditing."
    },
    {
        id: "pub-3",
        title: "Multi-Agent Phishing Detection And Deletion via Small VLM and LLM Reasoning",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Cyber Defense Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11429303",
        topic: "Multi-Agent Defense",
        citation: "@article{phishingmultiagent2026, title={Multi-Agent Phishing Detection And Deletion}, author={The Foundry Cyber Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "A cooperative multi-agent architecture utilizing Vision Language Models and LLM reasoning to detect and neutralize advanced phishing attacks."
    }
];

// Compute & Lab Stats
const INFRA_STATS = [
    { label: "Audited Code Repositories", value: "2.4M+ Lines of Code Analyzed" },
    { label: "Air-Gapped Cyber Range", value: "Isolated Attack Simulation Matrix" },
    { label: "Zero-Day Defense Uptime", value: "99.99% Continuous Protection" },
    { label: "Active Cyber Researchers", value: "40+ Security & Cryptography Experts" }
];

export default function CCDResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);

    // Interactive Cyber Threat & Defense Simulator steps
    const simSteps = [
        { label: "Threat Payload Ingestion", status: "Scanning network packet ingress...", detail: "Detected zero-day prompt injection & SQL exploit payload in API boundary" },
        { label: "Multi-Agent VAPT Parsing", status: "SLM Security Agent activated...", detail: "Isolated malicious payload; mapped AST vulnerability vector in sandbox" },
        { label: "Automated Patch Synthesis", status: "Synthesizing mitigation patch...", detail: "Generated formal AST sanitization patch and verified non-breaking execution" },
        { label: "Zero-Trust Guardrail Verification", status: "Running sandbox regression tests...", detail: "Verified 0 memory leaks and 100% compliance with zero-trust policy" },
        { label: "Live System Deployment", status: "Threat Neutralized!", detail: "Deployed hot-patch to edge gateway with 0.8ms total latency impact" }
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
                            Centre for Cybersecurity & Defense (CCD)
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                            Researching secure network design, active cryptography, and intelligence protection models.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
                            The Centre for Cybersecurity & Defense (CCD) at The Foundry leads research into automated vulnerability auditing, zero-trust network architectures, post-quantum cryptography, and SCADA industrial defense to protect sovereign digital infrastructure.
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
                                <span>Partner with CCD</span>
                            </a>
                        </div>
                    </div>

                    {/* Metric Stats Cards in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#b8d1ea]">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">2.4M+ Lines</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Audited Codebase</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">40+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Peer-Reviewed Papers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">99.99%</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Zero-Trust Uptime</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">$16M+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Cyber Range Labs</p>
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
                            Our institute centers its cyber investigations around the four core pillars of The Foundry.
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
                                CCD Technical Cyber Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical cyber defense whitepaper covering VAPT audit methodology, threat vector mapping, and zero-trust security specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-xl bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900">Spec Details:</p>
                                <p>• Publication ID: CCD-SPEC-2026-03</p>
                                <p>• Format: IEEE Xplore / Security PDF</p>
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

            {/* INTERACTIVE CYBER THREAT & DEFENSE SIMULATOR */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5">
                            <span className="px-2.5 py-0.5 rounded bg-white text-[#002f86] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2 mb-3">
                                Autonomous Threat Defense
                            </h2>
                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                Witness how CCD&apos;s multi-agent defense architecture ingests exploit payloads, performs AST vulnerability analysis, synthesizes mitigation hot-patches, and deploys zero-trust policies.
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
                                <span>{isSimulating ? "Simulating Cyber Defense..." : "Simulate Threat Defense"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">ccd-cyber-runtime v4.0</span>
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
                            Applied Cyber Innovations
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            Featured Defense Projects
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
                            Cyber Range & Air-Gapped Labs
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2">
                            Security Defense Infrastructure
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
                                Cyber Publications & Papers
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                                Academic & Industry Defense Outputs
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
                        Join the Frontier of Cybersecurity & Defense
                    </h2>
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                        Partner with CCD to audit AI pipeline security, co-sponsor cyber defense research grants, or benchmark zero-trust networks in our air-gapped cyber range.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/apply?type=fellowship&domain=Cyber%20Security"
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
