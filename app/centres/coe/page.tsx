"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    PlayCircle,
    X
} from "lucide-react";
import Link from "next/link";

// CoE Research Pillars Data - Aligned with The Foundry's 4 Core Pillars
const RESEARCH_PILLARS = [
    {
        id: "deep-tech",
        title: "Deep Tech & HPC Supercomputing Infrastructure",
        shortDesc: "Establishing high-performance computing labs, GPU superclusters, and advanced AI testbeds.",
        badge: "Pillar 01",
        fullDesc: "Our HPC Supercomputing pillar designs and deploys physical GPU/TPU clusters, liquid-cooled server racks, sub-millisecond InfiniBand fabrics, and sovereign AI sandboxes for academic institutions and enterprise R&D centers.",
        highlights: [
            "NVIDIA H100 / A100 Supercomputing Infrastructure Deployment",
            "Liquid-Cooled Green Compute Architecture & Data Center Metrics",
            "High-Throughput Vector & Graph Database Acceleration",
            "Sovereign Air-Gapped AI Sandbox Environments for R&D"
        ],
        stats: { metrics: "50+", label: "Institutional CoE Labs Deployed" },
        specPaper: {
            title: "Technical Spec Paper 01: Turnkey HPC Supercluster & AI Sandbox Infrastructure",
            downloadUrl: "#publications"
        }
    },
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Commercial Venture Incubation",
        shortDesc: "Building university startup incubators, IP commercialization frameworks, and founder tracks.",
        badge: "Pillar 02",
        fullDesc: "Bridging academic research with venture capital. We establish zero-to-one deep tech incubators within partner campuses, provide patent translation frameworks, and fund student/faculty founder teams.",
        highlights: [
            "Campus Deep Tech Startup Accelerator & Grant Funding",
            "IP Licensing, Patent Translation & Commercialization SDKs",
            "Autonomous Multi-Agent Enterprise Operations Labs",
            "Venture Studio Incubation & Investor Demo Days"
        ],
        stats: { metrics: "120+", label: "Startups Incubated via CoE" },
        specPaper: {
            title: "Technical Spec Paper 02: University IP Translation & Venture Studio Frameworks",
            downloadUrl: "#publications"
        }
    },
    {
        id: "sustainability",
        title: "Sustainability & Ecological Computing Labs",
        shortDesc: "Green data center telemetry, carbon-neutral compute scheduling, and ESG research.",
        badge: "Pillar 03",
        fullDesc: "Engineering eco-efficient computing environments. We integrate real-time PUE (Power Usage Effectiveness) monitoring, solar-supplemented data centers, and material informatics labs within host universities.",
        highlights: [
            "PUE-Optimized Green Data Center Engineering & Telemetry",
            "Carbon-Aware Dynamic Workload Compute Schedulers",
            "Material Informatics & Synthetic Biodegradable Polymer Labs",
            "Automated Scope 1-3 Carbon Accounting Infrastructure"
        ],
        stats: { metrics: "1.2 PUE", label: "Ultra-Efficient Compute Standard" },
        specPaper: {
            title: "Technical Spec Paper 03: Carbon-Aware Workload Scheduling in Institutional Data Centers",
            downloadUrl: "#publications"
        }
    },
    {
        id: "energy",
        title: "Renewable Energy & Power Systems Testing",
        shortDesc: "Smart grid telemetry hardware, microgrid simulators, and SCADA testbeds.",
        badge: "Pillar 04",
        fullDesc: "Building physical testbeds for energy transition engineering. We equip CoE facilities with hardware-in-the-loop (HIL) grid simulators, SCADA intrusion defense cells, and renewable storage monitoring systems.",
        highlights: [
            "Hardware-in-the-Loop (HIL) Microgrid Power Flow Simulators",
            "SCADA & Modbus Industrial Control System Cyber Security Labs",
            "Sub-Millisecond Renewable Grid Telemetry Testbeds",
            "Clean Energy Battery Storage & Thermal Telemetry Testing"
        ],
        stats: { metrics: "< 1ms", label: "HIL Simulation Loop Latency" },
        specPaper: {
            title: "Technical Spec Paper 04: Hardware-in-the-Loop Simulators for Sovereign Power Grids",
            downloadUrl: "#publications"
        }
    }
];

