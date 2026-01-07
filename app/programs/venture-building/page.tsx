"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Rocket, Target, Users } from "lucide-react";

export default function VentureBuildingPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-6xl text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-bold uppercase tracking-wider mb-6"
            >
                <Rocket size={16} />
                <span>School of Entrepreneurship</span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
            >
                Venture Building
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
                From Idea to IPO. Learn the mechanics of building high-growth startups from zero to one.
            </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                    <Target className="text-amber-600 mb-4" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Validation First</h3>
                    <p className="text-slate-600">Don't build in the dark. Master the art of customer discovery and rapid validation before writing a line of code.</p>
                </div>
                <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
                    <Users className="text-amber-600 mb-4" size={32} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Team & Culture</h3>
                    <p className="text-slate-600">Hiring the first 10 employees is harder than the next 100. Learn to engineer culture.</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
