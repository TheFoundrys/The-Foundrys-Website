"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';

const certifications = [
  {
    id: "FCEP",
    name: "Foundry's-Certified Execution Professional",
    description: "Focuses on the art of rapid execution and technical foundations. Master the ability to build functional deep tech prototypes from absolute scratch.",
    icon: <Zap className="w-8 h-8 text-lime-vibrant" />,
    level: "Foundation Layer",
    features: ["Deep Tech Fundamentals", "Rapid Prototyping", "Lean Construction"]
  },
  {
    id: "FCIP",
    name: "Foundry's-Certified Industry Practitioner",
    description: "Bridging theory and industry. Designed for professionals who apply AI and Deep Tech to solve complex industrial challenges with scalable, production-ready systems.",
    icon: <Target className="w-8 h-8 text-blue-400" />,
    level: "Application Layer",
    features: ["Industrial AI Systems", "Scalable Architectures", "System Optimization"]
  },
  {
    id: "FFP",
    name: "Foundry's Forged Professional",
    description: "The ultimate technical leadership certification. For high-impact professionals forged through real-world challenges to lead and architect the next generation of ventures.",
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    level: "Leadership Layer",
    features: ["Venture Architecture", "Strategic Innovation", "Technical Leadership"]
  }
];

export function Certifications() {
  return (
    <section className="bg-slate-900 py-24 px-6 lg:px-16 relative overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-left mb-16 max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-lime-vibrant mb-4 block">
            Foundry Ecosystem
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9] whitespace-nowrap">
            The Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-vibrant to-white">Career Pathways</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl font-medium">
            Clarity in expertise. Our tiered certification system ensures that every Foundry graduate is recognized for their specific stage of technical mastery.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-4">
          {certifications.map((cert, index) => (
            <React.Fragment key={cert.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1 group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col hover:border-lime-vibrant/30 transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                      {cert.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{cert.level}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black italic text-lime-vibrant">{cert.id}</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-lime-vibrant transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {cert.description}
                  </p>

                  <div className="space-y-3">
                    {cert.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <div className="w-1 h-1 rounded-full bg-lime-vibrant/50" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {index < certifications.length - 1 && (
                <div className="flex items-center justify-center py-4 md:py-0 select-none">
                  <span className="text-5xl md:text-8xl font-black text-lime-vibrant/10 md:rotate-0 rotate-90 tracking-tighter animate-pulse drop-shadow-[0_0_15px_rgba(163,230,53,0.1)]">
                    &gt;&gt;
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
