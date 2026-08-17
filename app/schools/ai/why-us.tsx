"use client";
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Globe } from "lucide-react";

const reasons = [
    {
        icon: Server,
        title: "HPC Clusters",
        desc: "Access to High Performance Compute infrastructure for training large models.",
        color: "bg-blue-50 text-blue-600 border border-blue-100"
    },
    {
        icon: Cpu,
        title: "Research Labs",
        desc: "Direct mentorship from researchers pushing the boundaries of AI & ML.",
        color: "bg-purple-50 text-purple-600 border border-purple-100"
    },
    {
        icon: Globe,
        title: "Global Standards",
        desc: "Curriculum benchmarked against top AI research institutes like MIT & Stanford.",
        color: "bg-orange-50 text-orange-600 border border-orange-100"
    },
    {
        icon: Zap,
        title: "Rapid Prototyping",
        desc: "Hardware labs equipped for deploying edge AI and robotics applications.",
        color: "bg-emerald-50 text-emerald-600 border border-emerald-100"
    }
];

export function WhyUs() {
    return (
        <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 py-16 px-4 md:px-8 mt-[30px] mb-16 overflow-hidden relative">
            {/* Light background grid pattern */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#ffffff_100%)]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#002f86] font-bold tracking-widest text-xs uppercase mb-4 block">The Advantage</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#031a57] mb-6 tracking-tight font-serif">Why is The Foundry the right place?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-[#002f86]/30 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,47,134,0.05)] transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                <r.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#031a57] mb-3 group-hover:text-[#002f86] transition-colors duration-300 font-serif">{r.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-normal text-sm">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
