"use client";
import { motion } from "framer-motion";
import { Battery, Zap, Recycle, Activity, AreaChart, Settings, Globe } from "lucide-react";

export function RenewableEnergySkills() {
    return (
        <div className="py-16 px-6 relative z-10 bg-transparent text-[#031a57]">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    
                    {/* Left: Text */}
                    <div className="md:w-1/2">
                        <span className="text-green-700 font-mono font-bold tracking-widest text-sm uppercase mb-4 block">Core Competencies</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif text-[#031a57]">
                            Energy Skills <br/> That Matter.
                        </h2>
                        <p className="text-base text-slate-650 leading-relaxed mb-8">
                            An expert doesn't just install panels. They design grids, optimize storage, and navigate policy. Our curriculum creates a holistic Energy Architect.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                { icon:  Battery, label: "Energy Storage Systems" },
                                { icon:  Zap, label: "Grid Modernization" },
                                { icon:  Recycle, label: "Circular Economy" },
                                { icon:  Activity, label: "Energy Auditing" },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                                    <s.icon className="text-green-600" />
                                    <span className="font-bold text-lg text-slate-800">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    {/* Right: Graphics */}
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-green-500/10 blur-[100px] pointer-events-none" />
                        
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1: Core Mastery (Expanded) */}
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm col-span-2 text-slate-800"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-green-600 rounded-xl text-white"><Zap size={20} className="text-white" /></div>
                                    <span className="text-xs font-mono text-green-600 font-bold">CORE MASTERY</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: "SOLAR PV SYSTEMS", val: "95%", color: "bg-green-600" },
                                        { label: "WIND ENERGY", val: "90%", color: "bg-emerald-500" },
                                        { label: "GRID MANAGEMENT", val: "85%", color: "bg-teal-600" },
                                        { label: "POLICY & LAW", val: "80%", color: "bg-lime-600" }
                                    ].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs font-bold mb-1 text-slate-500"><span>{skill.label}</span><span>{skill.val}</span></div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.val }}
                                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                                                    className={`h-full ${skill.color}`} 
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
 
                            {/* Card 2: Impact */}
                             <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-slate-800"
                            >
                                <div className="text-3xl font-extrabold text-green-600 mb-1">0 Carbon</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Target Emission</div>
                                <div className="mt-4 text-xs text-slate-500 leading-relaxed">Designing for a net-zero future.</div>
                            </motion.div>
 
                            {/* Card 3: Research */}
                             <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-slate-800"
                            >
                                <div className="flex justify-between items-center mb-4">
                                     <div className="font-bold text-[10px] uppercase tracking-wider text-slate-450">Publications</div>
                                     <AreaChart size={18} className="text-green-600" />
                                </div>
                                <div className="font-bold text-2xl leading-tight mb-1 text-slate-900 font-serif">IEA</div>
                                <div className="text-[9px] text-slate-500 font-bold">Global Reports</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
