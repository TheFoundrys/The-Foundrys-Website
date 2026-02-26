"use client";
import { motion } from "framer-motion";
import { Target, Users, Zap, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: <Target className="text-[#B31B1B]" size={28} />,
        title: "Validation First",
        desc: "Don't build in the dark. Master customer discovery and rapid validation before writing a line of code."
    },
    {
        icon: <Users className="text-[#B31B1B]" size={28} />,
        title: "Team & Culture",
        desc: "Hiring the first 10 employees is harder than the next 100. Learn to engineer culture."
    },
    {
        icon: <Zap className="text-[#B31B1B]" size={28} />,
        title: "Growth Mechanics",
        desc: "Understand the levers of viral growth, retention loops, and unit economics that sustain scale."
    },
    {
        icon: <ShieldCheck className="text-[#B31B1B]" size={28} />,
        title: "Founder Resilience",
        desc: "The startup journey is a marathon. Build the mental framework required to lead under pressure."
    }
];

export function VentureWhyUs() {
    return (
        <section className="py-24 px-6 bg-neutral-50">
            <div className="container mx-auto max-max-6xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">Why Venture Building?</h2>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        Traditional MBAs teach you how to manage existing businesses. We teach you how to create them.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-white border border-neutral-200 rounded-xl hover:shadow-xl hover:shadow-neutral-200/50 transition-all group"
                        >
                            <div className="mb-6 p-3 bg-neutral-50 rounded-lg inline-block group-hover:bg-[#B31B1B]/5 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
