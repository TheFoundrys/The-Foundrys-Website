"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Users,
    Target,
    Building2,
    Brain,
    ShieldAlert,
    Zap,
    TrendingUp,
    Rocket,
    ChevronDown,
    Video,
    Play,
    Briefcase,
    Award
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

// Custom Gradient (matching professional page)
const customGradient = "linear-gradient(to right, #0f172a 0%, #1e293b 100%)";
const textGradientClass = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400";

export default function DeliveringClient() {
    const { currency, symbol } = useRegionalPricing();
    const originalPrice = COURSE_PRICING.deliveringAgeOfAI.original[currency];
    const discountedPrice = COURSE_PRICING.deliveringAgeOfAI.discounted[currency];

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
                                <ShieldCheck size={16} /> Executive Leadership Program
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Delivering In the Age of AI <br />
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                We forge innovation as a framework into people trusted to design, engineer, deploy, and govern critical systems in an AI-driven world.
                            </p>

                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Duration</div>
                                        <div className="font-semibold">2 Days Intensive</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Format</div>
                                        <div className="font-semibold">In-person</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/apply?type=executive" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 text-center">
                                    Enroll Now
                                </Link>
                                <a href="#overview" className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700 text-center">
                                    Explore Program
                                </a>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 lg:p-10">
                            <h3 className="text-white text-xl font-bold mb-6">Program Investment</h3>
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="text-4xl lg:text-5xl font-bold text-white">{symbol}{discountedPrice}</span>
                                <span className="text-xl text-slate-500 line-through">{symbol}{originalPrice}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded uppercase">25% Scholarship</span>
                                <span className="text-slate-400 text-sm">Limited time offer</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <InfoRow text="2 Days Intensive Hybrid/In-person" />
                                <InfoRow text="Real-world Problem Statements" />
                                <InfoRow text="Industry Recognized Certification" />
                            </div>

                            <p className="text-slate-500 text-sm font-medium leading-relaxed text-center mt-4">
                                *Flexible payment options available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is this for */}
            <section id="overview" className="py-24 px-6 bg-white border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who is this for</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">You are looking for control, leverage, and authority at the system level.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex">
                            <TargetUserCard
                                title="Senior Technology Leaders"
                                desc="Delivery, Program Managers, Architects, senior engineers and security leads (7 – 15+ year's experience)"
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex">
                            <TargetUserCard
                                title="Founders & CTOs"
                                desc="Early-stage deep-tech founders and CTOs"
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex">
                            <TargetUserCard
                                title="Platform Engineers"
                                desc="AI, cybersecurity, and platform engineers working on real systems"
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex">
                            <TargetUserCard
                                title="Technical Product Leaders"
                                desc="Operating in regulated domains (BFSI, healthcare, defense, infrastructure)"
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex">
                            <TargetUserCard
                                title="Scale-up Engineers"
                                desc="Ex–FAANG / scale-up engineers hitting the 'ceiling' of pure technical growth"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">The Problem You&apos;re Facing</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Senior Tech leaders sit at the most dangerous point in the system:
                            </p>
                            <div className="space-y-4 mb-10">
                                <ProblemPoint text="You own outcomes, but not capital decisions" />
                                <ProblemPoint text="You absorb risk, but don't shape governance" />
                                <ProblemPoint text="You execute AI initiatives, but don't control the architecture" />
                                <ProblemPoint text="You deliver innovation, but value capture flows elsewhere" />
                            </div>
                            <div className="p-6 bg-slate-900 rounded-2xl text-white">
                                <h4 className="text-xl font-bold mb-4 text-blue-400">The Gap is Systems-Level Authority</h4>
                                <p className="text-slate-400 leading-relaxed">
                                    This is career gravity, not career progression. The gap is not skill. The gap is <span className="text-white font-bold">systems-level authority.</span>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">But the ability to:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                                        <span className="text-slate-700">Think across technology, economics, security, and governance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                                        <span className="text-slate-700">Lead high-stakes decisions involving AI and critical infrastructure</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                                        <span className="text-slate-700">Move from &quot;key contributor&quot; to <span className="font-bold">system owner</span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-xl shadow-blue-500/20">
                                <h3 className="text-xl font-bold mb-4">Cohort Structure</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-blue-400/30 pb-2">
                                        <span className="text-blue-100">Profile</span>
                                        <span className="font-bold">7-15+ years experience</span>
                                    </div>
                                    <div className="flex justify-between border-b border-blue-400/30 pb-2">
                                        <span className="text-blue-100">Format</span>
                                        <span className="font-bold">Hybrid, modular, execution-driven</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-blue-100">Duration</span>
                                        <span className="font-bold">2 days In-person/Hybrid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Actually We Do */}
            <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Actually We Do</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Participants are embedded into real, enterprise-grade problem statements.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ActionCard
                            title="AI Platforms"
                            desc="Designing and Engineering secure AI (public and private) platforms for regulated environments"
                        />
                        <ActionCard
                            title="Governance"
                            desc="Governing AI systems under emerging compliance frameworks"
                        />
                        <ActionCard
                            title="Cyber-Resilience"
                            desc="Building cyber-resilient, autonomous response architectures"
                        />
                        <ActionCard
                            title="Legacy Modernization"
                            desc="Re-architecting legacy delivery models for AI-native systems"
                        />
                    </div>
                    <div className="mt-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/3">
                            <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/executive-indian.png"
                                    alt="Executive Focus"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Real-world case studies</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Zap className="text-blue-600" size={20} />
                                    <span className="font-bold text-slate-700">Only live systems</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <TrendingUp className="text-blue-600" size={20} />
                                    <span className="font-bold text-slate-700">Enterprise Revenue Pathways</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Rocket className="text-blue-600" size={20} />
                                    <span className="font-bold text-slate-700">Venture-ready product & Spinout</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Brain className="text-blue-600" size={20} />
                                    <span className="font-bold text-slate-700">Deployable Intelligent Systems</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Senior Tech Leaders Join */}
            <section className="py-24 px-6 bg-white border-b border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Senior Tech leaders Join</h2>
                            <div className="space-y-6">
                                <JoinReason
                                    title="Evolving Roles"
                                    desc="Their role is evolving faster than their authority"
                                />
                                <JoinReason
                                    title="Existential Risk"
                                    desc="AI has turned delivery risk into existential risk"
                                />
                                <JoinReason
                                    title="Real-world Disconnect"
                                    desc="Traditional leadership programs are disconnected from real systems"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">They leave with:</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <OutcomeCard
                                    title="Systems-level credibility"
                                    icon={<ShieldCheck size={24} />}
                                />
                                <OutcomeCard
                                    title="Enterprise-facing authority"
                                    icon={<Award size={24} />}
                                />
                                <OutcomeCard
                                    title="Optionality: promotion, advisory, or venture creation"
                                    icon={<TrendingUp size={24} />}
                                />
                                <OutcomeCard
                                    title="Innovation Framework"
                                    icon={<Zap size={24} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executive Assessment */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <Video size={36} className="text-blue-400" />
                        </div>
                        <h2 className="text-4xl font-bold mb-6">Executive Assessment</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            As part of the application process, participants submit a self-recorded 15-minute video outlining their professional context and learning objectives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AssessmentCard
                            icon={<Play size={24} />}
                            title="Motivation & Goals"
                            desc="Why you want to join the program and what you aim to achieve"
                        />
                        <AssessmentCard
                            icon={<Briefcase size={24} />}
                            title="Professional Context"
                            desc="Your current role, responsibilities, and organizational context"
                        />
                        <AssessmentCard
                            icon={<Target size={24} />}
                            title="Program Alignment"
                            desc="How this program aligns with your leadership and career objectives"
                        />
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-2xl">
                                <Image
                                    src="/sample-certificate.png"
                                    alt="Executive Certificate Sample"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Validate your strategic leadership in the age of AI. Earn a certificate that proves your capability to govern and architect complex intelligent systems.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-blue-100 text-blue-600 shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                                    <span>Shareable on LinkedIn & Resumes</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-700 font-medium">
                                    <div className="p-1 rounded-full bg-blue-100 text-blue-600 shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                                    <span>Verifiable Digital Credential</span>
                                </li>
                            </ul>
                            <Link
                                href="/apply?type=executive"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all"
                            >
                                Apply Now <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Common queries about the executive leadership tracks.</p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem question="Who is this program designed for?">
                            <p className="mb-4">This program is strictly designed for:</p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>Senior Technology Leaders:</strong> Delivery, Program Managers, Architects, senior engineers and security leads.</li>
                                <li><strong>Founders & CTOs:</strong> Navigating technical disruption and scaling innovation.</li>
                                <li><strong>Technical Product Leaders:</strong> Operating in regulated domains.</li>
                            </ul>
                        </FAQItem>
                        <FAQItem question="Do I need a technical background?">
                            While the program is for tech leaders, the focus is on <strong>systems-level authority</strong>, governance, and strategic architecture rather than hands-on coding. A deep conceptual understanding of technology is required.
                        </FAQItem>
                        <FAQItem question="What is the time commitment?">
                            The cohort structure is designed for busy executives, consisting of a 2-day intensive hybrid or in-person session, followed by modular, execution-driven work.
                        </FAQItem>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function InfoRow({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{text}</span>
        </div>
    )
}

function ProblemPoint({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <ShieldAlert className="text-red-500 shrink-0 mt-1" size={20} />
            <span className="text-slate-700 font-medium">{text}</span>
        </div>
    );
}

function ActionCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function JoinReason({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
            <div>
                <h4 className="font-bold text-slate-900">{title}</h4>
                <p className="text-slate-600">{desc}</p>
            </div>
        </div>
    );
}

function OutcomeCard({ title, icon }: { title: string, icon: React.ReactNode }) {
    return (
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center text-center gap-4 hover:border-blue-200 transition-colors">
            <div className="text-blue-600">{icon}</div>
            <span className="font-bold text-slate-800 text-sm">{title}</span>
        </div>
    );
}

function TargetUserCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="w-full h-full p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function AssessmentCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                {icon}
            </div>
            <h4 className="text-lg font-bold mb-3">{title}</h4>
            <p className="text-slate-400 text-sm">{desc}</p>
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
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