// Featured CoE Initiatives Data
const FEATURED_PROJECTS = [
    {
        id: "supercluster-coe",
        name: "Project SuperCluster-CoE",
        category: "HPC Infrastructure",
        status: "Active Deployment",
        desc: "Turnkey 50+ TFLOPS GPU supercomputer lab architecture equipped with liquid cooling, InfiniBand networking, and PyTorch/CUDA software stacks.",
        tags: ["NVIDIA Supercluster", "Liquid Cooling", "CUDA Infrastructure", "HPC"],
        metrics: "50+ TFLOPS Compute"
    },
    {
        id: "venturefoundry-coe",
        name: "VentureFoundry Hub",
        category: "Venture Incubation",
        status: "In Production",
        desc: "On-campus venture studio incubation engine providing seed grants, legal IP frameworks, and mentor networks for student deep-tech founders.",
        tags: ["Venture Studio", "IP Translation", "Campus Incubator", "Seed Grants"],
        metrics: "$5M+ Seed Capital Deployed"
    },
    {
        id: "cyberrange-coe",
        name: "CyberRange Matrix",
        category: "Defense & Cyber",
        status: "Live Lab",
        desc: "Air-gapped security range simulating nation-state cyber attacks, VAPT vulnerability scans, and industrial SCADA firewall testing.",
        tags: ["Air-Gapped Range", "SCADA Security", "VAPT Testing", "Red Teaming"],
        metrics: "100% Isolated Sandbox"
    },
    {
        id: "greencompute-coe",
        name: "GreenCompute Facility",
        category: "Sustainability",
        status: "Grant Project",
        desc: "PUE-optimized research data center equipped with solar power integration, carbon-aware job scheduling, and ESG telemetry dashboards.",
        tags: ["PUE 1.2", "Solar Integration", "ESG Dashboards", "Green Compute"],
        metrics: "45% Energy Savings"
    }
];



// Compute & Lab Stats
const INFRA_STATS = [
    { label: "CoE Labs Established", value: "50+ Academic & Enterprise Hubs" },
    { label: "Engineers & Researchers Trained", value: "25,000+ Students & Faculty" },
    { label: "Lab Equipment Deployed", value: "$20M+ Supercomputing Hardware" },
    { label: "Industry Accreditation", value: "100% Industry Recognized Certifications" }
];

