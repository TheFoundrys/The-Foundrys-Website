"use client";
import { motion } from "framer-motion";

export function ProgramHero() {
  return (
    <section className="relative pt-40 pb-20 px-4 min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider"
            >
                Program V.01 // Initializing
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-none"
            >
                THE <br/> FOUNDRY PROTOCOL.
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
            >
                A radical departure from traditional education.<br/>
                <span className="text-slate-900 font-medium">12 Weeks to Architect Status.</span>
            </motion.p>
        </div>
    </section>
  );
}
