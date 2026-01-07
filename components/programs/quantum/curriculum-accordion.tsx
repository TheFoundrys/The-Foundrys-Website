"use client";
import { motion } from "framer-motion";
import { Atom, Cpu, Lock, Scan, TrendingUp, Zap, Activity } from "lucide-react";
import { quantumCurriculum } from "@/data/quantum-curriculum";

// --- ENHANCED MICRO-WIDGET COMPONENTS ---

// 1. Bold Trend Chart (Visualizing Growth)
const TrendChart = ({ color }: { color: string }) => (
    <div className="w-full h-12 flex items-end gap-1 mt-2 pb-1 border-b border-white/5">
        {[20, 45, 30, 60, 55, 85, 70, 100].map((h, i) => (
            <motion.div 
                key={i}
                initial={{ height: "10%" }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className={`flex-1 rounded-t ${color.replace('text-', 'bg-')} opacity-80`} 
            />
        ))}
    </div>
);

// 2. Circular Proficiency (Visualizing Mastery - Enhanced)
const CircleStat = ({ color, value = 98 }: { color: string, value?: number }) => (
    <div className="relative w-16 h-16 flex items-center justify-center mt-2">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: value / 100 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className={color} 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
            />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">Top</span>
             <span className="text-sm font-bold text-white">{value}%</span>
        </div>
    </div>
);

// 3. Activity Wave (Visualizing Momentum)
const ActivityWave = ({ color }: { color: string }) => (
    <div className="flex items-center gap-0.5 h-10 mt-2">
        {[...Array(15)].map((_, i) => (
             <motion.div 
                key={i}
                animate={{ height: ["20%", "80%", "20%"] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                className={`w-1 rounded-full ${color.replace('text-', 'bg-')}`}
             />
        ))}
    </div>
);

// --- MAIN COMPONENT ---

export function CurriculumAccordion() {
    const weekIcons = [Atom, Cpu, Lock, Scan];
    // Vivid gradients/colors
    const weekColors = [
        "text-cyan-400", 
        "text-violet-400", 
        "text-emerald-400", 
        "text-rose-400"
    ];
    const weekBGs = [
        "bg-cyan-500/10", 
        "bg-violet-500/10", 
        "bg-emerald-500/10", 
        "bg-rose-500/10"
    ];

    // Pre-defined "Random" positions for 3 widgets to ensure they never overlap but look scattered
    // [Top-Leftish, Center-Rightish, Bottom-Leftish] (relative to their container)
    const positions = [
        { top: "-10%", left: "5%", zIndex: 10 },
        { top: "35%", right: "-5%", zIndex: 20 },
        { bottom: "-5%", left: "15%", zIndex: 15 }
    ];

    return (
        <section id="syllabus" className="py-32 px-4 bg-slate-950 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-slate-800/40" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05),transparent_60%)]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header - Reverted to "From Zero to Entanglement" */}
                <div className="text-center mb-32">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-900/10 backdrop-blur-md mb-8"
                     >
                        <span className="text-cyan-300 text-sm font-bold uppercase tracking-[0.2em]">Quantum Accelerator</span>
                     </motion.div>
                     
                     <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        From Zero to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 animate-pulse">Entanglement.</span>
                     </h2>
                     <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A rigorous 4-week deep dive from linear algebra to running algorithms on real quantum hardware.
                     </p>
                </div>

                <div className="relative">
                    {/* Central Spine */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

                    <div className="space-y-40 md:space-y-56">
                        {quantumCurriculum.weeks.map((week, idx) => {
                            const Icon = weekIcons[idx % weekIcons.length];
                            const isEven = idx % 2 === 0;
                            const colorClass = weekColors[idx];
                            // Use only first 3 outcomes
                            const displayOutcomes = week.outcomes ? week.outcomes.slice(0, 3) : [];
                            
                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""} gap-12 md:gap-0`}>
                                    
                                    {/* Center Node Marker */}
                                    <div className="absolute left-1/2 top-10 w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-700 -translate-x-1/2 z-20 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
                                        <div className={`w-2 h-2 rounded-full ${colorClass.replace('text-', 'bg-')} animate-ping opacity-75`} />
                                    </div>

                                    {/* Curriculum Content (Larger & Clearer) */}
                                    <div className={`w-full md:w-1/2 ${isEven ? "md:pl-28" : "md:pr-28"}`}>
                                        <div className="relative">
                                            {/* Decorative Week Number Background */}
                                            <span className="absolute -top-16 -left-8 text-[120px] font-bold text-slate-800/20 select-none pointer-events-none z-0">
                                                0{week.number}
                                            </span>

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className={`px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-sm font-bold uppercase tracking-wider ${colorClass} shadow-lg`}>
                                                        Week {week.number}
                                                    </span>
                                                    <Icon className={`${colorClass}`} size={28} />
                                                </div>
                                                
                                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">{week.title}</h3>
                                                <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-8 border-l-4 border-slate-700 pl-6">
                                                    {week.focus}
                                                </p>

                                                <div className="space-y-4">
                                                    {week.modules.map((mod, mIdx) => (
                                                        <div key={mIdx} className="group p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/40 hover:border-slate-600 transition-all duration-300">
                                                            <div className="text-slate-100 text-lg md:text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                                                                {mod.title.split(":")[1] || mod.title}
                                                            </div>
                                                            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-3">
                                                                {mod.title.split(":")[0]}
                                                            </div>
                                                            {/* Render the topics content with "Proper List" styling */}
                                                            <ul className="space-y-3 mt-4 ml-1">
                                                                {mod.topics?.map((topic, tIdx) => {
                                                                    const [key, ...rest] = topic.split(":");
                                                                    const description = rest.join(":");
                                                                    
                                                                    return (
                                                                        <li key={tIdx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                                                                            {/* Custom Bullet */}
                                                                            <span className={`mt-2 w-1.5 h-1.5 rounded-full ${colorClass.replace('text-', 'bg-')} shadow-[0_0_8px_currentColor] flex-shrink-0`} />
                                                                            
                                                                            {/* Text Content */}
                                                                            <div>
                                                                                {description ? (
                                                                                    <>
                                                                                        <span className="font-bold text-white">{key}:</span>
                                                                                        <span className="text-slate-400">{description}</span>
                                                                                    </>
                                                                                ) : (
                                                                                    <span>{topic}</span>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Outcomes (Randomly Placed 3 Floating Widgets) */}
                                    <div className={`w-full md:w-1/2 h-[300px] md:h-[400px] relative mt-12 md:mt-0 ${isEven ? "md:pr-28" : "md:pl-28"}`}>
                                        {/* Container for absolute positioning constrained to this half */}
                                        <div className="w-full h-full relative">
                                            {displayOutcomes.map((outcome, oIdx) => {
                                                const pos = positions[oIdx % positions.length];
                                                const vizType = (idx + oIdx) % 3; // Cycle types 0, 1, 2
                                                
                                                return (
                                                    <motion.div
                                                        key={oIdx}
                                                        style={{ 
                                                            top: pos.top, 
                                                            left: isEven ? undefined : pos.left, // Mirror layout logic
                                                            right: isEven ? (pos.left ? pos.left : undefined) : pos.right,
                                                            bottom: pos.bottom,
                                                            zIndex: pos.zIndex
                                                        }}
                                                        // Forever Floating Animation
                                                        animate={{ y: [0, -15, 0] }}
                                                        transition={{ 
                                                            duration: 4 + oIdx, // Varied duration (4s, 5s, 6s)
                                                            repeat: Infinity, 
                                                            ease: "easeInOut",
                                                            delay: oIdx * 0.5 // Varied start
                                                        }}
                                                        className={`
                                                            absolute w-44 p-5 rounded-2xl 
                                                            bg-slate-900/80 backdrop-blur-xl 
                                                            border border-slate-700/50 shadow-2xl
                                                            hover:border-${colorClass.split('-')[1]}-500/50 hover:scale-105 transition-all
                                                        `}
                                                    >
                                                        {/* No "Outcome" label, just clear Value + Graphic */}
                                                        
                                                        {/* Graphic Section */}
                                                        <div className="mb-3">
                                                            {vizType === 0 && <TrendChart color={colorClass} />}
                                                            {vizType === 1 && <ActivityWave color={colorClass} />}
                                                            {vizType === 2 && <div className="flex justify-center"><CircleStat color={colorClass} value={95 - (oIdx * 3)} /></div>}
                                                        </div>

                                                        {/* Text/Value Section */}
                                                        <div className="text-center">
                                                            <div className={`text-2xl font-bold text-white leading-none mb-1`}>
                                                                {/* Mock values if needed, or just the outcome text as the "Hero" */}
                                                                {vizType === 0 && "Growth"}
                                                                {vizType === 1 && "Active"}
                                                                {vizType === 2 && "Mastery"}
                                                            </div>
                                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 pt-2 border-t border-white/10">
                                                                {outcome}
                                                            </div>
                                                        </div>

                                                        {/* Corner Accent */}
                                                        <div className={`absolute top-0 right-0 p-2 opacity-50`}>
                                                             {vizType === 0 && <TrendingUp size={12} className={colorClass} />}
                                                             {vizType === 1 && <Activity size={12} className={colorClass} />}
                                                             {vizType === 2 && <Zap size={12} className={colorClass} />}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
