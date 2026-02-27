import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, FileCode, Minus, Plus } from 'lucide-react';

export function ComparisonSection() {
    return (
        <section className="py-24 px-4 bg-slate-950 relative overflow-hidden font-mono text-sm md:text-base">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-5 grayscale"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 border border-slate-800 bg-slate-900/50 rounded mb-4 text-slate-400">
                        git diff --staged
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        <span className="text-red-500 line-through decoration-red-500/50 decoration-4 uppercase">Standard_CS_Degree</span> <br />
                        <span className="text-emerald-500">v.s. The_Foundry's_Protocol</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative">

                    {/* The Legacy Way (Diff Delete) */}
                    <div className="p-8 md:pr-12 border-r-0 md:border-r border-slate-800 relative bg-red-950/10 rounded-l-xl">
                        <h3 className="text-xl font-bold text-red-400 mb-8 flex items-center gap-3">
                            <span className="p-2 bg-red-950/30 rounded border border-red-900/50"><Minus className="w-4 h-4" /></span>
                            LEGACY_ACADEMIA
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Memorizing abstract theories for Multiple Choice exams",
                                "Vague 'Cyber' electives with zero programming",
                                "Simulated, outdated lab environments from 2015",
                                "Focus on passing entry-level certs only",
                                "No exposure to live-fire ranges or real-world chaos"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-red-300/40 line-through decoration-red-900/30">
                                    <span className="shrink-0 mt-1 select-none opacity-50">-</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Foundry Way (Diff Add) */}
                    <div className="p-8 md:pl-12 bg-emerald-950/10 rounded-r-xl border border-emerald-900/20 md:border-l-0">
                        <h3 className="text-xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
                            <span className="p-2 bg-emerald-950/30 rounded border border-emerald-900/50"><Plus className="w-4 h-4" /></span>
                            FOUNDRY_B.CS_PROTOCOL
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Offensive-First Binary Exploitation & Reverse Engineering",
                                "Writing malware, rootkits & kernels from scratch in C/Rust",
                                "Hardened Zero-Day research & disclosure lab time",
                                "National-level War Games & Red vs Blue Simulations",
                                "Building the next generation of security tools (AI-native)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-emerald-300 font-medium">
                                    <span className="shrink-0 mt-1 select-none text-emerald-500">+</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
