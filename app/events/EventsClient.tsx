"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Video, ArrowUpRight, Sparkles, PlayCircle, Filter } from "lucide-react";
import Link from "next/link";

const allItems = [
    {
        id: "event-1",
        title: "Join Us for the AI @GenZ",
        type: "Community Event",
        category: "event",
        date: "Sat, Feb 28, 2026",
        time: "10:30 AM IST",
        dateTime: "2026-02-28T10:30:00+05:30",
        venue: "Lamakan, Hyderabad",
        mapsUrl: "https://maps.google.com/?q=Lamakan+Hyderabad",
        description: "Bridging the gap between analogue and AI. Join us for an exciting event designed for the GenZ generation, exploring how AI is transforming the way we live, learn, and create.",
        tags: ["AI", "GenZ", "Community", "Innovation"],
        featured: true,
    },
    {
        id: "webinar-1",
        title: "Build Your Future with Artificial Intillegence",
        type: "Community Webinar",
        category: "webinar",
        date: "Sat, 26 April 2026",
        time: "4:00 PM IST",
        dateTime: "2026-04-26T16:00:00+05:30",
        platform: "EduCRM Live",
        link: "https://crm.thefoundrys.com/webinars/58beca00-00b2-459b-ae80-5d7ca202f01b/register",
        description: `The future belongs to Artificial Intelligence — and the right decision after Intermediate can shape a student’s entire career. Join this exclusive webinar led by Vishwanath Akuthota, an AI entrepreneur and deep-tech expert with extensive experience in Artificial Intelligence, Cybersecurity, Quantum Computing, and Enterprise Transformation. With strong industry exposure and academic leadership at The Foundrys, he has mentored students into AI professionals and guided them toward future-ready careers in emerging technologies.

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
    }
];

export function EventsClient() {
    const [activeFilter, setActiveFilter] = useState<"all" | "event" | "webinar">("all");

    const now = new Date();
    const bufferTime = 2 * 60 * 60 * 1000; // 2 hours buffer

    // Filter by date (Upcoming vs Past)
    const upcomingItems = allItems.filter(
        (item) => new Date(item.dateTime).getTime() + bufferTime > now.getTime()
    );
    const pastItems = allItems.filter(
        (item) => new Date(item.dateTime).getTime() + bufferTime <= now.getTime()
    );

    // Apply category filter (All, Events, Webinars)
    const filteredUpcoming = upcomingItems.filter(
        (item) => activeFilter === "all" || item.category === activeFilter
    );
    const filteredPast = pastItems.filter(
        (item) => activeFilter === "all" || item.category === activeFilter
    );

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-slate-900 text-white">
                {/* Subtle animated gradient background */}
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
                            <Sparkles size={14} className="text-amber-400 animate-pulse" />
                            Events & Expert Webinars
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                            Moments That Spark <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Action, Learning & Change.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            From interactive expert-led webinars and tech masterclasses to high-energy founder talks and hackathons — join our community to turn ambition into action.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs Section */}
            <section className="py-8 bg-white border-b border-slate-100 relative z-10">
                <div className="container mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
                        <Filter size={16} />
                        Filter Sessions:
                    </div>
                    <div className="flex gap-2">
                        {(["all", "event", "webinar"] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                                    activeFilter === filter
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {filter === "all" ? "All Sessions" : filter === "event" ? "Events" : "Webinars"}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events/Webinars Section */}
            <section className="py-20 px-6 bg-slate-50">
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
                            Upcoming Sessions
                        </h2>
                        <p className="text-slate-500 mt-3 text-lg max-w-2xl">
                            Register for our upcoming live sessions and get a chance to interact with experts in real-time.
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {filteredUpcoming.length > 0 ? (
                            <div className="flex flex-col gap-8">
                                {filteredUpcoming.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <div
                                            className={`relative rounded-3xl overflow-hidden border ${
                                                item.featured
                                                    ? "border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 shadow-xl shadow-blue-100/50"
                                                    : "border-slate-200 bg-white shadow-sm"
                                            }`}
                                        >
                                            {item.featured && (
                                                <div className="absolute top-6 right-6 z-10">
                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                                        <Sparkles size={12} />
                                                        Featured
                                                    </div>
                                                </div>
                                            )}

                                            <div className="p-8 md:p-10">
                                                <div className="flex items-center gap-2 mb-5">
                                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                        item.category === "event" 
                                                            ? "bg-orange-100 text-orange-800" 
                                                            : "bg-blue-100 text-blue-800"
                                                    }`}>
                                                        {item.category === "event" ? <Calendar size={12} /> : <Video size={12} />}
                                                        {item.type}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4 max-w-2xl">
                                                    {item.title}
                                                </h3>

                                                <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-3xl whitespace-pre-line">
                                                    {item.description}
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
                                                                {item.date}
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
                                                                {item.time}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-100">
                                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                                            {item.category === "event" ? <MapPin size={20} /> : <Video size={20} />}
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                                                {item.category === "event" ? "Venue" : "Platform"}
                                                            </div>
                                                            <div className="font-bold text-slate-900">
                                                                {item.category === "event" ? item.venue : item.platform}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {item.tags.map((tag: string) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-3">
                                                    {"link" in item ? (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                                        >
                                                            Register Now
                                                            <ArrowUpRight size={16} />
                                                        </a>
                                                    ) : (
                                                        <a
                                                            href="https://luma.com/cp4d1w4b"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                                        >
                                                            Register Now
                                                            <ArrowUpRight size={16} />
                                                        </a>
                                                    )}
                                                    {"mapsUrl" in item && (
                                                        <a
                                                            href={item.mapsUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                                        >
                                                            <MapPin size={16} />
                                                            View on Google Maps
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm"
                            >
                                <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Something Big is Coming!</h3>
                                <p className="text-slate-500">We're finalizing our next interactive sessions. Stay tuned for updates.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Past Events/Webinars Section */}
            <section className="py-20 px-6 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-3">
                            Looking Back & Watch On-Demand
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Past Sessions & Highlights
                        </h2>
                        <p className="text-slate-500 mt-3 text-lg max-w-2xl">
                            Missed a live session? Relive our community experiences and catch up on foundational expert insights.
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {filteredPast.length > 0 ? (
                            <div className="flex flex-col gap-8">
                                {filteredPast.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    >
                                        <div className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-blue-200 transition-all duration-300 hover:shadow-xl shadow-sm">
                                            <div className="p-8 md:p-10">
                                                <div className="flex items-center justify-between gap-3 mb-6">
                                                    <div className="flex items-center gap-3">
                                                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                            item.category === "event" 
                                                                ? "bg-orange-50 text-orange-700" 
                                                                : "bg-blue-50 text-blue-700"
                                                        }`}>
                                                            {item.category === "event" ? <Calendar size={10} /> : <Video size={10} />}
                                                            {item.type}
                                                        </span>
                                                        <span className="text-slate-400 text-sm font-semibold">{item.date}</span>
                                                    </div>
                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                                                        <Sparkles size={12} />
                                                        Completed
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                                    {item.title}
                                                </h3>

                                                <p className="text-slate-500 text-base leading-relaxed mb-6 whitespace-pre-line">
                                                    {item.description}
                                                </p>

                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <Clock size={16} className="text-slate-400" />
                                                        <span>Time: {item.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                        {item.category === "event" ? (
                                                            <MapPin size={16} className="text-slate-400" />
                                                        ) : (
                                                            <Video size={16} className="text-slate-400" />
                                                        )}
                                                        <span>
                                                            {item.category === "event" ? "Venue" : "Platform"}: {item.category === "event" ? item.venue : item.platform}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {item.tags.map((tag: string) => (
                                                        <span key={tag} className="px-2 py-1 rounded bg-slate-50 text-slate-400 text-[10px] font-bold uppercase">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-3">
                                                    {"mapsUrl" in item && (
                                                        <a
                                                            href={item.mapsUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex justify-center items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-sm"
                                                        >
                                                            <MapPin size={14} />
                                                            View on Google Maps
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                                <PlayCircle size={48} className="mx-auto text-slate-300 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Recordings Coming Soon!</h3>
                                <p className="text-slate-500">Our past sessions are being processed. They will be available here soon.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Stay Connected CTA */}
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
                            Be the first to know about our next masterclass or workshop. Join our community and get exclusive access to resources and recordings.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
                            >
                                Get in Touch
                                <ArrowUpRight size={20} />
                            </Link>
                            <Link
                                href="/apply"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-full font-bold text-lg hover:bg-slate-800 hover:text-white transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
