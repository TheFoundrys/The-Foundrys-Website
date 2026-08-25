"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Shield, Globe, Zap, Award, BookOpen } from "lucide-react";
import Link from "next/link";

export default function PVenkataNagendraReddyProfile() {
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
                                        src="/images/venkat-reddy.jpg"
                                        alt="P. Venkata Nagendra Reddy"
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
                                        Advisory Board Member
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        P. Venkata Nagendra Reddy
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Advocate & Cyber Law Expert | Legal Governance & Tech Policy
                                    </p>
                                </div>

                                {/* Actions & Badges */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/pvenkatanreddy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn Profile
                                    </a>
                                </div>

                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["ESG Compliance", "BRSR & CSRD", "Deep Tech", "Circular Economy", "Real Estate & Infra"].map((skill) => (
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
                            The Forged Leader
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            P. Venkata Nagendra Reddy stands as the embodiment of a new leadership paradigm. As the Head of the School of Sustainability at The Foundry’s, he represents the synthesis of 19 years of aggressive revenue growth, complex stakeholder management, and high-level strategic execution with the profound academic rigor of doctoral research in Environmental, Social, and Governance (ESG) compliance.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Zap className="text-[#002f86]" size={22} /> Architect of Revenue
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                Formerly Business Head of Client Solutions at Innowell Engineering, where he generated ₹10 Crore in enquiries and successfully closed a ₹4.58 Crore sustainability-focused order, demonstrating the &quot;Green Premium&quot; as a competitive advantage.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Globe className="text-[#002f86]" size={22} /> Infrastructure Nexus
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                Expertise at the intersection of land, law, and capital. Handled projects worth ₹1000 Crore at Navnaami Ventures and managed critical infrastructure at Bajaj International Realty, providing granular insights into the built environment&apos;s material footprint.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                            &quot;The lecture hall is dead. The planet does not have time for theory. We do not memorize the laws of nature; we architect systems that scale with them.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
