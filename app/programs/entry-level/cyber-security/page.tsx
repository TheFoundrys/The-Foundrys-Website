"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";

export default function EntryLevelCyberSecurityPage() {
    const { symbol, currency } = useRegionalPricing();

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                        <ShieldCheck size={16} /> Entry Level Certification Program
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Cyber Launchpad
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Start your journey into Cyber Security. Master the fundamentals of digital defense and secure the future.
                    </p>
                </div>
            </section>

            {/* Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <CourseCard
                            sku="CC 001"
                            title="Certified in Cyber Security (CC)"
                            originalPrice={COURSE_PRICING.certifiedInCybersecurity.original[currency]}
                            discountedPrice={COURSE_PRICING.certifiedInCybersecurity.freshers[currency]}
                            desc="Master (ISC)² cybersecurity domains. Build a strong foundation in network security, access control, and security operations."
                            symbol={symbol}
                            href="/programs/entry-level/cyber-security/certified-in-cybersecurity"
                            enrollHref="/payment?course=certifiedInCybersecurity&type=freshers"
                        />
                        <CourseCard
                            sku="CS 003"
                            title="Certified in VAPT for AI"
                            originalPrice="1,50,000"
                            discountedPrice="75,000"
                            desc="Introduction to Vulnerability Assessment and Penetration Testing with a focus on AI components."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="CS 005"
                            title="Certified in Security for AI"
                            originalPrice="1,50,000"
                            discountedPrice="75,000"
                            desc="Understanding the unique security challenges posed by artificial intelligence and how to mitigate them."
                            symbol={symbol}
                        />
                        <CourseCard
                            sku="CS 007"
                            title="Certified in AI Security"
                            originalPrice="1,50,000"
                            discountedPrice="75,000"
                            desc="Master the core protocols for securing AI systems and protecting neural networks."
                            symbol={symbol}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function CourseCard({ sku, title, originalPrice, discountedPrice, desc, discountLabel = "50% Discount", href = "/apply", enrollHref, duration = "6 Weeks", persona = "UG / PG Students", isBestSeller = false, symbol = "₹" }: { sku: string, title: string, originalPrice: string, discountedPrice: string, desc: string, discountLabel?: string, href?: string, enrollHref?: string, duration?: string, persona?: string, isBestSeller?: boolean, symbol?: string }) {
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
                        Entry-Level {duration} Course
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        Hybrid Format
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        (ISC)² Alignment
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
                        Professional Labs
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500" />
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
                <div className="flex flex-col gap-2 w-full sm:w-auto md:w-full lg:w-auto">
                    <Link
                        href={enrollHref || href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg hover:shadow-teal-500/25 whitespace-nowrap"
                    >
                        Enroll Now <ArrowUpRight size={18} />
                    </Link>
                    {enrollHref && (
                        <Link
                            href={href}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors whitespace-nowrap"
                        >
                            View Program
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

