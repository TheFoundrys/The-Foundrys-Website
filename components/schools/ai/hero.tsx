"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AIHero() {
  return (
    <section className="relative pt-20 pb-20 px-4 min-h-screen flex flex-col justify-center items-center bg-slate-900 overflow-hidden text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/images/program-bg/ai-hero.png"
                alt="AI Neural Network Background"
                fill
                className="object-cover opacity-80 scale-105"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl flex flex-col items-center">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl"
            >
                Graduate with <br/>
                Mastery, Vision & <br/>
                Real-World Impact.
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-10"
            >
                Not just code. A 3-year immersion into Neural Networks, MLOps, and Large Scale Systems. 
                Built by Engineers, for future Architects.
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center"
            >
                 <Link href="/apply" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 block">
                    APPLY FOR PROGRAM
                </Link>
                 <button 
                    onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                 >
                    VIEW SYLLABUS
                </button>
            </motion.div>
        </div>
    </section>
  );
}
