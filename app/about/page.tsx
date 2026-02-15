"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-slate-900 text-white">
                {/* Background Gradients removed as requested */}

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            Our Origin Story
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                            We didn&apos;t just want to build a school. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">We wanted to build a Foundry.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            The world needs Architects, not just graduates. We exist to close the gap between academic theory and the raw, rapid velocity of the deep tech industry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center space-y-20 md:space-y-24">
                        <div className="space-y-4 md:space-y-6">
                            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">The Vision</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Forge the Future.</h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                                To create a generation of sovereign innovators who don&apos;t just participate in the economy, but architect its new foundations in Deep Tech, Entrepreneurship, Sustainability and Energy.
                            </p>
                        </div>

                        <div className="h-px w-24 bg-slate-300 mx-auto" />

                        <div className="space-y-4 md:space-y-6">
                            <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">The Mission</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Bridging the Void.</h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                                To replace rote memorization with rigorous creation. We provide the mentorship, capital network, and deep technical capabilities typically found only in elite R&D labs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10 px-6">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                        {/* Visual / Image */}
                        <div className="flex-1 w-full relative">
                            <div className="relative aspect-square w-full max-w-sm md:max-w-md mx-auto rounded-full overflow-hidden border-4 border-slate-700 bg-slate-800 shadow-2xl">
                                <Image
                                    src="/images/vishwa.png"
                                    alt="Vishwanath Akuthota"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-[1.5] space-y-6 md:space-y-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold mb-2">Vishwanath Akuthota</h2>
                                <p className="text-lg md:text-xl text-blue-400 font-medium">Founder & CEO, Dr.Pinnacle & The Foundry&apos;s</p>
                            </div>

                            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    &quot;Leadership is not just about building technology it is about building trust, resilience, and possibility.&quot;
                                </p>
                                <p>
                                    With over 15 years at the intersection of Artificial Intelligence, Cybersecurity, Quantum Computing, Blockchain and Enterprise Transformation, Vishwanath has witnessed firsthand how bold ideas can reshape industries.
                                </p>
                                <p>
                                    His journey from designing AI solutions that helped Fortune 500 companies scale, to creating platforms that reduce complexity has culminated in the creation of <span className="text-white font-bold">The Foundry&apos;s</span>. A place where the next generation of architects is forged.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4 pt-4 w-full">
                                <Link
                                    href="https://www.linkedin.com/in/vishwanathakuthota/"
                                    target="_blank"
                                    className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-full font-bold hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
                                >
                                    Connect on LinkedIn <ArrowUpRight size={18} />
                                </Link>

                                <Link
                                    href="https://www.drpinnacle.com"
                                    target="_blank"
                                    className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-colors whitespace-nowrap"
                                >
                                    Visit Dr.Pinnacle <ArrowUpRight size={18} />
                                </Link>

                                <Link
                                    href="/about/team"
                                    className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 whitespace-nowrap"
                                >
                                    Meet the Team <ArrowUpRight size={20} />
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Meet the Team CTA */}
            {/* <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built by Builders.</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are a collective of Engineers, Researchers, and Founders who have built systems that impact millions.
                    </p>

                </div>
            </section> */}

            <Footer />
        </main>
    );
}


