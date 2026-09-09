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
    Leaf,
    Cpu,
    Server,
    Sparkles,
    Layers,
    ShieldCheck,
    Zap,
    Rocket,
    Activity,
    Code2,
    Globe,
    TreePine
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
        icon: Leaf,
        accentColor: "from-emerald-600 to-teal-600",
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
        icon: Rocket,
        accentColor: "from-indigo-600 to-purple-600",
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
        icon: TreePine,
        accentColor: "from-green-600 to-emerald-700",
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
        icon: Zap,
        accentColor: "from-amber-500 to-orange-600",
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

// Decarbonization Architecture Stack Layers
const ECOLOGICAL_STACK_LAYERS = [
    {
        num: "01",
        name: "Satellite & Sensor Sensing",
        desc: "Hyperspectral Satellite Feeds, VLM Microplastics Classification, & IoT Gas Telemetry",
        icon: Globe,
        badge: "Hyperspectral Sensing"
    },
    {
        num: "02",
        name: "Material Informatics Engine",
        desc: "Macromolecular Polymer Design, Degradation Simulation, & Bio-Synthetic Modeling",
        icon: Cpu,
        badge: "Bio-Synthetic Design"
    },
    {
        num: "03",
        name: "Scope 1-3 Carbon Ledger",
        desc: "Automated Life Cycle Assessment (LCA), Immutable Audits, & Anti-Greenwashing Proofs",
        icon: Layers,
        badge: "Scope 1-3 Telemetry"
    },
    {
        num: "04",
        name: "Decarbonization Policy API",
        desc: "Sovereign Carbon Tax Modeling, Municipal Solar Grid Transition, & Tariff Optimization",
        icon: Server,
        badge: "Policy API"
    }
];

// Research Publications Data
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



