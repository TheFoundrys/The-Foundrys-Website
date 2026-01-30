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
    Container,
    GitBranch,
    Activity,
    Database,
    ChevronDown,
    ClipboardCheck,
    Workflow
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";

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

export default function MLOpsCoursePage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS.slice(0, 3));
    const [activeRole, setActiveRole] = useState(CAREER_ROLES[0]);

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);

        const shuffled = [...ALL_PROJECTS].sort(() => 0.5 - Math.random());
        setTimeout(() => setVisibleProjects(shuffled.slice(0, 3)), 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/programs/professional/ai" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to AI Programs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6">
                                <Award size={16} /> Professional Certification
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Certified Professional in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI Operations</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                Master the art of MLOps. Build, deploy, monitor, and scale production-grade machine learning systems using industry-standard tools.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">45 Days</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">Hybrid</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/apply" className="px-8 py-4 bg-cyan-600 text-white rounded-full font-bold text-lg hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-500/25 text-center">
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
                                <span className="text-4xl lg:text-5xl font-bold text-white">₹100,000</span>
                                <span className="text-xl text-slate-500 line-through">₹200,000</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-2 py-1 rounded uppercase">50% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <InfoRow text="Hybrid" />
                                <InfoRow text="Hands-on Infrastructure Labs" />
                                <InfoRow text="Industry Recognized Certification" />
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Bridge the gap between code and production.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            A model on a laptop is an experiment; a model in production is a product. The Certified Professional in AI Operations is an intensive <span className="font-bold text-slate-900">45-day program</span> designed to teach you the engineering discipline required to run AI at scale.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mt-4">
                            You will move beyond Jupyter notebooks to mastering <span className="font-bold text-slate-900">CI/CD pipelines, Kubernetes orchestration, and real-time monitoring</span>. Whether you are a Data Scientist wanting to deploy or a DevOps engineer entering AI, this course is your bridge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={Container} title="Containerization" desc="Master Docker and Kubernetes for consistent, scalable model deployment." />
                        <HighlightCard icon={GitBranch} title="CI/CD for ML" desc="Automate testing, training, and deployment using GitHub Actions and Jenkins." />
                        <HighlightCard icon={Activity} title="Monitoring" desc="Detect data drift and model decay in real-time using Prometheus and Grafana." />
                        <HighlightCard icon={Database} title="Feature Stores" desc="Manage and serve features consistently for training and inference using Feast." />
                        <HighlightCard icon={Workflow} title="Orchestration" desc="Build complex, reproducible ML workflows with Apache Airflow and Kubeflow." />
                        <HighlightCard
                            icon={ClipboardCheck}
                            title="Model Lifecycle & Governance"
                            desc="Track, version, validate, and govern models from experimentation to production and retirement."
                        />
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Architect Robust <br /><span className="text-cyan-400">ML Systems.</span></h2>
                            <p className="text-slate-400 text-lg">Don&apos;t just train models. Build the infrastructure that keeps them running reliably in production.</p>
                        </div>
                        <div className="md:w-1/2 flex justify-end">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-cyan-500" /> Production-Grade Infrastructure
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
                <div className="container mx-auto px-6 mb-16 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Tools & Technologies
                    </h2>
                    <p className="text-slate-400">
                        Master the modern MLOps stack
                    </p>
                </div>

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
                            <span>Docker</span> <span>&bull;</span>
                            <span>Kubernetes</span> <span>&bull;</span>
                            <span>MLflow</span> <span>&bull;</span>
                            <span>DVC</span> <span>&bull;</span>
                            <span>Apache Airflow</span> <span>&bull;</span>
                            <span>GitHub Actions</span> <span>&bull;</span>
                            <span>Terraform</span> <span>&bull;</span>
                            <span>Prometheus</span> <span>&bull;</span>
                            <span>Grafana</span> <span>&bull;</span>
                            <span>Feast</span> <span>&bull;</span>
                            <span>FastAPI</span> <span>&bull;</span>
                            <span>AWS SageMaker</span> <span>&bull;</span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Curriculum */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                        <p className="text-lg text-slate-600">A structured path to MLOps mastery.</p>
                    </div>

                    <div className="space-y-12">
                        {/* Phase 1 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-cyan-100">01</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Foundations & Pipeline Automation</h3>
                                    <p className="text-slate-500">Focus: Versioning data, code, and models for reproducibility.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 1" title="MLOps Foundations & Experiment Tracking" topics={["Linux & Bash Scripting", "Docker Fundamentals", "ML Lifecycle", "MLflow Tracking Server"]} />
                                <WeekCard week="Week 2" title="Data Versioning & Workflow Orchestration" topics={["Data Version Control (DVC)", "S3 Integration", "Apache Airflow Basics", "DAGs & Operators"]} />
                                <WeekCard week="Week 3" title="Model Serving & CI/CD for ML" topics={["REST APIs with FastAPI", "Containerizing Models", "GitHub Actions", "Automated Testing (PyTest)"]} />
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-cyan-100">02</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Deployment, Monitoring & Scale</h3>
                                    <p className="text-slate-500">Focus: Production infrastructure, observability, and scaling.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pl-4 md:pl-12 border-l-2 border-slate-100">
                                <WeekCard week="Week 4" title="Kubernetes & Kubeflow" topics={["K8s Architecture", "Deploying Models on K8s", "Kubeflow Pipelines", "Helm Charts"]} />
                                <WeekCard week="Week 5" title="Monitoring & Observability" topics={["Data Drift & Concept Drift", "Evidently AI", "Prometheus & Grafana Dashboards", "Alerting"]} />
                                <WeekCard week="Week 6" title="Advanced Deployment & Capstone" topics={["Canary & Shadow Deployments", "Feature Stores (Feast)", "Scalable MLOps Platform", "Final Certification"]} />
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

            {/* Career Roles */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who you can become</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            MLOps is one of the highest-paid specializations in AI. Prepare for critical infrastructure roles.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Mobile Layout */}
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

            {/* FAQs */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <FAQItem question="Do I need to be a Data Scientist?" answer="Not necessarily. While understanding ML concepts helps, this course focuses on the infrastructure and engineering side. Software Engineers and DevOps professionals are well-suited." />
                        <FAQItem question="What prerequisites are needed?" answer="You should be comfortable with Python and basic Linux commands. Experience with Docker or Git is a plus, but we cover the fundamentals in Week 1." />
                        <FAQItem question="Will we use cloud platforms?" answer="Yes, we will use AWS for many labs, but the concepts are cloud-agnostic. We also teach how to run local Kubernetes clusters for development." />
                        <FAQItem question="Is this course hands-on?" answer="Extremely. You will spend 70% of your time building pipelines, writing Dockerfiles, and configuring Kubernetes manifests. The goal is to build a portfolio of working infrastructure." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to build the backbone of AI?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join the next cohort and become a Certified Professional in AI Operations.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-600 text-white rounded-full font-bold text-xl hover:bg-cyan-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
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
            <CheckCircle2 size={18} className="text-cyan-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HighlightCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function WeekCard({ week, title, topics }: { week: string, title: string, topics: string[] }) {
    return (
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-colors">
            <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">{week}</div>
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
