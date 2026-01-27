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
    ChevronDown
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

export default function AIEngineeringCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

    useEffect(() => {
        // Random shuffle on mount (client-side only) to ensure dynamic rotation
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/programs/professional/ai" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to AI Programs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">
                                <Award size={16} /> Professional Certification
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Certified Professional in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Engineering</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                Become a Production-Ready AI Engineer in 90 Days. Build autonomous agents, RAG systems, and multimodal apps that solve real-world problems.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">12 Weeks</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">Weekend Hybrid</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/apply" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 text-center">
                                    Enroll Now
                                </Link>
                                <Link href="#overview" className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700 text-center">
                                    Explore Course
                                </Link>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 lg:p-10">
                            <h3 className="text-white text-xl font-bold mb-6">Program Fee</h3>
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl lg:text-5xl font-bold text-white">₹75,000</span>
                                <span className="text-xl text-slate-500 line-through">₹150,000</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded uppercase">50% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <InfoRow text="Live Weekend Classes (Sat & Sun)" />
                                <InfoRow text="Hands-on Capstone Project" />
                                <InfoRow text="Industry Recognized Certification" />
                                {/* <InfoRow text="Career Support & Placement Assistance" /> */}
                            </div>

                            <p className="text-slate-500 text-sm font-medium leading-relaxed text-center mt-4">
                                *Flexible EMI options available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">The AI revolution is here. Don&apos;t just watch it happen.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Companies are scrambling for engineers who can build, not just theorize. The Certified Professional in AI Engineering is an intensive, <span className="font-bold text-slate-900">12-week bootcamp</span> designed to take you from a standard developer to an AI specialist.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mt-4">
                            Whether you are a fresh graduate or a professional looking to switch domains, this program bridges the gap between basic Python scripting and building autonomous, large-scale AI applications. You won’t just learn about AI; you will build <span className="font-bold text-slate-900">agents, Retrieval Augmented Generation (RAG) systems, and multimodal apps</span> that solve real-world problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={Terminal} title="Zero-to-Hero" desc="No PhD required. Start with LLM fundamentals and end with deploying autonomous agents." />
                        <HighlightCard icon={Code2} title="Industry-First Stack" desc="Master OpenAI API, LangChain, Vector Databases, and Open Source models (Llama 3, Mistral)." />
                        <HighlightCard icon={Briefcase} title="Real Portfolio" desc="Build and deploy 6 production-grade projects that you can show off on GitHub and LinkedIn." />
                        <HighlightCard icon={ShieldCheck} title="AI Safety" desc="Learn responsible AI: prompt injection attacks, bias mitigation, and privacy." />
                        <HighlightCard icon={Cpu} title="Hybrid Model" desc="Deep dives into proprietary models (GPT-4) and running local models using Ollama." />
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

            {/* Skills */}
            <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
                {/* Centered heading + description */}
                <div className="container mx-auto px-6 mb-16 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Skills You&apos;ll Master
                    </h2>
                    <p className="text-slate-400">
                        Industry standard technologies powered by modern AI stack
                    </p>
                </div>

                {/* Marquee row 1 */}
                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap will-change-transform mb-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 120,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-center gap-12 text-slate-400 font-bold text-2xl uppercase tracking-widest"
                        >
                            <span>Python</span> <span>&bull;</span>
                            <span>OpenAI</span> <span>&bull;</span>
                            <span>LangChain</span> <span>&bull;</span>
                            <span>Pinecone</span> <span>&bull;</span>
                            <span>Hugging Face</span> <span>&bull;</span>
                            <span>Ollama</span> <span>&bull;</span>
                            <span>Streamlit</span> <span>&bull;</span>
                            <span>LlamaIndex</span> <span>&bull;</span>
                            <span>Cursor</span> <span>&bull;</span>
                            <span>Jupyter</span> <span>&bull;</span>
                            <span>scikit-learn</span> <span>&bull;</span>
                            <span>XGBoost</span> <span>&bull;</span>
                            <span>Activation functions</span> <span>&bull;</span>
                            <span>Loss functions</span> <span>&bull;</span>
                            <span>Backpropagation</span> <span>&bull;</span>
                            <span>Gradient descent</span> <span>&bull;</span>
                            <span>Regularization</span> <span>&bull;</span>
                            <span>Hyperparameter tuning</span>
                        </div>
                    ))}
                </motion.div>

                {/* Marquee row 2 */}
                <motion.div
                    className="flex items-center gap-12 whitespace-nowrap will-change-transform"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 120,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex items-center gap-12 text-slate-400 font-bold text-2xl uppercase tracking-widest"
                        >
                            <span>Prompt Engineering</span> <span>&bull;</span>
                            <span>LLM App Development</span> <span>&bull;</span>
                            <span>Vector Search</span> <span>&bull;</span>
                            <span>AI Agents</span> <span>&bull;</span>
                            <span>Orchestration</span> <span>&bull;</span>
                            <span>Model Deployment</span> <span>&bull;</span>
                            <span>Embeddings</span> <span>&bull;</span>
                            <span>Linear Regression</span> <span>&bull;</span>
                            <span>Logistic Regression</span> <span>&bull;</span>
                            <span>Decision Trees</span> <span>&bull;</span>
                            <span>Random Forest</span> <span>&bull;</span>
                            <span>KNN</span> <span>&bull;</span>
                            <span>Naive Bayes</span> <span>&bull;</span>
                            <span>SVM</span> <span>&bull;</span>
                            <span>Neural Networks</span> <span>&bull;</span>
                            <span>Deep Learning</span>
                        </div>
                    ))}
                </motion.div>
            </section>


            {/* Curriculum */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                        <p className="text-lg text-slate-600">A comprehensive 12-week journey from foundations to production.</p>
                    </div>

                    <div className="space-y-12">
                        {/* Month 1 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-blue-100">01</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Fundamentals & The OpenAI Ecosystem</h3>
                                    <p className="text-slate-500">Focus: Mastering the core &quot;Engine&quot; and API-first development.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 1" title="Introduction & Fundamentals" topics={["AI vs ML vs DL", "LLM Architecture (Transformers)", "Tokenization & Context Windows"]} />
                                <WeekCard week="Week 2" title="The OpenAI Platform" topics={["Chat Completions API", "Prompt Engineering Strategies", "Function Calling & Tools"]} />
                                <WeekCard week="Week 3" title="Advanced API Usage" topics={["Structured Outputs", "Vision & Audio APIs", "Project 1: Multi-Turn Chatbot"]} />
                                <WeekCard week="Week 4" title="Embeddings & Semantic Search" topics={["Vector Embeddings 101", "Cosine Similarity", "Building a Semantic Search Engine"]} />
                            </div>
                        </div>

                        {/* Month 2 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-blue-100">02</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">RAG, Vector DBs & Open Source</h3>
                                    <p className="text-slate-500">Focus: Building private, data-grounded AI systems.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 5" title="Vector Databases Deep Dive" topics={["Pinecone, ChromaDB & Weaviate", "Indexing Strategies", "Hybrid Search"]} />
                                <WeekCard week="Week 6" title="Retrieval Augmented Generation (RAG)" topics={["Naive RAG vs Advanced RAG", "Chunking Strategies", "Project 2: Document Q&A System"]} />
                                <WeekCard week="Week 7" title="Advanced RAG Techniques" topics={["Re-ranking", "Query Expansion", "Contextual Compression"]} />
                                <WeekCard week="Week 8" title="Open Source Models" topics={["Hugging Face Hub", "Llama 3 & Mistral", "Running Models Locally (Ollama)"]} />
                            </div>
                        </div>

                        {/* Month 3 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-blue-100">03</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Agents, Fine-Tuning & Production</h3>
                                    <p className="text-slate-500">Focus: Autonomous systems and production engineering.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 9" title="Building AI Agents" topics={["ReAct Pattern", "LangChain Agents", "Project 3: Autonomous Research Agent"]} />
                                <WeekCard week="Week 10" title="Fine-Tuning & Custom Models" topics={["PEFT & LoRA", "Fine-tuning Llama 3", "Data Preparation"]} />
                                <WeekCard week="Week 11" title="Multimodal AI" topics={["GPT-4V & Gemini Pro Vision", "Text-to-Speech & Speech-to-Text", "Image Generation Pipelines"]} />
                                <WeekCard week="Week 12" title="Production Engineering" topics={["Eval & Monitoring (LangSmith)", "Deployment Strategies", "Capstone Project Defense"]} />
                            </div>
                        </div>
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
                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Your effort deserves recognition. Upon successful completion of the professional track, you will receive a verifiable digital certificate from The Foundry, signaling your readiness to industry partners.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-blue-100 text-blue-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-amber-100 text-amber-600"><CheckCircle2 size={16} /></div>
                                    Gateway to Advanced Specializations
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
                            The industry is evolving. This program prepares you for the most high-demand roles in the AI ecosystem.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout (Accordion) - Visible only on small screens */}
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

                        {/* Desktop Layout - Visible only on lg screens and up */}
                        <div className="hidden lg:flex w-full flex-row gap-8 items-start">
                            {/* Left Column: Role List */}
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

                            {/* Right Column: Detailed View */}
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
                        <FAQItem question="I only know basic Python. Is this course for me?" answer="Yes! The only prerequisite is basic programming knowledge (functions, loops, variables). We teach you the specific AI libraries and frameworks from scratch." />
                        <FAQItem question="Do I need a high-end expensive laptop?" answer="No. For most of the course, we use cloud APIs (like OpenAI) which run on remote servers. For the local model section, a standard laptop is sufficient, though a Mac (M1/M2/M3) or a laptop with an NVIDIA GPU is a bonus." />
                        <FAQItem question="Will this help me get a job if I have a gap in my career?" answer="Absolutely. The AI field is new enough that 'years of experience' matter less than 'what you have built.' The 6 projects in your portfolio are designed to prove your skills to employers immediately." />
                        <FAQItem question="What is the difference between this and a Data Science course?" answer="Data Science focuses on statistics, cleaning data, and training models from scratch. AI Engineering focuses on using existing powerful models to build applications. It is more about software engineering and product building than math and statistics." />
                        <FAQItem question="Do I need to be good at Math (Calculus/Algebra)?" answer="No. Unlike traditional Machine Learning, AI Engineering relies on using pre-trained models via APIs and code. You need logic and coding skills, not advanced calculus." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to engineering the future?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join a cohort of ambitious builders and launch your career in AI Engineering.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Start Application <ArrowUpRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function InfoRow({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
}

function HighlightCard({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) {
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



function WeekCard({ week, title, topics }: { week: string, title: string, topics: string[] }) {
    return (
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{week}</div>
            <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
            <ul className="space-y-2">
                {topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    )
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
