"use client";

import { motion } from "framer-motion";

const STATS = [
    { label: "Total Value Locked (DeFi)", value: "$100B+" },
    { label: "Avg. Engineer Salary", value: "$150k+" },
    { label: "Active Developers", value: "25k+" },
    { label: "Layer 2 Adoption", value: "20x" }
];

export function BlockchainStats() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-purple-600 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold uppercase tracking-widest text-slate-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
