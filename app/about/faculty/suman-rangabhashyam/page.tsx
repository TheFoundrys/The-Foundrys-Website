"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Globe, Award, Zap, BookOpen, Heart } from "lucide-react";
import Link from "next/link";

export default function SumanRangabhashyamProfile() {
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
                                    src="/images/suman rangabhasyam.jpg"
                                    alt="Dr. Suman Rangabhashyam"
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
                                    Advisory Board
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Dr. Suman Rangabhashyam
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4 italic">
                                    TEDx Speaker • Author • Social Entrepreneur
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
                                    >
                                        <Linkedin size={16} /> Connect
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-slate-300">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Award size={16} className="text-blue-400" /> 22+ Awards
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Zap size={16} className="text-blue-400" /> 600+ Sessions
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <BookOpen size={16} className="text-blue-400" /> PhD in Management
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
                        <div className="relative mb-16">
                            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                    A Journey of Resilience & Purpose
                                </h2>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Coming from a proud family that dedicated itself to the service of the nation, daughter of an Air Commodore, wife of ace fighter pilot and Group Captain, living a life of bliss, contentment, managing a family of two sons and those around who needed her help, Suman hit a wall when her husband suddenly left this world few days after retirement.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Just when she thought she could travel, see the world, pen her memoirs and carry on with the good work she was doing in serving the needy, she picked up herself and started life again.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" size={24} /> Academic Excellence
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>Graduation in Science, BEd to enable teaching, Masters in English, Diploma holder in French.</p>
                                    <p>Masters in Reiki to heal those in pain, an MBA in finance and marketing, PhD in management.</p>
                                    <p>A certified Independent Director from Indian Institute of Corporate Affairs.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-blue-600" size={24} /> Professional Impact
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>Invited to be the face of humanity and effective management in over 11 countries.</p>
                                    <p>28,000+ students across 600+ management sessions.</p>
                                    <p>6,500+ hours of speaking in over 30 public forums.</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8">Personal & Professional Branding</h3>
                        <p className="text-slate-700 leading-relaxed mb-10">
                            She is the director of a Branding agency (Markitome Pvt Ltd) that has successfully helped many individuals and enterprises brand them to what they ought to be in their journey and to help scale. Professionals and industry leaders in multiple sectors including, FMCG, Banking, Tech, Fintech, Digital commerce, Writers, Food Industry, Bio Med among many others, are her clientele.
                        </p>

                        <div className="bg-slate-900 rounded-3xl p-10 text-white mb-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 italic text-lg text-slate-300 leading-relaxed">
                                    "Create more wealth and use it for a good cause. Suman believes that when Goddess Lakshmi knocks on your door… open the door. Suman loves to spend time with the underprivileged."
                                </div>
                                <div className="h-px md:h-24 w-24 md:w-px bg-slate-700" />
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Heart className="text-red-500 fill-red-500" size={24} /> Humanity First
                                    </h4>
                                    <p className="text-slate-400">
                                        At any given time 24/7 she gets calls of animals being injured on the road or abandoned and right away they have found a loving home. Her life is a journey that one would want to live.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
                            <h3 className="text-3xl font-bold mb-4 italic">Sheer WILL and Perseverance.</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Suman represents everything from hope to success and is the best example in this world for what sheer WILL and perseverance can achieve.
                            </p>
                            <Link href="/apply" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
                                Join the Foundry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
