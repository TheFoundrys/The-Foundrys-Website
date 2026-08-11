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

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 px-6 relative z-10" style={{ backgroundColor: "#F0DFDF" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 font-mono">Power & Engineering</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif mb-6 leading-tight">
              Graduate as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Energy Architect</span> with Mastery, Vision & Global Impact.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
              Not just panels. A 3-year immersion into Smart Grids, Storage Systems, and Policy. <br/>
              Built by Leaders, for future Pioneers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply">
                <button className="px-8 py-3 bg-[#002f86] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#031a57] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/25">
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
        </div>
      </section>
    </>
  );
}
