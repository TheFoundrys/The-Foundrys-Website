"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import 3D component to avoid SSR issues
const ParticleForge = dynamic(() => import("@/components/3d/particle-forge"), { ssr: false });

export function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      
      {/* 3D Animation: Full Screen Background */}
      <div className="absolute inset-0 z-0">
           <ParticleForge />
           {/* Gradient Overlay to ensure text readability on the left */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-center items-center lg:items-start px-6 lg:px-16 pointer-events-none">
        
        {/* Text Content - Mobile: Centered, Desktop: Left Aligned */}
        <div className="max-w-3xl pointer-events-auto mt-0 lg:mt-0 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
                <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-bold tracking-tighter text-white leading-[0.9] select-none uppercase drop-shadow-lg text-center lg:text-left">
                FORGING<br/>ARCHITECTS
                </h1>
            </motion.div>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-slate-200 text-lg md:text-2xl font-medium tracking-wide mb-10 max-w-xl text-center lg:text-left drop-shadow-md"
            >
                We don’t train junior engineers. We forge Founders & Leaders.<br/>
                <span className="text-slate-400 line-through decoration-slate-400 opacity-80">Not a College.</span> India’s First Deep Tech & Venture Ecosystem.
            </motion.p>

            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
                <Link href="/apply" className="relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden group hover:scale-105 transition-all shadow-xl hover:shadow-2xl hover:bg-slate-50 ring-2 ring-white/50 w-fit">
                     <span className="relative flex items-center gap-2">
                        Enter The Foundry <span className="text-slate-600 group-hover:translate-x-1 transition-transform">→</span>
                     </span>
                </Link>
            </motion.div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}
