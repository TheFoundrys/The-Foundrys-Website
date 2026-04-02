"use client";

import { motion } from "framer-motion";
import { Phone, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AdmissionsOpen() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 px-6 lg:px-16 border-y border-white/5">
      {/* Ethereal Industrial Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Mono-spaced Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Aurora-like Lime Glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-lime-vibrant/20 blur-[160px] rounded-full animate-aurora mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full animate-smoke" />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content: Strict Left Alignment */}
          <div className="flex flex-col gap-10 items-start text-left">
            {/* Logos - Clean HUD-like design */}
            {/* <div className="flex items-center gap-8">
               <div className="relative group">
                 <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <img src="/logos/logo.png" alt="The Foundry's" className="h-10 w-auto object-contain relative z-10 invert brightness-200" />
               </div>
               <div className="h-6 w-px bg-white/10" />
               <div className="relative group">
                 <img src="/logos/image.png" alt="Keshava College" className="h-8 w-auto object-contain relative z-10 opacity-80 hover:opacity-100 transition-opacity" />
               </div>
            </div> */}

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* HUD Label */}
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lime-vibrant mb-4 block">
                  Foundry Protocol: Admissions
                </span>
                <h2 className="text-9xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9] uppercase italic">
                  ADMISSIONS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-vibrant to-lime-200">OPEN</span>
                </h2>
                {/* Thin underline */}
                <div className="w-24 h-[1px] bg-lime-vibrant mt-6" />
              </motion.div>

              {/* <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-lime-vibrant animate-pulse" />
                <p className="text-slate-300 font-mono text-sm uppercase tracking-wider">
                  System.Status.Registrations: LIVE
                </p>
              </div> */}
            </div>

            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group/title"
                >
                  {/* HUD style metadata label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-vibrant animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                      Program_Manifest: Academic_Year_2025-26
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight flex flex-wrap items-center">
                    <span className="relative inline-block group-hover/title:text-lime-vibrant transition-colors duration-500">
                      B.Sc AI/ML
                      <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-lime-vibrant group-hover/title:w-full transition-all duration-700 ease-out" />
                    </span>
                    <span className="mx-4 text-slate-700 font-light hidden md:inline">/</span>
                    <span className="relative inline-block group-hover/title:text-lime-vibrant transition-colors duration-500 delay-75">
                      BCA AI Professional
                      <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-lime-vibrant group-hover/title:w-full transition-all duration-700 ease-out delay-75" />
                    </span>
                  </h3>
                </motion.div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-px w-8 bg-lime-vibrant/30" />
                  <p className="text-slate-400 text-xs font-mono tracking-widest uppercase">
                    Partnered & Affiliated Universities
                  </p>
                </div>
                <p className="text-slate-400 mt-4 text-lg font-medium leading-relaxed max-w-md">
                  India's most advanced undergraduate programs for future-ready architects.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
                <div className="group space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Contact Channel</p>
                  <div className="flex items-center gap-3 text-xl font-bold hover:text-lime-vibrant transition-colors">
                    <Phone size={18} className="text-lime-vibrant" />
                    <a href="tel:+917981171474">+91 79811 71474</a>
                  </div>
                </div>
                <div className="group space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Web Protocol</p>
                  <div className="flex items-center gap-3 text-xl font-bold hover:text-lime-vibrant transition-colors">
                    <Globe size={18} className="text-lime-vibrant" />
                    <a href="https://www.thefoundrys.com" target="_blank">thefoundrys.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-4">
              {/* EMI Badge - Industrial Glass look */}
              <div className="relative p-[1px] rounded-md bg-gradient-to-br from-white/20 to-transparent shadow-2xl overflow-hidden group">
                <div className="bg-slate-900 px-6 py-4 rounded-md flex flex-col items-center leading-none relative z-10 backdrop-blur-md">
                  <span className="text-2xl font-black italic text-white group-hover:text-lime-vibrant transition-colors">EMI</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mt-1 font-bold">Option_Available</span>
                </div>
              </div>

              <Link href="https://compass.thefoundrys.com/login" className="relative group px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl overflow-hidden hover:scale-105 transition-all shadow-xl hover:shadow-lime-vibrant/20">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Apply Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-lime-vibrant translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Content: Depth & Layering */}
          <div className="relative h-[600px] lg:h-[750px] flex items-center justify-center lg:justify-end">
            {/* Background elements - Glass Panels */}
            <div className="absolute top-1/4 right-1/4 w-full h-full border border-white/5 bg-white/[0.02] backdrop-blur-sm -z-10 rounded-3xl rotate-6" />
            <div className="absolute bottom-1/4 left-1/4 w-full h-full border border-lime-vibrant/10 bg-lime-vibrant/[0.01] backdrop-blur-[2px] -z-10 rounded-3xl -rotate-3" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full p-4"
            >
              {/* Frame and Image */}
              <div className="relative w-full h-full overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(163,230,53,0.1)] group">
                {/* HUD Details in Frame */}
                {/* <div className="absolute top-4 left-4 z-20 px-3 py-1 border border-white/20 bg-black/40 backdrop-blur-md text-[8px] font-mono text-white/60 tracking-widest uppercase">
                  Subject.AI_Architect_ID.001
                </div> */}

                <img
                  src="/landing.jpg"
                  alt="AI Student"
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-110"
                />

                {/* Gradient Overlay for integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Modern floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 border border-slate-200 shadow-2xl group cursor-default">
                <div className="absolute inset-0 bg-lime-vibrant translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 opacity-[0.05]" />
                <p className="text-slate-900 font-bold text-sm tracking-widest uppercase leading-tight relative z-10">
                  Propelling <br />
                  <span className="text-lime-vibrant">Future</span> <br />
                  Innovators
                </p>
                <div className="w-8 h-[2px] bg-slate-900 mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
