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
    MessageSquare,
    Sparkles,
    Zap,
    Workflow,
    BookOpen,
    BarChart3,
    Search,
    Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Project Data
const ALL_PROJECTS = [
    {
        title: "Enterprise AI Strategy",
        tag: "Strategy",
        desc: "Design a comprehensive AI integration roadmap for a legacy enterprise, covering infrastructure, ethics, and ROI.",
        tech: ["Market Analysis", "Risk Assessment", "Strategy"]
    },
    {
        title: "Automated Customer Intelligence",
        tag: "Analytics",
        desc: "Build a system that analyzes customer sentiment and behavior across multiple channels using professional AI tools.",
        tech: ["Sentiment Analysis", "NLP", "Dashboarding"]
    },
    {
        title: "AI-Powered Supply Chain",
        tag: "Optimization",
        desc: "Implement predictive models to optimize logistics and inventory management in a simulated supply chain environment.",
        tech: ["Predictive Modeling", "Optimization", "Python"]
    }
];

const CAREER_ROLES = [
    {
        "id": "ai-consultant",
        "label": "AI Consultant",
        "title": "AI Consultant",
        "desc": "Helps businesses identify and implement high-impact AI solutions, bridging the gap between technical potential and business needs.",
        "salary": "₹12L - ₹30L",
        "growth": "+55% YoY",
        "skills": [
            "AI Strategy",
            "Business Analysis",
            "Stakeholder Management",
            "Project Management",
            "AI Ethics"
        ],
        "responsibilities": [
            "Identifying AI use cases",
            "Evaluating AI vendors & tools",
            "Overseeing AI implementations",
            "Training corporate teams",
            "Measuring AI ROI"
        ]
    }
];

const CURRICULUM_DATA = [
    {
        week: 1,
        title: "AI for the Professional World",
        topics: [
            "The Modern AI Landscape",
            "Syllabus to be updated soon...",
        ]
    }
];

function CurriculumTabs() {
    const [activeWeek, setActiveWeek] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.week === activeWeek);

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
                    <button
                        key={item.week}
                        onClick={() => setActiveWeek(item.week)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeWeek === item.week
                            ? 'bg-emerald-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Week {item.week}
                    </button>
                ))}
            </div>

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
                        <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
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
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
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
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
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

export default function CertifiedProfessionalAICoursePage() {
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.certifiedProfessionalAI;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Award size={16} />
                            <span>Professional Certification</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Certified <br />
                            <span className="text-emerald-400 italic">Professional in AI</span>
                        </h1>

                        <p className="text-lg md:text-xl text-emerald-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Master the practical application of AI in the modern workplace. From strategy to implementation, learn how to leverage intelligent systems for professional excellence.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-emerald-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                <span>AI Strategy & ROI</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                <span>Practical Tool mastery</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                <span>Ethical Implementation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Card */}
            <div className="relative z-20 px-4 mt-12 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">12 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
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
                            <Link href="/enroll/certified-professional-in-ai" className="block w-full text-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why This Program Exists */}
            <section className="py-12 md:py-4 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Lead with Intelligence.</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                AI is no longer optional. It's the new standard for professional excellence.
                            </p>

                            <div className="space-y-4">
                                <div className="border-l-4 border-emerald-400 bg-emerald-50/50 p-5">
                                    <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2">The Impact</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Learn how to identify high-value AI opportunities within any business and lead successful implementation projects from start to finish.
                                    </p>
                                </div>
                                <div className="border-l-4 border-teal-400 bg-teal-50/50 p-5">
                                    <h4 className="text-sm font-bold text-teal-900 uppercase tracking-wider mb-2">The Skills</h4>
                                    <p className="text-base text-slate-700 font-light">
                                        Master a suite of professional AI tools and methodologies that enhance productivity, decision-making, and creative output.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Who This Program Is For</h2>
                            <p className="text-xl text-slate-800 mb-8 font-light italic leading-snug">
                                For the forward-thinking professional.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-emerald-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Briefcase size={24} className="text-emerald-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Business Leaders</h3><p className="text-sm text-slate-600 font-light">Drive digital transformation and maintain a competitive edge.</p></div>
                                </div>
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-emerald-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><BarChart3 size={24} className="text-emerald-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Analysts & Consultants</h3><p className="text-sm text-slate-600 font-light">Augment your analytical capabilities with advanced AI tools.</p></div>
                                </div>
                                <div className="flex items-start gap-6 bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-sm hover:border-emerald-300 transition-all hover:shadow-md group">
                                    <div className="shrink-0"><Globe size={24} className="text-emerald-600 group-hover:scale-110 transition-transform" /></div>
                                    <div className="flex-1"><h3 className="text-base font-serif text-slate-900 mb-1">Entrepreneurs</h3><p className="text-sm text-slate-600 font-light">Build AI-first businesses and lean operations from day one.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <HighlightCard icon={Search} title="AI Opportunity Mapping" desc="Frameworks for identifying and prioritizing high-ROI AI use cases within an organization." />
                        <HighlightCard icon={ShieldCheck} title="Ethics & Governance" desc="Navigate the complex landscape of AI safety, bias, and regulatory compliance professionally." />
                        <HighlightCard icon={Cpu} title="Augmented Productivity" desc="Master the latest AI tools for research, writing, coding, and day-to-day professional tasks." />
                        <HighlightCard icon={BarChart3} title="Data-Driven Decisions" desc="Leverage AI-powered analytics to derive deeper insights and make more accurate predictions." />
                        <HighlightCard icon={Workflow} title="Process Automation" desc="Design and implement lean, automated workflows that eliminate repetitive professional tasks." />
                        <HighlightCard icon={Globe} title="The Future of Work" desc="Understand the long-term impacts of AI on the global economy and prepare for the next decade." />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Curriculum Overview
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A comprehensive journey into professional AI. (Detailed syllabus coming soon)
                        </p>
                    </div>

                    <CurriculumTabs />
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
                                    alt="Foundry Professional AI Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Professional Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Elevate your professional standing. This certificate validates your comprehensive understanding and practical ability to apply AI in a professional environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
