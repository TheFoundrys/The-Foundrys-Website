"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const polarData = [
    {
        label: "Academic Sessions",
        percent: 40,
        color: "#3b82f6", // Vibrant Blue
        radius: 180,
        desc: "Where ideas take shape through Structured learning, Discussions and Case Studies."
    },
    {
        label: "Start-up Lab",
        percent: 25,
        color: "#8b5cf6", // Purple/Violet
        radius: 155,
        desc: "Where ideas turn into ventures through experimentation and Mentorship."
    },
    {
        label: "Industry Exposure",
        percent: 15,
        color: "#06b6d4", // Cyan
        radius: 130,
        desc: "Masterclasses, Guest Sessions and Workshops that bridge Classroom Learning with real-world insights."
    },
    {
        label: "Beyond Academics",
        percent: 10,
        color: "#10b981", // Emerald
        radius: 105,
        desc: "Fueling energy, excellence, and enthusiasm through play."
    },
    {
        label: "Student Circles",
        percent: 10,
        color: "#ec4899", // Pink
        radius: 80,
        desc: "Collaborative Spaces/Clubs that spark Creativity, Teamwork and Leadership."
    },
];

export function ProgramStats() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const legendRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleSliceClick = (index: number) => {
        // Scroll logic for mobile
        if (legendRefs.current[index]) {
            legendRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
            setHoveredIndex(index);
            // Clear highlight after 2s so it doesn't get stuck on mobile
            setTimeout(() => setHoveredIndex(null), 2000);
        }
    };

    // Calc paths for SVG
    let currentAngle = 0;
    const paths = polarData.map((slice, i) => {
        const startLast = currentAngle;
        const sliceAngle = (slice.percent / 100) * 360;
        const endAngle = currentAngle + sliceAngle;
        currentAngle = endAngle;

        // SVG Arc calc
        // Convert deg to rad
        const startRad = (startLast - 90) * (Math.PI / 180);
        const endRad = (endAngle - 90) * (Math.PI / 180);

        const x1 = 200 + slice.radius * Math.cos(startRad);
        const y1 = 200 + slice.radius * Math.sin(startRad);
        const x2 = 200 + slice.radius * Math.cos(endRad);
        const y2 = 200 + slice.radius * Math.sin(endRad);

        const largeArcFlag = sliceAngle > 180 ? 1 : 0;

        // Path: Move to center -> Line to radius start -> Arc to radius end -> Close
        const d = `M 200 200 L ${x1} ${y1} A ${slice.radius} ${slice.radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

        return { d, ...slice, centerAngle: startLast + sliceAngle / 2 };
    });

    return (
        <section className="py-28 px-4 bg-slate-950 overflow-hidden border-t border-white/5 relative">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 relative z-10">

                {/* Left: Stepped Polar Chart */}
                <div className="md:w-1/2 relative flex justify-center items-center">
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative">
                        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.2)] transform -rotate-90 md:rotate-0 transition-transform">
                            {paths.map((slice, i) => (
                                <motion.path
                                    key={i}
                                    d={slice.d}
                                    fill={slice.color}
                                    stroke="#020617"
                                    strokeWidth="2"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                                    onClick={() => handleSliceClick(i)}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="hover:opacity-95 cursor-pointer transition-opacity origin-center tap-highlight-transparent"
                                    style={{
                                        scale: hoveredIndex === i ? 1.05 : 1,
                                        zIndex: hoveredIndex === i ? 10 : 1
                                    }}
                                />
                            ))}
                            {/* Central Dark Circle */}
                            <circle cx="200" cy="200" r="40" fill="#020617" className="drop-shadow-sm" />
                        </svg>
                    </div>
                </div>

                {/* Right: Legend / Explainer */}
                <div className="md:w-1/2 space-y-6 w-full">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center md:text-left tracking-tight">The Program Mix</h3>
                    <div className="space-y-4">
                        {polarData.map((item, i) => (
                            <motion.div
                                key={i}
                                ref={(el) => { legendRefs.current[i] = el; }}
                                className={`p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                                    hoveredIndex === i 
                                        ? "bg-slate-900 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] scale-[1.02]" 
                                        : "bg-slate-900/20 border-transparent hover:bg-slate-900/40 hover:border-white/5"
                                }`}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-4.5 h-4.5 rounded-full" style={{ backgroundColor: item.color }} />
                                    <h4 className="font-bold text-white text-lg">{item.label} <span className="text-slate-400 text-sm ml-2">({item.percent}%)</span></h4>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed pl-7">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
