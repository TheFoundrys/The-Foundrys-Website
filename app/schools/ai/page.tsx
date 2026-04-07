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
    {
        name: "pandas", cat: "Data & ML", sz: 1.15, color: "#150458",
        svg: `<svg viewBox="0 0 24 24" fill="#150458"><path d="M8.333 0h2v7.667h-2zm5.334 0h2v7.667h-2zM8.333 16.333h2V24h-2zm5.334 0h2V24h-2zM8.333 9.5h2v5h-2zm5.334 0h2v5h-2z"/></svg>`
    },
    {
        name: "PyTorch", cat: "Data & ML", sz: 1.1, color: "#EE4C2C",
        svg: `<svg viewBox="0 0 24 24" fill="#EE4C2C"><path d="M12.005 0 4.952 7.053a9.865 9.865 0 0 0 0 13.99 9.866 9.866 0 0 0 13.99 0 9.866 9.866 0 0 0 0-13.99L16.6 9.397a5.754 5.754 0 0 1 0 8.14 5.755 5.755 0 0 1-8.14 0 5.754 5.754 0 0 1 0-8.14zM16.318 4.877a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/></svg>`
    },
    {
        name: "TensorFlow", cat: "Data & ML", sz: 1.15, color: "#FF6F00",
        svg: `<svg viewBox="0 0 24 24" fill="#FF6F00"><path d="M11.54 0L1.292 6.002L1.277 11.167L7.445 7.603V21.622L11.54 24V0ZM12.46 0V24L16.555 21.622V14.87L19.648 16.658L19.63 12.04L16.555 10.284V7.603L22.723 11.167L22.709 5.857L12.46 0Z"/></svg>`
    },
    {
        name: "JAX", cat: "Data & ML", sz: 1.0, color: "#4285F4", fb: true
    },
    {
        name: "Keras", cat: "Data & ML", sz: 1.1, color: "#D00000", fb: true
    },
    {
        name: "MLflow", cat: "Data & ML", sz: 0.88, color: "#0194E2", fb: true
    },
    {
        name: "Kaggle", cat: "Data & ML", sz: 0.9, color: "#20BEFF", fb: true
    },
    {
        name: "spaCy", cat: "Data & ML", sz: 0.85, color: "#09A3D5", fb: true
    },
    {
        name: "NLTK", cat: "Data & ML", sz: 0.75, color: "#154360", fb: true
    },
    {
        name: "OpenCV", cat: "Data & ML", sz: 1.1, color: "#5C3EE8", fb: true
    },
    {
        name: "Jupyter", cat: "Data & ML", sz: 1.0, color: "#F37626",
        svg: `<svg viewBox="0 0 24 24" fill="#F37626"><path d="M7.157 22.201A1.784 1.784 0 0 1 5.374 24a1.784 1.784 0 0 1-1.784-1.799 1.784 1.784 0 0 1 1.784-1.784 1.784 1.784 0 0 1 1.783 1.784zM20.067 1.783A1.784 1.784 0 0 1 18.284 3.567a1.784 1.784 0 0 1-1.784-1.784A1.784 1.784 0 0 1 18.284 0a1.784 1.784 0 0 1 1.783 1.783zM4.188 5.032a1.186 1.186 0 0 1-1.185 1.186A1.186 1.186 0 0 1 1.817 5.032a1.186 1.186 0 0 1 1.186-1.185 1.186 1.186 0 0 1 1.185 1.185zM12 4.734c-4.01 0-7.58 1.302-8.971 3.157.67-.258 1.657-.404 2.74-.404 2.65 0 4.483.983 4.483 2.266 0 1.284-1.833 2.266-4.483 2.266-.963 0-1.85-.13-2.55-.354C4.37 13.893 7.959 15.27 12 15.27c4.04 0 7.63-1.378 9.78-3.605-.699.224-1.586.354-2.549.354-2.65 0-4.483-.982-4.483-2.266 0-1.283 1.833-2.266 4.483-2.266 1.082 0 2.07.146 2.74.404C20.58 6.036 17.01 4.734 12 4.734z"/></svg>`
    },
    {
        name: "Python", cat: "Data & ML", sz: 1.0, color: "#3776AB",
        svg: `<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.912S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.131V3.199S18.28 0 11.914 0zm-3.21 1.85a1.046 1.046 0 1 1 0 2.093 1.046 1.046 0 0 1 0-2.093z"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.109S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963H18.566v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.131v5.333S5.72 24 12.086 24zm3.21-1.85a1.046 1.046 0 1 1 0-2.093 1.046 1.046 0 0 1 0 2.093z" fill="#FFD43B"/></svg>`
    },
    {
        name: "scikit-learn", cat: "Data & ML", sz: 0.82, color: "#F7931E",
        svg: `<svg viewBox="0 0 24 24" fill="#F7931E"><path d="M8.133 4.357c-.67-1.86-2.68-2.957-4.61-2.52C1.593 2.28.303 4.137.57 6.1c.268 1.965 2.02 3.385 3.998 3.264a4.047 4.047 0 0 0 3.565-2.87zm7.734 11.286c-.67-1.86-2.68-2.957-4.61-2.52-1.93.443-3.22 2.3-2.953 4.263.268 1.965 2.02 3.385 3.998 3.264a4.047 4.047 0 0 0 3.565-2.87zM21 9.714c0-2.014-1.634-3.648-3.648-3.648S13.704 7.7 13.704 9.714s1.634 3.648 3.648 3.648S21 11.728 21 9.714z"/></svg>`
    },
    { name: "YOLO", cat: "Data & ML", sz: 1.2, color: "#00ADEF", fb: true },
    { name: "Streamlit", cat: "Data & ML", sz: 1.0, color: "#FF4B4B", fb: true },
    { name: "Gradio", cat: "Data & ML", sz: 0.9, color: "#F97316", fb: true },
    { name: "CUDA", cat: "Data & ML", sz: 1.1, color: "#76B900", fb: true },
    { name: "MLOps", cat: "Data & ML", sz: 0.72, color: "#1D9E75", fb: true },

    {
        name: "AWS", cat: "Cloud & Infra", sz: 1.1, color: "#FF9900",
        svg: `<svg viewBox="0 0 24 24" fill="#FF9900"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.166.167z"/><path d="M21.616 18.396c-2.59 1.917-6.35 2.934-9.587 2.934-4.534 0-8.616-1.677-11.7-4.466-.241-.216-.025-.51.266-.343 3.33 1.938 7.447 3.107 11.695 3.107 2.868 0 6.02-.591 8.924-1.83.437-.19.804.287.402.598z" fill="#FF9900"/><path d="M22.699 17.155c-.33-.424-2.184-.2-3.015-.1-.253.03-.292-.19-.063-.35 1.476-1.039 3.898-.74 4.182-.39.285.35-.074 2.78-1.461 3.942-.213.18-.416.084-.32-.152.311-.778 1.008-2.525.677-2.95z" fill="#FF9900"/></svg>`
    },
    {
        name: "Azure", cat: "Cloud & Infra", sz: 1.0, color: "#0078D4",
        svg: `<svg viewBox="0 0 24 24" fill="#0078D4"><path d="M13.05 4.24L6.56 18.05l-4.12.74L8.73 7.27zm.81-.74l3.85 10.74-8.24 1.49 5.2-2.43L11.2 7.24zm7.25 14.27H2.44l1.88-.34 5.45-9.66L13.05 3.5l1.42 4.04z"/></svg>`
    },
    {
        name: "Colab", cat: "Cloud & Infra", sz: 0.75, color: "#F9AB00",
        svg: `<svg viewBox="0 0 24 24" fill="#F9AB00"><path d="M16.9 4.8C13.1 4.8 10 7.9 10 11.7s3.1 6.9 6.9 6.9 6.9-3.1 6.9-6.9-3.1-6.9-6.9-6.9zm0 11.5c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6c1.5 0 2.8.7 3.7 1.8l-3.7 2.8 3.7 2.8c-.9 1.1-2.2 1.8-3.7 1.8zM7.1 4.8C3.3 4.8.2 7.9.2 11.7s3.1 6.9 6.9 6.9c1.5 0 2.9-.5 4-1.3l-1.5-1.8c-.7.5-1.6.8-2.5.8-2.6 0-4.6-2.1-4.6-4.6S4.5 7 7.1 7c.9 0 1.8.3 2.5.8l1.5-1.8C10 5.3 8.6 4.8 7.1 4.8z"/></svg>`
    },
    { name: "Kubeflow", cat: "Cloud & Infra", sz: 0.85, color: "#4285F4", fb: true },
    { name: "Ray", cat: "Cloud & Infra", sz: 0.9, color: "#00BCD4", fb: true },
    { name: "BentoML", cat: "Cloud & Infra", sz: 0.8, color: "#121926", fb: true },

    {
        name: "OpenAI", cat: "Foundation Models", sz: 1.2, color: "#412991",
        svg: `<svg viewBox="0 0 24 24" fill="#412991"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.372 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.678zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>`
    },
    {
        name: "HuggingFace Transformers", cat: "Foundation Models", sz: 1.1, color: "#FFD21E",
        svg: `<svg viewBox="0 0 24 24" fill="#FFD21E"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/><path d="M12 4.8c-3.9 0-7.2 2.7-7.2 6.6 0 3.3 2.1 6 5.1 6.9l-1.5 1.8h7.2l-1.5-1.8c3-.9 5.1-3.6 5.1-6.9 0-3.9-3.3-6.6-7.2-6.6zm-2.4 5.4c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm4.8 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-2.4 4.2c-1.2 0-2.4-.6-3-1.5l.9-.6c.6.9 1.5 1.2 2.1 1.2s1.5-.3 2.1-1.2l.9.6c-.6.9-1.8 1.5-3 1.5z" fill="#000"/></svg>`
    },
    { name: "Hugging Face Hub", cat: "Foundation Models", sz: 0.9, color: "#FFD21E", fb: true },
    { name: "vLLM", cat: "Foundation Models", sz: 0.85, color: "#3B82F6", fb: true },
    { name: "Triton Inference Server", cat: "Foundation Models", sz: 0.8, color: "#76B900", fb: true },
    { name: "Ollama", cat: "Foundation Models", sz: 0.95, color: "#111827", fb: true },
    { name: "SentenceTransformers", cat: "Foundation Models", sz: 0.82, color: "#4B5563", fb: true },
    { name: "together.ai", cat: "Foundation Models", sz: 0.75, color: "#7B2FBE", fb: true },
    { name: "Arcee", cat: "Foundation Models", sz: 0.78, color: "#5A4FCF", fb: true },
    { name: "Symbolica", cat: "Foundation Models", sz: 0.74, color: "#8B44C4", fb: true },
    { name: "Upstage", cat: "Foundation Models", sz: 0.7, color: "#6637B8", fb: true },
    { name: "Cartesia", cat: "Foundation Models", sz: 0.7, color: "#9B3DBF", fb: true },

    {
        name: "LangChain", cat: "Agents & Orch.", sz: 1.0, color: "#1C7C3C",
        svg: `<svg viewBox="0 0 24 24" fill="#1C7C3C"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm-1 2h2v4.5l3 1.8-1 1.732-4-2.4V8.5z"/></svg>`
    },
    { name: "LlamaIndex", cat: "Agents & Orch.", sz: 1.0, color: "#3B82F6", fb: true },
    { name: "Haystack", cat: "Agents & Orch.", sz: 0.85, color: "#FF5722", fb: true },
    { name: "LiveKit", cat: "Agents & Orch.", sz: 0.8, color: "#E5484D", fb: true },
    { name: "hume", cat: "Agents & Orch.", sz: 0.75, color: "#FF6B6B", fb: true },
    { name: "aixplain", cat: "Agents & Orch.", sz: 0.7, color: "#E03C6E", fb: true },
    { name: "vijil", cat: "Agents & Orch.", sz: 0.68, color: "#C0392B", fb: true },
    { name: "webAI", cat: "Agents & Orch.", sz: 0.7, color: "#922B21", fb: true },
    { name: "Browserbase", cat: "Agents & Orch.", sz: 0.72, color: "#D44000", fb: true },
    { name: "crewAI", cat: "Agents & Orch.", sz: 0.78, color: "#E74C3C", fb: true },
    { name: "veeW ai", cat: "Agents & Orch.", sz: 0.66, color: "#CB4335", fb: true },

    {
        name: "Qdrant", cat: "Vector DBs", sz: 0.9, color: "#DC244C",
        svg: `<svg viewBox="0 0 24 24" fill="#DC244C"><path d="m12 0 10.39 6v12L12 24 1.61 18V6zm0 2.31L3.5 7.35v9.3l8.5 4.91 8.5-4.9v-9.3zM7.25 8.5l4.75 2.75 4.75-2.75L12 5.75zM6.5 15.5V9.75l5 2.88v5.75zm11 0L12 18.38v-5.75l5-2.88z"/></svg>`
    },
    { name: "FAISS", cat: "Vector DBs", sz: 0.9, color: "#3B82F6", fb: true },
    { name: "Pinecone", cat: "Vector DBs", sz: 1.0, color: "#2E7D32", fb: true },
    { name: "Weaviate", cat: "Vector DBs", sz: 0.95, color: "#3B82F6", fb: true },
    { name: "Dnotitia", cat: "Vector DBs", sz: 0.68, color: "#A93226", fb: true },

    { name: "aaru", cat: "Synthetic Data", sz: 0.85, color: "#2471A3", fb: true },
    {
        name: "Delve", cat: "Synthetic Data", sz: 0.8, color: "#1A5276",
        svg: `<svg viewBox="0 0 24 24" fill="#1A5276"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
    },
    {
        name: "glean", cat: "Synthetic Data", sz: 0.85, color: "#6436F0",
        svg: `<svg viewBox="0 0 24 24" fill="#6436F0"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm3.5-11.5A3.5 3.5 0 0 1 12 12a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 12 5a3.5 3.5 0 0 1 3.5 3.5zm-3.5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 2c-2.33 0-7 1.17-7 3.5V17h14v-2c0-2.33-4.67-3.5-7-3.5z"/></svg>`
    },
    { name: "Solve Intel.", cat: "Synthetic Data", sz: 0.64, color: "#154360", fb: true },

    { name: "ZAMA", cat: "ML Security", sz: 0.85, color: "#1E8449", fb: true },
    {
        name: "EDERA", cat: "ML Security", sz: 0.75, color: "#196F3D",
        svg: `<svg viewBox="0 0 24 24" fill="#196F3D"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l6 2.67V11c0 3.73-2.56 7.21-6 8.32-3.44-1.11-6-4.59-6-8.32V7.67L12 5z"/></svg>`
    },
    { name: "Chainguard", cat: "ML Security", sz: 0.78, color: "#0B5345", fb: true },
    { name: "Evidently AI", cat: "ML Security", sz: 0.8, color: "#FFC107", fb: true },
    { name: "Guardrails AI", cat: "ML Security", sz: 0.85, color: "#F44336", fb: true },
];

