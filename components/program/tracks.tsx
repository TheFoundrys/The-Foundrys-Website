"use client";
import { motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, Atom } from "lucide-react";

const tracks = [
    {
        icon: BrainCircuit,
        title: "The Intelligence Layer",
        subtitle: "Artificial Intelligence & Machine Learning",
        desc: "Don't just use ChatGPT. Build the next one. Train models, fine-tune agents, and architect the brain of the future.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        icon: ShieldCheck,
        title: "The Defense Layer",
        subtitle: "Ethical Hacking & Cybersecurity",
        desc: "The world is digital. Someone needs to guard the gates. Learn offensive pentesting and defensive architecture.",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-100"
    },
    {
        icon: Atom,
        title: "The Q-Layer",
        subtitle: "Quantum Computing",
        desc: "Rewrite the laws of computation. Harness the fabric of reality to solve the impossible.",
        color: "text-cyan-400",
        bg: "bg-cyan-950/30",
        border: "border-cyan-500/20"
    },
];

export function Tracks() {
  return (
    <section className="py-24 px-4 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                 <span className="text-slate-500 font-bold tracking-widest text-sm uppercase mb-4 block">Our Offerings</span>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Triad</h2>
                 <p className="text-xl text-slate-500 max-w-2xl mx-auto">Three specialized tracks. One outcome: Architect Status.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-8 rounded-3xl bg-white border ${track.border} shadow-lg hover:shadow-xl transition-all group flex flex-col h-full`}
                    >
                        <div className={`w-16 h-16 rounded-2xl ${track.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                            <track.icon className={`w-8 h-8 ${track.color}`} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{track.title}</h3>
                        <div className={`text-sm font-bold uppercase tracking-wider mb-6 ${track.color} opacity-80`}>
                            {track.subtitle}
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed font-medium flex-grow">
                            {track.desc}
                        </p>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <button className={`w-full py-3 rounded-xl font-bold text-sm bg-slate-50 hover:bg-slate-900 hover:text-white transition-colors text-slate-900`}>
                                VIEW TRACK DETAILS
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
