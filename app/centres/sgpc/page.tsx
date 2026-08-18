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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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
            downloadUrl: "#publications"
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

    const activePillarObj = RESEARCH_PILLARS.find(p => p.id === selectedPillar) || RESEARCH_PILLARS[0];

    return (
        <main className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-20 sm:pt-24 pb-4 px-4 sm:px-6 md:px-auto max-w-[1400px] mx-auto">
                <div className="bg-[#E5EFE7] border border-[#c2d8c6] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10 relative overflow-hidden">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1b4332] leading-tight mb-2">
                            Sustainability & Green Tech Policy Centre (SGPC)
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                            Designing eco-efficiency metrics, ESG systems, and carbon accounting architectures.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
                            The Sustainability & Green Tech Policy Centre (SGPC) at The Foundry leads research into AI-driven carbon accounting, material informatics, environmental policy frameworks, ESG compliance systems, and clean energy transition telemetry.
                        </p>

                        {/* CTA Buttons matching Foundry style */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="#pillars"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1b4332] hover:bg-[#143326] text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                            >
                                <span>Explore Research Pillars</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#collaborate"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#1b4332] font-semibold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all cursor-pointer"
                            >
                                <span>Partner with SGPC</span>
                            </a>
                        </div>
                    </div>

                    {/* Metric Stats Cards in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#c2d8c6]">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#1b4332]">100%</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">ESG Coverage</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#1b4332]">30+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Peer-Reviewed Papers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#1b4332]">4.8M Tons</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Carbon Avoided</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#1b4332]">$14M+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Eco Sensing Infrastructure</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE RESEARCH PILLARS SECTION */}
            <section id="pillars" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 max-w-3xl">
                        <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold uppercase tracking-wider">
                            Core Research Focus
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#1b4332] mt-2">
                            Research Pillars
                        </h2>
                        <p className="text-slate-700 text-xs sm:text-sm mt-1">
                            Our institute centers its green tech investigations around the four core pillars of The Foundry.
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
                                            ? "bg-[#E5EFE7] border-[#1b4332] shadow-sm"
                                            : "bg-[#F7F7F4] border-slate-200 hover:bg-[#eef5ef]"
                                    }`}
                                >
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold text-[#1b4332] uppercase tracking-wider">
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
                                    <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[10px] font-bold uppercase tracking-wider">
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
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332] shrink-0 mt-0.5" />
                                                <span className="text-xs text-slate-800 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-4 flex flex-col justify-center">
                                    <div className="p-5 rounded-lg bg-white border border-slate-200 text-center shadow-sm">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Key Performance Metric</p>
                                        <p className="text-3xl font-serif font-extrabold text-[#1b4332] mb-1">
                                            {activePillarObj.stats.metrics}
                                        </p>
                                        <p className="text-xs text-slate-600 font-medium mb-4">{activePillarObj.stats.label}</p>

                                        {/* WORKING TECHNICAL SPEC PAPER BUTTON */}
                                        <button
                                            onClick={() => setActiveSpecModal(activePillarObj.id)}
                                            className="w-full py-2.5 px-3 rounded-md bg-[#1b4332] hover:bg-[#143326] active:scale-98 text-white font-semibold text-xs flex items-center justify-center transition-all cursor-pointer shadow-sm"
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

                            <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[10px] font-bold uppercase tracking-wider">
                                SGPC Technical Green Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical green tech paper detailing environmental sensing methodologies, carbon accounting equations, and ESG compliance specifications for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-xl bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900">Spec Details:</p>
                                <p>• Publication ID: SGPC-SPEC-2026-02</p>
                                <p>• Format: IEEE Xplore / Green Tech PDF</p>
                                <p>• Status: Peer Reviewed & Verified</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <a
                                    href="#publications"
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-3 px-4 rounded-xl bg-[#1b4332] hover:bg-[#143326] text-white text-center font-bold text-xs shadow-md transition-all block"
                                >
                                    Browse All Research Papers
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* INTERACTIVE ECO-METRIC & CARBON ACCOUNTING SIMULATOR */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#E5EFE7] border border-[#c2d8c6] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5">
                            <span className="px-2.5 py-0.5 rounded bg-white text-[#1b4332] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b4332] mt-2 mb-3">
                                Carbon Accounting Simulator
                            </h2>
                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                Experience how SGPC&apos;s AI environmental engine ingests industrial Scope 1-3 IoT telemetry, classifies microplastics via Vision Language Models, and generates ISO 14064 anti-greenwashing proofs.
                            </p>
                            
                            <button
                                onClick={runSimulation}
                                disabled={isSimulating}
                                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-xs sm:text-sm text-white transition-all shadow-md cursor-pointer ${
                                    isSimulating
                                        ? "bg-slate-500 cursor-not-allowed"
                                        : "bg-[#1b4332] hover:bg-[#143326]"
                                }`}
                            >
                                <PlayCircle className="w-4 h-4" />
                                <span>{isSimulating ? "Simulating Eco-Accounting..." : "Simulate Carbon Engine"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#1b4332]" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">sgpc-eco-runtime v2.9</span>
                                    </div>
                                    <span className="text-[#1b4332] text-[11px] font-bold">
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
                                                        ? "bg-[#E5EFE7] border-[#1b4332] text-slate-900"
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
                                                            <div className="w-2 h-2 rounded-full bg-[#1b4332] animate-ping" />
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
                        <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold uppercase tracking-wider">
                            Applied Green Innovations
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#1b4332] mt-2">
                            Featured Sustainability Projects
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        {FEATURED_PROJECTS.map((project) => {
                            return (
                                <div
                                    key={project.id}
                                    className="p-5 sm:p-6 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-[#1b4332] hover:bg-[#edf4ee] transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="px-2 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold">
                                                {project.status}
                                            </span>
                                            <span className="text-xs font-bold text-[#1b4332]">{project.metrics}</span>
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
                                            className="text-xs font-bold text-slate-700 hover:text-[#1b4332] flex items-center gap-1 cursor-pointer"
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
                <div className="bg-[#E5EFE7] border border-[#c2d8c6] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 text-center max-w-3xl mx-auto">
                        <span className="px-2.5 py-0.5 rounded bg-white text-[#1b4332] text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                            Sensing Infrastructure & Lab Hardware
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b4332] mt-2">
                            Environmental Sensing Infrastructure
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
                            <span className="px-2.5 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold uppercase tracking-wider">
                                Sustainability Publications & Papers
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#1b4332] mt-2">
                                Academic & Policy Research Outputs
                            </h2>
                        </div>
                        <Link href="/blog?category=research" className="mt-3 md:mt-0 text-xs font-bold text-[#1b4332] hover:underline flex items-center gap-1">
                            <span>View All Publications</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {PUBLICATIONS.map((pub) => (
                            <div key={pub.id} className="p-5 rounded-lg bg-[#F7F7F4] border border-slate-200/80 hover:border-slate-300 transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <span className="px-2 py-0.5 rounded bg-[#E5EFE7] text-[#1b4332] text-[11px] font-bold">
                                        {pub.venue}
                                    </span>
                                    <span className="text-[11px] text-slate-500 font-mono">{pub.year} • {pub.topic}</span>
                                </div>
                                <h3 className="font-serif text-base font-bold text-slate-900 mb-1 hover:text-[#1b4332] transition-colors">
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
                                        className="text-xs font-bold text-[#1b4332] hover:underline"
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
                <div className="bg-[#E5EFE7] border border-[#c2d8c6] rounded-1xl shadow-lg shadow-black/15 p-8 sm:p-12 text-center relative overflow-hidden">
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1b4332] mb-3">
                        Join the Frontier of Green Tech Policy & Research
                    </h2>
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                        Partner with SGPC to deploy AI-driven carbon accounting, co-sponsor material informatics research, or establish municipal climate policy frameworks.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/apply?type=fellowship&domain=AI"
                            className="px-6 py-3 rounded-lg bg-[#1b4332] hover:bg-[#143326] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                        >
                            Apply for Research Fellowship
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#1b4332] font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all"
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
