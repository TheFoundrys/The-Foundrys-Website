"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  Cpu, 
  Scale, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Users,
  Leaf,
  Layers,
  BarChart,
  BookOpen,
  Anchor
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

export default function SustainabilityClient() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-stone-50 text-stone-900 min-h-screen selection:bg-emerald-200 selection:text-emerald-900 font-sans">
      <Navbar />

      {/* HERO SECTION: DARK THEME (Preserved) */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-950 pb-40 md:pb-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.4]"></div>
          <div className="absolute inset-0 bg-neutral-950/50"></div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Minimalist Crest */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex justify-center"
            >
              <div className="w-16 h-16 border border-emerald-500/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-emerald-950/30 shadow-lg">
                 <Leaf className="text-emerald-400" size={24} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none"
            >
              Engineering <br/>
              <span className="italic text-emerald-100/90">Responsibility</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Sustainability in the Age of AI
              <span className="block text-sm md:text-base mt-4 text-neutral-400 font-sans tracking-wide">
                A 4-week systems program for professionals shaping the future of technology, climate, and governance.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Program Details Block */}
      <div className="relative z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
            <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 flex-1 text-center md:text-left w-full">
                    <div className="border-r border-stone-100 last:border-0 pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Duration</p>
                        <p className="text-lg font-bold text-stone-900">4 Weeks</p>
                    </div>
                    <div className="border-r border-stone-100 last:border-0 pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                        <p className="text-lg font-bold text-stone-900">Hybrid</p>
                    </div>
                    <div className="border-r border-stone-100 last:border-0 pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                        <p className="text-lg font-bold text-stone-900">16 February 2026</p>
                    </div>
                    <div className="pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <span className="text-sm text-stone-400 line-through">₹35,000</span>
                            <span className="text-lg font-bold text-stone-900">₹25,000</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="w-full md:w-auto">
                    <Link href="/apply" className="block w-full text-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
      </div>

      {/* WHY THIS COHORT EXISTS */}
      <section className="pt-40 pb-24 md:py-24 bg-white relative overflow-hidden border-t border-stone-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border-l border-emerald-200 pl-8 md:pl-16 relative">
             <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-emerald-600 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,1)] ring-1 ring-emerald-200"></div>
             
             <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12">Why This Cohort Exists</h2>

             <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-8">
                   <h3 className="text-2xl text-stone-800 mb-8 font-light italic leading-snug">
                      The tension between acceleration and sustainability will define the next decade.
                   </h3>
                   
                   <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                      <p>
                        AI is accelerating everything growth, efficiency, consumption, extraction.
                        Sustainability is trying to slow things down emissions, waste, inequality, collapse.
                      </p>
                      <p>
                        Most professionals are trained in either technology or sustainability.
                        Very few are trained to <span className="text-emerald-700 font-medium">think in systems</span>, understand trade-offs, and make AI-era decisions responsibly.
                      </p>
                      <p className="font-medium text-stone-900">
                        This cohort exists to close that gap.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* WHO THIS COHORT IS FOR */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Who This Cohort Is For</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                 No deep coding background required. Systems thinking required and trained.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                 { title: "Future-Ready Careers", desc: "Entry-level professionals building future-ready careers.", icon: Users },
                 { title: "Mid-Career Navigators", desc: "Mid-career professionals navigating AI-driven disruption.", icon: Anchor },
                 { title: "Upgraders", desc: "Sustainability, ESG, policy, and climate professionals upgrading into AI literacy.", icon: Leaf },
                 { title: "Cross-Functional", desc: "Engineers, analysts, consultants, and managers moving into cross-functional roles.", icon: Layers }
              ].map((item, i) => (
                 <div key={i} className="bg-white p-8 border border-stone-200 shadow-sm hover:border-emerald-300 transition-all hover:shadow-md group">
                    <item.icon size={28} className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-serif text-stone-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">{item.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* COHORT FORMAT */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-12 text-center">Cohort Format</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-100">
               {[
                  { label: "Duration", value: "4 Weeks" },
                  { label: "Commitment", value: "~8–11 hrs/week" },
                  { label: "Mode", value: "Hybrid" },
                  { label: "Style", value: "20% Theory, 80% Applied" }
               ].map((stat, i) => (
                  <div key={i} className="px-4">
                     <p className="text-3xl text-emerald-700 font-serif mb-2">{stat.value}</p>
                     <p className="text-xs text-stone-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CURRICULUM: WEEK BY WEEK */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
         <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-16 text-center">What You’ll Learn</h2>
            
            <div className="space-y-6">
               {[
                  {
                     week: "Week 1",
                     title: "Sustainability as a System, Not a Slogan",
                     focus: ["Understand sustainability as an interconnected system", "Learn why most ESG and 'green AI' efforts fail", "Build shared language across business, tech, and governance"],
                     outcome: "You stop thinking in silos and start seeing leverage points."
                  },
                  {
                     week: "Week 2",
                     title: "The Hidden Environmental Cost of AI",
                     focus: ["Analyze AI’s carbon, water, and energy footprint", "Understand model scale and efficiency trade-offs", "Learn when NOT to use AI"],
                     outcome: "You can evaluate AI decisions beyond hype and benchmarks."
                  },
                  {
                     week: "Week 3",
                     title: "AI for Sustainability: From Insight to Impact",
                     focus: ["Explore real-world AI use cases in climate & energy", "Learn impact-driven evaluation metrics", "Design AI systems that improve sustainability outcomes"],
                     outcome: "You move from awareness to applied, defensible solutions."
                  },
                  {
                     week: "Week 4",
                     title: "Governance, Ethics, and the Future",
                     focus: ["Understand AI regulation and ESG frameworks", "Learn how sustainability influences funding and strategy", "Design governance-aware AI systems"],
                     outcome: "You gain strategic credibility not just technical literacy."
                  }
               ].map((module, i) => (
                  <div key={i} className="bg-white p-8 md:p-10 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 hover:border-emerald-300 transition-colors">
                     <div className="md:w-1/4 shrink-0">
                        <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase block mb-2">{module.week}</span>
                        <h3 className="text-xl font-serif text-stone-900 leading-tight">{module.title}</h3>
                     </div>
                     <div className="md:w-3/4">
                        <ul className="space-y-2 mb-6 text-stone-600 font-light text-sm">
                           {module.focus.map((item, j) => (
                              <li key={j} className="flex gap-2 items-start">
                                 <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                        <div className="bg-stone-50 p-4 border-l-2 border-emerald-500">
                           <p className="text-stone-900 text-sm font-medium">Outcome: <span className="font-light text-stone-600">{module.outcome}</span></p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CAPSTONE & TOOLS */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Capstone */}
               <div>
                  <h2 className="text-3xl font-serif text-stone-900 mb-8">Capstone Project</h2>
                  <div className="bg-stone-900 text-stone-300 p-8 rounded-sm shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-20">
                        <ShieldCheck size={64} className="text-emerald-500" />
                     </div>
                     <h3 className="text-xl text-white font-medium mb-4 relative z-10">Designing a Sustainable AI System</h3>
                     <p className="text-sm font-light mb-6 opacity-80 leading-relaxed relative z-10">
                        Each participant designs a real-world solution including problem framing, AI justification, impact assessment, and a governance model.
                     </p>
                     <p className="text-xs text-emerald-400 uppercase tracking-widest mb-4">Themes</p>
                     <div className="flex flex-wrap gap-2 relative z-10">
                        {["Climate Risk", "Water Mgmt", "Energy Opt", "Supply Chains", "ESG Analytics"].map((tag, t) => (
                           <span key={t} className="px-2 py-1 bg-stone-800 text-stone-400 text-xs border border-stone-700">{tag}</span>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Tools */}
               <div>
                  <h2 className="text-3xl font-serif text-stone-900 mb-8">Tools & Frameworks</h2>
                  <div className="grid grid-cols-1 gap-4">
                     {[
                        "Systems mapping (Miro / FigJam)",
                        "Sustainability datasets (IPCC, World Bank)",
                        "AI impact estimation (CodeCarbon)",
                        "Python notebooks for applied analysis",
                        "ESG and governance frameworks"
                     ].map((tool, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 border border-stone-200 bg-stone-50">
                           <div className="w-8 h-8 flex items-center justify-center bg-white border border-stone-200 rounded text-emerald-600">
                              <Cpu size={16} />
                           </div>
                           <span className="text-stone-700 text-sm font-light">{tool}</span>
                        </div>
                     ))}
                  </div>
                  <p className="mt-4 text-xs text-stone-400 italic text-center">This is tool usage in service of thinking, not tool worship.</p>
               </div>
            </div>
         </div>
      </section>

      {/* WHAT YOU WALK AWAY WITH */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">What You Walk Away With</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <h3 className="text-lg font-medium text-stone-900 border-b border-stone-200 pb-2">Competencies</h3>
                  <ul className="space-y-4">
                     {[
                        "Think like a systems designer, not a feature builder",
                        "Speak fluently across AI, sustainability, and governance",
                        "Evaluate AI decisions using impact not just performance",
                        "Be credible in cross-functional and leadership discussions"
                     ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-stone-600 font-light">
                           <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="space-y-6">
                  <h3 className="text-lg font-medium text-stone-900 border-b border-stone-200 pb-2">Career Impact</h3>
                   <div className="space-y-4 text-sm leading-relaxed">
                      <div>
                         <strong className="block text-stone-900">Entry-Level</strong>
                         <span className="text-stone-600 font-light">Gain rare strategic context early before habits harden.</span>
                      </div>
                      <div>
                         <strong className="block text-stone-900">Mid-Career</strong>
                         <span className="text-stone-600 font-light">Future-proof your relevance in an AI-shaped economy.</span>
                      </div>
                      <div>
                         <strong className="block text-stone-900">Leaders</strong>
                         <span className="text-stone-600 font-light">Gain language to bridge engineers, executives, and regulators.</span>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Sample Certificate */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8">Certification of Competence</h2>
            
            <div className="max-w-2xl mx-auto">
                <div className="relative p-3 bg-stone-50 border border-stone-100 rounded-2xl shadow-xl">
                    <img 
                        src="/sample-certificate.png" 
                        alt="Sample Certificate" 
                        className="w-full h-auto rounded-lg shadow-sm relative z-10"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-500/10 rounded-full blur-3xl" />
                </div>
            </div>

            <p className="mt-8 text-stone-500 font-light text-sm max-w-2xl mx-auto">
                Upon passing the capstone review, you will be awarded a Certificate of Competence in Sustainable AI Systems, verifiable via our industry partners.
            </p>
         </div>
      </section>

      {/* ABOUT THE FOUNDRY & CTA */}
      <section className="py-32 bg-emerald-950 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <h2 className="text-3xl font-serif text-white mb-6">About The Foundry’s</h2>
            <div className="text-lg text-emerald-100/80 font-light leading-relaxed mb-12 space-y-4">
               <p>The Foundry’s is not a school. It is a systems institution.</p>
               <p>We design learning experiences at the intersection of deep technology, real-world economics, and societal impact.</p>
               <p className="text-white font-medium">Our cohorts are built for people who want to shape systems, not just operate inside them.</p>
            </div>

            <div className="pt-8 border-t border-emerald-800/50">
               <div className="flex flex-col items-center mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-200/50 line-through text-2xl font-light">₹30,000</span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/30">Early Access Offer</span>
                  </div>
                  <div className="text-6xl font-serif text-white mb-2">₹25,000</div>
                  <p className="text-emerald-200/60 text-sm font-light">Inclusive of all taxes & certification fees</p>
               </div>

               <h3 className="text-4xl md:text-5xl font-serif text-white mb-10">Build the Future. Responsibly.</h3>
               <Link href="/apply" className="px-10 py-5 bg-white text-emerald-950 font-medium tracking-wide hover:bg-emerald-50 transition-colors shadow-lg inline-block">
                  APPLY NOW
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
