"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Activity, ShieldAlert, ScanLine, RotateCw } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  if (!mounted) return null; // Prevent hydration mismatch by deferring render until client-side
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 flex items-center justify-center font-mono selection:bg-slate-300 transform-gpu perspective-[2000px]">
      
      {/* --- Global Background: Clean Room Aesthetics --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-200 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.1]" />

      {/* --- Ambient Fog: Radiating from Center --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-[150vmax] h-[150vmax] bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] blur-3xl opacity-50"
          />
      </div>

      {/* --- THE QUANTUM CORE (Central 3D Structure) --- */}
      <div className="relative z-10 flex flex-col items-center justify-center preserve-3d">
          
          {/* Layer 1: Outer Containment Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full border border-slate-200 border-dashed opacity-40"
              />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[70vw] h-[70vw] md:w-[500px] md:h-[500px] rounded-full border-[1px] border-slate-300 opacity-60"
              />
              {/* HUD Ticks */}
               <motion.div 
                 animate={{ rotate: 180 }}
                 transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[85vw] h-[85vw] md:w-[650px] md:h-[650px] rounded-full border border-slate-100 opacity-30 flex items-center justify-center"
              >
                  {[0, 90, 180, 270].map((deg) => (
                      <div key={deg} className="absolute w-4 h-4 bg-slate-200 rounded-full" style={{ transform: `rotate(${deg}deg) translateX(325px)` }} />
                  ))}
              </motion.div>
          </div>

          {/* Layer 2: Reactor Core (Rotating 3D Rings) */}
          <div className="relative flex items-center justify-center preserve-3d" style={{ perspective: "1000px" }}>
              {/* Ring A - X Axis */}
              <motion.div
                animate={{ rotateX: 360, rotateY: 45 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[50vw] h-[50vw] md:w-[400px] md:h-[400px] rounded-full border-[2px] border-slate-400/30 shadow-[0_0_50px_rgba(0,0,0,0.05)]"
                style={{ transformStyle: 'preserve-3d' }}
              />
              {/* Ring B - Y Axis */}
              <motion.div
                animate={{ rotateY: 360, rotateX: 45 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[45vw] h-[45vw] md:w-[350px] md:h-[350px] rounded-full border-[2px] border-slate-400/30 shadow-[0_0_50px_rgba(0,0,0,0.05)]"
                style={{ transformStyle: 'preserve-3d' }}
              />
               {/* Ring C - Z Axis Tilt */}
               <motion.div
                animate={{ rotateZ: 360, rotateX: 60 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[55vw] h-[55vw] md:w-[450px] md:h-[450px] rounded-full border border-slate-300/50"
                style={{ transformStyle: 'preserve-3d' }}
              />
              
              {/* Volumetric 404 Payload */}
              <div className="relative z-20 w-80 h-40 flex items-center justify-center perspective-[500px]">
                  <motion.div
                    animate={{ 
                        rotateY: [0, 10, 0, -10, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative text-center preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                        {/* Shadow/Echo Layer */}
                        <h1 className="absolute top-0 left-0 text-[8rem] md:text-[10rem] font-black leading-none text-slate-200 blur-sm translate-z-[-20px] scale-95 opacity-50 select-none">
                            404
                        </h1>
                        {/* Main Payload */}
                        <h1 className="text-[8rem] md:text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 drop-shadow-2xl select-none relative z-10">
                            404
                        </h1>
                        {/* Glitch Overlay */}
                        <motion.h1 
                            animate={{ opacity: [0, 0, 1, 0, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                            className="absolute top-0 left-0 text-[8rem] md:text-[10rem] font-black leading-none text-red-500 mix-blend-color-burn opacity-0 select-none z-20"
                        >
                            404
                        </motion.h1>
                  </motion.div>
              </div>

          </div>

          {/* Layer 3: Technical Status Labels */}
          <div className="mt-16 text-center space-y-2 relative z-30">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/5 rounded border border-slate-900/10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase backdrop-blur-sm"
              >
                  <ShieldAlert className="w-3 h-3" />
                  Sector_Not_Found
              </motion.div>
              
              <h2 className="text-sm md:text-base font-medium text-slate-400 tracking-widest uppercase">
                  Anomaly Detected in Grid
              </h2>
              
              <div className="grid grid-cols-2 gap-8 mt-8 border-t border-slate-200 pt-8 w-64 mx-auto">
                  <div className="text-right border-r border-slate-200 pr-4">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Status</div>
                      <div className="text-lg font-bold text-slate-900">Critical</div>
                  </div>
                   <div className="text-left pl-4">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Signal</div>
                      <div className="text-lg font-bold text-slate-900">0.00%</div>
                  </div>
              </div>
          </div>

          {/* Layer 4: Interactive Controls */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="mt-12"
          >
              <Link href="/">
                <button className="group relative px-10 py-4 bg-slate-900 text-white overflow-hidden rounded-full font-bold tracking-widest text-sm uppercase transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(15,23,42,0.3)]">
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-3">
                        <RotateCw className="w-4 h-4 animate-spin" />
                        Redirecting in {countdown}s...
                    </span>
                </button>
              </Link>
          </motion.div>

      </div>

      {/* --- Sci-Fi Decor: Corner Data --- */}
      <div className="absolute top-8 left-8 hidden md:block opacity-30">
          <ScanLine className="w-8 h-8 text-slate-900 mb-2" />
          <div className="text-[10px] font-mono text-slate-900">
              SYS.ID: 994-Alpha<br/>
              LOC: UNKNOWN
          </div>
      </div>
       <div className="absolute bottom-8 right-8 hidden md:block opacity-30 text-right">
          <div className="flex gap-1 justify-end mb-2">
              <div className="w-1 h-4 bg-slate-900 animate-pulse" />
              <div className="w-1 h-6 bg-slate-900 animate-[pulse_1.5s_infinite]" />
              <div className="w-1 h-3 bg-slate-900 animate-[pulse_2s_infinite]" />
          </div>
          <div className="text-[10px] font-mono text-slate-900">
              CORE_STABILITY: 0%<br/>
              ATTEMPTING REBOOT
          </div>
      </div>

    </main>
  );
}
