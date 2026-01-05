"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { Link as LinkIcon, ArrowLeft, Clock, Share2, Tag, ChevronUp, Loader2, Calendar } from 'lucide-react';
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { useParams } from 'next/navigation';
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { PortableText } from 'next-sanity';
import { triggerHaptic } from "@/lib/haptics";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    publishedAt,
    mainImage,
    category,
    readTime,
    "author": author->{name, image}
}`;

// Custom Portable Text Components
const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="my-10 relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-900/5 group">
                    <img
                        src={urlForImage(value).url()}
                        alt={value.alt || 'Post Image'}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                     {value.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-2 text-center text-xs text-slate-500">
                            {value.caption}
                        </div>
                     )}
                </div>
            );
        }
    },
    block: {
        normal: ({children}: any) => <p className="mb-6 leading-relaxed text-slate-700 text-lg antialiased">{children}</p>,
        h2: ({children}: any) => <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 tracking-tight relative pl-6 border-l-4 border-cyan-400">{children}</h2>,
        h3: ({children}: any) => <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">{children}</h3>,
        blockquote: ({children}: any) => (
            <blockquote className="border-l-4 border-cyan-500 bg-cyan-50/50 p-6 italic text-slate-700 my-10 rounded-r-xl">
                {children}
            </blockquote>
        )
    },
    marks: {
         link: ({children, value}: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a 
                    href={value.href} 
                    rel={rel} 
                    className="text-cyan-600 font-bold hover:text-cyan-500 underline decoration-cyan-400/30 underline-offset-4 transition-colors"
                >
                    {children}
                </a>
            )
         },
         code: ({children}: any) => <code className="bg-slate-100 text-cyan-700 px-1 py-0.5 rounded font-mono text-sm border border-slate-200">{children}</code>
    }
}

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (!slug) return;
        
        const fetchPost = async () => {
            try {
                const data = await client.fetch(POST_QUERY, { slug });
                setPost(data);
            } catch (error) {
                console.error("Failed to fetch post", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();

        // Mobile Vibration on Scroll (Subtle) - Smoother Logic
        let lastTick = 0;
        const handleScroll = () => {
            // Increased threshold to 450 for ultra-sparse, lighter feel (simulating <1ms density)
            const currentTick = Math.floor(window.scrollY / 600);
            if (currentTick !== lastTick) {
                 triggerHaptic(); // Standardized Haptic Call
                 lastTick = currentTick;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [slug]);

    if (loading) {
        return (
             <main className="min-h-screen bg-white font-sans">
                <Navbar />
                <div className="flex h-screen items-center justify-center">
                    <Loader2 className="animate-spin text-cyan-500 w-10 h-10" />
                </div>
             </main>
        );
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-white font-sans text-slate-900">
                <Navbar />
                <div className="flex flex-col h-screen items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-slate-300">404 // SIGNAL LOST</h1>
                    <Link href="/resources" className="text-cyan-500 hover:underline">Re-establish Link</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-200 selection:text-cyan-900 text-slate-700 relative overflow-hidden">
            <Navbar />
            
            {/* Aurora Background Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/20 via-slate-50 to-slate-50" />
                <div 
                    className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 blur-3xl animate-[aurora_60s_linear_infinite]"
                    style={{
                        background: 'conic-gradient(from 0deg at 50% 50%, #E2E8F0 0deg, #DBEAFE 60deg, #E0E7FF 120deg, #F3E8FF 180deg, #E0E7FF 240deg, #DBEAFE 300deg, #E2E8F0 360deg)'
                    }}
                />
            </div>

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 origin-left z-50 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                style={{ scaleX }}
            />

            {/* Article Container with Glass Effect */}
            <div className="relative z-10 pt-32 pb-24 px-4 container mx-auto max-w-4xl">
                
                {/* Header Section */}
                <header className="mb-12 text-center relative">
                     <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-slate-500 hover:text-cyan-600 mb-8 transition-colors group uppercase tracking-[0.2em] px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-white/80">
                         <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                         Return to Grid
                     </Link>

                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 mb-8 leading-tight tracking-tight drop-shadow-sm">
                         {post.title}
                     </h1>

                     <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-500 bg-white/40 backdrop-blur-sm inline-flex px-6 py-3 rounded-2xl border border-white/50 shadow-sm">
                         {post.author && (
                             <span className="flex items-center gap-2">
                                 {post.author.image && (
                                     <img 
                                        src={urlForImage(post.author.image).width(100).url()} 
                                        alt={post.author.name} 
                                        className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm"
                                     />
                                 )}
                                 <span className="text-slate-800 font-bold">{post.author.name}</span>
                             </span>
                         )}
                         {post.publishedAt && (
                             <>
                                <div className="h-4 w-px bg-slate-300/50" />
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-slate-400" />
                                    {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                             </>
                         )}
                         <div className="h-4 w-px bg-slate-300/50" />
                         <span className="flex items-center gap-1.5">
                             <Clock size={14} className="text-cyan-600" />
                             {post.readTime || '5 min read'}
                         </span>
                         <div className="h-4 w-px bg-slate-300/50" />
                         <span className="flex items-center gap-1.5 text-cyan-700 bg-cyan-50/80 px-2.5 py-0.5 rounded-md border border-cyan-100/50">
                             <Tag size={12} />
                             {post.category || 'General'}
                         </span>
                     </div>
                </header>

                {/* Main Content Glass Card */}
                <article className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60 relative overflow-hidden ring-1 ring-white/80">
                    
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                    {post.mainImage && (
                        <div className="mb-14 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/5 relative group transform transition-transform hover:scale-[1.01] duration-700">
                             <img 
                                src={urlForImage(post.mainImage).url()} 
                                alt={post.title} 
                                className="w-full h-auto"
                            />
                            {/* Image Glint */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    )}

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-loose prose-a:text-cyan-600 hover:prose-a:text-cyan-500 prose-img:rounded-2xl prose-img:shadow-lg relative z-10">
                        <PortableText 
                            value={post.body} 
                            components={ptComponents}
                        />
                    </div>

                    {/* Footer / Share */}
                    <div className="mt-20 pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                        <div className="text-slate-400 text-xs font-mono tracking-widest uppercase">
                            // END OF TRANSMISSION
                        </div>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-slate-600 hover:text-white hover:bg-slate-900 transition-all font-bold px-6 py-3 rounded-full bg-slate-100/50 active:scale-95 duration-200 shadow-sm hover:shadow-lg">
                                <Share2 size={16} /> Share Protocol
                            </button>
                        </div>
                    </div>
                </article>

            </div>

            <Footer />
        </main>
    );
}
