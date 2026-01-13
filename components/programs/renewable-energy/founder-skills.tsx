"use client";
import { motion } from "framer-motion";
import { Battery, Zap, Recycle, Activity, AreaChart, Settings, Globe } from "lucide-react";

export function RenewableEnergySkills() {
    return (
        <section className="py-24 px-4 bg-slate-950 text-white overflow-hidden relative">
            {/* Background Image & Grids */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')" }} 
                />
                <div className="absolute inset-0 bg-slate-950/80" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    
                    {/* Left: Text */}
                    <div className="md:w-1/2">
                        <span className="text-green-400 font-mono font-bold tracking-widest text-sm uppercase mb-4 block">Core Competencies</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Energy Skills <br/> That Matter.
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            An expert doesn't just install panels. They design grids, optimize storage, and navigate policy. Our curriculum creates a holistic Energy Architect.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                { icon:  Battery, label: "Energy Storage Systems" },
                                { icon:  Zap, label: "Grid Modernization" },
                                { icon:  Recycle, label: "Circular Economy" },
                                { icon:  Activity, label: "Energy Auditing" },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <s.icon className="text-green-400" />
                                    <span className="font-bold text-lg">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Graphics */}
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-green-500/20 blur-[100px]" />
                        
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1: Core Mastery (Expanded) */}
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 col-span-2"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-green-500 rounded-xl"><Zap className="text-white" /></div>
                                    <span className="text-xs font-mono text-green-300">CORE MASTERY</span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: "SOLAR PV SYSTEMS", val: "95%", color: "bg-green-500" },
                                        { label: "WIND ENERGY", val: "90%", color: "bg-emerald-400" },
                                        { label: "GRID MANAGEMENT", val: "85%", color: "bg-teal-500" },
                                        { label: "POLICY & LAW", val: "80%", color: "bg-lime-500" }
                                    ].map((skill, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs font-bold mb-1 text-slate-300"><span>{skill.label}</span><span>{skill.val}</span></div>
                                            <div className="h-2 bg-black/50 rounded-full overflow-hidden">
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
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-green-900/80 to-slate-900 p-6 rounded-3xl border border-white/10"
                            >
                                <div className="text-4xl font-bold text-white mb-1">0 Carbon</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Target Emission</div>
                                <div className="mt-4 text-sm text-slate-300">Designing for a net-zero future.</div>
                            </motion.div>

                            {/* Card 3: Research */}
                             <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-6 rounded-3xl border border-white/10 text-slate-900"
                            >
                                <div className="flex justify-between items-center mb-4">
                                     <div className="font-bold text-xs uppercase tracking-wider text-slate-500">Publications</div>
                                     <AreaChart size={18} className="text-green-600" />
                                </div>
                                <div className="font-bold text-3xl leading-tight mb-1">IEA</div>
                                <div className="text-xs text-slate-500 font-bold">Global Reports</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
