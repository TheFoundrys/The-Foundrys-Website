"use client";

import { motion } from "framer-motion";
import { Layers, Shield, Cpu, Code2 } from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "Full-Stack Web3",
    description: "Don't just write Solidity. Understand distributed systems, consensus algorithms, and P2P networking from the ground up."
  },
  {
    icon: Shield,
    title: "Security Scaling",
    description: "Deep dive into smart contract auditing, formal verification, and advanced cryptographic primitives."
  },
  {
    icon: Cpu,
    title: "ZK Engineering",
    description: "Master the frontier of privacy and scalability with Zero-Knowledge Rollups, SNARKs, and STARKs."
  },
  {
    icon: Code2,
    title: "Protocol Design",
    description: "Learn to design sustainable tokenomics and governance models for decentralized autonomous organizations."
  }
];

export function BlockchainWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
            Why study <span className="text-purple-600">Blockchain</span> here?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            We move fast and break things, but we audit them first. This isn't a trading course; it's deep protocol engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-6">
                <reason.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
