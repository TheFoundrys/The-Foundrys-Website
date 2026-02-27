"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Calendar, Newspaper } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

const NEWS_ITEMS = [
    // {
    //     slug: "the-future-of-deep-tech",
    //     title: "The Future of Deep Tech Education: A New Chapter",
    //     excerpt: "At the intersection of deep tech and entrepreneurship, we are redefining what it means to be a modern engineer. Our new News section will serve as the central hub for all updates...",
    //     date: "Feb 27, 2026",
    //     readTime: "4 min",
    //     category: "Announcements",
    //     image: "/news-hero.png"
    // },
    {
        slug: "thefoundrys-partnered-with-csi",
        title: "Thefoundrys Partnered with CSI Computer Society of India",
        excerpt: "We’re incredibly excited to share that The Foundry’s has officially partnered with the Computer Society of India (CSI)! We’ve signed an MOU to train the next generation of students and professionals in AI and deep tech, equipping them with future-ready skills. Join us in shaping the future!",
        date: "Feb 28, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/csi-partnership.jpeg"
    }
];

export default function NewsroomPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <Newspaper size={16} /> The Foundry's Newsroom
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Latest Transmissions
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Insights, updates, and breakthroughs from the architects of tomorrow.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_ITEMS.map((item, index) => (
                            <NewsCard key={item.slug} {...item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function NewsCard({ slug, title, excerpt, date, readTime, category, image, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
            <Link href={`/news/${slug}`} className="block relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur shadow-sm text-blue-600 text-xs font-bold border border-blue-100">
                        {category}
                    </span>
                </div>
            </Link>

            <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} /> {date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={12} /> {readTime}
                    </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    <Link href={`/news/${slug}`}>{title}</Link>
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {excerpt}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/news/${slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
                    >
                        Read Full Article <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
