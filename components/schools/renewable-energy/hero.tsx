"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function RenewableEnergyHero() {
  return (
    <>
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            School of Sustainability
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase font-serif school-title-white">
            Renewable Energy
          </h1>
        </div>
      </section>

      {/* 2. INTRODUCTION & SPECS SECTION */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
        <section className="bg-white p-8 sm:p-12 md:p-16 text-[#4a1525]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
              {/* Left: Intro & Toggles */}
              <div className="max-w-3xl">
                <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 font-mono">Power & Engineering</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#4a1525] font-serif mb-6 leading-tight">
                  Graduate as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Energy Architect</span> with Mastery, Vision & Global Impact.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
                  Not just panels. A 3-year immersion into Smart Grids, Storage Systems, and Policy. <br/>
                  Built by Leaders, for future Pioneers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/apply">
                    <button className="px-8 py-3 bg-[#8b263e] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#6b1d2f] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-rose-900/25">
                      Apply for Program
                    </button>
                  </Link>
                  <button 
                    onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-slate-50 text-slate-600 hover:text-slate-950 border border-slate-200 hover:bg-slate-100 rounded-full font-bold text-sm tracking-wide transition-colors"
                  >
                    View Syllabus
                  </button>
                </div>
              </div>

              {/* Right: Info Boxes in clean grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 p-8 bg-slate-50 border border-slate-200 rounded-[2rem] min-w-full lg:min-w-[340px]">
                {/* Degrees */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Available Degrees</p>
                  <div className="space-y-1.5 border-l-2 border-green-500 pl-4">
                    <p className="text-sm font-bold text-[#4a1525]">B.Sc in Renewable Energy</p>
                  </div>
                </div>

                {/* Partners */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Partner Institutions</p>
                  <div className="space-y-1.5 border-l-2 border-cyan-500 pl-4">
                    <p className="text-sm font-bold text-[#4a1525]">Keshava Degree College</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold mb-3 font-mono">Industry Credentials</p>
                  <div className="flex gap-4 border-l-2 border-purple-500 pl-4 items-center">
                    <div>
                      <span className="text-sm font-extrabold text-rose-700 tracking-wider block leading-none">FCEP</span>
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
            <Link href="/apply" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-[#8b263e] text-white border border-[#8b263e] font-bold rounded-xl hover:bg-[#6b1d2f] transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(139,38,62,0.15)] whitespace-nowrap text-sm">
              Apply Now
            </Link>
            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3.5 bg-white text-slate-750 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all hover:scale-[1.02] whitespace-nowrap text-sm">
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
