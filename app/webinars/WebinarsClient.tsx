"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowUpRight, Sparkles, PlayCircle } from "lucide-react";
import Link from "next/link";

const allWebinars = [
    {
        id: 1,
        title: "Build Your Future with Artificial Intillegence",
        type: "Community Webinar",
        date: "Sat, 26 April 2026",
        time: "4:00 PM IST",
        dateTime: "2026-04-26T16:00:00+05:30", // This helps the system know exactly when to move it
        platform: "EduCRM Live",
        link: "https://crm.thefoundrys.com/webinars/58beca00-00b2-459b-ae80-5d7ca202f01b/register",
        description:
            `The future belongs to Artificial Intelligence — and the right decision after Intermediate can shape a student’s entire career. Join this exclusive webinar led by Vishwanath Akuthota, an AI entrepreneur and deep-tech expert with extensive experience in Artificial Intelligence, Cybersecurity, Quantum Computing, and Enterprise Transformation. With strong industry exposure and academic leadership at The Foundrys, he has mentored students into AI professionals and guided them toward future-ready careers in emerging technologies.

What You’ll Learn in This Webinar
• Future career opportunities in AI
• What students should choose after Intermediate
• Traditional degrees vs future-ready AI programs
• Skills required to succeed in AI careers
• Career roadmap from student to AI professional
• Live Q&A with industry expert

Programs Covered
Hyderabad
• BCA AI Professional

Hanamkonda / Warangal
• BSc in Artificial Intelligence
• BSc in Data Sciences
• BSc in MPCS

This session is ideal for:
• Intermediate passed students
• Parents planning career decisions
• Students interested in AI and future technologies

Limited Seats Available Register Now and Build a Future-Ready Career in AI`,
        tags: ["AI", "Future Tech", "Career Guidance", "Webinar"],
        featured: true,
    },
];

export function WebinarsClient() {
    // Automatically sort webinars into upcoming and past based on current date/time
    const now = new Date();

    // Using a 2-hour buffer so it stays in "Upcoming" until roughly an hour after it starts
    const bufferTime = 2 * 60 * 60 * 1000;

    const upcomingWebinars = allWebinars.filter(
        (w) => new Date(w.dateTime).getTime() + bufferTime > now.getTime()
    );
    const pastWebinars = allWebinars.filter(
        (w) => new Date(w.dateTime).getTime() + bufferTime <= now.getTime()
    );
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            <Video size={14} className="text-blue-400" />
                            Expert Webinars
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                            Learn from the{" "}
                            <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Best in the World.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Join our live sessions and recorded workshops. Deep dives into tech, AI, and entrepreneurship led by industry veterans and visionary founders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Upcoming Webinars Section */}
            <section className="py-20 md:py-28 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">
                            Coming Up Next
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Upcoming Webinars
                        </h2>
                        <p className="text-slate-500 mt-3 text-lg max-w-2xl">
                            Register for our upcoming live sessions and get a chance to interact with experts in real-time.
                        </p>
                    </motion.div>

                    {upcomingWebinars.length > 0 ? (
                        <div className="flex flex-col gap-8">
                            {upcomingWebinars.map((webinar, i) => (
                                <motion.div
                                    key={webinar.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div
                                        className={`relative rounded-3xl overflow-hidden border ${webinar.featured
                                            ? "border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 shadow-xl shadow-blue-100/50"
                                            : "border-slate-200 bg-white shadow-sm"
                                            }`}
                                    >
                                        <div className="p-8 md:p-10">
                                            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-5">
                                                {webinar.type}
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4 max-w-2xl">
                                                {webinar.title}
                                            </h3>

                                            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                                                {webinar.description}
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-100">
                                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                        <Calendar size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                                            Date
                                                        </div>
                                                        <div className="font-bold text-slate-900">
                                                            {webinar.date}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-100">
                                                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                                        <Clock size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                                            Time
                                                        </div>
                                                        <div className="font-bold text-slate-900">
                                                            {webinar.time}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-100">
                                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                                        <Video size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                                            Platform
                                                        </div>
                                                        <div className="font-bold text-slate-900">
                                                            {webinar.platform}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <a
                                                    href={webinar.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                                >
                                                    Register Now
                                                    <ArrowUpRight size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm"
                        >
                            <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">New Webinars Coming Soon!</h3>
                            <p className="text-slate-500">We're finalizing our next masterclass schedule. Check back soon.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Past Webinars Section */}
            <section className="py-20 md:py-28 px-6 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-3">
                            Watch on Demand
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Past Webinars
                        </h2>
                        <p className="text-slate-500 mt-3 text-lg max-w-2xl">
                            Missed a live session? Watch our recorded webinars and catch up on foundational insights from our experts.
                        </p>
                    </motion.div>

                    {pastWebinars.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                            {pastWebinars.map((webinar, i) => (
                                <motion.div
                                    key={webinar.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-blue-200 transition-all duration-300 hover:shadow-xl shadow-sm">
                                        <div className="p-6 md:p-8">
                                            <div className="flex items-center justify-between gap-3 mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                                                        {webinar.type}
                                                    </div>
                                                    <span className="text-slate-400 text-sm">{webinar.date}</span>
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                                                    <Sparkles size={12} />
                                                    Completed
                                                </div>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {webinar.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
                                                {webinar.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {webinar.tags.map((tag: string) => (
                                                    <span key={tag} className="px-2 py-1 rounded bg-slate-50 text-slate-400 text-[10px] font-bold uppercase">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm"
                        >
                            <PlayCircle size={48} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Recordings Coming Soon!</h3>
                            <p className="text-slate-500">Our past sessions are being processed. They will be available here soon.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 md:py-28 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[150px]" />
                </div>
                <div className="container mx-auto max-w-3xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Stay Updated on New Sessions.
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Be the first to know about our next masterclass. Join our community and get exclusive access to resources and recordings.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
                            >
                                Get Notified
                                <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

