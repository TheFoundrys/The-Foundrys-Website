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
    Container,
    GitBranch,
    Activity,
    Database,
    Workflow,
    ClipboardCheck,
    Bot,
    BrainCircuit,
    Languages
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Code-Morpher",
        tag: "Tools & APIs",
        desc: "A CLI tool that translates legacy code (COBOL/Java) into modern Python using LLMs. Handles context, syntax errors, and writes tests automatically.",
        tech: ["Python", "OpenAI API", "Typer", "AST Parsing"]
    },
    {
        title: "News-Hound Agent",
        tag: "Autonomous Agents",
        desc: "An autonomous research agent that scrapes the web, summarizes news on specific topics, and generates a daily newsletter.",
        tech: ["LangChain", "SerpAPI", "GPT-4", "Streamlit"]
    },
    {
        title: "Legal Mind RAG",
        tag: "RAG System",
        desc: "A secure document analysis tool for lawyers. Upload PDF contracts and ask complex questions with citations to specific clauses.",
        tech: ["LlamaIndex", "Pinecone", "HuggingFace Embeddings", "React"]
    },
    {
        title: "Voice-to-SQL Analyst",
        tag: "Multimodal AI",
        desc: "Talk to your database. Converts voice commands into complex SQL queries, executes them, and visualizes the results on a dashboard.",
        tech: ["Whisper API", "SQLAlchemy", "React", "Plotly"]
    },
    {
        title: "SecureMed Guardrail",
        tag: "AI Safety",
        desc: "A HIPAA-compliant PII detection system. Automatically detects and redacts sensitive patient data from medical transcripts before processing.",
        tech: ["Presidio", "Spacy", "FastAPI", "Docker"]
    },
    {
        title: "Market-Minds Swarm",
        tag: "Multi-Agent Systems",
        desc: "A simulation where multiple AI agents (Analyst, Trader, Risk Manager) debate stock market trends and agree on a trade strategy.",
        tech: ["AutoGen", "Polygon API", "Python", "Discord Bot"]
    }
];

