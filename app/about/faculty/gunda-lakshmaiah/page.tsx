"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, Target, Users } from "lucide-react";
import Link from "next/link";

export default function GundaLakshmaiahProfile() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-[#F7F7F4] p-8 sm:p-12 md:p-16 border-b border-slate-200/50 relative overflow-hidden">
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
                                        src="/images/laxman.jpg"
                                        alt="Gunda Lakshmaiah"
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
                                        Strategic Growth
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Gunda Lakshmaiah
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Business Development Executive | The Foundry’s
                                    </p>
                                </div>

                                {/* Contact Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="mailto:lakshmaiah.gunda@thefoundrys.com"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Mail size={15} /> Email
                                    </a>
                                    <a
                                        href="tel:+918639867365"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Phone size={15} /> Contact
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Building Partnerships & Powering Growth
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Gunda Lakshmaiah serves as a Business Development Executive at The Foundry’s, contributing to the organization’s growth by building partnerships, expanding business opportunities, and supporting strategic initiatives in emerging technology sectors.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Target className="text-[#002f86]" size={22} /> Strategic Focus
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                He works closely with teams focused on Deep Tech, Entrepreneurship, Sustainability, and Energy, helping connect innovative ideas with practical industry applications. His role involves identifying new opportunities and strengthening client relationships.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Users className="text-[#002f86]" size={22} /> Collaboration & Innovation
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                With a focus on collaboration and growth, he supports initiatives that enable technology innovation, business expansion, and sustainable development, promoting the organization&apos;s vision of technology-driven impact.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl p-6 bg-[#F7F7F4] border border-slate-200/80">
                        <h4 className="font-serif text-lg font-bold text-[#002f86] mb-2 flex items-center gap-2">
                            <MapPin size={20} /> Office Location
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                            Sasi Icon, Metro Station, Road No. 36 & 37, Jubilee Hills, Hyderabad, Telangana – 500033
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
