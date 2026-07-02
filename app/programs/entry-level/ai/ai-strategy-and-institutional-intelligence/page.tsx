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
import { SyllabusMindMap } from "@/components/ui/syllabus-mind-map";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Enterprise AI Roadmap",
        tag: "Strategy",
        desc: "Develop a comprehensive AI adoption roadmap for a legacy enterprise, identifying high-impact use cases and ROI metrics.",
        tech: ["AI Maturity Framework", "ROI Modeler", "Risk Matrices"]
    },
    {
        title: "Institutional Knowledge Base",
        tag: "Intelligence",
        desc: "Design and deploy a RAG semantic search knowledge system that unifies scattered corporate documents under access controls.",
        tech: ["Vector Embeddings", "RAG Governance", "Access Policies"]
    },
    {
        title: "AI Governance & Ethics Framework",
        tag: "Compliance",
        desc: "Construct an institutional policy framework addressing biases, transparency, and data privacy in deployed AI models.",
        tech: ["ISO 42001 Standards", "Risk Management", "Compliance Audit"]
    }
];

const CAREER_ROLES = [
    {
        "id": "ai-strategist",
        "label": "AI Strategist / Director",
        "title": "AI Strategist / Director",
        "desc": "Leads the integration of AI technologies with business strategy, ensuring operational alignment and competitive advantages.",
        "salary": "₹20L - ₹45L",
        "growth": "+90% YoY",
        "skills": [
            "Strategic Planning",
            "AI Technology Stack",
            "Risk Management",
            "Vendor Evaluation",
            "Change Management"
        ],
        "responsibilities": [
            "Defining organization-wide AI vision",
            "Managing AI budgets and projects",
            "Overseeing compliance and governance",
            "Collaborating with data science and executive teams",
            "Driving change management initiatives"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "The AI Shift",
        topics: [
            "Chapter: Understanding the New Intelligence Era",
            "AI is not another software wave. It is the transition from programmable systems to learning systems.",
            "Evolution from software to AI",
            "Why AI changes industries differently",
            "AI vs Automation",
            "Narrow AI vs General AI",
            "Understanding intelligence systems",
            "The economics of prediction"
        ]
    },
    {
        week: 2,
        title: "AI Strategy Fundamentals",
        topics: [
            "Chapter: Strategy Before Technology",
            "Most organizations fail because they adopt tools before understanding the problem.",
            "AI strategy vs AI experimentation",
            "Decision intelligence",
            "Identifying AI opportunities",
            "High-value AI use cases",
            "AI maturity models",
            "Organizational readiness"
        ]
    },
    {
        week: 3,
        title: "Data, Context & Institutional Memory",
        topics: [
            "Chapter: Data Is Not the Asset — Context Is",
            "AI becomes powerful only when connected to meaningful operational context.",
            "Data ecosystems",
            "Structured vs unstructured data",
            "Knowledge systems",
            "Institutional memory",
            "Data pipelines",
            "Why private data matters"
        ]
    },
    {
        week: 4,
        title: "Human + AI Collaboration",
        topics: [
            "Chapter: Designing Augmented Intelligence",
            "The future is not human vs AI. It is human + AI systems.",
            "AI copilots",
            "Decision augmentation",
            "Cognitive load reduction",
            "Human-in-the-loop systems",
            "AI productivity systems",
            "Workforce transformation"
        ]
    },
    {
        week: 5,
        title: "AI Infrastructure & Private AI",
        topics: [
            "Chapter: Owning Intelligence",
            "Organizations that do not own their AI stack risk losing strategic control.",
            "Cloud AI vs private AI",
            "Local LLMs",
            "AI infrastructure basics",
            "Vector databases",
            "Secure AI architecture",
            "Institutional AI systems"
        ]
    },
    {
        week: 6,
        title: "Responsible AI & Governance",
        topics: [
            "Chapter: Trust, Risk & Explainability",
            "AI without governance becomes organizational risk.",
            "AI ethics",
            "Explainability",
            "Bias & fairness",
            "AI audits",
            "Governance frameworks",
            "Regulatory awareness",
            "AI risk management"
        ]
    },
    {
        week: 7,
        title: "AI in the Real World",
        topics: [
            "Chapter: Enterprise & Industry Transformation",
            "AI impact depends on domain integration, not hype.",
            "AI in cybersecurity",
            "AI in healthcare",
            "AI in education",
            "AI in BFSI",
            "AI in governance",
            "Operational AI systems",
            "Autonomous workflows"
        ]
    },
    {
        week: 8,
        title: "The Future of Work & Intelligence",
        topics: [
            "Chapter: Learning Faster Than Organizations",
            "The most valuable organizations will be learning organizations.",
            "AI-native companies",
            "Autonomous agents",
            "Future workforce models",
            "AI-driven education",
            "Continuous learning systems",
            "Institutional adaptation",
            "Digital labor"
        ]
    },
    {
        week: 9,
        title: "Capstone & Transformation",
        topics: [
            "Chapter: Institutional Intelligence in Action",
            "AI strategy succeeds when organizations redesign themselves around learning.",
            "End-to-end AI transformation",
            "AI operating models",
            "Strategic execution",
            "Scaling AI responsibly",
            "Building institutional intelligence",
            "Leadership in the AI era"
        ]
    }
];

function HighlightCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
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

export default function AIStrategyCoursePage() {
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.aiStrategy;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Award size={16} />
                            <span>Executive Specialization Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            AI Strategy & <br />
                            <span className="text-indigo-400 italic">Institutional Intelligence</span>
                        </h1>

                        <p className="text-lg md:text-xl text-indigo-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Bridge the gap between artificial intelligence capabilities and organizational success. Learn to design, deploy, and govern institutional knowledge ecosystems.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-indigo-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-indigo-400" />
                                <span>AI Transformation Strategy</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-indigo-400" />
                                <span>Institutional Intelligence Ops</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-indigo-400" />
                                <span>Governance & Risk Alignment</span>
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
                                <p className="text-lg font-bold text-slate-900">9 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">August 2026</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    {pricing.original[currency] && (
                                        <span className="text-sm text-slate-400 line-through">{symbol}{pricing.original[currency]}</span>
                                    )}
                                    <span className="text-lg font-bold text-slate-900">{symbol}{pricing.freshers[currency]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href={`/apply?course=${encodeURIComponent("AI Strategy & Institutional Intelligence")}`} className="block w-full text-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
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
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Drive AI with Strategic Vision.</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                Technology is only a tool; success lies in strategic alignment and institutional readiness.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-indigo-400 bg-indigo-50/50 p-5">
                                    <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-2">The Alignment</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Translate capabilities of LLMs and generative systems into practical roadmaps that enhance productivity, lower costs, and unlock revenue.
                                    </p>
                                </div>
                                <div className="border-l-4 border-blue-400 bg-blue-50/50 p-5">
                                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">The Execution</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Master the design of secure enterprise knowledge architectures (RAG) and workflow automations while managing change and institutional policies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For those who lead organizations into the AI age.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Briefcase size={24} className="text-indigo-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Executives & Directors</h3><p className="text-sm text-slate-600 font-light">Architect corporate AI initiatives and resource allocations.</p></div>
                                </div>
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Terminal size={24} className="text-indigo-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Product & Program Managers</h3><p className="text-sm text-slate-600 font-light">Lead cross-functional AI implementation squads.</p></div>
                                </div>
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Cpu size={24} className="text-indigo-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Consultants & Advisers</h3><p className="text-sm text-slate-600 font-light">Provide strategic direction for businesses navigating deep tech disruption.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={Layers} title="Strategic Planning" desc="Frameworks to align business metrics with AI potentials, evaluating vendor vs. custom builds." />
                        <HighlightCard icon={Database} title="Knowledge Architectures" desc="Understanding RAG, enterprise data integration, and indexing corporate intelligence." />
                        <HighlightCard icon={Zap} title="Efficiency & Change" desc="Empower teams, restructure workflows, and drive cultural alignment for AI integration." />
                        <HighlightCard icon={ShieldCheck} title="Governance & Risk" desc="Mitigating IP risk, data leakage, and compliance with modern safety regulations." />
                        <HighlightCard icon={Workflow} title="Operations" desc="Oversee lifecycle of institutional intelligence agents and monitor continuous improvements." />
                        <HighlightCard icon={BookOpen} title="ROI Metrics" desc="Formulate benchmarks to measure system productivity and operational performance changes." />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Curriculum Overview
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A clear 9-week trajectory from foundational strategy to compliant production oversight.
                        </p>
                    </div>

                    <SyllabusMindMap
                        data={CURRICULUM_DATA.map(({ week, title, topics }) => ({ period: week, title, topics }))}
                        periodLabel="Week"
                        hubTitle="AI STRATEGY"
                        theme="indigo"
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white border-t border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <FAQItem
                            question="Is programming experience required for this course?"
                            answer="No, this program is designed for business leaders, directors, and managers. While some familiarity with technical terms is helpful, no active programming is required."
                        />
                        <FAQItem
                            question="What certification will I receive?"
                            answer="You will receive a Certified Professional in AI Strategy & Institutional Intelligence, verifying your ability to lead AI transformation."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
