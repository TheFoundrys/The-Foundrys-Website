"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { SyllabusMindMap } from "@/components/ui/syllabus-mind-map";
import { CareerVision } from "@/components/schools/shared/career-vision";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
    CheckCircle2,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    Rocket,
    BrainCircuit,
    Database,
    Bot,
    Layers,
    LineChart,
    PieChart,
    Table,
    Lock,
    Network,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const BLOCKCHAIN_TOOLS = [
    { name: "Solidity", url: "https://cdn.simpleicons.org/solidity" },
    { name: "Vyper", url: "https://cdn.simpleicons.org/python" },
    { name: "Rust", url: "https://cdn.simpleicons.org/rust" },
    { name: "Go", url: "https://cdn.simpleicons.org/go" },
    { name: "Hardhat", url: "https://cdn.simpleicons.org/hardhat" },
    { name: "Foundry", url: "https://cdn.simpleicons.org/ethereum" },
    { name: "Ethers.js", url: "https://cdn.simpleicons.org/ethereum" },
    { name: "Web3.js", url: "https://cdn.simpleicons.org/ethereum" },
    { name: "IPFS", url: "https://cdn.simpleicons.org/ipfs" },
    { name: "Arweave", url: "https://cdn.simpleicons.org/arweave" }
];

const polarData = [
    {
        label: "Academic Sessions",
        percent: 40,
        color: "#a855f7", // Purple
        radius: 180,
        desc: "Structured classes covering consensus protocols, distributed systems, and VM architecture."
    },
    {
        label: "Smart Contract Lab",
        percent: 25,
        color: "#6366f1", // Indigo
        radius: 155,
        desc: "Writing, deploying, and security-auditing smart contracts using Solidity and Foundry."
    },
    {
        label: "Cryptography Lab",
        percent: 15,
        color: "#3b82f6", // Blue
        radius: 130,
        desc: "Hands-on implementations of hash functions, digital signatures, and Zero-Knowledge proofs."
    },
    {
        label: "DAO Hackathons",
        percent: 10,
        color: "#10b981", // Emerald
        radius: 105,
        desc: "Designing governance models, voting frameworks, and launching actual DAOs with peers."
    },
    {
        label: "Student Circles",
        percent: 10,
        color: "#ec4899", // Pink
        radius: 80,
        desc: "Collaborative Web3 clubs, protocol research reading groups, and developer workshops."
    },
];

