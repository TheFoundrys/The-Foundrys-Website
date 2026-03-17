"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, Target, Users } from "lucide-react";
import Link from "next/link";

export default function GundaLakshmaiahProfile() {
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
                                    src="/images/laxman.jpg"
                                    alt="Gunda Lakshmaiah"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
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
                                    Strategic Growth
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Gunda Lakshmaiah
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4">
                                    Business Development Executive
                                </p>
                                <p className="text-lg text-slate-400 font-medium italic">
                                    The Foundry’s
                                </p>

                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="p-2 bg-slate-800 rounded-lg">
                                            <Mail size={18} className="text-blue-400" />
                                        </div>
                                        <span className="text-sm">lakshmaiah.gunda@thefoundrys.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <div className="p-2 bg-slate-800 rounded-lg">
                                            <Phone size={18} className="text-blue-400" />
                                        </div>
                                        <span className="text-sm">8639867365</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Biography Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm mb-16 relative overflow-hidden">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Building Partnerships & Powering Growth</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Gunda Lakshmaiah serves as a Business Development Executive at The Foundry’s, contributing to the organization’s growth by building partnerships, expanding business opportunities, and supporting strategic initiatives in emerging technology sectors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Target className="text-blue-600" size={24} /> Strategic Focus
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    He works closely with teams focused on Deep Tech, Entrepreneurship, Sustainability, and Energy, helping connect innovative ideas with practical industry applications. His role involves identifying new opportunities and strengthening client relationships.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Users className="text-blue-600" size={24} /> Collaboration & Innovation
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    With a focus on collaboration and growth, he supports initiatives that enable technology innovation, business expansion, and sustainable development, promoting the organization's vision of technology-driven impact.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Briefcase className="text-blue-600" size={24} /> Organization
                            </h3>
                            <div className="space-y-4">
                                <p className="text-xl font-bold text-slate-900">The Foundry’s</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Deep Tech", "Entrepreneur", "Sustainability", "Energy"].map((tag) => (
                                        <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <MapPin size={24} /> Visit Our Office
                                </h3>
                                <div className="text-blue-100 text-lg">
                                    Sasi Icon, Metro Station, Road No. 36 & 37<br />
                                    Beside Madhapur, Jubilee Hills<br />
                                    Hyderabad, Telangana – 500033
                                </div>
                            </div>
                            <div className="flex-none">
                                <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
