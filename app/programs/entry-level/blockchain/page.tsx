"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Network } from "lucide-react";
import Link from "next/link";
import { useRegionalPricing } from "@/lib/useRegionalPricing";

export default function EntryLevelBlockchainPage() {
    const { symbol, currency } = useRegionalPricing();

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                        <Network size={16} /> Entry Level Certification Program
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Blockchain Launchpad
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Start your journey into Decentralized Technologies. Master the fundamentals of Blockchain and Web3.
                    </p>
                </div>
            </section>

            {/* Course Listing */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <CourseCard
                            sku="BC 001"
                            title="Certified in Block Chain"
                            priceINR={{ original: "50,000", discounted: "25,000" }}
                            priceUSD={{ original: "1,000", discounted: "500" }}
                            desc="Fundamentals of distributed ledger technology, consensus mechanisms, and blockchain architecture basics."
                            symbol={symbol}
                            currency={currency}
                        />
                        <CourseCard
                            sku="BC 003"
                            title="Certified in NFT"
                            priceINR={{ original: "75,000", discounted: "37,500" }}
                            priceUSD={{ original: "1,500", discounted: "750" }}
                            desc="Introduction to Non-Fungible Tokens, standards, and the creative economy on the blockchain."
                            symbol={symbol}
                            currency={currency}
                        />
                        <CourseCard
                            sku="BC 005"
                            title="Certified in Decentralized Systems"
                            priceINR={{ original: "100,000", discounted: "50,000" }}
                            priceUSD={{ original: "2,000", discounted: "1,000" }}
                            desc="Understanding decentralized architectures, peer-to-peer networks, and distributed computing models."
                            symbol={symbol}
                            currency={currency}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

interface PricePair {
    original: string;
    discounted: string;
}

function CourseCard({ sku, title, priceINR, priceUSD, desc, symbol, currency }: { sku: string, title: string, priceINR: PricePair, priceUSD: PricePair, desc: string, symbol: string, currency: 'INR' | 'USD' }) {
    const originalPrice = currency === 'USD' ? priceUSD.original : priceINR.original;
    const discountedPrice = currency === 'USD' ? priceUSD.discounted : priceINR.discounted;

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
                        Entry-Level Course
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
                    <CheckCircle2 size={16} className="text-indigo-500" /> Hybrid Format
                    <span className="mx-2">•</span>
                    <CheckCircle2 size={16} className="text-indigo-500" /> Weekend compatible
                </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Starting from</div>
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-400 line-through font-medium">{symbol}{originalPrice}</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-slate-900">{symbol}{discountedPrice}</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded uppercase tracking-wide">50% Discount</span>
                        </div>
                    </div>
                </div>
                <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-indigo-500/25"
                >
                    View Program <ArrowUpRight size={18} />
                </Link>
            </div>
        </motion.div>
    )
}
