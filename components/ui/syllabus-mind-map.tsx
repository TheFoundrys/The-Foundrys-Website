"use client";

import { useMemo, useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

export interface SyllabusPeriodItem {
    period: number;
    title: string;
    topics: string[];
}

export type MindMapTheme = "indigo" | "blue" | "purple" | "emerald" | "cyan" | "violet";

export interface SyllabusMindMapProps {
    data: SyllabusPeriodItem[];
    periodLabel: string;
    hubSubtitle?: string;
    hubTitle: string;
    theme?: MindMapTheme;
}

type NodeCoord = { x: number; y: number; left: string; top: string };

const THEME_STYLES: Record<
    MindMapTheme,
    {
        accent: string;
        boxBorder: string;
        boxShadow: string;
        gradient: string;
        borderActive: string;
        shadowActive: string;
        hubBorder: string;
        hubShadow: string;
        hubPulse: string;
        gridColor: string;
        bgGradient: string;
        strokeActive: string;
        gradStart: string;
        gradEnd: string;
        mobileDot: string;
        mobileDotHover: string;
        check: string;
        weekHover: string;
    }
> = {
    indigo: {
        accent: "text-indigo-600",
        boxBorder: "border-indigo-200",
        boxShadow: "shadow-indigo-100/50",
        gradient: "from-indigo-600 to-indigo-700",
        borderActive: "border-indigo-400",
        shadowActive: "shadow-indigo-200/50",
        hubBorder: "border-indigo-100",
        hubShadow: "shadow-[0_8px_30px_rgba(99,102,241,0.08)]",
        hubPulse: "bg-indigo-500/[0.02]",
        gridColor: "#6366f1",
        bgGradient: "from-indigo-500/[0.01] via-transparent to-purple-500/[0.01]",
        strokeActive: "#6366f1",
        gradStart: "#6366f1",
        gradEnd: "#a855f7",
        mobileDot: "border-indigo-600 bg-indigo-600",
        mobileDotHover: "hover:border-indigo-600",
        check: "text-indigo-600",
        weekHover: "hover:border-indigo-500",
    },
    blue: {
        accent: "text-blue-600",
        boxBorder: "border-blue-200",
        boxShadow: "shadow-blue-100/50",
        gradient: "from-blue-600 to-blue-700",
        borderActive: "border-blue-400",
        shadowActive: "shadow-blue-200/50",
        hubBorder: "border-blue-100",
        hubShadow: "shadow-[0_8px_30px_rgba(37,99,235,0.08)]",
        hubPulse: "bg-blue-500/[0.02]",
        gridColor: "#2563eb",
        bgGradient: "from-blue-500/[0.01] via-transparent to-indigo-500/[0.01]",
        strokeActive: "#2563eb",
        gradStart: "#2563eb",
        gradEnd: "#4f46e5",
        mobileDot: "border-blue-600 bg-blue-600",
        mobileDotHover: "hover:border-blue-600",
        check: "text-blue-600",
        weekHover: "hover:border-blue-500",
    },
    purple: {
        accent: "text-purple-600",
        boxBorder: "border-purple-200",
        boxShadow: "shadow-purple-100/50",
        gradient: "from-purple-600 to-purple-700",
        borderActive: "border-purple-400",
        shadowActive: "shadow-purple-200/50",
        hubBorder: "border-purple-100",
        hubShadow: "shadow-[0_8px_30px_rgba(147,51,234,0.08)]",
        hubPulse: "bg-purple-500/[0.02]",
        gridColor: "#9333ea",
        bgGradient: "from-purple-500/[0.01] via-transparent to-violet-500/[0.01]",
        strokeActive: "#9333ea",
        gradStart: "#9333ea",
        gradEnd: "#7c3aed",
        mobileDot: "border-purple-600 bg-purple-600",
        mobileDotHover: "hover:border-purple-600",
        check: "text-purple-600",
        weekHover: "hover:border-purple-500",
    },
    emerald: {
        accent: "text-emerald-600",
        boxBorder: "border-emerald-200",
        boxShadow: "shadow-emerald-100/50",
        gradient: "from-emerald-600 to-emerald-700",
        borderActive: "border-emerald-400",
        shadowActive: "shadow-emerald-200/50",
        hubBorder: "border-emerald-100",
        hubShadow: "shadow-[0_8px_30px_rgba(16,185,129,0.08)]",
        hubPulse: "bg-emerald-500/[0.02]",
        gridColor: "#10b981",
        bgGradient: "from-emerald-500/[0.01] via-transparent to-teal-500/[0.01]",
        strokeActive: "#10b981",
        gradStart: "#10b981",
        gradEnd: "#0d9488",
        mobileDot: "border-emerald-600 bg-emerald-600",
        mobileDotHover: "hover:border-emerald-600",
        check: "text-emerald-600",
        weekHover: "hover:border-emerald-500",
    },
    cyan: {
        accent: "text-cyan-600",
        boxBorder: "border-cyan-200",
        boxShadow: "shadow-cyan-100/50",
        gradient: "from-cyan-600 to-cyan-700",
        borderActive: "border-cyan-400",
        shadowActive: "shadow-cyan-200/50",
        hubBorder: "border-cyan-100",
        hubShadow: "shadow-[0_8px_30px_rgba(8,145,178,0.08)]",
        hubPulse: "bg-cyan-500/[0.02]",
        gridColor: "#0891b2",
        bgGradient: "from-cyan-500/[0.01] via-transparent to-blue-500/[0.01]",
        strokeActive: "#0891b2",
        gradStart: "#0891b2",
        gradEnd: "#2563eb",
        mobileDot: "border-cyan-600 bg-cyan-600",
        mobileDotHover: "hover:border-cyan-600",
        check: "text-cyan-600",
        weekHover: "hover:border-cyan-500",
    },
    violet: {
        accent: "text-violet-600",
        boxBorder: "border-violet-200",
        boxShadow: "shadow-violet-100/50",
        gradient: "from-violet-600 to-violet-700",
        borderActive: "border-violet-400",
        shadowActive: "shadow-violet-200/50",
        hubBorder: "border-violet-100",
        hubShadow: "shadow-[0_8px_30px_rgba(124,58,237,0.08)]",
        hubPulse: "bg-violet-500/[0.02]",
        gridColor: "#7c3aed",
        bgGradient: "from-violet-500/[0.01] via-transparent to-purple-500/[0.01]",
        strokeActive: "#7c3aed",
        gradStart: "#7c3aed",
        gradEnd: "#9333ea",
        mobileDot: "border-violet-600 bg-violet-600",
        mobileDotHover: "hover:border-violet-600",
        check: "text-violet-600",
        weekHover: "hover:border-violet-500",
    },
};

const TOPIC_BOX_ANCHOR_CLASS = {
    left: "translate-x-0 -translate-y-1/2",
    right: "-translate-x-full -translate-y-1/2",
    top: "-translate-x-1/2 translate-y-0",
    bottom: "-translate-x-1/2 -translate-y-full",
} as const;

function buildRadialLayout(count: number) {
    const cx = 500;
    const cy = 300;
    const radiusX = count <= 2 ? 155 : count <= 4 ? 175 : count <= 5 ? 185 : 190;
    const radiusY = count <= 2 ? 130 : count <= 4 ? 160 : count <= 5 ? 168 : 172;

    const coords: Record<number, NodeCoord> = {};
    const paths: Record<number, string> = {};

    for (let i = 0; i < count; i++) {
        const period = i + 1;
        const angle = (2 * Math.PI * i) / count - Math.PI / 2;
        const x = Math.round(cx + Math.cos(angle) * radiusX);
        const y = Math.round(cy + Math.sin(angle) * radiusY);

        coords[period] = {
            x,
            y,
            left: `${(x / 1000) * 100}%`,
            top: `${(y / 600) * 100}%`,
        };

        const cpx = Math.round(cx + (x - cx) * 0.55 + (y - cy) * 0.06);
        const cpy = Math.round(cy + (y - cy) * 0.55 - (x - cx) * 0.06);
        paths[period] = `M ${cx} ${cy} Q ${cpx} ${cpy}, ${x} ${y}`;
    }

    return { coords, paths };
}

function getTopicBoxLayout(coord: NodeCoord, allCoords: NodeCoord[], topics: string[]) {
    const cx = 500;
    const cy = 300;
    const dx = coord.x - cx;
    const dy = coord.y - cy;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;

    let ux = dx / len;
    let uy = dy / len;

    if (coord.y < 200) {
        ux = coord.x > cx ? 0.9 : -0.9;
        uy = 0.4;
    } else if (coord.y > 400) {
        ux = coord.x > cx ? 0.9 : -0.9;
        uy = -0.35;
    }
    const nLen = Math.sqrt(ux * ux + uy * uy) || 1;
    ux /= nLen;
    uy /= nLen;

    const WEEK_HALF = 88;
    const BOX_HALF_W = 120;
    const estimatedLines = topics.reduce((sum, topic) => sum + Math.max(1, Math.ceil(topic.length / 34)), 0);
    const estimatedHeight = 58 + estimatedLines * 14 + topics.length * 4;
    const BOX_HALF_H = Math.min(240, Math.max(130, Math.ceil(estimatedHeight / 2)));
    const BOX_GAP = 110;
    const spread = WEEK_HALF + BOX_GAP + BOX_HALF_W;

    const candidateVectors = [
        { x: ux, y: uy, bonus: 0 },
        { x: ux, y: -uy, bonus: 0.2 },
        { x: -ux, y: uy, bonus: 0.35 },
        { x: uy, y: -ux, bonus: 0.45 },
        { x: -uy, y: ux, bonus: 0.55 },
    ];

    const getPenalty = (centerX: number, centerY: number) => {
        let penalty = 0;
        const nodeHalfW = 88;
        const nodeHalfH = 34;
        const clearance = 24;

        for (const node of allCoords) {
            if (node.x === coord.x && node.y === coord.y) continue;
            const dxNode = Math.abs(node.x - centerX);
            const dyNode = Math.abs(node.y - centerY);
            const overlapX = dxNode < BOX_HALF_W + nodeHalfW + clearance;
            const overlapY = dyNode < BOX_HALF_H + nodeHalfH + clearance;

            // Very strong penalty if topic panel would overlap any other week card.
            if (overlapX && overlapY) {
                penalty += 12;
            } else if (dxNode < BOX_HALF_W + nodeHalfW + 55 && dyNode < BOX_HALF_H + nodeHalfH + 55) {
                penalty += 3;
            }
        }

        if (Math.hypot(centerX - 500, centerY - 300) < BOX_HALF_W + 90) {
            penalty += 4;
        }

        const minX = centerX - BOX_HALF_W;
        const maxX = centerX + BOX_HALF_W;
        const minY = centerY - BOX_HALF_H;
        const maxY = centerY + BOX_HALF_H;

        if (minX < 20) penalty += (20 - minX) / 40;
        if (maxX > 980) penalty += (maxX - 980) / 40;
        if (minY < 30) penalty += (30 - minY) / 35;
        if (maxY > 570) penalty += (maxY - 570) / 35;

        return penalty;
    };

    let best = {
        ux,
        uy,
        centerX: coord.x + ux * spread,
        centerY: coord.y + uy * spread,
        score: Number.POSITIVE_INFINITY,
    };

    for (const candidate of candidateVectors) {
        const n = Math.hypot(candidate.x, candidate.y) || 1;
        const cux = candidate.x / n;
        const cuy = candidate.y / n;
        const centerX = coord.x + cux * spread;
        const centerY = coord.y + cuy * spread;
        const score = getPenalty(centerX, centerY) + candidate.bonus;
        if (score < best.score) {
            best = { ux: cux, uy: cuy, centerX, centerY, score };
        }
    }

    const anchor: keyof typeof TOPIC_BOX_ANCHOR_CLASS =
        Math.abs(best.ux) >= Math.abs(best.uy)
            ? (best.ux > 0 ? "left" : "right")
            : (best.uy > 0 ? "top" : "bottom");

    const lineStart = { x: coord.x + best.ux * WEEK_HALF, y: coord.y + best.uy * WEEK_HALF };

    let anchorX = best.centerX;
    let anchorY = best.centerY;
    let lineEnd = { x: best.centerX, y: best.centerY };

    if (anchor === "left") {
        anchorX = best.centerX - BOX_HALF_W;
        lineEnd = { x: anchorX, y: best.centerY };
    } else if (anchor === "right") {
        anchorX = best.centerX + BOX_HALF_W;
        lineEnd = { x: anchorX, y: best.centerY };
    } else if (anchor === "top") {
        anchorY = best.centerY - BOX_HALF_H;
        lineEnd = { x: best.centerX, y: anchorY };
    } else {
        anchorY = best.centerY + BOX_HALF_H;
        lineEnd = { x: best.centerX, y: anchorY };
    }

    return { anchor, anchorX, anchorY, lineStart, lineEnd };
}

export function SyllabusMindMap({
    data,
    periodLabel,
    hubSubtitle = "Methodology",
    hubTitle,
    theme = "indigo",
}: SyllabusMindMapProps) {
    const [activePeriod, setActivePeriod] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const gradientId = useId().replace(/:/g, "");
    const styles = THEME_STYLES[theme];

    const { coords, paths } = useMemo(() => buildRadialLayout(data.length), [data.length]);

    const activeContent = data.find((item) => item.period === activePeriod);
    const activeCoord = activePeriod !== 0 ? coords[activePeriod] : null;
    const activeTopicBoxLayout = activeCoord && activeContent
        ? getTopicBoxLayout(activeCoord, Object.values(coords), activeContent.topics)
        : null;

    if (data.length === 0) return null;

    return (
        <div className="w-full">
            {/* Desktop Mind Map */}
            <div className="hidden lg:block">
                <motion.div
                    onClick={() => setActivePeriod(0)}
                    animate={{
                        height: isExpanded ? 620 : 200
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="bg-transparent text-slate-800 p-8 relative overflow-visible select-none cursor-default"
                >
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(${styles.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${styles.gridColor} 1px, transparent 1px)`,
                            backgroundSize: "45px 45px",
                        }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${styles.bgGradient} pointer-events-none`} />



                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        animate={{
                            height: isExpanded ? 500 : 120,
                            marginTop: isExpanded ? 40 : 16
                        }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="relative w-full overflow-visible"
                    >
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-0"
                            viewBox="0 0 1000 600"
                            preserveAspectRatio="none"
                            fill="none"
                        >
                            {data.map((item) => {
                                const path = paths[item.period];
                                const isActive = activePeriod === item.period;
                                const isAnyActive = activePeriod !== 0;
                                return (
                                    <g key={item.period}>
                                        <motion.path
                                            d={path}
                                            stroke={isActive ? styles.strokeActive : "#cbd5e1"}
                                            strokeWidth={isActive ? 3 : 1.5}
                                            strokeDasharray={isAnyActive ? "none" : "5 5"}
                                            strokeLinecap="round"
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{
                                                pathLength: isExpanded ? 1 : 0,
                                                opacity: isExpanded ? (isAnyActive ? (isActive ? 1 : 0.08) : 1) : 0,
                                            }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        />
                                    </g>
                                );
                            })}

                            <AnimatePresence>
                                {activeTopicBoxLayout && activeContent && (
                                    <motion.path
                                        key={`topic-line-${activePeriod}`}
                                        d={`M ${activeTopicBoxLayout.lineStart.x} ${activeTopicBoxLayout.lineStart.y} L ${activeTopicBoxLayout.lineEnd.x} ${activeTopicBoxLayout.lineEnd.y}`}
                                        stroke={`url(#mindmap-grad-${gradientId})`}
                                        strokeWidth={2.5}
                                        strokeLinecap="round"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        exit={{ pathLength: 0, opacity: 0 }}
                                        transition={{ duration: 0.45 }}
                                    />
                                )}
                            </AnimatePresence>

                            <defs>
                                <linearGradient id={`mindmap-grad-${gradientId}`} x1="300" y1="100" x2="700" y2="500" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor={styles.gradStart} />
                                    <stop offset="100%" stopColor={styles.gradEnd} />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-30">
                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(!isExpanded);
                                    if (isExpanded) {
                                        setActivePeriod(0);
                                    }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-32 h-32 rounded-full bg-gradient-to-br from-white to-slate-50 text-slate-800 flex flex-col items-center justify-center text-center p-4 ${styles.hubShadow} border ${styles.hubBorder} relative cursor-pointer focus:outline-none`}
                            >
                                <div className={`absolute inset-0 rounded-full ${styles.hubPulse} animate-pulse`} />
                                <span className={`text-[9px] font-mono tracking-widest ${styles.accent} uppercase font-bold mb-1`}>
                                    {hubSubtitle}
                                </span>
                                <span className="font-extrabold text-sm tracking-tight leading-tight uppercase text-slate-800">
                                    {hubTitle}
                                </span>
                                <motion.div 
                                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-slate-800 shadow-md whitespace-nowrap animate-pulse"
                                    animate={{
                                        scale: isExpanded ? 0.95 : [1, 1.05, 1],
                                    }}
                                    transition={{
                                        scale: isExpanded 
                                            ? { duration: 0.2 } 
                                            : { repeat: Infinity, duration: 2, ease: "easeInOut" }
                                    }}
                                >
                                    {isExpanded ? "Collapse" : "Click to Explore"}
                                </motion.div>
                            </motion.button>
                        </div>

                        {data.map((item) => {
                            const coord = coords[item.period];
                            const isActive = activePeriod === item.period;
                            const isAnyActive = activePeriod !== 0;

                            return (
                                <motion.button
                                    key={item.period}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!isExpanded) return;
                                        setActivePeriod(isActive ? 0 : item.period);
                                    }}
                                    style={{ left: coord.left, top: coord.top }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: isExpanded ? (isAnyActive && !isActive ? 0.45 : 1) : 0,
                                        scale: isExpanded ? (isActive ? 1.06 : isAnyActive ? 0.95 : 1) : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                        delay: isExpanded ? item.period * 0.04 : 0,
                                    }}
                                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-44 p-3 rounded-2xl flex flex-col items-center justify-center text-center border transition-all duration-300 shadow-sm ${
                                        !isExpanded ? "pointer-events-none" : ""
                                    } ${
                                        isActive
                                            ? `bg-gradient-to-br ${styles.gradient} text-white ${styles.borderActive} shadow-lg ${styles.shadowActive}`
                                            : `bg-white text-slate-700 border-slate-200 ${styles.weekHover} hover:bg-slate-50`
                                    }`}
                                >
                                    <span className={`text-[9px] font-mono uppercase tracking-widest mb-1 ${isActive ? "opacity-90" : "opacity-70"}`}>
                                        {periodLabel} {item.period}
                                    </span>
                                    <span className="font-extrabold text-xs tracking-tight line-clamp-2 leading-tight">
                                        {item.title}
                                    </span>
                                </motion.button>
                            );
                        })}

                        <AnimatePresence>
                            {activeTopicBoxLayout && activeContent && (
                                <motion.div
                                    key={`topics-box-${activePeriod}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        left: `${activeTopicBoxLayout.anchorX / 10}%`,
                                        top: `${(activeTopicBoxLayout.anchorY / 600) * 100}%`,
                                    }}
                                    className={`absolute z-25 ${TOPIC_BOX_ANCHOR_CLASS[activeTopicBoxLayout.anchor]}`}
                                >
                                    <motion.div
                                        initial={{ scale: 0.85 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.85 }}
                                        transition={{ type: "spring", stiffness: 140, damping: 18 }}
                                        style={{
                                            transformOrigin:
                                                activeTopicBoxLayout.anchor === "left" ? "left center" :
                                                activeTopicBoxLayout.anchor === "right" ? "right center" :
                                                activeTopicBoxLayout.anchor === "top" ? "center top" :
                                                "center bottom",
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`w-60 p-4 bg-white border ${styles.boxBorder} rounded-2xl shadow-xl ${styles.boxShadow} text-left`}
                                    >
                                        <span className={`text-[9px] font-mono uppercase tracking-widest ${styles.accent} font-bold block mb-2.5`}>
                                            {periodLabel} {activePeriod} Topics
                                        </span>
                                        <div className="space-y-2.5">
                                            {activeContent.topics.map((topic, i) => (
                                                <div key={i} className="flex items-start gap-2.5">
                                                    <CheckCircle2 size={13} className={`${styles.check} shrink-0 mt-0.5`} />
                                                    <span className="text-[11px] font-medium text-slate-700 leading-snug">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile Accordion */}
            <div className="block lg:hidden space-y-6">
                <div className="text-center mb-8">
                    <span className={`text-[10px] font-mono tracking-[0.3em] ${styles.accent} uppercase font-bold`}>
                        Interactive Flowchart
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">Program Roadmap</h3>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-200 space-y-6">
                    {data.map((item) => {
                        const isOpen = activePeriod === item.period;
                        return (
                            <div key={item.period} className="relative">
                                <button
                                    onClick={() => setActivePeriod(isOpen ? 0 : item.period)}
                                    className={`absolute -left-[35px] top-4 w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center z-10 ${
                                        isOpen
                                            ? `${styles.mobileDot} text-white scale-110 shadow-md`
                                            : `border-slate-300 bg-white ${styles.mobileDotHover}`
                                    }`}
                                >
                                    {isOpen ? (
                                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                    ) : (
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    )}
                                </button>

                                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => setActivePeriod(isOpen ? 0 : item.period)}
                                        className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                                    >
                                        <div>
                                            <span className={`text-[9px] font-mono uppercase tracking-widest ${styles.accent} font-bold block mb-1`}>
                                                {periodLabel} {item.period}
                                            </span>
                                            <span className="font-extrabold text-slate-800 text-sm sm:text-base">{item.title}</span>
                                        </div>
                                        <ChevronDown
                                            size={18}
                                            className={`text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                                                    {item.topics.map((topic, i) => (
                                                        <div key={i} className="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                                                            <CheckCircle2 size={16} className={`${styles.check} shrink-0 mt-0.5`} />
                                                            <span className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">{topic}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
