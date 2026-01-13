"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Globe } from "lucide-react";

export function StrategyClient() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-yellow-50">
        <div className="container mx-auto max-w-6xl text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold uppercase tracking-wider mb-6"
            >
                <Lightbulb size={16} />
                <span>School of Entrepreneurship</span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
            >
                Strategic Innovation
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
                Disrupt Markets. Scale Impact. Master the game theory of modern business.
            </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-yellow-50 border border-yellow-100">
                    <TrendingUp className="text-yellow-600 mb-4" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Market Dynamics</h3>
                    <p className="text-slate-600">Understand the invisible forces that shape industries. Predict shifts before they happen.</p>
                </div>
                <div className="p-8 rounded-2xl bg-yellow-50 border border-yellow-100">
                    <Globe className="text-yellow-600 mb-4" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Scale</h3>
                    <p className="text-slate-600">Strategies for taking a local product to a global stage. Localization, regulation, and logistics.</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
