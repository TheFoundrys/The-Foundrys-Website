"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PackageDetailsModal } from "@/components/programs/PackageDetailsModal";

export default function EntryLevelProgramPage() {
    const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Young Graduate Programs | The Foundry";
    }, []);

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Navbar />

            {/* Banner Image Section */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .ygp-title-white {
                        color: #ffffff !important;
                    }
                    `
                }} />
                <Image 
                    src="/images/ygp_classroom_session.png" 
                    alt="YGP Suite" 
                    fill 
                    priority
                    className="object-cover object-center brightness-[0.7]" 
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-6xl px-6">
                        <h1 className="font-serif text-white text-4xl md:text-6xl font-bold tracking-tight ygp-title-white">
                            YGP Suite
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
                        At The Foundry, we shape leaders who thrive amidst complexity, catalyze meaningful change, and redefine success in deep tech. Our diverse portfolio of foundational young graduate programmes is designed for beginners and early technical learners to master the core concepts of Artificial Intelligence, Cyber Security, Quantum Computing, and Blockchain. Each programme unites world-class academic rigour with global perspectives, delivering transformative educational experiences that cultivate resilient, innovative leaders poised to generate significant impact.
                    </p>
                </div>
            </section>

            {/* Programs List Section */}
            <section className="bg-white px-6 pb-24 text-[#031a57]">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        {/* Domain 1: Applied AI & GenAI */}
                        <ProgramRow 
                            tag="YGP"
                            title="Young Graduate Program in Applied AI & GenAI"
                            description="Build a strong foundation in Artificial Intelligence. Master Neural Networks, NLP, and Computer Vision from the ground up to design intelligent, autonomous applications."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Beginners & Undergraduates",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("entry-level-ai")}
                        />

                        {/* Domain 2: Cybersecurity */}
                        <ProgramRow 
                            tag="YGP"
                            title="Young Graduate Program in Cybersecurity Analyst"
                            description="Learn the core principles of network defense, digital forensics, and security audits. Master the foundational tools and strategies required to secure modern business infrastructures."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Beginners & Undergraduates",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("entry-level-cyber-security")}
                        />

                        {/* Domain 3: Quantum Computing */}
                        <ProgramRow 
                            tag="YGP"
                            title="Young Graduate Program in Quantum Computing"
                            description="Introduce yourself to the computing paradigms of the future. Master Qubits, superposition, quantum gates, and algorithm design to prepare for tomorrow's computational shift."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Beginners & Undergraduates",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("entry-level-quantum-computing")}
                        />

                        {/* Domain 4: Blockchain */}
                        <ProgramRow 
                            tag="YGP"
                            title="Young Graduate Program in Blockchain & Web3"
                            description="Explore decentralized ledger technology. Learn how blockchain protocols, smart contracts, and Web3 networks structure trust and digital finance."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Beginners & Undergraduates",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("entry-level-blockchain")}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6 bg-slate-50">
                <div className="container mx-auto max-w-4xl">
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

            <AnimatePresence>
                {selectedPackageId && (
                    <PackageDetailsModal
                        isOpen={!!selectedPackageId}
                        onClose={() => setSelectedPackageId(null)}
                        packageId={selectedPackageId}
                    />
                )}
            </AnimatePresence>
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
    onMoreInfo
}: {
    tag: string;
    title: string;
    description: string;
    specs: Specs;
    onMoreInfo: () => void;
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
                    <button
                        onClick={onMoreInfo}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#002f86] text-[#002f86] hover:bg-[#002f86] hover:text-white rounded-lg font-bold transition-all text-sm cursor-pointer"
                    >
                        More Info <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                    <Link
                        href="/apply"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-bold transition-all text-sm"
                    >
                        Download brochure <span className="text-slate-400 text-base">⤓</span>
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
    );
}
