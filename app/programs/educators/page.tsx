"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, GraduationCap, Users, Lightbulb, PenTool, Radio, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function EducatorsPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-32 px-6 bg-slate-950 overflow-hidden min-h-[80vh] flex items-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 z-0" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"
                />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
                    >
                        <Sparkles size={14} className="text-blue-400" />
                        <span className="tracking-wide uppercase text-xs font-bold">Faculty Development Program</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
                    >
                        Elevating Educators. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Empowering Innovation.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light"
                    >
                        Empowering teachers to lead the deep tech revolution. Integrate <span className="text-white font-medium">AI, Cyber Security and Quantum</span> into your classroom today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href="/apply" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-bold text-slate-900 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 hover:ring-4 hover:ring-blue-500/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                            <span className="mr-2 text-lg">Start Upskilling</span>
                            <ArrowUpRight className="transition-transform group-hover:rotate-45" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition: Why Now? */}
            <section className="py-24 px-6 bg-white relative border-t border-slate-100">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">The Urgency</div>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                            The classroom is changing. <br />
                            <span className="italic text-slate-400 font-serif">Are you?</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full" />
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
                            Students are already using <span className="font-semibold text-slate-900">Generative AI</span> to write essays.
                            Deep tech is reshaping every industry they will enter.
                            We remove the fear of technology and replace it with <span className="font-semibold text-slate-900">mastery</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Target Audience with Glass Cards */}
            <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
                {/* Decorative Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <div className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Target Audience</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Tailored Tracks for Every Role</h2>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AudienceCard
                            icon={GraduationCap}
                            title="School Teachers"
                            desc="Integrate AI tools for personalized learning and efficiency. Make your classroom future-ready."
                            delay={0}
                        />
                        <AudienceCard
                            icon={Lightbulb}
                            title="College Faculty"
                            desc="Update curriculum with Quantum, Blockchain, and Applied AI. Bridge theory with industry practice."
                            delay={0.2}
                        />
                        <AudienceCard
                            icon={Users}
                            title="School Leaders"
                            desc="Lead digital transformation and foster a culture of innovation across your institution."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Methodology: Light Mode Premium */}
            <section className="py-32 px-6 bg-white text-slate-900 relative overflow-hidden border-y border-slate-100">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"
                />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <div>
                            <div className="text-purple-600 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                                <Zap size={14} /> Methodology
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Foundry Way</h2>
                        </div>
                        <p className="text-slate-500 max-w-md text-lg text-left md:text-right">
                            We don’t do boring lectures. We build, break, and create.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <MethodologyItem
                            icon={PenTool}
                            title="Hands-on Workshops"
                            desc="Build models, code bots, and design curriculums live."
                            index={0}
                        />
                        <MethodologyItem
                            icon={Radio}
                            title="Real-world Tools"
                            desc="Access industry-grade Generative AI and VR kits."
                            index={1}
                        />
                        <MethodologyItem
                            icon={Users}
                            title="Community Support"
                            desc="Lifetime access to a network of forward-thinking educators."
                            index={2}
                        />
                    </div>
                </div>
            </section>

            {/* Course Listing */}
            <section className="py-32 px-6 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <div className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-3">Catalog</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Available Programs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <CourseCard
                            sku="EDU 001"
                            title="AI for Educators: Foundation & Practice"
                            originalPrice="45,000"
                            discountedPrice="25,000"
                            desc="Understand Generative AI and how to use it to create lesson plans, grade assessments, and personalize learning."
                            delay={0}
                        />
                        <CourseCard
                            sku="EDU 002"
                            title="Integrating Deep Tech in Curriculum"
                            originalPrice="50,000"
                            discountedPrice="25,000"
                            desc="Learn how to weave concepts of Quantum and Blockchain into standard STEM subjects."
                            delay={0.2}
                        />
                        <CourseCard
                            sku="EDU 003"
                            title="Project-Based Learning & Maker Culture"
                            originalPrice="40,000"
                            discountedPrice="20,000"
                            desc="Master the art of facilitating hands-on, project-based learning environments that foster innovation."
                            delay={0.4}
                        />
                        <CourseCard
                            sku="EDU 004"
                            title="Digital Leadership for School Heads"
                            originalPrice="60,000"
                            discountedPrice="30,000"
                            desc="Strategic training for principals and HODs on managing digital transformation and tech-first pedagogy."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function AudienceCard({ icon: Icon, title, desc, delay }: { icon: React.ElementType, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl border border-slate-100 relative group overflow-hidden shadow-sm"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-in-out" />

            <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{desc}</p>
            </div>
        </motion.div>
    )
}

function MethodologyItem({ icon: Icon, title, desc, index }: { icon: React.ElementType, title: string, desc: string, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-8 rounded-3xl border border-slate-100 bg-slate-50 backdrop-blur-sm hover:bg-slate-100 transition-colors"
        >
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <Icon size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
            </div>
        </motion.div>
    )
}

function CourseCard({ sku, title, originalPrice, discountedPrice, desc, delay }: { sku: string, title: string, originalPrice: string, discountedPrice: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className="flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
        >
            <div className="p-8 flex-grow relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Target size={100} className="text-slate-900" />
                </div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">{sku}</span>
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Certification
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-light relative z-10">{desc}</p>

                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium relative z-10">
                    <div className="flex items-center gap-1.5"><Radio size={14} className="text-blue-500" /> Hybrid</div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <div className="flex items-center gap-1.5"><Sparkles size={14} className="text-amber-500" /> CPE Credits</div>
                </div>
            </div>

            <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-blue-50 transition-colors">
                <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Tuition Fee</div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm text-slate-400 line-through decoration-slate-400">₹{originalPrice}</span>
                        <span className="text-2xl font-black text-slate-900">₹{discountedPrice}</span>
                    </div>
                </div>
                <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
                >
                    Enroll <ArrowUpRight size={16} />
                </Link>
            </div>
        </motion.div>
    )
}
