"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Laptop, BookOpen, Users, Network } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CompassFeature() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Content */}
                <div>
                    <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
                        The Operating System for Learning
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Compass.</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                        A unified platform for your entire academic journey. From live lectures and assignments to peer collaboration and career support Compass is your digital campus.
                    </p>

                    <div className="flex flex-col gap-6 mb-10">
                        <FeatureRow icon={<Laptop />} title="Live Interactive Classes" desc="HD streaming with real-time doubt clearing." />
                        <FeatureRow icon={<BookOpen />} title="AI-Powered Library" desc="Access thousands of resources curated for you." />
                        <FeatureRow icon={<Users />} title="Peer Community" desc="Collaborate on projects with students worldwide." />
                    </div>

                    <Link 
                        href="https://compass.thefoundrys.com" 
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                        Launch Compass <ArrowUpRight size={18} />
                    </Link>
                </div>

                {/* Visual / Mockup */}
                <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur-sm aspect-video group">
                        {/* Placeholder for Compass UI - Using a gradient/abstract rep for now */}
                         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg shaodw-blue-500/50">
                                    <Network size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Compass Portal</h3>
                                <p className="text-sm text-slate-500 mt-2">Student Dashboard</p>
                            </div>
                         </div>
                         
                         {/* Floating UI Elements */}
                         <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-48 p-4 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700 shadow-xl"
                         >
                             <div className="h-2 w-24 bg-slate-600 rounded mb-2"></div>
                             <div className="h-2 w-16 bg-slate-700 rounded"></div>
                         </motion.div>

                         <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 w-56 p-4 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700 shadow-xl"
                         >
                              <div className="h-2 w-full bg-slate-600 rounded mb-2"></div>
                              <div className="h-2 w-32 bg-slate-700 rounded"></div>
                         </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

function FeatureRow({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-slate-800 text-blue-400 mt-1">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-white mb-1">{title}</h4>
                <p className="text-sm text-slate-400">{desc}</p>
            </div>
        </div>
    )
}
