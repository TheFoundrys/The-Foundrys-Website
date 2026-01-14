"use client";
import { BrainCircuit, Landmark, Leaf, Zap, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ARCHETYPES = [
  {
    id: "intelligence",
    title: "Engineer Intelligence",
    school: "School of Deep Tech",
    desc: "Architects who don't just write code, but engineer the mind of the machine.",
    icon: <BrainCircuit size={48} className="text-white" />,
    color: "bg-blue-600",
    gradient: "from-blue-600 to-indigo-900",
    link: "/schools#deep-tech"
  },
  {
    id: "empires",
    title: "Build Empires",
    school: "School of Entrepreneurship",
    desc: "Architects who don't just pitch ideas, but construct sovereign systems.",
    icon: <Landmark size={48} className="text-white" />,
    color: "bg-amber-600",
    gradient: "from-amber-600 to-orange-900",
    link: "/schools#entrepreneurship"
  },
  {
    id: "nature",
    title: "Nature is The Blueprint",
    school: "School of Sustainability",
    desc: "Architects who understand that biology is the only technology that scales.",
    icon: <Leaf size={48} className="text-white" />,
    color: "bg-emerald-600",
    gradient: "from-emerald-600 to-teal-900",
    link: "/schools#sustainability"
  },
  {
    id: "power",
    title: "Power is Harvested",
    school: "School of Energy",
    desc: "Architects who know that energy isn't given, it is captured from the cosmos.",
    icon: <Zap size={48} className="text-white" />,
    color: "bg-cyan-600",
    gradient: "from-cyan-600 to-blue-900",
    link: "/schools#energy"
  }
];

export function ArchetypeColumns() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-0 bg-slate-950 text-white overflow-hidden" onMouseLeave={() => setActiveId(null)}>
      <div className="flex flex-col lg:flex-row w-full lg:h-[800px]">
        {ARCHETYPES.map((arch) => (
          <div
            key={arch.id}
            onMouseEnter={() => setActiveId(arch.id)}
            onClick={() => setActiveId(activeId === arch.id ? null : arch.id)}
            className={`relative transition-all duration-500 ease-in-out border-b lg:border-b-0 lg:border-r border-slate-800 last:border-none group overflow-hidden cursor-pointer
                ${activeId === arch.id ? "h-[600px] lg:h-auto lg:flex-[2]" : "h-[200px] lg:h-auto lg:flex-1"}
            `}
          >
            {/* Background Image / Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${arch.gradient} opacity-0 group-hover:opacity-100 ${activeId === arch.id ? "opacity-100" : ""} transition-opacity duration-500`} />
            
            {/* Default State (Minimal) */}
            <div className={`absolute inset-0 flex flex-col justify-end p-8 lg:p-12 transition-all duration-500 ${activeId === arch.id ? "opacity-0 translate-y-10" : "opacity-100"}`}>
                <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                    {React.cloneElement(arch.icon as React.ReactElement<{ size: number, className?: string }>, { size: activeId === arch.id ? 64 : 48 })}
                </div>
                <h3 className="text-3xl font-bold font-serif italic tracking-wide text-slate-400 group-hover:text-white transition-colors uppercase">
                    {arch.title.split(" ")[0]} <br/> <span className="text-white not-italic font-sans">{arch.title.split(" ").slice(1).join(" ")}</span>
                </h3>
            </div>

            {/* Active State (Expanded Content) */}
             <div className={`absolute inset-0 flex flex-col justify-center p-8 lg:p-16 transition-all duration-500 ${activeId === arch.id ? "opacity-100 translate-y-0 delay-100 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                <div className="mb-8">
                    {arch.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {arch.title}
                </h3>
                <div className="h-1 w-20 bg-white/30 mb-8" />
                <h4 className="text-xl font-bold text-white/60 mb-4 uppercase tracking-widest text-sm">
                    {arch.school}
                </h4>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-md mb-10">
                    {arch.desc}
                </p>
                <Link href={arch.link} className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors w-fit">
                    Explore Blueprint <ArrowUpRight size={18} />
                </Link>
            </div>
            
            {/* Overlay for inactive items when one is active */}
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 pointer-events-none
                ${activeId && activeId !== arch.id ? "opacity-100" : "opacity-0"}
            `} />

          </div>
        ))}
      </div>
    </section>
  );
}
