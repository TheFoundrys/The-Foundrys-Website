"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Leaf, Globe, TrendingUp, Users, Scale, Building2 } from "lucide-react";
import Link from "next/link";

export function ESGClient() {
  return (
    <main className="min-h-screen bg-slate-50 select-none">
      <Navbar />
      
      {/* 1. TOP BANNER IMAGE SECTION */}
      <section className="relative h-[260px] md:h-[380px] mt-16 flex items-center justify-center overflow-hidden">
        <style dangerouslySetInnerHTML={{
            __html: `
            .school-title-white {
                color: #ffffff !important;
            }
            .school-tag-white {
                color: #ffffff !important;
                border-color: rgba(255, 255, 255, 0.2) !important;
                background-color: rgba(255, 255, 255, 0.1) !important;
            }
            `
        }} />
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="/images/classroom_session.png" 
            alt="Classroom Session" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm school-tag-white">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            School of Sustainability
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase font-serif school-title-white">
            ESG & Governance
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#002f86] text-xs font-bold uppercase tracking-widest mb-3 font-mono">Strategy & Governance</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#031a57] font-serif mb-6 leading-tight">
              Master the Trinity of Modern Governance.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
              Environmental stewardship. Social equity. Corporate governance. <br/>
              Become the architect of compliant, ethical, and highly profitable systems for the future economy.
            </p>
            <div className="flex gap-4">
              <Link href="/apply">
                <button className="px-8 py-3 bg-[#002f86] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#031a57] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/25">
                  Apply for ESG Program
                </button>
              </Link>
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
