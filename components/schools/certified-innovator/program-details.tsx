"use client";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";
import { useRegionalPricing } from "@/lib/useRegionalPricing";

export function MBAProgramDetails() {
    const { isIndia } = useRegionalPricing();

    const programBlocks = [
        {
            icon: <Cpu className="text-indigo-600" size={24} />,
            phase: "Specialization 01",
            duration: "3+1 Years",
            title: "MBA in AI",
            desc: "The ultimate track for AI architects. 3 years of deep Intelligence Engineering followed by a 1-year MBA to scale autonomous ventures."
        },
        {
            icon: <ShieldCheck className="text-indigo-600" size={24} />,
            phase: "Specialization 02",
            duration: "3+1 Years",
            title: "MBA in Cybersecurity Venture Building",
            desc: "The defense layer. 3 years of Cybersecurity Engineering followed by a 1-year MBA to lead and build security-first global ventures."
        }
    ];

    return (
        <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-100">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Choose Your Path</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Two flagship integrated programs designed to produce the next generation of technical CEOs and visionaries.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {programBlocks.map((block, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-sm border border-neutral-200 shadow-sm relative group hover:border-indigo-600/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 font-mono text-xs uppercase tracking-widest text-neutral-400 group-hover:text-indigo-600/50 transition-colors">
                                {block.duration}
                            </div>
                            <div className="mb-6">{block.icon}</div>
                            <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-1">{block.phase}</p>
                            <h3 className="text-3xl font-bold text-neutral-900 mb-4">{block.title}</h3>
                            <p className="text-neutral-600 leading-relaxed">{block.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
