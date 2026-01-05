"use client";
import { motion } from "framer-motion";

export function CampusHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Modern Minimalist Office */}
        <div className="absolute inset-0 z-0">
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2070&q=80"
                alt="Modern Office" 
                className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/90" />
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-900/10 bg-white/50 backdrop-blur-md text-slate-900 font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
            >
                HITECH CITY, HYDERABAD
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-9xl font-bold tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
            >
                NOT A CAMPUS.
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed"
            >
                We traded lecture halls for <span className="font-bold border-b-2 border-orange-500">lounges</span>. <br/>
                We traded professors for <span className="font-bold border-b-2 border-blue-500">CTOs</span>.
            </motion.p>
        </div>
    </section>
  );
}
