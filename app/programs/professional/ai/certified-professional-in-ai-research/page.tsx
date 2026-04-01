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
    BrainCircuit,
    Microscope,
    Sigma,
    Network,
    Sparkles,
    FileText,
    ChevronDown,
    FlaskConical,
    Activity,
    LineChart,
    SearchCode,
    Bot,
    Terminal,
    Code2,
    Database,
    Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Novel Architecture Implementation",
        tag: "Deep Learning",
        desc: "Implement a state-of-the-art transformer variant (e.g., FlashAttention, Mamba) from scratch based on a recent research paper, reproducing reported benchmarks.",
        tech: ["PyTorch", "CUDA", "arXiv", "Python"]
    },
    {
        title: "Model Ablation Study",
        tag: "Experimentation",
        desc: "Design and execute a rigorous ablation study to isolate the contribution of specific architectural components (e.g., LayerNorm placement, Activation functions) to model performance.",
        tech: ["WandB", "Experiment Design", "Statistical Analysis", "Matplotlib"]
    },
    {
        title: "Generative Model Exploration",
        tag: "GenAI Research",
        desc: "Investigate the latent space of a Stable Diffusion or VAE variant, analyzing disentanglement and generation quality metrics using FID and IS scores.",
        tech: ["Diffusion Models", "Latent Space Analysis", "FID Score", "PyTorch"]
    },
    {
        title: "RL Agent Benchmarking",
        tag: "Reinforcement Learning",
        desc: "Benchmark standard RL algorithms (PPO, DQN, SAC) on custom high-dimensional environments, analyzing sample efficiency and stability properties.",
        tech: ["Gymnasium", "Stable Baselines 3", "RL Theory", "Benchmarking"]
    },
    {
        title: "Fairness & Bias Audit",
        tag: "Trustworthy AI",
        desc: "Audit a production-grade LLM or Vision model for sociological biases using advanced statistical frameworks and counterfactual evaluation.",
        tech: ["Fairness Indicators", "NLP", "StatsModels", "Python"]
    },
    {
        title: "Knowledge Distillation Lab",
        tag: "Optimization",
        desc: "Research and implement advanced knowledge distillation techniques to compress massive LLMs into edge-compatible student models without significant accuracy loss.",
        tech: ["Distillation", "Quantization", "Pruning", "HuggingFace"]
    }
];

