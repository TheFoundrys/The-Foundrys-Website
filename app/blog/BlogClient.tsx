"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, FileText, FlaskConical, Loader2, Newspaper } from 'lucide-react';
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

const STATIC_BLOG_POSTS: Post[] = [
    {
        _id: "blog-1",
        title: "Building the Future: A Message from the Founder of The Foundry’s",
        slug: { current: "building-the-future-message-from-founder" },
        publishedAt: "2026-03-12T00:00:00Z",
        mainImage: { static: true, url: "/images/building_the_future_cover.png" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "We are living in one of the most exciting eras of human progress. Technology is advancing at an unprecedented pace, industries are being reimagined, and the world is calling for a new generation of builders, thinkers, and leaders who are ready to shape what comes next.",
        link: "https://www.linkedin.com/pulse/building-future-message-from-founder-foundrys-the-foundry-s-ynhrc"
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

export function BlogClient() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<'blog' | 'research' | 'whitepapers'>('blog');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(POSTS_QUERY);
                const merged = [...(data || []), ...STATIC_RESEARCH_POSTS, ...STATIC_BLOG_POSTS];
                setPosts(merged);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setPosts([...STATIC_RESEARCH_POSTS, ...STATIC_BLOG_POSTS]);
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
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Hero Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto bg-white mt-20">
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                        Resources
                    </span>
                    <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight text-foundry-text">
                        Choose your knowledge stream.
                    </h1>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-700 max-w-2xl">
                        Explore the latest insights, research, and deep tech perspectives from The Foundry's team and academic ecosystem.
                    </p>
                </section>
            </div>

            {/* Selector Cards Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] mt-[30px]">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
                                    className={`min-h-[220px] h-full rounded-1xl border p-8 shadow-lg shadow-black/15 border-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                        isActive 
                                            ? 'bg-[#DCE7F1] border-slate-300' 
                                            : 'bg-white border-slate-200/50 hover:border-slate-300'
                                    }`}
                                >
                                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border ${
                                        isActive ? 'bg-white text-brand-purple border-slate-300' : section.accent
                                    }`}>
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>

                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        {section.label}
                                    </p>
                                    <h2 className="mb-3 font-serif text-2xl font-bold text-brand-purple">
                                        {section.title}
                                    </h2>
                                    <p className="text-xs leading-relaxed text-slate-700">
                                        {section.description}
                                    </p>

                                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple transition-colors group-hover:text-deep-blue">
                                        {section.action}
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </motion.article>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Blog Grid Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-16 overflow-hidden">
                <section id="resource-feed" className="p-8 sm:p-12 md:p-16 text-brand-purple">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-slate-400 font-mono text-xs uppercase tracking-[0.2em] font-bold">
                            Latest {selectedCategory === 'blog' ? 'Blog Posts' : selectedCategory === 'research' ? 'Research Papers' : 'Whitepapers'}
                        </span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {loading && posts.length === 0 ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-brand-purple animate-spin" />
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 bg-[#F7F7F4] rounded-1xl border border-dashed border-slate-200">
                            <p>No {selectedCategory} transmissions received yet.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
                            {filteredPosts.map((post, idx) => (
                                <Link 
                                    href={post.link || `/blog/${post.slug.current}`} 
                                    key={post._id} 
                                    className="group"
                                    target={post.link ? "_blank" : undefined}
                                    rel={post.link ? "noopener noreferrer" : undefined}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="relative flex flex-col w-full h-full"
                                    >
                                        <div className="relative w-full h-[320px] overflow-hidden bg-slate-100">
                                            {post.mainImage ? (
                                                <Image
                                                    src={getPostImageUrl(post.mainImage)}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-[#F7F7F4] flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 w-[85%] bg-[#F7F7F4] border border-slate-200/80 p-6 -mt-10 ml-0 flex flex-col justify-between flex-1 min-h-[190px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-[#DCE7F1]">
                                            <div>
                                                <h3 className="font-serif text-xl font-bold text-brand-purple mb-1 line-clamp-3">
                                                    {post.title}
                                                </h3>
                                                <div className="text-deep-blue font-semibold text-xs uppercase tracking-wider mb-3">
                                                    {post.category || 'General'}
                                                    {post.readTime ? ` · ${post.readTime}` : ''}
                                                </div>
                                                <p className="text-xs text-slate-800 leading-relaxed font-sans line-clamp-4">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-purple group-hover:text-[#0f172a] transition-colors">
                                                {post.link ? 'Read More' : 'Read Article'}
                                                <ChevronRight
                                                    size={14}
                                                    strokeWidth={2.5}
                                                    className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <Footer />
        </main>
    );
}


