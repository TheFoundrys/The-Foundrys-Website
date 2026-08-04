"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

interface CourseInfo {
    sku: string;
    title: string;
    duration?: string;
    desc: string;
    persona?: string;
    href?: string;
}

interface PackageData {
    id: string;
    title: string;
    bundleName: string;
    desc: string;
    gradientClass: string;
    accentClass: string;
    glowColor: string;
    pricingKey: "entryLevelAIPackage" | "entryLevelCyberSecurityPackage" | "entryLevelQuantumPackage" | "entryLevelBlockchainPackage" | "professionalAIPackage" | "professionalCyberSecurityPackage" | "professionalQuantumPackage" | "professionalBlockchainPackage";
    applyCourseName: string;
    bullets: string[];
    pillars: string[];
    courses: CourseInfo[];
}

const PACKAGE_DETAILS: Record<string, PackageData> = {
    "entry-level-ai": {
        id: "entry-level-ai",
        title: "AI Launchpad Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Kickstart your path in artificial intelligence. This package bundles all 5 of our foundational AI tracks—covering Research, Engineering, Prompt Design, LLMs, and Strategy—into a single program and credential.",
        gradientClass: "from-slate-900 via-blue-950 to-slate-900",
        accentClass: "text-blue-600 border-blue-100 bg-blue-50",
        glowColor: "bg-blue-500/10",
        pricingKey: "entryLevelAIPackage",
        applyCourseName: "AI Launchpad Mastery Package",
        bullets: [
            "5 Introductory Tracks Included",
            "Interactive Building Labs",
            "AI Launchpad Credential"
        ],
        pillars: [
            "AI Engineering Foundations",
            "Prompt Engineering & Design",
            "Large Language Model Basics",
            "Intro to Machine Learning",
            "AI Strategy & Leadership"
        ],
        courses: [
            {
                sku: "AI 001",
                title: "Certified in AI Research",
                duration: "6 Weeks",
                desc: "Dive deep into algorithms and model architectures that power modern AI. Learn how to push the boundaries of intelligent systems through research and experimentation.",
                persona: "For Data & ML Researchers",
                href: "/apply?course=Certified in AI Research"
            },
            {
                sku: "AI 002",
                title: "Certified in AI Engineering",
                duration: "6 Weeks",
                desc: "Focus on the engineering lifecycle. Learn to build, scale, and optimize production-grade AI applications.",
                persona: "For Software Developers (Full-stack, Backend, MERN ...)",
                href: "/apply?course=Certified in AI Engineering"
            },
            {
                sku: "AI 003",
                title: "Certified Prompt Engineering",
                duration: "2 weeks",
                desc: "Master the art of communicating with AI. Learn to design and optimize prompts to unlock the full potential of Large Language Models.",
                persona: "For Students & AI enthusiasts",
                href: "/apply?course=Certified Prompt Engineering"
            },
            {
                sku: "AI 004",
                title: "0-1 LLM: Certified in Large Language Models",
                duration: "8 Weeks",
                desc: "Master the architecture, training, and deployment of Large Language Models. From transformer foundations to building complex agentic systems.",
                persona: "For Developers & AI enthusiasts",
                href: "/apply?course=0-1 LLM: Certified in Large Language Models"
            },
            {
                sku: "AI 006",
                title: "AI Strategy & Institutional Intelligence",
                duration: "9 Weeks",
                desc: "Bridge the gap between AI technology and organizational leadership. Master AI frameworks, deployment strategy, institutional governance, and data privacy to drive AI initiatives.",
                persona: "For Executives, Leaders & Managers",
                href: "/apply?course=AI Strategy & Institutional Intelligence"
            }
        ]
    },
    "entry-level-cyber-security": {
        id: "entry-level-cyber-security",
        title: "Cyber Launchpad Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Start your digital security path. This package bundles all 5 of our entry-level cyber tracks—including Cybersecurity CC fundamentals, Malware Analysis, VAPT, Security for AI, and AI Security—into a unified program.",
        gradientClass: "from-slate-900 via-teal-950 to-slate-900",
        accentClass: "text-teal-600 border-teal-100 bg-teal-50",
        glowColor: "bg-teal-500/10",
        pricingKey: "entryLevelCyberSecurityPackage",
        applyCourseName: "Cyber Launchpad Mastery Package",
        bullets: [
            "5 Introductory Tracks Included",
            "Threat Simulation Sandbox Exercises",
            "Cyber Security Launchpad Credential"
        ],
        pillars: [
            "Cybersecurity Fundamentals",
            "Ethical Hacking & VAPT",
            "Malware Reverse Engineering",
            "Adversarial AI Defense",
            "Security Operations"
        ],
        courses: [
            {
                sku: "CC 001",
                title: "Certified in Cyber Security (CC)",
                duration: "6 Weeks",
                desc: "Master (ISC)² cybersecurity domains. Build a strong foundation in network security, access control, and security operations.",
                href: "/apply?course=Certified in Cyber Security (CC)"
            },
            {
                sku: "CS 002",
                title: "Certified in VAPT for AI",
                duration: "6 Weeks",
                desc: "Introduction to Vulnerability Assessment and Penetration Testing with a focus on AI components.",
                href: "/apply?course=Certified in VAPT for AI"
            },
            {
                sku: "CS 003",
                title: "Certified in Malware Analysis",
                duration: "6 Weeks",
                desc: "Learn the art of reverse engineering. Deconstruct malicious software, understand its behavior, and develop defense strategies.",
                href: "/apply?course=Certified in Malware Analysis"
            },
            {
                sku: "CS 004",
                title: "Certified in Security for AI",
                duration: "6 Weeks",
                desc: "Understanding the unique security challenges posed by artificial intelligence and how to mitigate them.",
                href: "/apply?course=Certified in Security for AI"
            },
            {
                sku: "CS 005",
                title: "Certified in AI Security",
                duration: "6 Weeks",
                desc: "Master the core protocols for securing AI systems and protecting neural networks.",
                href: "/apply?course=Certified in AI Security"
            }
        ]
    },
    "entry-level-quantum-computing": {
        id: "entry-level-quantum-computing",
        title: "Quantum Launchpad Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Begin your quantum career trajectory. This package bundles all 8 of our foundational quantum tracks—including Fundamentals, Engineering, Computing, Sensing, Communication, Information Theory, Post-Quantum Cryptography, and Quantum AI—under a single program.",
        gradientClass: "from-slate-900 via-purple-950 to-slate-900",
        accentClass: "text-purple-600 border-purple-100 bg-purple-50",
        glowColor: "bg-purple-500/10",
        pricingKey: "entryLevelQuantumPackage",
        applyCourseName: "Quantum Launchpad Mastery Package",
        bullets: [
            "8 Foundational Tracks Included",
            "Qubits & Circuitry Simulation Labs",
            "Quantum Launchpad Credential"
        ],
        pillars: [
            "Linear Algebra for Quantum",
            "Postulates of Quantum Mechanics",
            "Basic Quantum Logic Gates",
            "Quantum Key Distribution (QKD)",
            "Post-Quantum Cryptography Basics"
        ],
        courses: [
            {
                sku: "Q 001",
                title: "Certified in Quantum Fundamentals",
                duration: "4 Weeks",
                desc: "From Linear Algebra to Quantum Hardware in 30 Days. Master the mathematical postulates, quantum logic, and basic circuit design.",
                href: "/apply?course=Certified in Quantum Fundamentals"
            },
            {
                sku: "Q 002",
                title: "Certified in Quantum Engineering",
                duration: "4 Weeks",
                desc: "Master the physical implementation of qubits and quantum circuitry.",
                href: "/apply?course=Certified in Quantum Engineering"
            },
            {
                sku: "Q 003",
                title: "Certified in Quantum Computing",
                duration: "4 Weeks",
                desc: "Learn core quantum algorithms and simulation techniques.",
                href: "/apply?course=Certified in Quantum Computing"
            },
            {
                sku: "Q 004",
                title: "Certified in Quantum Sensing",
                duration: "4 Weeks",
                desc: "Explore high-precision metrology using quantum properties.",
                href: "/apply?course=Certified in Quantum Sensing"
            },
            {
                sku: "Q 005",
                title: "Certified in Quantum Communication",
                duration: "4 Weeks",
                desc: "Learn secure communication protocols and QKD.",
                href: "/apply?course=Certified in Quantum Communication"
            },
            {
                sku: "Q 006",
                title: "Certified in Quantum Information",
                duration: "4 Weeks",
                desc: "Information theory re-imagined with entanglement and entropy.",
                href: "/apply?course=Certified in Quantum Information"
            },
            {
                sku: "Q 007",
                title: "Certified in Post Quantum Cryptography",
                duration: "4 Weeks",
                desc: "Preparing classical systems to withstand quantum attacks.",
                href: "/apply?course=Certified in Post Quantum Cryptography"
            },
            {
                sku: "QAI 001",
                title: "Certified in Quantum Artificial Intelligence",
                duration: "4 Weeks",
                desc: "The intersection of two frontiers. Quantum machine learning algorithms and neural networks.",
                href: "/apply?course=Certified in Quantum Artificial Intelligence"
            }
        ]
    },
    "entry-level-blockchain": {
        id: "entry-level-blockchain",
        title: "Blockchain Launchpad Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Begin your Web3 career trajectory. This package bundles all 3 of our foundational blockchain tracks—covering Core Blockchain postulations, NFTs, and Decentralized Architectures—into a single program.",
        gradientClass: "from-slate-900 via-indigo-950 to-slate-900",
        accentClass: "text-indigo-600 border-indigo-100 bg-indigo-50",
        glowColor: "bg-indigo-500/10",
        pricingKey: "entryLevelBlockchainPackage",
        applyCourseName: "Blockchain Launchpad Mastery Package",
        bullets: [
            "3 Foundational Tracks Included",
            "Smart Contract Audit Sandbox Labs",
            "Web3 Launchpad Credential"
        ],
        pillars: [
            "Web3 & Blockchain Basics",
            "Decentralized P2P Networks",
            "Solidity Smart Contracts",
            "Non-Fungible Tokens (NFTs)",
            "dApp Frontends & Web3 Providers"
        ],
        courses: [
            {
                sku: "BC 001",
                title: "Certified in Block Chain",
                duration: "6 Weeks",
                desc: "Fundamentals of distributed ledger technology, consensus mechanisms, and blockchain architecture basics.",
                href: "/apply?course=Certified in Block Chain"
            },
            {
                sku: "BC 002",
                title: "Certified in NFT",
                duration: "6 Weeks",
                desc: "Introduction to Non-Fungible Tokens, standards, and the creative economy on the blockchain.",
                href: "/apply?course=Certified in NFT"
            },
            {
                sku: "BC 003",
                title: "Certified in Decentralized Systems",
                duration: "6 Weeks",
                desc: "Understanding decentralized architectures, peer-to-peer networks, and distributed computing models.",
                href: "/apply?course=Certified in Decentralized Systems"
            }
        ]
    },
    "professional-ai": {
        id: "professional-ai",
        title: "AI Professional Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Master artificial intelligence at a professional level. This package bundles 5 of our premium professional AI tracks—including Research, Engineering, Operations, and bootcamp options—into a unified career path.",
        gradientClass: "from-slate-900 via-blue-950 to-slate-900",
        accentClass: "text-blue-600 border-blue-100 bg-blue-50",
        glowColor: "bg-blue-500/10",
        pricingKey: "professionalAIPackage",
        applyCourseName: "AI Professional Mastery Package",
        bullets: [
            "5 Professional Tracks Included",
            "Scale Production-Grade AI Architectures",
            "Expert MLOps & Deployment Credentials"
        ],
        pillars: [
            "Advanced Neural Nets & SOTA",
            "MLOps & Deployment Lifecycles",
            "Autonomic Agentic AI",
            "High-Performance Model Pipelines",
            "Research-grade Implementations"
        ],
        courses: [
            {
                sku: "AI 001",
                title: "Certified Professional in AI Research",
                duration: "6 Weeks",
                desc: "Master the art of original research in Artificial Intelligence. This intensive 7-phase program covers mathematical foundations, SOTA architectures, and experimental rigor. Perfect for aspiring AI Scientists.",
                persona: "For Data & ML Researchers",
                href: "/apply?course=Certified Professional in AI Research"
            },
            {
                sku: "AI 002",
                title: "Certified Professional in AI Engineering",
                duration: "6 Weeks",
                desc: "Focus on the engineering lifecycle. Learn to build, scale, and optimize production-grade AI applications.",
                persona: "For Software Developers (Full-stack, Backend, MERN ...)",
                href: "/apply?course=Certified Professional in AI Engineering"
            },
            {
                sku: "AI 003",
                title: "Certified Professional in AI Operations",
                duration: "6 Weeks",
                desc: "Master the art of MLOps. Learn deployment strategies, monitoring, and maintaining AI at scale.",
                persona: "For DevOps & Cloud Engineers",
                href: "/apply?course=Certified Professional in AI Operations"
            },
            {
                sku: "AI 004",
                title: "AI Fluency",
                duration: "20 Days",
                desc: "Enable experienced Java developers to build practical AI capabilities using Python by covering core language fundamentals, AI frameworks, data preparation, model training, and deployment workflows.",
                persona: "For Java Developers (4+ years experience) & Tech Cross Functional",
                href: "/apply?course=AI Fluency"
            },
            {
                sku: "AI 005",
                title: "Agentic AI Bootcamp (Instructor-Led Training)",
                duration: "5 Days",
                desc: "An intensive 5-day in-person bootcamp in Hyderabad. Build autonomous AI agents with hands-on, instructor-led training. Limited batch size for personalized learning.",
                persona: "Engineering + Non-Engineering Backgrounds",
                href: "/apply?course=Agentic AI Bootcamp"
            }
        ]
    },
    "professional-cyber-security": {
        id: "professional-cyber-security",
        title: "Cyber Security Professional Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Equip yourself with comprehensive enterprise security depth. This package bundles all 4 of our professional-level cyber security tracks—covering ethical hacking, adversarial AI defense, and secure lifecycle engineering.",
        gradientClass: "from-slate-900 via-teal-950 to-slate-900",
        accentClass: "text-teal-600 border-teal-100 bg-teal-50",
        glowColor: "bg-teal-500/10",
        pricingKey: "professionalCyberSecurityPackage",
        applyCourseName: "Cyber Security Professional Mastery Package",
        bullets: [
            "4 Professional Tracks Included",
            "Enterprise-Grade Defensive Sandbox Labs",
            "Advanced Cyber & AI Defense Credentials"
        ],
        pillars: [
            "Network & Access Architecture",
            "Vulnerability & Pen Testing",
            "Adversarial ML Attack Vectors",
            "Cyber Threat Mitigation",
            "Risk Assessment & Compliance"
        ],
        courses: [
            {
                sku: "CS 001",
                title: "Certified Professional in Cyber Security",
                duration: "3 Month",
                desc: "Comprehensive coverage of network security, ethical hacking, and incident response for the enterprise.",
                href: "/apply?course=Certified Professional in Cyber Security"
            },
            {
                sku: "CS 002",
                title: "Certified Professional in VAPT for AI",
                duration: "3 Month",
                desc: "Specialized track focusing on Vulnerability Assessment and Penetration Testing specifically for AI systems.",
                href: "/apply?course=Certified Professional in VAPT for AI"
            },
            {
                sku: "CS 003",
                title: "Certified Professional in Security for AI",
                duration: "3 Month",
                desc: "Learn to secure AI pipelines, training data, and model endpoints against adversarial attacks.",
                href: "/apply?course=Certified Professional in Security for AI"
            },
            {
                sku: "CS 004",
                title: "Certified Professional in AI Security",
                duration: "3 Month",
                desc: "Advanced studies in securing the AI lifecycle, from data ingestion to inference.",
                href: "/apply?course=Certified Professional in AI Security"
            }
        ]
    },
    "professional-quantum-computing": {
        id: "professional-quantum-computing",
        title: "Quantum Computing Professional Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Secure your place at the front of the next computational era. This package bundles all 7 of our professional quantum engineering and sensing tracks under a single curriculum and credential.",
        gradientClass: "from-slate-900 via-purple-950 to-slate-900",
        accentClass: "text-purple-600 border-purple-100 bg-purple-50",
        glowColor: "bg-purple-500/10",
        pricingKey: "professionalQuantumPackage",
        applyCourseName: "Quantum Computing Professional Mastery Package",
        bullets: [
            "7 Professional Tracks Included",
            "Advanced Simulation Sandbox Labs",
            "Quantum Engineer Professional Credentials"
        ],
        pillars: [
            "Postulates & Circuits",
            "Physical Qubits Implementation",
            "Entanglement Sensing & Metrology",
            "Post-Quantum Lattice Cryptography",
            "Quantum Neural Net Training"
        ],
        courses: [
            {
                sku: "Q 001",
                title: "Certified Professional in Quantum Engineering",
                duration: "3 Month",
                desc: "Hardware-focused track covering quantum gates, circuitry, and the physical implementation of qubits.",
                href: "/apply?course=Certified Professional in Quantum Engineering"
            },
            {
                sku: "Q 002",
                title: "Certified Professional in Quantum Computing",
                duration: "3 Month",
                desc: "Core algorithm track including Shor's, Grover's, and quantum simulation techniques.",
                href: "/apply?course=Certified Professional in Quantum Computing"
            },
            {
                sku: "Q 003",
                title: "Certified Professional in Quantum Sensing",
                duration: "3 Month",
                desc: "Explore high-precision metrology and imaging using quantum properties.",
                href: "/apply?course=Certified Professional in Quantum Sensing"
            },
            {
                sku: "Q 004",
                title: "Certified Professional in Quantum Communication",
                duration: "3 Month",
                desc: "Secure communication protocols, quantum key distribution (QKD), and the quantum internet.",
                href: "/apply?course=Certified Professional in Quantum Communication"
            },
            {
                sku: "Q 005",
                title: "Certified Professional in Quantum Information",
                duration: "3 Month",
                desc: "Information theory re-imagined. Entropy, entanglement, and density matrices.",
                href: "/apply?course=Certified Professional in Quantum Information"
            },
            {
                sku: "Q 006",
                title: "Certified Professional in Post Quantum Cryptography",
                duration: "3 Month",
                desc: "Preparing classical systems to withstand quantum attacks. Lattice-based cryptography and more.",
                href: "/apply?course=Certified Professional in Post Quantum Cryptography"
            },
            {
                sku: "QAI 002",
                title: "Certified Professional in Quantum AI",
                duration: "3 Month",
                desc: "The intersection of two frontiers. Quantum machine learning algorithms and neural networks.",
                href: "/apply?course=Certified Professional in Quantum AI"
            }
        ]
    },
    "professional-blockchain": {
        id: "professional-blockchain",
        title: "Blockchain Professional Mastery Package",
        bundleName: "Unified Domain Bundle",
        desc: "Build decentralized trust systems for the next web. This package bundles all 3 of our professional blockchain and NFT engineering tracks into a single unified path.",
        gradientClass: "from-slate-900 via-indigo-950 to-slate-900",
        accentClass: "text-indigo-600 border-indigo-100 bg-indigo-50",
        glowColor: "bg-indigo-500/10",
        pricingKey: "professionalBlockchainPackage",
        applyCourseName: "Blockchain Professional Mastery Package",
        bullets: [
            "3 Professional Tracks Included",
            "Enterprise P2P Network Architecture",
            "Smart Contract Security Auditing"
        ],
        pillars: [
            "Consensus Protocols",
            "Solidity ERC-721/1155 Standards",
            "dApp Web3 Providers Integration",
            "Decentralized Storage & Compute",
            "Vulnerability Auditing frameworks"
        ],
        courses: [
            {
                sku: "BC 001",
                title: "Certified Professional in Block Chain",
                duration: "3 Month",
                desc: "Fundamentals of distributed ledger technology, consensus mechanisms, and blockchain architecture.",
                href: "/apply?course=Certified Professional in Block Chain"
            },
            {
                sku: "BC 002",
                title: "Certified Professional in NFT",
                duration: "3 Month",
                desc: "Deep dive into Non-Fungible Tokens, standards (ERC-721/1155), and building marketplace dApps.",
                href: "/apply?course=Certified Professional in NFT"
            },
            {
                sku: "BC 003",
                title: "Certified Professional in Decentralized Systems",
                duration: "3 Month",
                desc: "Architecting robust, scalable decentralized applications and understanding the broader ecosystem.",
                href: "/apply?course=Certified Professional in Decentralized Systems"
            }
        ]
    }
};

