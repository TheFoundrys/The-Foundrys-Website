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
    ShieldCheck,
    Lock,
    Server,
    Sparkles,
    Layers,
    Cpu,
    Zap,
    Code2,
    KeyRound,
    Activity,
    Bug
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Cyber Research Pillars Data - Specialized 4 Cybersecurity Pillars
const RESEARCH_PILLARS = [
    {
        id: "threat-intel",
        title: "Threat Intelligence & Vulnerability Auditing",
        shortDesc: "Automated SLM vulnerability scanning, static code auditing, and AI pipeline threat modeling.",
        badge: "Pillar 01",
        icon: Bug,
        accentColor: "from-[#002f86] to-blue-700",
        fullDesc: "Our Threat Intelligence lab pioneers deep learning vulnerability detection, Small Language Model (SLM) static code auditing, and automated red-teaming to protect AI pipelines and enterprise repositories.",
        highlights: [
            "SLM-Powered Automated Static & Dynamic Code Auditing",
            "Multi-Agent AI Pipeline Threat Modeling & VAPT",
            "Zero-Day Exploitation & Reverse Engineering Defense",
            "Real-Time Adversarial ML & Prompt Injection Guardrails"
        ],
        stats: { metrics: "2.4M+", label: "Lines Audited/Sec" },
        specPaper: {
            title: "Technical Spec Paper 01: Automated SLM Vulnerability Scanning in CI/CD",
            downloadUrl: "https://ieeexplore.ieee.org/document/10456393"
        }
    },
    {
        id: "zero-trust",
        title: "Zero-Trust Network & Identity Defense",
        shortDesc: "Enterprise identity verification, micro-segmentation, and automated incident response.",
        badge: "Pillar 02",
        icon: Lock,
        accentColor: "from-indigo-600 to-violet-600",
        fullDesc: "Designing zero-trust network frameworks, continuous IAM identity verification, and incident response automation engines to isolate security breaches and protect enterprise operations.",
        highlights: [
            "Zero-Trust Architecture & IAM Identity Verification",
            "Micro-Segmentation & Air-Gapped Network Enclaves",
            "Automated Incident Response & Forensic Triage Engines",
            "Sovereign Security Compliance & Immutable Audit Vaults"
        ],
        stats: { metrics: "99.99%", label: "Zero-Trust System Uptime" },
        specPaper: {
            title: "Technical Spec Paper 02: Zero-Trust Frameworks for Enterprise RAG Deployments",
            downloadUrl: "https://ieeexplore.ieee.org/document/11429262"
        }
    },
    {
        id: "post-quantum",
        title: "Post-Quantum & Active Cryptography",
        shortDesc: "Lattice-based cryptography, post-quantum key exchange, and HSM hardware protection.",
        badge: "Pillar 03",
        icon: KeyRound,
        accentColor: "from-purple-600 to-indigo-700",
        fullDesc: "Researching quantum-resistant encryption protocols, lattice cryptography, and Hardware Root-of-Trust (RoT) to protect long-term sovereign data against quantum decryption threats.",
        highlights: [
            "Post-Quantum Cryptography (PQC) & Lattice Key Exchange",
            "FIPS 140-2 Level 3 Hardware Security Module (HSM) Vaults",
            "Homomorphic Encryption for Privacy-Preserving AI",
            "Tamper-Proof Digital Watermarking & Code Provenance"
        ],
        stats: { metrics: "256-Bit", label: "Quantum-Resistant Entropy" },
        specPaper: {
            title: "Technical Spec Paper 03: Post-Quantum Lattice Key Exchange in Sovereign Networks",
            downloadUrl: "https://ieeexplore.ieee.org/document/11429303"
        }
    },
    {
        id: "scada-defense",
        title: "SCADA & Critical Infrastructure Security",
        shortDesc: "Industrial control system firewalls, Modbus/DNP3 intrusion defense, and microgrid security.",
        badge: "Pillar 04",
        icon: Activity,
        accentColor: "from-blue-700 to-[#002f86]",
        fullDesc: "Safeguarding sovereign industrial and power infrastructure from nation-state cyber attacks. We engineer real-time SCADA intrusion detection systems, industrial protocol firewalls, and smart grid anomaly sensors.",
        highlights: [
            "SCADA & Modbus Industrial Control System Intrusion Defense",
            "Substation Optical Firewall & Encrypted Telemetry Channels",
            "Microgrid Dynamic Cyber Anomaly Detection",
            "Hardware Root-of-Trust (RoT) for Industrial IoT Sensors"
        ],
        stats: { metrics: "< 0.8ms", label: "Packet Inspection Latency" },
        specPaper: {
            title: "Technical Spec Paper 04: Real-Time SCADA Intrusion Detection in Sovereign Grids",
            downloadUrl: "https://ieeexplore.ieee.org/document/10456393"
        }
    }
];

// Cyber Security Stack Layers
const CYBER_STACK_LAYERS = [
    {
        num: "01",
        name: "Perimeter Threat Ingestion",
        desc: "SLM Code Auditing, AI Prompt Injection Guardrails, & Zero-Day Exploit Detection",
        icon: ShieldCheck,
        badge: "Perimeter Guard"
    },
    {
        num: "02",
        name: "Cryptographic Enforcement",
        desc: "Post-Quantum Cryptography (PQC), Lattice Encryption, & Hardware Root-of-Trust",
        icon: KeyRound,
        badge: "PQC & Lattice"
    },
    {
        num: "03",
        name: "Autonomous VAPT Agent Swarm",
        desc: "Multi-Agent Red Teaming, Automated Patch Generation, & AST Regression Profiling",
        icon: Layers,
        badge: "VAPT Swarms"
    },
    {
        num: "04",
        name: "Air-Gapped Sovereign Range",
        desc: "SCADA Substation Protection, Zero-Trust IAM Policy Enforcement, & Immutable Vaults",
        icon: Server,
        badge: "Air-Gapped Range"
    }
];

