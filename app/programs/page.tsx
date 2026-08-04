"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
    BookOpen, 
    Briefcase, 
    GraduationCap, 
    ArrowRight, 
    CheckCircle2, 
    Sparkles, 
    Zap, 
    Target,
    BrainCircuit,
    Award,
    ShieldAlert,
    ShieldCheck,
    Atom,
    Network,
    Terminal,
    ChevronRight,
    ArrowUpRight,
    X
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-playfair"
});

interface CourseInfo {
    sku: string;
    title: string;
    duration: string;
    desc: string;
    persona?: string;
    href?: string;
}

interface PackageInfo {
    title: string;
    subtitle: string;
    description: string;
    priceKey: "entryLevelAIPackage" | "entryLevelCyberSecurityPackage" | "professionalAIPackage" | "professionalCyberSecurityPackage";
    theme: "blue" | "teal";
    pillars: string[];
    courses: CourseInfo[];
    applyHref: string;
}

const PACKAGE_DETAILS: Record<string, PackageInfo> = {
    "/programs/entry-level/ai": {
        title: "AI Launchpad Mastery Package",
        subtitle: "Unified Domain Bundle",
        description: "Kickstart your path in artificial intelligence. This package bundles all 5 of our foundational AI tracks—covering Research, Engineering, Prompt Design, LLMs, and Strategy—into a single program and credential.",
        priceKey: "entryLevelAIPackage",
        theme: "blue",
        pillars: ["AI Engineering Foundations", "Prompt Engineering & Design", "Large Language Model Basics", "Intro to Machine Learning", "AI Strategy & Leadership"],
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
                href: "/programs/entry-level/ai/certified-in-ai-engineering"
            },
            {
                sku: "AI 003",
                title: "Certified Prompt Engineering",
                duration: "2 Weeks",
                desc: "Master the art of communicating with AI. Learn to design and optimize prompts to unlock the full potential of Large Language Models.",
                persona: "For Students & AI enthusiasts",
                href: "/programs/entry-level/ai/certified-in-prompt-engineering"
            },
            {
                sku: "AI 004",
                title: "0-1 LLM: Certified in Large Language Models",
                duration: "8 Weeks",
                desc: "Master the architecture, training, and deployment of Large Language Models. From transformer foundations to building complex agentic systems.",
                persona: "For Developers & AI enthusiasts",
                href: "/programs/entry-level/ai/certified-in-zero-to-one-llm"
            },
            {
                sku: "AI 006",
                title: "AI Strategy & Institutional Intelligence",
                duration: "9 Weeks",
                desc: "Bridge the gap between AI technology and organizational leadership. Master AI frameworks, deployment strategy, institutional governance, and data privacy to drive AI initiatives.",
                persona: "For Executives, Leaders & Managers",
                href: "/programs/entry-level/ai/ai-strategy-and-institutional-intelligence"
            }
        ],
        applyHref: "/apply?course=AI Launchpad Mastery Package"
    },
    "/programs/entry-level/cyber-security": {
        title: "Cyber Launchpad Mastery Package",
        subtitle: "Unified Domain Bundle",
        description: "Start your digital security path. This package bundles all 5 of our entry-level cyber tracks—including Cybersecurity CC fundamentals, Malware Analysis, VAPT, Security for AI, and AI Security—into a unified program.",
        priceKey: "entryLevelCyberSecurityPackage",
        theme: "teal",
        pillars: ["Fundamentals of Cybersecurity", "Basic Malware Analysis", "Introduction to VAPT", "Securing AI Integrations", "Information Security Basics"],
        courses: [
            {
                sku: "CC 001",
                title: "Certified in Cyber Security (CC)",
                duration: "6 Weeks",
                desc: "Master (ISC)² cybersecurity domains. Build a strong foundation in network security, access control, and security operations.",
                href: "/programs/entry-level/cyber-security/certified-in-cybersecurity"
            },
            {
                sku: "CS 002",
                title: "Certified in VAPT for AI",
                duration: "6 Weeks",
                desc: "Introduction to Vulnerability Assessment and Penetration Testing with a focus on AI components."
            },
            {
                sku: "CS 003",
                title: "Certified in Malware Analysis",
                duration: "6 Weeks",
                desc: "Learn the art of reverse engineering. Deconstruct malicious software, understand its behavior, and develop defense strategies.",
                href: "/programs/entry-level/cyber-security/certified-in-malware-analysis"
            },
            {
                sku: "CS 004",
                title: "Certified in Security for AI",
                duration: "6 Weeks",
                desc: "Understanding the unique security challenges posed by artificial intelligence and how to mitigate them."
            },
            {
                sku: "CS 005",
                title: "Certified in AI Security",
                duration: "6 Weeks",
                desc: "Master the core protocols for securing AI systems and protecting neural networks."
            }
        ],
        applyHref: "/apply?course=Cyber Launchpad Mastery Package"
    },
    "/programs/professional/ai": {
        title: "Artificial Intelligence Mastery Package",
        subtitle: "Unified Domain Bundle",
        description: "Gain end-to-end expertise in Artificial Intelligence. This package bundles our 5 intensive professional tracks—covering Research, Engineering, Operations, Fluency, and hands-on bootcamps—for a single, comprehensive program price.",
        priceKey: "professionalAIPackage",
        theme: "blue",
        pillars: ["Deep Learning & Neural Networks", "LLM Engineering & RAG", "MLOps & AI Operations", "Autonomous Agents", "Applied AI Research"],
        courses: [
            {
                sku: "AI 001",
                title: "Certified Professional in AI Research",
                duration: "6 Weeks",
                desc: "Master the art of original research in Artificial Intelligence. This intensive 7-phase program covers mathematical foundations, SOTA architectures, and experimental rigor. Perfect for aspiring AI Scientists.",
                persona: "For Aspiring AI Scientists & Research Engineers",
                href: "/apply?course=Certified Professional in AI Research"
            },
            {
                sku: "AI 002",
                title: "Certified Professional in AI Engineering",
                duration: "6 Weeks",
                desc: "Focus on the engineering lifecycle. Learn to build, scale, and optimize production-grade AI applications.",
                persona: "For Software Developers (Full-stack, Backend, MERN ...)",
                href: "/programs/professional/ai/certified-professional-in-ai-engineering"
            },
            {
                sku: "AI 003",
                title: "Certified Professional in AI Operations",
                duration: "6 Weeks",
                desc: "Master the art of MLOps. Learn deployment strategies, monitoring, and maintaining AI at scale.",
                persona: "For DevOps & Cloud Engineers",
                href: "/programs/professional/ai/certified-professional-in-ai-operations"
            },
            {
                sku: "AI 004",
                title: "AI Fluency",
                duration: "20 Days",
                desc: "Enable experienced Java developers to build practical AI capabilities using Python by covering core language fundamentals, AI frameworks, data preparation, model training, and deployment workflows.",
                persona: "For Java Developers (4+ years experience) & Tech Cross Functional",
                href: "/programs/professional/ai/ai-fluency"
            },
            {
                sku: "AI 005",
                title: "Agentic AI Bootcamp (Instructor-Led Training)",
                duration: "5 Days",
                desc: "An intensive 5-day in-person bootcamp in Hyderabad. Build autonomous AI agents with hands-on, instructor-led training. Limited batch size for personalized learning.",
                persona: "Engineering + Non-Engineering Backgrounds",
                href: "/apply?course=Agentic AI Bootcamp"
            }
        ],
        applyHref: "/apply?course=Artificial Intelligence Mastery Package"
    },
    "/programs/professional/cyber-security": {
        title: "Cyber Security Mastery Package",
        subtitle: "Unified Domain Bundle",
        description: "Become an elite digital defender. This package bundles our 4 comprehensive professional security tracks—covering Network Security, VAPT for AI, Security for AI, and AI Threat Modeling—for a single, package price.",
        priceKey: "professionalCyberSecurityPackage",
        theme: "teal",
        pillars: ["Enterprise Network Defense", "VAPT for AI Pipelines", "AI Threat Modeling & Security", "Malware Analysis & Reverse Engineering", "Incident Response & Forensic Auditing"],
        courses: [
            {
                sku: "CS 001",
                title: "Certified Professional in Cyber Security",
                duration: "6 Weeks",
                desc: "Comprehensive coverage of network security, ethical hacking, and incident response for the enterprise.",
                persona: "Students / Working professionals"
            },
            {
                sku: "CS 002",
                title: "Certified Professional in VAPT for AI",
                duration: "6 Weeks",
                desc: "Specialized track focusing on Vulnerability Assessment and Penetration Testing specifically for AI systems.",
                persona: "Students / Working professionals"
            },
            {
                sku: "CS 003",
                title: "Certified Professional in Security for AI",
                duration: "6 Weeks",
                desc: "Learn to secure AI pipelines, training data, and model endpoints against adversarial attacks.",
                persona: "Students / Working professionals"
            },
            {
                sku: "CS 004",
                title: "Certified Professional in AI Security",
                duration: "6 Weeks",
                desc: "Advanced studies in securing the AI lifecycle, from data ingestion to inference.",
                persona: "Students / Working professionals"
            }
        ],
        applyHref: "/apply?course=Cyber Security Mastery Package"
    }
};