export default function SGPCResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);
    const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);

    // Interactive Sustainability Simulator steps
    const simSteps = [
        { label: "Hyperspectral Telemetry Ingest", status: "Ingesting satellite water spectral imagery...", detail: "Detected 96.4% confidence microplastics particle concentration in coastal runoff" },
        { label: "VLM Spectral Classification", status: "Vision Language Model analyzing polymers...", detail: "Identified polyethylene terephthalate (PET) vs bio-degradable PLA polymer spectral signature" },
        { label: "Material Informatics Synthesis", status: "Modeling bio-synthetic degradation loop...", detail: "Synthesized bio-based enzyme catalyst reducing degradation lifespan from 450 yrs to 45 days" },
        { label: "Scope 1-3 Carbon Ledger Verification", status: "Running IoT emissions audit...", detail: "Verified 4.8M tons carbon avoidance calculation with zero-greenwashing immutable proof" },
        { label: "Decarbonization Policy Report", status: "Policy Dispatch Verified!", detail: "Generated municipal clean water & carbon credit policy specification with 100% compliance" }
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

            {/* Banner Image Section with Visual Glass Badges */}
            <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden mt-16">
                <Image
                    src="/images/sgpc_banner.jpg"
                    alt="Sustainability & Green Tech Policy Centre"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-7xl px-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-mono font-semibold mb-4 backdrop-blur-md">
                            <Leaf className="w-3.5 h-3.5 text-emerald-300" />
                            <span>Sustainability Research Centre of Excellence</span>
                        </div>
                        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
                            Sustainability & Green Tech Policy Centre (SGPC)
                        </h1>
                        <p className="text-slate-200 text-sm md:text-base mt-3 max-w-2xl font-light">
                            Pioneering VLM microplastics detection, material informatics, precision Scope 1-3 carbon accounting, and climate policy.
                        </p>

                        {/* Quick Anchor Badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            <a href="#pillars" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Core Pillars
                            </a>
                            <a href="#architecture" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Decarbonization Stack
                            </a>
                            <a href="#simulator" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-all">
                                Ecological Simulator
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 text-xs font-bold font-mono mb-3">
                                🌿 Planetary Sustainability & Policy
                            </div>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Engineering Technologies for a Permanent Future
                            </h2>
                            <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
                                The Sustainability & Green Tech Policy Centre (SGPC) at The Foundry leads research into Vision-Language microplastics sensing, material informatics for bio-degradable polymers, automated Scope 1-3 carbon accounting, and renewable grid transition policies.
                            </p>
                        </div>

                        {/* Interactive Visual Stat Cards */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100/80 shadow-xs text-left group hover:scale-[1.02] transition-transform">
                                <div className="w-10 h-10 rounded-lg bg-[#002f86] text-white flex items-center justify-center mb-3 shadow-sm">
                                    <Leaf size={20} />
                                </div>
                                <p className="text-2xl sm:text-3xl font-sans font-bold text-[#002f86]">96.4%</p>
                                <p className="text-xs text-slate-600 font-medium mt-0.5">VLM Detection Accuracy</p>
                            </div>

                            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 shadow-xs text-left group hover:scale-[1.02] transition-transform">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3 shadow-sm">
                                    <FileText size={20} />
                                </div>
                                <p className="text-2xl sm:text-3xl font-sans font-bold text-slate-900">35+</p>
                                <p className="text-xs text-slate-600 font-medium mt-0.5">IEEE & Top Papers</p>
                            </div>

                            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/40 border border-emerald-100/80 shadow-xs text-left group hover:scale-[1.02] transition-transform">
                                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-sm">
                                    <TreePine size={20} />
                                </div>
                                <p className="text-2xl sm:text-3xl font-sans font-bold text-emerald-950">4.8M Tons</p>
                                <p className="text-xs text-slate-600 font-medium mt-0.5">Carbon Avoided</p>
                            </div>

                            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50/40 border border-indigo-100/80 shadow-xs text-left group hover:scale-[1.02] transition-transform">
                                <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-3 shadow-sm">
                                    <Server size={20} />
                                </div>
                                <p className="text-2xl sm:text-3xl font-sans font-bold text-indigo-950">$5M+</p>
                                <p className="text-xs text-slate-600 font-medium mt-0.5">Material Labs & Satellites</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Research Pillars - Interactive Tab Switcher & Visual Cards */}
                <section className="text-slate-800 border-t border-slate-200/50 bg-[#F7F7F4] p-8 sm:p-12 md:p-16" id="pillars">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono mb-1">
                                Sustainability Research Matrix
                            </span>
                            <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                                Core Ecological Research Pillars
                            </h2>
                        </div>
                        <p className="text-xs text-slate-500 max-w-md mt-2 md:mt-0 font-medium">
                            Select a pillar to explore specialized environmental labs, eco-highlights, and technical whitepapers.
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
                                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[10px] font-bold font-mono">
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
                                            <span>Read Technical Sustainability Spec</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Graphic Card Preview */}
                                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#001f5c] to-slate-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden font-mono text-xs">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <Leaf size={160} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-sans">
                                            <span className="text-emerald-300 font-bold text-xs">SPEC PAPER PREVIEW</span>
                                            <span className="text-slate-400 text-[10px]">IEEE XPLORE VERIFIED</span>
                                        </div>
                                        <p className="text-white font-serif text-base font-bold mb-3 leading-snug">
                                            {activePillarObj.specPaper.title}
                                        </p>
                                        <p className="text-slate-300 text-xs font-sans leading-relaxed mb-6">
                                            Detailed VLM spectral classification benchmarks, carbon accounting telemetry proofs, and policy transition models.
                                        </p>

                                        <a
                                            href={activePillarObj.specPaper.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#002f86] rounded-lg font-bold text-xs hover:bg-emerald-50 transition-colors cursor-pointer"
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

                {/* Planetary Decarbonization Architecture Stack Diagram Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-200/50" id="architecture">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] font-mono block mb-2">
                            SYSTEM ARCHITECTURE
                        </span>
                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl mb-3">
                            The Decarbonization Stack
                        </h2>
                        <p className="text-sm text-slate-600">
                            Our four-tier architecture combining VLM satellite sensing, material informatics, Scope 1-3 ledgers, and climate policy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ECOLOGICAL_STACK_LAYERS.map((layer, idx) => {
                            const LayerIcon = layer.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#F7F7F4] border border-slate-200/80 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all duration-300 relative group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold text-slate-400">{layer.num}</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold font-mono">
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
                                        <span>Verified Ecological Framework</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Interactive Ecological Simulator Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#DCE7F1] border-t border-slate-200/50" id="simulator">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#002f86] mb-2 block font-mono">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002f86] mb-4">
                                Autonomous Microplastics & Carbon Simulator
                            </h2>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                                Witness how SGPC&apos;s VLM spectral engine ingests satellite coastal imagery, classifies microplastics polymers, models bio-degradation catalyst loops, and verifies Scope 1-3 carbon ledgers.
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
                                <span>{isSimulating ? "Simulating Environmental Telemetry..." : "Simulate Ecological Telemetry"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-6 bg-white border border-slate-200/80 font-mono text-xs rounded-2xl shadow-md">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">sgpc-eco-runtime v3.4</span>
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
                                IEEE & ECOLOGICAL VENUES
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
                        <p className="text-lg text-slate-600">Common queries about SGPC research fellowships, ESG audit suites, and satellite telemetry access.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <FAQItem question="What is SGPC's primary research focus?">
                                SGPC conducts research across 4 core pillars: Deep Tech & Ecological Intelligence, Entrepreneurship & Green Venture, Sustainability & Carbon Accounting, and Renewable Energy & Climate Policy.
                            </FAQItem>
                            <FAQItem question="How can researchers apply for Green Tech Fellowships?">
                                Climate scientists, material informatics researchers, and policy analysts can apply for fellowships through our open application calls or sponsored sustainability grants.
                            </FAQItem>
                            <FAQItem question="Can corporations request automated ESG asset verification?">
                                Yes. Enterprises partner with SGPC to implement Scope 1-3 carbon telemetry, life-cycle impact modeling (LCA), and anti-greenwashing audit verifiers.
                            </FAQItem>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <FAQItem question="What satellite infrastructure powers SGPC labs?">
                                SGPC ingests real-time hyperspectral satellite feeds for automated microplastics ocean detection, deforestation tracking, and municipal heat island modeling.
                            </FAQItem>
                            <FAQItem question="Are SGPC research publications open access?">
                                Yes. All research outputs produced by SGPC are published in peer-reviewed IEEE venues and open-access climate whitepapers.
                            </FAQItem>
                            <FAQItem question="How does SGPC support clean-tech startups?">
                                Through Pillar 02 (Green Venture), early-stage climate tech startups receive satellite data access, ESG compliance verification, and incubation support.
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
                                SGPC Technical Sustainability Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical sustainability whitepaper covering VLM spectral classification, carbon accounting telemetry, and decarbonization proofs for {activePillarObj.title}.
                            </p>

                            <div className="p-4 bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900 font-sans">Spec Details:</p>
                                <p>• Publication ID: SGPC-SPEC-2026-01</p>
                                <p>• Format: IEEE Xplore / Sustainability PDF</p>
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
