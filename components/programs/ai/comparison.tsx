"use client";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisonData = [
    {
        from: { title: "Textbook Driven", desc: "Rote memorization, exams, and theory." },
        to: { title: "Production Driven", desc: "Live code, shipping features, and real users." }
    },
    {
        from: { title: "Isolated Learning", desc: "Knowledge gained in vacuum, rarely applied." },
        to: { title: "Ecosystem Immersion", desc: "Located inside a workspace, rubbing shoulders with founders." }
    },
    {
        from: { title: "One-Size-Fits-All", desc: "Same syllabus for everyone, regardless of pace." },
        to: { title: "Adaptive Intensity", desc: "Bleeding edge tech that evolves every 6 months." }
    },
    {
        from: { title: "Professor-Centric", desc: "Passive recipients of old information." },
        to: { title: "Builder-Centric", desc: "Mentored by CTOs and Architects who ship daily." }
    }
];

export function ComparisonSection() {
    return (
        <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }} 
                />
                <div className="absolute inset-0 bg-white/60" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Education is Evolving. <br/><span className="text-blue-600">And it's time we did too.</span></h2>
                </div>

                {/* Comparison Grid */}
                <div className="space-y-8 relative">
                    {comparisonData.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-2 md:gap-16 gap-4 relative">
                           {/* Center Line (Desktop & Mobile) */}
                           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

                           {/* Left: Traditional */}
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-right pr-4 md:pr-0 flex flex-col md:flex-row items-center md:items-start justify-end gap-2 md:gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                             >
                                 <div className="order-2 md:order-1">
                                     <h3 className="text-sm md:text-xl font-bold text-slate-900 leading-tight mb-1">{item.from.title}</h3>
                                     <p className="text-slate-500 text-xs md:text-sm max-w-xs ml-auto">{item.from.desc}</p>
                                 </div>
                                 <div className="order-1 md:order-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                     <X size={14} className="text-slate-400 md:w-[18px] md:h-[18px]" />
                                 </div>
                             </motion.div>

                           {/* Right: Foundry */}
                            <motion.div 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="text-left pl-4 md:pl-0 flex flex-col md:flex-row items-center md:items-start justify-start gap-2 md:gap-4"
                             >
                                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                                     <Check size={14} className="text-blue-600 md:w-[18px] md:h-[18px]" />
                                 </div>
                                 <div>
                                     <h3 className="text-sm md:text-xl font-bold text-slate-900 leading-tight mb-1">{item.to.title}</h3>
                                     <p className="text-slate-500 text-xs md:text-sm max-w-xs">{item.to.desc}</p>
                                 </div>
                             </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
