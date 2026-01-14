"use client";

import { motion } from "framer-motion";

const SKILLS = [
    "Solidity & Vyper",
    "Rust (Solana/Near)",
    "Cryptography",
    "Distributed Systems",
    "DeFi Architecture",
    "Tokenomics",
    "Zero-Knowledge Proofs",
    "Smart Contract Security",
    "Web3.js / Ethers.js",
    "IPFS & Arweave",
    "Consensus Mechanisms",
    "Governance Design"
];

export function BlockchainSkills() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="md:w-1/3">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                    The <span className="text-purple-400">Stack</span> you will master.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    From low-level cryptographic primitives to high-level decentralized application architecture.
                </p>
            </div>

            <div className="md:w-2/3">
                <div className="flex flex-wrap gap-3">
                    {SKILLS.map((skill, index) => (
                        <motion.span 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-colors cursor-default text-sm md:text-base font-medium"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
