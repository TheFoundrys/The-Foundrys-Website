"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Network, ShieldCheck, BrainCircuit, Calendar, Wifi, Target, ArrowDown, CheckCircle2, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { PackageDetailsModal } from "@/components/programs/PackageDetailsModal";

// Custom Gradient Style
const customGradient = "linear-gradient(to right, lab(44.0605 29.0279 -86.0352) 0%, lab(38.4009 52.6132 -92.3857) 100%)";
const textGradientClass = "text-transparent bg-clip-text";

export default function ProfessionalProgramPage() {
    const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

    useEffect(() => {
        document.title = "Post Graduate Certification Programs | The Foundry";
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 px-6 relative overflow-hidden bg-slate-900">
                <div className="container mx-auto max-w-6xl relative z-20">
                    <div className="max-w-4xl pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
                                    Graduate as a <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Deep Tech Leader</span> with <br/>
                                    Mastery, Vision & <br/>
                                    Global Impact.
                                </h1>
                            </div>
                            <p className="text-xl md:text-2xl text-slate-300 mt-6 mb-10 leading-relaxed max-w-3xl font-normal">
                                Accelerate your career with our Post Graduate Programs. A rigorous, applied pathway into Applied AI & GenAI, Cybersecurity, Quantum Computing, and Blockchain built by industry leaders for future pioneers.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#curriculum"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-[#002f86] rounded-full font-bold hover:bg-white/20 transition-colors"
                                >
                                    Explore Programs
                                </a>
                            </div>

                            {/* Strategic Program Specs */}
                            {/* <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                                <HeroStat icon={<Wifi size={20} />} label="Format" value="Hybrid" sub="In-Person + Virtual" />
                                <HeroStat icon={<Zap size={20} />} label="Approach" value="Applied" sub="Concept + Practice" />
                                <HeroStat icon={<Target size={20} />} label="Outcome" value="Ready" sub="For Specialization" />
                                <HeroStat icon={<Calendar size={20} />} label="Duration" value="Program-dependent" sub="Intensive Cohort" />
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Domains */}
            <section className="py-16 px-6 bg-white" id="curriculum">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Choose your career transition</h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                            Precision-engineered learning tracks. Each domain is structured as a comprehensive, standalone post graduate program allowing you to bypass generalities and build deep, vertical expertise in the technology defining your future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DomainCard
                            title="Applied AI & GenAI Program"
                            tagline="From Logic to Intelligence."
                            desc="Move beyond basic Python. Master Neural Networks, NLP, and Computer Vision to build systems that can see, read, and decide."
                            icon={<BrainCircuit />}
                            selfPacedHref="https://compass.thefoundrys.com/courses/ai"
                            onOpenPackage={() => setSelectedPackageId("professional-ai")}
                        />
                        <DomainCard
                            title="Cybersecurity Analyst Program"
                            tagline="Defend the Digital Frontier."
                            desc="The world is digital, and it is under attack. Learn the offensive and defensive strategies required to secure networks and data."
                            icon={<ShieldCheck />}
                            selfPacedHref="https://compass.thefoundrys.com/courses/cyber-security"
                            onOpenPackage={() => setSelectedPackageId("professional-cyber-security")}
                        />
                        <DomainCard
                            title="Quantum Computing Program"
                            tagline="The Next Computational Revolution."
                            desc="Prepare for the paradigm shift. Understanding Qubits and Superposition today is like learning the Internet in 1990."
                            icon={<Cpu />}
                            selfPacedHref="https://compass.thefoundrys.com/courses/quantum-computing"
                            onOpenPackage={() => setSelectedPackageId("professional-quantum-computing")}
                        />
                        <DomainCard
                            title="Blockchain Program"
                            tagline="Architect the Trust Layer."
                            desc="Explore the technology behind Web3. Learn how decentralized ledgers and smart contracts are rewriting the rules of finance and ownership."
                            icon={<Network />}
                            selfPacedHref="https://compass.thefoundrys.com/"
                            onOpenPackage={() => setSelectedPackageId("professional-blockchain")}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6 bg-slate-50">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about the professional foundation tracks.</p>
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

// Optimized Stat Component for Hero
function HeroStat({ icon, label, value, sub, extraGap = false }: { icon: React.ReactNode, label: string, value: string, sub: string, extraGap?: boolean }) {
    return (
        <div className={`flex items-start ${extraGap ? "gap-1" : "gap-4"} group`}>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 shrink-0 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{label}</div>
                <div
                    style={{ backgroundImage: customGradient }}
                    className={`${textGradientClass} font-bold whitespace-nowrap text-base md:text-lg`}
                >
                    {value}
                </div>
                <div className="text-xs text-slate-400 font-medium">{sub}</div>
            </div>
        </div>
    );
}

function DomainCard({ title, tagline, desc, icon, selfPacedHref, onOpenPackage }: { title: string, tagline?: string, desc: string, icon: any, selfPacedHref?: string, onOpenPackage: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
            <div className="absolute top-6 right-6 z-10">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 whitespace-nowrap">
                    Post Graduate Program
                </span>
            </div>

            <div className="p-8 flex-grow">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0 relative overflow-hidden bg-slate-50">
                        <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                        <div className="relative z-10 text-slate-900">
                            {React.cloneElement(icon, { size: 28, strokeWidth: 1.5 })}
                        </div>
                    </div>
                    <div className="flex-1 pr-28">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
                        <div className="text-sm font-semibold text-blue-600">{tagline}</div>
                    </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Hybrid Learning
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Hands-on Projects
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Industry Certification
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        Expert Mentorship
                    </div>
                </div>
            </div>

            <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-start gap-2">
                <button
                    onClick={onOpenPackage}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 bg-slate-900 text-white text-xs md:text-sm rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-slate-950/25 whitespace-nowrap text-center cursor-pointer border-none outline-none"
                >
                    View Package <ArrowUpRight size={14} className="shrink-0" />
                </button>
            </div>
        </motion.div>
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
