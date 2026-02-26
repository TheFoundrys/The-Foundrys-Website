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
    Microscope,
    FlaskConical,
    LineChart,
    SearchCode,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Model Benchmarking Lab",
        tag: "Evaluation",
        desc: "Compare accuracy, latency, and reasoning capabilities of frontier models (GPT-4, Claude 3, Llama 3) on a custom research dataset.",
        tech: ["Python", "Benchmarking API", "Statistical Analysis", "Plotly"]
    },
    {
        title: "Bias Detection Audit",
        tag: "Ethical AI",
        desc: "Analyze large-scale text/image datasets for hidden sociological biases and visualize representation gaps using statistical tools.",
        tech: ["Data Science", "Visualization", "NLP", "Pandas"]
    },
    {
        title: "RL Maze Solver",
        tag: "Reinforcement Learning",
        desc: "Build and train a reinforcement learning agent to navigate complex environments using Q-learning or Policy Gradients.",
        tech: ["OpenAI Gym", "PyTorch", "Algorithms", "Simulation"]
    },
    {
        title: "Arxiv Intel RAG",
        tag: "Knowledge Discovery",
        desc: "A specialized RAG system for researchers that extracts insights from scientific papers with precise citations and vector search.",
        tech: ["LlamaIndex", "Vector DB", "Arxiv API", "React"]
    },
    {
        title: "Style Transfer Lab",
        tag: "Generative Research",
        desc: "Implement a neural style transfer system using GANs or Diffusion models to explore the boundaries of machine creativity.",
        tech: ["Neural Networks", "Computer Vision", "TorchVision", "FastAPI"]
    },
    {
        title: "Architecture Explorer",
        tag: "Deep Learning",
        desc: "Research how changing neural network depth, width, and activation functions impacts model convergence and generalization.",
        tech: ["PyTorch", "Weight Initialization", "Optimization", "Tensors"]
    }
];

