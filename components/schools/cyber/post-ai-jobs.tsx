"use client";
import { motion } from "framer-motion";
import { BrainCircuit, ShieldAlert, FileSearch, UserCheck, Bot, Cpu } from "lucide-react";

const jobs = [
    {
        title: "AI Security Analyst",
        icon: <Bot className="w-8 h-8 text-emerald-400" />,
        desc: "Protecting neural networks from adversarial attacks and data poisoning. Ensuring AI models are secure and ethically sound."
    },
    {
        title: "ML Security Engineer",
        icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />,
        desc: "Designing self-healing security systems that use machine learning to detect and neutralize threats in real-time."
    },
    {
        title: "AI Governance Officer",
        icon: <UserCheck className="w-8 h-8 text-emerald-400" />,
        desc: "Auditing AI decision-making processes to prevent bias and ensure compliance with global AI safety regulations."
    },
    {
        title: "Synthetic Threat Analyst",
        icon: <ShieldAlert className="w-8 h-8 text-emerald-400" />,
        desc: "Detecting and mitigating AI-generated deepfakes, synthetic phishing, and automated social engineering attacks."
    },
    {
        title: "Embedded Systems Defender",
        icon: <Cpu className="w-8 h-8 text-emerald-400" />,
        desc: "Securing the billions of connected devices in the smart cities of the future against large-scale hacking attempts."
    },
    {
        title: "Cyber Forensics Expert (AI Era)",
        icon: <FileSearch className="w-8 h-8 text-emerald-400" />,
        desc: "Tracing digital footprints across decentralized networks to solve crimes involving weaponized AI and autonomous agents."
    }
];

export function PostAIJobs() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Jobs in the <span className="text-emerald-500">Post-AI 2035</span> World
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                        Traditional roles are evolving. At The Foundry, we prepare you for the careers that will define the digital economy of the next decade.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all hover:bg-white/10 group shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {job.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{job.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {job.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
