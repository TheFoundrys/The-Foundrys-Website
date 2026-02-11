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
    ClipboardCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Predictive Maintenance Pipeline",
        tag: "End-to-End Pipeline",
        desc: "A complete training pipeline using DVC for data versioning and MLflow for experiment tracking, predicting equipment failures.",
        tech: ["DVC", "MLflow", "Scikit-learn", "AWS S3"]
    },
    {
        title: "Real-time Fraud Detection API",
        tag: "Model Serving",
        desc: "High-throughput fraud detection service using FastAPI and Docker, deployed with Blue/Green strategies.",
        tech: ["FastAPI", "Docker", "Redis", "Nginx"]
    },
    {
        title: "Drift Monitoring Dashboard",
        tag: "Observability",
        desc: "Automated monitoring system that detects data drift and model degradation, triggering retraining alerts.",
        tech: ["Evidently AI", "Prometheus", "Grafana", "Slack Alerts"]
    },
    {
        title: "Scalable RecSys Platform",
        tag: "Orchestration",
        desc: "Kubeflow pipeline for training and deploying recommendation models on a Kubernetes cluster.",
        tech: ["Kubernetes", "Kubeflow", "TensorFlow", "Helm"]
    },
    {
        title: "Feature Store Implementation",
        tag: "Data Engineering",
        desc: "Centralized feature store using Feast to serve consistent features for both training and online inference.",
        tech: ["Feast", "PostgreSQL", "Redis", "Pandas"]
    },
    {
        title: "Automated Retraining System",
        tag: "CI/CD",
        desc: "Airflow DAGs that automatically retrain and deploy models based on performance metrics or data freshness.",
        tech: ["Apache Airflow", "GitHub Actions", "PyTest", "Docker Hub"]
    }
];

