"use client";

import { Check, X } from "lucide-react";

export function BlockchainComparison() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            Not just a <span className="text-purple-600">Bootcamp</span>.
          </h2>
          <p className="text-xl text-slate-600">
            We educate Engineers, not just Smart Contract writers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Other Bootcamps */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 opacity-70 grayscale-[0.5]">
            <h3 className="text-2xl font-bold text-slate-500 mb-8">Standard Bootcamps</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="text-red-400 shrink-0 mt-1" size={20} />
                <span className="text-slate-600">Focus mostly on Solidity syntax</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-400 shrink-0 mt-1" size={20} />
                <span className="text-slate-600">Surface level DeFi understanding</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-400 shrink-0 mt-1" size={20} />
                <span className="text-slate-600">Ignore underlying cryptography</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-400 shrink-0 mt-1" size={20} />
                <span className="text-slate-600">Limited exposure to non-EVM chains</span>
              </li>
            </ul>
          </div>

          {/* The Foundry */}
          <div className="bg-white p-8 rounded-3xl border-2 border-purple-500 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 px-4 py-1 bg-purple-500 text-white text-xs font-bold uppercase tracking-widest rounded-bl-xl">
                The Foundry Way
             </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Blockchain Engineering</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-purple-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-900 font-medium">Deep distributed systems fundamentals</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-purple-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-900 font-medium">Protocol level architecture & design</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-purple-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-900 font-medium">Zero-Knowledge math & implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-purple-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-900 font-medium">Multi-chain proficiency (EVM + Rust)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
