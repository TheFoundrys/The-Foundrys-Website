"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
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
    Globe,
    Bot,
    Layers,
    Cloud,
    Eye,
    Settings,
    Heart,
    Activity,
    Zap,
    Share2,
    Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CareerVision } from "@/components/schools/shared/career-vision";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";
import { ProgramStats } from "./program-stats";
import { WhyUs } from "./why-us";

function StickyNav() {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero')?.offsetHeight || 800;
            setIsSticky(window.scrollY > heroHeight - 100);

            // Active section detection
            const sections = ['overview', 'curriculum', 'eligibility', 'outcomes'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'What you\'ll study' },
        { id: 'eligibility', label: 'Entry requirements' },
        { id: 'outcomes', label: 'Career outcomes' },
    ];

    return (
        <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isSticky ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-0 pointer-events-none opacity-0'
            }`}>
            <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center">
                <div className="flex gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                            className={`text-sm font-bold tracking-tight transition-colors ${activeSection === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
                <Link href="/apply" className="px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-all shadow-md active:scale-95">
                    Apply Now
                </Link>
            </div>
        </div>
    );
}

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

const TOOLS_ROW_1 = TOOLS.slice(0, 20);
const TOOLS_ROW_2 = TOOLS.slice(20);

const ToolMarquee = ({ tools, reverse = false, speed = 80 }: { tools: any[], reverse?: boolean, speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden select-none py-2 md:py-3 relative bg-white/50 backdrop-blur-sm border-y border-slate-100">
            <motion.div
                className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {[...tools, ...tools].map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <img
                                src={tool.url}
                                alt={tool.name}
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=128`;
                                }}
                            />
                        </div>
                        <span
                            className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors duration-300"
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

function CurriculumTabs({ duration }: { duration: 3 | 4 }) {
    const [activeYear, setActiveYear] = useState(1);
    const filteredCurriculum = CURRICULUM_DATA.filter(item => item.year <= duration);
    const activeContent = filteredCurriculum.find(item => item.year === activeYear) || filteredCurriculum[0];

    useEffect(() => {
        if (activeYear > duration) {
            setActiveYear(1);
        }
    }, [duration, activeYear]);

    return (
        <div className="space-y-8">
            {/* Year Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {filteredCurriculum.map((item) => (
                    <button
                        key={item.year}
                        onClick={() => setActiveYear(item.year)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeYear === item.year
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Year {item.year}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeYear}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                            Year {activeContent?.year}
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
// Organic AI Brain Animation Component
function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const particleCount = 180; // Significantly more particles for brain detail
        let rotationAngle = 0;

        const resize = () => {
            if (!canvas || !canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        class Particle {
            x: number; y: number; z: number;
            baseX: number; baseY: number; baseZ: number;

            constructor() {
                // Approximate 3-Year Immersive Brain (High-Res Scale)
                const hemisphere = Math.random() > 0.5 ? 1 : -1;
                const r = 220 * Math.pow(Math.random(), 0.5); // Much larger
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;

                this.baseX = (r * 0.9 * Math.sin(phi) * Math.cos(theta)) + (hemisphere * 40); // Wider split
                this.baseY = r * 1.1 * Math.sin(phi) * Math.sin(theta);
                this.baseZ = r * 0.7 * Math.cos(phi);

                this.x = this.baseX;
                this.y = this.baseY;
                this.z = this.baseZ;
            }

            rotate(angle: number) {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);

                this.x = this.baseX * cos - this.baseZ * sin;
                this.z = this.baseX * sin + this.baseZ * cos;
                this.y = this.baseY + Math.sin(angle * 0.4) * 20;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            rotationAngle += 0.004;
            const centerX = canvas.width / 2;
            const centerY = canvas.height * 0.45; // Centered higher up

            // Brighten Aura significantly
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 400);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); // BRIGHTER
            gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.rotate(rotationAngle);

                const scale = 600 / (600 + p.z + 100);
                const x2d = p.x * scale + centerX;
                const y2d = p.y * scale + centerY;
                const size = Math.max(0.8, (p.z < 0 ? 5 : 2) * scale); // LARGER DOTS
                const opacity = (1 - (p.z + 150) / 450) * 0.9; // HIGHER OPACITY

                // Neon Brain Pulse
                const pulse = Math.sin(Date.now() * 0.003 + p.x * 0.02) * 0.3 + 0.7;

                ctx.beginPath();
                ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                ctx.fillStyle = p.z < 0 ? `rgba(165, 243, 252, ${opacity * pulse})` : `rgba(34, 211, 238, ${opacity * 0.6})`;
                ctx.fill();

                if (p.z < -50) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = 'rgba(34, 211, 238, 0.8)';
                } else {
                    ctx.shadowBlur = 0;
                }

                // Connections - Organic synapic clusters
                for (let j = i + 1; j < particles.length; j += 4) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dz = p.z - p2.z;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < 70) {
                        const x2d2 = p2.x * scale + centerX;
                        const y2d2 = p2.y * scale + centerY;
                        const lineOpacity = (1 - dist / 70) * 0.3 * opacity;

                        ctx.beginPath();
                        ctx.moveTo(x2d, y2d);
                        ctx.lineTo(x2d2, y2d2);
                        ctx.strokeStyle = `rgba(147, 197, 253, ${lineOpacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full" />;
}

export default function AISchoolPage() {
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const [duration, setDuration] = useState<3 | 4>(4);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="relative min-h-[90vh] flex items-center bg-[#030712] overflow-hidden">
                {/* Subtle Decorative Elements for Solid Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                {/* Neural Network Visualization - Absolute right */}
                <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block pointer-events-none">
                    <NeuralNetwork />
                </div>

                <div className="container mx-auto max-w-[1450px] relative z-10 px-4">
                    <div className="flex flex-col justify-center text-left py-24 md:py-32 lg:min-h-[90vh] relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl relative z-10"
                        >
                            {/* Department / Program Label */}

                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[8.5rem] font-black tracking-tighter text-white mb-8 md:mb-10 leading-[0.85] uppercase">
                                Artificial <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-blue-500 pb-2 inline-block md:pr-8">Intelligence</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light mb-16 max-w-3xl">
                                A {duration}-year immersive degree merging AI Engineering with Entrepreneurship. <br />
                                <span className="text-white font-medium">Graduate with Mastery, Vision & Real-World Impact.</span>
                            </p>

                            {/* Duration Toggle */}
                            <div className="flex gap-4 mb-12">
                                <button
                                    onClick={() => setDuration(3)}
                                    className={`px-8 py-3 rounded-full font-bold transition-all ${duration === 3 ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                                >
                                    3-Year Program
                                </button>
                                <button
                                    onClick={() => setDuration(4)}
                                    className={`px-8 py-3 rounded-full font-bold transition-all ${duration === 4 ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                                >
                                    4-Year Program
                                </button>
                            </div>

                            {/* Elegant Inline Content (Replacing Cluttered Boxes) */}
                            <div className="grid sm:grid-cols-3 gap-10 md:gap-16 pt-12 border-t border-white/10 max-w-4xl relative z-10">
                                {/* Degrees */}
                                <div>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Available Degrees</p>
                                    <div className="space-y-1.5 border-l-2 border-cyan-500/30 pl-4">
                                        {duration === 3 ? (
                                            <>
                                                <p className="text-sm md:text-base font-semibold text-white tracking-tight">BCA in Artificial Intelligence</p>
                                                <p className="text-sm md:text-base font-semibold text-white tracking-tight">B.Sc AI / ML Professional</p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-sm md:text-base font-semibold text-white tracking-tight">BCA in Artificial Intelligence</p>
                                                <p className="text-sm md:text-base font-semibold text-white tracking-tight">B.Tech AI / ML Professional</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {duration === 3 && (
                                    <div>
                                        <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Partner Institutions</p>
                                        <div className="space-y-1.5 border-l-2 border-blue-500/30 pl-4">
                                            <p className="text-sm md:text-base font-semibold text-white tracking-tight">Ethames Business School</p>
                                            <p className="text-sm md:text-base font-semibold text-white tracking-tight">Keshava Degree College</p>
                                        </div>
                                    </div>
                                )}

                                {/* Certifications */}
                                <div>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Industry Certifications</p>
                                    <div className="flex gap-5 border-l-2 border-indigo-500/30 pl-4 h-full items-start">
                                        <div className="text-left">
                                            <span className="text-base md:text-lg font-black text-cyan-400 tracking-widest block mb-0.5">FCEP</span>
                                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block">Exec</span>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-base md:text-lg font-black text-blue-400 tracking-widest block mb-0.5">FCIP</span>
                                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block">Pract</span>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-base md:text-lg font-black text-indigo-400 tracking-widest block mb-0.5">FFP</span>
                                            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest block">Prof</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </motion.div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 -mt-10 mb-12">
                <div className="mx-auto max-w-[1450px]">
                    {/* Adjusted mobile padding (py-6) while keeping desktop (md:py-5) */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 py-6 px-6 md:py-5 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">

                        {/* Switched to grid-cols-1 and text-left for better mobile readability */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-x-14 flex-1 text-left w-full">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Program Length</p>
                                <p className="text-lg font-bold text-slate-900">{duration}-Year Full-Time</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Delivery Mode</p>
                                <p className="text-lg font-bold text-slate-900">On-Campus, Immersive</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Campus</p>
                                <p className="text-lg font-bold text-slate-900">{duration === 4 ? "Hyderabad" : "Hyderabad and Warangal"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-0.5">Admissions</p>
                                <p className="text-lg font-bold text-slate-900">Now Open</p>
                            </div>
                        </div>

                        {/* Buttons stack nicely on mobile with the flex-col mobile class if needed, or stay side-by-side */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* 1. Overview */}
            <section id="overview" className="py-28 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-[1450px]">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">Program Overview</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                A Degree Built for <br />
                                <span className="text-blue-600">the AI Era.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                The Foundry&apos;s {duration}-year AI program combines rigorous academic foundations with hands-on engineering and entrepreneurial execution. Students don&apos;t just learn theory — they architect neural networks, deploy agent systems, and ship production-grade AI products before graduation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Neural Networks", "LLMs \u0026 Agents", "MLOps", "Startup Lab", "GPU Clusters", "Ethics \u0026 Safety"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { value: duration.toString(), unit: "Years", label: "Full-time immersive program" },
                                { value: (duration * 2).toString(), unit: "Semesters", label: "Progressive skill building" },
                                { value: "100%", unit: "Hands-on", label: "Project-based from day one" },
                                { value: "100+", unit: "Projects", label: "Real-world problem solving" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-slate-900">{stat.value}</div>
                                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">{stat.unit}</div>
                                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ProgramStats />
            {/* Consolidated: Who Should Join & Eligibility */}
            <section id="who-and-eligibility" className="py-24 px-6 bg-white overflow-hidden relative border-b border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Left side: Who Is This For */}
                        <div>
                            <div className="mb-10">
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Built for the next generation</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Who Is This For</h2>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { num: "01", title: "Aspiring AI Engineers", desc: "Class 12 / Intermediate graduates from any stream — MPC, BiPC, CEC, HEC, or Arts.", icon: Rocket, color: "bg-blue-600 text-white" },
                                    { num: "02", title: "Future Founders", desc: "Students who want to build AI-powered startups and ship real products before graduation.", icon: BrainCircuit, color: "bg-violet-600 text-white" },
                                    { num: "03", title: "Zero Coding Background", desc: "No prior programming required. We teach from the ground up starting with logic.", icon: Code2, color: "bg-emerald-600 text-white" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all hover:bg-white hover:shadow-lg">
                                        <div className={`shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-lg`}>
                                            <item.icon size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side: Eligibility */}
                        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 lg:sticky lg:top-32 h-fit">
                            <div className="mb-8">
                                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4">Academic Criteria</p>
                                <h2 className="text-3xl font-bold text-slate-900">Academic Eligibility</h2>
                            </div>
                            <div className="space-y-8">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">01</div>
                                        Standard Pathway
                                    </h4>
                                    <ul className="space-y-4">
                                        {[
                                            "Grade 12 / Intermediate from any recognized board.",
                                            "MPC, BiPC, CEC, HEC, or Arts—all streams are eligible.",
                                            "Minimum 60% aggregate in core subjects."
                                        ].map((req, j) => (
                                            <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/apply" className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative block w-full hover:scale-[1.02] transition-transform">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Admissions Open</h4>
                                        <p className="text-blue-100 text-sm">Secure your cohort for 2026 today.</p>
                                    </div>
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Achieve — Merged Design */}
            <section id="outcomes" className="pt-24 pb-16 px-6 bg-slate-50 overflow-hidden border-y border-slate-100">
                <div className="container mx-auto max-w-7xl font-sans">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">

                        {/* Highlights & Timeline */}
                        <div>
                            <div className="mb-10">
                                <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Program highlights</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                                    Three paths to becoming an <span className="text-blue-600">AI professional</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                    This program is structured as a progressive journey — from understanding AI fundamentals to building real systems and operating at an industry level.
                                </p>
                            </div>

                            <div className="flex flex-col gap-0 max-w-xl">
                                {/* Stage 01 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-5 pb-9 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border-2 border-blue-500 group-last:mb-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                                        </div>
                                        <div className="w-[2px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2 cursor-default">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1">Stage 01</div>
                                        <div className="text-xl font-bold text-slate-900 mb-2">AI Fluency</div>
                                        <div className="text-base text-slate-600 leading-relaxed">
                                            Learn the core concepts of Artificial Intelligence, Machine Learning, Deep Learning and Neural Networks. Build a confident foundation before you write a single line of code.
                                        </div>
                                    </div>
                                </div>

                                {/* Stage 02 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-5 pb-9 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                                        </div>
                                        <div className="w-[2px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1">Stage 02</div>
                                        <div className="text-xl font-bold text-slate-900 mb-2">AI Builder</div>
                                        <div className="text-base text-slate-600 leading-relaxed">
                                            Work on real-world AI projects and develop practical problem-solving skills. Apply your knowledge to challenges that mirror what teams face in production environments today.
                                        </div>
                                    </div>
                                </div>

                                {/* Stage 03 */}
                                <div className="grid grid-cols-[48px_1fr] gap-x-5 relative group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                                        </div>
                                        <div className="w-[2px] bg-slate-200 flex-1 mt-2 group-last:hidden"></div>
                                    </div>
                                    <div className="pt-2.5 pb-2">
                                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-1">Stage 03</div>
                                        <div className="text-xl font-bold text-slate-900 mb-2">AI Engineer</div>
                                        <div className="text-base text-slate-600 leading-relaxed">
                                            Get guidance and training from experienced professionals in the AI industry. Graduate ready to own systems, communicate decisions, and operate at scale.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills and Outcomes Column */}
                        <div className="flex flex-col gap-6 bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm">
                            {/* What you'll learn */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                    What you&apos;ll <span className="text-blue-600">learn</span>
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-lg">
                                    A curriculum built around the skills that AI teams actually need — from system design to governance and reliability.
                                </p>

                                <div className="flex flex-col">
                                    {[
                                        "AI system thinking",
                                        "Data-first problem framing",
                                        "Model selection & evaluation",
                                        "LLM integration & orchestration",
                                        "Risk, security, and governance by design",
                                        "Cost, latency, and reliability trade-off analysis",
                                        "Human-in-the-loop system design"
                                    ].map((skill, index) => (
                                        <div key={index} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2 -mx-2">
                                            <span className="text-sm font-bold text-blue-600 min-w-[24px] mt-0.5">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-base text-slate-700 font-medium">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What you'll achieve */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                    What you&apos;ll <span className="text-blue-600">achieve</span>
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Graduates leave this program with the mindset, vocabulary, and skills to make real decisions in AI-driven organisations.
                                </p>

                                <div className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wide">
                                    You will be able to —
                                </div>
                                <div className="flex flex-col gap-3">
                                    {[
                                        "Design AI systems instead of model demos",
                                        "Evaluate failure before deployment",
                                        "Own AI behavior, cost, and risk",
                                        "Communicate AI decisions to engineers, leaders, and regulators"
                                    ].map((outcome, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="w-[24px] h-[24px] rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-px border border-blue-200">
                                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3" /></svg>
                                            </div>
                                            <div className="text-base font-medium text-slate-900">
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

            {/* 3. What You Will Study (Curriculum) */}
            <section id="curriculum" className="py-24 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">What You Will Study</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">From mathematical foundations to building enterprise-scale data architectures. Every year builds on the last.</p>
                    </div>
                    <CurriculumTabs duration={duration} />
                </div>
            </section>

            {/* Tool Master Section — Contained Design */}
            <section id="tool-master" className="py-6 bg-slate-50 overflow-hidden relative border-y border-slate-200">
                <div className="container mx-auto max-w-6xl relative z-10 px-6">
                    <div className="text-center mb-2">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-1 leading-tight">
                            Industrial Skills
                        </h2>
                    </div>
                </div>

                {/* Single Row on Mobile, Dual Row on Desktop */}
                <div className="relative py-1 md:py-2 overflow-hidden">
                    <div className="flex flex-col gap-1 md:gap-2">
                        <ToolMarquee tools={TOOLS_ROW_1} reverse={false} speed={40} />
                        <div className="hidden md:block">
                            <ToolMarquee tools={TOOLS_ROW_2} reverse={true} speed={55} />
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


