"use client";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target, ArrowRight } from "lucide-react";


export function EntrepreneurshipHighlight() {
    return (
        <section className="py-24 px-4 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <Lightbulb size={14} /> Optional Year 4
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            From Engineer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">To Founder.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            The world doesn&apos;t just need more code; it needs more solutions.
                            Our optional <strong>4th Year Entrepreneurship Track</strong> is designed for students who want to build their own AI ventures.
                        </p>

                        <div className="space-y-6 mb-10">
                            <FeatureRow
                                icon={Rocket}
                                title="Incubation & Launch"
                                desc="Don&apos;t just build a project. Build a company. Get access to legal, finance, and GTM support."
                            />
                            <FeatureRow
                                icon={Target}
                                title="Venture Capital Access"
                                desc="Pitch your MVP to a panel of real investors and VCs at the end of the year."
                            />
                        </div>

                        <button
                            onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors group"
                        >
                            View Entrepreneurship Curriculum <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right: Visual */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full -mr-10 -mt-10 opacity-50" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">The Founder&apos;s Track</h3>
                                <p className="text-slate-500 text-sm mb-8">Year 4 (Optional)</p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">Y1-3</div>
                                        <div>
                                            <div className="font-bold text-slate-900">AI Engineering</div>
                                            <div className="text-xs text-slate-500">Master the Tech</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="w-0.5 h-8 bg-slate-200" />
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100 ring-2 ring-amber-500/20">
                                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">Y4</div>
                                        <div>
                                            <div className="font-bold text-slate-900">Entrepreneurship</div>
                                            <div className="text-xs text-slate-500">Build the Business</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FeatureRow({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
