"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Loader2, Play } from 'lucide-react';
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
  mainImage: any;
  category: string;
  readTime: string;
  excerpt?: string; 
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

export default function BlogListingPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const { scrollY } = useScroll();
    
    // Parallax effect for hero
    const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(POSTS_QUERY);
                setPosts(data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
            <Navbar />
            
            {/* Full Screen Landscape Hero */}
            <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                <motion.div 
                    style={{ y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="/resources-landscape.png" 
                        alt="Futuristic Landscape" 
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/90" />
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                </motion.div>

                <motion.div 
                    style={{ opacity }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
                >
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="glass-card inline-block px-4 py-1 rounded-full text-cyan-700 font-mono text-xs tracking-widest uppercase mb-6"
                    >
                        // Signal Detected
                    </motion.div> */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight drop-shadow-xl"
                    >
                        Horizon <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Zero</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-slate-800 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-sm"
                    >
                        Mapping the topography of tomorrow. Deep technical insights from the edge of innovation.
                    </motion.p>
                </motion.div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest">Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
                </motion.div>
            </div>

            {/* Content Context Bar */}
             <section className="relative z-20 -mt-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-cyan-900/5 border border-white/50 flex flex-wrap md:flex-nowrap justify-between gap-8 items-center">
                        <div>
                             <h3 className="text-xl font-bold text-slate-900">Why Navigate This?</h3>
                             <p className="text-slate-500 text-sm mt-1">Curated knowledge for the modern architect.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {['Architecture', 'Cybernetics', 'Philosophy'].map((tag) => (
                                <span key={tag} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-cyan-50 hover:text-cyan-700 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="relative z-10 py-32 px-4 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-slate-400 font-mono text-sm uppercase tracking-widest">Transmissions</span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <p>No transmissions received yet.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, idx) => (
                                <Link href={`/resources/${post.slug.current}`} key={post._id} className="group">
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
                                                    src={urlForImage(post.mainImage).url()} 
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
                                                Read Article <ArrowRight size={16} className="ml-2 text-cyan-500" />
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
