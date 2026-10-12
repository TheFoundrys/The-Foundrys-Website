"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Target, Users, Zap } from "lucide-react";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export function StrategyClient() {
    const [selectedCareer, setSelectedCareer] = useState(0);
    const { symbol, currency } = useRegionalPricing();

    const originalPrice = COURSE_PRICING.certifiedInnovator.original[currency];

    return (
        <main className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-850 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Hero & Intro & Specs (Combined into unified white card) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
                <section className="bg-white p-8 sm:p-12 md:p-16 text-neutral-900 overflow-hidden relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1 text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-block border border-neutral-200 bg-white px-3 py-1 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm"
                                >
                                    <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold">
                                        The Foundry Certified Innovator (FCI)
                                    </span>
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-5xl font-bold leading-tight text-[#031a57] mb-6 tracking-tight font-serif"
                                >
                                    The Fellowship for the Next Generation of <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold">Innovators, Founders, and Systems-Thinkers.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-base text-neutral-600 mb-8 max-w-xl leading-relaxed font-light"
                                >
                                    The Foundry’s Certified Innovator (FCI) Fellowship is an elite, 4-week intensive program designed for Team AI Enthusiasts,Team AI Founders, Team AI Innovators , Team CEOs. This is not a classroom experience; it is a professional-grade incubator.
                                </motion.p>
                            </div>

                            {/* Visual: Triple Threat Diagram */}
                            <div className="flex-1 w-full flex justify-center scale-95 lg:scale-100">
                                <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
                                    {/* Center Intersection Glow */}
                                    <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-50/50 rounded-full blur-3xl z-0"></div>

                                    {/* Circle 1: Technical */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-amber-200/50 bg-amber-200/60 backdrop-blur-sm flex items-start justify-center pt-8 z-10 mix-blend-multiply"
                                    >
                                        <span className="font-bold text-[9px] tracking-[0.2em] uppercase mt-4 text-amber-900/70 font-mono">Technical</span>
                                    </motion.div>
                                    {/* Circle 2: Design */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-8 left-2 w-56 h-56 rounded-full border border-cyan-200/50 bg-cyan-200/60 backdrop-blur-sm flex items-end justify-start pb-16 pl-10 z-10 mix-blend-multiply"
                                    >
                                        <span className="font-bold text-[9px] tracking-[0.2em] uppercase text-cyan-900/70 font-mono">Design</span>
                                    </motion.div>
                                    {/* Circle 3: Economic */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute bottom-8 right-2 w-56 h-56 rounded-full border border-emerald-200/50 bg-emerald-200/60 backdrop-blur-sm flex items-end justify-end pb-16 pr-8 z-10 mix-blend-multiply"
                                    >
                                        <span className="font-bold text-[9px] tracking-[0.2em] uppercase text-emerald-900/70 font-mono">Economic</span>
                                    </motion.div>

                                    {/* Center Intersection Text */}
                                    <div className="absolute top-[calc(50%-20px)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none">
                                        <div className="relative">
                                            <span className="block text-[8px] uppercase tracking-widest font-bold text-neutral-500 mb-0.5">The</span>
                                            <span className="block text-xs font-black uppercase tracking-wider text-neutral-900 leading-none">FCI Fellow</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specs Bar */}
                <div className="bg-[#F7F7F4] border-t border-slate-200/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-14 flex-1 text-left w-full">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Length</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">4 Weeks Intensive</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Delivery Mode</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">Hybrid / On-Campus</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Campus Location</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">Hyderabad, India</p>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Fee</p>
                            <p className="text-base sm:text-lg font-bold text-slate-800">{symbol}{originalPrice}</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <Link href="/apply" className="block w-full text-center px-8 py-3.5 bg-[#002f86] text-white border border-[#002f86] font-bold rounded-xl hover:bg-[#002f86]/90 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,47,134,0.15)] whitespace-nowrap text-sm">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 2: The "Why" (Consolidated into single pastel card) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DDE7DE] border border-[#c8dac7] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-[#DDE7DE] relative overflow-hidden">
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 text-blue-800 mb-4 bg-blue-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
                                    <Zap size={14} />
                                    <span>The Purpose</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif mb-6 leading-tight">
                                    Why the FCI?
                                </h2>
                                <p className="text-base text-slate-650 leading-relaxed font-light">
                                    While standard business classes likely teach students how to start a business (Founder), this program focuses on how they can solve a systemic problem in the community or an industry.
                                </p>
                            </div>

                            {/* Visual: Shift Infographic */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] flex items-center justify-center text-white">
                                                <span className="text-lg">📚</span>
                                            </div>
                                            <span className="font-bold text-slate-800 font-serif">The Qualifier</span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold font-mono">Consumer</span>
                                    </div>

                                    <div className="flex justify-center -my-2 z-10">
                                        <div className="bg-slate-50 text-slate-800 p-2 rounded-full border border-slate-200">
                                            <ArrowRight size={20} className="rotate-90" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] flex items-center justify-center text-white">
                                                <span className="text-lg">🚀</span>
                                            </div>
                                            <span className="font-bold text-slate-800 font-serif">The Foundry Forge </span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold font-mono">Academy</span>
                                    </div>

                                    <div className="flex justify-center -my-2 z-10">
                                        <div className="bg-slate-50 text-slate-800 p-2 rounded-full border border-slate-200">
                                            <ArrowRight size={20} className="rotate-90" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] flex items-center justify-center text-white">
                                                <span className="text-lg">💡</span>
                                            </div>
                                            <span className="font-bold text-slate-800 font-serif">The Incubation Year </span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold font-mono">The Project</span>
                                    </div>

                                    <div className="flex justify-center -my-2 z-10">
                                        <div className="bg-slate-50 text-slate-800 p-2 rounded-full border border-slate-200">
                                            <ArrowRight size={20} className="rotate-90" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200/50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] flex items-center justify-center text-white">
                                                <span className="text-lg">🎯</span>
                                            </div>
                                            <span className="font-bold text-slate-800 font-serif">The Exhibition Year</span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold font-mono">Creator</span>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <p className="text-xs text-neutral-400 font-mono">The shift from Consumer to Creator.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 3: The "How" (The Forge: How We Build) */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-12 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif mb-4">The Forge: How We Build.</h2>
                            <p className="text-base text-slate-500 max-w-2xl font-light leading-relaxed">The program follows a 5-day-a-week, 3-hour-daily high-intensity format using our proprietary &quot;Foundry Framework&quot;.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6 mb-6">
                            {[
                                { week: "01", title: "Design Thinking", desc: "We deconstruct 'Success Mechanics'. See the world as systems and frictions." },
                                { week: "02", title: "Innovation Project", desc: "Using human-centered design, move from Foundry to Field. Interview, map empathy, prototype." },
                                { week: "03", title: "Venture Challenge", desc: "Business Logic. Build unit economics, revenue architectures, and market-entry strategies." },
                                { week: "04", title: "Agile Entrepreneurship", desc: "The final sprint. Pivot under pressure using Scrum. Finalize Venture Dossier." }
                            ].map((item, i) => (
                                <div key={i} className="group p-6 bg-slate-50 border border-slate-200/60 rounded-2xl hover:border-[#002f86]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl font-black text-neutral-200 group-hover:text-[#002f86] mb-4 transition-colors font-mono">
                                        {item.week}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-[#031a57] font-serif">{item.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 4: Career Paths */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DDE7DE] border border-[#c8dac7] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-[#DDE7DE]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif mb-4">Career Paths</h2>
                            <p className="text-base text-slate-500 font-light leading-relaxed">
                                Roles at the intersection of innovation and entrepreneurship
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* Left: Roles */}
                            <div className="space-y-3">
                                {(() => {
                                    const roles = [
                                        {
                                            title: "Innovation Strategist",
                                            salary: "₹15-30 LPA",
                                            avgSalary: "₹22.5 LPA",
                                            growth: "+18-25% annually",
                                            description: "Lead innovation initiatives and strategic planning for organizations. Bridge technology, business, and design thinking.",
                                            skills: ["Design Thinking", "Strategy", "Innovation Management"],
                                            demand: "Very High",
                                            icon: "💼"
                                        },
                                        {
                                            title: "Venture Builder",
                                            salary: "₹18-40 LPA",
                                            avgSalary: "₹29 LPA",
                                            growth: "+20-30% annually",
                                            description: "Build and scale new ventures from concept to market. Lead cross-functional teams and drive business model innovation.",
                                            skills: ["Business Development", "Product Strategy", "Team Building", "Market Analysis"],
                                            demand: "Very High",
                                            icon: "🚀"
                                        },
                                        {
                                            title: "Product Innovation Lead",
                                            salary: "₹20-35 LPA",
                                            avgSalary: "₹27.5 LPA",
                                            growth: "+22-28% annually",
                                            description: "Drive product innovation and development. Transform ideas into market-ready solutions with user-centered design.",
                                            skills: ["Product Management", "UX Design", "Agile Methods", "Market Research"],
                                            demand: "High",
                                            icon: "⚡"
                                        },
                                        {
                                            title: "Startup Founder / Co-Founder",
                                            salary: "Variable (Equity-based)",
                                            avgSalary: "₹25-50 LPA+",
                                            growth: "High potential",
                                            description: "Launch and scale your own venture. Build solutions to systemic problems with entrepreneurial mindset and execution.",
                                            skills: ["Entrepreneurship", "Leadership", "Fundraising", "Execution"],
                                            demand: "Self-Created",
                                            icon: "🎯"
                                        },
                                        {
                                            title: "Business Model Designer",
                                            salary: "₹16-28 LPA",
                                            avgSalary: "₹22 LPA",
                                            growth: "+16-22% annually",
                                            description: "Design and validate innovative business models. Create value propositions and revenue architectures for new ventures and corporate innovation.",
                                            skills: ["Business Model Canvas", "Value Proposition Design", "Market Validation"],
                                            demand: "High",
                                            icon: "📊"
                                        },
                                        {
                                            title: "Innovation Consultant",
                                            salary: "₹18-35 LPA",
                                            avgSalary: "₹26.5 LPA",
                                            growth: "+15-20% annually",
                                            description: "Advise organizations on innovation strategy and transformation. Help companies build innovation capabilities and launch new ventures.",
                                            skills: ["Strategic Consulting", "Change Management", "Workshop Facilitation"],
                                            demand: "High",
                                            icon: "💡"
                                        }
                                    ];

                                    return roles.map((role, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedCareer(i)}
                                            className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all text-left ${selectedCareer === i
                                                ? 'bg-white border-2 border-[#002f86]/40 shadow-md'
                                                : 'bg-white/60 border border-slate-200/60 hover:border-[#002f86]/30 hover:bg-white'
                                                }`}
                                        >
                                            <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${selectedCareer === i
                                                ? 'bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)]'
                                                : 'bg-neutral-100'
                                                }`}>
                                                <span className={`text-lg ${selectedCareer === i ? 'text-white' : 'text-neutral-600'
                                                    }`}>{role.icon}</span>
                                            </div>
                                            <span className={`text-sm font-medium leading-tight flex-1 ${selectedCareer === i ? 'text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] font-bold' : 'text-neutral-900'
                                                }`}>{role.title}</span>
                                        </button>
                                    ));
                                })()}
                            </div>

                            {/* Right: Annual Income Details */}
                            <div className="bg-white/90 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
                                {(() => {
                                    const roles = [
                                        {
                                            title: "Innovation Strategist",
                                            salary: "₹15-30 LPA",
                                            avgSalary: "₹22.5 LPA",
                                            growth: "+18-25% annually",
                                            description: "Lead innovation initiatives and strategic planning for organizations. Bridge technology, business, and design thinking.",
                                            skills: ["Design Thinking", "Strategy", "Innovation Management"],
                                            demand: "Very High",
                                            icon: "💼"
                                        },
                                        {
                                            title: "VMR Builder",
                                            salary: "₹18-40 LPA",
                                            avgSalary: "₹29 LPA",
                                            growth: "+20-30% annually",
                                            description: "Build and scale new ventures from concept to market. Lead cross-functional teams and drive business model innovation.",
                                            skills: ["Business Development", "Product Strategy", "Team Building", "Market Analysis"],
                                            demand: "Very High",
                                            icon: "🚀"
                                        },
                                        {
                                            title: "Product Innovation Lead",
                                            salary: "₹20-35 LPA",
                                            avgSalary: "₹27.5 LPA",
                                            growth: "+22-28% annually",
                                            description: "Drive product innovation and development. Transform ideas into market-ready solutions with user-centered design.",
                                            skills: ["Product Management", "UX Design", "Agile Methods", "Market Research"],
                                            demand: "High",
                                            icon: "⚡"
                                        },
                                        {
                                            title: "Startup Founder / Co-Founder",
                                            salary: "Variable (Equity-based)",
                                            avgSalary: "₹25-50 LPA+",
                                            growth: "High potential",
                                            description: "Launch and scale your own venture. Build solutions to systemic problems with entrepreneurial mindset and execution.",
                                            skills: ["Entrepreneurship", "Leadership", "Fundraising", "Execution"],
                                            demand: "Self-Created",
                                            icon: "🎯"
                                        },
                                        {
                                            title: "Business Model Designer",
                                            salary: "₹16-28 LPA",
                                            avgSalary: "₹22 LPA",
                                            growth: "+16-22% annually",
                                            description: "Design and validate innovative business models. Create value propositions and revenue architectures for new ventures and corporate innovation.",
                                            skills: ["Business Model Canvas", "Value Proposition Design", "Market Validation"],
                                            demand: "High",
                                            icon: "📊"
                                        },
                                        {
                                            title: "Innovation Consultant",
                                            salary: "₹18-35 LPA",
                                            avgSalary: "₹26.5 LPA",
                                            growth: "+15-20% annually",
                                            description: "Advise organizations on innovation strategy and transformation. Help companies build innovation capabilities and launch new ventures.",
                                            skills: ["Strategic Consulting", "Change Management", "Workshop Facilitation"],
                                            demand: "High",
                                            icon: "💡"
                                        }
                                    ];

                                    const selected = roles[selectedCareer];

                                    return (
                                        <>
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="w-14 h-14 bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] rounded-xl flex items-center justify-center shrink-0">
                                                    <span className="text-2xl">{selected.icon}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 font-serif">{selected.title}</h3>
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)] text-white rounded-full">
                                                        <span className="text-xs font-semibold">Salary Range:</span>
                                                        <span className="text-base font-bold">{selected.salary}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-3 mb-6">
                                                <div className="text-center p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                    <span className="block text-xs text-neutral-500 mb-1">Average</span>
                                                    <span className="block text-sm font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)]">{selected.avgSalary}</span>
                                                </div>
                                                <div className="text-center p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                    <span className="block text-xs text-neutral-500 mb-1">Growth</span>
                                                    <span className="block text-sm font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)]">{selected.growth}</span>
                                                </div>
                                                <div className="text-center p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                    <span className="block text-xs text-neutral-500 mb-1">Demand</span>
                                                    <span className="block text-sm font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right_bottom,lab(44.0605_29.0279_-86.0352)_0%,lab(23.3911_24.6978_-50.4718)_100%)]">{selected.demand}</span>
                                                </div>
                                            </div>

                                            <div className="mb-6 text-left">
                                                <h4 className="text-sm font-bold text-[#031a57] uppercase tracking-wider mb-3">Role Overview</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed font-light">{selected.description}</p>
                                            </div>

                                            <div className="text-left">
                                                <h4 className="text-sm font-bold text-[#031a57] uppercase tracking-wider mb-3 font-serif">Key Skills Required</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selected.skills.map((skill, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs rounded-xl"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-slate-200/60 text-left">
                                                <p className="text-xs text-slate-500 leading-relaxed">
                                                    * Salary data is indicative and based on industry averages. Actual compensation may vary based on experience, location, and company size.
                                                </p>
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Certification Block */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#031a57] font-serif">Certification</h2><br />
                            <p className="text-base text-slate-500 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                                FCI Fellows receive a professional credential that validates their innovation and entrepreneurship expertise.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Certificate */}
                            <div className="order-2 md:order-1">
                                <div className="relative p-3 bg-slate-50 border border-slate-200 rounded-2xl shadow-xl">
                                    <div className="relative z-10">
                                        <img
                                            src="/sample-certificate.png"
                                            alt="Sample Certificate"
                                            className="w-full h-auto rounded-lg shadow-sm"
                                        />
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                                </div>
                            </div>

                            {/* Right: Text Content */}
                            <div className="order-1 md:order-2">
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                                        <div className="text-left">
                                            <strong className="block text-[#031a57] font-serif text-lg">Digital Credential</strong>
                                            <span className="text-slate-500 text-sm font-light">Blockchain-verified certificate with unique ID, shareable on LinkedIn and professional networks.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                                        <div className="text-left">
                                            <strong className="block text-[#031a57] font-serif text-lg">Physical Certificate</strong>
                                            <span className="text-slate-500 text-sm font-light">Premium quality certificate with embossed seal, suitable for framing and display.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                                        <div className="text-left">
                                            <strong className="block text-[#031a57] font-serif text-lg">Industry Recognition</strong>
                                            <span className="text-slate-500 text-sm font-light">Recognized by our network of partner organizations, universities, and innovation hubs.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                                        <div className="text-left">
                                            <strong className="block text-[#031a57] font-serif text-lg">Lifetime Access</strong>
                                            <span className="text-slate-500 text-sm font-light">Join our alumni network with ongoing resources, events, and career support.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <Footer />
        </main>
    );
}
