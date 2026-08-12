"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { triggerHaptic } from "@/lib/haptics";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, BrainCircuit, ShieldCheck, Atom, Rocket, Lightbulb, Building2, Users, Library, Menu, Zap, Leaf, Network, BookOpen, Briefcase, GraduationCap, Calendar, Newspaper, ArrowRight, LineChart, MessageSquare } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close state
    const [hoveredMenu, setHoveredMenu] = useState<"academics" | "research" | "experiences" | "discover" | null>(null);
    const [isScrolled, setIsScrolled] = useState(false); // Scroll state for sticky header transitions

    const [mobileAcademicsExpanded, setMobileAcademicsExpanded] = useState(true);
    const [mobileResearchExpanded, setMobileResearchExpanded] = useState(false);
    const [mobileExperiencesExpanded, setMobileExperiencesExpanded] = useState(false);
    const [mobileDiscoverExpanded, setMobileDiscoverExpanded] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                setIsScrolled(window.scrollY > 20);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const COURSES = {
        "deep-tech": [
            {
                href: "/schools/ai",
                label: "Artificial Intelligence",
                desc: "The Intelligence Layer",
                icon: BrainCircuit,
            },
            {
                href: "/schools/datascience",
                label: "Data Science",
                desc: "The Insight Layer",
                icon: LineChart,
            },
            {
                href: "/schools/cyber",
                label: "Cyber Security",
                desc: "The Defense Layer",
                icon: ShieldCheck,
            },
            {
                href: "/schools/quantum-computing",
                label: "Quantum Computing",
                desc: "The Q-Layer",
                icon: Atom,
            },
            {
                href: "/schools/blockchain",
                label: "Blockchain Development",
                desc: "The Trust Layer",
                icon: Network,
            },
        ],
        "specialized": [
            {
                href: "/programs/fellow-executive",
                label: "Certified Innovator",
                desc: "Systems Thinkers",
                icon: Lightbulb,
            },
            {
                href: "/venture-building",
                label: "Venture Building",
                desc: "Venture Creation",
                icon: Rocket,
            },
        ],
        "sustainability": [
            {
                href: "/schools/esg",
                label: "ESG & Governance",
                desc: "Strategic Responsibility",
                icon: Leaf,
            },
            {
                href: "/programs/sustainability-in-the-age-of-ai",
                label: "AI & Sustainability",
                desc: "Engineering Responsibility",
                icon: Leaf,
            },
        ],
        "energy": [
            {
                href: "/schools/renewable-energy",
                label: "Renewable Energy",
                desc: "Powering the Future",
                icon: Zap,
            },
        ],
        "programs": [
            {
                href: "/programs/entry-level",
                label: "Entry Level Track",
                desc: "Start Your Journey",
                icon: BookOpen,
            },
            {
                href: "/programs/professional",
                label: "Mid Level Track",
                desc: "Advance Your Career",
                icon: Briefcase,
            },
            {
                href: "/programs/fellow-executive",
                label: "Fellow Executive Program",
                desc: "Strategic Vision",
                icon: Briefcase,
            },
            {
                href: "/programs/educators",
                label: "Educators & Faculty",
                desc: "Modern Pedagogy",
                icon: GraduationCap,
            },
        ]
    };

    const RESEARCH_CENTRES = [
        {
            label: "Centre for Applied Artificial Intelligence (CAAI)",
            desc: "Fostering breakthroughs in generative models, agentic workflows, and neural architectures.",
            icon: BrainCircuit,
            href: "#"
        },
        {
            label: "Centre for Cybersecurity & Defense (CCD)",
            desc: "Researching secure network design, active cryptography, and intelligence protection models.",
            icon: ShieldCheck,
            href: "#"
        },
        {
            label: "Quantum Computing Research Initiative (QCRI)",
            desc: "Exploring quantum entanglement simulation, algorithmic speedups, and industrial optimization.",
            icon: Atom,
            href: "#"
        },
        {
            label: "Distributed Ledger & Blockchain Lab (DLBL)",
            desc: "Advancing decentralization protocols, trust infrastructure, and smart contract optimization.",
            icon: Network,
            href: "#"
        },
        {
            label: "Venture Building & Incubation Institute (VBII)",
            desc: "Translating cutting-edge deep tech research into scalable commercial startup frameworks.",
            icon: Rocket,
            href: "#"
        },
        {
            label: "Sustainability & Green Tech Policy Centre (SGPC)",
            desc: "Designing eco-efficiency metrics, ESG systems, and carbon accounting architectures.",
            icon: Leaf,
            href: "#"
        },
        {
            label: "Centre of Excellence (CoE)",
            desc: "Establish high-performance computing labs, applied curriculum, and research environments.",
            icon: Building2,
            href: "#"
        }
    ];

    const EXPERIENCES = [
        {
            title: "Campus & Culture",
            links: [
                { label: "Hyderabad Campus", href: "/campus", desc: "Heart of Hitech City" },
                // { label: "Corporate Integration", href: "/campus", desc: "Corporate workspace exposure" },
                // { label: "Venture Ecosystem", href: "/schools/venture-building", desc: "Direct access to seed capital" }
            ]
        },
        {
            title: "Transformations",
            links: [
                { label: "Alumni Stories", href: "/testimonials", desc: "Real transformation narratives" },
                { label: "Project Showcases", href: "/blog", desc: "Live products built by students" },
                { label: "Venture Portfolio", href: "/schools/venture-building", desc: "Startups launched at The Foundry" }
            ]
        },
        {
            title: "Student Life & Events",
            links: [
                { label: "Upcoming Events", href: "/events", desc: "Webinars and conferences" },
                // { label: "Hackathons", href: "/events", desc: "Sprint builds and code sprints" },
                // { label: "Clubs & Guilds", href: "/about", desc: "Collaborative builder groups" }
            ]
        }
    ];

    const DISCOVER = [
        {
            title: "About The Foundry",
            links: [
                { label: "Mission & Vision", href: "/about" },
                { label: "About the Team", href: "/about/team" },
                // { label: "Leadership & Faculty", href: "/about" }
            ]
        },
        {
            title: "Thought Leadership",
            links: [
                { label: "Resources & Blog", href: "/blog" },
                { label: "Press Room / News", href: "/news" },
                { label: "Deep Tech FAQ", href: "/faq" }
            ]
        },
        {
            title: "Connect",
            links: [
                { label: "Contact Us", href: "/contact" },
                // { label: "Office Directory", href: "/contact" },
                // { label: "Venture Fund Support", href: "/schools/venture-building" }
            ]
        }
    ];

    const handleHaptic = () => {
        triggerHaptic();
    };

    // White page background: 
    // Transparent state is ON TOP of Black Hero (needs white text).
    // Scrolled/Active state is ON TOP of White page / drops white megamenu (needs black text).
    const isHeaderActive = isScrolled || hoveredMenu !== null || isOpen;

    return (
        <>
            {/* Full Page Blur Backdrop */}
            <AnimatePresence>
                {hoveredMenu !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 pointer-events-none hidden md:block"
                    />
                )}
            </AnimatePresence>

            {/* Static Pinned Two-Tier Header Wrapper */}
            <header
                onMouseEnter={() => { }}
                onMouseLeave={() => setHoveredMenu(null)}
                className="fixed top-0 left-0 right-0 w-full z-50 text-black border-b shadow-sm transition-all duration-300" style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E8E3" }}
            >

                {/* Tier 2: Main Navigation Bar */}
                <div className="max-w-[1900px] mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between h-20">

                    {/* Left Brand Wordmark */}
                    <Link
                        href="/"
                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                        className="flex items-center gap-3 group"
                    >
                        <img 
                            src="/logo.jpg" 
                            alt="The Foundry Logo" 
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain rounded-full border border-neutral-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className={`${instrumentSerif.className} text-3xl sm:text-4xl font-normal tracking-wide text-black`}>The Foundry&apos;s</span>
                    </Link>

                    {/* Central Navigation Headings */}
                    <nav className="hidden md:flex items-center gap-10 h-full select-none">
                        <div
                            onMouseEnter={() => setHoveredMenu("academics")}
                            className="flex items-center gap-1 cursor-default py-8 text-xs font-bold uppercase tracking-widest relative"
                        >
                            <span className={cn("transition-colors hover:text-black", hoveredMenu === "academics" ? "text-black" : "opacity-85")}>Programs</span>
                            <ChevronDown size={12} className={cn("transition-transform duration-350 opacity-60", hoveredMenu === "academics" ? "rotate-180 opacity-100" : "")} />
                        </div>

                        <div
                            onMouseEnter={() => setHoveredMenu("research")}
                            className="flex items-center gap-1 cursor-default py-8 text-xs font-bold uppercase tracking-widest relative"
                        >
                            <span className={cn("transition-colors hover:text-black", hoveredMenu === "research" ? "text-black" : "opacity-85")}>Research & Centre Of Excellence</span>
                            <ChevronDown size={12} className={cn("transition-transform duration-350 opacity-60", hoveredMenu === "research" ? "rotate-180 opacity-100" : "")} />
                        </div>

                        <div
                            onMouseEnter={() => setHoveredMenu("experiences")}
                            className="flex items-center gap-1 cursor-default py-8 text-xs font-bold uppercase tracking-widest relative"
                        >
                            <span className={cn("transition-colors hover:text-black", hoveredMenu === "experiences" ? "text-black" : "opacity-85")}>Alumni</span>
                            <ChevronDown size={12} className={cn("transition-transform duration-350 opacity-60", hoveredMenu === "experiences" ? "rotate-180 opacity-100" : "")} />
                        </div>

                        <div
                            onMouseEnter={() => setHoveredMenu("discover")}
                            className="flex items-center gap-1 cursor-default py-8 text-xs font-bold uppercase tracking-widest relative"
                        >
                            <span className={cn("transition-colors hover:text-black", hoveredMenu === "discover" ? "text-black" : "opacity-85")}>About Us</span>
                            <ChevronDown size={12} className={cn("transition-transform duration-350 opacity-60", hoveredMenu === "discover" ? "rotate-180 opacity-100" : "")} />
                        </div>
                    </nav>

                    {/* Right CTA Area */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="https://compass.thefoundrys.com/login"
                            onClick={handleHaptic}
                            className="px-6 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm bg-black text-white hover:bg-neutral-800"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => { setIsOpen(!isOpen); handleHaptic(); }}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-current active:scale-95 transition-all text-current"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Desktop Full-Page Expandable Menu Panel */}
                <div className="relative w-full">
                    <AnimatePresence>
                        {hoveredMenu && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute top-0 left-0 right-0 w-full overflow-hidden hidden md:block" style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E8E8E3" }}
                            >
                                <div className="max-w-[1900px] mx-auto px-16 py-16 text-black select-none">

                                    {/* 1. Academics Dropdown Panel */}
                                    {hoveredMenu === "academics" && (
                                        <div className="grid grid-cols-4 gap-12">
                                            {/* Column 1: School of Deep Tech */}
                                            <div className="flex flex-col gap-6">
                                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2">
                                                    School of DeepTech
                                                </h3>
                                                <div className="flex flex-col gap-4">
                                                    {COURSES["deep-tech"].map((course) => (
                                                        <Link
                                                            key={course.href}
                                                            href={course.href}
                                                            onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                            className="group flex items-start gap-3 hover:opacity-75 transition-opacity"
                                                        >
                                                            <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                <course.icon size={15} />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-black">{course.label}</div>
                                                                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mt-0.5">{course.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                             {/* Column 2: Entrepreneurship & Energy */}
                                             <div className="flex flex-col gap-8">
                                                 {/* Section A: School of Entrepreneurship and Innovation */}
                                                 <div className="flex flex-col gap-6">
                                                     <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-neutral-100 pb-2">
                                                         School Of Entrepreneurship And Innovation
                                                     </h3>
                                                     <div className="flex flex-col gap-4">
                                                         {COURSES["specialized"].map((course) => (
                                                             <Link
                                                                 key={course.label}
                                                                 href={course.href}
                                                                 onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                                 className="group flex items-start gap-3 hover:opacity-75 transition-opacity"
                                                             >
                                                                 <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                     <course.icon size={15} />
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-bold text-black">{course.label}</div>
                                                                     <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mt-0.5">{course.desc}</div>
                                                                 </div>
                                                             </Link>
                                                         ))}
                                                     </div>
                                                 </div>

                                                 {/* Section B: School of Energy */}
                                                 <div className="flex flex-col gap-6">
                                                     <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-neutral-100 pb-2">
                                                         School Of Energy
                                                     </h3>
                                                     <div className="flex flex-col gap-4">
                                                         {COURSES["energy"].map((course) => (
                                                             <Link
                                                                 key={course.label}
                                                                 href={course.href}
                                                                 onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                                 className="group flex items-start gap-3 hover:opacity-75 transition-opacity"
                                                             >
                                                                 <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                     <course.icon size={15} />
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-bold text-black">{course.label}</div>
                                                                     <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mt-0.5">{course.desc}</div>
                                                                 </div>
                                                             </Link>
                                                         ))}
                                                     </div>
                                                 </div>
                                             </div>

                                             {/* Column 3: School Of Sustainability */}
                                             <div className="flex flex-col gap-6">
                                                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-neutral-100 pb-2">
                                                     School Of Sustainability
                                                 </h3>
                                                 <div className="flex flex-col gap-4">
                                                     {COURSES["sustainability"].map((course) => (
                                                         <Link
                                                             key={course.label}
                                                             href={course.href}
                                                             onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                             className="group flex items-start gap-3 hover:opacity-75 transition-opacity"
                                                         >
                                                             <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                 <course.icon size={15} />
                                                             </div>
                                                             <div>
                                                                 <div className="text-sm font-bold text-black">{course.label}</div>
                                                                 <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mt-0.5">{course.desc}</div>
                                                             </div>
                                                         </Link>
                                                     ))}
                                                 </div>
                                             </div>

                                            {/* Column 4: Programs & Admissions */}
                                            <div className="flex flex-col gap-6">
                                                <div>
                                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-neutral-100 pb-2 mb-3">
                                                        Programs
                                                    </h3>
                                                    <div className="flex flex-col gap-4">
                                                        <Link
                                                            href="/programs"
                                                            onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                            className="group flex items-start gap-3 hover:opacity-75 transition-opacity"
                                                        >
                                                            <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                <BookOpen size={15} />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-black">Programs</div>
                                                                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mt-0.5">Explore All Tracks</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2 mb-3">
                                                        Admissions
                                                    </h3>
                                                    <div className="p-5 rounded-2xl text-black flex flex-col gap-3 relative overflow-hidden group h-full" style={{ backgroundColor: "#F7F7F4", border: "1px solid #E8E8E3" }}>
                                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                                            <div>
                                                                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">Admissions Open</span>
                                                                <span className="text-base font-black block mb-1.5 leading-tight text-black">Autumn Cohort 2026</span>
                                                                <span className="text-xs text-neutral-600 block leading-relaxed">India's first Venture School. Transform into an AI, Cyber or Energy architect. Build systems that matter.</span>
                                                            </div>
                                                            <Link
                                                                href="/apply"
                                                                onClick={() => setHoveredMenu(null)}
                                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-black border-b border-black pb-0.5 w-fit hover:gap-2.5 transition-all mt-4"
                                                            >
                                                                Apply Online <ArrowRight size={12} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 2. Research Dropdown Panel */}
                                    {hoveredMenu === "research" && (
                                        <div className="grid grid-cols-3 gap-12">
                                            {/* Left half: list of Research Institutes */}
                                            <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6">
                                                {RESEARCH_CENTRES.map((centre, i) => (
                                                    <Link
                                                        key={i}
                                                        href={centre.href}
                                                        onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                                                            <centre.icon size={18} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-black leading-snug">{centre.label}</div>
                                                            <div className="text-xs text-neutral-500 mt-1 leading-relaxed">{centre.desc}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Right half: Academic Vision */}
                                            <div className="flex flex-col gap-6 justify-between border-l border-neutral-100 pl-12">
                                                <div>
                                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">Academic Research Vision</h3>
                                                    <p className="text-sm text-neutral-600 leading-relaxed italic">
                                                        "We believe that locally relevant, globally respected academic research plays a vital role in creating a vibrant deep tech ecosystem."
                                                    </p>
                                                </div>
                                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                                                    <span className="text-[10px] font-bold text-black uppercase tracking-wider block mb-1">Deep Tech Publications</span>
                                                    <span className="text-xs text-neutral-500 block mb-3">Read research contributions in AI, Cryptography & Quantum Computing.</span>
                                                    <Link href="/blog?category=research" onClick={() => setHoveredMenu(null)} className="text-xs font-bold text-black border-b border-black pb-0.5 inline-flex items-center gap-1">
                                                        Browse Research <ArrowRight size={10} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 3. Experiences Dropdown Panel */}
                                    {hoveredMenu === "experiences" && (
                                        <div className="grid grid-cols-3 gap-12">
                                            {EXPERIENCES.map((group, i) => (
                                                <div key={i} className="flex flex-col gap-6">
                                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2">
                                                        {group.title}
                                                    </h3>
                                                    <div className="flex flex-col gap-4">
                                                        {group.links.map((link, j) => (
                                                            <Link
                                                                key={j}
                                                                href={link.href}
                                                                onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                                className="group flex flex-col hover:opacity-75 transition-opacity"
                                                            >
                                                                <span className="text-sm font-bold text-black">{link.label}</span>
                                                                <span className="text-[10px] text-neutral-500 mt-0.5">{link.desc}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* 4. Discover Dropdown Panel */}
                                    {hoveredMenu === "discover" && (
                                        <div className="grid grid-cols-3 gap-12">
                                            {DISCOVER.map((group, i) => (
                                                <div key={i} className="flex flex-col gap-6">
                                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-2">
                                                        {group.title}
                                                    </h3>
                                                    <div className="flex flex-col gap-3">
                                                        {group.links.map((link, j) => (
                                                            <Link
                                                                key={j}
                                                                href={link.href}
                                                                onClick={() => { setHoveredMenu(null); handleHaptic(); }}
                                                                className="text-sm font-semibold text-neutral-700 hover:text-black transition-colors"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 text-black flex flex-col md:hidden overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}
                    >
                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto px-6 pt-28 pb-24 touch-pan-y">
                            <div className="flex flex-col gap-6">

                                {/* Academics Accordion */}
                                <div className="rounded-2xl bg-neutral-50 p-1 border border-neutral-200 shadow-sm">
                                    <button
                                        onClick={() => { setMobileAcademicsExpanded(!mobileAcademicsExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black">Academics</span>
                                        <ChevronDown size={18} className={cn("text-neutral-500 transition-transform", mobileAcademicsExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileAcademicsExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-2 pb-3 flex flex-col gap-5 pt-2">
                                                    {/* Deep Tech Group */}
                                                    <div>
                                                        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">School of Deep Tech</div>
                                                        <div className="flex flex-col gap-1 mt-1">
                                                            {COURSES["deep-tech"].map(course => (
                                                                <Link
                                                                    key={course.href}
                                                                    href={course.href}
                                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                                                                >
                                                                    <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                        <course.icon size={15} />
                                                                    </div>
                                                                    <span className="text-sm font-semibold text-neutral-800">{course.label}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Specialized Schools */}
                                                    <div>
                                                        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">Specialized Schools</div>
                                                         <div className="flex flex-col gap-1 mt-1">
                                                             {[...COURSES["specialized"], ...COURSES["sustainability"], ...COURSES["energy"]].map(course => (
                                                                 <Link
                                                                    key={course.label}
                                                                    href={course.href}
                                                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                                                                >
                                                                    <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                        <course.icon size={15} />
                                                                    </div>
                                                                    <span className="text-sm font-semibold text-neutral-800">{course.label}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Programs */}
                                                    <div>
                                                        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">Programs</div>
                                                        <div className="flex flex-col gap-1 mt-1">
                                                            <Link
                                                                href="/programs"
                                                                onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                                                            >
                                                                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                    <BookOpen size={15} />
                                                                </div>
                                                                <span className="text-sm font-semibold text-neutral-800">Programs</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Research Centres Accordion */}
                                <div className="rounded-2xl bg-neutral-50 p-1 border border-neutral-200 shadow-sm">
                                    <button
                                        onClick={() => { setMobileResearchExpanded(!mobileResearchExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-neutral-100 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black">Research & Centre Of Excellence</span>
                                        <ChevronDown size={18} className={cn("text-neutral-500 transition-transform", mobileResearchExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileResearchExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-3 pb-3 flex flex-col gap-1 pt-2">
                                                    {RESEARCH_CENTRES.map((centre, i) => (
                                                        <Link
                                                            key={i}
                                                            href={centre.href}
                                                            onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                                                        >
                                                            <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-black shrink-0">
                                                                <centre.icon size={15} />
                                                            </div>
                                                            <span className="text-sm font-semibold text-neutral-800 leading-snug">{centre.label}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Experiences Accordion */}
                                <div className="rounded-2xl bg-neutral-50 p-1 border border-neutral-200 shadow-sm">
                                    <button
                                        onClick={() => { setMobileExperiencesExpanded(!mobileExperiencesExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-neutral-100 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black">Experiences</span>
                                        <ChevronDown size={18} className={cn("text-neutral-500 transition-transform", mobileExperiencesExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileExperiencesExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-3 pb-3 flex flex-col gap-4 pt-2">
                                                    {EXPERIENCES.map((group, i) => (
                                                        <div key={i}>
                                                            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">{group.title}</div>
                                                            <div className="flex flex-col gap-1">
                                                                {group.links.map((link, j) => (
                                                                    <Link
                                                                        key={j}
                                                                        href={link.href}
                                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                        className="text-sm font-semibold text-neutral-700 py-1"
                                                                    >
                                                                        {link.label}
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

                                {/* Discover Accordion */}
                                <div className="rounded-2xl bg-neutral-50 p-1 border border-neutral-200 shadow-sm">
                                    <button
                                        onClick={() => { setMobileDiscoverExpanded(!mobileDiscoverExpanded); handleHaptic(); }}
                                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-neutral-100 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black">Discover</span>
                                        <ChevronDown size={18} className={cn("text-neutral-500 transition-transform", mobileDiscoverExpanded ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileDiscoverExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-3 pb-3 flex flex-col gap-4 pt-2">
                                                    {DISCOVER.map((group, i) => (
                                                        <div key={i}>
                                                            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">{group.title}</div>
                                                            <div className="flex flex-col gap-1">
                                                                {group.links.map((link, j) => (
                                                                    <Link
                                                                        key={j}
                                                                        href={link.href}
                                                                        onClick={() => { setIsOpen(false); handleHaptic(); }}
                                                                        className="text-sm font-semibold text-neutral-700 py-1"
                                                                    >
                                                                        {link.label}
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

                                {/* Mobile CTA */}
                                <Link
                                    href="https://compass.thefoundrys.com/login"
                                    onClick={() => { setIsOpen(false); handleHaptic(); }}
                                    className="flex items-center justify-center w-full p-4 rounded-2xl bg-black text-white font-bold text-center shadow-lg active:scale-95 transition-all mt-4"
                                >
                                    Sign In to Compass Portal
                                </Link>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
