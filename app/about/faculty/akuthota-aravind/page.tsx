"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Mail, MapPin, Phone, Zap, Target, Rocket, Briefcase, Globe } from "lucide-react";
import Link from "next/link";

export default function AkuthotaAravindProfile() {
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
                                    src="/images/araavind.png"
                                    alt="Akuthota Aravind"
                                    fill
                                    className="object-cover object-top"
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
                                    Advisory Board
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Akuthota Aravind
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4 italic">
                                    Business Development Executive | The Foundry’s
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <a
                                        href="mailto:Aravind.Akuthota@thefoundrys.com"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
                                    >
                                        <Mail size={16} /> Email
                                    </a>
                                    <a
                                        href="tel:+918466995239"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-full transition-colors border border-slate-700"
                                    >
                                        <Phone size={16} /> Contact
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-slate-300">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Target size={16} className="text-blue-400" /> Strategic Partnerships
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Rocket size={16} className="text-blue-400" /> Startup Ecosystems
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Briefcase size={16} className="text-blue-400" /> Market Expansion
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
                                    Profile Overview
                                </h2>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Akuthota Aravind is a Business Development Executive at The Foundry’s, contributing to the organization’s growth by enabling strategic partnerships, expanding market opportunities, and strengthening innovation-driven ecosystems.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    He operates at the convergence of Deep Tech, Entrepreneurship, Sustainability, and Energy, where he collaborates with startups, industry leaders, and internal teams to transform emerging ideas into scalable, real-world solutions. His work focuses on bridging the gap between innovation and execution, ensuring that technology initiatives translate into measurable business impact.
                                </p>
                            </div>
                        </div>

                        {/* What He Does & Core Focus */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-blue-600" size={24} /> What He Does
                                </h3>
                                <ul className="space-y-3 text-slate-600 leading-relaxed list-none p-0">
                                    <li>• Driving strategic partnerships and ecosystem collaborations</li>
                                    <li>• Identifying and unlocking new business opportunities</li>
                                    <li>• Strengthening client and stakeholder relationships</li>
                                    <li>• Supporting market expansion and growth initiatives</li>
                                    <li>• Enabling technology adoption across industries</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Target className="text-blue-600" size={24} /> Core Focus Areas
                                </h3>
                                <ul className="space-y-3 text-slate-600 leading-relaxed list-none p-0">
                                    <li>• Deep Tech & Innovation Ecosystems</li>
                                    <li>• Business Development & Market Expansion</li>
                                    <li>• Startup–Industry Collaboration</li>
                                    <li>• Sustainability & Impact Initiatives</li>
                                    <li>• Strategic Alliances & Partnerships</li>
                                </ul>
                            </div>
                        </div>

                        {/* Professional Philosophy */}
                        <div className="bg-slate-900 rounded-3xl p-10 text-white mb-16">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Globe className="text-blue-400" size={24} /> Professional Philosophy
                            </h3>
                            <p className="italic text-lg text-slate-300 leading-relaxed">
                                "Aravind believes that the true value of innovation lies in its ability to create real-world impact. His work is centered on aligning technology with business needs, fostering collaboration, and building pathways for sustainable growth."
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100 mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="space-y-2">
                                    <div className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">Location</div>
                                    <div className="flex items-start gap-2 text-slate-700">
                                        <MapPin size={18} className="shrink-0 text-slate-400" />
                                        <span>Jubilee Hills, Hyderabad, Telangana, India</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">Email</div>
                                    <div className="flex items-start gap-2 text-slate-700">
                                        <Mail size={18} className="shrink-0 text-slate-400" />
                                        <a href="mailto:Aravind.Akuthota@thefoundrys.com" className="hover:text-blue-600 transition-colors">Aravind.Akuthota@thefoundrys.com</a>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">Phone</div>
                                    <div className="flex items-start gap-2 text-slate-700">
                                        <Phone size={18} className="shrink-0 text-slate-400" />
                                        <a href="tel:+918466995239" className="hover:text-blue-600 transition-colors">+91 8466995239</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/about/team" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl transition-all hover:bg-blue-700 shadow-lg">
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
