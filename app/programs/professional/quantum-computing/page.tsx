"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";

export default function QuantumPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-slate-900 z-0" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <Cpu size={16} /> Professional Certification Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Quantum Computing
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Prepare for the next computational revolution. Master the physics and logic of the quantum realm.
          </p>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <CourseCard
              sku="Q 008"
              title="Certified Professional in Quantum Fundamentals"
              originalPrice="10,000"
              discountedPrice="5,000"
              desc="A 4-week course focusing on the 4 pillars of the National Quantum Mission: Quantum Computing, Materials, Communication, and Sensing."
              duration="4 Weeks"
              href="/programs/professional/quantum-computing/certified-professional-in-quantum-fundamentals"
            />
            <CourseCard
              sku="Q 001"
              title="Certified Professional in Quantum Engineering"
              originalPrice="150,000"
              discountedPrice="75,000"
              desc="Hardware-focused track covering quantum gates, circuitry, and the physical implementation of qubits."
            />
            <CourseCard
              sku="Q 002"
              title="Certified Professional in Quantum Computing"
              originalPrice="150,000"
              discountedPrice="75,000"
              desc="Core algorithm track including Shor's, Grover's, and quantum simulation techniques."
            />
            <CourseCard
              sku="Q 003"
              title="Certified Professional in Quantum Sensing"
              originalPrice="150,000"
              discountedPrice="75,000"
              desc="Explore high-precision metrology and imaging using quantum properties."
            />
            <CourseCard
              sku="Q 004"
              title="Certified Professional in Quantum Communication"
              originalPrice="150,000"
              discountedPrice="75,000"
              desc="Secure communication protocols, quantum key distribution (QKD), and the quantum internet."
            />
            <CourseCard
              sku="Q 005"
              title="Certified Professional in Quantum Information"
              originalPrice="150,000"
              discountedPrice="75,000"
              desc="Information theory re-imagined. Entropy, entanglement, and density matrices."
            />
            <CourseCard
              sku="Q 006"
              title="Certified Professional in Post Quantum Cryptography"
              originalPrice="150,000"
              discountedPrice="75,000"
              desc="Preparing classical systems to withstand quantum attacks. Lattice-based cryptography and more."
            />
            <CourseCard
              sku="QAI 001"
              title="Certified Professional in Quantum AI"
              originalPrice="400,000"
              discountedPrice="200,000"
              desc="The intersection of two frontiers. Quantum machine learning algorithms and neural networks."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CourseCard({ sku, title, originalPrice, discountedPrice, desc, duration = "Professional 3 Month Course", href = "/apply" }: { sku: string, title: string, originalPrice: string, discountedPrice: string, desc: string, duration?: string, href?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase bg-slate-100 px-2 py-1 rounded">{sku}</span>
          <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
            {duration}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
          <CheckCircle2 size={16} className="text-purple-500" /> Hybrid Format
          <span className="mx-2">•</span>
          <CheckCircle2 size={16} className="text-purple-500" /> Weekend compatible
        </div>
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Starting from</div>
          <div className="flex flex-col">
            <span className="text-sm text-slate-400 line-through font-medium">₹{originalPrice}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">₹{discountedPrice}</span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded uppercase tracking-wide">50% Discount</span>
            </div>
          </div>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-purple-600 transition-colors shadow-lg hover:shadow-purple-500/25"
        >
          View Program <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.div>
  )
}