interface PackageDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageId: string;
}

export function PackageDetailsModal({ isOpen, onClose, packageId }: PackageDetailsModalProps) {
    const { currency, symbol } = useRegionalPricing();
    const pkg = PACKAGE_DETAILS[packageId];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !pkg) return null;

    const originalPrice = COURSE_PRICING[pkg.pricingKey]?.original[currency] || "";

    // Determine badge / border accent colors based on package
    const badgeColor = pkg.id.includes("ai") ? "text-blue-600 border-blue-100 bg-blue-50" :
                       pkg.id.includes("cyber") ? "text-teal-600 border-teal-100 bg-teal-50" :
                       pkg.id.includes("quantum") ? "text-purple-600 border-purple-100 bg-purple-50" :
                       "text-indigo-600 border-indigo-100 bg-indigo-50";

    const checkColor = pkg.id.includes("ai") ? "text-blue-600" :
                       pkg.id.includes("cyber") ? "text-teal-600" :
                       pkg.id.includes("quantum") ? "text-purple-600" :
                       "text-indigo-600";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl w-full max-w-5xl relative overflow-hidden my-8"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-30"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="max-h-[90vh] overflow-y-auto p-6 md:p-10 text-slate-900">
                    {/* Mastery Package Card inside Modal (No dark background color) */}
                    <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 relative overflow-hidden mb-10">
                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className={`px-3 py-1 rounded-full border ${badgeColor} text-xs font-bold uppercase tracking-wider mb-4 inline-block`}>
                                    {pkg.bundleName}
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                                    {pkg.title}
                                </h2>
                                <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
                                    {pkg.desc}
                                </p>
                                <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs md:text-sm text-slate-600 font-medium">
                                    {pkg.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className={checkColor} />
                                            {bullet}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 border-t border-slate-200 pt-6">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Key Technical Pillars</span>
                                    <div className="flex flex-wrap gap-2">
                                        {pkg.pillars.map(pillar => (
                                            <span key={pillar} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                                                {pillar}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 w-full lg:w-auto min-w-[260px] shrink-0 text-center lg:text-left flex flex-col justify-between shadow-sm">
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Package Price</span>
                                    <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-6">
                                        <span className="text-3xl md:text-4xl font-black text-slate-900">{symbol}{originalPrice}</span>
                                    </div>
                                </div>
                                <Link
                                    href={`/apply?course=${encodeURIComponent(pkg.applyCourseName)}`}
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 text-center"
                                >
                                    Apply for Package <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Included Courses List inside Modal */}
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Included Courses</h3>
                            <p className="text-sm text-slate-500">The package includes full access to the following tracks:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pkg.courses.map((course, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 p-6"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-white border border-slate-200 px-2 py-1 rounded">{course.sku}</span>
                                        <div className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">
                                            {course.duration || "6 Weeks"} Course
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h4>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">{course.desc}</p>
                                    
                                    {course.persona && (
                                        <div className="text-[10px] text-slate-500 font-semibold italic bg-slate-100/50 p-2 rounded-lg">
                                            {course.persona}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
