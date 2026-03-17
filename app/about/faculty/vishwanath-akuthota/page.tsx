"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Mail, MapPin, Phone, Zap, Target, Rocket, Briefcase, Globe, Github, BookOpen, Download } from "lucide-react";
import Link from "next/link";

export default function VishwanathAkuthotaProfile() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Team
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/3 relative"
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                                <Image
                                    src="/images/vishwa-new.jpg"
                                    alt="Vishwanath Akuthota"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl rounded-full" />
                        </motion.div>

                        {/* Header Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 space-y-6"
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                    Young Chief AI Officer | Founder & CEO
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Vishwanath Akuthota
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4 italic">
                                    Building at the intersection of AI, Quantum, and Human Potential.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <a
                                        href="https://www.linkedin.com/in/vishwanathakuthota/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
                                    >
                                        <Linkedin size={16} /> LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/vishwanathakuthota"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-full transition-colors border border-slate-700"
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-slate-300">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Target size={16} className="text-blue-400" /> Generative AI (GenAI)
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Rocket size={16} className="text-blue-400" /> LLM Development
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Zap size={16} className="text-blue-400" /> Deep Tech Architecture
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Profile Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        {/* Profile Overview */}
                        <div className="relative mb-16">
                            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                    Professional Summary
                                </h2>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Vishwanath Akuthota is a distinguished deep-tech entrepreneur and AI architect with over 1.5 decades of experience in Artificial Intelligence, Machine Learning, and Generative AI. Regarded as the "Young Chief AI Officer" by industry leaders, he has been at the forefront of building world-class AI products and Large Language Model (LLM) applications.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    His work is characterized by a mission to develop responsible and trustworthy AI systems that align with ethical principles and industry standards. He currently serves as the Founder & CEO of The Foundry’s, where he leads the mission to bridge the gap between emerging technology and human potential.
                                </p>
                            </div>
                        </div>

                        {/* Research & Publications */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <BookOpen className="text-blue-600" size={24} /> Research & Publications
                            </h3>
                            <div className="grid gap-6">
                                {[
                                    {
                                        title: "Vulnerability Detection and Monitoring Using LLM",
                                        source: "IEEE: 10456393",
                                        link: "https://ieeexplore.ieee.org/document/10456393"
                                    },
                                    {
                                        title: "A Deep Learning Approach for Accurate Blood Cancer Cell Classification",
                                        source: "IEEE: 10497341",
                                        link: "https://ieeexplore.ieee.org/document/10497341"
                                    },
                                    {
                                        title: "Hybrid Q-Learning with VLMs Reasoning Features",
                                        source: "IEEE: 11040757",
                                        link: "https://ieeexplore.ieee.org/document/11040757"
                                    },
                                    {
                                        title: "A Multi-Agent Garage Service Search and Recommendation with Hybrid MLs and LLMs",
                                        source: "IEEE: 10940937",
                                        link: "https://ieeexplore.ieee.org/document/10940937"
                                    }
                                ].map((pub, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                                        <h4 className="font-bold text-slate-900 mb-2">{pub.title}</h4>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-500 font-medium">{pub.source}</span>
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">
                                                View Publication <Globe size={14} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Authored Books */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Briefcase className="text-blue-600" size={24} /> Authored Books
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <h4 className="text-lg font-bold mb-2">The Shadows Of Deception</h4>
                                    <p className="text-slate-400 text-sm mb-4">Unveiling Cyber Realms</p>
                                    <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Cybersecurity</div>
                                </div>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <h4 className="text-lg font-bold mb-2">The Fabric of Law</h4>
                                    <p className="text-slate-400 text-sm mb-4">Understanding Jurisprudence and Legal Principles</p>
                                    <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Law & Ethics</div>
                                </div>
                            </div>
                        </div>

                        {/* Philosophy */}
                        <div className="bg-blue-600 rounded-3xl p-10 text-white mb-16 shadow-xl shadow-blue-200">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Zap className="text-white" size={24} /> Professional Philosophy
                            </h3>
                            <p className="italic text-lg text-blue-50 leading-relaxed font-medium">
                                "Creating valuable products requires an engineering mindset combined with the precision of a mathematician. Our mission is to build responsible, ethical, and trustworthy AI that empowers humanity."
                            </p>
                        </div>

                        <div className="text-center">
                            <Link href="/about/team" className="inline-block px-8 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all hover:bg-slate-800 shadow-lg">
                                Back to Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