const CAREER_ROLES = [
    {
        "id": "ai-researcher",
        "label": "AI Researcher",
        "title": "Core AI Researcher",
        "desc": "Conducts original research to advance the state of the art in artificial intelligence. Publishes at top-tier conferences (NeurIPS, ICML, CVPR) and develops novel algorithms.",
        "salary": "₹35L - ₹80L+",
        "growth": "+55% YoY",
        "skills": [
            "Deep Learning Theory",
            "Advanced Mathematics",
            "Paper Writing & Peer Review",
            "Experimental Rigor",
            "PyTorch / JAX Master"
        ],
        "responsibilities": [
            "Defining new research directions",
            "Designing and executing large-scale experiments",
            "Leading research publications",
            "Collaborating with academia",
            "Inventing novel neural architectures"
        ]
    },
    {
        "id": "research-engineer",
        "label": "Research Engineer",
        "title": "AI Research Engineer",
        "desc": "Bridges the gap between theoretical research and practical implementation. Scales research prototypes to massive distributed systems.",
        "salary": "₹30L - ₹65L",
        "growth": "+60% YoY",
        "skills": [
            "distributed training",
            "low-level model optimization",
            "software architecture",
            "reproducibility pipelines",
            "高性能计算 (HPC)"
        ],
        "responsibilities": [
            "Scaling research code to production",
            "Optimizing training throughput and cost",
            "Developing internal research tools",
            "Reproducing SOTA results",
            "Collaborating with core researchers"
        ]
    },
    {
        "id": "applied-scientist",
        "label": "Applied Scientist",
        "title": "Principal Applied Scientist",
        "desc": "Applies cutting-edge research to solve high-impact industrial problems. Adapts research breakthroughs for specific product domains.",
        "salary": "₹32L - ₹70L",
        "growth": "+45% YoY",
        "skills": [
            "Applied Research",
            "Domain Adaptation",
            "Statistical Inference",
            "Prototyping",
            "Technical Leadership"
        ],
        "responsibilities": [
            "Solving complex business problems with AI",
            "Leading high-risk, high-reward AI projects",
            "Validating research for production utility",
            "Mentoring engineering teams",
            "Translating papers into product roadmap"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "Foundations & The Research Mindset",
        topics: [
            "Research vs. Engineering: The non-deterministic lifecycle",
            "Literature Deconstruction: How to read, critique, and synthesize arXiv papers",
            "Identifying Research Gaps: Problem formulation and hypothesis generation",
            "Ethics in Frontier AI: Safety, alignment, and societal impact",
            "Top-Tier Research Ecosystem: NeurIPS, ICML, CVPR, and Peer Review"
        ]
    },
    {
        week: 2,
        title: "Mathematical Rigor for Deep Learning",
        topics: [
            "Linear Algebra in Action: Tensors, Eigenvalues, and SVD",
            "Probability & Info Theory: Latent variables, entropy, and KL Divorce",
            "Calculus of Optimization: Chain rule, Jacobians, and Hessian-free methods",
            "Statistical Significance in Experiments: P-values and confidence intervals",
            "Mathematical notation and LaTeX for Scientific Writing"
        ]
    },
    {
        week: 3,
        title: "Machine Learning Core & Theory",
        topics: [
            "Statistical Learning Theory: PAC learning, VC dimension, and generalization",
            "Bias-Variance-Noise Decomposition",
            "Advanced Regularization: Spectral Norm, Dropout variants, and Label Smoothing",
            "Reproducibility in ML: Seeding, Determinism, and Environment parity",
            "WandB & Experiment Tracking: Visualizing latent dynamics"
        ]
    },
    {
        week: 4,
        title: "Neural Architectures & Transformers",
        topics: [
            "Deep Dive into standard CNNs, RNNs, and GNNs",
            "The Transformer Revolution: Attention mechanisms and Positional Encoding",
            "Weights & Initializations: Xavier, Kaiming, and LayerNorm dynamics",
            "Efficient Architectures: MoE (Mixture of Experts), Mamba, and State Space Models",
            "Hardware-Aware Research: FLOPs, Memory Bandwidth, and CUDA basics"
        ]
    },
    {
        week: 5,
        title: "Frontiers: GenAI, RL & Multimodal",
        topics: [
            "Generative Modeling: VAEs, GANs, and Diffusion Theory",
            "Reinforcement Learning: Markov Decision Processes, PPO, and DRL",
            "Scaling Laws: Why size matters (and when it doesn't)",
            "Multimodal Research: Vision-Language Grounding (CLIP, Flamingo)",
            "Active Learning and Human-in-the-loop Research"
        ]
    },
    {
        week: 6,
        title: "Methodology & Capstone Initiation",
        topics: [
            "Designing Rigorous Benchmarks and Evaluation Metrics",
            "Ablation Studies: Proving causality in complex architectures",
            "Scientific Visualization: Plotly, Seaborn, and high-D projections",
            "Structuring the Research Report / Paper",
            "Final Selection of Capstone Research Hypothesis"
        ]
    },
    {
        week: 7,
        title: "Capstone Defense & Career",
        topics: [
            "Executing the Capstone Experiment Portfolio",
            "Writing the Research Defense / Poster Session",
            "Identity Shift: Becoming a Systematic AI Scientist",
            "Research Interview Preparation (Math + Papers)",
            "Navigating the AI Job Market / PhD Admissions"
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
                            ? 'bg-purple-600 text-white shadow-lg scale-105'
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
                        <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                            Phase {activeContent?.week}
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
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-purple-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-purple-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function AIResearchProfessionalPage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.professionalAIResearch;

    useEffect(() => {
        window.scrollTo(0, 0);
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Award size={16} />
                            <span>Premium Professional Certification</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Certified Professional <br />
                            <span className="text-purple-400 italic">AI Research</span>
                        </h1>

                        <p className="text-lg md:text-xl text-purple-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Go beyond implementation. Master the theoretical rigor, mathematical foundations, and experimental methodology required to push the global SOTA in Artificial Intelligence.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-purple-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <Microscope size={18} className="text-purple-400" />
                                <span>Paper Publication Guidance</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <Sigma size={18} className="text-purple-400" />
                                <span>Advanced Math & Theory</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <FlaskConical size={18} className="text-purple-400" />
                                <span>SOTA Reproduction Labs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-14 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">7 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid / Lab</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">April 2026</p>
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
                            <Link href="/enroll/certified-professional-in-ai-research" className="block w-full text-center px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Philosophy */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Why This Program Exists</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                Most of the industry is focused on consumption. We focus on creation.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-400 bg-purple-50/50 p-5">
                                    <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wider mb-2">Theoretical Depth</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Understanding *why* a model works is more powerful than knowing *how* to call it. We dive into the latent dynamics that define intelligence.
                                    </p>
                                </div>

                                <div className="border-l-4 border-indigo-400 bg-indigo-50/50 p-5">
                                    <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-2">Experimental Rigor</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Research is about trial, failure, and systematic validation. You will learn to architect experiments that prove causality, not just correlation.
                                    </p>
                                </div>

                                <div className="border-l-4 border-pink-400 bg-pink-50/50 p-5">
                                    <h4 className="text-sm font-bold text-pink-900 uppercase tracking-wider mb-2">SOTA Benchmarking</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        You won't just learn concepts; you will <span className="font-semibold text-pink-900">reproduce breakthrough papers</span> and benchmark them against global standards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For the visionaries who want to lead the next generation of AI breakthroughs.
                            </p>

                            <div className="space-y-2">
                                {[
                                    { title: "Aspiring AI Scientists", desc: "Engineers or scholars looking to move into core research roles at labs like OpenAI, DeepMind, or Meta.", icon: BrainCircuit },
                                    { title: "Ph.D. & Grad Students", desc: "Academics wanting to bridge the gap between their theoretical work and production-grade research engineering.", icon: Microscope },
                                    { title: "Senior ML Engineers", desc: "Experienced practitioners who want to move from applied ML to foundational model development.", icon: Zap },
                                    { title: "Technical Leaders", desc: "CTOs and Lead Scientists who need to understand the frontiers of GenAI to shape company strategy.", icon: Terminal }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-purple-300 transition-all hover:shadow-md group">
                                        <div className="shrink-0">
                                            <item.icon size={24} className="text-purple-600 group-hover:scale-110 transition-transform" />
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
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            The Research Roadmap
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A high-intensity, 7-phase path from fundamentals to a capstone research defense.
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Skills We Will Master */}
            <section className="py-2 px-1 bg-slate-900">
                <div className="container mx-auto max-w-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Master the Scientific Stack
                        </h2>
                    </div>

                    <div className="space-y-8 overflow-hidden">
                        {[
                            {
                                logos: [
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", name: "OpenAI" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", name: "PyTorch" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", name: "TensorFlow" },
                                    { url: "https://avatars.githubusercontent.com/u/108640506?s=200&v=4", name: "JAX" },
                                    { url: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", name: "Hugging Face" },
                                    { url: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4", name: "Pinecone" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg", name: "Matplotlib" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png", name: "Jupyter" }
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
                                                className="bg-white rounded-xl h-32 w-36 flex flex-col items-center justify-center p-4 gap-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
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
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Academic Excellence Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Validate your scientific rigor. Earn a certificate that proves your ability to conduct peer-reviewable research, design novel architectures, and defend your work.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-purple-100 text-purple-600"><CheckCircle2 size={16} /></div>
                                    Shareable on Google Scholar & LinkedIn
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-indigo-100 text-indigo-600"><CheckCircle2 size={16} /></div>
                                    Demonstrated Theoretical Mastery
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Outcomes */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Research Career Path</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            The industry is evolving towards foundational research. Be at the center of it.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout (Accordion) */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-purple-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-purple-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-purple-500" : ""}`}
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
                                            ? "bg-white border-purple-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-purple-600" : "text-slate-700"}`}>
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

            {/* Research Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Architect Global <br /><span className="text-purple-400">Scientific Portfolio.</span></h2>
                            <p className="text-slate-400 text-lg">Build the experiments that define your career. From model ablation to state-of-the-art transformer reproduction.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <Activity size={16} className="text-purple-500" /> SOTA Reproducibility
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

            {/* FAQs */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <FAQItem question="Do I need a PhD to take this course?" answer="No. This course is designed to build the research DNA that is typically acquired during a PhD, but in a focused, high-intensity format." />
                        <FAQItem question="How much math is required?" answer="A solid understanding of basic calculus and linear algebra is recommended. We cover the specific advanced mathematical concepts (like information theory and latent dynamics) within the program." />
                        <FAQItem question="Will this help me get a job at top research labs?" answer="Absolutely. The portfolio you build here is designed to prove 'Research Engineering' capability—a role that is becoming critical for every major AI lab." />
                        <FAQItem question="Is this course useful for PhD aspirants?" answer="Yes! The methodical approach to literature review, experimental design, and paper reproduction is an excellent preparation for any research-heavy grad school application." />
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
                <div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold mb-4 border border-purple-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
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
