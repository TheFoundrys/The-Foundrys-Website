"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Network, Database, Lock } from "lucide-react";

export function BlockchainHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white selection:bg-purple-100">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 select-none bg-white" />
      
      {/* Animated Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-30 animate-pulse pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-950 mb-6 leading-tight"
          >
            Decentralized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl leading-relaxed"
          >
            Move beyond hype. Engineer the decentralized protocols, smart contracts, and zero-knowledge systems that will architect the new internet.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                <Network className="text-purple-600" size={20} />
                <span className="font-semibold text-slate-700">Protocol Engineering</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                <Database className="text-violet-600" size={20} />
                <span className="font-semibold text-slate-700">DeFi Infrastructure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                <Lock className="text-indigo-600" size={20} />
                <span className="font-semibold text-slate-700">Zero-Knowledge Proofs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
