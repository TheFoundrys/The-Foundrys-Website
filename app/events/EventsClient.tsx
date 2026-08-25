"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, Clock, MapPin, Video, Youtube, ChevronRight } from "lucide-react";
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
    youtubeUrl?: string;
    description: string;
    tags: string[];
    featured: boolean;
    image: string;
}

const allItems: EventItem[] = [
    {
        id: "webinar-deep-tech-manufacturing-podcast",
        title: "Can India Become a Deep-Tech Manufacturing Powerhouse?",
        type: "Live Podcast",
        category: "event",
        date: "Fri, Aug 21, 2026",
        time: "4:00 PM - 5:00 PM IST",
        dateTime: "2026-08-21T16:00:00+05:30",
        platform: "Microsoft Teams & YouTube",
        link: "https://events.teams.microsoft.com/event/dd70cce1-367c-46a2-bdce-9d789715747b@9be43f22-3237-4b73-971b-3e664c641aea?source=copyLinkOneEventsShareDialog",
        youtubeUrl: "https://youtube.com/live/AiYNjL789D0?feature=share",
        description:
            "Building Technology. Building India. Join us for an exclusive live podcast discussing Defence, Aerospace, AI, Robotics, Semiconductors, Cybersecurity, and Space. Guest Speaker: Col. Merugu Solomon Saneev (Defence Technology, R&D in Weapons, Ammunition and Aerospace Operations Expert). Host: Mr. Vishwanath Akuthota (Founder, The Foundry's).",
        tags: ["Deep Tech", "Manufacturing", "Podcast", "Defence", "Aerospace", "AI", "Robotics", "Semiconductors", "Cybersecurity", "Space"],
        featured: true,
        image: "/images/deeptech-manufacturing-podcast.png",
    },
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
    {
        id: "webinar-quantum-impact",
        title: "Quantum Impact: Bridging Industry Innovation and Academic Advancement",
        type: "Independence Day Special",
        category: "event",
        date: "Sat, Aug 15, 2026",
        time: "4:00 PM - 5:00 PM IST",
        dateTime: "2026-08-15T16:00:00+05:30",
        platform: "Microsoft Teams",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzhkMmZhYjctYjJhYS00NTVlLTk5MjUtZWU4MjQ5Y2Q0ZDJm%40thread.v2/0?context=%7b%22Tid%22%3a%229be43f22-3237-4b73-971b-3e664c641aea%22%2c%22Oid%22%3a%2244076315-3ad7-4d15-a8d3-3eb81b6ccdeb%22%7d",
        description:
            "Join us for an insightful conversation exploring the applications of Quantum Computing in Industry and Academia and its potential to shape the future of innovation, research, and education. Guest Speaker: Dr. Dadamiah PMD Shaik (Associate Professor & HoD, Physics at Vardhaman College of Engineering). Host: Mr. Vishwanath Akuthota (Founder, The Foundry's).",
        tags: ["Quantum Computing", "Deep Tech", "Innovation", "Research", "Education"],
        featured: false,
        image: "/quantum-impact.png",
    },
    {
        id: "webinar-quantum-computing-podcast",
        title: "Quantum Computing and the Next Generation of Emerging Technologies",
        type: "Live Podcast",
        category: "event",
        date: "Sat, Aug 22, 2026",
        time: "4:00 PM - 5:00 PM IST",
        dateTime: "2026-08-22T16:00:00+05:30",
        platform: "Microsoft Teams | Youtube",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzhkMmZhYjctYjJhYS00NTVlLTk5MjUtZWU4MjQ5Y2Q0ZDJm%40thread.v2/0?context=%7b%22Tid%22%3a%229be43f22-3237-4b73-971b-3e664c641aea%22%2c%22Oid%22%3a%2244076315-3ad7-4d15-a8d3-3eb81b6ccdeb%22%7d",
        youtubeUrl: "https://youtube.com/live/cSQhou5nJsQ?feature=share",
        description:
            "From Physics to Possibilities. Join us for a live podcast exploring Quantum Computing and the Next Generation of Emerging Technologies. Guest Speaker: Dr. Ram Soorat (Assistant Professor of Physics at Woxsen University). Host: Mr. Vishwanath Akuthota (Founder, The Foundry's).",
        tags: ["Quantum Computing", "Deep Tech", "Podcast", "Physics", "Emerging Tech"],
        featured: true,
        image: "/quantum-computing-podcast.jpg",
    },
];

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
            className="overflow-hidden border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-[#002f86] hover:shadow-md"
        >
            <div className="flex flex-col md:flex-row">
                <div className="relative h-60 w-full shrink-0 md:h-auto md:w-80 lg:w-96 bg-[#F1F1EC] flex items-center justify-center p-3">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain object-center"
                    />
                    {!upcoming && (
                        <span className="absolute top-4 left-4 bg-slate-900/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-mono">
                            Completed
                        </span>
                    )}
                    {item.featured && upcoming && (
                        <span className="absolute top-4 left-4 bg-[#002f86] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-mono">
                            Featured
                        </span>
                    )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                        <span className="mb-3 inline-flex items-center gap-1.5 bg-[#DCE7F1] text-[#002f86] px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-mono">
                            {item.category === "event" ? <Calendar size={12} /> : <Video size={12} />}
                            {item.type}
                        </span>

                        <h3 className="mb-3 font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                            {item.title}
                        </h3>

                        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 font-sans">
                            {item.description}
                        </p>

                        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="flex items-start gap-3 border border-slate-200/80 p-3">
                                <Calendar size={16} className="mt-0.5 shrink-0 text-[#002f86]" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Date</p>
                                    <p className="text-xs font-semibold text-slate-900 mt-0.5">{item.date}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 border border-slate-200/80 p-3">
                                <Clock size={16} className="mt-0.5 shrink-0 text-[#002f86]" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Time</p>
                                    <p className="text-xs font-semibold text-slate-900 mt-0.5">{item.time}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 border border-slate-200/80 p-3">
                                {item.category === "event" ? (
                                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#002f86]" />
                                ) : (
                                    <Video size={16} className="mt-0.5 shrink-0 text-[#002f86]" />
                                )}
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
                                        {item.venue ? "Venue" : "Platform"}
                                    </p>
                                    <p className="text-xs font-semibold text-slate-900 mt-0.5">
                                        {item.venue || item.platform}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-slate-100 border border-slate-200/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#002f86] hover:bg-[#002266] px-6 py-3 text-xs font-bold text-white transition-all shadow-sm"
                        >
                            {upcoming && item.link ? "Join Event" : "View Details"}
                            <ArrowUpRight size={14} />
                        </a>
                        {item.youtubeUrl && (
                            <a
                                href={item.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-red-200 bg-red-50 px-6 py-3 text-xs font-bold text-red-700 transition-all hover:border-red-300 hover:bg-red-100"
                            >
                                <Youtube size={14} className="text-red-600" />
                                Watch on YouTube
                            </a>
                        )}
                        {item.mapsUrl && (
                            <a
                                href={item.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50"
                            >
                                <MapPin size={14} />
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
    const [selectedTab, setSelectedTab] = useState<"all" | "event" | "webinar">("all");

    const filteredItems = useMemo(() => {
        let items = allItems;
        if (selectedTab !== "all") {
            items = items.filter((item) => item.category === selectedTab);
        }
        return items.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
    }, [selectedTab]);

    const upcomingItems = useMemo(
        () =>
            filteredItems
                .filter((item) => isUpcoming(item.dateTime))
                .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()),
        [filteredItems]
    );

    const pastItems = useMemo(
        () =>
            filteredItems
                .filter((item) => !isUpcoming(item.dateTime))
                .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()),
        [filteredItems]
    );

    const renderFeedSection = (title: string, items: EventItem[]) => {
        if (items.length === 0) return null;

        return (
            <div className="mb-8 last:mb-0">
                {title ? (
                    <div className="mb-4">
                        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest font-bold">{title}</span>
                    </div>
                ) : null}

                <div className="flex flex-col gap-6">
                    {items.map((item, idx) => (
                        <EventCard key={item.id} item={item} idx={idx} />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white shadow-lg shadow-black/15 border border-slate-200/50 mb-16 overflow-hidden">
                
                {/* Introduction Section */}
                <section className="text-slate-800 p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 bg-white">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#002f86] mb-4">
                                Upcoming & Past Events
                            </h1>
                            <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl font-sans">
                                Discover community meetups, expert-led podcasts, live webinars, and hands-on deep tech workshops hosted by The Foundry. Connect with leaders, founders, and fellow builders on the ground.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Events Feed Section */}
                <section id="events-feed" className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 border-t border-slate-200/50">
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 bg-white border border-dashed border-slate-200">
                            <p>No sessions found for this filter.</p>
                        </div>
                    ) : (
                        <>
                            {renderFeedSection("Upcoming Sessions", upcomingItems)}
                            {renderFeedSection("", pastItems)}
                        </>
                    )}
                </section>
            </div>

            <Footer />
        </main>
    );
}
