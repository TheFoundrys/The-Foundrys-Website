"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Award,
    ArrowUpRight,
    Terminal,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    ServerCog,
    ChevronDown,
    MessageSquare,
    Sparkles,
    Zap,
    Workflow,
    BookOpen,
    Layers,
    Database,
    ZapOff
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Custom LLM from Scratch",
        tag: "Core AI",
        desc: "Build a miniature Large Language Model from scratch, understanding tokenization, embeddings, and transformer blocks.",
        tech: ["PyTorch", "Transformers", "Python"]
    },
    {
        title: "Multi-Agent Research System",
        tag: "Agents",
        desc: "Develop a system of specialized AI agents that collaborate to perform deep academic research and produce structured reports.",
        tech: ["LangChain", "AutoGPT", "OpenAI"]
    },
    {
        title: "Enterprise RAG Pipeline",
        tag: "Infrastructure",
        desc: "Implement a production-grade Retrieval-Augmented Generation system with vector databases and semantic search.",
        tech: ["Pinecone", "LangChain", "FastAPI"]
    }
];

const CAREER_ROLES = [
    {
        "id": "llm-engineer",
        "label": "LLM Engineer",
        "title": "LLM Engineer",
        "desc": "Specializes in fine-tuning, deploying, and optimizing large language models for specific industry use cases.",
        "salary": "₹15L - ₹35L",
        "growth": "+80% YoY",
        "skills": [
            "Transformer Architectures",
            "Fine-Tuning (LoRA/QLoRA)",
            "Vector Databases",
            "Model Evaluation",
            "PyTorch/TensorFlow"
        ],
        "responsibilities": [
            "Optimizing LLM inference latency",
            "Implementing RAG systems",
            "Fine-tuning models on domain-specific data",
            "Building agentic workflows",
            "Managing AI infrastructure"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        month: 1,
        title: "Foundations & Data Processing",
        topics: [
            "Module 1: Introduction to LLMs & Ecosystem",
            "Module 2: Python Foundations for AI Mastery",
            "Module 3: Math & ML Fundamentals for Deep Tech",
            "Module 4: Data Handling & Preprocessing Pipelines",
        ]
    },
    {
        month: 2,
        title: "Core architectures & Embeddings",
        topics: [
            "Module 5: NLP Foundations & Sequential Data",
            "Module 6: Vector Embeddings & Semantic Space",
            "Module 7: Transformer Basics & Attention Mechanisms",
        ]
    },
    {
        month: 3,
        title: "Applications & Production",
        topics: [
            "Module 8: Working with Hugging Face Ecosystem",
            "Module 9: Prompting for Beginners to Advanced Patterns",
            "Module 10: Capstone Project & Production Practice",
        ]
    }
];

function CurriculumTabs() {
    const [activeMonth, setActiveMonth] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.month === activeMonth);

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
                    <button
                        key={item.month}
                        onClick={() => setActiveMonth(item.month)}
                        className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeMonth === item.month
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Month {item.month}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeMonth}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                            Month {activeContent?.month}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {activeContent?.title}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
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

function HighlightCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                aria-expanded={isOpen}
            >
                <h4 className="text-lg font-bold text-slate-900 pr-8">{question}</h4>
                <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200/50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function ZeroToOneLLMCoursePage() {
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.zeroToOneLLM;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Award size={16} />
                            <span>Advanced Specialization Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            0-1 LLM <br />
                            <span className="text-blue-400 italic">Certified in Large Language Models</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Master the architecture, training, and deployment of Large Language Models. From transformer foundations to building complex agentic systems.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-blue-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-blue-400" />
                                <span>Core Architecture Fundamentals</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-blue-400" />
                                <span>Advanced RAG & Agents</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-blue-400" />
                                <span>Model Fine-tuning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-16 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">90 Days</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">May 2026</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="text-sm text-slate-400 line-through">{symbol}{pricing.original[currency]}</span>
                                    <span className="text-lg font-bold text-slate-900">{symbol}{pricing.freshers[currency]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href="/enroll/0-1-llm" className="block w-full text-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why This Program Exists */}
            <section className="py-12 md:py-4 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Go beyond the surface of AI.</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                Don't just use LLMs; understand how to build and optimize them.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-400 bg-blue-50/50 p-5">
                                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">The Architecture</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Understand the 'Attention Is All You Need' paper from first principles and build your way up to modern transformer variants.
                                    </p>
                                </div>
                                <div className="border-l-4 border-indigo-400 bg-indigo-50/50 p-5">
                                    <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-2">The Implementation</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Learn to fine-tune open-source models like Llama 3 and Mistral for specific tasks using PEFT techniques like LoRA.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For those who want to lead the AI revolution.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Code2 size={24} className="text-blue-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Software Engineers</h3><p className="text-sm text-slate-600 font-light">Transition into specialized AI Engineering roles.</p></div>
                                </div>
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Terminal size={24} className="text-blue-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Data Scientists</h3><p className="text-sm text-slate-600 font-light">Master the latest in Generative AI and NLP patterns.</p></div>
                                </div>
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Cpu size={24} className="text-blue-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Tech Architects</h3><p className="text-sm text-slate-600 font-light">Design and scale enterprise-grade AI infrastructures.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={Layers} title="Transformer Blocks" desc="In-depth look at multi-head attention, positional encoding, and feed-forward layers that make LLMs tick." />
                        <HighlightCard icon={Database} title="Vector Databases" desc="Master semantic search and retrieval strategies using Pinecone, Chroma, and Milvus for high-performance RAG." />
                        <HighlightCard icon={Zap} title="Efficiency & Speed" desc="Learn quantization (4-bit/8-bit), model pruning, and vLLM for high-throughput production serving." />
                        <HighlightCard icon={ShieldCheck} title="Fine-Tuning" desc="Hands-on experience with LoRA, QLoRA, and RLHF to customize model behavior and knowledge." />
                        <HighlightCard icon={Workflow} title="Agentic Systems" desc="Build complex workflows where models use tools, call APIs, and reason through multi-step tasks." />
                        <HighlightCard icon={BookOpen} title="Evaluation" desc="Establish rigorous benchmarks for model accuracy, safety, and performance using industry standards." />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Curriculum Overview
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A rigorous path from foundation to advanced LLM systems. (Detailed syllabus coming soon)
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-xl">
                                <Image
                                    src="/sample-certificate.png"
                                    alt="Foundry LLM Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Expert Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Validate your expertise in the most transformative technology of our time. This certificate proves your ability to engineer and deploy LLM solutions professionally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
