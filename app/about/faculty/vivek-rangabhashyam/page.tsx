"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Twitter, Globe, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function VivekRangabhashyamProfile() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Hero / Header Section inside White Card */}
                <section className="bg-[#F7F7F4] p-8 sm:p-12 md:p-16 border-b border-slate-200/50 relative overflow-hidden">
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
                                        src="/images/Vivek.jpg"
                                        alt="Vivek Rangabhashyam"
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
                                        Entrepreneur & Mentor
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                                        Vivek Rangabhashyam
                                    </h1>
                                    <p className="text-base sm:text-lg text-slate-600 font-medium italic">
                                        3D Animation Specialist & Serial Entrepreneur
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/vivekranga/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Linkedin size={15} /> LinkedIn
                                    </a>
                                    <a
                                        href="https://twitter.com/vivekranga"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                        <Twitter size={15} /> Twitter
                                    </a>
                                    <a
                                        href="https://vivekrangabhashyam.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#002f86] border border-slate-200/80 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer shadow-xs"
                                    >
                                        <Globe size={15} /> Website
                                    </a>
                                </div>

                                {/* Key Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["3D Animation", "Digital Marketing", "Startup Mentorship", "Networking Specialist"].map((tag) => (
                                        <div key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/80 text-xs font-mono text-slate-700 shadow-xs">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Profile Overview Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white border-b border-slate-200/50">
                    <div className="max-w-4xl space-y-6">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-4">
                            Career & Mentorship Journey
                        </h2>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                            Vivek Rangabhashyam is a seasoned 3D Animation Specialist who has transitioned into a serial entrepreneur and mentor. His journey spans from high-octane movie franchises to foundational roles at Google, ultimately leading him to foster the next generation of Indian startups.
                        </p>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Zap className="text-[#002f86]" size={22} /> Early Career & Google
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                Starting as a 3D Animation Specialist for big franchise movies and educational content, Vivek joined &apos;GXBO&apos;, a Google project focused on getting businesses online. The R&D and mentoring he received at Google were pivotal in his shift toward entrepreneurship.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl font-bold text-[#002f86] mb-4 flex items-center gap-2">
                                <Award className="text-[#002f86]" size={22} /> Entrepreneurial Journey
                            </h3>
                            <p className="p-5 bg-white border border-slate-200/80 text-xs md:text-sm text-slate-700 leading-relaxed font-sans shadow-xs">
                                In 2013, he founded Markitome, a Digital Marketing Agency. He later co-founded Sea Ridges Financial Service (SRFS) in 2016 and has invested in various sectors, including MR Technology and Mobile-App development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        <p className="font-serif italic text-base md:text-xl text-[#002f86] leading-relaxed">
                            &quot;Networking was a very important skill I developed. Without it, I’m not sure we would have achieved the level of success we did.&quot;
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