const CAREER_ROLES = [
    {
        "id": "junior-ai-scientist",
        "label": "Junior AI Scientist",
        "title": "Junior AI Scientist",
        "desc": "Supports original AI research by designing experiments, running simulations, and documenting findings in scientific formats.",
        "salary": "₹15L - ₹35L",
        "growth": "+55% YoY",
        "skills": [
            "Mathematical Foundations",
            "Experimental Design",
            "PyTorch / JAX",
            "Technical Writing",
            "Literature Review",
            "Model Analysis"
        ],
        "responsibilities": [
            "Designing and executing research experiments",
            "Analyzing model behaviors and failures",
            "Keeping up with the latest SOTA publications",
            "Documenting findings for research papers",
            "Collaborating with senior AI researchers"
        ]
    },
    {
        "id": "data-research-assistant",
        "label": "Data Research Assistant",
        "title": "Data Research Assistant",
        "desc": "Focuses on the foundation of AI—data. Focuses on high-quality dataset curation, bias mitigation, and synthetic data generation research.",
        "salary": "₹12L - ₹28L",
        "growth": "+40% YoY",
        "skills": [
            "Data Distribution Analysis",
            "Bias Detection",
            "NLP / CV Preprocessing",
            "Statistical Sampling",
            "Data Governance"
        ],
        "responsibilities": [
            "Curating specialized research datasets",
            "Auditing datasets for bias and leakage",
            "Generating and validating synthetic data",
            "Implementing data privacy protocols",
            "Running ablation studies on data quality"
        ]
    },
    {
        "id": "ai-research-coordinator",
        "label": "AI Research Coordinator",
        "title": "AI Research Coordinator",
        "desc": "Bridges the gap between technical research breakthroughs and practical implementation, ensuring research goals align with impact.",
        "salary": "₹18L - ₹40L",
        "growth": "+30% YoY",
        "skills": [
            "Project Management",
            "AI Feasibility Analysis",
            "Stakeholder Communication",
            "Research Ethics",
            "Translational Research"
        ],
        "responsibilities": [
            "Managing research project timelines",
            "Evaluating research feasibility for products",
            "Ensuring ethical standards in experiments",
            "Coordinating between researchers and engineers",
            "Communicating complex findings to management"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "The Research Mindset",
        topics: [
            "Scientific Method in AI: From intuition to hypothesis",
            "Conducting Literature Reviews: Reading and deconstructing AI papers",
            "Problem Formulation: Identifying meaningful research gaps",
            "Ethics in Research: Bias, safety, and societal impact",
            "Standard Research Tools: Arxiv, HuggingFace, and Weights & Biases"
        ]
    },
    {
        week: 2,
        title: "Data Foundations & Bias",
        topics: [
            "Deconstructing Datasets: Distribution, sampling, and noise",
            "Measuring and Visualizing Algorithmic Bias",
            "Data Leakage: The silent killer of research validity",
            "Synthetic Data Generation: Methods and validation",
            "Privacy-Preserving Research: Federated learning and differential privacy"
        ]
    },
    {
        week: 3,
        title: "Neural Architectures",
        topics: [
            "Mathematics of the Transformer: Attention, MLP, and Residuals",
            "Deep Dive into CNNs and RNN architectures",
            "Weights & Initializations: Why models converge or fail",
            "Loss Landscapes: Visualizing how models learn",
            "Emergent Behaviors: Scaling laws and capability jumps"
        ]
    },
    {
        week: 4,
        title: "Experimental Design",
        topics: [
            "Designing Rigorous Benchmarks",
            "Ablation Studies: Proving which components actually matter",
            "Hyperparameter Optimization strategies",
            "Model Evaluation Metrics: Beyond simple accuracy",
            "Reproducibility: Ensuring your results are scientifically valid"
        ]
    },
    {
        week: 5,
        title: "Reinforcement Learning & Optimization",
        topics: [
            "Agentic Learning: Rewards, states, and actions",
            "Q-Learning and Policy Gradient fundamentals",
            "Advanced Gradient Descent: Adam, SGD, and beyond",
            "Simulation Environments: Building the 'labs' for AI",
            "Goal-Driven Intelligence: Multi-agent simulations"
        ]
    },
    {
        week: 6,
        title: "The Future of Intelligence",
        topics: [
            "Multimodal Research: Vision-Language grounding",
            "Causal Inference in AI: Moving from correlation to cause",
            "World Models and Reasoning Systems",
            "Preparing the Research Defense: Communication and visualization",
            "Identity Shift: Becoming a Systematic AI Scientist"
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
                            ? 'bg-indigo-600 text-white shadow-lg scale-105'
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
                        <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">
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
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-indigo-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function AIResearchCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.aiResearch;

    useEffect(() => {
        window.scrollTo(0, 0);
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - randomInRange(0.1, 0.9));
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Microscope size={16} />
                            <span>Entry-Level Research Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Certified in <br />
                            <span className="text-indigo-400 italic">AI Research</span>
                        </h1>

                        <p className="text-lg md:text-xl text-indigo-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Master the art of discovery. Move from being an AI user to an AI scientist. Learn to design experiments, audit biases, and build the future of intelligence.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-indigo-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-indigo-400" />
                                <span>Academic Quality Certificate</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-indigo-400" />
                                <span>Scientific Portfolio</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-indigo-400" />
                                <span>Research Methodology</span>
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
                                <p className="text-lg font-bold text-slate-900">6 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">March 2026</p>
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
                            <Link href="/apply" className="block w-full text-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why This Program Exists + Who It's For */}
            <section className="py-12 md:py-4 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                        {/* Left: Why This Program Exists */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Master the Core of AI</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                Understanding how to use AI is common. Understanding how to build and audit it is rare.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-indigo-400 bg-indigo-50/50 p-5">
                                    <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-2">Beyond the Surface</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Most courses teach you to call APIs. We teach you why the API works, how it was trained, and where its weaknesses lie.
                                    </p>
                                </div>

                                <div className="border-l-4 border-purple-400 bg-purple-50/50 p-5">
                                    <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wider mb-2">The Lab Culture</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Research is about trial and error. You will spend 6 weeks in a simulated lab environment, running experiments that mirrors real-world AI development.
                                    </p>
                                </div>

                                <div className="border-l-4 border-pink-400 bg-pink-50/50 p-5">
                                    <h4 className="text-sm font-bold text-pink-900 uppercase tracking-wider mb-2">Academic Rigor</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        This program is designed for those who want a solid academic and technical foundation, preparing them for higher studies or core AI roles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Who This Program Is For */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For the curious minds who want to look under the hood.
                            </p>

                            <div className="space-y-2">
                                {[
                                    { title: "Aspiring AI Scientists", desc: "Students who want to pursue a career in core AI/ML research.", icon: FlaskConical },
                                    { title: "Math & Logic Lovers", desc: "Those who enjoy the theory and mathematics behind intelligent systems.", icon: LineChart },
                                    { title: "Data Ethicists", desc: "Professionals interested in auditing AI for bias and social impact.", icon: ShieldCheck },
                                    { title: "CS Undergraduates", desc: "CS students looking to build a high-quality research portfolio for higher studies.", icon: SearchCode }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 transition-all hover:shadow-md group">
                                        <div className="shrink-0">
                                            <item.icon size={24} className="text-indigo-600 group-hover:scale-110 transition-transform" />
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
            <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Syllabus & Methodology
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A structured path from intuition to systematic research
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
                            Research Tools & Frameworks
                        </h2>
                    </div>

                    <div className="space-y-8 overflow-hidden">
                        {[
                            {
                                logos: [
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", name: "OpenAI API" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python Core" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", name: "TensorFlow" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg", name: "Matplotlib" },
                                    { url: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", name: "LangChain" },
                                    { url: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4", name: "Pinecone" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png", name: "Jupyter" },
                                    { url: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", name: "HuggingFace" }
                                ],
                                direction: "left"
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
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Scientific Recognition</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Prove your research competency. Earn a certificate that demonstrates your ability to conduct experiments, audit AI systems, and contribute to scientific discovery.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-indigo-100 text-indigo-600"><CheckCircle2 size={16} /></div>
                                    Verifiable Digital Credential
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-purple-100 text-purple-600"><CheckCircle2 size={16} /></div>
                                    Scientific Project Portfolio
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Launch Your Research Career</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Start in roles that define the next generation of intelligent systems.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout (Accordion) */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-indigo-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-indigo-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-indigo-500" : ""}`}
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
                                            ? "bg-white border-indigo-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-indigo-600" : "text-slate-700"}`}>
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

            {/* Project Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your <br /><span className="text-indigo-400">Research Portfolio.</span></h2>
                            <p className="text-slate-400 text-lg">Theory isn't enough. You will design, execute, and document 6 original experiments that solve real research challenges.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <Sparkles size={16} className="text-indigo-500" /> Academic Rigor
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
                        <FAQItem question="Do I need advanced math to start?" answer="No. While research involves math, we teach you the necessary concepts (Statistics, Linear Algebra) in a practical, visual way from scratch." />
                        <FAQItem question="How is this different from the Engineering track?" answer="The Engineering track focuses on *building applications* using models. The Research track focuses on *understanding and auditing models*, experimental design, and data science." />
                        <FAQItem question="Can I use these projects for higher studies applications?" answer="Yes! These 6 projects are design to show academic rigor and systematic thinking, which are highly valued in Grad School (MS/PhD) applications." />
                        <FAQItem question="Do I need a GPU to run these experiments?" answer="For most assignments, we use cloud-based tools (Google Colab, HuggingFace) that provide free or cheap GPU access. A standard laptop is perfect for the start." />
                        <FAQItem question="What kind of support do I get during the 6 weeks?" answer="You get access to expert mentors, weekly live lab sessions, and a community of fellow researchers to collaborate with." />
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
                <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-xs font-bold mb-4 border border-indigo-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
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
