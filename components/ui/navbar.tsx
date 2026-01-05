"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { triggerHaptic } from "@/lib/haptics";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, BrainCircuit, ShieldCheck, Atom } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Desktop dropdown state

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const links = [
    { href: "/", label: "School" },
    { href: "/campus", label: "Campus" },
    { href: "/admissions", label: "Admissions" },
  ];

  const programLinks = [
    { 
        href: "/programs/ai", 
        label: "Artificial Intelligence", 
        desc: "The Intelligence Layer",
        icon: BrainCircuit,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    { 
        href: "/programs/cyber", 
        label: "Cyber Security", 
        desc: "The Defense Layer",
        icon: ShieldCheck,
        color: "text-red-600",
        bg: "bg-red-50"
    },
    { 
        href: "/programs/quantum-computing", 
        label: "Quantum Computing", 
        desc: "The Q-Layer",
        icon: Atom,
        color: "text-cyan-400",
        bg: "bg-cyan-950/30"
    },
  ];

  const handleHaptic = () => {
    triggerHaptic();
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none perspective-[2000px]">
        {/* Container for floating bubbles */}
        <div className="flex items-center gap-3 pointer-events-auto relative w-auto justify-center">
             
             {/* 1. Main Logo/Nav Bubble */}
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="glass px-6 py-3 rounded-full flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm relative z-50"
            >
                <Link href="/" onClick={handleHaptic} className="font-bold text-xl tracking-tighter flex items-center gap-2 text-slate-900 md:mr-8">
                    <div className="w-5 h-5 bg-slate-900 rounded-md" />
                    <span>THE FOUNDRY</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    <Link 
                        href="/" 
                        onClick={handleHaptic}
                        className={cn("text-sm font-medium transition-colors hover:text-blue-600", pathname === "/" ? "text-slate-900 font-bold" : "text-slate-500")}
                    >
                        School
                    </Link>

                    {/* Programs Dropdown Trigger */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setIsProgramsOpen(true)}
                        onMouseLeave={() => setIsProgramsOpen(false)}
                    >
                        <button 
                            onClick={handleHaptic}
                            className={cn(
                                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 py-2",
                                pathname.startsWith("/programs") ? "text-slate-900 font-bold" : "text-slate-500"
                            )}
                        >
                            Programs <ChevronDown size={14} className={`transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        {/* 3D Holographic Dropdown Menu */}
                        <AnimatePresence>
                            {isProgramsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -20, y: 20, scale: 0.9, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, rotateX: -10, y: 10, scale: 0.95, filter: "blur(10px)" }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 20,
                                        mass: 0.8
                                    }}
                                    style={{ transformOrigin: "top center" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-80 p-2 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-[0_30px_80px_-12px_rgba(0,0,0,0.25)] border border-white/80 overflow-hidden ring-1 ring-slate-900/5"
                                >
                                    {/* Spotlight Glow Effect inside dropdown */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-blue-500/20 blur-[50px] pointer-events-none" />

                                    <div className="flex flex-col gap-1 relative z-10">
                                        {programLinks.map((prog, i) => (
                                            <motion.div
                                                key={prog.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <Link 
                                                    href={prog.href}
                                                    onClick={handleHaptic}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/60 transition-colors group/item relative overflow-hidden"
                                                >
                                                    <div className={`w-10 h-10 rounded-lg ${prog.bg} flex items-center justify-center ${prog.color} group-hover/item:scale-110 transition-transform shadow-sm`}>
                                                        <prog.icon size={18} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm">{prog.label}</div>
                                                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500/80">{prog.desc}</div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link 
                        href="/campus" 
                        onClick={handleHaptic}
                        className={cn("text-sm font-medium transition-colors hover:text-blue-600", pathname === "/campus" ? "text-slate-900 font-bold" : "text-slate-500")}
                    >
                        Campus
                    </Link>
                     <Link 
                        href="/admissions" 
                        onClick={handleHaptic}
                        className={cn("text-sm font-medium transition-colors hover:text-blue-600", pathname === "/admissions" ? "text-slate-900 font-bold" : "text-slate-500")}
                    >
                        Admissions
                    </Link>
                     <Link 
                        href="/resources" 
                        onClick={handleHaptic}
                        className={cn("text-sm font-medium transition-colors hover:text-blue-600", pathname.startsWith("/resources") ? "text-slate-900 font-bold" : "text-slate-500")}
                    >
                        Resources
                    </Link>
                </div>

                {/* Desktop CTA */}
                 <button onClick={handleHaptic} className="hidden md:block ml-6 px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl pointer-events-auto">
                    Apply Now
                </button>
            </motion.div>

            {/* 2. Mobile Menu Toggle Bubble (Separate) */}
            <motion.button
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                onClick={() => { setIsOpen(!isOpen); handleHaptic(); }}
                className="md:hidden glass w-12 h-12 flex items-center justify-center rounded-full bg-white/70 text-slate-900 backdrop-blur-xl border border-white/50 shadow-sm active:scale-95 transition-all z-50 pointer-events-auto"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <X size={24} className="text-slate-900" />
                ) : (
                   /* Minimal 2-Line Icon */
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
                        <path d="M4 9H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M4 15H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                   </svg>
                )}
            </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-slate-50/95 backdrop-blur-3xl pt-32 px-6 flex flex-col md:hidden overflow-y-auto"
            >
                <div className="flex flex-col gap-6 text-center pb-20">
                    <Link href="/" onClick={() => { setIsOpen(false); handleHaptic(); }} className="text-3xl font-bold tracking-tighter text-slate-900">School</Link>
                    
                    <div className="py-4 border-y border-slate-200">
                        <div className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">Programs</div>
                        {programLinks.map((prog) => (
                             <Link 
                                key={prog.href}
                                href={prog.href}
                                onClick={() => { setIsOpen(false); handleHaptic(); }}
                                className="block py-3 text-2xl font-bold text-slate-800"
                            >
                                {prog.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/campus" onClick={() => { setIsOpen(false); handleHaptic(); }} className="text-3xl font-bold tracking-tighter text-slate-900">Campus</Link>
                    <Link href="/admissions" onClick={() => { setIsOpen(false); handleHaptic(); }} className="text-3xl font-bold tracking-tighter text-slate-900">Admissions</Link>
                    <Link href="/resources" onClick={() => { setIsOpen(false); handleHaptic(); }} className="text-3xl font-bold tracking-tighter text-slate-900">Resources</Link>
                    
                    <div className="mt-8">
                        <button onClick={handleHaptic} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl shadow-xl">
                            APPLY FOR PROGRAM
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