const CAREER_ROLES = [
    {
        "id": "mlops-engineer",
        "label": "MLOps Engineer",
        "title": "MLOps Engineer",
        "desc": "Bridges the gap between data science and operations. Responsible for building robust pipelines to train, deploy, and monitor ML models.",
        "salary": "₹15L - ₹35L",
        "growth": "+55% YoY",
        "skills": [
            "CI/CD for ML",
            "Containerization (Docker/K8s)",
            "Cloud Platforms (AWS/GCP)",
            "Python & Bash",
            "Infrastructure as Code",
            "Model Monitoring"
        ],
        "responsibilities": [
            "Building automated ML pipelines",
            "Managing model deployment strategies",
            "Ensuring system scalability and reliability",
            "Implementing monitoring and alerting",
            "Optimizing inference costs"
        ]
    },
    {
        "id": "ml-platform-engineer",
        "label": "ML Platform Engineer",
        "title": "ML Platform Engineer",
        "desc": "Builds the internal developer platform that enables data scientists to self-serve infrastructure and tools.",
        "salary": "₹20L - ₹45L",
        "growth": "+40% YoY",
        "skills": [
            "Kubernetes Administration",
            "System Design",
            "Golang / Python",
            "Distributed Systems",
            "Security & Governance"
        ],
        "responsibilities": [
            "Designing internal ML platforms",
            "Managing Kubernetes clusters",
            "Integrating feature stores and registries",
            "Ensuring security compliance",
            "Reducing time-to-production for DS teams"
        ]
    },
    {
        "id": "ai-infrastructure-architect",
        "label": "AI Infrastructure Architect",
        "title": "AI Infrastructure Architect",
        "desc": "Designs the high-level architecture for enterprise AI systems, focusing on scalability, cost-efficiency, and multi-cloud strategies.",
        "salary": "₹30L - ₹60L",
        "growth": "+35% YoY",
        "skills": [
            "Cloud Architecture",
            "High Performance Computing",
            "Cost Optimization",
            "Networking & Security",
            "Strategic Planning"
        ],
        "responsibilities": [
            "Architecting scalable AI solutions",
            "Selecting technology stacks",
            "Managing cloud budgets",
            "Designing disaster recovery plans",
            "Leading technical strategy"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "MLOps Foundations & Experiment Tracking",
        topics: [
            "Linux & Bash Scripting", "Docker Fundamentals", "ML Lifecycle", "MLflow Tracking Server"
        ]
    },
    {
        week: 2,
        title: "Data Versioning & Workflow Orchestration",
        topics: [
            "Data Version Control (DVC)", "S3 Integration", "Apache Airflow Basics", "DAGs & Operators"
        ]
    },
    {
        week: 3,
        title: "Model Serving & CI/CD for ML",
        topics: [
            "REST APIs with FastAPI", "Containerizing Models", "GitHub Actions", "Automated Testing (PyTest)"
        ]
    },
    {
        week: 4,
        title: "Kubernetes & Kubeflow",
        topics: [
            "K8s Architecture", "Deploying Models on K8s", "Kubeflow Pipelines", "Helm Charts"
        ]
    },
    {
        week: 5,
        title: "Monitoring & Observability",
        topics: [
            "Data Drift & Concept Drift", "Evidently AI", "Prometheus & Grafana Dashboards", "Alerting"
        ]
    },
    {
        week: 6,
        title: "Advanced Deployment & Capstone",
        topics: [
            "Canary & Shadow Deployments", "Feature Stores (Feast)", "Scalable MLOps Platform", "Final Certification"
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
                            ? 'bg-cyan-600 text-white shadow-lg scale-105'
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
                        <div className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold">
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
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-cyan-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-cyan-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function MLOpsCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.professionalAIOperations;

    useEffect(() => {
        window.scrollTo(0, 0);
        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Award size={16} />
                            <span>Professional Certification Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Certified Professional <br />
                            <span className="text-cyan-400 italic">AI Operations</span>
                        </h1>

                        <p className="text-lg md:text-xl text-cyan-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Master the art of MLOps. Build, deploy, monitor, and scale production-grade machine learning systems using industry-standard tools and practices.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-cyan-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-cyan-400" />
                                <span>Industry-Recognized Certificate</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-cyan-400" />
                                <span>Hands-on Infrastructure Labs</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-cyan-400" />
                                <span>Expert-Led Sessions</span>
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
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Format</p>
                                <p className="text-lg font-bold text-slate-900">Weekend Hybrid</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="text-sm text-slate-400 line-through">{symbol}{pricing.original[currency]}</span>
                                    <span className="text-lg font-bold text-slate-900">{symbol}{pricing.discounted[currency]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href="/apply" className="block w-full text-center px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
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
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Why This Program Exists</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                A model on a laptop is an experiment; a model in production is a product.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-red-400 bg-red-50/50 p-5">
                                    <h4 className="text-sm font-bold text-red-900 uppercase tracking-wider mb-2">The Bottleneck</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Data Science teams are producing models faster than engineering teams can deploy them. 87% of models never make it to production.
                                    </p>
                                </div>

                                <div className="border-l-4 border-cyan-400 bg-cyan-50/50 p-5">
                                    <h4 className="text-sm font-bold text-cyan-900 uppercase tracking-wider mb-2">The Skill Gap</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Companies need engineers who understand both machine learning lifecycles AND robust infrastructure (Kubernetes, CI/CD).
                                    </p>
                                </div>

                                <div className="border-l-4 border-amber-400 bg-amber-50/50 p-5">
                                    <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2">The Solution</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        This program bridges the gap. Move beyond notebooks to mastering <span className="font-semibold text-amber-900">CI/CD pipelines, Kubernetes, and real-time monitoring</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Who This Program Is For */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                Engineers ready to architect the backbone of modern AI systems.
                            </p>

                            <div className="space-y-2">
                                {[
                                    { title: "Data Scientists", desc: "Who want to own the end-to-end lifecycle and deploy their own models.", icon: Database },
                                    { title: "DevOps Engineers", desc: "Who want to specialize in the high-demand field of Machine Learning Operations.", icon: ServerCog },
                                    { title: "Software Engineers", desc: "Who want to transition into building AI platforms and infrastructure.", icon: Code2 },
                                    { title: "IT Professionals", desc: "Who want to upgrade their skills for the AI era.", icon: Terminal }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-cyan-300 transition-all hover:shadow-md group">
                                        <div className="shrink-0">
                                            <item.icon size={24} className="text-cyan-600 group-hover:scale-110 transition-transform" />
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

                    {/* Centered Solution Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-8 rounded-xl shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={24} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3">What You'll Become</h3>
                                    <p className="text-cyan-100 leading-relaxed">
                                        A Production-Grade MLOps Engineer. You'll stop treating models as black boxes and start treating them as software artifacts—versioned, tested, deployed, monitored, and scaled automatically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-cyan-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            What You&apos;ll Learn
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A structured path from manual scripts to automated, scalable ML platforms
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Skills We Will Master */}
            <section className="py-2 px-1 bg-slate-900">
                <div className="container mx-auto max-w-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Technologies you'll learn
                        </h2>
                    </div>

                    <div className="space-y-8 overflow-hidden">
                        {[
                            {
                                logos: [
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", name: "Docker" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", name: "Kubernetes" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", name: "OpenAI" },
                                    { url: "https://www.vectorlogo.zone/logos/github/github-icon.svg", name: "GitHub Actions" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", name: "Scikit-Learn" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg", name: "Prometheus" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg", name: "Terraform" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", name: "AWS" }
                                ],
                                direction: "left"
                            },

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
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Validate your engineering prowess. Earn a certificate that proves you can architect and manage the complex infrastructure behind modern AI systems.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-cyan-100 text-cyan-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-blue-100 text-blue-600"><CheckCircle2 size={16} /></div>
                                    Demonstrates Production Experience
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
                            MLOps is one of the highest-paid specializations in AI. Prepare for critical infrastructure roles.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout (Accordion) */}
                        <div className="w-full lg:hidden flex flex-col gap-4">
                            {CAREER_ROLES.map((role) => (
                                <div key={role.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setActiveRole(activeRole.id === role.id ? activeRole : role)}
                                        className={`w-full text-left p-4 flex items-center justify-between transition-colors ${activeRole.id === role.id ? "bg-cyan-50/50" : "bg-white"}`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-cyan-600" : "text-slate-700"}`}>
                                            {role.label}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`text-slate-400 transition-transform duration-300 ${activeRole.id === role.id ? "rotate-180 text-cyan-500" : ""}`}
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
                                            ? "bg-white border-cyan-200 shadow-md translate-x-2"
                                            : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <h3 className={`font-bold text-lg ${activeRole.id === role.id ? "text-cyan-600" : "text-slate-700"}`}>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineer Intelligent <br /><span className="text-cyan-400">Production Systems.</span></h2>
                            <p className="text-slate-400 text-lg">Go beyond tutorials. Architect and deploy 6 complex applications that solve actual business problems.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-cyan-500" /> Real-World Architecture
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
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold mb-4 border border-cyan-500/20">
                    {tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
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
