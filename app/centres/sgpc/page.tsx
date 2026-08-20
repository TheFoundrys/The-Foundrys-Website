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

// Sustainability Research Pillars Data - Aligned with The Foundry's 4 Core Pillars
const RESEARCH_PILLARS = [
    {
        id: "deep-tech",
        title: "Deep Tech & Ecological Intelligence",
        shortDesc: "Material informatics, VLM microplastics classification, and AI climate risk modeling.",
        badge: "Pillar 01",
        fullDesc: "Our Ecological Intelligence lab pioneers Vision-Language Models for microplastics detection, AI-driven bio-synthetic polymer design, and predictive climate analytics to solve planetary environmental degradation.",
        highlights: [
            "Vision Language Model (VLM) Microplastics Classification",
            "Material Informatics & Macromolecular Polymer Synthesis",
            "High-Resolution Satellite Climate Risk Modeling",
            "Biomimetic Material Discovery & Degradation Simulation"
        ],
        stats: { metrics: "96.4%", label: "Microplastics Detection Accuracy" },
        specPaper: {
            title: "Technical Spec Paper 01: VLM-Based Microplastics Classification & Spectral Sensing",
            downloadUrl: "https://ieeexplore.ieee.org/document/11525939"
        }
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Green Venture",
        shortDesc: "ESG asset compliance engines, circular economy startups, and carbon credit markets.",
        badge: "Pillar 02",
        fullDesc: "Commercializing sustainability research into scalable clean-tech enterprises. We design enterprise ESG compliance tools, circular economy material loops, and carbon credit verification platforms for global corporations.",
        highlights: [
            "Commercial ESG Asset Verification & Audit Suites",
            "Circular Economy Industrial Material Loop Design",
            "Verifiable Carbon Offsetting & Tokenized Credit Markets",
            "Corporate Scope 1-3 Decarbonization Roadmap Engines"
        ],
        stats: { metrics: "100%", label: "Verifiable ESG Coverage" },
        specPaper: {
            title: "Technical Spec Paper 02: Automated Corporate ESG Asset Verification Engines",
            downloadUrl: "https://ieeexplore.ieee.org/document/11526131"
        }
    },
    {
        id: "sustainability",
        title: "Sustainability & Carbon Accounting",
        shortDesc: "Real-time Scope 1/2/3 emission telemetry, closed-loop eco-metrics, and bio-informatics.",
        badge: "Pillar 03",
        fullDesc: "Engineering precision carbon accounting systems. We deploy IoT emissions telemetry, closed-loop life cycle assessment (LCA) algorithms, and automated carbon ledger reporting to eliminate greenwashing.",
        highlights: [
            "Scope 1, 2, and 3 Real-Time Automated Emissions Telemetry",
            "Closed-Loop Product Life Cycle Assessment (LCA) Systems",
            "Industrial Effluent & Atmospheric Gas Sensor Analytics",
            "Automated Anti-Greenwashing Audit & Proof Verifiers"
        ],
        stats: { metrics: "4.8M Tons", label: "Simulated Carbon Avoided" },
        specPaper: {
            title: "Technical Spec Paper 03: Precision Scope 1-3 Carbon Accounting via IoT Sensors",
            downloadUrl: "https://ieeexplore.ieee.org/document/10497341"
        }
    },
    {
        id: "energy",
        title: "Renewable Energy & Climate Policy",
        shortDesc: "Clean power transition models, grid decarbonization policy, and solar microgrid telemetry.",
        badge: "Pillar 04",
        fullDesc: "Drafting evidence-based climate policy and grid decarbonization architectures. We model clean energy transition dynamics, municipal solar adoption policies, and sovereign renewable grid regulations.",
        highlights: [
            "National & Municipal Grid Decarbonization Policy Frameworks",
            "Solar & Wind Microgrid Socio-Economic Transition Models",
            "Regulatory Compliance & Renewable Subsidy Optimization",
            "Sovereign Clean Power Tariff & Carbon Tax Simulation"
        ],
        stats: { metrics: "< 5ms", label: "Policy Impact Telemetry Latency" },
        specPaper: {
            title: "Technical Spec Paper 04: Socio-Economic Models for Municipal Solar Grid Transitions",
            downloadUrl: "https://ieeexplore.ieee.org/document/11525939"
        }
    }
];

