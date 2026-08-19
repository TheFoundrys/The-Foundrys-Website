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

export default function ProfessionalProgramPage() {
    const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Post Graduate Certification Programs | The Foundry";
    }, []);

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Banner Image Section */}
            <section className="relative w-full h-[260px] md:h-[380px] overflow-hidden mt-16">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .pgp-title-white {
                        color: #ffffff !important;
                    }
                    `
                }} />
                <Image 
                    src="/images/pgp_suite_banner.jpg" 
                    alt="PGP Suite" 
                    fill 
                    priority
                    className="object-cover object-center brightness-[0.7]" 
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-8xl px-6">
                        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight pgp-title-white">
                            PGP Suite
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-16 overflow-hidden">
                {/* Introduction Section */}
                <section className="text-slate-800 p-8 sm:p-12 md:p-16 pb-4 sm:pb-6 md:pb-8 bg-white">
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#002f86] md:text-4xl">
                        Introduction
                    </h2>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-4xl">
                        At The Foundry, we shape leaders who thrive amidst complexity, catalyze meaningful change, and redefine success in deep tech. Our diverse portfolio of post graduate programmes is designed for professionals at every career stage - whether you are an emerging leader establishing foundations, a mid-career professional accelerating growth, or a senior executive preparing for advancement. Each programme unites world-class academic rigour with global perspectives, delivering transformative educational experiences that cultivate resilient, innovative leaders poised to generate significant impact.
                    </p>
                </section>

                {/* Programs List Section with Alternating Backgrounds */}
                <section className="text-slate-800">
                    {/* Domain 1: Applied AI & GenAI (White bg) */}
                    <div className="p-8 sm:p-12 md:p-16 bg-white border-t border-slate-100">
                        <ProgramRow 
                            tag="PGP"
                            title="Post Graduate Program in Applied AI & GenAI"
                            description="Forge your career through our top-ranked Applied AI & GenAI program that combines state-of-the-art neural networks with immersive learning. Transform into a resilient leader ready to make a significant technological impact and navigate tomorrow's computational challenges."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Graduates & Professionals",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("professional-ai")}
                        />
                    </div>

                    {/* Domain 2: Cybersecurity (Alternating Warm bg) */}
                    <div className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-t border-b border-slate-200/50">
                        <ProgramRow 
                            tag="PGP"
                            title="Post Graduate Program in Cybersecurity Analyst"
                            description="Master both offensive and defensive security strategies required to defend the digital frontier. Build rigorous technical depth in network forensics, penetration testing, security operations, and risk auditing."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Graduates & Professionals",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("professional-cyber-security")}
                        />
                    </div>

                    {/* Domain 3: Quantum Computing (White bg) */}
                    <div className="p-8 sm:p-12 md:p-16 bg-white">
                        <ProgramRow 
                            tag="PGP"
                            title="Post Graduate Program in Quantum Computing"
                            description="Prepare for the computational paradigm shift. Master Qubits, superposition, quantum gates, and algorithm design to lead the next computational revolution in industry."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Graduates & Tech Professionals",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("professional-quantum-computing")}
                        />
                    </div>

                    {/* Domain 4: Blockchain (Alternating Warm bg) */}
                    <div className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-t border-b border-slate-200/50">
                        <ProgramRow 
                            tag="PGP"
                            title="Post Graduate Program in Blockchain & Web3"
                            description="Architect the decentralized trust layer of the future. Master distributed ledgers, smart contracts, Web3 protocols, and cryptographic scaling to rewrite the rules of ownership."
                            specs={{
                                mode: "Hybrid (In-Person & Virtual)",
                                duration: "12 Months",
                                experience: "Graduates & Tech Professionals",
                                location: "Hitech City, Hyderabad"
                            }}
                            onMoreInfo={() => setSelectedPackageId("professional-blockchain")}
                        />
                    </div>
                </section>
            </div>

             {/* FAQ Section */}
            <section className="py-16 px-6 bg-white border-t border-b border-slate-200/60">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002f86] mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about the entry level foundation tracks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Column 1 (Left Side) */}
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

                        {/* Column 2 (Right Side) */}
                        <div className="space-y-4">
                            <FAQItem question="What is the weekly time commitment?">
                                The program is designed to be manageable alongside college or work. It requires about 10–12 hours per week, including self-paced learning and practical hands-on exercises.
                            </FAQItem>
                            <FAQItem question="Are there live interactions with mentors?">
                                Yes. You will have regular live virtual check-ins, online office hours with industry experts, and in-person review sessions in Hyderabad to clarify doubts and review projects.
                            </FAQItem>
                            <FAQItem question="What projects will I build?">
                                You will build 3 main portfolio projects: a functional AI model/agent, a secure infrastructure setup, and a smart contract deployment on Web3.
                            </FAQItem>
                            <FAQItem question="Can I transition to advanced tracks?">
                                Yes. Top-performing students who demonstrate exceptional technical mastery and commitment can apply to transition into our premium professional tracks or venture incubation programs.
                            </FAQItem>
                        </div>
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
                    <Link
                        href={`/apply?course=${encodeURIComponent(title)}`}
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

function FAQItem({ question, children }: { question: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#F7F7F4] border border-slate-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
            >
                <span className="text-lg font-bold text-[#002f86]">{question}</span>
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