export default function CoEResearchCentrePage() {
    const [selectedPillar, setSelectedPillar] = useState(RESEARCH_PILLARS[0].id);
    const [simStep, setSimStep] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeSpecModal, setActiveSpecModal] = useState<string | null>(null);

    // Interactive CoE Deployment Simulator steps
    const simSteps = [
        { label: "Institutional Audit & Feasibility", status: "Evaluating campus infrastructure...", detail: "Audited power capacity, thermal load, and academic curriculum requirements" },
        { label: "Supercomputer Hardware Procurement", status: "Provisioning GPU clusters...", detail: "Deployed liquid-cooled NVIDIA H100 supercomputing racks & InfiniBand switch fabric" },
        { label: "Applied Industry Curriculum Integration", status: "Configuring learning environments...", detail: "Loaded 12+ industry-aligned modules in AI, Cyber Security, Quantum, and Blockchain" },
        { label: "Industry Lab Launch & Incubation", status: "Connecting enterprise partners...", detail: "Onboarded 5 enterprise corporate sponsors & launched campus venture studio" },
        { label: "Accredited Cohort Execution", status: "CoE Fully Operational!", detail: "First 250 engineers onboarded with 100% hands-on lab environment access" }
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
                            Centre of Excellence (CoE)
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-snug">
                            Establish high-performance computing labs, applied curriculum, and research environments.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
                            The Centre of Excellence (CoE) at The Foundry partners with universities, government bodies, and enterprise research labs to establish state-of-the-art supercomputing infrastructure, applied industry curriculum, and sovereign innovation hubs.
                        </p>

                        {/* CTA Buttons matching Foundry style */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="#pillars"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#002f86] hover:bg-[#002266] text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                            >
                                <span>Explore CoE Pillars</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#collaborate"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#002f86] font-semibold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all cursor-pointer"
                            >
                                <span>Establish CoE at Your Institution</span>
                            </a>
                        </div>
                    </div>

                    {/* Metric Stats Cards in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#b8d1ea]">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">50+ CoEs</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Established Worldwide</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">25,000+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Engineers Trained</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">$20M+</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Lab Hardware Deployed</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-lg border border-slate-200/60 shadow-sm text-center">
                            <p className="text-xl sm:text-2xl font-serif font-extrabold text-[#002f86]">100%</p>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">Industry Accreditation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE RESEARCH PILLARS SECTION */}
            <section id="pillars" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 max-w-3xl">
                        <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold uppercase tracking-wider">
                            Institutional Focus
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            CoE Core Pillars
                        </h2>
                        <p className="text-slate-700 text-xs sm:text-sm mt-1">
                            Our Centre of Excellence frameworks center around the four core pillars of The Foundry.
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
                                            <span>CoE Lab Specifications</span>
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
                                CoE Institutional Architecture Spec
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                                {activePillarObj.specPaper.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                                Detailed technical whitepaper detailing hardware procurement, lab layout specifications, curriculum integration guidelines, and industrial accreditation for {activePillarObj.title}.
                            </p>

                            <div className="p-4 rounded-xl bg-[#F7F7F4] border border-slate-200 text-xs font-mono text-slate-700 mb-6 space-y-1">
                                <p className="font-bold text-slate-900">Spec Details:</p>
                                <p>• Publication ID: COE-SPEC-2026-01</p>
                                <p>• Format: IEEE / Institutional Blueprint PDF</p>
                                <p>• Status: Peer Reviewed & Verified</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <a
                                    href="#collaborate"
                                    onClick={() => setActiveSpecModal(null)}
                                    className="w-full py-3 px-4 rounded-xl bg-[#002f86] hover:bg-[#002266] text-white text-center font-bold text-xs shadow-md transition-all block"
                                >
                                    Partner with CoE
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* INTERACTIVE COE LAB DEPLOYMENT SIMULATOR */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5">
                            <span className="px-2.5 py-0.5 rounded bg-white text-[#002f86] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                Interactive Lab Simulation
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2 mb-3">
                                CoE Deployment Simulator
                            </h2>
                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                                Experience how The Foundry establishes a Centre of Excellence: from campus feasibility audits and supercomputer hardware setup to applied curriculum integration and industry lab launch.
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
                                <span>{isSimulating ? "Simulating CoE Setup..." : "Simulate CoE Deployment"}</span>
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-md font-mono text-xs">
                                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3 font-sans">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#002f86]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-slate-500 text-[11px] font-semibold ml-1.5">coe-setup-runtime v1.4</span>
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

            {/* FEATURED COE INITIATIVES */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-6">
                <div className="bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 p-6 sm:p-8 md:p-10">
                    <div className="mb-6 max-w-3xl">
                        <span className="px-2.5 py-0.5 rounded bg-[#DCE7F1] text-[#002f86] text-[11px] font-bold uppercase tracking-wider">
                            Institutional Blueprints
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#002f86] mt-2">
                            Featured CoE Initiatives
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
                                            href="#collaborate"
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
                            Facilities & Lab Hardware
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mt-2">
                            CoE Infrastructure Metrics
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

            {/* CALL TO ACTION / COLLABORATE SECTION */}
            <section id="collaborate" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-6 mb-12">
                <div className="bg-white border border-slate-200/80 rounded-1xl shadow-lg shadow-black/15 p-8 sm:p-12 text-center relative overflow-hidden">
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#002f86] mb-3">
                        Establish a Centre of Excellence at Your Institution
                    </h2>
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
                        Partner with The Foundry to establish supercomputing labs, integrate applied deep-tech curriculum, or launch an on-campus venture studio for your university or enterprise.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/apply?type=fellowship&domain=AI"
                            className="px-6 py-3 rounded-lg bg-[#002f86] hover:bg-[#002266] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                        >
                            Apply for CoE Partnership
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg bg-[#F7F7F4] hover:bg-slate-200/70 text-[#002f86] font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all"
                        >
                            Institutional Partnership Inquiry
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
