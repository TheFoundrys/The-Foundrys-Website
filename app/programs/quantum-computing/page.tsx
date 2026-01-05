"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { CurriculumAccordion } from "@/components/programs/quantum/curriculum-accordion";
import { quantumCurriculum } from "@/data/quantum-curriculum";
import { motion } from "framer-motion";
import { Atom, Zap, Cpu, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function QuantumPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-violet-200">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full"
            >
                <img 
                    src="/quantum-computer.jpg" 
                    alt="Quantum Computer" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl mx-auto"
            >
                
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    Quantum <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-violet-200">Supremacy.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                    Rewrite the laws of computation. <br />
                    <span className="text-white font-medium">Harness the fabric of reality</span> to solve the impossible.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-sm tracking-widest hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full md:w-auto">
                        JOIN THE REVOLUTION
                    </button>
                    <button className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-sm tracking-widest hover:bg-white/10 hover:border-white transition-all w-full md:w-auto backdrop-blur-sm">
                        WATCH THE FILM
                    </button>
                </div>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* STATS / IMPACT */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    { value: "1M+", label: "Qubits", desc: "Projected scale by 2030, redefining encryption." },
                    { value: "100x", label: "Advantage", desc: "Exponential speedup in optimization tasks." },
                    { value: "$1.3T", label: "Market", desc: "Global industry value by 2035." }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="text-center md:text-left group cursor-default"
                    >
                        <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-2 group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-violet-600 mb-4">{stat.label}</div>
                        <p className="text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">{stat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* WHY US / SKILLS */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Beyond Classical Bits</h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">This is not just another coding bootcamp. This is physics, math, and computer science fused into one discipline.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { 
                        icon: Atom, 
                        title: "Physics First", 
                        desc: "You cannot hack reality without understanding it. We start with Linear Algebra and Quantum Mechanics before writing a single line of code.",
                        gradient: "from-violet-50/50 to-white",
                        border: "border-violet-100",
                        variants: {
                            rest: { rotate: 0 },
                            hover: { 
                                rotate: 360,
                                transition: { repeat: Infinity, duration: 4, ease: "linear" }
                            }
                        }
                    },
                    { 
                        icon: Cpu, 
                        title: "Hardware Aware", 
                        desc: "Learn to program on Superconducting Qubits (IBM) and Ion Traps (IonQ). Understand noise, decoherence, and error correction.",
                        gradient: "from-cyan-50/50 to-white",
                        border: "border-cyan-100",
                        variants: {
                            rest: { scale: 1, filter: "brightness(1)" },
                            hover: { 
                                scale: 1.1,
                                filter: "brightness(1.5)",
                                transition: { repeat: Infinity, duration: 2, repeatType: "mirror" }
                            }
                        }
                    },
                    { 
                        icon: Zap, 
                        title: "Hybrid Algorithms", 
                        desc: "The near future is hybrid. Master VQE and QAOA to solve real-world optimization problems using both CPU and QPU.",
                        gradient: "from-emerald-50/50 to-white",
                        border: "border-emerald-100",
                        variants: {
                            rest: { y: 0, x: 0 },
                            hover: { 
                                y: [0, -5, 0, 5, 0],
                                x: [0, 3, -3, 0],
                                transition: { repeat: Infinity, duration: 0.5 }
                            }
                        }
                    },
                    { 
                        icon: null, 
                        customIcon: true,
                        title: "Superposition", 
                        desc: "Learn to think in probabilities. Break free from binary constraints and design algorithms that explore multiple paths simultaneously.",
                        gradient: "from-fuchsia-50/50 to-white",
                        border: "border-fuchsia-100",
                        variants: {} 
                    }
                ].map((card, i) => (
                    <motion.div 
                        key={i}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        viewport={{ once: true }}
                        className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${card.gradient} border ${card.border} shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden cursor-pointer`}
                    >
                        <div className="manage-z relative">
                            <motion.div 
                                className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-500"
                            >
                                {card.icon ? (
                                    <motion.div
                                        variants={card.variants as any} // Cast to any to avoid generic TS issues with complex framed motion types
                                    >
                                        <card.icon className="w-8 h-8 text-slate-900" />
                                    </motion.div>
                                ) : (
                                    <div className="relative font-mono font-bold text-lg">
                                        <motion.span 
                                            className="absolute inset-0 text-violet-600"
                                            variants={{
                                                rest: { opacity: 1 },
                                                hover: { opacity: 0, transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
                                            }}
                                        >|0⟩</motion.span>
                                        <motion.span 
                                            className="text-cyan-500"
                                            initial={{ opacity: 0 }}
                                            variants={{
                                                rest: { opacity: 0 },
                                                hover: { opacity: 1, transition: { duration: 1, repeat: Infinity, repeatType: "reverse", delay: 1 } }
                                            }}
                                        >|1⟩</motion.span>
                                    </div>
                                )}
                            </motion.div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {card.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <CurriculumAccordion />

      {/* CTA */}
      <section className="py-32 bg-slate-900 text-center px-4 relative overflow-hidden">
        {/* Abstract Quantum Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600 blur-[120px] rounded-full animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Enter the Superposition.
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                The next 50 years of computing will be written in quantum states. <br />
                Be the one holding the pen.
            </p>
            <button className="px-12 py-5 bg-violet-600 text-white rounded-full font-bold text-lg hover:bg-violet-500 hover:scale-105 transition-all shadow-[0_0_40px_rgba(124,58,237,0.5)]">
                APPLY FOR PROGRAM
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
