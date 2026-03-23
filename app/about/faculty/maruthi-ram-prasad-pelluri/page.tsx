"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, Zap, BookOpen, GraduationCap, Globe, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function MaruthiPelluriProfile() {
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
                        {/* Profile Image / Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/3 relative"
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800 flex items-center justify-center">
                                <Image
                                    src="/images/maruthi.jpg"
                                    alt="Maruthi Ram Prasad Pelluri"
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
                                    Advisory Board Member
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Maruthi Ram Prasad Pelluri
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4 italic">
                                    Advisory Board Member
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-bold rounded-full">
                                        36+ Years of Excellence in Education
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-slate-300">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Award size={16} className="text-blue-400" /> National Awardee
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Globe size={16} className="text-blue-400" /> Global Outreach
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Shield size={16} className="text-blue-400" /> NCC Commissioned Officer
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
                        <div className="relative mb-16">
                            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                    A Legacy of Educational Leadership
                                </h2>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    With over thirty-six years of experience in teaching and academic administration, Maruthi Ram Prasad Pelluri is a cornerstone of the educational landscape in India. His journey began at The Hyderabad Public School (Begumpet), where he served as Principal (FAC), HOD, and Vice Principal for nearly two decades, shaping thousands of young minds.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    A professional visionary, he has held pivotal roles in the Association of ICSE and ISC Schools (ASISC) at both regional and national levels, including serving as its President. His leadership has been instrumental in modernizing school curricula and fostering cultural excellence through global exchange programs with the UK, Singapore, Japan, and China.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" size={24} /> Academic Lens
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>Life member and International Ambassador for several prestigious educational forums, including ERU (USA) and Bestow Edutrgex.</p>
                                    <p>Pioneer of innovative systems like the Mentor-Mentee System, Weekend Academic Programs (WAP), and Language Learning Labs.</p>
                                    <p>Conducted numerous Leadership (LeaP) and Faculty Development Programs (FDP) at National and International levels.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Zap className="text-blue-600" size={24} /> Strategic Impact
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>National Award recipient from the Govt. of India for leadership at Ramadevi Public School.</p>
                                    <p>Designated Inspector for CISCE, overseeing affiliations and quality standards across multiple Indian states.</p>
                                    <p>Designed the 'Skill Olympiad' concept for ICSE schools, bridging the gap between classroom learning and real-world application.</p>
                                </div>
                            </div>
                        </div>

                        {/* <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8">Current & Institutional Roles</h3>
                        <p className="text-slate-700 leading-relaxed mb-10">
                            Presently serving as the Principal & Academic Director of The Suraka School (Kollur), he continues to inspire institutional excellence. His contributions extend far beyond traditional schooling—as a Director for Escuela Educational Consultancy and Gavva Laxmi Education Forum, he mentors the next generation of academic leaders across the country.
                        </p> */}

                        <div className="bg-slate-900 rounded-3xl p-10 text-white mb-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 italic text-lg text-slate-300 leading-relaxed">
                                    "Education is not just about academic results; it's about building character and fostering global consciousness through sheer WILL and perseverance."
                                </div>
                                <div className="h-px md:h-24 w-24 md:w-px bg-slate-700" />
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <GraduationCap className="text-blue-400" size={24} /> Beyond the Classroom
                                    </h4>
                                    <p className="text-slate-400">
                                        A commissioned officer of the NCC (Junior Division Army Wing) for a decade, Mr. Pelluri embodies the discipline and service he instills in his students. From organizing National Games to leading literary competitions, his commitment to holistic development remains unparalleled.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
                            <h3 className="text-3xl font-bold mb-4 italic">Lead with Excellence.</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join our journey as we redefine the boundaries of education with veterans who have built the foundation of India's finest institutions.
                            </p>
                            <Link href="/apply" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
                                Join the Foundry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
