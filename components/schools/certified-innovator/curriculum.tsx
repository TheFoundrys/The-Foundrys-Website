"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const mbaModules = [
    {
        title: "Strategic Management",
        desc: "Master market dynamics, competitive positioning, and the BCG matrix applied to AI-driven industries."
    },
    {
        title: "Unit Economics",
        desc: "Deep dive into business logic, profit pools, CAC/LTV analysis, and sustainable growth architectures."
    },
    {
        title: "Organizational Leadership",
        desc: "Learn to manage elite engineering teams, drive innovation culture, and navigate corporate politics."
    },
    {
        title: "Global Venture Scaling",
        desc: "Go-to-market strategies for global expansion, cross-border operations, and IPO preparation."
    }
];

export function MBACurriculum() {
    return (
        <section className="py-24 px-6 bg-white" id="curriculum">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">MBA Year Curriculum.</h2>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        An intensive 12-month program designed to transform architects into executive leaders.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {mbaModules.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border-l-4 border-neutral-100 hover:border-[#B31B1B] transition-colors bg-neutral-50/50"
                        >
                            <h3 className="text-xl font-bold text-neutral-900 mb-3 flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-[#B31B1B]" />
                                {module.title}
                            </h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{module.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
