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
            downloadUrl: "https://ieeexplore.ieee.org/document/10456393"
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
            downloadUrl: "https://ieeexplore.ieee.org/document/11429262"
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
            downloadUrl: "https://ieeexplore.ieee.org/document/11429303"
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
            downloadUrl: "https://ieeexplore.ieee.org/document/10456393"
        }
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

            {/* Banner Image Section matching Entry-Level / Program pages */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <Image
                    src="/images/ccd_centre_banner.jpg"
                    alt="Centre for Cybersecurity & Defense"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-8xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                            Centre for Cybersecurity & Defense (CCD)
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
                        The Centre for Cybersecurity & Defense (CCD) at The Foundry leads research into automated vulnerability auditing, zero-trust network architectures, post-quantum cryptography, and SCADA industrial defense to protect sovereign digital infrastructure.
                    </p>

                    {/* Metric Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">1.4M+ Lines</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Audited Codebase</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">40+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Peer-Reviewed Papers</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">99.99%</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Zero-Trust Uptime</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">$6M+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Cyber Range Labs</p>
                        </div>
                    </div>
                </section>

                {/* Core Research Pillars - Row Layout matching Program Rows */}
                <section className="text-slate-800 border-t border-slate-200/50" id="pillars">
                    <div className="p-8 sm:p-12 md:p-16 pb-4 bg-[#F7F7F4]">
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-2">
                            Core Cyber Research Pillars
                        </h2>
                        <p className="text-sm text-slate-600 max-w-3xl">
                            Our institute centers its cyber defense investigations around the four core pillars of The Foundry.
                        </p>
                    </div>

                    {RESEARCH_PILLARS.map((pillar, idx) => (
                        <div
                            key={pillar.id}
                            className={`p-8 sm:p-12 md:p-16 ${idx % 2 === 0 ? "bg-white" : "bg-[#F7F7F4]"
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
                                            <span>Technical Cyber Spec</span>
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

                {/* Interactive Threat & Defense Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50">
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
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-all shadow-md cursor-pointer ${isSimulating
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : "bg-[#002f86] hover:bg-[#002266]"
                                    }`}
                            >
                                <PlayCircle className="w-4 h-4" />
                                <span>{isSimulating ? "Simulating Cyber Defense..." : "Simulate Threat Defense"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
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
                                                className={`p-3 rounded-md border transition-all ${isActive
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


                {/* Cyber Range & Air-Gapped Labs Infrastructure */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-8">
                        Security Defense Infrastructure
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
                            <p className="text-sm text-slate-600">
                                Research outputs published in top international computer security and IEEE journals.
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
                        <p className="text-lg text-slate-600">Common queries about CCD research fellowships, defense grants, and cyber range labs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is CCD's primary cyber research focus?">
                                CCD conducts research across 4 core pillars: Deep Tech & Cyber Intelligence, Entrepreneurship & Cyber Venture, Sustainability & Infrastructure Resilience, and Renewable Energy & Power Grid Cyber Defense.
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
                                Through Pillar 02 (Cyber Venture), zero-trust security startups receive air-gapped lab access, technical auditing mentorship, and incubation support.
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

                            <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
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
