"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Leaf, Globe, TrendingUp, Users, Scale, Building2 } from "lucide-react";
import Link from "next/link";

export function ESGClient() {
  return (
    <main className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-800 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
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
 
      {/* 2. INTRODUCTION & SPECS SECTION */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
        <section className="bg-white p-8 sm:p-12 md:p-16 text-[#031a57]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
              {/* Left: Intro */}
              <div className="max-w-3xl">
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
              </div>

              {/* Right: Info Boxes in clean grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 p-8 bg-slate-50 border border-slate-200 rounded-[2rem] min-w-full lg:min-w-[340px]">
                {/* Degrees */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Available Degrees</p>
                  <div className="space-y-1.5 border-l-2 border-emerald-500 pl-4">
                    <p className="text-sm font-bold text-[#031a57]">B.Sc in ESG & Sustainability</p>
                  </div>
                </div>

                {/* Partners */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Partner Institutions</p>
                  <div className="space-y-1.5 border-l-2 border-cyan-500 pl-4">
                    <p className="text-sm font-bold text-[#031a57]">Keshava Degree College</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Industry Credentials</p>
                  <div className="flex gap-4 border-l-2 border-purple-500 pl-4 items-center">
                    <div>
                      <span className="text-sm font-extrabold text-blue-600 tracking-wider block leading-none">FCEP</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Executive</span>
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-cyan-600 tracking-wider block leading-none">FCIP</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Practitioner</span>
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-purple-600 tracking-wider block leading-none">FFP</span>
                      <span className="text-[8px] text-slate-500 uppercase tracking-widest font-semibold mt-1 block">Professional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details specs block (nested inside card) */}
        <div className="bg-[#F7F7F4] border-t border-slate-200/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-14 flex-1 text-left w-full">
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Length</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">3-Year Full-Time</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Delivery Mode</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">On-Campus, Immersive</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Campus Location</p>
              <p className="text-base sm:text-lg font-bold text-slate-800">Hyderabad, India</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Cohort Status</p>
              <p className="text-base sm:text-lg font-bold text-emerald-600">Admissions Closed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-[#002f86] text-white border border-[#002f86] font-bold rounded-xl hover:bg-[#002f86]/90 transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,47,134,0.15)] whitespace-nowrap text-sm">
              Apply Now
            </Link>
            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-white text-slate-750 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all hover:scale-[1.02] whitespace-nowrap text-sm">
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
 
      {/* Curriculum / Philosophy */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-16 overflow-hidden relative">
        <section className="p-8 sm:p-12 md:p-16 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#031a57] mb-6 tracking-tight font-serif">
                  Profit meets <br/>
                  <span className="text-emerald-600">Purpose.</span>
                </h2>
                <p className="text-base text-slate-650 leading-relaxed mb-6 font-light">
                  ESG is no longer a &quot;nice to have&quot;. It is the fundamental operating system of modern capitalism. Investors demand it, customers expect it, and the planet needs it.
                </p>
                <p className="text-base text-slate-650 leading-relaxed font-light">
                  In this program, you will learn how to design business models that are regenerative by default. You will study Green Finance, Carbon Accounting, and Corporate Governance structures that withstand the test of time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/65 shadow-sm">
                  <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2 font-serif">Environmental</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Carbon footprints, resource efficiency, and biodiversity.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/65 shadow-sm">
                  <Users className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2 font-serif">Social</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Labor standards, community impact, and DEI.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/65 shadow-sm">
                  <Scale className="w-10 h-10 text-indigo-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2 font-serif">Governance</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Board structure, ethics, and executive pay.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/65 shadow-sm">
                  <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2 font-serif">Green Finance</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Sustainable investing and carbon markets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
