"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

const NEWS_ITEMS = [
    {
        slug: "thefoundrys-partnered-with-vareon",
        title: "The Foundry's Partnered with Vareon",
        excerpt: "We are thrilled to announce that The Foundry's has officially signed an MoU with Vareon to collaborate on training, research, and direct placements.",
        date: "Jul 28, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/vareon-partnership-graphic.png"
    },
    {
        slug: "thefoundrys-partnered-with-ttpoa",
        title: "The Foundry's Partnered with Telangana Training and Placement Officers Association (TTPOA)",
        excerpt: "The Foundry’s has signed an MOU with TTPOA. TTPOA President Dr. Jayaram joins our Advisory Board to drive career placements.",
        date: "Jul 08, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/images/ttpoa-logo.webp",
        imagePosition: "contain"
    },
    {
        slug: "thefoundrys-partnered-with-ebs",
        title: "The Foundry's Partnered with EBS Ethames Business School",
        excerpt: "The Foundry’s is proud to announce a strategic partnership with Ethames Business School to bring advanced technical education to students.",
        date: "Apr 02, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/ebs-partnership.png"
    },
    {
        slug: "thefoundrys-partnered-with-keshava-college",
        title: "The Foundrys Partnered with Keshava Degree College for Women",
        excerpt: "Strategic partnership with Keshava Degree College for Women, Hanamakonda to empower women in tech through training in Deep Tech and AI.",
        date: "Mar 17, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/mou-keshava-college.jpg",
        imagePosition: "object-top"
    },
    {
        slug: "thefoundrys-certified-by-startup-india",
        title: "The Foundry's Officially Certified by Startup India",
        excerpt: "The Foundry’s is proud to announce its official recognition and certification by Startup India to foster innovation and entrepreneurship.",
        date: "Mar 17, 2026",
        readTime: "3 min",
        category: "Achievements",
        image: "/startup-india-certificate.jpg"
    },
    {
        slug: "thefoundrys-partnered-with-csi",
        title: "Thefoundrys Partnered with CSI Computer Society of India",
        excerpt: "The Foundry’s has officially partnered with the Computer Society of India (CSI) to train students and professionals in AI and deep tech.",
        date: "Feb 28, 2026",
        readTime: "2 min",
        category: "Partnerships",
        image: "/csi-partnership.jpeg"
    }
];

export default function NewsroomPage() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Introduction Section */}
                <section className="p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 border-b border-slate-200/50 bg-white">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#002f86] mb-3 leading-tight">
                            News & Press Releases
                        </h1>
                        <p className="text-xs md:text-sm leading-relaxed text-slate-700 max-w-3xl font-sans">
                            Official announcements, strategic MoUs, institutional partnerships, and achievements from The Foundry&apos;s ecosystem.
                        </p>
                    </div>
                </section>

                {/* News Grid */}
                <section className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {NEWS_ITEMS.map((item, index) => (
                            <NewsCard key={item.slug} {...item} index={index} />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}

function NewsCard({ slug, title, excerpt, date, readTime, category, image, imagePosition, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-col bg-[#F1F1EC] border border-slate-200/80 hover:border-[#002f86] transition-all duration-300 shadow-xs"
        >
            {image && (
                <Link href={`/news/${slug}`} className="block relative h-44 overflow-hidden bg-slate-50 border-b border-slate-100">
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                            imagePosition?.includes('contain') 
                                ? 'object-contain p-4' 
                                : `object-cover ${imagePosition || 'object-center'}`
                        }`}
                    />
                    <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 bg-[#002f86] text-white text-[9px] font-bold uppercase tracking-widest font-mono">
                            {category}
                        </span>
                    </div>
                </Link>
            )}

            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                            <Calendar size={11} className="text-[#002f86]" /> {date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={11} className="text-[#002f86]" /> {readTime}
                        </span>
                    </div>

                    <h2 className="font-serif text-base font-bold text-slate-900 mb-2 group-hover:text-[#002f86] transition-colors leading-snug">
                        <Link href={`/news/${slug}`}>{title}</Link>
                    </h2>

                    <p className="text-slate-600 text-xs leading-relaxed mb-4 font-sans line-clamp-2">
                        {excerpt}
                    </p>
                </div>

                <div>
                    <Link
                        href={`/news/${slug}`}
                        className="inline-flex items-center gap-1 text-[#002f86] font-bold text-[11px] uppercase tracking-wider font-mono hover:gap-2 transition-all"
                    >
                        Read Full Article <ArrowRight size={13} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
