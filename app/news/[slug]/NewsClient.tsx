"use client";
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, Tag, Calendar, User } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

interface NewsArticle {
    title: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: React.ReactNode;
}

const ARTICLES: Record<string, NewsArticle> = {
    "the-future-of-deep-tech": {
        title: "The Future of Deep Tech Education: A New Chapter",
        date: "February 27, 2026",
        readTime: "4 min read",
        category: "Announcements",
        image: "/news-hero.png",
        content: (
            <>
                <p className="text-xl text-slate-600 font-light mb-12 border-l-4 border-blue-500 pl-6 italic">
                    The following is an announcement regarding the expansion of The Foundry's curriculum and global presence.
                </p>

                <h2>Forging the Next Generation of Architects</h2>
                <p>
                    At the intersection of deep tech and entrepreneurship, we are redefining what it means to be a modern engineer. Our new "News" section will serve as the central hub for all updates, industry insights, and academic breakthroughs emerging from our schools.
                </p>

                <div className="my-10 p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 italic text-slate-700">
                    "Innovation is not just about building new tools; it's about forging the mindset that understands why they are being built."
                </div>

                <h2>What to Expect</h2>
                <ul>
                    <li><strong>Weekly Insights:</strong> Deep dives into AI, Cybersecurity, and Sustainability.</li>
                    <li><strong>Campus Updates:</strong> New facilities, events, and student achievements.</li>
                    <li><strong>Global Partnerships:</strong> Collaborations with industry leaders and global universities.</li>
                </ul>

                <p>
                    Stay tuned as we prepare to launch our full editorial series. The Foundry's is more than a school; it's a protocol for the future.
                </p>
            </>
        )
    }
};

export default function NewsClient({ slug }: { slug: string }) {
    const article = ARTICLES[slug];
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
                    <Link href="/news" className="text-blue-600 hover:underline">Back to Newsroom</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 text-slate-700 relative overflow-hidden">
            <Navbar />

            {/* Background Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-slate-50 to-slate-50" />
            </div>

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 origin-left z-50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                style={{ scaleX }}
            />

            {/* Article Container */}
            <div className="relative z-10 pt-32 pb-24 px-4 container mx-auto max-w-4xl">

                {/* Header Section */}
                <header className="mb-12 text-center relative">
                    <Link href="/news" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-slate-500 hover:text-blue-600 mb-8 transition-colors group uppercase tracking-[0.2em] px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Newsroom
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 mb-8 leading-tight tracking-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-500 bg-white/40 backdrop-blur-sm inline-flex px-6 py-3 rounded-2xl border border-white/50 shadow-sm">
                        <span className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <User size={14} className="text-blue-600" />
                            </div>
                            <span className="text-slate-800 font-bold">The Foundry's Editorial</span>
                        </span>
                        <div className="h-4 w-px bg-slate-300/50" />
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-slate-400" />
                            {article.date}
                        </span>
                        <div className="h-4 w-px bg-slate-300/50" />
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-blue-600" />
                            {article.readTime}
                        </span>
                        <div className="h-4 w-px bg-slate-300/50" />
                        <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-md border border-blue-100/50">
                            <Tag size={12} />
                            {article.category}
                        </span>
                    </div>
                </header>

                {/* Main Content Card */}
                <article className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/80 relative overflow-hidden ring-1 ring-white/80">

                    <div className="mb-14 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 relative group transform transition-transform hover:scale-[1.01] duration-700 aspect-video">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl">
                        {article.content}
                    </div>

                    {/* Footer / Share */}
                    <div className="mt-20 pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                        <div className="text-slate-400 text-xs font-mono tracking-widest uppercase">
                            // TRANSMISSION END
                        </div>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-slate-600 hover:text-white hover:bg-slate-900 transition-all font-bold px-6 py-3 rounded-full bg-slate-100/50 active:scale-95 duration-200 shadow-sm hover:shadow-lg">
                                <Share2 size={16} />
                                Share Article
                            </button>
                        </div>
                    </div>
                </article>

            </div>

            <Footer />
        </main>
    );
}
