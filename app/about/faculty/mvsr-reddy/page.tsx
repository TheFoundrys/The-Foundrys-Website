"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Shield, Brain, Zap, Target, Lock } from "lucide-react";
import Link from "next/link";

export default function VenkataShivaRangaReddyProfile() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-white p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-xs font-bold uppercase tracking-wider font-mono">
                            <ArrowLeft size={14} /> Back to Team
                        </Link>

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                            {/* Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full lg:w-1/3 shrink-0"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden shadow-md bg-white border border-slate-200/80">
                                    <Image
                                        src="/images/testimonials/shiva.jpeg"
                                        alt="Venkata Shiva Ranga Reddy"
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Header Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex-1 space-y-6"
                            >
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono mb-4">
                                        Subject Matter Expert
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Venkata Shiva Ranga Reddy
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        AI Security & Technology Intelligence | AI Governance & Red Teaming
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/mvsrreddy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn Profile
                                    </a>
                                </div>

                                {/* Key Skills */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {[
                                        "AI Security (AISec)",
                                        "Enterprise Risk Management (ERM)",
                                        "Technology Intelligence",
                                        "AI Governance",
                                        "Cybersecurity Strategy",
                                        "Red Teaming"
                                    ].map((skill) => (
                                        <div key={skill} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Securing the Future of Humanity in the Age of AI
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Venkata Shiva Ranga Reddy leads a strategic initiative to secure the future of humanity in the age of AI. Building at the intersection where Artificial Intelligence and Cybersecurity converge, he recognized that legacy analyst firms were struggling to keep pace with the rapid speed of AI, inspiring him to create a new paradigm for technology intelligence.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            His work centers on leveraging AI to synthesize vast amounts of data, delivering actionable insights that move at the speed of innovation. Believing that true security requires combining deep research with practical application, he goes beyond identifying AI adoption challenges—from compliance to red-teaming—by spearheading cutting-edge tools that empower enterprise organizations to test, validate, and harden their AI defenses.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Shield className="text-[#002f86]" size={22} /> AI Security & Red Teaming
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                Spearheading the development of advanced tools and methodologies for red-teaming AI models, evaluating risk profiles, and validating enterprise AI defenses against hostile exploitation.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Brain className="text-[#002f86]" size={22} /> Technology Intelligence & Governance
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                Synthesizing technology data into real-time intelligence, aligning Enterprise Risk Management (ERM) frameworks with robust AI governance to guide leaders navigating complex tech transitions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                            &quot;My goal is to provide enterprise leaders with a complete toolkit: unparalleled foresight and the practical means to act on it.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}