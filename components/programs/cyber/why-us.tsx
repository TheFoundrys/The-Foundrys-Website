import { motion } from 'framer-motion';
import { Target, Zap, Users, ShieldAlert, Crosshair, Globe, Lock } from 'lucide-react';

export function WhyUs() {
    return (
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-900 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-900 to-transparent" />
            
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* Visual Side - 3D Wireframe / Targeting System */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                         {/* Spinning Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[140%] h-[140%] -z-10 absolute border border-emerald-900/30 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="w-[120%] h-[120%] -z-10 absolute border border-emerald-900/40 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />
                        </div>

                        <div className="relative z-10 rounded-xl overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] group aspect-[4/3] bg-black">
                             <iframe 
                                src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" 
                                className="w-full h-full absolute inset-0 border-none"
                                title="Live Cyber Threat Map"
                             />
                             <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply pointer-events-none" />
                             
                             {/* Overlay Grid */}
                             <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

                             {/* Floating HUD Badges - Simplified */}
                             <div className="absolute top-[9px] right-[9px] flex flex-col gap-2 pointer-events-none">
                                <div className="px-3 py-1 bg-black text-emerald-500 text-sm font-bold font-mono border border-emerald-500/30 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    LIVE_FEED
                                </div>
                             </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-8"
                        >
                            This isn't just IT. <br/>
                            <span className="text-emerald-500">It's Digital Warfare.</span>
                        </motion.h2>
                        
                        <div className="space-y-8">
                            {[
                                {
                                    icon: <Target className="w-5 h-5 text-emerald-400" />,
                                    title: "War Games & Simulations",
                                    desc: "Weekly Red Team vs Blue Team exercises. Practice in chaos to perform in peace."
                                },
                                {
                                    icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
                                    title: "Zero-Day Research",
                                    desc: "Don't just patch vulnerabilities. Find them. Disclose them locally before they hit the wild."
                                },
                                {
                                    icon: <Globe className="w-5 h-5 text-emerald-400" />,
                                    title: "The Underground Network",
                                    desc: "Mentorship from security researchers who have protected (and broken into) Fortune 500s."
                                }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="mt-1 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
