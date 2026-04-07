"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AIHero() {
    return (
        <section id="hero" className="relative pt-32 pb-48 px-4 flex flex-col justify-center items-center bg-slate-900 overflow-hidden text-center min-h-[90vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/program-bg/ai-hero.png"
                    alt="AI Neural Network Background"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1900px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center h-full sm:mt-20">
                <div className="max-w-5xl flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1] uppercase drop-shadow-lg"
                    >
                        Graduate with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant pb-2 inline-block pr-6">Mastery, Vision</span> <br />
                        <span className="text-slate-300">&amp; Real-World Impact.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-medium tracking-wide drop-shadow-md"
                    >
                        Not just code. A 3 year degree program merging AI Engineering with Entrepreneurship.
                        Built by Engineers & Founders, for future Architects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl ring-2 ring-white/50 text-center flex items-center justify-center gap-2 group"
                        >
                            Contact Now <span className="text-slate-600 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Info Bar (Sustainability Inspired) */}
            {/* <div className="absolute bottom-0 inset-x-0 z-20 px-4 translate-y-1/2">
                <div className="mx-auto max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                                <p className="text-lg font-bold text-slate-900">3 Years</p>
                            </div>
                            <div className="border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Level</p>
                                <p className="text-lg font-bold text-slate-900">Bachelor&apos;s</p>
                            </div>
                            <div className="lg:pr-4">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                                <p className="text-lg font-bold text-slate-900">On-Campus</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <Link href="/apply" className="block w-full text-center px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}
