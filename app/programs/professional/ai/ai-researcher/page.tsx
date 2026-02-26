"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Calendar,
    Clock,
    ArrowUpRight,
    BrainCircuit,
    Microscope,
    Sigma,
    Network,
    Sparkles,
    FileText,
    FlaskConical
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
        desc: "Implement a state-of-the-art transformer variant from scratch based on a recent research paper, reproducing reported results.",
        tech: ["PyTorch", "Transformers", "arXiv", "Python"]
    },
    {
        title: "Model Ablation Study",
        tag: "Experimentation",
        desc: "Design and execute a rigorous ablation study to isolate the contribution of specific architectural components to model performance.",
        tech: ["WandB", "Experiment Design", "Statistical Analysis", "Matplotlib"]
    },
    {
        title: "Generative Model Exploration",
        tag: "GenAI Research",
        desc: "Investigate the latent space of a VAE or GAN, analyzing disentanglement and generation quality metrics.",
        tech: ["Generative Models", "Latent Space Analysis", "FID Score", "PyTorch"]
    }
];

const CAREER_ROLES = [
    {
        "id": "ai-researcher",
        "label": "AI Researcher",
        "title": "AI Researcher",
        "desc": "Conducts original research to advance the state of the art in artificial intelligence. Publishes papers and develops novel algorithms.",
        "salary": "₹25L - ₹60L",
        "growth": "+45% YoY",
        "skills": [
            "Deep Learning Theory",
            "Mathematics (Linear Algebra, Prob)",
            "Paper Writing",
            "Experiment Design",
            "PyTorch/JAX"
        ],
        "responsibilities": [
            "Reading and critiquing research papers",
            "Designing and running experiments",
            "Developing new model architectures",
            "Publishing research findings",
            "Staying current with SOTA"
        ]
    }
];

export default function AIResearcherPage() {
    const [visibleProjects, setVisibleProjects] = useState(ALL_PROJECTS);
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.aiResearch;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/programs/professional/ai" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} /> Back to AI Programs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
                                <Microscope size={16} /> Professional Certification
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                AI Researcher
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                Master the art of original research in Artificial Intelligence. Focus on hypothesis generation, experimental design, and contributing to the global AI knowledge base.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">6 Weeks</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">Hybrid</div>
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
                                <span className="text-4xl lg:text-5xl font-bold text-white">{symbol}{pricing.freshers[currency]}</span>
                                <span className="text-xl text-slate-500 line-through">{symbol}{pricing.original[currency]}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded uppercase">50% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <InfoRow text="Hybrid Learning Model" />
                                <InfoRow text="Exclusive Research Mentorship" />
                                <InfoRow text="Industry Recognized Certification" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Empowering the Pioneers of AI.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            The AI Researcher program is an intensive path designed for those who want to do more than just use AI—they want to invent it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={BrainCircuit} title="Advanced Theory" desc="Deep dive into the mathematical and logical foundations of intelligence." />
                        <HighlightCard icon={Sigma} title="Experimental Rigor" desc="Master the scientific method as applied to deep learning and neural architectures." />
                        <HighlightCard icon={FlaskConical} title="Innovation Lab" desc="Hypothesize and test novel approaches to solve complex AI challenges." />
                    </div>
                </div>
            </section>

            {/* Curriculum Placeholder */}
            <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed Curriculum Coming Soon</h2>
                    <p className="text-lg text-slate-600 mb-10">
                        We are finalizing the advanced research modules. The curriculum will be shared with enrolled candidates and updated here shortly.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-bold">
                        <Sparkles size={18} /> Stay Tuned
                    </div>
                </div>
            </section>

            {/* Project Portfolio */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research <br /><span className="text-blue-400">Portfolio.</span></h2>
                            <p className="text-slate-400 text-lg">Work on projects that matter to the global research community.</p>
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

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Join the AI Research Frontier</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Secure your spot in our upcoming research cohort.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Apply Now <ArrowUpRight size={20} />
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
            <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
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
