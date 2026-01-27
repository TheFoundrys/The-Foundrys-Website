"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Terminal, Cpu, Network, ShieldCheck, BrainCircuit, Calendar, Wifi, Target, ArrowDown, FileText, UserCheck, Rocket, Code, Database, Server, Cloud, Box, Activity, GitMerge, Ship, Flame, Link as LinkIcon, Globe, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// Custom Gradient Style
const customGradient = "linear-gradient(to right, lab(44.0605 29.0279 -86.0352) 0%, lab(38.4009 52.6132 -92.3857) 100%)";
const textGradientClass = "text-transparent bg-clip-text";

const domains = ["Artificial Intelligence", "Cyber Security", "Blockchain", "Quantum Computing"];

export default function EntryLevelProgramPage() {
    const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

    useEffect(() => {
        document.title = "Entry Level Programs | The Foundry";
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDomainIndex((prev) => (prev + 1) % domains.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-slate-900 border-b border-slate-800">

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pfl_hero_bg.png"
                        alt="Entry Level Learning"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900 z-10" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-20">
                    <div className="max-w-4xl pt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-2">
                                <p className="text-3xl md:text-4xl text-slate-400 font-medium tracking-wide">Start Your Journey in</p>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                                    Entry Level
                                    <br />
                                    <span className="inline-block relative min-h-[1.2em] mt-2">
                                        {domains.map((domain, index) => (
                                            <motion.span
                                                key={domain}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity: currentDomainIndex === index ? 1 : 0,
                                                    y: currentDomainIndex === index ? 0 : 20,
                                                }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                style={{ backgroundImage: customGradient }}
                                                className={`${textGradientClass} ${currentDomainIndex === index ? 'inline-block' : 'absolute top-0 left-0'}`}
                                            >
                                                {domain}
                                            </motion.span>
                                        ))}
                                    </span>
                                </h1>
                            </div>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl font-medium">
                                Build a strong foundation in emerging technologies. Designed for beginners to understand the core concepts of Artificial Intelligence, Cyber Security, Quantum Computing, and Blockchain.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/apply"
                                    style={{ background: customGradient }}
                                    className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg opacity-90 hover:opacity-100"
                                >
                                    Start Application <ArrowUpRight size={18} />
                                </Link>
                                <a
                                    href="#curriculum"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                                >
                                    Explore Domains
                                </a>
                            </div>

                            {/* Strategic Program Specs - Integrated into Hero */}
                            <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                                <HeroStat icon={<Calendar size={20} />} label="Duration" value="3 Months" sub="Intensive Cohort" />
                                <HeroStat icon={<Wifi size={20} />} label="Format" value="Hybrid" sub="In-Person + Virtual" />
                                <HeroStat icon={<Zap size={20} />} label="Approach" value="Applied" sub="Concept + Practice" />
                                <HeroStat icon={<Target size={20} />} label="Outcome" value="Ready" sub="For Specialization" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Value Creation - Why The Foundry? */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Entry Level Edge</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Acquire the fundamental technical expertise and applied skills required to start your career in the modern digital economy.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden shrink-0">
                                    <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                                    <div className="relative z-10 text-slate-900">
                                        <Target size={24} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Deep Domain Mastery</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Move beyond surface-level tutorials. We drill down to the core logic and mathematical foundations of emerging tech, giving you the confidence and authority that comes from true understanding.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden shrink-0">
                                    <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                                    <div className="relative z-10 text-slate-900">
                                        <Network size={24} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Your Network is Your Net Worth</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Learning alone is slow. Join a curated cohort of ambitious peers who are as hungry as you are. &quot;Iron sharpens iron&quot;—you will grow faster by coding, debugging, and launching projects alongside the best.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden shrink-0">
                                    <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                                    <div className="relative z-10 text-slate-900">
                                        <Terminal size={24} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Stop Watching, Start Building</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Theory is free online. Here, you focus on the friction of practice. You will spend 60% of your time in the &quot;Build Loop&quot;—solving real-world problem statements, fixing bugs, and deploying live solutions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden shrink-0">
                                    <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                                    <div className="relative z-10 text-slate-900">
                                        <BrainCircuit size={24} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Engineer, Don’t Just Code</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Anyone can memorize syntax. We train you to think like a Senior Engineer. You will learn to deconstruct complex problems, understand why systems work, and architect scalable solutions from the ground up.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Domains */}
            <section className="py-24 px-6 bg-white border-y border-slate-200" id="curriculum">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Choose your career path</h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                            Precision-engineered learning tracks. Each domain is structured as a comprehensive, standalone entry-level program allowing you to build a strong foundation in the technology defining your future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DomainCard
                            title="Artificial Intelligence"
                            tagline="From Logic to Intelligence."
                            desc="Move beyond basic Python. Master Neural Networks, NLP, and Computer Vision to build systems that can see, read, and decide."
                            icon={<BrainCircuit />}
                            href="/programs/entry-level/ai"
                        />
                        <DomainCard
                            title="Cyber Security"
                            tagline="Defend the Digital Frontier."
                            desc="The world is digital, and it is under attack. Learn the offensive and defensive strategies required to secure networks and data."
                            icon={<ShieldCheck />}
                            href="/programs/professional/cyber-security"
                        />
                        <DomainCard
                            title="Quantum Computing"
                            tagline="The Next Computational Revolution."
                            desc="Prepare for the paradigm shift. Understanding Qubits and Superposition today is like learning the Internet in 1990."
                            icon={<Cpu />}
                            href="/programs/professional/quantum-computing"
                        />
                        <DomainCard
                            title="Blockchain"
                            tagline="Architect the Trust Layer."
                            desc="Explore the technology behind Web3. Learn how decentralized ledgers and smart contracts are rewriting the rules of finance and ownership."
                            icon={<Network />}
                            href="/programs/professional/blockchain"
                        />
                    </div>
                </div>
            </section>

            {/* The Progression (Roadmap) */}
            <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">The Progression</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Architected for Domain Authority. Our 3-month methodology is designed to bridge the gap between academic theory and professional application.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-emerald-500/50 z-0"></div>

                        {/* Phase I */}
                        <div className="relative z-10 group">
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 border-4 border-slate-900 shadow-[0_0_0_4px_rgba(59,130,246,0.5)] flex items-center justify-center mb-8 bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">01</span>
                            </div>
                            <div className="text-center px-4">
                                <div className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">Weeks 1-4</div>
                                <h3 className="text-2xl font-bold mb-3">The Bedrock</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    First Principles & Core Protocols. We strip away abstraction to focus on the mathematical and logical foundations. Deconstruct the underlying theories that govern the technology.
                                </p>
                            </div>
                        </div>

                        {/* Phase II */}
                        <div className="relative z-10 group">
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 border-4 border-slate-900 shadow-[0_0_0_4px_rgba(168,85,247,0.5)] flex items-center justify-center mb-8 bg-gradient-to-br from-purple-600 to-purple-800 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">02</span>
                            </div>
                            <div className="text-center px-4">
                                <div className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2">Weeks 5-8</div>
                                <h3 className="text-2xl font-bold mb-3">Vertical Immersion</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    Tools, Tactics, & Simulation. Theory transitions into practice. Enter a &quot;high-fidelity&quot; environment—utilizing industry tools, running simulations, and dissecting case studies.
                                </p>
                            </div>
                        </div>

                        {/* Phase III */}
                        <div className="relative z-10 group">
                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 border-4 border-slate-900 shadow-[0_0_0_4px_rgba(16,185,129,0.5)] flex items-center justify-center mb-8 bg-gradient-to-br from-emerald-600 to-emerald-800 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">03</span>
                            </div>
                            <div className="text-center px-4">
                                <div className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-2">Weeks 9-12</div>
                                <h3 className="text-2xl font-bold mb-3">The Capstone Defense</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    Proof of Competence. Define and deliver a comprehensive final output—a deployed system, audit, or research implementation. Document and defend your work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Career Impact */}
            <section className="py-24 px-6 bg-white border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Career Impact</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">We don&apos;t just offer knowledge. We equip you with the assets you need to accelerate your trajectory.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
                            <div className="text-6xl font-black text-slate-200 mb-6 group-hover:text-blue-100 transition-colors">01</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Production Portfolio</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                <strong className="text-slate-900">Your Proof of Competence.</strong> You will finish the track with a GitHub portfolio of 3-5 distinct projects and one major Capstone. When a recruiter asks, &quot;Can you do this?&quot;, you won&apos;t just say &quot;Yes&quot;—you will show them the code.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
                            <div className="text-6xl font-black text-slate-200 mb-6 group-hover:text-purple-100 transition-colors">02</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Verified Credential</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                <strong className="text-slate-900">Your Signal of Quality.</strong> Upon successful assessment, you earn a Certified Professional Credential from The Foundry. This is a digitally verifiable asset that signals your technical rigor to employers and clients worldwide.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
                            <div className="text-6xl font-black text-slate-200 mb-6 group-hover:text-emerald-100 transition-colors">03</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The Foundry Network</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                <strong className="text-slate-900">Your Access.</strong> Certification is not the exit; it is the entry. You gain access to The Foundry’s professional community, mentorship channels, and exclusive industry events in Hyderabad—connecting you with the people who are building the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section - Scrolling Ticker */}
            <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="container mx-auto max-w-5xl mb-12 px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900">Tools You Will Master</h2>
                        <p className="text-slate-500 mt-2">Industry-standard languages, frameworks, and platforms.</p>
                    </div>
                </div>

                {/* Scrolling Container */}
                <div className="relative w-full flex overflow-hidden mask-gradient-x">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-12 items-center whitespace-nowrap py-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60 // Slower duration for longer list
                        }}
                    >
                        {/* Tool List */}
                        <ToolItem name="Python" icon={<Terminal size={24} />} color="text-blue-500" />
                        <ToolItem name="TensorFlow" icon={<BrainCircuit size={24} />} color="text-orange-500" />
                        <ToolItem name="PyTorch" icon={<Flame size={24} />} color="text-red-500" />
                        <ToolItem name="OpenAI" icon={<Cpu size={24} />} color="text-green-500" />
                        <ToolItem name="LangChain" icon={<LinkIcon size={24} />} color="text-slate-500" />
                        <ToolItem name="Pandas" icon={<Database size={24} />} color="text-indigo-500" />
                        <ToolItem name="NumPy" icon={<Code size={24} />} color="text-blue-400" />
                        <ToolItem name="ScikitLearn" icon={<Activity size={24} />} color="text-orange-400" />
                        <ToolItem name="Docker" icon={<Box size={24} />} color="text-blue-600" />
                        <ToolItem name="Kubernetes" icon={<Ship size={24} />} color="text-blue-700" />
                        <ToolItem name="AWS" icon={<Cloud size={24} />} color="text-slate-600" />
                        <ToolItem name="Git" icon={<GitMerge size={24} />} color="text-red-600" />
                        <ToolItem name="React" icon={<Code size={24} />} color="text-cyan-400" />
                        <ToolItem name="Next.js" icon={<Globe size={24} />} color="text-slate-900" />
                        <ToolItem name="Node.js" icon={<Server size={24} />} color="text-green-600" />
                        <ToolItem name="Linux" icon={<Terminal size={24} />} color="text-slate-800" />

                        {/* Tool List - Duplicate for seamless loop */}
                        <ToolItem name="Python" icon={<Terminal size={24} />} color="text-blue-500" />
                        <ToolItem name="TensorFlow" icon={<BrainCircuit size={24} />} color="text-orange-500" />
                        <ToolItem name="PyTorch" icon={<Flame size={24} />} color="text-red-500" />
                        <ToolItem name="OpenAI" icon={<Cpu size={24} />} color="text-green-500" />
                        <ToolItem name="LangChain" icon={<LinkIcon size={24} />} color="text-slate-500" />
                        <ToolItem name="Pandas" icon={<Database size={24} />} color="text-indigo-500" />
                        <ToolItem name="NumPy" icon={<Code size={24} />} color="text-blue-400" />
                        <ToolItem name="ScikitLearn" icon={<Activity size={24} />} color="text-orange-400" />
                        <ToolItem name="Docker" icon={<Box size={24} />} color="text-blue-600" />
                        <ToolItem name="Kubernetes" icon={<Ship size={24} />} color="text-blue-700" />
                        <ToolItem name="AWS" icon={<Cloud size={24} />} color="text-slate-600" />
                        <ToolItem name="Git" icon={<GitMerge size={24} />} color="text-red-600" />
                        <ToolItem name="React" icon={<Code size={24} />} color="text-cyan-400" />
                        <ToolItem name="Next.js" icon={<Globe size={24} />} color="text-slate-900" />
                        <ToolItem name="Node.js" icon={<Server size={24} />} color="text-green-600" />
                        <ToolItem name="Linux" icon={<Terminal size={24} />} color="text-slate-800" />
                    </motion.div>
                </div>
            </section>

            {/* Certification Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-xl">
                                <Image
                                    src="/sample-certificate.png"
                                    alt="Foundry Entry Level Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-sm"
                                />
                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Your effort deserves recognition. Upon successful completion of the entry level track, you will receive a verifiable digital certificate from The Foundry, signaling your readiness to industry partners.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-blue-100 text-blue-600"><CheckCircle2 size={16} /></div>
                                    Shareable on LinkedIn & Resumes
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-amber-100 text-amber-600"><CheckCircle2 size={16} /></div>
                                    Gateway to Advanced Specializations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Process */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions Process</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            We select high-potential candidates who are ready to commit to rigorous learning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 z-0"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 text-center group">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <div className="relative">
                                    <FileText size={40} className="text-blue-400" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-800">1</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Application</h3>
                            <p className="text-slate-400 leading-relaxed px-4">
                                Submit your profile and statement of purpose. Tell us why you want to build this expertise.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 text-center group">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 delay-100">
                                <div className="relative">
                                    <UserCheck size={40} className="text-amber-400" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-800">2</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Screening</h3>
                            <p className="text-slate-400 leading-relaxed px-4">
                                Our interactive assessment evaluates your aptitude and logical reasoning capabilities.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 text-center group">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 delay-200">
                                <div className="relative">
                                    <Rocket size={40} className="text-green-400" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-800">3</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Onboarding</h3>
                            <p className="text-slate-400 leading-relaxed px-4">
                                Successful candidates receive an offer letter and access to the pre-course modules.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about the entry level foundation tracks.</p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem question="Who is this program designed for?">
                            <p className="mb-4">This program is structured for three primary groups:</p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>Engineering Students:</strong> 3rd and 4th year students looking to supplement their academic curriculum with industry-relevant skills.</li>
                                <li><strong>Undergraduates:</strong> Final-year B.Com/B.Sc students seeking to build technical awareness in a digital-first economy.</li>
                                <li><strong>Early Professionals:</strong> Graduates with 2+ years experience aiming to build a strong technical base for future roles.</li>
                            </ul>
                        </FAQItem>
                        <FAQItem question="Do I need prior coding experience?">
                            No prior deep technical expertise is required, but a basic familiarity with computers and a logical mindset is recommended. The program starts with conceptual clarity before moving to application.
                        </FAQItem>
                        <FAQItem question="Is this an online or offline program?">
                            It is a <strong>Hybrid</strong> program. We combine self-paced digital learning modules with in-person or live virtual guided exercises and mentorship sessions.
                        </FAQItem>
                        <FAQItem question="Will I receive a certificate?">
                            Yes. Upon successful completion of the course and assessment, you will receive a verifiable digital certificate from The Foundry, which can be shared on LinkedIn and your resume.
                        </FAQItem>
                    </div>
                </div>
            </section>



            <Footer />
        </main>
    );
}



