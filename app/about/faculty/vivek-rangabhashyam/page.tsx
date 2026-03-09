"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, ArrowLeft, Twitter, Facebook, Instagram, Globe, BookOpen, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function VivekRangabhashyamProfile() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Team
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/3 relative"
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                                <Link href="https://vivekrangabhashyam.com/" target="_blank">
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-500">
                                        <span className="text-lg font-bold">Vivek Rangabhashyam</span>
                                    </div>
                                </Link>

                                <Image
                                    src="/images/Vivek.jpg"
                                    alt="Vivek Rangabhashyam"
                                    fill
                                    className="object-cover"
                                />

                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl rounded-full" />
                        </motion.div>

                        {/* Header Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 space-y-6"
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                    Entrepreneur & Mentor
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Vivek Rangabhashyam
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4">
                                    3D Animation Specialist & Serial Entrepreneur
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <a
                                        href="https://www.linkedin.com/in/vivekrangabhashyam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                    <a
                                        href="https://twitter.com/vivekranga"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-full transition-colors border border-slate-700"
                                    >
                                        <Twitter size={16} />
                                    </a>
                                    <a
                                        href="https://vivekrangabhashyam.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-full transition-colors border border-slate-700"
                                    >
                                        <Globe size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    3D Animation
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Digital Marketing
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Startup Mentorship
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                    Networking Specialist
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Biography Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-700 font-medium leading-relaxed mb-8">
                            Vivek Rangabhashyam is a seasoned 3D Animation Specialist who has transitioned into a serial entrepreneur and mentor. His journey spans from high-octane movie franchises to foundational roles at Google, ultimately leading him to foster the next generation of Indian startups.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-blue-600" size={24} /> Early Career & Google
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    Starting as a 3D Animation Specialist for big franchise movies and educational content, Vivek joined 'GXBO', a Google project focused on getting businesses online. The R&D and mentoring he received at Google were pivotal in his shift toward entrepreneurship.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Award className="text-blue-600" size={24} /> Entrepreneurial Journey
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    In 2013, he founded Markitome, a Digital Marketing Agency. He later co-founded Sea Ridges Financial Service (SRFS) in 2016 and has invested in various sectors, including MR Technology and Mobile-App development.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8">The Power of Networking</h3>
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-16 italic text-slate-600 border-l-4 border-l-blue-600">
                            &quot;Networking was a very important skill I developed. Without it, I’m not sure we would have achieved the level of success we did.&quot;
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-10">
                            An introvert by nature, Vivek forced himself out of his comfort zone, joining organizations like BNI, TiE (The Indus Entrepreneur), and NEN. By 2014, he became a Support Ambassador in BNI Hyderabad, gaining notable visibility across India and mastering the art of building global business relationships.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Mentorship & Giving Back</h3>
                        <p className="text-slate-600 leading-relaxed mb-10">
                            Vivek actively mentors young minds at JNTU Hyderabad, Osmania University, and various engineering and MBA colleges. He consults with startups worldwide, helping them navigate the complexities of technology, education, and finance.
                        </p>

                        <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">Learn from the Architects</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join Vivek Rangabhashyam and our collective of builders at The Foundry to turn your vision into reality.
                            </p>
                            <Link href="/apply" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
                                Apply to Join
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