const CAREER_ROLES = [
    {
        id: "blockchain-protocol-engineer",
        label: "Protocol Engineer",
        title: "Blockchain Protocol Engineer",
        desc: "Engineers consensus engines, peer-to-peer networking modules, and distributed ledger nodes using Rust and Go.",
        salary: "₹9L - 18L",
        growth: "+48% YoY",
        skills: [
            "Rust / Go",
            "P2P Networks",
            "Consensus (PoW/PoS)",
            "Cryptography",
            "Systems Coding"
        ],
        responsibilities: [
            "Designing state machine replication logic",
            "Optimizing transaction propagation delays",
            "Developing core distributed databases",
            "Implementing cryptographic signatures on nodes",
            "Auditing peer connections and gossip networks"
        ]
    },
    {
        id: "smart-contract-auditor",
        label: "Security Auditor",
        title: "Smart Contract Security Auditor",
        desc: "Performs formal verification, static analysis, and manual code audits of EVM contracts to discover reentrancy and pricing exploits.",
        salary: "₹8L - 16L",
        growth: "+42% YoY",
        skills: [
            "Solidity & Vyper",
            "Formal Verification",
            "Slither & Mythril",
            "DeFi Exploit Vectors",
            "Fuzzing"
        ],
        responsibilities: [
            "Auditing smart contracts for production deployment",
            "Writing vulnerability reports and remediation guidance",
            "Creating custom security fuzzing trials",
            "Interfacing with protocol developers on secure design",
            "Simulating multi-million dollar economic attack scenarios"
        ]
    },
    {
        id: "zk-systems-developer",
        label: "ZK Systems Developer",
        title: "Zero-Knowledge Systems Developer",
        desc: "Designs arithmetic circuits for zk-SNARKs and zk-STARKs. Builds private state transitions and scaling rollups using Circom and Halo2.",
        salary: "₹11L - 22L",
        growth: "+52% YoY",
        skills: [
            "Circom & Halo2",
            "zk-SNARKs / STARKs",
            "Polynomial Commitments",
            "Rust",
            "Privacy Primitives"
        ],
        responsibilities: [
            "Compiling ZK arithmetic circuits for rollup layers",
            "Optimizing prover performance and setup ceremonies",
            "Implementing private transaction logic",
            "Developing custom constraint systems",
            "Bridging cryptographic statements to on-chain verifiers"
        ]
    },
    {
        id: "tokenomics-architect",
        label: "Tokenomics Architect",
        title: "Tokenomics Architect / Economist",
        desc: "Applies game theory and simulation models to construct long-term token economic structures and DAO voting rules.",
        salary: "₹7L - 15L",
        growth: "+35% YoY",
        skills: [
            "Game Theory",
            "cadCAD Modeling",
            "Governance Design",
            "DAO Orchestration",
            "Python Simulations"
        ],
        responsibilities: [
            "Modeling token supply schedules and inflation loops",
            "Simulating staking mechanisms and collateral ratios",
            "Designing decentralized governance voting rules",
            "Analyzing market liquidity behaviors",
            "Structuring incentive schemes for network validators"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        year: 1,
        title: "Cryptographic Foundations",
        topics: [
            "Distributed Systems: Consensus algorithms, P2P networks and Byzantine fault tolerance",
            "Cryptography Basics: Hash functions, symmetric/asymmetric keys and signatures",
            "Data Primitives: Merkle trees, bloom filters and directed acyclic graphs (DAGs)",
            "Protocol Intro: Bitcoin mechanics, UTXO model and Proof-of-Work internals",
            "LMS Practical: Building a localized P2P block propagation script in Python",
            "Entrepreneurship 101: Distributed Tech Markets & Value Mapping"
        ]
    },
    {
        year: 2,
        title: "Smart Contracts & VM Architecture",
        topics: [
            "EVM Deep Dive: OpCodes, storage slots, memory layout and gas models",
            "Solidity Engineering: Security design patterns, events, inheritance and modifiers",
            "DeFi Primitives: Automated Market Makers (Uniswap v2/v3) and lending algorithms",
            "DAO Governance: Token mechanics, voting algorithms and multi-signature design",
            "LMS Practical: Coding, deploying and unit testing DeFi contracts with Foundry",
            "Startup Lab: Smart Contract Product Design & MVP Launch"
        ]
    },
    {
        year: 3,
        title: "Scaling & Privacy (ZK)",
        topics: [
            "Layer 2 Scaling: Optimistic rollups, ZK rollups, state channels and sidechains",
            "Zero Knowledge Proofs: Math of SNARKs and STARKs, polynomial commitments",
            "Advanced DeFi: Flash loans, collateralized debt positions (CDPs) and MEV",
            "Interoperability: Cross-chain messaging, bridges, Cosmos IBC and Substrate",
            "LMS Practical: Compiling ZK circuits using Circom and verified on-chain checks",
            "Founder Track: DAO Token Engineering, Tokenomics Modeling & Community Setup"
        ]
    },
    {
        year: 4,
        title: "Advanced Protocols & Scale",
        topics: [
            "Layer 1 Engineering: Building custom blockchains using Rust and Cosmos SDK",
            "Formal Verification: Proof verification methodologies and mathematical contract safety",
            "System Scaling: Cross-shard messaging, state storage reduction and light nodes",
            "Major Capstone: Developing a production scaling rollup or L1 blockchain",
            "Residency: 6-Month Full-Time Web3 Residency with Venture Partners",
            "Founder Track: Venture Launch, DAO Funding & Pitching"
        ]
    }
];

const REASONS = [
    {
        icon: Layers,
        title: "Full-Stack Web3",
        desc: "Don't just write Solidity. Understand distributed systems, consensus algorithms, and P2P networking from the ground up.",
        color: "bg-purple-50 text-purple-600 border border-purple-100"
    },
    {
        icon: ShieldCheck,
        title: "Security Scaling",
        desc: "Deep dive into smart contract auditing, formal verification, and advanced cryptographic primitives.",
        color: "bg-indigo-50 text-indigo-600 border border-indigo-100"
    },
    {
        icon: Lock,
        title: "ZK Engineering",
        desc: "Master the frontier of privacy and scalability with Zero-Knowledge Rollups, SNARKs, and STARKs.",
        color: "bg-blue-50 text-blue-600 border border-blue-100"
    },
    {
        icon: Code2,
        title: "Protocol Design",
        desc: "Learn to design sustainable tokenomics and governance models for decentralized autonomous organizations.",
        color: "bg-emerald-50 text-emerald-600 border border-emerald-100"
    }
];

const ToolMarquee = ({ tools, reverse = false, speed = 80 }: { tools: any[], reverse?: boolean, speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden select-none py-2 md:py-3 relative bg-slate-50 border-y border-slate-200">
            <motion.div
                className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {[...tools, ...tools].map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-200 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <img
                                src={tool.url}
                                alt={tool.name}
                                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=128`;
                                }}
                            />
                        </div>
                        <span
                            className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-400 group-hover:text-slate-800 transition-colors duration-300 font-sans"
                        >
                            {tool.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function BlockchainClient() {
    const [duration, setDuration] = useState<3 | 4>(3);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const legendRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleSliceClick = (index: number) => {
        if (legendRefs.current[index]) {
            legendRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
            setHoveredIndex(index);
            setTimeout(() => setHoveredIndex(null), 2000);
        }
    };

    let currentAngle = 0;
    const paths = polarData.map((slice, i) => {
        const startLast = currentAngle;
        const sliceAngle = (slice.percent / 100) * 360;
        const endAngle = currentAngle + sliceAngle;
        currentAngle = endAngle;

        const startRad = (startLast - 90) * (Math.PI / 180);
        const endRad = (endAngle - 90) * (Math.PI / 180);

        const x1 = 200 + slice.radius * Math.cos(startRad);
        const y1 = 200 + slice.radius * Math.sin(startRad);
        const x2 = 200 + slice.radius * Math.cos(endRad);
        const y2 = 200 + slice.radius * Math.sin(endRad);

        const largeArcFlag = sliceAngle > 180 ? 1 : 0;
        const d = `M 200 200 L ${x1} ${y1} A ${slice.radius} ${slice.radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

        return { d, ...slice, centerAngle: startLast + sliceAngle / 2 };
    });

    return (
        <main className="min-h-screen font-sans selection:bg-purple-100 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* 1. TOP BANNER IMAGE SECTION */}
            <section className="relative h-[260px] md:h-[380px] mt-16 flex items-center justify-center overflow-hidden">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .school-title-white {
                        color: #ffffff !important;
                    }
                    .school-tag-white {
                        color: #ffffff !important;
                        border-color: rgba(255, 255, 255, 0.2) !important;
                        background-color: rgba(255, 255, 255, 0.1) !important;
                    }
                    `
                }} />
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 select-none">
                    <img 
                        src="/images/school-blockchain.png" 
                        alt="School of Blockchain" 
                        className="w-full h-full object-cover brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm school-tag-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        School of Deep Tech
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase font-serif school-title-white">
                        School of Blockchain
                    </h1>
                </div>
            </section>

            {/* Introduction & Overview Section with Floating Specs Card */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
                <section className="bg-white p-8 sm:p-12 md:p-16 text-[#031a57]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
                            {/* Left: Intro & Toggles */}
                            <div className="max-w-3xl">
                                <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Trust & Scale</p>
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#031a57] font-serif mb-6 leading-tight">
                                    Engineer decentralized protocols for the new internet.
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
                                    A {duration}-year immersive degree merging Distributed Systems, Cryptography, and Tokenomics. <br />
                                    <span className="text-[#031a57] font-medium">Graduate with deep protocol engineering credentials, smart contract audit portfolios, and Zero-Knowledge solutions.</span>
                                </p>

                                {/* Duration Toggle */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setDuration(3)}
                                        className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                                            duration === 3 
                                                ? 'bg-[#002f86] text-white shadow-lg shadow-blue-900/25 scale-105' 
                                                : 'bg-slate-50 text-slate-600 hover:text-slate-950 border border-slate-200 hover:bg-slate-100'
                                        }`}
                                    >
                                        3-Year Program
                                    </button>
                                    <button
                                        onClick={() => setDuration(4)}
                                        className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                                            duration === 4 
                                                ? 'bg-[#002f86] text-white shadow-lg shadow-blue-900/25 scale-105' 
                                                : 'bg-slate-50 text-slate-600 hover:text-slate-950 border border-slate-200 hover:bg-slate-100'
                                        }`}
                                    >
                                        4-Year Program
                                    </button>
                                </div>
                            </div>

                            {/* Right: Info Boxes in clean grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 p-8 bg-slate-50 border border-slate-200 rounded-[2rem] min-w-full lg:min-w-[340px]">
                                {/* Degrees */}
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Available Degrees</p>
                                    <div className="space-y-1.5 border-l-2 border-purple-550 pl-4">
                                        <p className="text-sm font-bold text-[#031a57]">{duration === 3 ? "B.Sc in Blockchain Technology" : "B.Tech in Blockchain Technology"}</p>
                                    </div>
                                </div>

                                {/* Partners */}
                                {duration === 3 && (
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Partner Institutions</p>
                                        <div className="space-y-1.5 border-l-2 border-cyan-500 pl-4">
                                            <p className="text-sm font-bold text-[#031a57]">Keshava Degree College</p>
                                        </div>
                                    </div>
                                )}

                                {/* Certifications */}
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Industry Credentials</p>
                                    <div className="flex gap-4 border-l-2 border-purple-500 pl-4 items-center">
                                        <div>
                                            <span className="text-sm font-extrabold text-blue-600 tracking-wider block leading-none">FCEP</span>
                                            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Executive</span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-extrabold text-cyan-600 tracking-wider block leading-none">FCIP</span>
                                            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Practitioner</span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-extrabold text-purple-600 tracking-wider block leading-none">FFP</span>
                                            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Professional</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Details specs block (nested inside card) */}
                <div className="bg-[#F7F7F4] border-t border-slate-200/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-14 flex-1 text-left w-full">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Length</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">{duration}-Year Full-Time</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Delivery Mode</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">On-Campus, Immersive</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Campus Location</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">Hyderabad, India</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Cohort Status</p>
                            <p className="text-base sm:text-lg font-bold text-emerald-600">Admissions Closed</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-[#002f86] text-white border border-[#002f86] font-bold rounded-xl hover:bg-[#002f86]/90 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,47,134,0.15)] whitespace-nowrap text-sm">
                            Apply Now
                        </Link>
                        <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-white text-slate-750 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all hover:scale-[1.02] whitespace-nowrap text-sm">
                            Contact Admissions
                        </Link>
                    </div>
                </div>
            </div>

            {/* 1. OVERVIEW */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section id="overview" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div>
                                <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-4 font-mono">Program Overview</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif mb-6 leading-tight tracking-tight">
                                    Protocols Engineered <br />
                                    <span className="text-[#002f86]">for Digital Trust.</span>
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 font-light">
                                    Study the cryptographic foundations, EVM internals, and zero-knowledge proofs required to build high-scale layer-2 scaling solutions and secure smart contracts.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Distributed Systems", "Solidity & Vyper", "ZKP Math", "Token Economics", "Protocol Security", "Cross-Chain Bridges"].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-semibold hover:bg-purple-55 hover:text-purple-600 hover:border-purple-100 transition-colors cursor-default select-none">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 w-full">
                                {[
                                    { value: duration.toString(), unit: "Years", label: "Full-time immersive program" },
                                    { value: (duration * 2).toString(), unit: "Semesters", label: "Progressive skill building" },
                                    { value: "100%", unit: "Applied", label: "Incubator-level protocol building" },
                                    { value: "Web3", unit: "Focus", label: "Advanced cryptography and systems" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/50 shadow-sm text-center transition-all duration-300"
                                    >
                                        <div className="text-3xl md:text-4xl font-extrabold text-[#031a57] mb-1 tracking-tight font-serif">{stat.value}</div>
                                        <div className="text-xs font-bold text-[#a855f7] uppercase tracking-widest mb-2 font-mono">{stat.unit}</div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* PROGRAM MIX SECTION */}
            <section id="eligibility" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                
                {/* Program stats section wrapper (inner) */}
                <div className="py-16 relative border-b border-[#c5d8ec]/60 z-10">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
                    </div>

                    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 relative z-10 py-4 px-4 md:px-8">
                        {/* Left: Chart */}
                        <div className="md:w-1/2 relative flex justify-center items-center">
                            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative">
                                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(168,85,247,0.1)] transform -rotate-90 md:rotate-0 transition-transform">
                                    {paths.map((slice, i) => (
                                        <motion.path
                                            key={i}
                                            d={slice.d}
                                            fill={slice.color}
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                                            onClick={() => handleSliceClick(i)}
                                            onMouseEnter={() => setHoveredIndex(i)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className="hover:opacity-95 cursor-pointer transition-opacity origin-center tap-highlight-transparent"
                                            style={{
                                                scale: hoveredIndex === i ? 1.05 : 1,
                                                zIndex: hoveredIndex === i ? 10 : 1
                                            }}
                                        />
                                    ))}
                                    <circle cx="200" cy="200" r="40" fill="#ffffff" className="drop-shadow-sm" />
                                </svg>
                            </div>
                        </div>

                        {/* Right: Legend */}
                        <div className="md:w-1/2 space-y-6 w-full">
                            <h3 className="text-3xl font-bold text-[#031a57] font-serif mb-8 text-center md:text-left tracking-tight">The Program Mix</h3>
                            <div className="space-y-4">
                                {polarData.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        ref={(el) => { legendRefs.current[i] = el; }}
                                        className={`p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                                            hoveredIndex === i 
                                                ? "bg-slate-50 border-slate-200 shadow-[0_8px_30px_rgba(168,85,247,0.05)] scale-[1.02]" 
                                                : "bg-white border-slate-100 hover:bg-slate-50/50 hover:border-slate-200"
                                        }`}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-4.5 h-4.5 rounded-full" style={{ backgroundColor: item.color }} />
                                            <h4 className="font-bold text-[#031a57] text-lg font-serif">{item.label} <span className="text-slate-500 text-sm ml-2">({item.percent}%)</span></h4>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed pl-7">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Eligibility section wrapper (inner) */}
                <div className="py-16 px-6 relative z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            
                            {/* Who is this for */}
                            <div className="space-y-12">
                                <div>
                                    <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Built for the next generation</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif tracking-tight">Who Is This For</h2>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { num: "01", title: "Future Protocol Engineers", desc: "Class 12 / Intermediate graduates from any stream — MPC, BiPC, CEC, HEC, or Arts.", color: "bg-purple-50 border-purple-100 text-purple-600" },
                                        { num: "02", title: "Web3 Builders & Creators", desc: "Students who want to build secure protocols, smart contracts and tokens.", color: "bg-indigo-50 border-indigo-100 text-indigo-600" },
                                        { num: "03", title: "Zero Cryptography Background", desc: "No prior distributed systems background required. We teach code from logical zero.", color: "bg-emerald-50 border-emerald-100 text-emerald-600" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-5 p-6 bg-white border border-slate-200/60 rounded-2xl hover:border-blue-300 transition-all hover:bg-white hover:shadow-lg">
                                            <div className={`shrink-0 w-12 h-12 rounded-xl ${item.color} border flex items-center justify-center`}>
                                                <span className="font-mono font-bold text-base">{item.num}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#031a57] mb-2 font-serif">{item.title}</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Eligibility requirements */}
                            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-12 lg:sticky lg:top-32 h-fit">
                                <div className="mb-10">
                                    <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-4 font-mono">Academic Criteria</p>
                                    <h2 className="text-3xl font-bold text-[#031a57] font-serif tracking-tight">Academic Eligibility</h2>
                                </div>
                                <div className="space-y-8">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                                        <h4 className="text-base font-bold text-[#031a57] font-serif mb-5 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold font-mono">01</div>
                                            Standard Admission Pathway
                                        </h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Grade 12 / Intermediate from any recognized board.",
                                                "MPC, CEC, MEC, CEC, HEC, or Arts—all streams are eligible.",
                                                "Minimum 60% aggregate in core subjects."
                                            ].map((req, j) => (
                                                <li key={j} className="flex items-start gap-3.5 text-slate-600 text-sm leading-relaxed">
                                                    <CheckCircle2 size={16} className="text-purple-600 mt-0.5 shrink-0" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CURRICULUM SECTION */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section id="curriculum" className="p-8 sm:p-12 md:p-16 bg-white overflow-hidden relative">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Academic Map</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031a57] font-serif mb-6 tracking-tight">What You Will Study</h2>
                            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">From cryptographic primitives to scaling enterprise-scale blockchains. Every year builds on the last.</p>
                        </div>

                        <SyllabusMindMap
                            data={CURRICULUM_DATA.filter((item) => item.year <= duration).map(({ year, title, topics }) => ({ period: year, title, topics }))}
                            periodLabel="Year"
                            hubTitle="BLOCKCHAIN"
                            theme="purple"
                        />
                    </div>
                </section>
            </div>

            {/* INDUSTRIAL SKILLS */}
            <section id="tool-master" className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 py-12 mt-[30px] mb-8 overflow-hidden relative">
                <div className="container mx-auto max-w-6xl relative z-10 px-6 text-center mb-10">
                    <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Core Stack</p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#031a57] font-serif tracking-tighter mb-4 leading-tight">
                        Industrial Skills
                    </h2>
                </div>

                <div className="relative py-2 overflow-hidden w-full">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <ToolMarquee tools={BLOCKCHAIN_TOOLS} reverse={false} speed={40} />
                    </div>
                </div>
            </section>

            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <CareerVision
                    roles={CAREER_ROLES.map(role => ({
                        icon: role.id === "blockchain-protocol-engineer" ? Cpu :
                            role.id === "smart-contract-auditor" ? ShieldCheck :
                                role.id === "zk-systems-developer" ? Lock :
                                    role.id === "tokenomics-architect" ? Network : Cpu,
                        title: role.title,
                        salary: role.salary,
                        growth: role.growth,
                        desc: role.desc,
                        skills: role.skills,
                        responsibilities: role.responsibilities
                    }))}
                    title="What You'll Become"
                    subtitle="From mathematical foundations to building decentralized protocols. This is your career in 2035."
                    themeColor="indigo"
                    isDark={false}
                />
            </div>

            {/* WHY STUDY HERE */}
            <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 py-16 px-4 md:px-8 mt-[30px] mb-16 overflow-hidden relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-[#002f86] font-bold tracking-widest text-xs uppercase mb-4 block">The Advantage</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#031a57] mb-6 tracking-tight font-serif">Why is The Foundry the right place?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {REASONS.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-[#002f86]/30 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,47,134,0.05)] transition-all duration-500"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <r.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#031a57] mb-3 group-hover:text-[#002f86] transition-colors duration-300 font-serif">{r.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-normal text-sm">{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
