"use client";
import { User, Briefcase, Zap, Star, ArrowRight, CheckCircle2 } from "lucide-react";

export function ValueProposition() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Two Roads to Mastery.</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Designed for different stages of your professional journey. <br />
                    Choose the path that aligns with your career velocity.
                </p>
            </div>

            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
                
                {/* Track 1: Foundations */}
                <div className="group relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <User size={200} className="text-blue-600" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                            <User size={32} />
                        </div>
                        <div className="flex-grow">
                             <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-3xl font-bold text-slate-900">Professional Foundations</h3>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">Builder Track</span>
                             </div>
                             <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-2xl">
                                Focus on <strong className="text-slate-900">applied skills</strong> and <strong className="text-slate-900">core competency</strong>. Ideal for engineers, product managers, and early-stage founders who need to understand the &quot;How&quot; and &quot;What&quot; of emerging technologies.
                             </p>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                                    <span className="text-slate-700"><strong>3-Month Fast Track:</strong> Rapid upskilling without career modification.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                                    <span className="text-slate-700"><strong>Portfolio Ready:</strong> Build real-world projects for your CV.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-blue-500 mt-1 shrink-0" />
                                    <span className="text-slate-700"><strong>Technical Deep Dive:</strong> Learn the mechanics behind the hype.</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Track 2: Executive */}
                <div className="group relative bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-800 hover:border-amber-500/30 transition-all duration-300 text-white overflow-hidden">
                     {/* Decorative gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/50" />
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <Briefcase size={200} className="text-amber-500" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                            <Briefcase size={32} />
                        </div>
                        <div className="flex-grow">
                             <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-3xl font-bold text-white">Executive Leadership</h3>
                                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider rounded-full">C-Suite Track</span>
                             </div>
                             <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                                Focus on <strong className="text-white">organizational impact</strong> and <strong className="text-white">strategic vision</strong>. Ideal for VPs, Directors, and C-Level executives who need to define the &quot;Why&quot; and &quot;When&quot; of implementation.
                             </p>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Star size={20} className="text-amber-500 mt-1 shrink-0" />
                                    <span className="text-slate-300"><strong>Capstone Strategy:</strong> Develop an implementation roadmap for your firm.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star size={20} className="text-amber-500 mt-1 shrink-0" />
                                    <span className="text-slate-300"><strong>Peer Network:</strong> Connect with fellow leaders facing similar challenges.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Star size={20} className="text-amber-500 mt-1 shrink-0" />
                                    <span className="text-slate-300"><strong>ROI Focus:</strong> Measure the business value of technology adoption.</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
