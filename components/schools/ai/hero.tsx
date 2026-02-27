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

            <div className="relative z-10 container mx-auto max-w-6xl flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl"
                >
                    Graduate with <br />
                    Mastery, Vision & <br />
                    Real-World Impact.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-10"
                >
                    Not just code. A 3 year degree program merging AI Engineering with Entrepreneurship.
                    Built by Engineers & Founders, for future Architects.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
                    >
                       Contact Now     
                    </Link>
                </motion.div>
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