// Optimized Stat Component for Hero
function HeroStat({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 shrink-0 group-hover:text-white transition-colors">
                {/* Icon with potential gradient or just white/slate */}
                {icon}
            </div>
            <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{label}</div>
                <div style={{ backgroundImage: customGradient }} className={`${textGradientClass} text-lg font-bold leading-tight`}>{value}</div>
                <div className="text-xs text-slate-400 font-medium">{sub}</div>
            </div>
        </div>
    )
}



function DomainCard({ title, tagline, desc, icon, href }: { title: string, tagline?: string, desc: string, icon: React.ReactElement, href: string }) {
    return (
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all group flex flex-col items-start gap-6 h-full relative">
            <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0 relative overflow-hidden">
                    <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                    <div className="relative z-10 text-slate-900">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {React.cloneElement(icon as any, { size: 28, strokeWidth: 1.5 })}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
                    <div className="text-sm font-semibold text-blue-600 mb-2">{tagline}</div>
                    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
                </div>
            </div>

            <div className="mt-auto w-full pt-4 border-t border-slate-100 flex justify-end">
                <Link
                    href={href}
                    className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    border border-slate-200
                    text-sm font-semibold
                    text-slate-500
                    hover:text-blue-600
                    hover:border-blue-200
                    hover:bg-blue-50
                    transition-all
                    group/link
                    "
                >
                    View Curriculum
                    <ArrowUpRight
                        size={16}
                        className="rotate-45 group-hover/link:rotate-12 transition-transform"
                    />
                </Link>
            </div>

        </div>
    )
}



function FAQItem({ question, children }: { question: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="text-lg font-bold text-slate-900">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ArrowDown size={20} className="text-slate-400" />
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

function ToolItem({ name, icon, color }: { name: string, icon: React.ReactNode, color: string }) {
    return (
        <div className={`flex items-center gap-3 font-bold text-xl opacity-70 hover:opacity-100 transition-all cursor-default ${color}`}>
            {icon}
            <span className="text-slate-600">{name}</span>
        </div>
    )
}
