"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, Clock, MapPin, Video } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

interface EventItem {
    id: string;
    title: string;
    type: string;
    category: "event" | "webinar";
    date: string;
    time: string;
    dateTime: string;
    venue?: string;
    platform?: string;
    mapsUrl?: string;
    link?: string;
    description: string;
    tags: string[];
    featured: boolean;
    image: string;
}

const allItems: EventItem[] = [
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
        description:
            "Bridging the gap between analogue and AI. Join us for an exciting event designed for the GenZ generation, exploring how AI is transforming the way we live, learn, and create.",
        tags: ["AI", "GenZ", "Community", "Innovation"],
        featured: true,
        image: "/images/ai-genz-event.png",
        link: "https://luma.com/cp4d1w4b",
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
        description:
            "The future belongs to Artificial Intelligence — and the right decision after Intermediate can shape a student's entire career. Join this exclusive webinar led by Vishwanath Akuthota, an AI entrepreneur and deep-tech expert.",
        tags: ["AI", "Future Tech", "Career Guidance", "Webinar"],
        featured: true,
        image: "/quantum-computer.jpg",
    },
];

const eventSections = [
    {
        title: "Events",
        categoryKey: "event" as const,
        label: "In-Person Gatherings",
        description: "Community meetups, founder talks, and hands-on sessions designed to connect builders on the ground.",
        href: "?category=event",
        action: "Browse events",
        icon: Calendar,
        accent: "bg-orange-50 text-orange-700 border-orange-100",
    },
    {
        title: "Webinars",
        categoryKey: "webinar" as const,
        label: "Live Online Sessions",
        description: "Expert-led webinars on AI, deep tech, and career pathways — join from anywhere and ask questions in real time.",
        href: "?category=webinar",
        action: "Browse webinars",
        icon: Video,
        accent: "bg-cyan-50 text-cyan-700 border-cyan-100",
    },
];

const getExcerpt = (text: string, maxLength = 120) => {
    const normalized = text.replace(/\s+/g, " ").trim();
    if (normalized.length <= maxLength) return normalized;
    return `${normalized.slice(0, maxLength).trim()}...`;
};

const isUpcoming = (dateTime: string) => {
    const bufferTime = 2 * 60 * 60 * 1000;
    return new Date(dateTime).getTime() + bufferTime > Date.now();
};

