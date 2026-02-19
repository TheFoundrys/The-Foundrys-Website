"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    CheckCircle2,
    Calendar,
    Clock,
    Award,
    ArrowUpRight,
    MapPin,
    Users,
    BookOpen,
    Zap,
    Target,
    BrainCircuit,
    Wrench,
    Database,
    ShieldCheck,
    Rocket,
    ChevronDown,
    Lightbulb,
    Layers,
    Bot,
    Cpu,
    Settings,
    Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// 5-Day Curriculum Data
const CURRICULUM_DATA = [
    {
        day: 1,
        title: "Foundations of Agentic AI",
        emoji: "🟢",
        learningOutcome: "Participants understand how modern AI agents differ from chatbots and automation systems.",
        topics: [
            "Bootcamp Overview & Learning Roadmap",
            "What is Agentic AI?",
            "Agentic AI vs Generative AI",
            "Agentic AI vs Assistants",
            "Agentic AI vs Traditional Automation",
            "Agentic vs Reactive vs Autonomous AI (Mental Models)",
        ],
        useCases: [
            "Business: HR, Marketing, Finance, Operations",
            "Engineering: DevOps, QA, Data, IT Support",
        ],
        buildingBlocks: ["Goal", "Reasoning", "Tools", "Memory"],
    },
    {
        day: 2,
        title: "Agent Reasoning Patterns & Core Components",
        emoji: "🟢",
        learningOutcome: "Participants can design structured reasoning flows and understand how agents think, act, and remember.",
        topics: [
            "Reasoning Loops: ReAct, Chain-of-Thought, Plan-and-Execute, Reflection Loops",
            "Tools: Search APIs, Calculators, Code Interpreters, Database Connectors",
            "Memory: Short-Term Context, Long-Term Vector Memory, Episodic Memory",
            "Context Engineering & Prompt Structuring",
            "Human-in-the-Loop Patterns",
            "Introduction to Multi-Agent Systems",
        ],
    },
    {
        day: 3,
        title: "Building Single Agents (No-Code & Low-Code)",
        emoji: "🟢",
        learningOutcome: "Participants build and run their first working AI agents.",
        topics: [
            "Overview of No-Code Agent Platforms: n8n, Zapier Central, Make.com, Langflow",
            "Hands-on: Research Agent",
            "Hands-on: Summarizer Agent",
            "Hands-on: Data Lookup Agent",
            "Hands-on: Email Drafting Agent",
            "Visual Workflow Design",
        ],
        splitTrack: {
            nonEngineering: "Advanced no-code chaining",
            engineering: "Python-based Agent (LangChain / LangGraph – guided template)",
        },
    },
    {
        day: 4,
        title: "Multi-Agent Systems & Evaluation",
        emoji: "🟢",
        learningOutcome: "Participants can architect small agent teams and evaluate their performance.",
        topics: [
            "Multi-Agent Collaboration: Sequential, Parallel, Supervisor, Debate, Hierarchical",
            "Hands-on: Build Multi-Agent Team (Researcher + Analyst + Writer + Reviewer)",
            "Agent Evaluation: Success Rate, Hallucination Detection, Tool Usage Efficiency, Cost Analysis",
            "Debugging Failures: Infinite Loops, Wrong Tool Calls, Context Loss",
            "Guardrails & Security",
            "Cost Control & Rate Limiting",
        ],
    },
    {
        day: 5,
        title: "Production, Ethics & Capstone Showcase",
        emoji: "🟢",
        learningOutcome: "Participants leave with a deployable mindset and a working project.",
        topics: [
            "From Prototype to Production: Monitoring, Versioning, Scaling, Fallback Strategies",
            "Ethics & Governance: Bias, Over-autonomy, Accountability, Misuse Risks",
            "Job Displacement Considerations",
            "Capstone Project: Solve a Real Business / Engineering Problem",
            "3–5 Minute Demo Presentations",
            "Peer Feedback, Evaluation & Certification",
        ],
    },
];