// Featured Sustainability Projects Data
const FEATURED_PROJECTS = [
    {
        id: "ecosense-vlm",
        name: "Project EcoSense-VLM",
        category: "Material Informatics",
        status: "Live Beta",
        desc: "Deep learning ensemble combining Vision Language Models for automated microplastics classification in aquatic ecosystems.",
        tags: ["Vision Language Models", "Microplastics Detection", "Ocean Health", "Ensemble AI"],
        metrics: "96.4% Classification Accuracy"
    },
    {
        id: "carbontrack-ai",
        name: "CarbonTrack-AI Engine",
        category: "Carbon Accounting",
        status: "In Production",
        desc: "Real-time Scope 1-3 industrial emissions auditing platform tracking supply chain carbon footprints with zero manual input.",
        tags: ["Scope 1-3 Telemetry", "Carbon Audit", "ESG Accounting", "IoT Sensors"],
        metrics: "Sub-Second Emission Tracking"
    },
    {
        id: "biemat-informatics",
        name: "BioMat Polymer Simulator",
        category: "Green Chemistry",
        status: "Research Paper",
        desc: "Generative AI material science framework predicting biodegradable polymer structures to replace single-use petroleum plastics.",
        tags: ["Generative Materials", "Biodegradable Polymers", "AI Chemistry"],
        metrics: "3.2x Faster Material Discovery"
    },
    {
        id: "greenpolicy-vault",
        name: "GreenPolicy ESG Vault",
        category: "Climate Policy",
        status: "Grant Project",
        desc: "Verifiable climate compliance framework auditing municipal carbon offset programs against international ESG standards.",
        tags: ["ESG Compliance", "Climate Policy", "Anti-Greenwashing Vault"],
        metrics: "ISO 14064 Compliant"
    }
];

// Research Publications Data - Official IEEE Papers from The Foundry
const PUBLICATIONS = [
    {
        id: "pub-1",
        title: "Microplastics Detection Using Deep Learning Ensemble with Vision Language Models",
        venue: "IEEE Xplore 2026",
        authors: "The Foundry Sustainability Research Team",
        year: "2026",
        pdfLink: "https://ieeexplore.ieee.org/document/11525939",
        topic: "VLM Ecological Sensing",
        citation: "@article{microplasticsvlm2026, title={Microplastics Detection Using Deep Learning Ensemble with Vision Language Models}, author={The Foundry SGPC Lab}, journal={IEEE Xplore}, year={2026}}",
        abstract: "A novel ensemble approach combining deep learning models with Vision Language Models (VLMs) for microplastics classification, achieving high accuracy."
    },
    {
        id: "pub-2",
        title: "Quantum-Enhanced Tax Revenue via A-Challan: ML, LLMs, and QML Approaches",
        venue: "IEEE Xplore 2025",
        authors: "The Foundry Sustainability Research Team",
        year: "2025",
        pdfLink: "https://ieeexplore.ieee.org/document/11526131",
        topic: "Green Economic Policy",
        citation: "@article{quantumenthancedtax2025, title={Quantum-Enhanced Tax Revenue via A-Challan}, author={The Foundry SGPC Lab}, journal={IEEE Xplore}, year={2025}}",
        abstract: "Integrating machine learning, LLM reasoning, and Quantum Machine Learning algorithms to optimize tax compliance and detect financial fraud."
    },
    {
        id: "pub-3",
        title: "Comparative Analysis of Diverse Architectures for Accurate Blood Cancer Cell Classification",
        venue: "IEEE Xplore 2024",
        authors: "The Foundry Sustainability Research Team",
        year: "2024",
        pdfLink: "https://ieeexplore.ieee.org/document/10497341",
        topic: "Bio-Informatics & Sensing",
        citation: "@article{bloodcancerclassification2024, title={Comparative Analysis of Diverse Architectures for Accurate Cell Classification}, author={The Foundry SGPC Lab}, journal={IEEE Xplore}, year={2024}}",
        abstract: "A rigorous benchmarking of modern CNN and Vision Transformer architectures for the automatic classification of biological cellular samples."
    }
];