// Research Publications Data
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



export default function CCDResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

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
                    src="/images/ccd_centre_banner.jpg"
                    alt="Centre for Cybersecurity & Defense"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-7xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
                            Centre for Cybersecurity & Defense (CCD)
                        </h1>
                        <p className="text-slate-200 text-sm md:text-base mt-3 max-w-2xl font-light">
                            Pioneering zero-trust architectures, SLM vulnerability auditing, post-quantum cryptography, and SCADA industrial defense.
                        </p>

                        {/* Quick Anchor Badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            <a href="#pillars" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Cybersecurity Pillars
                            </a>
                            <a href="#architecture" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Zero-Trust Stack
                            </a>
                            <a href="#simulator" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Threat Defense Simulator
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
                                🛡️ Sovereign Digital Protection
                            </div>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Safeguarding Sovereign Digital & Physical Assets
                            </h2>
                            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
                                The Centre for Cybersecurity & Defense (CCD) at The Foundry leads research into automated vulnerability auditing, zero-trust network architectures, post-quantum cryptography, and SCADA industrial defense to protect sovereign digital infrastructure.
                            </p>
                        </div>

                        {/* Visual Research Image */}
                        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[320px] rounded-lg overflow-hidden border border-slate-200/80 shadow-lg">
                            <Image
                                src="/images/ccd_research_lab.jpg"
                                alt="Centre for Cybersecurity and Defense Research Operations Center"
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
                                CYBERSECURITY RESEARCH MATRIX
                            </span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Core Cybersecurity Research Pillars
                            </h2>
                        </div>
                        <p className="text-xs text-slate-500 max-w-md mt-2 md:mt-0 font-medium">
                            Select a cybersecurity pillar to explore specialized defense labs, security highlights, and technical whitepapers.
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
                                            <span>Read Technical Cyber Spec</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Graphic Card Preview */}
                                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#001f5c] to-slate-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden font-mono text-xs">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <ShieldCheck size={160} />
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
                                            Detailed VAPT methodology, AST vulnerability mapping, and zero-trust security specifications.
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

                {/* Cyber Security Architecture Stack Diagram Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50" id="architecture">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] font-mono block mb-2">
                            SYSTEM ARCHITECTURE
                        </span>
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-3">
                            The Zero-Trust Defense Stack
                        </h2>
                        <p className="text-sm text-slate-600">
                            Our four-tier defense architecture shielding critical software pipelines and sovereign industrial assets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CYBER_STACK_LAYERS.map((layer, idx) => {
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
                                        <span>Audited Protocol</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Interactive Threat & Defense Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50" id="simulator">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Autonomous Threat Defense
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how CCD&apos;s multi-agent defense architecture ingests exploit payloads, performs AST vulnerability analysis, synthesizes mitigation hot-patches, and deploys zero-trust policies.
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
                                <span>{isSimulating ? "Simulating Cyber Defense..." : "Simulate Threat Defense"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 bg-white border border-slate-200/80 font-mono text-xs rounded-2xl shadow-md">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
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
                                IEEE & SECURITY VENUES
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
                        <p className="text-lg text-slate-600">Common queries about CCD research fellowships, defense grants, and cyber range labs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is CCD's primary cyber research focus?">
                                CCD conducts research across 4 specialized cybersecurity pillars: Threat Intelligence & Vulnerability Auditing, Zero-Trust Network & Identity Defense, Post-Quantum & Active Cryptography, and SCADA & Critical Infrastructure Security.
                            </FAQItem>
                            <FAQItem question="How can researchers apply for Cyber Fellowships?">
                                Cyber security researchers, cryptographers, and doctoral fellows can apply for fellowships through our open application calls or sponsored research grants.
                            </FAQItem>
                            <FAQItem question="Can enterprises request VAPT & LLM security audits?">
                                Yes. Enterprises partner with CCD to perform vulnerability assessments, red-teaming, and static code audits on autonomous AI pipelines and RAG vector databases.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="What is the CCD Air-Gapped Cyber Range?">
                                CCD operates an isolated, air-gapped cyber attack range matrix allowing researchers to simulate real-world nation-state exploits, zero-day attacks, and SCADA intrusion vectors safely.
                            </FAQItem>
                            <FAQItem question="Are CCD research outputs open access?">
                                Yes. All research outputs produced by CCD are published in peer-reviewed IEEE venues and open-access security whitepapers.
                            </FAQItem>
                            <FAQItem question="How does CCD support cyber startups?">
                                Through Pillar 02 (Zero-Trust Defense), early-stage security startups receive air-gapped lab access, technical auditing mentorship, and incubation support.
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
                                CCD Technical Cyber Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical cyber defense whitepaper covering VAPT audit methodology, threat vector mapping, and zero-trust security specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900 font-sans">Spec Details:</p>
                                <p>• Publication ID: CCD-SPEC-2026-03</p>
                                <p>• Format: IEEE Xplore / Security PDF</p>
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
