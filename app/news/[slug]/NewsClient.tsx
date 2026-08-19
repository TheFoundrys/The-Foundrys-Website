"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, Calendar, User } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

interface NewsArticle {
    title: string;
    date: string;
    readTime: string;
    category: string;
    excerpt?: string;
    image?: string;
    imagePosition?: string;
    content: React.ReactNode;
}

const ARTICLES: Record<string, NewsArticle> = {
    "thefoundrys-partnered-with-vareon": {
        title: "The Foundry's Partnered with Vareon",
        date: "July 28, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/vareon-partnership-graphic.png",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s has officially signed a Memorandum of Understanding (MOU) with Vareon to build the future of technical skills, innovation, and direct placement opportunities.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Building the Future Together</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    We are thrilled to share that The Foundry&apos;s has entered into a strategic MOU partnership with Vareon! This collaboration represents a strong alignment of values and resources, dedicated to bringing state-of-the-art training, industrial mentorship, and high-performance career paths to students and early-career professionals.
                </p>

                <div className="my-8 flex justify-center">
                    <img 
                        src="/vareon-partnership-mou.jpg" 
                        alt="The Foundry's and Vareon MOU Signing" 
                        className="border border-slate-200/80 shadow-md max-w-full md:max-w-2xl"
                    />
                </div>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;Through this partnership, Vareon and The Foundry&apos;s are bringing academic training and real-world deployment closer than ever before. We will deliver industry-relevant programs and foster innovation that creates limitless impact.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Key Objectives of the MoU</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Industry-Aligned Training:</strong> Collaborative design of training programs tailored to modern software engineering, AI engineering, and systems risk architectures.</li>
                    <li><strong>Innovation & Research:</strong> Enabling shared research pathways and technology-led solutions to bridge technical training and deployment.</li>
                    <li><strong>Direct Placements:</strong> Creating career transformation pathways and connecting qualified candidates directly to placement opportunities at Vareon.</li>
                </ul>

                <p className="text-slate-700 leading-relaxed font-sans">
                    By merging Vareon&apos;s industry expertise with The Foundry&apos;s premium finishing school curriculum, we are excited to empower learners with the hands-on competence required to lead in the intelligent age.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-ttpoa": {
        title: "The Foundry's Partnered with Telangana Training and Placement Officers Association (TTPOA)",
        date: "July 08, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/images/ttpoa-logo.webp",
        imagePosition: "contain",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s has officially signed an MOU with the Telangana Training and Placement Officers Association (TTPOA). Additionally, TTPOA President Dr. Jayaram joins The Foundry’s Advisory Board to align academic training with industry hiring and drive career placements.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Aligning Academia with Deep Tech Industry Hiring</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    This partnership between The Foundry&apos;s and the Telangana Training and Placement Officers Association (<a href="https://www.ttpoa.in/" target="_blank" rel="noopener noreferrer" className="text-[#002f86] hover:underline font-bold">TTPOA</a>) marks a milestone in empowering engineering graduates across Telangana. By combining forces, we aim to bridge the gap between traditional curriculum models and the rigorous requirements of global technology teams.
                </p>

                <div className="my-8 p-6 bg-[#F7F7F4] border border-slate-200/80 italic text-slate-800 font-serif">
                    &quot;Bridging academic curriculum with real-world deployment is critical. Through this strategic alliance, we will ensure that engineering graduates in Telangana are not only trained in deep tech, but are ready to deliver value to industry teams from day one.&quot;
                </div>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Key Pillars of the MOU</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 font-sans mb-6">
                    <li><strong>Industry Placement Readiness:</strong> Designing targeted placement bootcamps and assessment frameworks aligned with active hiring standards.</li>
                    <li><strong>AI & Deep Tech Bootcamps:</strong> Organizing technical workshops and certifications directly accessible to students in member colleges under TTPOA.</li>
                    <li><strong>Faculty Development:</strong> Providing training programs for placement coordinators and educators on industry shifts and tools.</li>
                </ul>
            </>
        )
    },
    "thefoundrys-certified-by-startup-india": {
        title: "The Foundry's Officially Certified by Startup India",
        date: "March 17, 2026",
        readTime: "3 min read",
        category: "Achievements",
        image: "/startup-india-certificate.jpg",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    The Foundry’s is proud to announce its official recognition and certification by Startup India, the Government of India’s flagship initiative to foster innovation and entrepreneurship.
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Recognized for Deep Tech Excellence</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    This recognition validates our commitment to building an ecosystem that merges deep technology education, venture acceleration, and strategic industry collaboration.
                </p>
            </>
        )
    },
    "thefoundrys-partnered-with-csi": {
        title: "Thefoundrys Partnered with CSI Computer Society of India",
        date: "February 28, 2026",
        readTime: "2 min read",
        category: "Partnerships",
        image: "/csi-partnership.jpeg",
        content: (
            <>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic mb-8 border-l-4 border-[#002f86] pl-6">
                    We’re incredibly excited to share that The Foundry’s has officially partnered with the Computer Society of India (CSI)!
                </p>

                <h2 className="font-serif text-2xl font-bold text-[#002f86] mt-8 mb-4">Empowering Next-Generation Tech Leaders</h2>
                <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                    We’ve signed an MOU to train the next generation of students and professionals in AI and deep tech, equipping them with future-ready skills.
                </p>
            </>
        )
    }
};

export default function NewsClient({ slug }: { slug: string }) {
    const [copied, setCopied] = useState(false);
    const article = ARTICLES[slug] || ARTICLES["thefoundrys-partnered-with-vareon"];

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Header Section */}
                <section className="bg-[#F7F7F4] p-8 sm:p-12 md:p-16 border-b border-slate-200/50">
                    <div className="max-w-4xl">
                        <Link href="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-6 text-xs font-bold uppercase tracking-wider font-mono">
                            <ArrowLeft size={14} /> Back to Newsroom
                        </Link>

                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-[#002f86] text-white text-[10px] font-bold uppercase tracking-widest font-mono">
                                {article.category}
                            </span>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002f86] mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 border-t border-slate-200/80 pt-4">
                            <span className="flex items-center gap-1.5">
                                <User size={14} className="text-[#002f86]" /> The Foundry&apos;s Editorial
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} className="text-[#002f86]" /> {article.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-[#002f86]" /> {article.readTime}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Article Content Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="max-w-4xl">
                        {article.image && (
                            <div className="mb-10 aspect-video bg-[#F7F7F4] border border-slate-200/80 overflow-hidden flex items-center justify-center p-3">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className={`max-h-full max-w-full ${
                                        article.imagePosition?.includes('contain') 
                                            ? 'object-contain' 
                                            : `object-cover ${article.imagePosition || 'object-center'}`
                                    }`}
                                />
                            </div>
                        )}

                        <div className="prose prose-lg max-w-none text-slate-700 font-sans">
                            {article.content}
                        </div>

                        {/* Share Action */}
                        <div className="mt-12 pt-8 border-t border-slate-200/60 flex items-center justify-between">
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002f86] hover:bg-[#002266] text-white text-xs font-bold font-mono transition-colors cursor-pointer"
                            >
                                <Share2 size={15} />
                                {copied ? "Link Copied!" : "Share Article"}
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
