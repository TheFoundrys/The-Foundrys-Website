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
    },
    {
        slug: "thefoundrys-partnered-with-keshava-college",
        title: "The Foundrys Partnered with Keshava Degree College for Women",
        excerpt: "We are proud to announce a strategic partnership with Keshava Degree College for Women, Hanamakonda. This MOU marks a significant step towards empowering women in tech through advanced training in Deep Tech and AI.",
        date: "Mar 17, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/mou-keshava-college.jpg",
        imagePosition: "object-top"
    },
    {
        slug: "thefoundrys-partnered-with-ebs",
        title: "The Foundry's Partnered with EBS Ethames Business School",
        excerpt: "The Foundry’s is proud to announce a strategic partnership with Ethames Business School (EBS). This  marks a significant step forward in our mission to bring advanced technical education to a broader student body.",
        date: "Apr 02, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/ebs-partnership.png"
    },
    {
        slug: "thefoundrys-certified-by-startup-india",
        title: "The Foundry's Officially Certified by Startup India",
        excerpt: "The Foundry’s is proud to announce its official recognition and certification by Startup India, the Government of India’s flagship initiative to foster innovation and entrepreneurship.",
        date: "Mar 17, 2026",
        readTime: "3 min",
        category: "Achievements",
        image: "/startup-india-certificate.jpg"
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

function NewsCard({ slug, title, excerpt, date, readTime, category, image, imagePosition, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
            {image ? (
                <Link href={`/news/${slug}`} className="block relative aspect-video overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${imagePosition || 'object-center'}`}
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur shadow-sm text-blue-600 text-xs font-bold border border-blue-100">
                            {category}
                        </span>
                    </div>
                </Link>
            ) : (
                <Link href={`/news/${slug}`} className="block relative aspect-video bg-slate-900 group-hover:bg-slate-800 transition-colors duration-500 p-8 flex flex-col justify-end overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Newspaper size={120} className="text-white transform translate-x-1/4 -translate-y-1/4 rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 backdrop-blur-md text-blue-400 text-[10px] font-bold border border-blue-500/20 uppercase tracking-widest mb-4 inline-block">
                            {category}
                        </span>

                    </div>
                </Link>
            )}

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
