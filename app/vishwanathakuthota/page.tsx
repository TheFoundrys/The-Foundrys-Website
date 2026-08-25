"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Zap, Target, Rocket, Briefcase, Globe, Github, BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function VishwanathAkuthotaProfile() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-white p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-xs font-bold uppercase tracking-wider font-mono">
                            <ArrowLeft size={14} /> Back to Team
                        </Link>

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                            {/* Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full lg:w-1/3 shrink-0"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden shadow-md bg-white border border-slate-200/80">
                                    <Image
                                        src="/images/vishwa-new.jpg"
                                        alt="Vishwanath Akuthota"
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Header Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex-1 space-y-6"
                            >
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono mb-4">
                                        Founder & CEO
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Vishwanath Akuthota
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        Building at the intersection of AI, Quantum, and Human Potential.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/vishwanathakuthota/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/vishwanathakuthota"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Github size={15} /> GitHub
                                    </a>
                                    <a
                                        href="https://ieeexplore.ieee.org/author/231984777844193"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F1F1EC] text-[#002f86] border border-slate-200/80 hover:bg-slate-200 text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <svg viewBox="0 0 110 136" fill="currentColor" className="w-3.5 h-3.5">
                                            <path d="M55.1 106.6L8.4 60.1 55.1 13.6l46.7 46.5-46.7 46.5zm0-76.4l-12.6 12.6h25.1L55.1 30.2zm0 59.8l-25.1-25.1 25.1 25.1 25.1-25.1-25.1 25.1zM55.1 50.1V39.6l-10.5 10.5h21L55.1 39.6v10.5zm0 21.1v-10.5l-10.5 10.5h21L55.1 60.7v10.5z" />
                                        </svg>
                                        IEEE Profile
                                    </a>
                                    <a
                                        href="https://www.researchgate.net/profile/Vishwanath-Akuthota"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F1F1EC] text-[#002f86] border border-slate-200/80 hover:bg-slate-200 text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                            <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
                                        </svg>
                                        ResearchGate
                                    </a>
                                </div>

                                {/* Focus Areas */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Target size={14} className="text-[#002f86]" /> Generative AI (GenAI)
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Rocket size={14} className="text-[#002f86]" /> LLM Development
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F1F1EC] border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                        <Zap size={14} className="text-[#002f86]" /> Deep Tech Architecture
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 pb-5 sm:pb-6 md:pb-6 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Professional Summary
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 font-sans">
                            Vishwanath Akuthota is a distinguished deep-tech entrepreneur and AI architect specializing in Artificial Intelligence, Machine Learning, and Generative AI. He has been at the forefront of building world-class AI products and Large Language Model (LLM) applications.
                        </p>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            His work is characterized by a mission to develop responsible and trustworthy AI systems that align with ethical principles and industry standards. He currently serves as the Founder & CEO of The Foundry’s, where he leads the mission to bridge the gap between emerging technology and human potential.
                        </p>
                    </div>
                </section>

                {/* Research & Publications Section */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-8 flex items-center gap-3">
                            <BookOpen className="text-[#002f86]" size={28} /> IEEE Publications & Peer-Reviewed Research
                        </h2>

                        <div className="space-y-10">
                            {/* Cybersecurity Section */}
                            <div>
                                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                                    <h3 className="text-xs font-mono uppercase font-bold tracking-widest text-[#002f86]">
                                        Cybersecurity & Trustworthy AI
                                    </h3>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        {
                                            title: "MentalLLM: A Transformer-Based Large Language Model Framework for Depression Detection",
                                            venue: "2025 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE)",
                                            year: "2026",
                                            link: "https://ieeexplore.ieee.org/document/11525902/"
                                        },
                                        {
                                            title: "Microplastics Detection Using Deep Learning Ensemble with Vision Language Models",
                                            venue: " 2025 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE)",
                                            year: "2026",
                                            link: "https://ieeexplore.ieee.org/document/11525939"
                                        },
                                        {
                                            title: "Vulnerability Detection and Monitoring Using LLM",
                                            venue: "2023 14th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
                                            year: "2023",
                                            link: "https://ieeexplore.ieee.org/document/10456393"
                                        },
                                        {
                                            title: "Multi-Agent Phishing Detection And Deletion via Small VLM and LLM Reasoning",
                                            venue: " 2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
                                            year: "2026",
                                            link: "https://ieeexplore.ieee.org/document/11429303"
                                        },
                                        {
                                            title: "Quantum-Enhanced Tax Revenue via A-Challan: ML, LLMs, and QML Approaches",
                                            venue: " 2025 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11526131"
                                        }
                                    ].map((pub, idx) => (
                                        <div key={idx} className="bg-[#EAEAE5] p-5 border border-slate-200/80 shadow-xs hover:border-[#002f86] transition-colors">
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{pub.title}</h4>
                                            <p className="text-xs text-slate-500 mb-3 font-sans">{pub.venue}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-[#002f86] bg-white px-2 py-0.5 font-mono">{pub.year}</span>
                                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-[#002f86] text-xs font-bold flex items-center gap-1 hover:underline">
                                                    View Publication <Globe size={13} />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Architectures Section */}
                            <div>
                                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                                    <h3 className="text-xs font-mono uppercase font-bold tracking-widest text-[#002f86]">
                                        AI Architectures & Applications
                                    </h3>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        {
                                            title: "A Multi-Agent Quantum Chain of Thought Reasoning and Accuracy Accelerators Framework",
                                            venue: " 2025 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11525967"
                                        },
                                        {
                                            title: "A Multi-Agent Garage Service Search and Recommendation with Hybrid MLs and LLMs",
                                            venue: " 2025 IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/10940937"
                                        },
                                        {
                                            title: "Agentic AI Framework for Automated Vulnerability Detection",
                                            venue: " 2025 2nd International Conference on Intelligent Algorithms for Computational Intelligence Systems (IACIS)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11211048"
                                        },
                                        {
                                            title: "Accurate Precision Machine Inspection and Monitoring using Small VLMs and LLMs",
                                            venue: "2025 International Conference on Computing Technologies (ICOCT)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11118670"
                                        },
                                        {
                                            title: "RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection Using SLMs",
                                            venue: " 2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
                                            year: "2026",
                                            link: "https://ieeexplore.ieee.org/document/11429262"
                                        }
                                    ].map((pub, idx) => (
                                        <div key={idx} className="bg-[#EAEAE5] p-5 border border-slate-200/80 shadow-xs hover:border-[#002f86] transition-colors">
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{pub.title}</h4>
                                            <p className="text-xs text-slate-500 mb-3 font-sans">{pub.venue}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-[#002f86] bg-white px-2 py-0.5 font-mono">{pub.year}</span>
                                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-[#002f86] text-xs font-bold flex items-center gap-1 hover:underline">
                                                    View Publication <Globe size={13} />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Healthcare Section */}
                            <div>
                                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                                    <h3 className="text-xs font-mono uppercase font-bold tracking-widest text-[#002f86]">
                                        Healthcare & Specialized Vision
                                    </h3>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        {
                                            title: "Multi-Vision LVMs Model Ensemble for Gold Jewelry Authenticity Verification",
                                            venue: "2025 International Conference on Computing Technologies (ICOCT)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11118918"
                                        },
                                        {
                                            title: "Comparative Analysis of Diverse Architectures for Accurate Blood Cancer Cell Classification",
                                            venue: "2024 6th International Conference on Inventive Research in Computing Applications (ICIRCA)",
                                            year: "2024",
                                            link: "https://ieeexplore.ieee.org/document/10497341"
                                        },
                                        {
                                            title: "Pose Detection: Integrating Machine Learning with Large Vision Models",
                                            venue: " 2025 2nd International Conference on Intelligent Algorithms for Computational Intelligence Systems (IACIS)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11211028"
                                        },
                                        {
                                            title: "Financial Voucher Analysis with LVMs and Financial LLMs",
                                            venue: "2025 International Conference on Computing Technologies (ICOCT)",
                                            year: "2025",
                                            link: "https://ieeexplore.ieee.org/document/11118347"
                                        }
                                    ].map((pub, idx) => (
                                        <div key={idx} className="bg-[#EAEAE5] p-5 border border-slate-200/80 shadow-xs hover:border-[#002f86] transition-colors">
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{pub.title}</h4>
                                            <p className="text-xs text-slate-500 mb-3 font-sans">{pub.venue}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-[#002f86] bg-white px-2 py-0.5 font-mono">{pub.year}</span>
                                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-[#002f86] text-xs font-bold flex items-center gap-1 hover:underline">
                                                    View Publication <Globe size={13} />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Authored Books Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-8 flex items-center gap-3">
                            <Briefcase className="text-[#002f86]" size={28} /> Authored Books
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a
                                href="https://www.amazon.in/Shadows-Deception-Unveiling-Cyber-Realms-ebook/dp/B0CJ9M698Y"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#F7F7F4] p-6 hover:bg-slate-100 transition-all border border-slate-200/80 hover:border-[#002f86] group block cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-base md:text-lg font-bold text-[#002f86] group-hover:text-[#002266] transition-colors">The Shadows Of Deception</h3>
                                    <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#002f86] transition-colors" />
                                </div>
                                <p className="text-slate-600 text-xs mb-4">Unveiling Cyber Realms</p>
                                <div className="text-[#002f86] text-[10px] font-bold uppercase tracking-widest font-mono">Cybersecurity</div>
                            </a>
                            <a
                                href="https://www.amazon.in/Fabric-Law-Understanding-Jurisprudence-Principles-ebook/dp/B0D1JQ76YG"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#F7F7F4] p-6 hover:bg-slate-100 transition-all border border-slate-200/80 hover:border-[#002f86] group block cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-base md:text-lg font-bold text-[#002f86] group-hover:text-[#002266] transition-colors">The Fabric of Law</h3>
                                    <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#002f86] transition-colors" />
                                </div>
                                <p className="text-slate-600 text-xs mb-4">Understanding Jurisprudence and Legal Principles</p>
                                <div className="text-[#002f86] text-[10px] font-bold uppercase tracking-widest font-mono">Law & Ethics</div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Professional Philosophy Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4]">
                    <div className="max-w-4xl">
                        <h2 className="font-serif text-2xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                            <Zap className="text-[#002f86]" size={24} /> Professional Philosophy
                        </h2>
                        <p className="font-serif italic text-base md:text-xl text-slate-700 leading-relaxed">
                            &quot;Creating valuable products requires an engineering mindset combined with the precision of a mathematician. Our mission is to build responsible, ethical, and trustworthy AI that empowers humanity.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
