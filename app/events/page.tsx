"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
    {
        id: 1,
        title: "Join Us for the AI @GenZ",
        type: "Community Event",
        date: "Sat, Feb 28, 2026",
        time: "10:30 AM",
        venue: "Lamakan, Hyderabad",
        mapsUrl: "https://maps.google.com/?q=Lamakan+Hyderabad",
        description:
            "Bridging the gap between analogue and AI. Join us for an exciting event designed for the GenZ generation, exploring how AI is transforming the way we live, learn, and create.",
        tags: ["AI", "GenZ", "Community", "Innovation"],
        featured: true,
    },
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-slate-900 text-white">
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
                            <Sparkles size={14} className="text-amber-400" />
                            Events & Experiences
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                            Moments That Spark{" "}
                            <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Action & Change.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            From masterclasses and workshops to high-energy demo days and founder talks — our events turn ambition into experience and connections into opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Upcoming Events Section */}
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
                            What&apos;s Coming Up
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Upcoming Events
                        </h2>
                        <p className="text-slate-500 mt-3 text-lg max-w-2xl">
                            Stay ahead of the curve with workshops, talks, hackathons, and community sessions happening all year round.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        {upcomingEvents.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div
                                    className={`relative rounded-3xl overflow-hidden border ${event.featured
                                        ? "border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 shadow-xl shadow-blue-100/50"
                                        : "border-slate-200 bg-white shadow-sm"
                                        }`}
                                >
                                    {/* Featured Badge */}
                                    {event.featured && (
                                        <div className="absolute top-6 right-6 z-10">
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                                <Sparkles size={12} />
                                                Featured
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-8 md:p-10">
                                        {/* Event Type Tag */}
                                        <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5">
                                            {event.type}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4 max-w-2xl">
                                            {event.title}
                                        </h3>

                                        <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                                            {event.description}
                                        </p>

                                        {/* Event Details Grid */}
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
                                                        {event.date}
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
                                                        {event.time}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-100">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                                    <MapPin size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                                        Venue
                                                    </div>
                                                    <div className="font-bold text-slate-900">
                                                        {event.venue}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {event.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                href="/apply"
                                                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                            >
                                                Register Now
                                                <ArrowUpRight size={16} />
                                            </Link>
                                            <a
                                                href={event.mapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                                            >
                                                <MapPin size={16} />
                                                View on Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            Don&apos;t Miss Out.
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stay connected with The Foundry&apos;s for upcoming workshops, talks, hackathons, and exclusive community events.
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
