import { motion } from 'framer-motion';

export function ProgramStats() {
    // Stepped Polar Area Chart Implementation for Cyber
    const skills = [
        { name: "Offensive Security", level: 90, color: "rgba(16, 185, 129, 0.8)", desc: "Red Teaming, Exploitation" },
        { name: "Defensive Ops", level: 85, color: "rgba(16, 185, 129, 0.6)", desc: "SOC, Incident Response" },
        { name: "Network Eng", level: 80, color: "rgba(16, 185, 129, 0.4)", desc: "Architecture, Protocols" },
        { name: "Forensics", level: 75, color: "rgba(16, 185, 129, 0.3)", desc: "Digital Analysis, Recovery" },
        { name: "Reverse Eng", level: 70, color: "rgba(16, 185, 129, 0.5)", desc: "Malware Analysis" }
    ];

    const radius = 120;
    const center = 150;

    // Calculate paths for stepped slices
    const createSteppedSlice = (index: number, level: number) => {
        const total = skills.length;
        const anglePerSlice = (2 * Math.PI) / total;
        const startAngle = index * anglePerSlice - Math.PI / 2;
        const endAngle = (index + 1) * anglePerSlice - Math.PI / 2;
        
        // Step calculation (normalize level to radius)
        const outerRadius = (level / 100) * radius;

        // SVG Path command for a sector
        const x1 = center + outerRadius * Math.cos(startAngle);
        const y1 = center + outerRadius * Math.sin(startAngle);
        const x2 = center + outerRadius * Math.cos(endAngle);
        const y2 = center + outerRadius * Math.sin(endAngle);

        return `M ${center} ${center} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} Z`;
    };

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Beyond Theory. <br/>
                            <span className="text-emerald-500">Battle-Hardened Skills.</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Our curriculum isn't about memorizing acronyms. It's about simulating real-world warfare. 
                            You balance on the knife's edge between <span className="text-white">Red Team aggression</span> and <span className="text-white">Blue Team resilience</span>.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-emerald-500/5 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <div className="text-3xl font-bold text-white mb-1">10+</div>
                                <div className="text-sm text-slate-400">CTF Campaigns</div>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-emerald-500/5 -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100" />
                                <div className="text-3xl font-bold text-white mb-1">5</div>
                                <div className="text-sm text-slate-400">Live Fire Ranges</div>
                            </div>
                        </div>
                    </div>

                    {/* Stepped Polar Chart with Radar Scan */}
                    <div className="md:w-1/2 flex justify-center overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory w-full">
                        <div className="min-w-[300px] snap-center">
                            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                                {/* HUD Background Rings */}
                                <div className="absolute inset-0 border-2 border-emerald-900/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-4 border border-emerald-900/30 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />

                                {/* Radar Scan Line */}
                                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] bg-gradient-to-r from-transparent to-emerald-500/20 origin-top-left -translate-y-full rotate-45 animate-[spin_3s_linear_infinite]" 
                                         style={{ transformOrigin: '0 100%' }}
                                    />
                                </div>
                                
                                {/* SVG Chart */}
                                <svg width="300" height="300" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] relative z-10">
                                    {skills.map((skill, i) => (
                                        <g key={i} className="group hover:opacity-100 transition-all duration-300">
                                            <path 
                                                d={createSteppedSlice(i, skill.level)} 
                                                fill={skill.color} 
                                                stroke="rgba(255,255,255,0.1)"
                                                strokeWidth="1"
                                                className="transition-all duration-300 group-hover:fill-emerald-400"
                                            />
                                        </g>
                                    ))}
                                </svg>
                                
                                {/* Labels */}
                                {skills.map((skill, i) => {
                                    const angle = (i * (2 * Math.PI) / skills.length) - Math.PI / 2 + ((2 * Math.PI) / skills.length) / 2;
                                    const labelRadius = 140; // slightly outside
                                    const x = center + labelRadius * Math.cos(angle);
                                    const y = center + labelRadius * Math.sin(angle);
                                    
                                    return (
                                        <div 
                                            key={i}
                                            className="absolute text-[10px] md:text-xs font-bold text-white bg-slate-900/90 px-2 py-1 rounded border border-emerald-500/30"
                                            style={{ 
                                                left: x, 
                                                top: y, 
                                                transform: 'translate(-50%, -50%)' 
                                            }}
                                        >
                                            {skill.name}
                                        </div>
                                    );
                                })}

                                {/* Decorations */}
                                <div className="absolute bottom-0 right-0 font-mono text-[10px] text-emerald-500/50">
                                    SYS.MONITOR.V2
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
