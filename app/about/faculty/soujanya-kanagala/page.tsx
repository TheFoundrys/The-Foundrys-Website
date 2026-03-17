"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Mail, MapPin, Phone, Zap, Target, Rocket, Briefcase, Globe, Award, BookOpen, UserCheck } from "lucide-react";
import Link from "next/link";

export default function SoujanyaKanagalaProfile() {
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
                                    src="/images/soujanya.jpg"
                                    alt="Soujanya Kanagala"
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
                                    Advisory Board
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Soujanya Kanagala
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4 italic">
                                    Management Consultant | 14 Years of Industry Experience
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded-full border border-slate-700">
                                        Professional Mentor
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-slate-300">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Briefcase size={16} className="text-blue-400" /> Business Strategy
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Zap size={16} className="text-blue-400" /> Operations Management
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Award size={16} className="text-blue-400" /> Organizational Leadership
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
                        {/* Professional Experience */}
                        <div className="relative mb-16">
                            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                    Professional Experience
                                </h2>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Management Consultant with <strong>14 years of industry experience</strong> in business setup, operations, marketing, sales strategy, and organizational management. Experienced in working with small and growing organizations to establish, streamline, and scale their business operations.
                                </p>
                            </div>
                        </div>

                        {/* Core Expertise */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Target className="text-blue-600" size={24} /> Core Expertise
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">Business Setup & Execution</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">End-to-end involvement in idea implementation, infrastructure planning, process design, and operational launch.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">Operations Management</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Designing workflows, defining SOPs, aligning teams, and ensuring smooth day-to-day business functioning.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">Marketing & Sales Strategy</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Developing pricing strategies, go-to-market plans, lead generation models include Digital Marketing, and sales execution frameworks.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-3">Consulting & Advisory</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">Acting as a management consultant for organizations to structure business models, improve efficiency, and support growth.</p>
                                </div>
                            </div>
                        </div>

                        {/* Leadership & Governance Roles */}
                        <div className="bg-slate-900 rounded-3xl p-10 text-white mb-16">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-400">
                                <Briefcase size={24} /> Leadership & Governance Roles
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Managing Director</div>
                                    <div className="text-lg font-bold">Anantha Engineerings Private Limited</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Partner</div>
                                    <div className="text-lg font-bold">Autometrics Car Care Solutions</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">General Secretary</div>
                                    <div className="text-lg font-bold">Aloka Mathru Chaya Foundation (NGO)</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">Principal Member</div>
                                    <div className="text-lg font-bold">Jeevodaya Home for the Children (NGO)</div>
                                </div>
                            </div>
                        </div>

                        {/* Academic Qualifications */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" size={24} /> Academic Qualifications
                                </h3>
                                <div className="space-y-4 text-slate-600">
                                    <div className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                        <span><strong>B.Tech</strong> – Electronics & Communication Engineering</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                        <span><strong>PGDM</strong> – Finance & Operations</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <UserCheck className="text-blue-600" size={24} /> Training Experience
                                </h3>
                                <div className="space-y-4 text-slate-600">
                                    <div className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                        <span><strong>Corporate Trainer</strong> – Skill Konnect (Personality Development and professional skills training)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consulting Engagements */}
                        <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100 mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Consulting & Client Engagements</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700">
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Autometrics Car Care Solutions
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Celestial Cinematics
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Cosmic Cradle
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Supernova Productions
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> MSC Fincorp
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Yugen Healthcare
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
