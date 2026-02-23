"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export default function EntryLevelQuantumPage() {
    const { currency, symbol } = useRegionalPricing();
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        <Cpu size={16} /> Entry Level Certification Program
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Quantum Launchpad
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Prepare for the paradigm shift. Understanding Qubits and Superposition today is like learning the Internet in 1990. Build a strong foundation for your future in Quantum.
                    </p>
                </div>
            </section>

            {/* Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <CourseCard
                            sku="QC 001"
                            title="Certified in Quantum Fundamentals"
                            originalPrice="10,000"
                            discountedPrice="5,000"
                            duration="4 Weeks"
                            desc="From Linear Algebra to Quantum Hardware in 30 Days. Master the mathematical postulates, quantum logic, and basic circuit design."
                            href="/programs/professional/quantum-computing/certified-professional-in-quantum-fundamentals"
                            persona="For Students & Quantum enthusiasts"
                            isBestSeller={true}
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="Q 001"
                            title="Certified in Quantum Engineering"
                            originalPrice="150,000"
                            discountedPrice="75,000"
                            duration="4 Weeks"
                            desc="Master the physical implementation of qubits and quantum circuitry."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="Q 003"
                            title="Certified in Quantum Computing"
                            originalPrice="150,000"
                            discountedPrice="75,000"
                            duration="4 Weeks"
                            desc="Learn core quantum algorithms and simulation techniques."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="Q 005"
                            title="Certified in Quantum Sensing"
                            originalPrice="150,000"
                            discountedPrice="75,000"
                            duration="4 Weeks"
                            desc="Explore high-precision metrology using quantum properties."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="Q 007"
                            title="Certified in Quantum Communication"
                            originalPrice="150,000"
                            discountedPrice="75,000"
                            duration="4 Weeks"
                            desc="Learn secure communication protocols and QKD."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="Q 009"
                            title="Certified in Quantum Information"
                            originalPrice="150,000"
                            discountedPrice="75,000"
                            duration="4 Weeks"
                            desc="Information theory re-imagined with entanglement and entropy."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="Q 011"
                            title="Certified in Post Quantum Cryptography"
                            originalPrice="150,000"
                            discountedPrice="75,000"
                            duration="4 Weeks"
                            desc="Preparing classical systems to withstand quantum attacks."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="QAI 001"
                            title="Certified in Quantum AI"
                            originalPrice="400,000"
                            discountedPrice="200,000"
                            duration="4 Weeks"
                            desc="The intersection of quantum computing and machine learning."
                            symbol={symbol}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CourseCard({ sku, title, originalPrice, discountedPrice, desc, discountLabel = "50% Discount", href = "/apply", duration = "3 Months", persona = "UG / PG Students", isBestSeller = false, symbol = "₹" }: { sku: string, title: string, originalPrice: string, discountedPrice: string, desc: string, discountLabel?: string, href?: string, duration?: string, persona?: string, isBestSeller?: boolean, symbol?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
            <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase bg-slate-100 px-2 py-1 rounded">{sku}</span>
                    <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                        Professional {duration} Course
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        Hybrid
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        Hands-on Projects
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        Industry Recognized Certification
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-purple-500" />
                        {persona}
                    </div>
                </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between gap-4">
                <div>
                    {isBestSeller && (
                        <div className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wide mb-2 rounded">
                            Bestseller
                        </div>
                    )}
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Starting from</div>
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-400 line-through font-medium">{symbol}{originalPrice}</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-slate-900">{symbol}{discountedPrice}</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded uppercase tracking-wide">{discountLabel}</span>
                        </div>
                    </div>
                </div>
                <Link
                    href={href}
                    className="w-full sm:w-auto md:w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-purple-500/25"
                >
                    View Program <ArrowUpRight size={18} />
                </Link>
            </div>
        </motion.div>
    )
}
