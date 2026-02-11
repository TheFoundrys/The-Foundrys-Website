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
    Atom,
    Cpu,
    ShieldCheck,
    Network,
    BookOpen,
    Zap,
    ChevronDown,
    Microscope,
    Layers,
    Activity,
    Database,
    Binary
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetailsContent } from "@/components/role-details-content";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Curriculum Data
const CURRICULUM_DATA = [
    {
        week: 1,
        title: "What is Quantum Computing?",
        topics: [
            "Classical bits vs quantum bits (qubits)",
            "The Mechanics of Superposition",
            "Entanglement: The Power of Connection",
            "Measurement & Uncertainty: The Observer Effect",
            "Intuition Builders: Visualizing the Quantum World",
            "The Quantum Advantage: Realities and Myths",
            "Hardware Awareness: The Physical Reality",
            "Week 1 Quiz"
        ]
    },
    {
        week: 2,
        title: "Quantum Communication",
        topics: [
            "Information as Physical (Photons & No-Cloning)",
            "The 'Eavesdropping' Detection",
            "Quantum Key Distribution (QKD) vs. Classical Encryption",
            "Real-World Tech (Fiber, Satellites, & Quantum Internet)",
            "Activities (Polarization Demo) & Assessment"
        ]
    },
    {
        week: 3,
        title: "Quantum Sensing",
        topics: [
            "Limits of Classical Measurement",
            "Quantum Sensitivity (Spins & Atoms)",
            "Atomic Clocks & GPS",
            "Medical & Earth Applications (MRI, Gravimeters)",
            "Activities & Assessment"
        ]
    },
    {
        week: 4,
        title: "Quantum Materials & Devices",
        topics: [
            "Why Ordinary Materials Fail (Noise & Defects)",
            "Key Materials (Superconductors, Semiconductors, Diamonds)",
            "Engineering Challenges (Cooling & Scaling)",
            "Sustainability & Energy Costs",
            "Capstone Activity (Building the Stack)",
            "Final Assessment"
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
                            Week {activeContent?.week}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {activeContent?.title}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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

function HighlightCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function OutcomeItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 size={14} />
            </div>
            <span className="text-slate-700 font-medium">{text}</span>
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

export default function QuantumFundamentalsCoursePage() {
    const { currency, symbol } = useRegionalPricing();
    const originalPrice = COURSE_PRICING.quantumFundamentals.original[currency];
    const discountedPrice = COURSE_PRICING.quantumFundamentals.discounted[currency];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
                            <Award size={16} />
                            <span>Professional Certification Program</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Certified Professional <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Quantum Fundamentals</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                            Master the 4 pillars of the National Quantum Mission. A comprehensive introduction to the physics and applications of the next technological revolution.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-purple-100">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-purple-400" />
                                <span>No Equations First</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-purple-400" />
                                <span>4-Week Intensive</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <CheckCircle2 size={18} className="text-purple-400" />
                                <span>National Mission Aligned</span>
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
                                <p className="text-lg font-bold text-slate-900">4 Weeks</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">Hybrid</p>
                            </div>
                            <div className="border-r-0 border-slate-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                                <p className="text-lg font-bold text-slate-900">Upcoming</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                                <div className="flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="text-sm text-slate-400 line-through">{symbol}{originalPrice}</span>
                                    <span className="text-lg font-bold text-slate-900">{symbol}{discountedPrice}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href="https://compass.thefoundrys.com/courses/quantum-computing/fundamentals-of-quantum-technologies" className="block w-full text-center px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Overview */}
            <section id="overview" className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    {/* Pedagogical Philosophy */}
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-widest mb-6">
                            Pedagogical Philosophy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-sans tracking-tight">
                            "No equations first." <br />
                            <span className="text-purple-600">We build intuition before abstraction.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            We show impact before theory. This course connects quantum ideas to everyday technology, removing the fear of "quantum" and building curiosity and confidence.
                        </p>
                    </div>

                    {/* Target Audience & Outcomes Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
                        {/* Who is this for? */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                Who is this for?
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-full min-h-[50px] bg-blue-200 rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Undergraduates & Freshers</h4>
                                        <p className="text-slate-600 text-sm">Perfect for ECE, Physics, Materials, CS, or General Engineering students looking to future-proof their careers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-full min-h-[50px] bg-blue-200 rounded-full" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Curious Minds</h4>
                                        <p className="text-slate-600 text-sm">Anyone with high-school math & physics knowledge. No advanced prerequisites required.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What you will gain */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Award size={20} />
                                </div>
                                What you will gain
                            </h3>
                            <div className="space-y-4">
                                <OutcomeItem text="Explain 'quantum' in simple, confident language" />
                                <OutcomeItem text="Identify the 4 major quantum technology domains" />
                                <OutcomeItem text="Appreciate the role of materials & engineering" />
                                <OutcomeItem text="Pathway to advanced specializations" />
                                <OutcomeItem text="Align with India's National Quantum Mission" />
                            </div>
                        </div>
                    </div>

                    {/* The 4 Pillars / Highlights */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The 4 Pillars of Quantum Tech</h2>
                        <p className="text-slate-600">Explore the four critical domains that define the quantum revolution.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <HighlightCard icon={Cpu} title="Quantum Computing" desc="How can a computer think in more than 0s and 1s? Explore parallel possibilities and the power of qubits." />
                        <HighlightCard icon={Network} title="Quantum Communication" desc="Can communication be unhackable? Learn how physics itself acts as a security guard for information." />
                        <HighlightCard icon={Microscope} title="Quantum Sensing" desc="How can we measure things we cannot see? Use quantum systems as ultra-sensitive detectors." />
                        <HighlightCard icon={Layers} title="Quantum Materials" desc="What materials make quantum tech possible? Discover the hidden heroes like superconductors and diamond defects." />
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            What You&apos;ll Learn
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A structured 4-week journey through the quantum landscape
                        </p>
                    </div>

                    <CurriculumTabs />
                </div>
            </section>

            {/* Skills We Will Master */}
            <section className="py-2 px-1 bg-slate-900">
                <div className="container mx-auto max-w-12xl">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Technologies you'll learn
                        </h2>
                    </div>

                    <div className="space-y-10 overflow-hidden">
                        {[
                            {
                                logos: [
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qiskit-Logo.svg/640px-Qiskit-Logo.svg.png", name: "Qiskit" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", name: "Python" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter" },
                                    { url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", name: "AWS Braket" },
                                    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure Quantum" }
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
                                                className="bg-white rounded-xl h-32 w-36 flex flex-col items-center justify-center p-4 gap-2
                                                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
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
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Upgrade your profile with a certification that validates your understanding of the core technologies driving the future.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-purple-100 text-purple-600"><CheckCircle2 size={16} /></div>
                                    Validated skills in 4 Quantum Pillars
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                                    Pathway to Advanced Specializations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <FAQItem question="Do I need advanced physics or math?" answer="No. This course is designed to build intuition first. We use visual analogies and simple logic to explain complex concepts like superposition and entanglement." />
                        <FAQItem question="What is the National Quantum Mission?" answer="The NQM is an Indian government initiative to seed, nurture, and scale up scientific and industrial R&D. This course aligns with its goals to create a skilled quantum workforce." />
                        <FAQItem question="Is this a coding course?" answer="This is primarily a foundational theory and applications course. While we will show some Qiskit/Python demonstrations, you do not need to be a programmer to succeed." />
                        <FAQItem question="How will this help my career?" answer="Quantum is the next big wave after AI. Understanding it now puts you ahead of the curve in fields like cybersecurity, materials science, and finance." />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
