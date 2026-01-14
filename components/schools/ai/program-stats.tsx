"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const polarData = [
  { 
    label: "Academic Sessions", 
    percent: 40, 
    color: "#1e3a8a", // Dark Blue
    radius: 180,
    desc: "Where ideas take shape through Structured learning, Discussions and Case Studies."
  },
  { 
    label: "Start-up Lab", 
    percent: 25, 
    color: "#2563eb", // Medium Blue
    radius: 155,
    desc: "Where ideas turn into ventures through experimentation and Mentorship."
  },
  { 
    label: "Industry Exposure", 
    percent: 15, 
    color: "#60a5fa", // Light Blue
    radius: 130,
    desc: "Masterclasses, Guest Sessions and Workshops that bridge Classroom Learning with real-world insights."
  },
  { 
    label: "Beyond Academics", 
    percent: 10, 
    color: "#93c5fd", // Lighter Blue
    radius: 105,
    desc: "Fueling energy, excellence, and enthusiasm through play."
  },
  { 
    label: "Student Circles", 
    percent: 10, 
    color: "#bfdbfe", // Very Light Blue
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
    <section className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Stepped Polar Chart */}
        <div className="md:w-1/2 relative flex justify-center items-center">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl transform -rotate-90 md:rotate-0 transition-transform">
                    {paths.map((slice, i) => (
                        <motion.path 
                            key={i}
                            d={slice.d}
                            fill={slice.color}
                            stroke="white"
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            onClick={() => handleSliceClick(i)}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="hover:opacity-90 cursor-pointer transition-opacity origin-center tap-highlight-transparent"
                            style={{ 
                                scale: hoveredIndex === i ? 1.05 : 1, 
                                zIndex: hoveredIndex === i ? 10 : 1 
                            }}
                        />
                    ))}
                    {/* Central White Circle */}
                    <circle cx="200" cy="200" r="40" fill="white" className="drop-shadow-sm" />
                </svg>
            </div>
        </div>

        {/* Right: Legend / Explainer */}
        <div className="md:w-1/2 space-y-6 w-full">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center md:text-left">The Program Mix</h3>
            <div className="space-y-4">
                {polarData.map((item, i) => (
                    <motion.div 
                        key={i}
                        ref={(el) => { legendRefs.current[i] = el; }}
                        className={`p-4 rounded-xl border transition-colors cursor-default ${hoveredIndex === i ? "bg-white border-blue-200 shadow-md scale-105" : "bg-transparent border-transparent hover:bg-white/50"}`}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex items-center gap-3 mb-1">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                            <h4 className="font-bold text-slate-900 text-lg">{item.label} <span className="text-slate-400 text-sm ml-2">({item.percent}%)</span></h4>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed pl-7">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
