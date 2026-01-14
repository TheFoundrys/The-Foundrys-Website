"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Zap, Network } from "lucide-react";
import Link from "next/link";

export function OnlineHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
        ref={containerRef} 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-40 bg-[url('/images/online-learning-bg.jpg')] bg-cover bg-[center_top_-50px]"
    >
      {/* Overlay for readability - lighter to see image */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-0" />

      {/* Abstract Background Elements - Apple-style Blur */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y, opacity }}
            className="flex flex-col items-center"
        >


            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
                Learning without <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Boundaries.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                World-class executive education and online degrees from The Foundry's. 
                Master Deep Tech, Strategy, and Leadership from anywhere in the world.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <Link 
                    href="#courses" 
                    className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                    Explore Programs <ArrowRight size={18} />
                </Link>
                <Link 
                    href="https://compass.thefoundrys.com" 
                    target="_blank"
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center gap-2 group"
                >
                    <Network size={18} className="text-blue-600 group-hover:rotate-12 transition-transform" />
                    Compass Login
                </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
