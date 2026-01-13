"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Leaf, Globe, TrendingUp, Users, Scale, Building2 } from "lucide-react";

export function ESGClient() {
  return (
    <main className="min-h-screen bg-slate-50 select-none">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[70vh] flex flex-col justify-center bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-5799ea43b853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 font-bold tracking-wider text-xs mb-6 uppercase backdrop-blur-sm">
                    School of Sustainability
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-5xl">
                    Master the Trinity of <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Modern Governance.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-10">
                    Environmental stewardship. Social equity. Corporate governance. 
                    Become the architect of compliant, ethical, and highly profitable systems for the future economy.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transform hover:-translate-y-1">
                        APPLY FOR ESG PROGRAM
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Curriculum / Philosophy */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Profit meets <br/>
                        <span className="text-emerald-600">Purpose.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        ESG is no longer a "nice to have". It is the fundamental operating system of modern capitalism. Investors demand it, customers expect it, and the planet needs it.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        In this program, you will learn how to design business models that are regenerative by default. You will study Green Finance, Carbon Accounting, and Corporate Governance structures that withstand the test of time.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Environmental</h3>
                        <p className="text-sm text-slate-500">Carbon footprints, resource efficiency, and biodiversity.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <Users className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Social</h3>
                        <p className="text-sm text-slate-500">Labor standards, community impact, and DEI.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <Scale className="w-10 h-10 text-indigo-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Governance</h3>
                        <p className="text-sm text-slate-500">Board structure, ethics, and executive pay.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Green Finance</h3>
                        <p className="text-sm text-slate-500">Sustainable investing and carbon markets.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
