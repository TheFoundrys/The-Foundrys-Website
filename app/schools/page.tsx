"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ShieldCheck, Atom, Network, Rocket, Cpu, Leaf, Zap, Globe, Sparkles } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import React from "react";

const SCHOOLS = [
    {
        id: "01",
        name: "Deep Tech",
        subtitle: "The Intelligence Core",
        desc: "Mastering the fundamental layers of the intelligence age. Where mathematics meets industrial reality.",
        color: "text-blue-600",
        bgGradient: "from-blue-50 to-indigo-50/50",
        iconBg: "bg-blue-600",
        accent: "blue",
        programs: [
            { title: "Artificial Intelligence", desc: "Intelligence Layer", href: "/schools/ai", icon: BrainCircuit },
            { title: "Cyber Security", desc: "Defense Layer", href: "/schools/cyber", icon: ShieldCheck },
            { title: "Quantum Computing", desc: "The Q-Layer", href: "/schools/quantum-computing", icon: Atom },
            { title: "Blockchain", desc: "Trust Layer", href: "/schools/blockchain", icon: Network },
        ]
    },
    {
        id: "02",
        name: "Entrepreneurship",
        subtitle: "The Strategist Core",
        desc: "Building the vehicles of change. From zero-to-one venture building to global market dominance.",
        color: "text-amber-600",
        bgGradient: "from-amber-50 to-orange-50/50",
        iconBg: "bg-amber-600",
        accent: "amber",
        programs: [
            { title: "Venture Building", desc: "Zero to One", href: "/schools/venture-building", icon: Rocket },
            { title: "MBA in AI", desc: "Integrated 3+1", href: "/schools/certified-innovator", icon: Cpu },
            { title: "MBA in Cyber Venture", desc: "Integrated 3+1", href: "/schools/certified-innovator", icon: ShieldCheck },
        ]
    },
    {
        id: "03",
        name: "Sustainability",
        subtitle: "The Resilience Core",
        desc: "Engineering for a permanent future. Solving the planet's hardest problems with industrial precision.",
        color: "text-emerald-600",
        bgGradient: "from-emerald-50 to-teal-50/50",
        iconBg: "bg-emerald-600",
        accent: "emerald",
        programs: [
            { title: "ESG & Strategy", desc: "Strategic Responsibility", href: "/schools/sustainability", icon: Leaf },
            { title: "AI x Green Tech", desc: "Engineering Duty", href: "/programs/sustainability-in-the-age-of-ai", icon: BrainCircuit },
        ]
    },
    {
        id: "04",
        name: "Energy",
        subtitle: "The Power Core",
        desc: "Fueling the next civilization. Mastering renewable systems and sovereign grid infrastructure.",
        color: "text-cyan-600",
        bgGradient: "from-cyan-50 to-sky-50/50",
        iconBg: "bg-cyan-600",
        accent: "cyan",
        programs: [
            { title: "Renewable Energy", desc: "Powering Future", href: "/schools/renewable-energy", icon: Zap },
        ]
    }
];

export default function SchoolsPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Navbar />

            {/* Vibrant Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
                {/* Mesh Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(at_top_right,#dbeafe_0%,#ffffff_50%),radial-gradient(at_bottom_left,#fef3c7_0%,#ffffff_50%)] opacity-70" />
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-400/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

                <div className="container mx-auto max-w-7xl pt-16 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-8 shadow-sm">
                            <Sparkles size={12} /> The Foundry Academic Map
                        </div>
                        <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-12 text-slate-900 drop-shadow-sm">
                            Schools of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Thought.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            We bridge the void between academic theory and deep tech velocity. <br className="hidden md:block" />
                            Each school is a pillar of the next civilization.
                        </p>
                        
                        {/* Scroll Down Indicator */}
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-flex items-center gap-3 p-4 bg-white rounded-full shadow-xl shadow-slate-200 border border-slate-100">
                             <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
                                <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 bg-blue-600 rounded-full" />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pr-2">The Pillars</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* School Pillars */}
            {SCHOOLS.map((school, index) => (
                <section key={school.id} id={school.name.toLowerCase()} className={`py-32 px-6 relative overflow-hidden bg-gradient-to-b ${school.bgGradient} border-t border-white shadow-inner`}>
                    <div className="container mx-auto max-w-7xl">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                            
                            {/* Content Side */}
                            <div className="flex-1 space-y-10 text-center lg:text-left">
                                <motion.div 
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <span className={`text-9xl font-black ${school.color} opacity-10 select-none tracking-tighter`}>{school.id}</span>
                                        <div className={`h-px w-20 bg-gradient-to-r from-${school.accent}-600 to-transparent`} />
                                    </div>
                                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-slate-900">
                                        {school.name}
                                    </h2>
                                    <p className={`text-sm font-black uppercase tracking-[0.3em] ${school.color}`}>{school.subtitle}</p>
                                    <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                                        {school.desc}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Programs Side - Vibrant Glassmorphism Grid */}
                            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                                {/* Decorative Glow behind cards */}
                                <div className={`absolute inset-0 bg-${school.accent}-400/20 blur-[100px] rounded-full pointer-events-none`} />

                                {school.programs.map((prog) => (
                                    <Link 
                                        key={prog.href} 
                                        href={prog.href} 
                                        className="group relative p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:bg-white transition-all duration-500 hover:-translate-y-2 ring-1 ring-white"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl ${school.iconBg} text-white flex items-center justify-center mb-8 shadow-lg shadow-${school.accent}-600/30 group-hover:scale-110 transition-transform duration-500`}>
                                            <prog.icon size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{prog.title}</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{prog.desc}</p>
                                        
                                        <div className="absolute top-8 right-8 text-slate-200 group-hover:text-blue-500 transition-colors">
                                            <ArrowUpRight size={20} />
                                        </div>

                                        <div className={`mt-6 h-0.5 w-0 bg-${school.accent}-600 group-hover:w-full transition-all duration-500`} />
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>
            ))}

            {/* High-Impact Outcome Section */}
            <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#1e3a8a_0%,#0f172a_100%)] opacity-80" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                
                <div className="container mx-auto max-w-5xl text-center relative z-10 space-y-12">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                            Master the <span className="text-blue-400">Blueprint.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                            Every program is engineered to create a direct path from classroom theory to deep tech dominance. Join the next generation of architects.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
                            <Link href="/apply" className="px-12 py-5 bg-white text-slate-950 rounded-full font-black text-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                Apply to The Forge
                            </Link>
                            <Link href="/about" className="px-12 py-5 border-2 border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-3">
                                <Globe size={20} className="text-blue-400" /> Our Global Impact
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
