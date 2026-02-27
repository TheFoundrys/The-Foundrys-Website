"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Clock,
    Award,
    ArrowUpRight,
    Terminal,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    ServerCog,
    ChevronDown,
    Users,
    BarChart3,
    Rocket,
    BrainCircuit,
    Database,
    Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "AI-Powered GIS Navigator",
        tag: "GIS Domain",
        desc: "Build a spatial analysis tool that uses AI to predict urban growth patterns using satellite data and historical GIS records.",
        tech: ["Python", "GeoPandas", "Scikit-learn", "Satellite APIs"]
    },
    {
        title: "Java-to-Python Bridge",
        tag: "Engineering Tools",
        desc: "Develop a logic migration utility that uses LLMs to translate complex Java business logic into optimized Python AI scripts.",
        tech: ["OpenAI API", "Python", "Java Parsing", "LangChain"]
    },
    {
        title: "Enterprise Log Intelligence",
        tag: "DevOps / MLOps",
        desc: "Create an anomaly detection system for Spring Boot applications that analyzes logs in real-time to identify potential security threats.",
        tech: ["FastAPI", "Pandas", "PyTorch", "ELK Stack"]
    },
    {
        title: "API-First Model Serving",
        tag: "Deployment",
        desc: "Build a high-performance REST API wrapper for transformer models, optimized for integration with existing Java-based microservices.",
        tech: ["FastAPI", "Docker", "HuggingFace", "Redis"]
    }
];

const CAREER_ROLES = [
    {
        "id": "ai-lead-developer",
        "label": "AI Lead (Java Background)",
        "title": "AI Lead Developer",
        "desc": "Bridges the gap between legacy Java ecosystems and modern AI capabilities. Architects hybrid systems that leverage robust enterprise logic with AI intelligence.",
        "salary": "₹25L - ₹55L",
        "growth": "+40% YoY",
        "skills": [
            "Python-Java Interop",
            "Enterprise AI Architecture",
            "Model Lifecycle Management",
            "Scalable AI Pipelines",
            "DevOps / MLOps"
        ],
        "responsibilities": [
            "Leading AI adoption in existing Java teams",
            "Architecting scalable AI integration layers",
            "Mentoring developers in Python & AI best practices",
            "Bridging DevOps and Data Science workflows",
            "Ensuring enterprise-grade security for AI"
        ]
    },
    {
        "id": "mlops-engineer",
        "label": "MLOps Specialist",
        "title": "MLOps Engineer",
        "desc": "Focuses on the operationalization of AI models. Applies strong DevOps backgrounds to automate training, testing, and deployment of AI systems.",
        "salary": "₹20L - ₹48L",
        "growth": "+55% YoY",
        "skills": [
            "Docker / Kubernetes",
            "CI/CD for ML",
            "Model Monitoring",
            "Cloud Infrastructure (AWS)",
            "Python Automation"
        ],
        "responsibilities": [
            "Automating model deployment pipelines",
            "Managing AI infrastructure on cloud",
            "Monitoring model drift and performance",
            "Scaling inference services",
            "Implementing secure AI workflows"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "Deep Tech Foundations & Python Mastery",
        topics: [
            "Transitioning from Object-Oriented Java to Functional Python",
            "Python Basics for Data Processing & AI",
            "Mastering Core Frameworks: NumPy, Pandas, Matplotlib",
            "Data Preparation & Preprocessing for GIS & Enterprise Data",
            "Building your first Data-Driven Analysis Pipeline"
        ]
    },
    {
        week: 2,
        title: "Model Training, Transformers & Deployment",
        topics: [
            "Modern Model Training Workflows: From Scikit-learn to Deep Learning",
            "Practical Usage of Transformers (LLMs, BERT, Vision Transformers)",
            "Integrating AI Components into existing APIs & Web Apps",
            "Deploying Production-Grade AI Models with FastAPI & Docker",
            "Final Capstone: Building a full-stack AI Solution for GIS/Enterprise"
        ]
    }
];

function CurriculumTabs() {
    const [activeWeek, setActiveWeek] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.week === activeWeek);

    return (
        <div className="space-y-8">
            {/* Week Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
                    <button
                        key={item.week}
                        onClick={() => setActiveWeek(item.week)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeWeek === item.week
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Week {item.week}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeWeek}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                            Week {activeContent?.week}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {activeContent?.title}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                        {activeContent?.topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function AIFluencyPage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.aiFluency;

    useEffect(() => {
        window.scrollTo(0, 0);
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <Link href="/programs/professional/ai" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8 text-sm font-medium">
                            <ArrowLeft size={16} /> Back to AI Programs
                        </Link>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <BrainCircuit size={16} />
                            <span>Mid-Level Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            AI Fluency <br />
                            <span className="text-blue-400 italic">for Java Developers</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            A specialized 2-week transformation for experienced engineers. Master the AI stack from Python foundations to production deployment. Tailored for enterprise backgrounds in GIS, DevOps, and Full-stack development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-14 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">20 Days </p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Effort</p>
                                <p className="text-lg font-bold text-slate-900">4 Hrs / Day</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Format</p>
                                <p className="text-lg font-bold text-slate-900">Virtual Training</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="text-sm text-slate-400 line-through">{symbol}{pricing.original[currency]}</span>
                                    <span className="text-lg font-bold text-slate-900">{symbol}{pricing.twoToFive[currency]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-auto">
                            <Link href="https://compass.thefoundrys.com/courses/ai/ai-fluency" className="block w-full text-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Target Audience</h2>
                            <div className="space-y-4">
                                <AudienceItem icon={Code2} title="Java Developers" desc="Min 4 years experience in maintenance, APIs, or web applications." />
                                <AudienceItem icon={ServerCog} title="DevOps Engineers" desc="Experienced in AWS/Jenkins looking to automate with AI." />
                                <AudienceItem icon={Globe} title="GIS Professionals" desc="Domain experts aiming to integrate AI into spatial analytics." />
                                <AudienceItem icon={Users} title="Tech Cross-Functional" desc="Technical leads bridging business logic and AI implementation." />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Expected Outcomes</h2>
                            <div className="space-y-4">
                                <OutcomeItem text="Write & understand production-grade Python for AI use cases" />
                                <OutcomeItem text="Master data preparation & preprocessing for real-world datasets" />
                                <OutcomeItem text="Train and evaluate basic AI/ML models independently" />
                                <OutcomeItem text="Practical exposure to Transformer models (LLMs, BERT)" />
                                <OutcomeItem text="Deploy and integrate AI components into existing enterprise APIs" />
                            </div>
                        </div>
                    </div>

                    {/* Syllabus */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">The 2-Week Intensive Syllabus</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Structured for professionals to master AI without abandoning their core engineering strengths.</p>
                        </div>
                        <CurriculumTabs />
                    </div>

                    {/* Projects Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Hands-on Projects</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Build realistic enterprise-grade AI prototypes inspired by real-world use cases.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project, i) => (
                            <ProjectCard key={i} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function AudienceItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors group">
            <div className="p-3 bg-white rounded-lg text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900">{title}</h4>
                <p className="text-sm text-slate-600">{desc}</p>
            </div>
        </div>
    );
}

function OutcomeItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
            <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
            <span className="text-slate-800 font-medium">{text}</span>
        </div>
    );
}

function ProjectCard({ title, tag, desc, tech }: { title: string, tag: string, desc: string, tech: string[] }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">{tag}</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20">{desc}</p>
            <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-50 rounded border border-slate-100 text-xs text-slate-500 font-mono">{t}</span>
                ))}
            </div>
        </div>
    );
}
