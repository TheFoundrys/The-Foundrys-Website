"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText, FlaskConical, Loader2, Newspaper } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";

// Type definition for a Post
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: unknown;
  category: string;
  readTime: string;
  excerpt?: string;
  link?: string;
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  category,
  readTime,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..120], "") + "..."
}`;

const getPostImageUrl = (image: unknown) => {
    if (image && typeof image === "object" && "static" in image && "url" in image) {
        const staticImage = image as { static?: boolean; url?: string };

        if (staticImage.static && staticImage.url) {
            return staticImage.url;
        }
    }

    return urlForImage(image).url();
};

const STATIC_RESEARCH_POSTS: Post[] = [
    {
        _id: "res-1",
        title: "MentalLLM: A Transformer-Based Large Language Model Framework for Depression Detection",
        slug: { current: "mentalllm" },
        publishedAt: "2026-01-15T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "8 min",
        excerpt: "This paper introduces MentalLLM, a novel transformer-based framework specifically designed for depression detection in social media text.",
        link: "https://ieeexplore.ieee.org/document/11525902/"
    },
    {
        _id: "res-2",
        title: "Microplastics Detection Using Deep Learning Ensemble with Vision Language Models",
        slug: { current: "microplastics-detection" },
        publishedAt: "2026-01-10T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "9 min",
        excerpt: "A novel ensemble approach combining deep learning models with Vision Language Models (VLMs) for microplastics classification, achieving high accuracy.",
        link: "https://ieeexplore.ieee.org/document/11525939"
    },
    {
        _id: "res-3",
        title: "A Multi-Agent Quantum Chain of Thought Reasoning and Accuracy Accelerators Framework",
        slug: { current: "quantum-chain-of-thought" },
        publishedAt: "2025-11-20T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "10 min",
        excerpt: "A novel multiagent quantum-classical hybrid architecture that significantly outperforms existing machine learning and LLM-based approaches in complex reasoning tasks.",
        link: "https://ieeexplore.ieee.org/document/11525967"
    },
    {
        _id: "res-4",
        title: "Vulnerability Detection and Monitoring Using LLM",
        slug: { current: "vulnerability-detection-llm" },
        publishedAt: "2023-07-12T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "7 min",
        excerpt: "An automated system utilizing Large Language Models to scan source code repositories, identify security vulnerabilities, and monitor software health.",
        link: "https://ieeexplore.ieee.org/document/10456393"
    },
    {
        _id: "res-5",
        title: "Multi-Agent Phishing Detection And Deletion via Small VLM and LLM Reasoning",
        slug: { current: "phishing-detection-multi-agent" },
        publishedAt: "2026-02-18T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "9 min",
        excerpt: "A cooperative multi-agent architecture utilizing Vision Language Models and LLM reasoning to detect and neutralize advanced phishing attacks.",
        link: "https://ieeexplore.ieee.org/document/11429303"
    },
    {
        _id: "res-6",
        title: "Quantum-Enhanced Tax Revenue via A-Challan: ML, LLMs, and QML Approaches",
        slug: { current: "quantum-enhanced-tax-revenue" },
        publishedAt: "2025-12-05T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "11 min",
        excerpt: "Integrating machine learning, LLM reasoning, and Quantum Machine Learning algorithms to optimize tax compliance and detect financial fraud.",
        link: "https://ieeexplore.ieee.org/document/11526131"
    },
    {
        _id: "res-7",
        title: "A Multi-Agent Garage Service Search and Recommendation with Hybrid MLs and LLMs",
        slug: { current: "garage-service-multi-agent" },
        publishedAt: "2025-08-14T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "8 min",
        excerpt: "A search and recommendation framework for automotive garage services, utilizing hybrid machine learning and large language model orchestration.",
        link: "https://ieeexplore.ieee.org/document/10940937"
    },
    {
        _id: "res-8",
        title: "Hybrid Q-Learning with VLMs Reasoning Features",
        slug: { current: "hybrid-q-learning-vlm" },
        publishedAt: "2025-09-22T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "9 min",
        excerpt: "Enhancing reinforcement learning Q-agents with zero-shot semantic features extracted from Vision Language Models for faster state space convergence.",
        link: "https://ieeexplore.ieee.org/document/11040757"
    },
    {
        _id: "res-9",
        title: "Hybrid ML-SLM RAG System for Large Technical PDFs",
        slug: { current: "hybrid-ml-slm-rag" },
        publishedAt: "2025-10-02T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "8 min",
        excerpt: "A high-throughput Retrieval-Augmented Generation pipeline combining traditional ML filters with Small Language Models for parsing large manuals.",
        link: "https://ieeexplore.ieee.org/document/11118759"
    },
    {
        _id: "res-10",
        title: "RAG-Enhanced Multi-Model Ensemble for Automated Vulnerability Detection Using SLMs",
        slug: { current: "rag-enhanced-vulnerability-detection" },
        publishedAt: "2026-03-01T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "10 min",
        excerpt: "An ensemble framework combining lightweight Small Language Models with RAG vector search to run local, privacy-compliant vulnerability auditing.",
        link: "https://ieeexplore.ieee.org/document/11429262"
    },
    {
        _id: "res-11",
        title: "Multi-Vision LVMs Model Ensemble for Gold Jewelry Authenticity Verification",
        slug: { current: "gold-jewelry-verification" },
        publishedAt: "2025-06-18T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "9 min",
        excerpt: "Combining multiple fine-tuned Large Vision Models into an ensemble classifier to verify the authenticity of gold jewelry markings.",
        link: "https://ieeexplore.ieee.org/document/11118918"
    },
    {
        _id: "res-12",
        title: "Comparative Analysis of Diverse Architectures for Accurate Blood Cancer Cell Classification",
        slug: { current: "blood-cancer-classification" },
        publishedAt: "2024-11-10T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "9 min",
        excerpt: "A rigorous benchmarking of modern CNN and Vision Transformer architectures for the automatic classification of leukemia and blood cancer cells.",
        link: "https://ieeexplore.ieee.org/document/10497341"
    },
    {
        _id: "res-13",
        title: "Pose Detection: Integrating Machine Learning with Large Vision Models",
        slug: { current: "pose-detection-lvm" },
        publishedAt: "2025-05-14T00:00:00Z",
        mainImage: { static: true, url: "/quantum-computer.jpg" },
        category: "Research",
        readTime: "8 min",
        excerpt: "Fusing real-time skeleton pose estimation algorithms with high-capacity Large Vision Models to improve action recognition in complex backgrounds.",
        link: "https://ieeexplore.ieee.org/document/11211028"
    },
    {
        _id: "res-14",
        title: "Financial Voucher Analysis with LVMs and Financial LLMs",
        slug: { current: "financial-voucher-analysis" },
        publishedAt: "2025-07-08T00:00:00Z",
        mainImage: { static: true, url: "/foundry.jpg" },
        category: "Research",
        readTime: "10 min",
        excerpt: "An automated auditing pipeline leveraging Large Vision Models and domain-specific financial LLMs to process, extract, and reconcile physical receipts.",
        link: "https://ieeexplore.ieee.org/document/11118347"
    }
];

const resourceSections = [
    {
        title: "Blog",
        label: "Editorial Signals",
        description: "Short-form perspectives, updates, and field notes from The Foundry's deep tech ecosystem.",
        href: "?category=blog",
        action: "Read blog",
        icon: Newspaper,
        accent: "bg-cyan-50 text-cyan-700 border-cyan-100",
    },
    {
        title: "Research",
        label: "Applied Inquiry",
        description: "Research notes, institute thinking, and technical explorations across AI, cyber, quantum, and climate systems.",
        href: "?category=research",
        action: "Browse research",
        icon: FlaskConical,
        accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    // {
    //     title: "Whitepapers",
    //     label: "Deep Reports",
    //     description: "Structured briefs and long-form technical documents for leaders, builders, and institutional partners.",
    //     href: "?category=whitepapers",
    //     action: "View whitepapers",
    //     icon: FileText,
    //     accent: "bg-amber-50 text-amber-700 border-amber-100",
    // },
];

export default function BlogListingPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<'blog' | 'research' | 'whitepapers'>('blog');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(POSTS_QUERY);
                const filteredSanity = (data || []).filter((p: Post) =>
                    !p.title?.toLowerCase().includes("moving beyond") &&
                    !p.slug?.current?.includes("moving-beyond")
                );
                const merged = [...filteredSanity, ...STATIC_RESEARCH_POSTS];
                setPosts(merged);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setPosts(STATIC_RESEARCH_POSTS);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const handleLocationChange = () => {
            const params = new URLSearchParams(window.location.search);
            const cat = params.get('category');
            if (cat === 'research') {
                setSelectedCategory('research');
            } else if (cat === 'whitepapers' || cat === 'whitepaper') {
                setSelectedCategory('whitepapers');
            } else {
                setSelectedCategory('blog');
            }
        };

        handleLocationChange();
        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    const handleSectionClick = (e: React.MouseEvent, category: 'blog' | 'research' | 'whitepapers') => {
        e.preventDefault();
        setSelectedCategory(category);
        
        const url = new URL(window.location.href);
        url.searchParams.set('category', category);
        window.history.pushState({}, '', url.toString());

        const feedElement = document.getElementById('resource-feed');
        if (feedElement) {
            feedElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'research') {
            return posts.filter(post => post.category?.toLowerCase() === 'research');
        }
        if (selectedCategory === 'whitepapers') {
            return posts.filter(post => post.category?.toLowerCase() === 'whitepaper' || post.category?.toLowerCase() === 'whitepapers');
        }
        // Default to blog (exclude research and whitepapers)
        return posts.filter(post => !['research', 'whitepaper', 'whitepapers'].includes(post.category?.toLowerCase() || ''));
    }, [posts, selectedCategory]);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
            <Navbar />

            <section className="relative z-10 pt-32 pb-20 px-4 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                            Resources
                        </span>
                        <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-slate-950">
                            Choose your knowledge stream.
                        </h1>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {resourceSections.map((section, idx) => {
                            const Icon = section.icon;
                            const catKey = section.title.toLowerCase() as 'blog' | 'research' | 'whitepapers';
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
                                                ? 'bg-slate-50/70 border-cyan-600/50 ring-1 ring-cyan-600/30' 
                                                : 'bg-white border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-lg border ${section.accent}`}>
                                            <Icon size={22} strokeWidth={1.8} />
                                        </div>

                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                                            {section.label}
                                        </p>
                                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950">
                                            {section.title}
                                        </h2>
                                        <p className="text-sm leading-6 text-slate-600">
                                            {section.description}
                                        </p>

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

            {/* Blog Grid */}
            <section id="resource-feed" className="relative z-10 py-24 px-4 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-slate-400 font-mono text-sm uppercase tracking-widest">
                            Latest {selectedCategory === 'blog' ? 'Blog Posts' : selectedCategory === 'research' ? 'Research Papers' : 'Whitepapers'}
                        </span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {loading && posts.length === 0 ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <p>No {selectedCategory} transmissions received yet.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, idx) => (
                                <Link 
                                    href={post.link || `/resources/${post.slug.current}`} 
                                    key={post._id} 
                                    className="group"
                                    target={post.link ? "_blank" : undefined}
                                    rel={post.link ? "noopener noreferrer" : undefined}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 + 0.2 }}
                                        className="h-full bg-slate-50 border border-slate-100/50 rounded-3xl overflow-hidden hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/10 flex flex-col group-hover:-translate-y-2 relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />

                                        {/* Image */}
                                        <div className="h-64 overflow-hidden relative">
                                            {post.mainImage ? (
                                                <img
                                                    src={getPostImageUrl(post.mainImage)}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 saturate-0 group-hover:saturate-100"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                                    No Signal
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-1 flex flex-col relative z-20">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2 py-1 rounded">
                                                    {post.category || 'General'}
                                                </span>
                                                <span className="text-xs font-mono text-slate-400">
                                                    {post.readTime || '5m'}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors leading-tight">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-slate-900 font-bold text-sm tracking-wide group-hover:gap-4 transition-all">
                                                {post.link ? "View Publication" : "Read Article"} <ArrowRight size={16} className="ml-2 text-cyan-500" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
