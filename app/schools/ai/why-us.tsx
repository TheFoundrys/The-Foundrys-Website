"use client";
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Globe } from "lucide-react";

const reasons = [
    {
        icon: Server,
        title: "HPC Clusters",
        desc: "Access to High Performance Compute infrastructure for training large models.",
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
    },
    {
        icon: Cpu,
        title: "Research Labs",
        desc: "Direct mentorship from researchers pushing the boundaries of AI & ML.",
        color: "bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
    },
    {
        icon: Globe,
        title: "Global Standards",
        desc: "Curriculum benchmarked against top AI research institutes like MIT & Stanford.",
        color: "bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]"
    },
    {
        icon: Zap,
        title: "Rapid Prototyping",
        desc: "Hardware labs equipped for deploying edge AI and robotics applications.",
        color: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
    }
];

export function WhyUs() {
    return (
        <section className="py-28 px-4 bg-slate-950 relative overflow-hidden">
            {/* Dark background grid pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020617_100%)]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">The Advantage</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why is The Foundry the right place?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 hover:bg-slate-900/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                <r.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{r.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-normal text-sm">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
