"use client";
import { useState } from "react";
import { ArrowUpRight, Clock, CheckCircle2, Zap, BrainCircuit, Rocket, Leaf, Star, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FUNDAMENTALS_PROGRAMS = [
    {
        category: "Deep Tech",
        icon: BrainCircuit,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        courses: [
            {
                id: "ai-funds",
                title: "Fundamentals of AI",
                duration: "3 Months",
                glimpse: [
                    "Neural Networks & Deep Learning",
                    "Computer Vision Basics",
                    "NLP & Transformer Models",
                    "AI Ethics & Safety"
                ]
            },
            {
                id: "cyber-funds",
                title: "Fundamentals of Cyber Security",
                duration: "3 Months",
                glimpse: [
                    "Network Security Principles",
                    "Ethical Hacking Basics",
                    "Cryptography Fundamentals",
                    "Incident Response"
                ]
            },
            {
                id: "quantum-funds",
                title: "Fundamentals of Quantum",
                duration: "3 Months",
                glimpse: [
                    "Qubits & Superposition",
                    "Quantum Gates & Circuits",
                    "Shor's & Grover's Algorithms",
                    "Quantum Hardware Overview"
                ]
            },
             {
                id: "blockchain-funds",
                title: "Fundamentals of Blockchain",
                duration: "3 Months",
                glimpse: [
                    "Distributed Ledger Technology",
                    "Smart Contracts (Solidity)",
                    "Consensus Mechanisms",
                    "DeFi Basics"
                ]
            }
        ]
    },
    {
        category: "Entrepreneurship",
        icon: Rocket,
        color: "text-amber-500",
        bg: "bg-amber-50",
        courses: [
            {
                id: "venture-funds",
                title: "Venture Building 101",
                duration: "3 Months",
                glimpse: [
                    "Ideation & Validation",
                    "Business Model Canvas",
                    "MVP Development",
                    "Go-to-Market Strategy"
                ]
            },
            {
                id: "strategy-funds",
                title: "Strategic Innovation",
                duration: "3 Months",
                glimpse: [
                    "Disruptive Theory",
                    "Blue Ocean Strategy",
                    "Corporate Innovation",
                    "Design Thinking"
                ]
            }
        ]
    },
    {
        category: "Sustainability",
        icon: Leaf,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        courses: [
            {
                id: "esg-funds",
                title: "ESG Strategy Fundamentals",
                duration: "3 Months",
                glimpse: [
                    "Circular Economy Principles",
                    "Carbon Footprint Analysis",
                    "Green Finance",
                    "Sustainability Reporting"
                ]
            }
        ]
    },
    {
        category: "Energy",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-50",
        courses: [
            {
                id: "energy-funds",
                title: "Renewable Systems Overview",
                duration: "3 Months",
                glimpse: [
                    "Solar PV Technology",
                    "Wind Energy Systems",
                    "Energy Storage Solutions",
                    "Smart Grid Basics"
                ]
            }
        ]
    }
];

export function ExecutiveCourses() {
    // This now serves as the wrapper for both sections for simplicity, or we can export two functions.
    // For cleaner code in page.tsx, let's export two named components from here.
    return (
        <div className="space-y-24 bg-slate-50 py-24">
             <FundamentalsSection />
             <ExecutiveSpotlight />
        </div>
    );
}

export function FundamentalsSection() {
    const [activeTab, setActiveTab] = useState("Deep Tech");

    return (
        <section id="fundamentals" className="container mx-auto px-6">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Foundations</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">The Fundamentals Series.</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Short-term, high-impact certifications designed for professionals. <br />
                    Gain foundational mastery in 3 months.
                </p>
            </div>

             {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {FUNDAMENTALS_PROGRAMS.map((cat) => (
                    <button
                        key={cat.category}
                        onClick={() => setActiveTab(cat.category)}
                        className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                            activeTab === cat.category 
                            ? "bg-slate-900 text-white shadow-lg scale-105" 
                            : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                        }`}
                    >
                        <cat.icon size={16} className={activeTab === cat.category ? "text-blue-400" : "opacity-50"} />
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {FUNDAMENTALS_PROGRAMS.find(c => c.category === activeTab)?.courses.map((course) => (
                        <CourseCard key={course.id} course={course} category={FUNDAMENTALS_PROGRAMS.find(c => c.category === activeTab)} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

export function ExecutiveSpotlight() {
    return (
        <section id="executive" className="bg-slate-900 py-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

             <div className="container mx-auto px-6 relative z-10">
                 <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-bold text-xs uppercase tracking-widest mb-6">
                            <Star size={12} className="fill-amber-400" /> Premium Executive Program
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Executive PG in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Leadership.</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            A capstone program tailored for C-Suite executives and VP-level leaders. Learn to define, strategize, and implement AI at an organizational scale.
                        </p>
                        
                        {/* <div className="grid grid-cols-2 gap-6 mb-10">
                             <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <div className="text-2xl font-bold text-white mb-1">6 Months</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Hybrid / Weekend</div>
                             </div>
                             <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <div className="text-2xl font-bold text-white mb-1">Capstone</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Industry Project</div>
                             </div>
                        </div> */}

                        <Link 
                            href="https://compass.thefoundrys.com/executive/ai-leadership"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-amber-500/25 active:scale-95"
                        >
                            Apply for Executive Cohort <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    <div className="lg:w-1/2">
                        {/* Premium Card Look */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-20">
                                    <BrainCircuit size={120} className="text-white" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Curriculum Highlights</h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Generative AI Strategy for Enterprise",
                                        "AI Governance, Ethics & Compliance",
                                        "Building High-Performance AI Teams", 
                                        "ROI Analysis of AI Implementation",
                                        "Case Studies: Fortune 500 AI Transformations"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={12} className="text-blue-400" />
                                            </div>
                                            <span className="text-slate-300 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-8 border-t border-slate-800 flex items-center gap-4">
                                     <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-slate-500">
                                                {/* Placeholder avatars */}
                                                <Building2 size={14} />
                                            </div>
                                        ))}
                                     </div>
                                     <div className="text-sm">
                                        <p className="text-white font-bold">Industry Mentors</p>
                                        <p className="text-slate-500">Google, Microsoft, OpenAI</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </section>
    );
}

function CourseCard({ course, category }: { course: any, category: any }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col group h-full">
            <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.bg} ${category.color} flex items-center justify-center mb-6`}>
                    <category.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-6">
                    <Clock size={14} className="text-blue-500" />
                    <span>{course.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 mx-1"></span>
                    <span>Foundations</span>
                </div>

                {/* Curriculum Glimpse */}
                <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100/50">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Curriculum Glimpse</span>
                    <ul className="space-y-2">
                        {course.glimpse.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-auto pt-6">
                <Link 
                    href={`https://compass.thefoundrys.com/course/${course.id}`} // Placeholder link
                    target="_blank"
                    className="w-full py-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-center hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                    View on Compass <ArrowUpRight size={16} className="text-slate-400 group-hover/btn:text-blue-600" />
                </Link>
            </div>
        </div>
    )
}