function EventCard({ item, idx }: { item: EventItem; idx: number }) {
    const upcoming = isUpcoming(item.dateTime);
    const href = item.link || item.mapsUrl || "/contact";

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"
        >
            <div className="flex flex-col md:flex-row">
                <div className="relative h-56 w-full shrink-0 md:h-auto md:w-72 lg:w-80">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                    />
                    {!upcoming && (
                        <span className="absolute top-4 left-4 rounded-full bg-slate-900/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                            Completed
                        </span>
                    )}
                    {item.featured && upcoming && (
                        <span className="absolute top-4 left-4 rounded-full bg-cyan-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                            Featured
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                        <span
                            className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                item.category === "event"
                                    ? "bg-orange-50 text-orange-700"
                                    : "bg-cyan-50 text-cyan-700"
                            }`}
                        >
                            {item.category === "event" ? <Calendar size={12} /> : <Video size={12} />}
                            {item.type}
                        </span>

                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-950">{item.title}</h3>

                        <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600">{getExcerpt(item.description, 220)}</p>

                        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                                <Calendar size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Date</p>
                                    <p className="text-sm font-semibold text-slate-900">{item.date}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                                <Clock size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Time</p>
                                    <p className="text-sm font-semibold text-slate-900">{item.time}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                                {item.category === "event" ? (
                                    <MapPin size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                ) : (
                                    <Video size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                )}
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        {item.category === "event" ? "Venue" : "Platform"}
                                    </p>
                                    <p className="text-sm font-semibold text-slate-900">
                                        {item.category === "event" ? item.venue : item.platform}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800"
                        >
                            {upcoming && item.link ? "Register Now" : "View Details"}
                            <ArrowUpRight size={16} />
                        </a>
                        {item.mapsUrl && (
                            <a
                                href={item.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                            >
                                <MapPin size={16} />
                                View on Maps
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export function EventsClient() {
    const [selectedCategory, setSelectedCategory] = useState<"event" | "webinar">("event");

    useEffect(() => {
        const handleLocationChange = () => {
            const params = new URLSearchParams(window.location.search);
            const cat = params.get("category");
            if (cat === "webinar") {
                setSelectedCategory("webinar");
            } else {
                setSelectedCategory("event");
            }
        };

        handleLocationChange();
        window.addEventListener("popstate", handleLocationChange);
        return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    const handleSectionClick = (e: React.MouseEvent, category: "event" | "webinar") => {
        e.preventDefault();
        setSelectedCategory(category);

        const url = new URL(window.location.href);
        url.searchParams.set("category", category);
        window.history.pushState({}, "", url.toString());

        const feedElement = document.getElementById("events-feed");
        if (feedElement) {
            feedElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const filteredItems = useMemo(() => {
        return allItems
            .filter((item) => item.category === selectedCategory)
            .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    }, [selectedCategory]);

    const upcomingItems = useMemo(
        () => filteredItems.filter((item) => isUpcoming(item.dateTime)),
        [filteredItems]
    );

    const pastItems = useMemo(
        () => filteredItems.filter((item) => !isUpcoming(item.dateTime)),
        [filteredItems]
    );

    const renderFeedSection = (title: string, items: EventItem[]) => {
        if (items.length === 0) return null;

        return (
            <div className="mb-12 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-slate-400 font-mono text-sm uppercase tracking-widest">{title}</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>

                <div className="flex flex-col gap-6">
                    {items.map((item, idx) => (
                        <EventCard key={item.id} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-[#eaedea] font-sans selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
            <Navbar />

            <section className="relative z-10 pt-32 pb-8 px-4 bg-[#eaedea]">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid gap-5 md:grid-cols-2">
                        {eventSections.map((section, idx) => {
                            const Icon = section.icon;
                            const catKey = section.categoryKey;
                            const isActive = selectedCategory === catKey;

                            return (
                                <Link
                                    href={section.href}
                                    key={section.title}
                                    className="group"
                                    onClick={(e) => handleSectionClick(e, catKey)}
                                >
                                    <motion.article
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08 }}
                                        className={`min-h-[280px] h-full rounded-lg border p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${
                                            isActive
                                                ? "bg-slate-50/70 border-cyan-600/50 ring-1 ring-cyan-600/30"
                                                : "bg-white border-slate-200 hover:border-slate-300"
                                        }`}
                                    >
                                        <div
                                            className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-lg border ${section.accent}`}
                                        >
                                            <Icon size={22} strokeWidth={1.8} />
                                        </div>

                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                                            {section.label}
                                        </p>
                                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950">
                                            {section.title}
                                        </h2>
                                        <p className="text-sm leading-6 text-slate-600">{section.description}</p>

                                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors group-hover:text-cyan-700">
                                            {section.action}
                                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </motion.article>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="events-feed" className="relative z-10 pt-4 pb-16 px-4 bg-[#eaedea]">
                <div className="container mx-auto max-w-7xl">
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 bg-slate-50 rounded-1xl border border-dashed border-slate-200">
                            <p>No {selectedCategory === "event" ? "events" : "webinars"} scheduled yet.</p>
                        </div>
                    ) : (
                        <>
                            {renderFeedSection(
                                `Upcoming ${selectedCategory === "event" ? "Events" : "Webinars"}`,
                                upcomingItems
                            )}
                            {renderFeedSection(
                                `Past ${selectedCategory === "event" ? "Events" : "Webinars"}`,
                                pastItems
                            )}
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
