"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const modules = [
    {
        week: "01",
        title: "The Anatomy of Opportunity",
        topics: ["Identifying Friction Points", "Market Map & Dynamics", "Blue Ocean Strategy", "Systemic Problem Solving"]
    },
    {
        week: "02",
        title: "Validation & Prototype",
        topics: ["Customer Interview Mastery", "Low-Fidelity Prototyping", "Pre-ordering Mechanics", "Validation Dossier"]
    },
    {
        week: "03",
        title: "Venture Mechanics",
        topics: ["Unit Economics (CAC/LTV)", "Revenue Architectures", "Capital Efficiency", "Funding Options (Bootstrap to VC)"]
    },
    {
        week: "04",
        title: "Launch & Execution",
        topics: ["Agile Growth Sprints", "Hiring the A-Team", "Go-to-Market Strategy", "The Founder's Operating System"]
    }
];

export function VentureCurriculum() {
    return (
        <section className="py-24 px-6 bg-white" id="curriculum">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">The Forge Curriculum.</h2>
                        <p className="text-lg text-neutral-600 max-w-xl">
                            A high-intensity program designed to move you from ideation to a validated venture dossier in 4 weeks.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {modules.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex gap-8 group"
                        >
                            <div className="text-4xl font-black text-neutral-100 group-hover:text-[#B31B1B]/20 transition-colors pt-1">
                                {module.week}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-100 group-hover:border-[#B31B1B]/20 transition-colors">
                                    {module.title}
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                                    {module.topics.map((topic, j) => (
                                        <li key={j} className="flex items-center gap-2 text-neutral-600 text-sm">
                                            <CheckCircle2 size={16} className="text-[#B31B1B]/40" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
