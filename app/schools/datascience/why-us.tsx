"use client";
import { motion } from "framer-motion";
import { Database, LineChart, Zap, Globe } from "lucide-react";

const reasons = [
    {
        icon: Database,
        title: "Big Data Infra",
        desc: "Access to distributed computing clusters for processing massive datasets.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: LineChart,
        title: "Analytics Labs",
        desc: "Direct mentorship from data scientists uncovering insights from real-world data.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: Globe,
        title: "Global Standards",
        desc: "Curriculum benchmarked against top Data Science programs at Berkeley & Stanford.",
        color: "bg-orange-100 text-orange-600"
    },
    {
        icon: Zap,
        title: "Predictive Labs",
        desc: "Specialized labs for building and deploying real-time predictive models.",
        color: "bg-green-100 text-green-600"
    }
];

export function WhyUs() {
    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">The Advantage</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why is The Foundry the right place?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center mb-6`}>
                                <r.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{r.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium text-sm">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
