"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
        _id: "blog-14",
        title: "Lessons From Building in the Real World",
        slug: { current: "lessons-from-building-real-world" },
        publishedAt: "2026-08-27T12:00:00Z",
        mainImage: { static: true, url: "/images/lessons_building_real_world_cover.jpg" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "What Founders Learn About Risk, Resilience, People, and Turning Ideas Into Impact. Building something from scratch sounds exciting, but the real world rarely follows the plan. Discover key insights from the founder's journey.",
        link: "https://www.linkedin.com/pulse/lessons-from-building-real-world-the-foundry-s-cu68c"
    },
    {
        _id: "blog-13",
        title: "AI in Action",
        slug: { current: "ai-in-action" },
        publishedAt: "2026-08-26T12:00:00Z",
        mainImage: { static: true, url: "/images/ai_in_action_cover.jpg" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "Real Tools. Real Impact. Real Jobs. Discover how tools like ChatGPT, GitHub Copilot, Midjourney, Notion AI, and Zapier AI are accelerating productivity and transforming career opportunities across industries.",
        link: "https://www.linkedin.com/pulse/ai-action-the-foundry-s-hhz0c"
    },
    {
        _id: "blog-12",
        title: "Inside a Tech Giant",
        slug: { current: "inside-a-tech-giant" },
        publishedAt: "2026-08-26T10:00:00Z",
        mainImage: { static: true, url: "/images/inside_tech_giant_cover.jpg" },
        category: "Blog",
        readTime: "6 min",
        excerpt: "Career Opportunities, Skills, and Roles Shaping the Future. Discover what it takes to build products used by millions and how AI, Software Engineering, Cloud, Cybersecurity, Data, and Product teams collaborate inside tech giants.",
        link: "https://www.linkedin.com/pulse/inside-tech-giant-the-foundry-s-ajt2c"
    },
    {
        _id: "blog-11",
        title: "LLMs, Simplified",
        slug: { current: "llms-simplified" },
        publishedAt: "2026-08-20T15:30:00Z",
        mainImage: { static: true, url: "/images/llms_simplified_cover.jpg" },
        category: "Blog",
        readTime: "7 min",
        excerpt: "What Large Language Models Are, How They Work, and Where We Use Them. Artificial Intelligence has moved from research laboratories into our everyday lives. Discover how LLMs process, generate, and transform information across modern industries.",
        link: "https://www.linkedin.com/pulse/llms-simplified-the-foundry-s-5wvfc"
    },
    {
        _id: "blog-10",
        title: "Why Your Strategy Fails Without a Story",
        slug: { current: "why-your-strategy-fails-without-a-story" },
        publishedAt: "2026-08-20T12:00:00Z",
        mainImage: { static: true, url: "/images/why_your_strategy_fails_without_story_cover.jpg" },
        category: "Blog",
        readTime: "6 min",
        excerpt: "In the high-stakes world of technology, we have a fetish for the 'fix.' When revenue dips, churn increases, or a product launch falls flat, the corporate machine springs into action. Discover why strategy fails without a compelling story.",
        link: "https://www.linkedin.com/pulse/why-your-strategy-fails-without-story-the-foundry-s-4lqdc"
    },
    {
        _id: "blog-9",
        title: "Resume Smarter for Tech Roles",
        slug: { current: "resume-smarter-for-tech-roles" },
        publishedAt: "2026-08-20T10:00:00Z",
        mainImage: { static: true, url: "/images/resume_smarter_tech_roles_cover.jpg" },
        category: "Blog",
        readTime: "4 min",
        excerpt: "What to Highlight — And the Common Mistakes to Avoid. Your resume is more than a document listing your education and experience. It is often your first professional impression. Discover how to communicate your technical skills effectively to stand out, get interviewed, and get hired.",
        link: "https://www.linkedin.com/pulse/resume-smarter-tech-roles-the-foundry-s-wtixc"
    },
    {
        _id: "blog-8",
        title: "The Developer Toolkit: Git, Docker, Postman & VS Code",
        slug: { current: "the-developer-toolkit" },
        publishedAt: "2026-08-19T06:00:00Z",
        mainImage: { static: true, url: "/images/developer_toolkit_cover.jpg" },
        category: "Blog",
        readTime: "4 min",
        excerpt: "Git, Docker, Postman & VS Code — Tools That Turn Ideas into Working Software. Great software is rarely built with a single tool. From the first line of code to testing, deployment, collaboration, and maintenance, discover how developers leverage these essential tools to build faster.",
        link: "https://www.linkedin.com/pulse/developer-toolkit-the-foundry-s-klmyc"
    },
    {
        _id: "blog-7",
        title: "Moving Beyond the Lecture Hall: A Shift in Learning Approaches",
        slug: { current: "moving-beyond-lecture-hall-shift-learning-approaches" },
        publishedAt: "2026-08-19T04:30:00Z",
        mainImage: { static: true, url: "/images/moving_beyond_lecture_hall_cover.png" },
        category: "Blog",
        readTime: "3 min",
        excerpt: "For decades, traditional higher education prescribed a simple formula: get a rank, sit in lectures for four years, and earn a degree. Discover the paradigm shift towards hands-on, applied deep-tech learning that prepares students for modern industry challenges.",
        link: "https://www.linkedin.com/pulse/moving-beyond-lecture-hall-shift-learning-approaches-the-foundry-s-0vxoc"
    },
    {
        _id: "blog-6",
        title: "We Are Producing Degrees for a World That No Longer Exists",
        slug: { current: "we-are-producing-degrees-for-a-world-that-no-longer-exists" },
        publishedAt: "2026-08-18T16:00:00Z",
        mainImage: { static: true, url: "/images/producing_degrees_world_longer_exists_cover.jpg" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "Traditional higher education systems are conferring degrees tailored for yesterday's industrial workforce. In an age dominated by generative AI and rapid technological disruption, discover how applied deep-tech education is bridging the gap.",
        link: "https://www.linkedin.com/pulse/we-producing-degrees-world-longer-exists-the-foundry-s-gu9uc"
    },
    {
        _id: "blog-5",
        title: "Cybersecurity, Simplified: Protecting Our Digital World",
        slug: { current: "cybersecurity-simplified-protecting-our-digital-world" },
        publishedAt: "2026-08-18T14:00:00Z",
        mainImage: { static: true, url: "/images/cybersecurity_simplified_cover.jpg" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "Cybersecurity is no longer just an IT concern—it is a critical pillar of digital trust. Learn the foundational concepts of cybersecurity, threat landscapes, and how modern organizations protect their digital infrastructure.",
        link: "https://www.linkedin.com/pulse/cybersecurity-simplified-protecting-our-digital-world-the-foundry-s-bdqfc"
    },
    {
        _id: "blog-4",
        title: "Skills That Command the Market",
        slug: { current: "skills-that-command-the-market" },
        publishedAt: "2026-08-18T12:00:00Z",
        mainImage: { static: true, url: "/images/skills_command_market_cover.jpg" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "In an era driven by rapid technological shifts and AI adoption, discover the high-impact skills that command the tech market and how builders can future-proof their careers.",
        link: "https://www.linkedin.com/pulse/skills-command-market-the-foundry-s-adyac"
    },
    {
        _id: "blog-3",
        title: "Top 5 Deep Tech Roles in Demand — And How to Prepare for Them",
        slug: { current: "top-5-deep-tech-roles-in-demand-how-to-prepare-for-them" },
        publishedAt: "2026-08-18T10:00:00Z",
        mainImage: { static: true, url: "/images/top_5_deep_tech_roles_cover.jpg" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "Deep Tech is reshaping industries worldwide—from AI & Agentic Systems to Quantum Computing and Cybersecurity. Discover the top 5 high-demand deep tech roles and the exact roadmap to prepare for them.",
        link: "https://www.linkedin.com/pulse/top-5-deep-tech-roles-demand-how-prepare-them-the-foundry-s-z2nuc"
    },
    {
        _id: "blog-2",
        title: "Debunking AI Myths: Understanding the Reality Through Practical Examples",
        slug: { current: "debunking-ai-myths-understanding-reality-through-practical-examples" },
        publishedAt: "2026-08-13T17:00:03Z",
        mainImage: { static: true, url: "/images/debunking_ai_myths_cover.jpg" },
        category: "Blog",
        readTime: "4 min",
        excerpt: "AI is powerful—but how much of what we believe about AI is actually true? From 'AI will replace all jobs' to 'AI is always 100% accurate,' we separate 5 common AI myths from reality using practical, real-world examples.",
        link: "https://www.linkedin.com/pulse/debunking-ai-myths-understanding-reality-through-practical-4j1cc"
    },
    {
        _id: "blog-1",
        title: "Building the Future: A Message from the Founder of The Foundry's",
        slug: { current: "building-the-future-message-from-founder" },
        publishedAt: "2026-03-12T00:00:00Z",
        mainImage: { static: true, url: "/images/building_the_future_cover.png" },
        category: "Blog",
        readTime: "5 min",
        excerpt: "We are living in one of the most exciting eras of human progress. Technology is advancing at an unprecedented pace, industries are being reimagined, and the world is calling for a new generation of builders, thinkers, and leaders who are ready to shape what comes next.",
        link: "https://www.linkedin.com/pulse/building-future-message-from-founder-foundrys-the-foundry-s-ynhrc"
    }
];

export function BlogClient() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState<'blog' | 'research'>('blog');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(POSTS_QUERY);
                const staticPosts = [...STATIC_BLOG_POSTS, ...STATIC_RESEARCH_POSTS];
                const staticSlugs = new Set(staticPosts.map(p => p.slug?.current));
                const filteredSanity = (data || []).filter((p: Post) =>
                    !staticSlugs.has(p.slug?.current) &&
                    !p.title?.toLowerCase().includes("producing degrees") &&
                    !p.slug?.current?.includes("producing-degrees") &&
                    !p.title?.toLowerCase().includes("moving beyond") &&
                    !p.slug?.current?.includes("moving-beyond")
                );
                setPosts([...staticPosts, ...filteredSanity]);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setPosts([...STATIC_BLOG_POSTS, ...STATIC_RESEARCH_POSTS]);
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
                setSelectedTab('research');
            } else {
                setSelectedTab('blog');
            }
        };

        handleLocationChange();
        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    const filteredPosts = useMemo(() => {
        if (selectedTab === 'research') {
            return posts.filter(post => post.category?.toLowerCase() === 'research');
        }
        return posts.filter(post => !['research', 'whitepaper', 'whitepapers'].includes(post.category?.toLowerCase() || ''));
    }, [posts, selectedTab]);

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-28 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Main Centered White Card Container matching About / Story page design */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white shadow-lg shadow-black/15 border border-slate-200/50 overflow-hidden mb-16">

                {/* Story / Header Section */}
                <section className="text-slate-800 p-6 sm:p-10 md:p-12 pb-5 sm:pb-6 md:pb-6 bg-white">
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#002f86] mb-4">
                        Blog & Research
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-4xl mb-6">
                        The Foundry&apos;s is a premium Finishing and Venture School at the innovation hub of Hyderabad. We bridge the gap between academic theory and the raw velocity of the deep tech industry through applied research, technical whitepapers, and field notes.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 bg-[#F1F1EC] p-1.5 border border-slate-200/80 w-fit">
                        <button
                            onClick={() => setSelectedTab("blog")}
                            className={`px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                                selectedTab === "blog"
                                    ? "bg-[#002f86] text-white shadow-xs"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            Blogs
                        </button>
                        <button
                            onClick={() => setSelectedTab("research")}
                            className={`px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                                selectedTab === "research"
                                    ? "bg-[#002f86] text-white shadow-xs"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            Research
                        </button>
                    </div>
                </section>

                {/* Blog Grid Feed Section */}
                <section id="resource-feed" className="p-6 sm:p-10 md:p-12 pt-5 sm:pt-6 md:pt-6 bg-white border-t border-slate-200/50">
                    {loading && posts.length === 0 ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-[#002f86] animate-spin" />
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 bg-[#F1F1EC] border border-dashed border-slate-200">
                            <p>No publications found for this filter.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post, idx) => (
                                <Link
                                    href={post.link || `/blog/${post.slug.current}`}
                                    key={post._id}
                                    className="group flex flex-col h-full"
                                    target={post.link ? "_blank" : undefined}
                                    rel={post.link ? "noopener noreferrer" : undefined}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex flex-col w-full h-full bg-[#F1F1EC] border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#002f86] group-hover:bg-[#E5EAF0]"
                                    >
                                        <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                                            {post.mainImage ? (
                                                <img
                                                    src={getPostImageUrl(post.mainImage)}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                                            <div>
                                                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#002f86] transition-colors leading-snug mb-2 line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <div className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-3">
                                                    {post.readTime ? `${post.readTime} read` : 'Article'}
                                                </div>
                                                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-[#002f86] group-hover:gap-2.5 transition-all">
                                                <span>{post.link ? 'Read Article' : 'Read Full Post'}</span>
                                                <ChevronRight size={14} />
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
