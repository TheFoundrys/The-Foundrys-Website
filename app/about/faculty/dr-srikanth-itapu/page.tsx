"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DrSrikanthProfile() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
             <ArrowLeft size={16} /> Back to Team
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
             {/* Profile Image */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/3 relative"
             >
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                    <Image 
                        src="/images/dr-itapu-srikanth.jpg" 
                        alt="Dr. Srikanth Itapu" 
                        fill 
                        className="object-cover"
                    />
                </div>
                 {/* Decorative elements */}
                 <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl rounded-full" />
             </motion.div>

             {/* Header Info */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 space-y-6"
             >
                <div>
                     <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                        Faculty & Leadership
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                        Dr. Srikanth Itapu
                    </h1>
                    <p className="text-xl text-blue-400 font-medium mb-4">
                        Director, E-Spin Lab
                    </p>
                    
                    <a 
                        href="https://www.linkedin.com/in/sitapu/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors mb-6"
                    >
                        <Linkedin size={16} /> Connect on LinkedIn
                    </a>
                </div>

                <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                        Quantum Technologies
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                        Advanced Materials
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                         Semiconductor Devices
                    </div>
                     <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                         Spintronics
                    </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
             <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-slate-700 font-medium leading-relaxed mb-8">
                    Dr. Srikanth Itapu is a subject matter expert in quantum technologies, advanced materials, and semiconductor devices, with over 12 years of international research experience and significant leadership roles in academia and innovation ecosystems.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Research & Technical Expertise</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                   His expertise spans quantum materials, spintronics, solid-state qubits, nano-fabrication, and energy-efficient quantum hardware, with a strong emphasis on translational research and technology readiness. He has led and contributed to interdisciplinary research programs integrating quantum physics, materials science, micro/nano-electronics, and sustainable energy technologies, bridging fundamental science with scalable device engineering. His work includes materials synthesis, thin films, device characterization, and system-level considerations relevant to quantum sensing, neuromorphic computing, and next-generation computing platforms.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Leadership & Ecosystem Building</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Dr. Itapu currently serves as Director of E-Spin Lab, where he drives research and industry-aligned initiatives in quantum materials, spin-based devices, and emerging semiconductor technologies. He also holds senior academic appointments and has extensive experience in curriculum design, workforce development, and mentoring talent in quantum engineering and VLSI domains.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Beyond research, he actively engages with quantum policy, science diplomacy, and ecosystem building, aligning startup innovation with national and international missions such as the National Quantum Mission (India) and global quantum initiatives. His strengths include technology roadmap development, industry–academia partnerships, grant strategy, and deep-tech commercialization support.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Strategic Advisory</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    As a SME, Dr. Itapu provides strategic guidance on quantum technology validation, materials and device selection, scalability challenges, sustainability considerations, and regulatory alignment, enabling early-stage ventures to move efficiently from concept to prototype and market relevance.
                </p>
             </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
