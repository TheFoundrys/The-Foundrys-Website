"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Network, Database, Lock } from "lucide-react";

export function BlockchainHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A051E] selection:bg-purple-500/30">
      {/* Background Gradients & Image */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/images/program-bg/blockchain-hero.png"
            alt="Blockchain Network Background"
            fill
            className="object-cover opacity-40 mix-blend-screen"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A051E] via-transparent to-transparent" />
      </div>
      
      {/* Animated Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight"
          >
            Decentralized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            Move beyond hype. Engineer the decentralized protocols, smart contracts, and zero-knowledge systems that will architect the new internet.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-sm">
                <Network className="text-purple-400" size={20} />
                <span className="font-semibold text-slate-200">Protocol Engineering</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-sm">
                <Database className="text-violet-400" size={20} />
                <span className="font-semibold text-slate-200">DeFi Infrastructure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-sm">
                <Lock className="text-indigo-400" size={20} />
                <span className="font-semibold text-slate-200">Zero-Knowledge Proofs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