const TRAINING_OBJECTIVES = [
    { icon: BrainCircuit, text: "Upskill participants in Agentic AI concepts and architecture" },
    { icon: Wrench, text: "Enable participants to design, build, and evaluate AI agents" },
    { icon: Layers, text: "Bridge both business and technical understanding" },
    { icon: Rocket, text: "Move from theory → hands-on building → production thinking" },
    { icon: Target, text: "Deliver a working capstone agent system" },
];

function CurriculumTabs() {
    const [activeDay, setActiveDay] = useState(1);
    const activeContent = CURRICULUM_DATA.find(item => item.day === activeDay);

    return (
        <div className="space-y-8">
            {/* Day Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
                {CURRICULUM_DATA.map((item) => (
                    <button
                        key={item.day}
                        onClick={() => setActiveDay(item.day)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeDay === item.day
                            ? 'bg-violet-600 text-white shadow-lg scale-105'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                    >
                        Day {item.day}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-bold">
                            Day {activeContent?.day}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {activeContent?.title}
                        </h3>
                    </div>

                    {/* Topics */}
                    <div className="grid md:grid-cols-1 gap-3 mb-8">
                        {activeContent?.topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-violet-50 transition-colors"
                            >
                                <CheckCircle2 size={20} className="text-violet-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{topic}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Use Cases (Day 1) */}
                    {activeContent?.useCases && (
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Real-world Use Cases</h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {activeContent.useCases.map((uc, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-amber-50 px-4 py-3 rounded-lg border border-amber-100">
                                        <Lightbulb size={16} className="text-amber-500 shrink-0" />
                                        {uc}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Building Blocks (Day 1) */}
                    {activeContent?.buildingBlocks && (
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">The 4 Core Building Blocks</h4>
                            <div className="flex flex-wrap gap-3">
                                {activeContent.buildingBlocks.map((block, i) => (
                                    <span key={i} className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-bold">
                                        {block}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Split Track (Day 3) */}
                    {activeContent?.splitTrack && (
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Optional Split Track</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <div className="text-xs font-bold text-blue-600 uppercase mb-2">Non-Engineering</div>
                                    <p className="text-sm text-slate-700">{activeContent.splitTrack.nonEngineering}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                                    <div className="text-xs font-bold text-emerald-600 uppercase mb-2">Engineering</div>
                                    <p className="text-sm text-slate-700">{activeContent.splitTrack.engineering}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Learning Outcome */}
                    <div className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl p-5 border border-violet-100">
                        <div className="flex items-start gap-3">
                            <Target size={20} className="text-violet-600 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-violet-700 uppercase tracking-wider mb-1">Learning Outcome</h4>
                                <p className="text-slate-700 font-medium">{activeContent?.learningOutcome}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function AgenticAIBootcampPage() {
    const { currency, symbol } = useRegionalPricing();
    const pricing = COURSE_PRICING.agenticAIBootcamp;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-violet-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-900 overflow-hidden">
                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />

                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Bot size={16} />
                            <span>Instructor-Led Training · 5 Days Intensive</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Agentic AI <br />
                            <span className="text-violet-400 italic">Bootcamp</span>
                        </h1>

                        {/* Program Description */}
                        <p className="text-lg md:text-xl text-violet-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            An intensive 5-day in-person bootcamp designed for both engineering and non-engineering professionals.
                            Design, build, and deploy autonomous AI agents — from foundations to production-ready capstone projects.
                        </p>

                        {/* Quick Highlights */}
                        <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-sm text-violet-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <MapPin size={16} className="text-violet-400" />
                                <span>In-Person @ Hyderabad</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <Calendar size={16} className="text-violet-400" />
                                <span>Starts Feb 23, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <Clock size={16} className="text-violet-400" />
                                <span>8 Hours / Day</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <Users size={16} className="text-violet-400" />
                                <span>Batch Size: 15</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <Award size={16} className="text-violet-400" />
                                <span>Certificate Included</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Card - Overlapping */}
            <div className="relative z-20 px-4 -mt-14 mb-12">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">5 Days</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">In-Person</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">Feb 23, 2026</p>
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
                            <Link href="/apply" className="block w-full text-center px-8 py-3 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Training Objective */}
            <section className="py-16 md:py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Training Objective</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A structured, outcome-driven bootcamp designed to take you from concept to deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TRAINING_OBJECTIVES.map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all group"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <obj.icon size={20} className="text-violet-600" />
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed">{obj.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Audience Info */}
                    <div className="mt-12 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                    <Users size={24} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3">Who Is This For?</h3>
                                    <p className="text-violet-100 leading-relaxed">
                                        This bootcamp is designed for a mixed audience — both <strong className="text-white">engineering</strong> and <strong className="text-white">non-engineering</strong> professionals. Whether you&apos;re a developer wanting to build agents or a business professional wanting to understand and leverage AI automation, this program meets you where you are with optional split tracks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5-Day Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-violet-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            5-Day Curriculum
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A structured journey from foundations to production-ready agent systems, 8 hours per day.
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Day-by-Day Overview Cards */}
            <section className="py-20 px-6 bg-white border-y border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your 5-Day Journey</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">From zero to deploying your own AI agent system in just one week.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-300 via-violet-200 to-violet-100 -translate-x-1/2" />

                        <div className="space-y-12">
                            {CURRICULUM_DATA.map((day, i) => (
                                <motion.div
                                    key={day.day}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-violet-600 rounded-full items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                                        {day.day}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all hover:border-violet-200">
                                            <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <span className="md:hidden w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xs">{day.day}</span>
                                                <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Day {day.day}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{day.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{day.learningOutcome}</p>
                                        </div>
                                    </div>

                                    {/* Spacer for other side */}
                                    <div className="hidden md:block w-5/12" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative p-4 bg-white border border-slate-100 rounded-2xl shadow-xl">
                                <Image
                                    src="/sample-certificate.png"
                                    alt="Foundry Professional Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Certificate of Completion</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Upon successful completion of the bootcamp and capstone presentation, you will receive a verifiable digital certificate from The Foundry.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-violet-100 text-violet-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-amber-100 text-amber-600"><CheckCircle2 size={16} /></div>
                                    Capstone Project Portfolio
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                                    Gateway to Advanced AI Specializations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about the Agentic AI Bootcamp.</p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem question="Do I need coding experience to attend?" answer="No deep technical expertise is required. The bootcamp includes a non-engineering track with no-code/low-code tools. However, engineers will benefit from the optional Python-based agent building track." />
                        <FAQItem question="What is the batch size?" answer="The batch is limited to 15 participants to ensure personalized, hands-on attention from the instructor." />
                        <FAQItem question="Is this an online or in-person bootcamp?" answer="This is a fully in-person bootcamp conducted in Hyderabad. All 5 days are instructor-led, 8 hours per day." />
                        <FAQItem question="Will I receive a certificate?" answer="Yes. Upon successful completion of the bootcamp and your capstone presentation, you will receive a verifiable digital certificate from The Foundry." />
                        <FAQItem question="What will I build during the bootcamp?" answer="You will build multiple AI agents throughout the week — from single research and summarizer agents to multi-agent teams. On Day 5, you'll present a capstone project solving a real business or engineering problem." />
                        <FAQItem question="When does the bootcamp start?" answer="The tentative start date is February 23, 2026 (Week 4 of February). The bootcamp runs for 5 consecutive days." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-900">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Build Autonomous AI Agents?
                    </h2>
                    <p className="text-lg text-violet-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join a curated batch of 15 professionals in Hyderabad for an intensive, hands-on week of Agentic AI. Limited seats available.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/apply"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-500 transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Apply Now <ArrowUpRight size={18} />
                        </Link>
                        <div className="flex items-center gap-2 text-violet-300 text-sm">
                            <Users size={16} />
                            <span>Only 15 seats per batch</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
            >
                <span className="text-lg font-bold text-slate-900 pr-4">{question}</span>
                <span className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-slate-400" />
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
}
