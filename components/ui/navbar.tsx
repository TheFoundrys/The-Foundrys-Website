"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { triggerHaptic } from "@/lib/haptics";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, BrainCircuit, ShieldCheck, Atom, Rocket, Lightbulb, Building2, Users, Library, Menu, Zap, Leaf, Network, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isSchoolsOpen, setIsSchoolsOpen] = useState(false); // Desktop Schools dropdown state
    const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Desktop Programs dropdown state
    const [isMoreOpen, setIsMoreOpen] = useState(false); // Desktop More dropdown state

    const programsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const moreTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [mobileProgramsExpanded, setMobileProgramsExpanded] = useState(false); // Mobile Programs Accordion
    const [mobileSchoolsExpanded, setMobileSchoolsExpanded] = useState(true); // Mobile Schools Accordion State
    const [mobileMoreExpanded, setMobileMoreExpanded] = useState(false); // Mobile More Accordion State

    // State for the two-column layout: defaults to 'deep-tech'
    const [activeCategory, setActiveCategory] = useState<"deep-tech" | "entrepreneurship" | "sustainability" | "energy" | "online">("deep-tech");
    const [activeProgramCategory, setActiveProgramCategory] = useState<"career-transformation" | "executive-leadership" | "educators-faculty">("career-transformation");

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Data Structure for the Categories
    const SCHOOL_CATEGORIES = [
        {
            id: "deep-tech",
            label: "School of Deep Tech",
            description: "Engineering & Applied Sciences"
        },
        {
            id: "entrepreneurship",
            label: "School of Entrepreneurship",
            description: "Venture Building & Strategy"
        },
        {
            id: "sustainability",
            label: "School of Sustainability",
            description: "Climate Resilience & ESG"
        },
        {
            id: "energy",
            label: "School of Energy",
            description: "Sustainable Power Systems"
        }
    ] as const;

    const COURSES = {
        "deep-tech": [
            {
                href: "/schools/ai",
                label: "Artificial Intelligence",
                desc: "The Intelligence Layer",
                icon: BrainCircuit,
                color: "text-blue-600",
                bg: "bg-blue-50"
            },
            {
                href: "/schools/cyber",
                label: "Cyber Security",
                desc: "The Defense Layer",
                icon: ShieldCheck,
                color: "text-red-600",
                bg: "bg-red-50"
            },
            {
                href: "/schools/quantum-computing",
                label: "Quantum Computing",
                desc: "The Q-Layer",
                icon: Atom,
                color: "text-cyan-400",
                bg: "bg-cyan-950/30"
            },
            {
                href: "/schools/blockchain",
                label: "Blockchain Development",
                desc: "The Trust Layer",
                icon: Network,
                color: "text-purple-600",
                bg: "bg-purple-50"
            },
        ],
        "entrepreneurship": [
            {
                href: "/schools/venture-building",
                label: "Venture Building",
                desc: "Zero to One",
                icon: Rocket,
                color: "text-amber-600",
                bg: "bg-amber-50"
            },
            {
                href: "/schools/certified-innovator",
                label: "Certified Innovator",
                desc: "Systems Thinkers",
                icon: Lightbulb,
                color: "text-yellow-600",
                bg: "bg-yellow-50"
            }
        ],
        "sustainability": [
            {
                href: "/schools/esg",
                label: "Environmental, Social, and Governance",
                desc: "Strategic Responsibility",
                icon: Leaf,
                color: "text-green-600",
                bg: "bg-green-50"
            },
            {
                href: "/programs/sustainability-in-the-age-of-ai",
                label: "Sustainability in the Age of AI",
                desc: "Engineering Responsibility",
                icon: Leaf,
                color: "text-emerald-600",
                bg: "bg-emerald-50"
            }
        ],
        "energy": [
            {
                href: "/schools/renewable-energy",
                label: "Renewable Energy",
                desc: "Powering the Future",
                icon: Zap,
                color: "text-emerald-500",
                bg: "bg-emerald-50"
            }
        ],
        "online": []
    };

    const PROGRAM_CATEGORIES = [
        {
            id: "career-transformation",
            label: "Career Transformation",
            description: "Build Your Future"
        },
        {
            id: "executive-leadership",
            label: "Executive Leadership",
            description: "Lead with Impact"
        },
        {
            id: "educators-faculty",
            label: "Educators & Faculty",
            description: "Empower Your Teaching"
        }
    ] as const;

    const PROGRAM_COURSES = {
        "career-transformation": [
            {
                href: "/programs/entry-level",
                label: "Entry Level",
                desc: "Start Your Journey",
                icon: BookOpen,
                color: "text-blue-600",
                bg: "bg-blue-50"
            },
            {
                href: "/programs/professional",
                label: "Mid Level",
                desc: "Advance Your Career",
                icon: Briefcase,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
            }
        ],
        "executive-leadership": [
            {
                href: "/programs/executive",
                label: "Executive Leadership Program",
                desc: "Strategic Vision",
                icon: Briefcase,
                color: "text-amber-600",
                bg: "bg-amber-50"
            }
        ],
        "educators-faculty": [
            {
                href: "/programs/educators",
                label: "Educators & Faculty",
                desc: "Modern Pedagogy",
                icon: GraduationCap,
                color: "text-purple-600",
                bg: "bg-purple-50"
            }
        ]
    };

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
                            <span>The Foundry&apos;s</span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {/* Maps to 'Schools' Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => {
                                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                    setIsSchoolsOpen(true);
                                }}
                                onMouseLeave={() => {
                                    timeoutRef.current = setTimeout(() => setIsSchoolsOpen(false), 300);
                                }}
                            >
                                <Link
                                    href="/schools"
                                    onClick={handleHaptic}
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 py-2",
                                        pathname.startsWith("/schools") ? "text-slate-900 font-bold" : "text-slate-500"
                                    )}
                                >
                                    Schools <ChevronDown size={14} className={`transition-transform duration-200 ${isSchoolsOpen ? "rotate-180" : ""}`} />
                                </Link>

                                {/* 3D Holographic Dropdown Menu - Two Column Layout */}
                                <AnimatePresence>
                                    {isSchoolsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20, scaleY: 0.4, scaleX: 0.8, filter: "blur(12px)" }}
                                            animate={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -10, scaleY: 0.8, scaleX: 0.9, filter: "blur(10px)" }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                                mass: 0.8
                                            }}
                                            style={{ transformOrigin: "top center" }}
                                            className="absolute top-full left-0 -translate-x-10 mt-6 min-w-[500px] p-1 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-[0_30px_80px_-12px_rgba(0,0,0,0.25)] border border-white/80 overflow-hidden ring-1 ring-slate-900/5 flex"
                                        >
                                            {/* Spotlight Glow Effect inside dropdown */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-blue-500/20 blur-[50px] pointer-events-none" />

                                            {/* Left Column: Categories */}
                                            <div className="w-1/2 p-2 bg-slate-50/50 border-r border-slate-100 flex flex-col gap-1 relative z-10">
                                                {SCHOOL_CATEGORIES.map((category) => (
                                                    <button
                                                        key={category.id}
                                                        onMouseEnter={() => setActiveCategory(category.id as "deep-tech" | "entrepreneurship" | "sustainability" | "energy")}
                                                        className={cn(
                                                            "text-left p-3 rounded-xl transition-all duration-200 group/cat",
                                                            activeCategory === category.id
                                                                ? "bg-white shadow-sm ring-1 ring-slate-200"
                                                                : "hover:bg-white/50 hover:shadow-sm text-slate-500"
                                                        )}
                                                    >
                                                        <div className={cn("font-bold text-sm", activeCategory === category.id ? "text-slate-900" : "text-slate-600 group-hover/cat:text-slate-900")}>
                                                            {category.label}
                                                        </div>
                                                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">
                                                            {category.description}
                                                        </div>
                                                    </button>
                                                ))}



                                            </div>

                                            {/* Right Column: Courses */}
                                            <div className="w-1/2 p-2 flex flex-col gap-1 relative z-10">
                                                {COURSES[activeCategory].map((prog, i) => (
                                                    <motion.div
                                                        key={prog.href}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
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

                            {/* Programs Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => {
                                    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
                                    setIsProgramsOpen(true);
                                }}
                                onMouseLeave={() => {
                                    programsTimeoutRef.current = setTimeout(() => setIsProgramsOpen(false), 300);
                                }}
                            >
                                <button
                                    onClick={(e) => { e.preventDefault(); handleHaptic(); }}
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 py-2",
                                        pathname.startsWith("/programs") ? "text-slate-900 font-bold" : "text-slate-500"
                                    )}
                                >
                                    Professional Learning <ChevronDown size={14} className={`transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`} />
                                </button>

                                <AnimatePresence>
                                    {isProgramsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20, scaleY: 0.4, scaleX: 0.8, filter: "blur(12px)" }}
                                            animate={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -10, scaleY: 0.8, scaleX: 0.9, filter: "blur(10px)" }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                                mass: 0.8
                                            }}
                                            style={{ transformOrigin: "top center" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-6 min-w-[500px] p-1 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-[0_30px_80px_-12px_rgba(0,0,0,0.25)] border border-white/80 overflow-hidden ring-1 ring-slate-900/5 flex"
                                        >
                                            {/* Spotlight Glow Effect inside dropdown */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-blue-500/20 blur-[50px] pointer-events-none" />

                                            {/* Left Column: Categories */}
                                            <div className="w-1/2 p-2 bg-slate-50/50 border-r border-slate-100 flex flex-col gap-1 relative z-10">
                                                {PROGRAM_CATEGORIES.map((category) => (
                                                    <button
                                                        key={category.id}
                                                        onMouseEnter={() => setActiveProgramCategory(category.id as "career-transformation" | "executive-leadership" | "educators-faculty")}
                                                        className={cn(
                                                            "text-left p-3 rounded-xl transition-all duration-200 group/cat",
                                                            activeProgramCategory === category.id
                                                                ? "bg-white shadow-sm ring-1 ring-slate-200"
                                                                : "hover:bg-white/50 hover:shadow-sm text-slate-500"
                                                        )}
                                                    >
                                                        <div className={cn("font-bold text-sm", activeProgramCategory === category.id ? "text-slate-900" : "text-slate-600 group-hover/cat:text-slate-900")}>
                                                            {category.label}
                                                        </div>
                                                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">
                                                            {category.description}
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Right Column: Courses */}
                                            <div className="w-1/2 p-2 flex flex-col gap-1 relative z-10">
                                                {PROGRAM_COURSES[activeProgramCategory].map((prog, i) => (
                                                    <motion.div
                                                        key={prog.href}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
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

                            {/* 'More' Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => {
                                    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
                                    setIsMoreOpen(true);
                                }}
                                onMouseLeave={() => {
                                    moreTimeoutRef.current = setTimeout(() => setIsMoreOpen(false), 300);
                                }}
                            >
                                <button
                                    onClick={handleHaptic}
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 py-2",
                                        (pathname === "/campus") ? "text-slate-900 font-bold" : "text-slate-500"
                                    )}
                                >
                                    More <ChevronDown size={14} className={`transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`} />
                                </button>

                                <AnimatePresence>
                                    {isMoreOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-48 p-1 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/80 overflow-hidden ring-1 ring-slate-900/5 flex flex-col gap-1"
                                        >
                                            <Link
                                                href="/about"
                                                onClick={handleHaptic}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                                    <Users size={16} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">About Us</span>
                                            </Link>
                                            <Link
                                                href="/campus"
                                                onClick={handleHaptic}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                                    <Building2 size={16} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">Campus</span>
                                            </Link>

                                            <Link
                                                href="/contact"
                                                onClick={handleHaptic}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                                                    <Users size={16} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">Contact</span>
                                            </Link>

                                            <Link
                                                href="/blog"
                                                onClick={handleHaptic}
                                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                                                    <Library size={16} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">Resources</span>
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Desktop CTA */}
                        <Link href="/apply" onClick={handleHaptic} className="hidden md:block ml-6 px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl pointer-events-auto">
                            Apply Now
                        </Link>
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
                            <Menu size={24} className="text-slate-900" />
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
                        className="fixed inset-0 z-40 bg-slate-50/95 backdrop-blur-3xl flex flex-col md:hidden overflow-hidden"
                    >
                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto px-6 pt-32 pb-24 touch-pan-y">
                            <div className="flex flex-col gap-6">

                                {/* Schools Accordion */}
                                <div className="rounded-2xl bg-white/60 p-1 border border-white/50 shadow-sm">
                                    <button
                                        onClick={() => { setMobileSchoolsExpanded(!mobileSchoolsExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-white/50 transition-colors"
                                    >
                                        <span className="text-xl font-bold text-slate-900">Schools</span>
                                        <ChevronDown size={20} className={cn("text-slate-500 transition-transform", mobileSchoolsExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileSchoolsExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-2 pb-2 flex flex-col gap-4 pt-2">

                                                    {/* Deep Tech Group */}
                                                    <div>
                                                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">School of Deep Tech</div>
                                                        <div className="flex flex-col gap-1">
                                                            {COURSES["deep-tech"].map(course => (
                                                                <Link
                                                                    key={course.href}
                                                                    href={course.href}
                                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                                >
                                                                    <div className={`w-8 h-8 rounded-md ${course.bg} flex items-center justify-center ${course.color}`}>
                                                                        <course.icon size={16} />
                                                                    </div>
                                                                    <span className="font-semibold text-slate-700">{course.label}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Entrepreneurship Group */}
                                                    <div>
                                                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">School of Entrepreneurship</div>
                                                        <div className="flex flex-col gap-1">
                                                            {COURSES["entrepreneurship"].map(course => (
                                                                <Link
                                                                    key={course.href}
                                                                    href={course.href}
                                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                                >
                                                                    <div className={`w-8 h-8 rounded-md ${course.bg} flex items-center justify-center ${course.color}`}>
                                                                        <course.icon size={16} />
                                                                    </div>
                                                                    <span className="font-semibold text-slate-700">{course.label}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Sustainability Group */}
                                                    <div>
                                                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">School of Sustainability</div>
                                                        <div className="flex flex-col gap-1">
                                                            {COURSES["sustainability"].map(course => (
                                                                <Link
                                                                    key={course.href}
                                                                    href={course.href}
                                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                                >
                                                                    <div className={`w-8 h-8 rounded-md ${course.bg} flex items-center justify-center ${course.color}`}>
                                                                        <course.icon size={16} />
                                                                    </div>
                                                                    <span className="font-semibold text-slate-700">{course.label}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Energy Group */}
                                                    <div>
                                                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">School of Energy</div>
                                                        <div className="flex flex-col gap-1">
                                                            {COURSES["energy"].map(course => (
                                                                <Link
                                                                    key={course.href}
                                                                    href={course.href}
                                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                                >
                                                                    <div className={`w-8 h-8 rounded-md ${course.bg} flex items-center justify-center ${course.color}`}>
                                                                        <course.icon size={16} />
                                                                    </div>
                                                                    <span className="font-semibold text-slate-700">{course.label}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* <div className="pt-2 border-t border-slate-100/50 mt-2">
                                                <Link
                                                    href="https://compass.thefoundrys.com"
                                                    target="_blank"
                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                >
                                                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                                                        <Network size={16} />
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold text-slate-700 block">Online Programs</span>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compass Portal</span>
                                                    </div>
                                                </Link>
                                            </div> */}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Programs Accordion (Mobile) */}
                                <div className="rounded-2xl bg-white/60 p-1 border border-white/50 shadow-sm">
                                    <button
                                        onClick={() => { setMobileProgramsExpanded(!mobileProgramsExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-white/50 transition-colors"
                                    >
                                        <span className="text-xl font-bold text-slate-900">Programs</span>
                                        <ChevronDown size={20} className={cn("text-slate-500 transition-transform", mobileProgramsExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileProgramsExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-2 pb-2 flex flex-col gap-4 pt-2">
                                                    {PROGRAM_CATEGORIES.map((category) => (
                                                        <div key={category.id}>
                                                            <div className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">{category.label}</div>
                                                            <div className="flex flex-col gap-1">
                                                                {PROGRAM_COURSES[category.id].map((prog) => (
                                                                    <Link
                                                                        key={prog.href}
                                                                        href={prog.href}
                                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                                    >
                                                                        <div className={`w-8 h-8 rounded-md ${prog.bg} flex items-center justify-center ${prog.color} shrink-0`}>
                                                                            <prog.icon size={16} />
                                                                        </div>
                                                                        <div>
                                                                            <span className="font-semibold text-slate-700 block text-sm">{prog.label}</span>
                                                                            <span className="text-[10px] text-slate-500 font-bold">{prog.desc}</span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* More Accordion */}
                                <div className="rounded-2xl bg-white/60 p-1 border border-white/50 shadow-sm">
                                    <button
                                        onClick={() => { setMobileMoreExpanded(!mobileMoreExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-white/50 transition-colors"
                                    >
                                        <span className="text-xl font-bold text-slate-900">More</span>
                                        <ChevronDown size={20} className={cn("text-slate-500 transition-transform", mobileMoreExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileMoreExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-2 pb-2 flex flex-col gap-2 pt-2">
                                                    <Link
                                                        href="/about"
                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                    >
                                                        <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                                                            <Users size={16} />
                                                        </div>
                                                        <span className="font-semibold text-slate-700">About Us</span>
                                                    </Link>
                                                    <Link
                                                        href="/campus"
                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                    >
                                                        <div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600">
                                                            <Building2 size={16} />
                                                        </div>
                                                        <span className="font-semibold text-slate-700">Campus</span>
                                                    </Link>

                                                    <Link
                                                        href="/contact"
                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                    >
                                                        <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-600">
                                                            <Users size={16} />
                                                        </div>
                                                        <span className="font-semibold text-slate-700">Contact Us</span>
                                                    </Link>

                                                    <Link
                                                        href="/blog"
                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100/50 transition-colors"
                                                    >
                                                        <div className="w-8 h-8 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                            <Library size={16} />
                                                        </div>
                                                        <span className="font-semibold text-slate-700">Resources</span>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>

                        {/* Sticky Mobile Footer CTA */}

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
