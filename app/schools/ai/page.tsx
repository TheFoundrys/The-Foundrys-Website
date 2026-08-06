"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
    CheckCircle2,
    Award,
    Cpu,
    ShieldCheck,
    Code2,
    Briefcase,
    ChevronDown,
    Rocket,
    BrainCircuit,
    Database,
    Bot,
    Layers,
    ArrowUpRight,
    Play
} from "lucide-react";
import Link from "next/link";
import { CareerVision } from "@/components/schools/shared/career-vision";
import { SyllabusMindMap } from "@/components/ui/syllabus-mind-map";
import { ProgramStats } from "./program-stats";
import { WhyUs } from "./why-us";



const TOOLS = [
    { name: "pandas", cat: "Data & ML", color: "#150458", url: "https://cdn.simpleicons.org/pandas" },
    { name: "PyTorch", cat: "Data & ML", color: "#EE4C2C", url: "https://cdn.simpleicons.org/pytorch" },
    { name: "TensorFlow", cat: "Data & ML", color: "#FF6F00", url: "https://cdn.simpleicons.org/tensorflow" },
    { name: "JAX", cat: "Data & ML", color: "#4285F4", url: "https://raw.githubusercontent.com/google/jax/main/docs/_static/jax_logo_250px.png" },
    { name: "Keras", cat: "Data & ML", color: "#D00000", url: "https://cdn.simpleicons.org/keras" },
    { name: "MLflow", cat: "Data & ML", color: "#0194E2", url: "https://cdn.simpleicons.org/mlflow" },
    { name: "Kaggle", cat: "Data & ML", color: "#20BEFF", url: "https://cdn.simpleicons.org/kaggle" },
    { name: "spaCy", cat: "Data & ML", color: "#09A3D5", url: "https://cdn.simpleicons.org/spacy" },
    { name: "NLTK", cat: "Data & ML", color: "#154360", url: "https://www.nltk.org/_static/logo.png" },
    { name: "OpenCV", cat: "Data & ML", color: "#5C3EE8", url: "https://cdn.simpleicons.org/opencv" },
    { name: "Jupyter", cat: "Data & ML", color: "#F37626", url: "https://cdn.simpleicons.org/jupyter" },
    { name: "Python", cat: "Data & ML", color: "#3776AB", url: "https://cdn.simpleicons.org/python" },
    { name: "scikit-learn", cat: "Data & ML", color: "#F7931E", url: "https://cdn.simpleicons.org/scikitlearn" },
    { name: "YOLO", cat: "Data & ML", color: "#00ADEF", url: "https://cdn.simpleicons.org/yolo" },
    { name: "Streamlit", cat: "Data & ML", color: "#FF4B4B", url: "https://cdn.simpleicons.org/streamlit" },
    { name: "Gradio", cat: "Data & ML", color: "#F97316", url: "https://cdn.simpleicons.org/gradio" },
    { name: "CUDA", cat: "Data & ML", color: "#76B900", url: "https://cdn.simpleicons.org/nvidia" },
    { name: "AWS", cat: "Cloud & Infra", color: "#FF9900", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", cat: "Cloud & Infra", color: "#0078D4", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Colab", cat: "Cloud & Infra", color: "#F9AB00", url: "https://cdn.simpleicons.org/googlecolab" },
    { name: "Kubeflow", cat: "Cloud & Infra", color: "#4285F4", url: "https://www.kubeflow.org/images/logo.svg" },
    { name: "Ray", cat: "Cloud & Infra", color: "#00BCD4", url: "https://cdn.simpleicons.org/ray" },
    { name: "BentoML", cat: "Cloud & Infra", color: "#121926", url: "https://cdn.simpleicons.org/bentoml" },
    { name: "OpenAI", cat: "Foundation Models", color: "#412991", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "HuggingFace", cat: "Foundation Models", color: "#FFD21E", url: "https://cdn.simpleicons.org/huggingface" },
    { name: "vLLM", cat: "Foundation Models", color: "#3B82F6", url: "https://raw.githubusercontent.com/vllm-project/vllm/main/docs/source/assets/vllm-logo-text-light.png" },
    { name: "Triton", cat: "Foundation Models", color: "#76B900", url: "https://cdn.simpleicons.org/nvidia" },
    { name: "Ollama", cat: "Foundation Models", color: "#111827", url: "https://cdn.simpleicons.org/ollama" },
    { name: "SentenceTransformers", cat: "Foundation Models", color: "#4B5563", url: "https://raw.githubusercontent.com/UKPLab/sentence-transformers/master/docs/img/logo.png" },
    { name: "Together AI", cat: "Foundation Models", color: "#7B2FBE", url: "https://avatars.githubusercontent.com/u/104278457?s=200&v=4" },
    { name: "Qdrant", cat: "Vector DBs", color: "#DC244C", url: "https://cdn.simpleicons.org/qdrant" },
    { name: "FAISS", cat: "Vector DBs", color: "#3B82F6", url: "https://raw.githubusercontent.com/facebookresearch/faiss/main/docs/faiss_logo.png" },
    { name: "Pinecone", cat: "Vector DBs", color: "#2E7D32", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Pinecone-Full-Logo-Black.svg" },
    { name: "Weaviate", cat: "Vector DBs", color: "#3B82F6", url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Weaviate_logo.svg" },
    { name: "Databricks", cat: "Synthetic Data", color: "#2471A3", url: "https://cdn.simpleicons.org/databricks" },
    { name: "Apache", cat: "Synthetic Data", color: "#1A5276", url: "https://cdn.simpleicons.org/apache" },
    { name: "Chainguard", cat: "ML Security", color: "#0B5345", url: "https://cdn.simpleicons.org/chainguard" },
];

const TOOLS_ROW_1 = TOOLS.slice(0, 18);
const TOOLS_ROW_2 = TOOLS.slice(18);

const ToolMarquee = ({ tools, reverse = false, speed = 80 }: { tools: any[], reverse?: boolean, speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden select-none py-2 md:py-3 relative bg-slate-900/40 border-y border-white/5">
            <motion.div
                className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {[...tools, ...tools].map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 bg-slate-950 rounded-xl shadow-sm border border-white/5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
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
                            className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-600 group-hover:text-white transition-colors duration-300 font-sans"
                        >
                            {tool.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const CAREER_ROLES = [
    {
        id: "neural-architect",
        label: "AI Model Engineer",
        title: "AI Model Engineer",
        desc: "Builds and fine-tunes transformer models and neural architectures for scalable AI applications across cloud and edge environments.",
        salary: "₹7L - 11L",
        growth: "+35% YoY",
        skills: [
            "PyTorch & TensorFlow",
            "CUDA Optimization",
            "LLM Architecture Design",
            "TPU/GPU Tuning",
            "Distributed Systems"
        ],
        responsibilities: [
            "Implementing neural network architectures",
            "Fine-tuning pretrained transformer models",
            "Optimizing models for inference performance",
            "Assisting in distributed training workflows",
            "Experimenting with new model architectures"
        ]
    },
    {
        id: "agentic-systems-engineer",
        label: "AI Agent Engineer",
        title: "AI Agent Engineer",
        desc: "Builds intelligent AI agents capable of reasoning, tool usage, and task automation across enterprise workflows.",
        salary: "₹5L - 10L",
        growth: "+40% YoY",
        skills: [
            "LangChain & Autogen",
            "Agent Orchestration",
            "System Design",
            "API Integration",
            "Memory Systems"
        ],
        responsibilities: [
            "Building AI agent workflows",
            "Integrating external tools and APIs",
            "Implementing memory and retrieval systems",
            "Testing agent reasoning capabilities",
            "Improving agent reliability and performance"
        ]
    },
    {
        id: "ai-security-lead",
        label: "AI Safety Engineer",
        title: "AI Safety Engineer",
        desc: "Ensures AI systems operate safely and responsibly by testing models against prompt injection, adversarial attacks, and bias.",
        salary: "₹6L - 12L",
        growth: "+30% YoY",
        skills: [
            "Red Teaming",
            "Cybersecurity",
            "AI Alignment",
            "Governance Frameworks",
            "Adversarial ML"
        ],
        responsibilities: [
            "Testing models against adversarial attacks",
            "Monitoring model outputs for bias",
            "Implementing safety guardrails for LLM systems",
            "Analyzing prompt injection vulnerabilities",
            "Supporting AI governance initiatives"
        ]
    },
    {
        id: "embodied-ai-specialist",
        label: "Robotics AI Engineer",
        title: "Robotics AI Engineer",
        desc: "Develops AI models that enable robots to perceive environments, interpret sensor data, and execute intelligent actions.",
        salary: "₹5L - 11L",
        growth: "+38% YoY",
        skills: [
            "Robotics (ROS2)",
            "Computer Vision",
            "Kinematics",
            "Real-time Inference",
            "Sensor Fusion"
        ],
        responsibilities: [
            "Integrating AI models with robotic systems",
            "Processing visual and sensor data streams",
            "Optimizing real-time inference pipelines",
            "Supporting robotic perception systems",
            "Testing robotic navigation and interaction"
        ]
    },
    {
        id: "synthetic-data-architect",
        label: "Synthetic Data Engineer",
        title: "Synthetic Data Engineer",
        desc: "Builds pipelines that generate synthetic datasets to train and improve AI models while reducing dependency on real-world data.",
        salary: "₹5L - 10L",
        growth: "+35% YoY",
        skills: [
            "Generative AI",
            "Data Engineering",
            "Simulation (Unreal/Unity)",
            "Statistical Validation",
            "GANs/VAEs"
        ],
        responsibilities: [
            "Generating synthetic datasets for AI training",
            "Building automated data generation pipelines",
            "Validating statistical similarity with real data",
            "Reducing bias in training datasets",
            "Supporting model training workflows"
        ]
    },
    {
        id: "cross-modal-systems-designer",
        label: "Multimodal AI Engineer",
        title: "Multimodal AI Engineer",
        desc: "Develops AI systems capable of understanding and generating information across multiple modalities such as text, images, audio, and video.",
        salary: "₹6L - 12L",
        growth: "+38% YoY",
        skills: [
            "Multi-modal LLMs",
            "Audio Processing",
            "Transformer Architecture",
            "Latent Space Analysis",
            "Feature Embedding"
        ],
        responsibilities: [
            "Training models on multi-modal datasets",
            "Aligning visual and textual embeddings",
            "Implementing cross-modal attention mechanisms",
            "Optimizing multi-modal model performance",
            "Evaluating cross-modal reasoning quality"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        year: 1,
        title: "Foundations of Intelligence",
        topics: [
            "Mathematical Foundations: Linear Algebra, Calculus, Probability & Statistics",
            "Python Mastery: From Zero to Production-Grade Engineering",
            "Core Data Structures & Algorithms for AI",
            "Introduction to Machine Learning: Supervised & Unsupervised Learning",
            "Neural Network Fundamentals: Perceptrons to Deep Networks",
            "Entrepreneurship 101: Problem Discovery & Ideation"
        ]
    },
    {
        year: 2,
        title: "Engineering & Specialization",
        topics: [
            "Deep Learning: CNNs, RNNs, LSTMs, and Attention Mechanisms",
            "Natural Language Processing & Large Language Models",
            "Computer Vision: Object Detection, Segmentation, GANs",
            "Reinforcement Learning & Multi-Agent Systems",
            "MLOps: Model Deployment, Monitoring & Scaling",
            "Startup Lab: Building Your First AI Product (MVP)"
        ]
    },
    {
        year: 3,
        title: "Mastery & Real-World Impact",
        topics: [
            "Advanced Transformer Architectures & LLM Fine-Tuning",
            "Agentic AI: Autonomous Systems & Orchestration",
            "AI Security, Ethics & Responsible AI",
            "Distributed Training on HPC Clusters (H100/A100)",
            "Capstone: Production-Grade AI System with Industry Partner",
            "Founder Track: Pitch Deck, Fundraising & Go-to-Market Strategy"
        ]
    },
    {
        year: 4,
        title: "Deep Specialization & Venture Launch",
        topics: [
            "Advanced Specialization: Robotics, AI for Healthcare, or Finance",
            "Deep Research: Contributing to Open Source AI Frameworks",
            "Industrial MLOps: Orchestrating Global-Scale AI Systems",
            "Major Capstone: Launching Your AI Venture to Market",
            "Residency: 6-Month Full-Time Internship with Global Partners",
            "Founder Track: Seed Funding, Equity Design & Scaling"
        ]
    }
];



export default function AISchoolPage() {
    const [duration, setDuration] = useState<3 | 4>(3);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/20 selection:text-blue-400 overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="relative min-h-[95vh] flex items-center bg-slate-950 overflow-hidden pt-20">
                {/* Mesh & Grid Background */}
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
                </div>

                <div className="container mx-auto max-w-[1450px] relative z-10 px-6 sm:px-12 lg:px-16 w-full">
                    <div className="py-20 lg:py-28 min-h-[85vh] flex flex-col justify-center text-left">
                        <div className="max-w-5xl w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full relative z-10"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    School of Deep Tech
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase font-sans">
                                    Artificial <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-400 inline-block">Intelligence</span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-12 max-w-2xl">
                                    A {duration}-year immersive degree merging AI Engineering with Entrepreneurship. <br />
                                    <span className="text-white font-medium">Graduate with Mastery, Vision & Real-World Impact.</span>
                                </p>

                                {/* Duration Toggle */}
                                <div className="flex gap-4 mb-12">
                                    <button
                                        onClick={() => setDuration(3)}
                                        className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                                            duration === 3 
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
                                                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5 hover:bg-slate-800'
                                        }`}
                                    >
                                        3-Year Program
                                    </button>
                                    <button
                                        onClick={() => setDuration(4)}
                                        className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                                            duration === 4 
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
                                                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5 hover:bg-slate-800'
                                        }`}
                                    >
                                        4-Year Program
                                    </button>
                                </div>

                                {/* Information Boxes */}
                                <div className="grid sm:grid-cols-3 gap-10 pt-10 border-t border-white/10 max-w-3xl">
                                    {/* Degrees */}
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.25em] font-bold mb-4">Available Degrees</p>
                                        <div className="space-y-2 border-l border-blue-500/30 pl-4">
                                            {duration === 3 ? (
                                                <>
                                                    <p className="text-sm font-semibold text-white tracking-tight leading-tight">BCA in Artificial Intelligence</p>
                                                    <p className="text-sm font-semibold text-white tracking-tight leading-tight">B.Sc AI / ML Professional</p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-sm font-semibold text-white tracking-tight leading-tight">BCA in Artificial Intelligence</p>
                                                    <p className="text-sm font-semibold text-white tracking-tight leading-tight">B.Tech AI / ML Professional</p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Partners */}
                                    {duration === 3 && (
                                        <div>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-[0.25em] font-bold mb-4">Partner Institutions</p>
                                            <div className="space-y-2 border-l border-cyan-500/30 pl-4">
                                                <p className="text-sm font-semibold text-white tracking-tight leading-tight">Ethames Business School</p>
                                                <p className="text-sm font-semibold text-white tracking-tight leading-tight">Keshava Degree College</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Certifications */}
                                    <div className={duration === 4 ? "sm:col-span-2" : ""}>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.25em] font-bold mb-4">Industry Credentials</p>
                                        <div className="flex gap-6 border-l border-purple-500/30 pl-4 items-center h-[38px]">
                                            <div>
                                                <span className="text-base font-extrabold text-blue-400 tracking-wider block leading-none">FCEP</span>
                                                <span className="text-[8px] text-slate-400 uppercase tracking-widest font-semibold mt-1 block">Executive</span>
                                            </div>
                                            <div>
                                                <span className="text-base font-extrabold text-cyan-400 tracking-wider block leading-none">FCIP</span>
                                                <span className="text-[8px] text-slate-400 uppercase tracking-widest font-semibold mt-1 block">Practitioner</span>
                                            </div>
                                            <div>
                                                <span className="text-base font-extrabold text-purple-400 tracking-wider block leading-none">FFP</span>
                                                <span className="text-[8px] text-slate-400 uppercase tracking-widest font-semibold mt-1 block">Professional</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>



                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 select-none pointer-events-none"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
                </motion.div>
            </section>

            {/* Program Details Floating Specs Card */}
            <div className="relative z-20 px-6 -mt-10 mb-12">
                <div className="mx-auto max-w-[1450px]">
                    <div className="bg-slate-950/40 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white/5 py-8 px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-14 flex-1 text-left w-full">
                            <div>
                                <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#94a3b8' }}>Program Length</p>
                                <p className="text-base sm:text-lg font-bold" style={{ color: '#ffffff' }}>{duration}-Year Full-Time</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#94a3b8' }}>Delivery Mode</p>
                                <p className="text-base sm:text-lg font-bold" style={{ color: '#ffffff' }}>On-Campus, Immersive</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#94a3b8' }}>Campus Location</p>
                                <p className="text-base sm:text-lg font-bold" style={{ color: '#ffffff' }}>{duration === 4 ? "Hyderabad" : "Hyderabad / Warangal"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#94a3b8' }}>Cohort Status</p>
                                <p className="text-base sm:text-lg font-bold" style={{ color: '#34d399' }}>Admissions Closed</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-white text-slate-950 border border-slate-950 font-bold rounded-xl hover:bg-slate-100 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,255,255,0.1)] whitespace-nowrap text-sm">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-slate-950 text-white border border-slate-950 font-bold rounded-xl hover:bg-slate-900 transition-all hover:scale-[1.02] whitespace-nowrap text-sm">
                                Contact Admissions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* 1. OVERVIEW */}
            <section id="overview" className="py-32 px-6 bg-slate-950 overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]" />
                </div>

                <div className="container mx-auto max-w-[1450px] relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Program Overview</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                A Degree Built for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">the AI Era.</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10">
                                The Foundry&apos;s {duration}-year AI program combines rigorous academic foundations with hands-on engineering and entrepreneurial execution. Students don&apos;t just learn theory — they architect neural networks, deploy agent systems, and ship production-grade AI products before graduation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Neural Networks", "LLMs & Agents", "MLOps", "Startup Lab", "GPU Clusters", "Ethics & Safety"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-900 border border-white/5 text-slate-300 rounded-full text-xs font-semibold hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20 transition-colors cursor-default select-none">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 w-full">
                            {[
                                { value: duration.toString(), unit: "Years", label: "Full-time immersive program" },
                                { value: (duration * 2).toString(), unit: "Semesters", label: "Progressive skill building" },
                                { value: "100%", unit: "Applied", label: "Project-based curriculum" },
                                { value: "100+", unit: "Concepts", label: "End-to-end industrial execution" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-900/40 rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:bg-slate-900/60 shadow-lg text-center transition-all duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</div>
                                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">{stat.unit}</div>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ProgramStats />

            {/* CONSOLIDATED ELIGIBILITY & WHO SHOULD JOIN */}
            <section id="eligibility" className="py-32 px-6 bg-slate-950 overflow-hidden relative border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.05),transparent_60%)]" />
                <div className="container mx-auto max-w-[1450px] relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        
                        {/* Who is this for */}
                        <div className="space-y-12">
                            <div>
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Built for the next generation</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Who Is This For</h2>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { num: "01", title: "Aspiring AI Engineers", desc: "Class 12 / Intermediate graduates from any academic stream — MPC, BiPC, CEC, HEC, or Arts.", color: "bg-blue-600/10 border-blue-500/20 text-blue-400" },
                                    { num: "02", title: "Future Tech Founders", desc: "Students who want to build AI-powered startups and ship real products before graduation.", color: "bg-purple-600/10 border-purple-500/20 text-purple-400" },
                                    { num: "03", title: "Zero Coding Background", desc: "No prior programming required. We teach from the ground up starting with basic logic.", color: "bg-emerald-600/10 border-emerald-500/20 text-emerald-400" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-5 p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-white/10 transition-all hover:bg-slate-900/60 shadow-lg">
                                        <div className={`shrink-0 w-12 h-12 rounded-xl ${item.color} border flex items-center justify-center`}>
                                            <span className="font-mono font-bold text-base">{item.num}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Eligibility requirements */}
                        <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] p-8 lg:p-12 lg:sticky lg:top-32 h-fit backdrop-blur">
                            <div className="mb-10">
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Academic Criteria</p>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Academic Eligibility</h2>
                            </div>
                            <div className="space-y-8">
                                <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 shadow-sm">
                                    <h4 className="text-base font-bold text-white mb-5 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center text-xs font-bold font-mono">01</div>
                                        Standard Admission Pathway
                                    </h4>
                                    <ul className="space-y-4">
                                        {[
                                            "Grade 12 / Intermediate from any recognized board.",
                                            "MPC, BiPC, CEC, HEC, or Arts—all streams are eligible.",
                                            "Minimum 60% aggregate in core academic subjects."
                                        ].map((req, j) => (
                                            <li key={j} className="flex items-start gap-3.5 text-slate-400 text-sm leading-relaxed">
                                                <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* OUTCOMES & MILESTONES */}
            <section id="outcomes" className="py-32 px-6 bg-slate-900/20 overflow-hidden border-y border-white/5 relative">
                <div className="container mx-auto max-w-[1450px]">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
                        
                        {/* Timeline / Highlights */}
                        <div>
                            <div className="mb-12">
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Program highlights</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                                    Three paths to becoming an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI professional</span>
                                </h2>
                                <p className="text-base text-slate-400 leading-relaxed max-w-xl font-light">
                                    This program is structured as a progressive journey — from understanding AI fundamentals to building real systems and operating at an industry level.
                                </p>
                            </div>

                            <div className="flex flex-col gap-0 max-w-xl">
                                {/* Stage 01 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-6 pb-10 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center shrink-0 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                            <span className="font-mono text-xs font-bold text-blue-400">01</span>
                                        </div>
                                        <div className="w-[1px] bg-slate-800 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2 cursor-default">
                                        <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Stage 01</div>
                                        <div className="text-xl font-bold text-white mb-2">AI Fluency</div>
                                        <div className="text-sm text-slate-400 leading-relaxed font-normal">
                                            Learn the core concepts of Artificial Intelligence, Machine Learning, Deep Learning and Neural Networks. Build a confident foundation before you write a single line of code.
                                        </div>
                                    </div>
                                </div>

                                {/* Stage 02 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-6 pb-10 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center shrink-0 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                            <span className="font-mono text-xs font-bold text-blue-400">02</span>
                                        </div>
                                        <div className="w-[1px] bg-slate-800 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2 cursor-default">
                                        <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Stage 02</div>
                                        <div className="text-xl font-bold text-white mb-2">AI Builder</div>
                                        <div className="text-sm text-slate-400 leading-relaxed font-normal">
                                            Work on real-world AI projects and develop practical problem-solving skills. Apply your knowledge to challenges that mirror what teams face in production environments today.
                                        </div>
                                    </div>
                                </div>

                                {/* Stage 03 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-6 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center shrink-0 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                            <span className="font-mono text-xs font-bold text-blue-400">03</span>
                                        </div>
                                        <div className="w-[1px] bg-slate-800 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2 cursor-default">
                                        <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Stage 03</div>
                                        <div className="text-xl font-bold text-white mb-2">AI Engineer</div>
                                        <div className="text-sm text-slate-400 leading-relaxed font-normal">
                                            Get guidance and training from experienced professionals in the AI industry. Graduate ready to own systems, communicate decisions, and operate at scale.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Outcomes Details Panel */}
                        <div className="flex flex-col gap-8 bg-slate-900/40 border border-white/5 p-8 lg:p-10 rounded-[2rem] shadow-2xl backdrop-blur">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    What you&apos;ll <span className="text-blue-400">learn</span>
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                    A curriculum built around the skills that AI teams actually need — from system design to governance and reliability.
                                </p>

                                <div className="flex flex-col divide-y divide-white/5">
                                    {[
                                        "AI system thinking",
                                        "Data-first problem framing",
                                        "Model selection & evaluation",
                                        "LLM integration & orchestration",
                                        "Risk, security, and governance by design",
                                        "Cost, latency, and reliability trade-off analysis",
                                        "Human-in-the-loop system design"
                                    ].map((skill, index) => (
                                        <div key={index} className="flex items-start gap-4 py-3 first:pt-0 last:pb-0 group">
                                            <span className="text-sm font-bold text-blue-400 min-w-[24px] mt-0.5 font-mono">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-sm text-slate-200 font-medium">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 shadow-sm">
                                <h3 className="text-lg font-bold text-white mb-2">
                                    What you&apos;ll <span className="text-blue-400">achieve</span>
                                </h3>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Graduates leave this program with the mindset, vocabulary, and skills to make real decisions in AI-driven organisations.
                                </p>

                                <div className="flex flex-col gap-3">
                                    {[
                                        "Design AI systems instead of model demos",
                                        "Evaluate failure before deployment",
                                        "Own AI behavior, cost, and risk",
                                        "Communicate AI decisions to engineers, leaders, and regulators"
                                    ].map((outcome, index) => (
                                        <div key={index} className="flex items-start gap-3.5 group">
                                            <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3" /></svg>
                                            </div>
                                            <div className="text-xs font-semibold text-slate-200">
                                                {outcome}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. WHAT YOU WILL STUDY (CURRICULUM) */}
            <section id="curriculum" className="py-32 px-6 bg-slate-950 overflow-hidden relative">
                <div className="container mx-auto max-w-[1450px]">
                    <div className="text-center mb-16">
                        <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Academic Map</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">What You Will Study</h2>
                        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">From mathematical foundations to building enterprise-scale data architectures. Every year builds on the last.</p>
                    </div>
                    
                    <SyllabusMindMap
                        data={CURRICULUM_DATA.filter((item) => item.year <= duration).map(({ year, title, topics }) => ({ period: year, title, topics }))}
                        periodLabel="Year"
                        hubTitle="AI DEGREE"
                        theme="blue"
                    />
                </div>
            </section>

            {/* INDUSTRIAL SKILLS (TOOL MASTER) */}
            <section id="tool-master" className="py-20 bg-slate-950 overflow-hidden relative border-t border-white/5">
                <div className="container mx-auto max-w-6xl relative z-10 px-6 text-center mb-10">
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Core Stack</p>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
                        Industrial Skills
                    </h2>
                </div>

                <div className="relative py-2 overflow-hidden w-full">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <ToolMarquee tools={TOOLS_ROW_1} reverse={false} speed={40} />
                        <div className="hidden md:block">
                            <ToolMarquee tools={TOOLS_ROW_2} reverse={true} speed={50} />
                        </div>
                    </div>
                </div>
            </section>

            <CareerVision
                roles={CAREER_ROLES.map(role => ({
                    icon: role.id === "neural-architect" ? Cpu :
                        role.id === "agentic-systems-engineer" ? BrainCircuit :
                            role.id === "ai-security-lead" ? ShieldCheck :
                                role.id === "chief-ai-officer" ? Briefcase :
                                    role.id === "embodied-ai-specialist" ? Bot :
                                        role.id === "synthetic-data-architect" ? Database :
                                            role.id === "cross-modal-systems-designer" ? Layers : Cpu,
                    title: role.title,
                    salary: role.salary,
                    growth: role.growth,
                    desc: role.desc,
                    skills: role.skills,
                    responsibilities: role.responsibilities
                }))}
                title="What You'll Become"
                subtitle="From mathematical foundations to architecting global cognitive systems. This is your career in 2035."
                themeColor="blue"
            />
            
            <WhyUs />

            <Footer />
        </main>
    );
}
