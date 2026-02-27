"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu, Lock, Terminal } from "lucide-react";

const reasons = [
    {
        title: "Offensive First Approach",
        icon: <Terminal className="w-6 h-6 text-emerald-400" />,
        desc: "We believe to defend you must first know how to attack. Our curriculum is built on a Red-Teaming foundations."
    },
    {
        title: "Zero-Trust Architecture",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        desc: "Master the modern standard of security. Learn to design systems where 'never trust, always verify' is the core."
    },
    {
        title: "AI-Native Defense",
        icon: <Cpu className="w-6 h-6 text-emerald-400" />,
        desc: "The only program that integrates LLM security, prompt injection defense, and AI-driven threat hunting into the core."
    },
    {
        title: "Global Curriculum",
        icon: <Globe className="w-6 h-6 text-emerald-400" />,
        desc: "Referencing global standards from top cyber universities, ensuring your degree is recognized worldwide."
    },
    {
        title: "Hardened Cryptography",
        icon: <Lock className="w-6 h-6 text-emerald-400" />,
        desc: "Go beyond libraries. Understand the mathematics of encryption and prepare for a post-quantum world."
    },
    {
        title: "Industrial Rigor",
        icon: <Zap className="w-6 h-6 text-emerald-400" />,
        desc: "Weekly war games, real-world CVE disclosures, and 1000+ hours of dedicated lab time."
    }
];

export function WhyThisProgram() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Why this <span className="text-emerald-500">Program?</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Traditional degrees teach you how to follow checklists. We teach you how to architect the invisible walls that protect national infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{reason.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
