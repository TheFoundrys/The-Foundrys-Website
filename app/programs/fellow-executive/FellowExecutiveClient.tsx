"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Users, Zap, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { FutureVision } from "@/components/schools/shared/future-vision";

export default function FellowExecutiveClient() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" ref={containerRef}>
            <Navbar />

            {/* Banner Image Section */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .fellow-title-white {
                        color: #ffffff !important;
                    }
                    `
                }} />
                <Image 
                    src="/images/exec_classroom_session.png" 
                    alt="Fellowship & Executive Programs" 
                    fill 
                    priority
                    className="object-cover object-center brightness-[0.7]" 
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-6xl px-6">
                        <h1 className="font-serif text-white text-4xl md:text-6xl font-bold tracking-tight fellow-title-white">
                            Fellow Executive Suite
                        </h1>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white px-6 py-16 text-[#031a57]">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                        Introduction
                    </h2>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-4xl">
                        At The Foundry, we shape technical leaders who thrive amidst complexity, catalyze meaningful change, and redefine board-level metrics. Our Fellowship & Executive Programs are precision-engineered for CTOs, VPs, senior technical leaders, and future technical CEOs. We bypass general management generalities and focus on systems-level authority, deep technical leadership, and strategic venture building to prepare you for the age of intelligence.
                    </p>
                </div>
            </section>

            {/* Programs List Section */}
            <section className="bg-white px-6 pb-24 text-[#031a57]">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        {/* Program 1: MBA in AI */}
                        <ProgramRow 
                            tag="Integrated MBA Path"
                            title="MBA in Applied AI & GenAI"
                            description="The ultimate track for AI architects. 3 years of deep Intelligence Engineering followed by a 1-year MBA to scale autonomous ventures. Learn to design, deploy, and govern cognitive architectures at a board-level scale."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "4 Years (3+1)",
                                experience: "Aspiring Founders & Tech Leaders",
                                location: "Hitech City, Hyderabad"
                            }}
                            actionLink="/apply?course=MBA in AI"
                            actionLabel="Apply for AI Path"
                        />

                        {/* Program 2: MBA in Cybersecurity Venture Building */}
                        <ProgramRow 
                            tag="Integrated MBA Path"
                            title="MBA in Cybersecurity Venture Building"
                            description="The defense layer. 3 years of Cybersecurity Engineering followed by a 1-year MBA to lead and build security-first global ventures. Master network forensics, penetration testing, and strategic tech risk governance."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "4 Years (3+1)",
                                experience: "Aspiring Founders & Security Leaders",
                                location: "Hitech City, Hyderabad"
                            }}
                            actionLink="/apply?course=MBA in Cybersecurity Venture Building"
                            actionLabel="Apply for Security Path"
                        />

                        {/* Program 3: Delivering in the Age of AI */}
                        <ProgramRow 
                            tag="Executive Cohort"
                            title="Delivering in the Age of AI (EXE 001)"
                            description="Where Senior Tech Leaders become System Owners. Design, engineer, deploy, and govern critical systems in an AI-driven world. Master peer network frameworks and board-level technical alignment metrics."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "Cohort-based",
                                experience: "Senior Managers, Directors & VPs",
                                location: "Hitech City, Hyderabad"
                            }}
                            actionLink="/programs/fellow-executive/delivering-in-age-of-ai"
                            actionLabel="View Program"
                        />
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-28 px-6 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none"
                />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <div>
                            <div className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                                <Zap size={14} /> Methodology
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Executive Standard</h2>
                        </div>
                        <p className="text-slate-500 max-w-md text-lg text-left md:text-right">
                            No theory without practice. No strategy without execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <MethodologyItem
                            icon={Globe}
                            title="Real-World Systems"
                            desc="Analyze and design architectures for live, enterprise-grade problem statements."
                            index={0}
                        />
                        <MethodologyItem
                            icon={Users}
                            title="Peer Network"
                            desc="Join a closed network of high-caliber technical executives and industry veterans."
                            index={1}
                        />
                        <MethodologyItem
                            icon={TrendingUp}
                            title="Strategic Impact"
                            desc="Learn to align technical architecture with business value and board-level metrics."
                            index={2}
                        />
                    </div>
                </div>
            </section>

            {/* Future Vision Component */}
            <FutureVision
                schoolName="Fellow Executive Program"
                accentColor="#3b82f6" // Blue
                whyAIImportant="AI is shifting the nature of leadership from resource management to algorithmic governance. A future CEO won't just manage people; they will manage cognitive architectures. Innovators who don't understand the underlying physics of Intelligence will be unable to lead the organizations that build the future."
                futureJobs={[
                    {
                        title: "Neural-Network CEO",
                        desc: "Leading organizations where the core value proposition and operations are governed by proprietary, fine-tuned model architectures."
                    },
                    {
                        title: "Chief Automation Officer",
                        desc: "Architecting the transition of multi-billion dollar enterprises into fully autonomous, lean entities."
                    },
                    {
                        title: "Ecosystem Strategist",
                        desc: "Navigating the complex interplay between human capital, agentic labor, and decentralized autonomous markets."
                    }
                ]}
                outcomeStatement="A transformative leader—a Technical CEO—who possesses both the engineering depth of an AI Architect and the strategic vision to scale global, AI-native organizations."
            />

            {/* CTA Section */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to define the future?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join the next cohort of technical leaders reshaping the industry.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/apply?type=executive" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
                            Apply for Cohort
                        </Link>
                        <a href="mailto:contact@thefoundrys.com" className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700">
                            Contact Admissions
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Reusable split row component for each program
interface Specs {
    mode: string;
    duration: string;
    experience: string;
    location: string;
}

function ProgramRow({
    tag,
    title,
    description,
    specs,
    actionLink,
    actionLabel
}: {
    tag: string;
    title: string;
    description: string;
    specs: Specs;
    actionLink: string;
    actionLabel: string;
}) {
    return (
        <div className="border-t border-slate-200 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 block font-mono">
                        {tag}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#002f86] leading-tight mb-6">
                        {title}
                    </h3>
                </div>
                
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-6">
                    <Link
                        href={actionLink}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#002f86] bg-[#002f86] text-white hover:bg-white hover:text-[#002f86] rounded-lg font-bold transition-all text-sm cursor-pointer"
                    >
                        {actionLabel} <ArrowUpRight size={14} />
                    </Link>
                    <Link
                        href="/apply"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-bold transition-all text-sm"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">
                    {description}
                </p>
                
                {/* Metadata Specifications Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-100 pt-6">
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 font-mono">
                            Mode:
                        </div>
                        <div className="text-sm font-semibold text-slate-800">
                            {specs.mode}
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 font-mono">
                            Duration:
                        </div>
                        <div className="text-sm font-semibold text-slate-800">
                            {specs.duration}
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 font-mono">
                            Work experience:
                        </div>
                        <div className="text-sm font-semibold text-slate-800">
                            {specs.experience}
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 font-mono">
                            Location:
                        </div>
                        <div className="text-sm font-semibold text-slate-800">
                            {specs.location}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MethodologyItem({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-8 rounded-3xl border border-slate-200 bg-slate-50 backdrop-blur-sm hover:bg-slate-100 transition-colors"
        >
            <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}
