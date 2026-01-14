"use client";
import { User, Briefcase, ArrowDown, Sparkles, BrainCircuit } from "lucide-react";
import Link from "next/link";

export function ProgramPathways() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-20 -mt-12 pb-12 px-6">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                
                {/* Pathway 1: Foundations */}
                <div 
                    onClick={() => scrollToSection('fundamentals')}
                    className="group cursor-pointer relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                         <BrainCircuit size={140} className="text-blue-600" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <User size={28} />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Professional Foundations</h3>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">
                             For students and professionals seeking to master the core technologies of tomorrow.
                        </p>

                        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm">
                            Explore Courses <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Pathway 2: Executive */}
                <div 
                    onClick={() => scrollToSection('executive')}
                    className="group cursor-pointer relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-10 shadow-2xl border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Sparkles size={140} className="text-amber-400" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Briefcase size={28} />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Executive Leadership</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
                             For senior leaders and C-Suite executives driving organizational strategy and transformation.
                        </p>

                        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm">
                            View Executive Suite <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