function WordCloud() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [placed, setPlaced] = useState<{ tool: any, x: number, y: number, w: number, h: number, fontSize: number, iconSize: number, isVertical: boolean }[]>([]);
    const [tooltip, setTooltip] = useState<{ show: boolean, x: number, y: number, text: string }>({ show: false, x: 0, y: 0, text: "" });

    const buildCloud = useCallback(() => {
        if (!containerRef.current) return;
        const cw = containerRef.current.offsetWidth || 300;
        const ch = containerRef.current.offsetHeight || 500;
        const isMobile = cw < 600;
        const placedItems: { x: number, y: number, w: number, h: number }[] = [];
        const result: any[] = [];

        const sorted = [...TOOLS].sort((a, b) => b.sz - a.sz);
        const scale = isMobile ? 0.75 : 1; // Scale down for mobile screens

        sorted.forEach(tool => {
            const fontSize = Math.round((20 + tool.sz * 16) * scale);
            const iconSize = Math.round((24 + tool.sz * 12) * scale);

            const isVertical = Math.random() > 0.65; // ~35% chance to be vertical

            // Approximate width/height for overlap detection - Tighter buffer
            const naturalW = (tool.name.length * fontSize * 0.62) + iconSize + 16 * scale;
            const naturalH = fontSize + 16 * scale;

            const ww = isVertical ? naturalH : naturalW;
            const wh = isVertical ? naturalW : naturalH;

            const cx = cw / 2;
            const cy = ch / 2;
            let found = false;

            for (let r = 0; r < Math.max(cw, ch) * 0.9; r += 2) {
                const steps = Math.max(14, Math.floor(r * 1.25));
                for (let s = 0; s < steps; s++) {
                    const angle = (s / steps) * Math.PI * 2 + r * 0.15;
                    const x = cx + r * Math.cos(angle) - ww / 2;
                    const y = cy + r * Math.sin(angle) * (isMobile ? 0.85 : 0.7) - wh / 2;

                    if (x < 2 || y < 2 || x + ww > cw - 2 || y + wh > ch - 2) continue;

                    const box = { x, y, w: ww, h: wh };
                    const overlaps = (a: any, b: any) => {
                        const pad = 1; // Minimal pad for maximum density
                        return !(a.x + a.w + pad < b.x || b.x + b.w + pad < a.x || a.y + a.h + pad < b.y || b.y + b.h + pad < a.y);
                    };

                    if (!placedItems.some(p => overlaps(p, box))) {
                        result.push({ tool, x, y, w: ww, h: wh, fontSize, iconSize, isVertical });
                        placedItems.push(box);
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
        });
        setPlaced(result);
    }, []);

    useEffect(() => {
        buildCloud();
        window.addEventListener('resize', buildCloud);
        return () => window.removeEventListener('resize', buildCloud);
    }, [buildCloud]);

    const initials = (name: string) => {
        return name.replace(/[^a-zA-Z0-9 ]/g, '').split(/[\s.]+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
    };

    return (
        <div ref={containerRef} className="relative w-full h-[600px] md:h-[850px] overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-inner select-none">
            {placed.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.005, duration: 0.4 }}
                    className="absolute flex items-center justify-center cursor-default transition-all duration-300 hover:z-50"
                    style={{
                        left: item.x,
                        top: item.y,
                        width: item.w,
                        height: item.h
                    }}
                    onMouseEnter={(e) => setTooltip({ show: true, x: e.clientX, y: e.clientY, text: item.tool.cat })}
                    onMouseMove={(e) => setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                    onMouseLeave={() => setTooltip(prev => ({ ...prev, show: false }))}
                >
                    <div 
                        className="flex items-center gap-2.5 transition-transform hover:scale-110"
                        style={{
                            transform: item.isVertical ? 'rotate(-90deg)' : 'none',
                            color: item.tool.color,
                            fontSize: item.fontSize,
                            fontWeight: 900,
                            lineHeight: 1,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))'
                        }}
                    >
                        {item.tool.svg && !item.tool.fb ? (
                            <div
                                className="shrink-0 flex items-center justify-center"
                                style={{ width: item.iconSize, height: item.iconSize }}
                                dangerouslySetInnerHTML={{ __html: item.tool.svg.replace('<svg ', `<svg width="${item.iconSize}" height="${item.iconSize}" `) }}
                            />
                        ) : (
                            <div
                                className="flex items-center justify-center font-black text-white rounded-[4px] shrink-0"
                                style={{
                                    width: item.iconSize,
                                    height: item.iconSize,
                                    background: item.tool.color,
                                    fontSize: Math.round(item.iconSize * 0.4)
                                }}
                            >
                                {initials(item.tool.name)}
                            </div>
                        )}
                        <span className="whitespace-nowrap tracking-tight">{item.tool.name}</span>
                    </div>
                </motion.div>
            ))}
            {tooltip.show && (
                <div
                    className="fixed z-[999] bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none shadow-xl border border-white/10 backdrop-blur-sm"
                    style={{ left: tooltip.x + 15, top: tooltip.y - 40 }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
}


const CAREER_ROLES = [
    {
        id: "neural-architect",
        label: "Neural Architect",
        title: "Neural Architect",
        desc: "Designs novel transformer blocks and customized model architectures for hyper-efficient edge deployments and massive scale clusters.",
        salary: "₹45L - 80L",
        growth: "+38% YoY",
        skills: [
            "PyTorch & TensorFlow",
            "CUDA Optimization",
            "LLM Architecture Design",
            "TPU/GPU Tuning",
            "Distributed Systems"
        ],
        responsibilities: [
            "Designing enterprise-grade neural architectures",
            "Optimizing model weights for inference speed",
            "Scaling distributed training clusters",
            "Researching novel attention mechanisms",
            "Publishing findings in top-tier conferences"
        ]
    },
    {
        id: "agentic-systems-engineer",
        label: "Agentic Systems Engineer",
        title: "Agentic Systems Engineer",
        desc: "Architects swarms of AI agents that can autonomously manage complex enterprise supply chains, legal filings, and real-time operations.",
        salary: "₹30L - 60L",
        growth: "+45% YoY",
        skills: [
            "LangChain & Autogen",
            "Agent Orchestration",
            "System Design",
            "API Integration",
            "Memory Systems"
        ],
        responsibilities: [
            "Building multi-agent task frameworks",
            "Implementing agent error correction loops",
            "Integrating AI memory layers",
            "Managing real-world API connectivity",
            "Designing fault-tolerant agent networks"
        ]
    },
    {
        id: "ai-security-lead",
        label: "AI Security & Ethics Lead",
        title: "AI Security & Ethics Lead",
        desc: "Ensures the safety and alignment of large-scale cognitive systems, protecting against prompt injection, model extraction, and ethical drift.",
        salary: "₹35L - 60L",
        growth: "+32% YoY",
        skills: [
            "Red Teaming",
            "Cybersecurity",
            "AI Alignment",
            "Governance Frameworks",
            "Adversarial ML"
        ],
        responsibilities: [
            "Conducting adversarial red teaming",
            "Guaranteeing model compliance & safety",
            "Implementing data privacy shields",
            "Monitoring AI decisions for bias",
            "Defining organizational AI ethics policies"
        ]
    },
    {
        id: "embodied-ai-specialist",
        label: "Embodied AI Specialist",
        title: "Embodied AI Specialist",
        desc: "Specializes in the intersection of LLMs and physical robotics, designing the 'brain' for humanoid and industrial autonomous robots.",
        salary: "₹40L - 75L",
        growth: "42 YoY",
        skills: [
            "Robotics (ROS2)",
            "Computer Vision",
            "Kinematics",
            "Real-time Inference",
            "Sensor Fusion"
        ],
        responsibilities: [
            "Mapping vision to physical motor control",
            "Optimizing onboard model latency",
            "Designing gesture-based interaction",
            "Leading humanoid cognitive research",
            "Implementing spatial reasoning loops"
        ]
    },
    {
        id: "synthetic-data-architect",
        label: "Synthetic Data Architect",
        title: "Synthetic Data Architect",
        desc: "Engineers complex simulations and generative pipelines to produce high-fidelity training data for frontier model development.",
        salary: "₹30L - 60L",
        growth: "+36% YoY",
        skills: [
            "Generative AI",
            "Data Engineering",
            "Simulation (Unreal/Unity)",
            "Statistical Validation",
            "GANs/VAEs"
        ],
        responsibilities: [
            "Building high-fidelity simulation worlds",
            "Mitigating data bias in synthetic sets",
            "Designing recursive training loops",
            "Validating synthetic data distribution",
            "Scaling automated data pipelines"
        ]
    },
    {
        id: "cross-modal-systems-designer",
        label: "Cross-Modal Systems Designer",
        title: "Cross-Modal Systems Designer",
        desc: "Architects systems that seamlessly translate intelligence across text, vision, audio, and tactile sensors for unified world-models.",
        salary: "₹45L - 85L",
        growth: "+40% YoY",
        skills: [
            "Multi-modal LLMs",
            "Audio Processing",
            "Transformer Architecture",
            "Latent Space Analysis",
            "Feature Embedding"
        ],
        responsibilities: [
            "Aligning visual and textual embeddings",
            "Designing cross-attention mechanisms",
            "Optimizing multi-modal batching",
            "Building unified sensory-input layers",
            "Evaluating model cross-modal coherence"
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
    }
];

function CurriculumTabs() {
    const [activeYear, setActiveYear] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.year === activeYear);

    return (
        <div className="space-y-8">
            {/* Year Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
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

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
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

                            <h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter text-white mb-8 md:mb-10 leading-[0.85] uppercase">
                                Artificial <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-blue-500 pb-2 inline-block pr-8">Intelligence</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light mb-16 max-w-3xl">
                                A 3-year immersive degree merging AI Engineering with Entrepreneurship. <br />
                                <span className="text-white font-medium">Graduate with Mastery, Vision & Real-World Impact.</span>
                            </p>

                            {/* Elegant Inline Content (Replacing Cluttered Boxes) */}
                            <div className="grid sm:grid-cols-3 gap-10 md:gap-16 pt-12 border-t border-white/10 max-w-4xl relative z-10">
                                {/* Degrees */}
                                <div>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Available Degrees</p>
                                    <div className="space-y-1.5 border-l-2 border-cyan-500/30 pl-4">
                                        <p className="text-sm md:text-base font-semibold text-white tracking-tight">BCA in Artificial Intelligence</p>
                                        <p className="text-sm md:text-base font-semibold text-white tracking-tight">B.Sc AI / ML Professional</p>
                                    </div>
                                </div>

                                {/* Partners */}
                                <div>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-4">Partner Institutions</p>
                                    <div className="space-y-1.5 border-l-2 border-blue-500/30 pl-4">
                                        <p className="text-sm md:text-base font-semibold text-white tracking-tight">Ethames Business School</p>
                                        <p className="text-sm md:text-base font-semibold text-white tracking-tight">Keshava Degree College</p>
                                    </div>
                                </div>

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
            <div className="relative z-20 px-4 -mt-14 mb-12">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Length</p>
                                <p className="text-lg font-bold text-slate-900">3-Year Full-Time</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Delivery Mode</p>
                                <p className="text-lg font-bold text-slate-900">On-Campus, Immersive</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Campus</p>
                                <p className="text-lg font-bold text-slate-900">Hyderabad, Warangal</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Admissions</p>
                                <p className="text-lg font-bold text-slate-900">Now Open</p>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full lg:w-auto">
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
                                The Foundry&apos;s 3-year AI program combines rigorous academic foundations with hands-on engineering and entrepreneurial execution. Students don&apos;t just learn theory — they architect neural networks, deploy agent systems, and ship production-grade AI products before graduation.
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
                                { value: "3", unit: "Years", label: "Full-time immersive program" },
                                { value: "6", unit: "Semesters", label: "Progressive skill building" },
                                { value: "100%", unit: "Hands-on", label: "Project-based from day one" },
                                { value: "10+", unit: "Projects", label: "Real-world problem solving" },
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
                                <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Admissions Open</h4>
                                        <p className="text-blue-100 text-sm">Secure your cohort for 2026 today.</p>
                                    </div>
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Achieve — Merged Design */}
            <section id="outcomes" className="py-24 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-7xl font-sans">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-16">
                        
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
                        <div className="flex flex-col gap-12 bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-3xl">
                            {/* What you'll learn */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                    What you&apos;ll <span className="text-blue-600">learn</span>
                                </h3>
                                <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-lg">
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
                                        <div key={index} className="flex items-start gap-4 py-3.5 border-b border-slate-200 last:border-0 hover:bg-slate-100/50 transition-colors rounded-lg px-2 -mx-2">
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
                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                    What you&apos;ll <span className="text-blue-600">achieve</span>
                                </h3>
                                <p className="text-base text-slate-600 leading-relaxed mb-6">
                                    Graduates leave this program with the mindset, vocabulary, and skills to make real decisions in AI-driven organisations.
                                </p>
                                
                                <div className="text-sm font-bold text-slate-500 mb-5 uppercase tracking-wide">
                                    You will be able to —
                                </div>
                                <div className="flex flex-col gap-5">
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
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">From mathematical foundations to shipping production AI systems. Every year builds on the last.</p>
                    </div>
                    <CurriculumTabs />
                </div>
            </section>
            {/* Tool Master Section — Contained Design */}
            <section id="tool-master" className="py-20 px-6 bg-slate-50 overflow-hidden relative border-y border-slate-200">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">Industrial Stack</p>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
                            Tool Master
                        </h2>
                    </div>

                    {/* User-provided Dynamic Word Cloud component */}
                    <div className="py-8">
                        <WordCloud />
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