// Compute & Lab Stats
const INFRA_STATS = [
    { label: "Environmental Satellite Ingest", value: "Real-Time Hyperspectral Feed" },
    { label: "Material Synthesis Lab", value: "Biodegradable Polymer Benchmarks" },
    { label: "Simulated Carbon Avoided", value: "4.8M Metric Tons Tracked" },
    { label: "Active Green Tech Fellows", value: "35+ Climate Scientists & Policy Analysts" }
];

export default function SGPCResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

    // Interactive Eco-Metric & Carbon Accounting Simulator steps
    const simSteps = [
        { label: "Industrial Telemetry Ingestion", status: "Ingesting Scope 1-3 IoT sensor data...", detail: "Extracted real-time flue-gas emissions & supply chain fuel metrics" },
        { label: "VLM Spectral Material Analysis", status: "Running VLM image classifier...", detail: "Detected 96.4% microplastic particle density in water effluent sample" },
        { label: "AI Carbon Audit & LCA Solver", status: "Calculating lifecycle carbon footprint...", detail: "Computed product lifecycle emissions; verified 18.4% carbon reduction" },
        { label: "ESG Policy Synthesis", status: "Generating ISO 14064 compliance report...", detail: "Synthesized anti-greenwashing proof certificate for corporate filing" },
        { label: "Verifiable Carbon Finality", status: "Audit Complete!", detail: "Published verified carbon offset ledger entry with 100% ESG compliance" }
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
        <main className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Banner Image Section matching Entry-Level / Program pages */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <Image
                    src="/images/sgpc_banner.jpg"
                    alt="Sustainability & Green Power Centre"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-8xl px-6">
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                            Sustainability & Green Power Centre (SGPC)
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Card Container matching Entry-Level page design */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-16 overflow-hidden">
                
                {/* Introduction Section */}
                <section className="text-slate-800 p-8 sm:p-12 md:p-16 pb-6 sm:pb-8 md:pb-10 bg-white">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#1b4332] md:text-4xl">
                        Introduction
                    </h2>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-4xl">
                        The Sustainability & Green Power Centre (SGPC) at The Foundry leads research into Vision-Language microplastics sensing, material informatics for bio-degradable polymers, automated Scope 1-3 carbon accounting, and renewable grid transition policies.
                    </p>

                    {/* Metric Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#1b4332]">96.4%</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Microplastics Accuracy</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#1b4332]">4.8M Tons</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Carbon Tracked</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#1b4332]">100%</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Verifiable ESG Coverage</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200/80 text-center">
                            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#1b4332]">35+</p>
                            <p className="text-xs text-slate-600 font-medium mt-1">Climate Fellows</p>
                        </div>
                    </div>
                </section>

                {/* Core Research Pillars - Row Layout matching Program Rows */}
                <section className="text-slate-800 border-t border-slate-200/50" id="pillars">
                    <div className="p-8 sm:p-12 md:p-16 pb-4 bg-[#F7F7F4]">
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#1b4332] md:text-4xl mb-2">
                            Core Sustainability Research Pillars
                        </h2>
                        <p className="text-sm text-slate-600 max-w-3xl">
                            Our institute centers its environmental investigations around the four core pillars of The Foundry.
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
                                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1b4332] leading-tight mb-4">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                            {pillar.shortDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <button
                                            onClick={() => setActiveSpecModal(pillar.id)}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b4332] hover:bg-[#143326] text-white rounded-lg font-bold text-sm transition-all shadow-sm cursor-pointer"
                                        >
                                            <FileText size={16} />
                                            <span>Technical Sustainability Spec</span>
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
                                                <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                                                <span className="text-xs text-slate-800 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Interactive Eco-Metric & Carbon Accounting Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#E5EFE7] border-t border-slate-200/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#1b4332] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b4332] mb-4">
                                Eco-Metric & Carbon Telemetry
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how SGPC&apos;s ecological intelligence architecture ingests Scope 1-3 IoT sensor data, classifies spectral microplastics via VLMs, and generates verifiable anti-greenwashing ESG proofs.
                            </p>
                            
                            <button
                                onClick={runSimulation}
                                disabled={isSimulating}
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-all shadow-md cursor-pointer ${
                                    isSimulating
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : "bg-[#1b4332] hover:bg-[#143326]"
                                }`}
                            >
                                <PlayCircle className="w-4 h-4" />
                                <span>{isSimulating ? "Simulating Eco-Metrics..." : "Simulate Eco-Metric Telemetry"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#1b4332]" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">sgpc-carbon-runtime v2.4</span>
                                    </div>
                                    <span className="text-[#1b4332] text-[11px] font-bold">
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
                                                        ? "bg-[#E5EFE7] border-[#1b4332] text-slate-900"
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
                                                            <div className="w-2 h-2 rounded-full bg-[#1b4332] animate-ping" />
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

                {/* Featured Sustainability Innovations */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#1b4332] md:text-4xl mb-8">
                        Featured Clean-Tech Innovations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FEATURED_PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                className="p-6 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-[#1b4332] hover:bg-[#edf4ee] transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold font-mono">
                                            {project.status}
                                        </span>
                                        <span className="text-xs font-bold text-[#1b4332]">{project.metrics}</span>
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
                                        className="text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1"
                                    >
                                        <span>View Technical Specs</span>
                                        <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ecological Infrastructure */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-t border-slate-200/50">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#1b4332] md:text-4xl mb-8">
                        Ecological & Satellite Sensing Labs
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
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#1b4332] md:text-4xl">
                                IEEE Peer-Reviewed Sustainability Publications
                            </h2>
                            <p className="text-sm text-slate-600 mt-2">
                                Research outputs published in top international environmental sensing, bio-informatics, and IEEE journals.
                            </p>
                        </div>
                        <Link href="/blog?category=research" className="mt-4 md:mt-0 text-sm font-bold text-[#1b4332] hover:underline flex items-center gap-1">
                            <span>View All Publications</span>
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {PUBLICATIONS.map((pub) => (
                            <div key={pub.id} className="p-6 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-slate-300 transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold font-mono">
                                        {pub.venue}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">{pub.year} • {pub.topic}</span>
                                </div>
                                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1 hover:text-[#1b4332] transition-colors">
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
                                        className="text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about SGPC research fellowships, ESG audits, and clean-tech grants.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is SGPC's primary research focus?">
                                SGPC conducts environmental research across 4 core pillars: Deep Tech & Ecological Intelligence, Entrepreneurship & Green Venture, Sustainability & Carbon Accounting, and Renewable Energy & Climate Policy.
                            </FAQItem>
                            <FAQItem question="How does VLM microplastics detection work?">
                                SGPC deploys Vision-Language Model ensembles trained on multispectral microscope feeds to identify and classify microplastic polymer types automatically.
                            </FAQItem>
                            <FAQItem question="Are SGPC publications open access?">
                                Yes. All environmental scientific papers are published in peer-reviewed IEEE journals and open-access climate whitepapers.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="How do corporate ESG partnerships work at SGPC?">
                                Corporate partners collaborate with SGPC to implement automated Scope 1-3 emissions telemetry, conduct lifecycle carbon audits, and eliminate greenwashing.
                            </FAQItem>
                            <FAQItem question="Can clean-tech startups incubate at SGPC?">
                                Yes. Through Pillar 02 (Green Venture), environmental startups receive satellite data feed access, material lab bench space, and incubation grants.
                            </FAQItem>
                            <FAQItem question="What background is required for SGPC Fellowships?">
                                Researchers with backgrounds in Environmental Science, Chemical Engineering, Computer Vision, or Public Policy can apply for research fellowships.
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

                            <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[10px] font-bold uppercase tracking-wider font-mono">
                                SGPC Technical Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical environmental whitepaper covering VLM sensing methodology, carbon telemetry math, and bio-polymer simulation specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-lg bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900 font-sans">Spec Details:</p>
                                <p>• Publication ID: SGPC-SPEC-2026-04</p>
                                <p>• Format: IEEE Xplore / Environmental PDF</p>
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
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#1b4332] transition-colors"
            >
                <span className="font-serif text-base">{question}</span>
                <span className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-600 transition-transform ${isOpen ? "rotate-180 bg-[#E5EFE7] text-[#1b4332]" : ""}`}>
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