export default function BrandColoredProgramsDirectoryPage() {
    const [selectedLevel, setSelectedLevel] = useState<"all" | "entry" | "mid">("all");
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [activePackagePath, setActivePackagePath] = useState<string | null>(null);
    const { currency, symbol } = useRegionalPricing();
    useEffect(() => {
        document.title = "Programs | The Foundry's";
    }, []);

    useEffect(() => {
        if (activePackagePath) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [activePackagePath]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActivePackagePath(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            let y = 0;
            let current: Element | null = element;
            while (current instanceof HTMLElement) {
                y += current.offsetTop;
                current = current.offsetParent;
            }
            const yOffset = -120; // Account for sticky navbar height + padding
            window.scrollTo({ top: y + yOffset, behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <main className={`programs-light-page min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-lime-vibrant/20 selection:text-lime-vibrant ${playfair.variable}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-44 pb-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
                {/* Glowing Abstract Blobs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime-vibrant/5 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none z-0" />

                <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                    {/* Left Column: Hero Intro */}
                    <div className="lg:col-span-7 flex flex-col justify-center text-left">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-[1px] bg-lime-vibrant" />
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-lime-vibrant">
                                Multidisciplinary learning for the future of work
                            </span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05] font-serif">
                            Build the <br />
                            skills to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">lead the intelligent age.</span>
                        </h1>
                        
                        <p className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl font-light">
                            The Foundry&apos;s is a premium finishing school focused on AI and Cybersecurity. We help learners, professionals, executives, faculty and institutions become future-ready through multidisciplinary programs, personalized learning, industry projects and high-performance learning infrastructure.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="#catalog"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('catalog');
                                }}
                                className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-slate-100 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
                            >
                                Find Your Program
                            </a>
                        </div>

                        <p className="text-slate-500 text-xs tracking-wide">
                            No prior IT background required. Programs are designed around potential, ambition and outcomes.
                        </p>
                    </div>

                    {/* Right Column: Choose Your Journey Panel */}
                    <div className="lg:col-span-5 flex items-center">
                        <div className="w-full stark-black-card p-8 rounded-3xl space-y-6 border">
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                                Choose your journey
                            </div>
                            
                            <div className="space-y-4">
                                <a 
                                    href="#catalog" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('catalog');
                                    }}
                                    className="block p-4 rounded-2xl stark-black-pill border transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="font-bold stark-black-pill-title text-sm group-hover:text-lime-vibrant transition-colors">Start or switch your career</div>
                                    <div className="stark-black-pill-desc text-xs mt-1">Entry-level and mid-level programs in AI and Cybersecurity.</div>
                                </a>

                                <a 
                                    href="#personalized" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('personalized');
                                    }}
                                    className="block p-4 rounded-2xl stark-black-pill border transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="font-bold stark-black-pill-title text-sm group-hover:text-lime-vibrant transition-colors">Build a personalized premium pathway</div>
                                    <div className="stark-black-pill-desc text-xs mt-1">Private mentorship, custom curriculum and career positioning.</div>
                                </a>

                                <a 
                                    href="#academic-focus" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('academic-focus');
                                    }}
                                    className="block p-4 rounded-2xl stark-black-pill border transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="font-bold stark-black-pill-title text-sm group-hover:text-lime-vibrant transition-colors">Lead transformation</div>
                                    <div className="stark-black-pill-desc text-xs mt-1">Executive learning for decision-makers and business leaders.</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-white/5 py-8 bg-slate-950">
                <div className="max-w-[1900px] mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/5">
                        <div className="text-left md:px-6">
                            <span className="text-4xl sm:text-5xl font-black font-serif text-white">5</span>
                            <span className="block text-slate-400 text-xs tracking-wider uppercase mt-1">Learning pathways</span>
                        </div>
                        <div className="text-left md:px-8">
                            <span className="text-4xl sm:text-5xl font-black font-serif text-white">2</span>
                            <span className="block text-slate-400 text-xs tracking-wider uppercase mt-1">Current core disciplines</span>
                        </div>
                        <div className="text-left md:px-8">
                            <span className="text-4xl sm:text-5xl font-black font-serif text-white">4</span>
                            <span className="block text-slate-400 text-xs tracking-wider uppercase mt-1">Schools of Thought</span>
                        </div>
                        <div className="text-left md:px-8">
                            <span className="text-4xl sm:text-5xl font-black font-serif text-white">1</span>
                            <span className="block text-slate-400 text-xs tracking-wider uppercase mt-1">Integrated learning ecosystem</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schools of Thought Section */}
            <section className="py-24 px-6 sm:px-12 lg:px-16 relative">
                <div className="max-w-[1900px] mx-auto space-y-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-lime-vibrant" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant">Schools of thought</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
                                Four schools. <br />
                                One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">multidisciplinary vision.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                            The Foundry&apos;s brings technology, business, sustainability and energy into one integrated learning ecosystem. Our current training focus is AI and Cybersecurity, while the broader schools create the foundation for future multidisciplinary programs and Centres of Excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* School 1 */}
                        <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-neon-blue/30 transition-all duration-300 group">
                            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider bg-neon-blue/10 text-neon-blue border border-neon-blue/20 mb-6 uppercase">DT</span>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">School of DeepTech</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">AI, Cybersecurity, Blockchain, Quantum, IoT and Physical Systems, and Robotics.</p>
                        </div>

                        {/* School 2 */}
                        <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-sunset-orange/30 transition-all duration-300 group">
                            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider bg-sunset-orange/10 text-sunset-orange border border-sunset-orange/20 mb-6 uppercase">EN</span>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sunset-orange transition-colors">School of Entrepreneurship</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">Innovation, business models, product thinking, execution and founder-led growth.</p>
                        </div>

                        {/* School 3 */}
                        <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant/30 transition-all duration-300 group">
                            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider bg-lime-vibrant/10 text-lime-vibrant border border-lime-vibrant/20 mb-6 uppercase">SU</span>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-vibrant transition-colors">School of Sustainability</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">ESG, climate thinking, responsible innovation and long-term systems transformation.</p>
                        </div>

                        {/* School 4 */}
                        <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant/30 transition-all duration-300 group">
                            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider bg-lime-vibrant/10 text-lime-vibrant border border-lime-vibrant/20 mb-6 uppercase">EG</span>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-vibrant transition-colors">School of Energy</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">Energy systems, infrastructure, transition technologies and future-ready applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Academic Focus Section */}
            <section id="academic-focus" className="py-24 px-6 sm:px-12 lg:px-16 relative">
                <div className="max-w-[1900px] mx-auto space-y-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-lime-vibrant" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant">Current academic focus</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
                                AI and Cybersecurity <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">for every background.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                            Our programs are designed to be multidisciplinary and accessible to learners from any academic or professional background. The objective is not just to teach tools, but to build problem-solving, business understanding, execution capability and industry relevance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Artificial Intelligence Focus Card */}
                        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-blue-400/20 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                From foundations to applied AI, GenAI, model development, automation, evaluation and enterprise adoption.
                            </p>
                            <div className="flex flex-wrap gap-2.5">
                                {["AI Foundations", "Machine Learning", "Generative AI", "AI Engineering", "Responsible AI"].map((bubble) => (
                                    <span key={bubble} className="px-4 py-2 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                                        {bubble}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Cybersecurity Focus Card */}
                        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-lime-vibrant/20 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                From security fundamentals to SOC, threat analysis, incident response, cloud security and AI security.
                            </p>
                            <div className="flex flex-wrap gap-2.5">
                                {["Cyber Foundations", "SOC Operations", "Threat Intelligence", "Cloud Security", "AI Security"].map((bubble) => (
                                    <span key={bubble} className="px-4 py-2 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                                        {bubble}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Pathways Section */}
            <section id="catalog" className="py-24 px-6 sm:px-12 lg:px-16 relative">
                <div className="max-w-[1900px] mx-auto space-y-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-lime-vibrant" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant">Learning pathways</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
                                A clear journey for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">every learner and leader.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
                            Each pathway is designed around a different customer need, making it easy to choose, enroll and progress toward a defined outcome.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {/* Pathway 1 */}
                        <div className="p-6 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:bg-slate-900/60 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                            {/* Inner Glow light */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-vibrant/0 group-hover:bg-lime-vibrant/10 blur-2xl rounded-full transition-all duration-300" />
                            <div>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-lime-vibrant mb-6 block transition-colors">Career Start</span>
                                <h3 className="text-lg font-bold text-white mb-3">Entry Level</h3>
                                <p className="text-slate-400 group-hover:text-slate-300 text-xs leading-relaxed mb-8 transition-colors">For students, freshers and non-technical learners beginning a career in AI or Cybersecurity.</p>
                            </div>
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedLevel("entry");
                                    scrollToSection("featured-programs");
                                }}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-vibrant hover:gap-2.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left outline-none self-start"
                            >
                                Learn More <ChevronRight size={14} />
                            </button>
                        </div>

                        {/* Pathway 2 */}
                        <div className="p-6 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:bg-slate-900/60 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                            {/* Inner Glow light */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-vibrant/0 group-hover:bg-lime-vibrant/10 blur-2xl rounded-full transition-all duration-300" />
                            <div>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-lime-vibrant mb-6 block transition-colors">Career Growth</span>
                                <h3 className="text-lg font-bold text-white mb-3">Mid Level</h3>
                                <p className="text-slate-400 group-hover:text-slate-300 text-xs leading-relaxed mb-8 transition-colors">For working professionals seeking deeper specialization, career growth or transition.</p>
                            </div>
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedLevel("mid");
                                    scrollToSection("featured-programs");
                                }}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-vibrant hover:gap-2.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left outline-none self-start"
                            >
                                Learn More <ChevronRight size={14} />
                            </button>
                        </div>

                        {/* Pathway 3: Highlighted Card */}
                        <div id="personalized" className="p-6 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:bg-slate-900/60 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                            {/* Inner Glow light */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-vibrant/0 group-hover:bg-lime-vibrant/10 blur-2xl rounded-full transition-all duration-300" />
                            <div>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-lime-vibrant mb-6 block transition-colors">Premium</span>
                                <h3 className="text-lg font-bold text-white mb-3">Personalized Learning</h3>
                                <p className="text-slate-400 group-hover:text-slate-300 text-xs leading-relaxed mb-8 transition-colors">Private mentorship, custom learning path, flexible schedule and outcome-focused career positioning.</p>
                            </div>
                            <Link href="/apply-personalized" className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-vibrant group-hover:gap-2.5 transition-all">
                                Learn More <ChevronRight size={14} />
                            </Link>
                        </div>

                        {/* Pathway 4 */}
                        <div className="p-6 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:bg-slate-900/60 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                            {/* Inner Glow light */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-vibrant/0 group-hover:bg-lime-vibrant/10 blur-2xl rounded-full transition-all duration-300" />
                            <div>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-lime-vibrant mb-6 block transition-colors">Leadership</span>
                                <h3 className="text-lg font-bold text-white mb-3">Executive Level</h3>
                                <p className="text-slate-400 group-hover:text-slate-300 text-xs leading-relaxed mb-8 transition-colors">For leaders who need strategic understanding of AI, Cybersecurity, risk and business transformation.</p>
                            </div>
                            <Link href="/programs/executive" className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-vibrant hover:gap-2.5 transition-all">
                                Learn More <ChevronRight size={14} />
                            </Link>
                        </div>

                        {/* Pathway 5 */}
                        <div className="p-6 rounded-3xl bg-slate-900/30 border border-white/10 hover:border-lime-vibrant hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:bg-slate-900/60 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                            {/* Inner Glow light */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-vibrant/0 group-hover:bg-lime-vibrant/10 blur-2xl rounded-full transition-all duration-300" />
                            <div>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-lime-vibrant mb-6 block transition-colors">Institutional Impact</span>
                                <h3 className="text-lg font-bold text-white mb-3">Faculty Development</h3>
                                <p className="text-slate-400 group-hover:text-slate-300 text-xs leading-relaxed mb-8 transition-colors">Train-the-trainer programs that help faculty teach modern, applied and multidisciplinary curricula.</p>
                            </div>
                            <Link href="/programs/educators" className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-vibrant hover:gap-2.5 transition-all">
                                Learn More <ChevronRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Programs Section */}
            <section id="featured-programs" className="py-24 px-6 sm:px-12 lg:px-16 relative">
                <div className="max-w-[1900px] mx-auto space-y-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-lime-vibrant" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant">Featured programs</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
                                Programs designed to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">convert learning into outcomes.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-6 max-w-xl w-full">
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Every program combines structured learning, project execution, assessment, mentorship and career relevance through the Skill Compass learning ecosystem.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {[
                                    { id: "all", label: "All Programs" },
                                    { id: "entry", label: "Entry Level" },
                                    { id: "mid", label: "Mid Level" }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setSelectedLevel(tab.id as any)}
                                        className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-300 border ${
                                            selectedLevel === tab.id
                                                ? "bg-black text-white border-black shadow-lg"
                                                : "bg-slate-900/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                                        } cursor-pointer outline-none`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1900px] mx-auto items-stretch">
                        {[
                            {
                                category: "AI CAREER TRACK",
                                title: "Applied AI & GenAI Program",
                                description: "Build practical skills across AI foundations, machine learning, GenAI, prompt engineering, model evaluation and deployment.",
                                footerLeft: selectedLevel === "entry"
                                    ? "Entry Level" 
                                    : selectedLevel === "mid"
                                        ? "Mid Level"
                                        : "Entry & Mid Level",
                                footerRight: "Project Based",
                                duration: "6 Weeks per track",
                                price: selectedLevel === "entry" 
                                    ? "₹1,49,000 (India) / $2,000 (US)" 
                                    : selectedLevel === "mid"
                                        ? "₹2,49,000 (India) / $3,500 (US)"
                                        : "₹1,49,000 (Entry) / ₹2,49,000 (Professional)",
                                inclusions: [
                                    "5 Intensive professional tracks (Research, Engineering, Operations, Fluency, Bootcamp)",
                                    "Hands-on AI agent and LLM application development",
                                    "Global professional certification upon successful completion",
                                    "Access to high-performance computing infrastructure"
                                ],
                                levels: ["entry", "mid"],
                                links: selectedLevel === "entry"
                                    ? [{ label: "Apply for Entry Level", href: "/programs/entry-level/ai" }]
                                    : selectedLevel === "mid"
                                        ? [{ label: "Apply for Professional Track", href: "/programs/professional/ai" }]
                                        : [
                                            { label: "Apply for Entry Level", href: "/programs/entry-level/ai" },
                                            { label: "Apply for Professional Track", href: "/programs/professional/ai" }
                                        ]
                            },
                            {
                                category: "CYBER CAREER TRACK",
                                title: "Cybersecurity Analyst Program",
                                description: "Develop skills across security operations, threat analysis, SIEM, incident response, cloud security and AI-enabled defence.",
                                footerLeft: selectedLevel === "entry" 
                                    ? "Entry Level" 
                                    : selectedLevel === "mid"
                                        ? "Mid Level"
                                        : "Entry & Mid Level",
                                footerRight: "Industry Ready",
                                duration: "6 Weeks per track",
                                price: selectedLevel === "entry" 
                                    ? "₹1,99,000 (India) / $2,500 (US)" 
                                    : selectedLevel === "mid"
                                        ? "₹2,99,000 (India) / $4,000 (US)"
                                        : "₹1,99,000 (Entry) / ₹2,99,000 (Professional)",
                                inclusions: [
                                    "Comprehensive security tracks (SOC operations, malware analysis, cloud security)",
                                    "Real-world incident response simulation labs",
                                    "Preparation for industry-recognized global cybersecurity certifications",
                                    "Defense methodologies for cloud and AI-driven environments"
                                ],
                                levels: ["entry", "mid"],
                                links: selectedLevel === "entry"
                                    ? [{ label: "Apply for Entry Level", href: "/programs/entry-level/cyber-security" }]
                                    : selectedLevel === "mid"
                                        ? [{ label: "Apply for Professional Track", href: "/programs/professional/cyber-security" }]
                                        : [
                                            { label: "Apply for Entry Level", href: "/programs/entry-level/cyber-security" },
                                            { label: "Apply for Professional Track", href: "/programs/professional/cyber-security" }
                                        ]
                            },
                            {
                                category: "PREMIUM MENTORSHIP",
                                title: "Personalized Transformation Program",
                                description: "A high-touch, one-to-one pathway built around your background, goals, schedule, portfolio and career outcome.",
                                footerLeft: "Custom Duration",
                                footerRight: "Premium",
                                duration: "Custom / Flexible",
                                price: "Premium / Application-Based",
                                inclusions: [
                                    "Private 1-on-1 mentorship sessions with industry leaders",
                                    "100% custom-tailored curriculum designed for your specific goals",
                                    "Direct code review and personalized project guidance",
                                    "Exclusive strategic positioning and direct career placement assistance"
                                ],
                                levels: ["premium"],
                                links: [{ label: "Request Admission Details", href: "/apply-personalized" }]
                            },
                            {
                                category: "LEADERSHIP",
                                title: "Executive AI & Cybersecurity Program",
                                description: "Understand AI strategy, cyber risk, governance, investment priorities and enterprise transformation without unnecessary complexity.",
                                footerLeft: "Executives",
                                footerRight: "Strategic",
                                duration: "4 Weeks (Cohort-based)",
                                price: "Contact Admissions (Enterprise pricing)",
                                inclusions: [
                                    "Strategic brief on AI strategy, governance, and business integration",
                                    "Risk identification frameworks for modern enterprises",
                                    "Exclusion of technical jargon - focuses strictly on business value & KPIs",
                                    "Networking opportunities with C-level and senior executive peers"
                                ],
                                levels: ["executive"],
                                links: [{ label: "Enquire Now", href: "/programs/executive" }]
                            },
                            {
                                category: "TRAIN THE TRAINER",
                                title: "Faculty Development Program",
                                description: "Equip faculty with updated curriculum, lab practices, delivery frameworks and industry-aligned teaching methods.",
                                footerLeft: "Faculty & Institutions",
                                footerRight: "Scalable",
                                duration: "2 to 4 Weeks",
                                price: "Contact Admissions (Institutional package)",
                                inclusions: [
                                    "Ready-to-use curriculum structures, slide decks, and lesson plans",
                                    "Applied lab architecture setups and execution guidelines",
                                    "Workshops on delivering next-gen technologies to students",
                                    "Ongoing advisory support for academic modernisation"
                                ],
                                levels: ["educator"],
                                links: [{ label: "Partner with Us", href: "/programs/educators" }]
                            },
                            {
                                category: "INSTITUTIONAL",
                                title: "Custom Campus Programs",
                                description: "Tailored multidisciplinary learning programs for colleges, universities, enterprises and public institutions.",
                                footerLeft: "Custom Cohorts",
                                footerRight: "Enterprise Ready",
                                duration: "Semester / Year-long plans",
                                price: "Contact Admissions (Custom proposal)",
                                inclusions: [
                                    "Setup of virtual or physical Centers of Excellence (CoE)",
                                    "Custom student bootcamps and collaborative research tracks",
                                    "Integration blueprints for multiple schools of thought",
                                    "Direct connection to industry networks and startup enablement"
                                ],
                                levels: ["institutional"],
                                links: [{ label: "Discuss Partnership", href: "/contact" }]
                            }
                        ].filter(prog => selectedLevel === "all" || prog.levels.includes(selectedLevel)).map((prog, index) => (
                            <div 
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                key={index} 
                                className={`h-full min-h-[270px] p-6 sm:p-7 rounded-2xl bg-slate-900/30 border transition-all duration-300 flex flex-col justify-between group cursor-pointer select-none ${
                                    expandedIndex === index 
                                        ? "border-lime-vibrant/40 bg-slate-900/50 shadow-[0_0_40px_rgba(163,230,53,0.05)]" 
                                        : "border-white/10 hover:border-lime-vibrant/30 hover:shadow-[0_0_30px_rgba(163,230,53,0.05)] hover:bg-slate-900/40"
                                }`}
                            >
                                <div>
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C5A880] block">
                                            {prog.category}
                                        </span>
                                        <ChevronRight 
                                            size={18} 
                                            className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                                                expandedIndex === index ? "rotate-90 text-lime-vibrant" : ""
                                            }`} 
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-lime-vibrant transition-colors">
                                        {prog.title}
                                    </h3>
                                    <p className="text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed mb-5 transition-colors">
                                        {prog.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="border-t border-white/5 my-4" />
                                    <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
                                        <span>{prog.footerLeft}</span>
                                        <span>{prog.footerRight}</span>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="mt-6 pt-6 border-t border-white/5 space-y-6 text-left overflow-hidden w-full"
                                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content inside dropdown
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Duration</span>
                                                    <span className="text-white text-xs sm:text-sm font-semibold">{prog.duration}</span>
                                                </div>
                                                <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Price</span>
                                                    <span className="text-white text-xs sm:text-sm font-semibold">{prog.price}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">What is included:</span>
                                                <div className="space-y-2.5">
                                                    {prog.inclusions.map((inc, i) => (
                                                        <div key={i} className="flex items-start gap-2.5">
                                                            <CheckCircle2 size={16} className="text-lime-vibrant shrink-0 mt-0.5" />
                                                            <span className="text-slate-300 text-xs leading-relaxed">{inc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-2 flex flex-col gap-2.5">
                                                {prog.links.map((link, lIndex) => (
                                                    <Link 
                                                        key={lIndex}
                                                        href={link.href}
                                                        onClick={(e) => {
                                                            if (link.href in PACKAGE_DETAILS && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                                                                e.preventDefault();
                                                                setActivePackagePath(link.href);
                                                            }
                                                        }}
                                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-neutral-800 text-white rounded-xl font-bold text-xs transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg border border-black"
                                                    >
                                                        {link.label} <ArrowUpRight size={14} />
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Choose Your Next Step Call to Action */}
            <section className="py-24 px-6 sm:px-12 lg:px-16">
                <div className="max-w-[1900px] mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 p-12 text-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-lime-vibrant/5 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <div className="w-6 h-[1px] bg-lime-vibrant" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant">Choose your next step</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">Learn. Transform. Lead.</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto font-light">
                                Join an AI or Cybersecurity program, build a personalized learning pathway, launch a faculty development initiative or establish a Centre of Excellence.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Link 
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-slate-100 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                                >
                                    Talk to Admissions
                                </Link>
                                {/* <Link 
                                    href="/contact"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-transform hover:scale-105 active:scale-95"
                                >
                                    Institutional Partnerships
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <AnimatePresence>
                {activePackagePath && PACKAGE_DETAILS[activePackagePath] && (() => {
                    const pkg = PACKAGE_DETAILS[activePackagePath];
                    const originalPrice = COURSE_PRICING[pkg.priceKey].original[currency];
                    const isTeal = pkg.theme === "teal";
                    
                    return (
                        <motion.div
                            key="package-details-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
                        >
                            {/* Backdrop click to close */}
                            <div className="absolute inset-0 cursor-default" onClick={() => setActivePackagePath(null)} />
                            
                            {/* Modal Content container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl w-full max-w-5xl relative z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col text-white"
                            >
                                {/* Top colored decoration bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 ${isTeal ? "bg-gradient-to-r from-teal-500 to-emerald-500" : "bg-gradient-to-r from-blue-500 to-lime-vibrant"}`} />
                                
                                {/* Background glow blob */}
                                <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isTeal ? "bg-teal-500/10" : "bg-blue-500/10"}`} />
                                
                                {/* Close Button */}
                                <button
                                    onClick={() => setActivePackagePath(null)}
                                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                                
                                {/* Scrollable Content */}
                                <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-grow">
                                    <div className="max-w-3xl pr-8">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block ${isTeal ? "bg-teal-500/15 border border-teal-500/30 text-teal-400" : "bg-blue-500/15 border border-blue-500/30 text-blue-400"}`}>
                                            {pkg.subtitle}
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif mb-4 leading-tight">
                                            {pkg.title}
                                        </h2>
                                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                            {pkg.description}
                                        </p>
                                        
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {pkg.pillars.map((pillar) => (
                                                <span key={pillar} className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold ${isTeal ? "bg-teal-500/10 border border-teal-500/20 text-teal-300" : "bg-blue-500/10 border border-blue-500/20 text-blue-300"}`}>
                                                    {pillar}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Stats grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5 flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Duration</span>
                                            <span className="text-white text-xs sm:text-sm font-semibold">6 Weeks per track</span>
                                        </div>
                                        <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5 flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pricing Package</span>
                                            <span className="text-white text-xs sm:text-sm font-semibold">{symbol}{originalPrice}</span>
                                        </div>
                                        <div className="bg-slate-950/40 p-4 rounded-2xl border border-white/5 flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Format</span>
                                            <span className="text-white text-xs sm:text-sm font-semibold">Hybrid (Virtual + In-Person)</span>
                                        </div>
                                    </div>
                                    
                                    {/* Included Courses Section */}
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Included Courses</h3>
                                            <p className="text-slate-400 text-xs sm:text-sm">The package includes full access to the following tracks:</p>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {pkg.courses.map((course) => (
                                                <div
                                                    key={course.sku}
                                                    className="flex flex-col bg-slate-950/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors p-5 group"
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded">{course.sku}</span>
                                                        <span className="text-[10px] font-bold text-slate-400">{course.duration}</span>
                                                    </div>
                                                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-lime-vibrant transition-colors">{course.title}</h4>
                                                    <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow">{course.desc}</p>
                                                    
                                                    {course.persona && (
                                                        <div className="text-[10px] font-medium text-slate-500 border-t border-white/5 pt-3">
                                                            {course.persona}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom CTA bar */}
                                <div className="p-6 bg-slate-950/60 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-left hidden sm:block">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Package Price</span>
                                        <span className="text-xl font-black text-white">{symbol}{originalPrice}</span>
                                    </div>
                                    <Link
                                        href={pkg.applyHref}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black hover:bg-neutral-800 text-white rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg border border-black text-center"
                                    >
                                        Apply for Package <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })()}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