const CAREER_ROLES = [
    {
        "id": "ai-engineer",
        "label": "AI Engineer",
        "title": "AI Engineer",
        "desc": "Builds, deploys, and scales AI systems in production. Focuses on model lifecycle management, inference optimization, and reliable integration of AI into products.",
        "salary": "₹18L - ₹45L",
        "growth": "+45% YoY",
        "skills": [
            "PyTorch / TensorFlow",
            "LLM & ML Fundamentals",
            "Model Deployment & Serving",
            "Inference Optimization",
            "Vector Databases & RAG",
            "Model Monitoring & Drift Detection"
        ],
        "responsibilities": [
            "Deploying and serving ML/LLM models at scale",
            "Optimizing inference latency and cost",
            "Building RAG and data pipelines",
            "Monitoring model performance and drift",
            "Collaborating with product and data teams"
        ]
    },
    {
        "id": "llm-developer",
        "label": "LLM Developer",
        "title": "LLM Application Engineer",
        "desc": "Designs and builds applications powered by Large Language Models, focusing on workflows, agent systems, and evaluation rather than raw model training.",
        "salary": "₹16L - ₹38L",
        "growth": "+60% YoY",
        "skills": [
            "LLM APIs",
            "Vector Databases",
            "Function Calling & Tool Use",
            "Prompt Engineering",
            "Evaluation Frameworks"
        ],
        "responsibilities": [
            "Building LLM-powered features and applications",
            "Designing agentic and tool-using workflows",
            "Implementing semantic search and RAG systems",
            "Evaluating outputs for accuracy and safety",
            "Improving reliability and guardrails"
        ]
    },
    {
        "id": "ai-architect",
        "label": "AI Application Architect",
        "title": "AI Application Architect",
        "desc": "Owns the end-to-end architecture of AI systems, balancing scalability, cost, security, and business requirements.",
        "salary": "₹30L - ₹60L",
        "growth": "+35% YoY",
        "skills": [
            "System Design",
            "MLOps & Platform Architecture",
            "Security & Compliance",
            "Cost Optimization",
            "Scalability"
        ],
        "responsibilities": [
            "Designing scalable AI system architectures",
            "Selecting models, frameworks, and infrastructure",
            "Ensuring data security, privacy, and compliance",
            "Optimizing performance and operational cost",
            "Mentoring engineering teams"
        ]
    },
    {
        "id": "prompt-engineer",
        "label": "Prompt Engineer",
        "title": "LLM Interaction Designer",
        "desc": "Designs and optimizes how humans interact with AI systems, focusing on prompt design, evaluation, and user experience.",
        "salary": "₹12L - ₹30L",
        "growth": "+50% YoY",
        "skills": [
            "Prompt Engineering",
            "Linguistics & UX",
            "Model Behavior Analysis",
            "Evaluation & Testing",
            "Experiment Design"
        ],
        "responsibilities": [
            "Designing and refining system prompts",
            "Reducing hallucinations and failure modes",
            "Creating test and evaluation datasets",
            "Running A/B experiments on AI outputs",
            "Collaborating with product and engineering teams"
        ]
    },
    {
        "id": "product-manager",
        "label": "Technical Product Manager (AI)",
        "title": "Technical Product Manager (AI)",
        "desc": "Leads AI-powered products by translating business needs into technical requirements while managing risk, impact, and delivery.",
        "salary": "₹20L - ₹50L",
        "growth": "+40% YoY",
        "skills": [
            "Product Strategy",
            "AI/ML Fundamentals",
            "User Experience",
            "Agile & Roadmapping",
            "Data & Metrics"
        ],
        "responsibilities": [
            "Defining AI product vision and roadmap",
            "Prioritizing features based on impact and feasibility",
            "Aligning stakeholders across engineering and business",
            "Managing AI risks and trade-offs",
            "Measuring ROI and product success"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "Fundamentals & OpenAI Platform",
        topics: [
            "AI vs ML vs DL", "LLM Architecture (Transformers)", "Chat Completions API", "Prompt Engineering Strategies"
        ]
    },
    {
        week: 2,
        title: "Advanced API & Embeddings",
        topics: [
            "Function Calling & Tools", "Structured Outputs", "Vision & Audio APIs", "Vector Embeddings 101"
        ]
    },
    {
        week: 3,
        title: "Vector DBs & RAG Foundations",
        topics: [
            "Pinecone & ChromaDB", "Indexing Strategies", "Naive RAG vs Advanced RAG", "Chunking Strategies"
        ]
    },
    {
        week: 4,
        title: "Advanced RAG & Open Source",
        topics: [
            "Re-ranking & Query Expansion", "Hugging Face Hub", "Llama 3 & Mistral", "Running Models Locally (Ollama)"
        ]
    },
    {
        week: 5,
        title: "AI Agents & Fine-Tuning",
        topics: [
            "ReAct Pattern", "LangChain Agents", "PEFT & LoRA", "Fine-tuning Llama 3"
        ]
    },
    {
        week: 6,
        title: "Multimodal AI & Production",
        topics: [
            "Vision & Speech Pipelines", "Eval & Monitoring (LangSmith)", "Deployment Strategies", "Capstone Project Defense"
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

export default function AIEngineeringTeluguCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Languages size={16} />
                            <span>Taught in Telugu</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Certified Professional AI <br />
                            <span className="text-blue-400 italic">Engineering</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-400 font-light mb-8">(Telugu Medium)</p>

                        <p className="text-lg md:text-xl text-blue-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Become a Production-Ready AI Engineer in 6 Weeks. Build autonomous agents, RAG systems, and multimodal apps that solve real-world problems.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-blue-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-blue-400" />
                                <span>Industry-Recognized Certificate</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-blue-400" />
                                <span>Hands-on Capstone Project</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-blue-400" />
                                <span>Expert-Led Sessions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-24 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">6 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">February 2026</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="text-sm text-slate-400 line-through">₹150,000</span>
                                    <span className="text-lg font-bold text-slate-900">₹75,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href="/apply" className="block w-full text-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why This Program Exists + Who It's For */}
            <section className="py-12 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                        {/* Left: Why This Program Exists */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">The AI revolution is here. Don&apos;t just watch it happen.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Companies are scrambling for engineers who can build, not just theorize. The Certified Professional AI Engineering is an intensive program designed to take you from a standard developer to an AI specialist.
                            </p>
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-4 mb-8">
                                <Languages className="text-blue-600 shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-blue-900 text-lg mb-2">Why Telugu?</h4>
                                    <p className="text-blue-800 text-base leading-relaxed">
                                        Learning complex technical concepts is often easier in your native language. This course covers the exact same rigorous curriculum as our English track, but explained in Telugu to ensure deeper understanding and faster mastery.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="border-l-4 border-red-400 bg-red-50/50 p-5">
                                    <h4 className="text-sm font-bold text-red-900 uppercase tracking-wider mb-2">The Reality</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Companies are scrambling for engineers who can build, not just theorize. Traditional courses are stuck in theory.
                                    </p>
                                </div>

                                <div className="border-l-4 border-blue-400 bg-blue-50/50 p-5">
                                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">The Evolution</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        You need to move fast. From basic Python to building autonomous agents and RAG systems in weeks, not years.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Who This Program Is For */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For those ready to jumpstart their career in the most exciting field of tech.
                            </p>

                            <div className="space-y-2">
                                {[
                                    { title: "Students & Graduates", desc: "Computer Science or Engineering students wanting to specialize in AI.", icon: Code2 },
                                    { title: "Career Switchers", desc: "Developers from other domains (Web, Mobile) moving into AI.", icon: GitBranch },
                                    { title: "Aspiring AI Engineers", desc: "Anyone with basic coding skills ready to build the future.", icon: BrainCircuit },
                                    { title: "Tech Enthusiasts", desc: "Builders who want to create their own AI-powered startups or tools.", icon: Terminal }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all hover:shadow-md group">
                                        <div className="shrink-0">
                                            <item.icon size={24} className="text-blue-600 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base font-serif text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <HighlightCard icon={Terminal} title="Zero-to-Hero" desc="No PhD required. Start with LLM fundamentals and end with deploying autonomous agents." />
                        <HighlightCard icon={Code2} title="Industry-First Stack" desc="Master OpenAI API, LangChain, Vector Databases, and Open Source models (Llama 3, Mistral)." />
                        <HighlightCard icon={Briefcase} title="Real Portfolio" desc="Build and deploy 6 production-grade projects that you can show off on GitHub and LinkedIn." />
                        <HighlightCard icon={ShieldCheck} title="AI Safety" desc="Learn responsible AI: prompt injection attacks, bias mitigation, and privacy." />
                        <HighlightCard icon={Cpu} title="Hybrid Model" desc="Deep dives into proprietary models (GPT-4) and running local models using Ollama." />
                        <HighlightCard
                            icon={ServerCog}
                            title="Production AI Systems"
                            desc="Design, deploy, monitor, and scale real-world AI systems used in production environments."
                        />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            What You&apos;ll Learn
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A structured path from foundations to advanced AI Engineering
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Skills We Will Master */}
            <section className="py-2 px-1 bg-slate-900">
                <div className="container mx-auto max-w-9xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Tools You Will Master
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            The definitive modern stack for AI Engineering
                        </p>
                    </div>

                    <div className="space-y-8 overflow-hidden">
                        {[
                            {
                                logos: [
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", name: "Python" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", name: "OpenAI" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Hugging_Face_logo.svg", name: "Hugging Face" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Pinecone_Systems_logo.svg", name: "Pinecone" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", name: "Streamlit" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", name: "Scikit-Learn" }
                                ],
                                direction: "left"
                            },
                            {
                                logos: [
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
                                    { url: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", name: "LangChain" },
                                    { url: "https://www.llamaindex.ai/_next/static/media/logo.20129759.svg", name: "LlamaIndex" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", name: "AWS" }
                                ],
                                direction: "right"
                            }
                        ].map((row, i) => (
                            <div key={i} className="mb-8">
                                <div className="relative overflow-hidden">
                                    <motion.div
                                        className="flex gap-8 items-center"
                                        animate={{
                                            x: row.direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear"
                                        }}
                                        style={{ width: "max-content" }}
                                    >
                                        {[...row.logos, ...row.logos, ...row.logos, ...row.logos].map((logo, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-xl h-32 w-36 flex flex-col items-center justify-center p-4 gap-2
                                                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                                            >
                                                <img
                                                    src={logo.url}
                                                    className="h-12 w-auto object-contain"
                                                    alt={logo.name}
                                                />
                                                <span className="text-xs font-semibold text-slate-700 text-center">
                                                    {logo.name}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                                    alt="Foundry Professional Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Validate your engineering prowess. Earn a certificate that proves you can build and deploy real AI applications, not just run notebooks.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-blue-100 text-blue-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-indigo-100 text-indigo-600"><CheckCircle2 size={16} /></div>
                                    Showcase Detailed Project Portfolio
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Roles - Redesigned Split View */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who you can become</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            The industry is evolving. Start your journey towards high-demand roles.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout (Accordion) */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-blue-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-blue-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-blue-500" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {activeRole.id === role.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="p-4 pt-0 border-t border-slate-100">
                                                    <div className="pt-4">
                                                        <RoleDetailsContent role={role} />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:flex w-full flex-row gap-8 items-start">
                            <div className="w-1/3 flex flex-col gap-2">
                                {CAREER_ROLES.map((role) => (
                                    <button
                                        key={role.id}
                                        onMouseEnter={() => setActiveRole(role)}
                                        onClick={() => setActiveRole(role)}
                                        className={`text-left p-4 rounded-xl transition-all duration-200 border ${activeRole.id === role.id
                                            ? "bg-white border-blue-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-blue-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                    </button>
                                ))}
                            </div>

                            <div className="w-2/3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeRole.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl min-h-[420px]"
                                    >
                                        <RoleDetailsContent role={activeRole} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <FAQItem question="Is the curriculum different from the English batch?" answer="No. The curriculum, projects, and certification are exactly the same. The only difference is the language of instruction." />
                        <FAQItem question="Will the materials/slides be in Telugu?" answer="The slides and code will be in English (standard industry practice), but the spoken explanation and Q&A will be in Telugu." />
                        <FAQItem question="I only know basic Python. Is this course for me?" answer="Yes! The only prerequisite is basic programming knowledge (functions, loops, variables). We teach you the specific AI libraries and frameworks from scratch." />
                        <FAQItem question="Do I need a high-end expensive laptop?" answer="No. For most of the course, we use cloud APIs (like OpenAI) which run on remote servers. For the local model section, a standard laptop is sufficient, though a Mac (M1/M2/M3) or a laptop with an NVIDIA GPU is a bonus." />
                        <FAQItem question="Will this help me get a job if I have a gap in my career?" answer="Absolutely. The AI field is new enough that 'years of experience' matter less than 'what you have built.' The 6 projects in your portfolio are designed to prove your skills to employers immediately." />
                        <FAQItem question="What is the difference between this and a Data Science course?" answer="Data Science focuses on statistics, cleaning data, and training models from scratch. AI Engineering focuses on using existing powerful models to build applications. It is more about software engineering and product building than math and statistics." />
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineer Intelligent <br /><span className="text-blue-400">Production Systems.</span></h2>
                            <p className="text-slate-400 text-lg">Go beyond tutorials. Architect and deploy 6 complex applications that solve actual business problems.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-emerald-500" /> Real-World Architecture
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                number={`0${index + 1}`}
                                title={project.title}
                                tag={project.tag}
                                desc={project.desc}
                                tech={project.tech}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ProjectCard({ number, title, tag, desc, tech }: { number: string, title: string, tag: string, desc: string, tech: string[] }) {
    return (
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-50 text-slate-600 text-6xl font-bold select-none -z-0">
                {number}
            </div>
            <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm h-20">
                    {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-400 text-xs">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
