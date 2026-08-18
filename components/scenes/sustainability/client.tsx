"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRegionalPricing, COURSE_PRICING } from "@/lib/useRegionalPricing";
import {
   Leaf,
   Layers,
   BarChart,
   BookOpen,
   Anchor,
   BrainCircuit,
   ChevronDown,
   Globe,
   Scale,
   Zap,
   CheckCircle2,
   Users,
   HelpCircle
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { AnimatePresence } from "framer-motion";

import { RoleDetailsContent } from "@/components/role-details-content";
import { SyllabusMindMap } from "@/components/ui/syllabus-mind-map";

// CAREER ROLES DATA
const CAREER_ROLES = [
   {
      icon: Layers,
      title: "Sustainability Systems Architect",
      salary: "₹7-12 LPA",
      growth: "+15-20% YoY",
      desc: "Design and implement comprehensive sustainability frameworks for organizations. Bridge technology, policy, and environmental impact.",
      skills: ["Systems Thinking", "ESG Frameworks", "Data Analysis", "Stakeholder Management"],
      responsibilities: [
         "Architect end-to-end sustainability monitoring systems",
         " Integrate IoT and AI data streams for real-time tracking",
         "Develop carbon reduction roadmaps",
         "Align technical architecture with ESG goals"
      ]
   },
   {
      icon: BarChart,
      title: "ESG & AI Strategy Consultant",
      salary: "₹6-11 LPA",
      growth: "+18-25% YoY",
      desc: "Guide organizations in integrating AI solutions with ESG goals. Develop strategies that balance innovation with responsibility.",
      skills: ["ESG Reporting", "AI Strategy", "Risk Assessment", "Regulatory Compliance"],
      responsibilities: [
         "Advise C-suite on AI-driven sustainability strategies",
         "Ensure compliance with global ESG standards",
         "Conduct algorithmic impact assessments",
         "Develop responsible AI governance frameworks"
      ]
   },
   {
      icon: Globe,
      title: "Climate Tech Product Leader",
      salary: "₹8-14 LPA",
      growth: "+20-30% YoY",
      desc: "Lead development of climate-focused technology products. Drive innovation in renewable energy, carbon tracking, and environmental monitoring.",
      skills: ["Product Management", "Climate Science", "Tech Innovation", "Market Analysis"],
      responsibilities: [
         "Define product vision for climate-tech solutions",
         "Manage product lifecycle from concept to launch",
         "Analyze market trends in green technology",
         "Collaborate with engineering and data teams"
      ]
   },
   {
      icon: Scale,
      title: "AI Governance Specialist",
      salary: "₹6-12 LPA",
      growth: "+16-22% YoY",
      desc: "Ensure AI systems comply with ethical standards and regulations. Develop governance frameworks for responsible AI deployment.",
      skills: ["AI Ethics", "Policy Development", "Compliance", "Risk Management"],
      responsibilities: [
         "Audit AI models for bias and fairness",
         "Develop internal AI use policies",
         "Monitor regulatory landscape for AI",
         "Conduct risk assessments for new AI deployments"
      ]
   },
   {
      icon: Zap,
      title: "Energy & Resource Optimizer",
      salary: "₹5-10 LPA",
      growth: "+14-18% YoY",
      desc: "Optimize energy consumption and resource utilization using AI and data analytics. Drive efficiency in operations and reduce environmental footprint.",
      skills: ["Energy Systems", "Optimization", "IoT", "Data Analytics"],
      responsibilities: [
         "Analyze energy usage patterns using AI",
         "Implement predictive maintenance for infrastructure",
         "Optimize resource allocation algorithms",
         "Report on energy savings and efficiency gains"
      ]
   },
   {
      icon: BookOpen,
      title: "Sustainability Educator & Advisor",
      salary: "₹4-8 LPA",
      growth: "+12-16% YoY",
      desc: "Train professionals and advise organizations on sustainability practices. Build capacity for sustainable transformation across industries.",
      skills: ["Training & Development", "Sustainability Practices", "Communication", "Advisory"],
      responsibilities: [
         "Develop curriculum for sustainability workshops",
         "Mentor teams on sustainable coding practices",
         "Create awareness campaigns for green tech",
         "Facilitate knowledge sharing across departments"
      ]
   },
   {
      icon: BrainCircuit,
      title: "Circular Economy Strategist",
      salary: "₹6-11 LPA",
      growth: "+17-23% YoY",
      desc: "Design and implement circular economy models that eliminate waste and maximize resource efficiency. Transform linear business models into sustainable, regenerative systems.",
      skills: ["Circular Design", "Waste Management", "Business Model Innovation", "Life Cycle Assessment"],
      responsibilities: [
         "Design closed-loop product lifecycles",
         "Identify opportunities for waste reduction",
         "Collaborate with supply chain partners",
         "Measure impact of circular initiatives"
      ]
   }
];

const FAQ_DATA = [
   {
      question: "Do I need a deep technical background?",
      answer: "No deep coding background is required. We focus on systems thinking, AI literacy, and strategic decision-making. We provide the necessary technical context for professionals from all backgrounds."
   },
   {
      question: "Is this course relevant for non-tech roles?",
      answer: "Absolutely. Policy makers, ESG consultants, business leaders, and product managers will find this immensely valuable for navigating the AI-driven transformation of their fields."
   },
   {
      question: "What is the hybrid format?",
      answer: "The program includes both live online sessions and self-paced work, plus optional in-person networking opportunities where available."
   },
   {
      question: "Will I get a certificate?",
      answer: "Yes, upon successful completion of the capstone project, you will receive a verifiable Certificate of Competence in Sustainable AI Systems."
   }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="border border-stone-200 rounded-2xl bg-white overflow-hidden shadow-sm">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
            aria-expanded={isOpen}
         >
            <h4 className="text-lg font-bold text-stone-900 pr-8">{question}</h4>
            <ChevronDown
               className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`}
               size={20}
            />
         </button>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                     {answer}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}

const CURRICULUM_DATA = [
   {
      week: 1,
      title: "Sustainability as a System, Not a Slogan",
      topics: [
         "Understand sustainability as an interconnected system",
         "Learn why most ESG and 'green AI' efforts fail",
         "Build shared language across business, tech, and governance",
         "Outcome: You stop thinking in silos and start seeing leverage points."
      ]
   },
   {
      week: 2,
      title: "The Hidden Environmental Cost of AI",
      topics: [
         "Analyze AI's carbon, water, and energy footprint",
         "Understand model scale and efficiency trade-offs",
         "Learn when NOT to use AI",
         "Outcome: You can evaluate AI decisions beyond hype and benchmarks."
      ]
   },
   {
      week: 3,
      title: "AI for Sustainability: From Insight to Impact",
      topics: [
         "Explore real-world AI use cases in climate & energy",
         "Learn impact-driven evaluation metrics",
         "Design AI systems that improve sustainability outcomes",
         "Outcome: You move from awareness to applied, defensible solutions."
      ]
   },
   {
      week: 4,
      title: "Governance, Ethics, and the Future",
      topics: [
         "Understand AI regulation and ESG frameworks",
         "Learn how sustainability influences funding and strategy",
         "Design governance-aware AI systems",
         "Outcome: You gain strategic credibility not just technical literacy."
      ]
   }
];

export default function SustainabilityClient() {
   const containerRef = useRef(null);
   const roleRefs = useRef<(HTMLDivElement | null)[]>([]);
   const [selectedCareer, setSelectedCareer] = useState(0);
   const { symbol, currency } = useRegionalPricing();

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
   }, []);

   const originalPrice = COURSE_PRICING.sustainability.original[currency];

   return (
       <div ref={containerRef} className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-850 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
          <Navbar />

          {/* 1. TOP BANNER IMAGE SECTION */}
          <section className="relative h-[260px] md:h-[380px] mt-16 flex items-center justify-center overflow-hidden">
             <style dangerouslySetInnerHTML={{
                 __html: `
                 .school-title-white {
                     color: #ffffff !important;
                 }
                 .school-tag-white {
                     color: #ffffff !important;
                     border-color: rgba(255, 255, 255, 0.2) !important;
                     background-color: rgba(255, 255, 255, 0.1) !important;
                 }
                 `
             }} />
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 z-0 select-none">
                 <img 
                     src="/images/sustainability-ai.png" 
                     alt="Sustainability in the Age of AI Banner" 
                     className="w-full h-full object-cover brightness-[0.7]"
                 />
                 <div className="absolute inset-0 bg-black/35" />
             </div>

             <div className="container mx-auto max-w-6xl relative z-10 px-4 text-center">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-sm school-tag-white">
                     <Leaf size={14} />
                     School of Sustainability
                 </div>
                 <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase font-serif school-title-white">
                     Sustainability in the Age of AI
                 </h1>
             </div>
          </section>

          {/* 2. INTRODUCTION & SPECS SECTION (Combined into unified white card) */}
          <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white rounded-1xl shadow-lg shadow-black/15 border border-slate-200/50 mt-[30px] mb-8 overflow-hidden relative z-10">
             <section className="bg-white p-8 sm:p-12 md:p-16 text-[#1b4332]">
                <div className="container mx-auto max-w-5xl">
                   <h2 className="font-serif text-3xl font-bold leading-tight text-[#1b4332] md:text-4xl mb-6">
                      Introduction
                   </h2>
                   <p className="text-base sm:text-lg text-slate-650 leading-relaxed font-light mb-8">
                      An intensive program designed for professionals shaping the future of technology, climate, and governance. Sustainability is no longer a corporate report; it's a technical challenge. Master the intersection of AI, Climate Tech, and ESG.
                   </p>

                   {/* Quick Highlights */}
                   <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-slate-700">
                      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                         <CheckCircle2 size={18} className="text-emerald-600" />
                         <span>Industry-Recognized Certificate</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                         <CheckCircle2 size={18} className="text-emerald-600" />
                         <span>Hands-on Capstone Project</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                         <CheckCircle2 size={18} className="text-emerald-600" />
                         <span>Expert-Led Sessions</span>
                      </div>
                   </div>
                </div>
             </section>

             {/* Program Details Specs block (nested inside card on light grey bg) */}
             <div className="bg-[#F7F7F4] border-t border-slate-200/60 p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-14 flex-1 text-left w-full">
                   <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Duration</p>
                      <p className="text-base sm:text-lg font-bold text-slate-800">4 Weeks</p>
                   </div>
                   <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Delivery Mode</p>
                      <p className="text-base sm:text-lg font-bold text-slate-800">Hybrid Intensive</p>
                   </div>
                   <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#64748b' }}>Program Fee</p>
                      <p className="text-base sm:text-lg font-bold text-slate-800">{symbol}{originalPrice}</p>
                   </div>
                </div>

                <div className="w-full lg:w-auto">
                   <Link href="https://compass.thefoundrys.com/courses/sustainability/sustainability-in-the-age-of-ai" className="block w-full text-center px-8 py-3.5 bg-[#1b4332] text-white border border-[#1b4332] font-bold rounded-xl hover:bg-[#143326] transition-all hover:scale-[1.02] shadow-[0_4px_20px_rgba(27,67,50,0.15)] whitespace-nowrap text-sm">
                      Enroll Now
                   </Link>
                </div>
             </div>
          </div>

          {/* WHY THIS COHORT EXISTS + WHO IT'S FOR (Consolidated into single pastel-green card) */}
          <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#E5EFE7] border border-[#c2d8c6] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
             <section className="py-16 px-6 bg-[#E5EFE7] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                   <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                      {/* Left: Why This Cohort Exists */}
                      <div>
                         <h2 className="text-3xl md:text-4xl font-serif text-[#1b4332] font-bold mb-6">Why This Cohort Exists</h2>
                         <p className="text-lg text-slate-750 mb-8 font-light italic leading-snug">
                            The tension between acceleration and sustainability will define the next decade.
                         </p>

                         {/* Problem Cards */}
                         <div className="space-y-4">
                            <div className="border-l-4 border-red-500 bg-white p-5 rounded-r-xl border border-slate-200/50 shadow-sm">
                               <h4 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2 font-mono">The Acceleration</h4>
                               <p className="text-sm text-slate-650 font-normal leading-relaxed">
                                  AI is accelerating everything—growth, efficiency, consumption, extraction.
                                </p>
                            </div>

                            <div className="border-l-4 border-emerald-600 bg-white p-5 rounded-r-xl border border-slate-200/50 shadow-sm">
                               <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 font-mono">The Slowdown</h4>
                               <p className="text-sm text-slate-650 font-normal leading-relaxed">
                                  Sustainability is trying to slow things down—emissions, waste, inequality, collapse.
                               </p>
                            </div>

                            <div className="border-l-4 border-amber-500 bg-white p-5 rounded-r-xl border border-slate-200/50 shadow-sm">
                               <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 font-mono">The Gap</h4>
                               <p className="text-sm text-slate-650 font-normal leading-relaxed">
                                  Most professionals are trained in either technology or sustainability. Very few are trained to <span className="font-semibold text-amber-900">think in systems</span>, understand trade-offs, and make AI-era decisions responsibly.
                               </p>
                            </div>
                         </div>
                      </div>

                      {/* Right: Who This Cohort Is For */}
                      <div>
                         <h2 className="text-3xl md:text-4xl font-serif text-[#1b4332] font-bold mb-6">Who This Cohort Is For</h2>
                         <p className="text-lg text-slate-750 mb-8 font-light italic leading-snug">
                            No deep coding background required. Deep thinking required and trained.
                         </p>

                         <div className="space-y-3">
                            {[
                               { title: "Future-Ready Careers", desc: "Entry-level professionals building future-ready careers.", icon: Users },
                               { title: "Mid-Career Navigators", desc: "Mid-career professionals navigating AI-driven disruption.", icon: Anchor },
                               { title: "Upgraders", desc: "Sustainability, ESG, policy, and climate professionals upgrading into AI literacy.", icon: Leaf },
                               { title: "Cross-Functional", desc: "Engineers, analysts, consultants, and managers moving into cross-functional roles.", icon: Layers }
                            ].map((item, i) => (
                               <div key={i} className="flex items-start gap-6 bg-white p-4 border border-slate-200/60 rounded-xl shadow-sm hover:border-emerald-450 transition-all hover:shadow-md group">
                                  <div className="shrink-0">
                                     <item.icon size={22} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                                  </div>
                                  <div className="flex-1">
                                     <h3 className="text-base font-serif font-bold text-slate-900 mb-1">{item.title}</h3>
                                     <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Centered Solution Card */}
                   <div className="max-w-4xl mx-auto">
                      <div className="bg-white border border-slate-200/80 shadow-sm p-8 rounded-2xl">
                         <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                               <CheckCircle2 size={24} className="text-emerald-600" />
                            </div>
                            <div>
                               <h3 className="text-xl font-bold font-serif mb-3 text-[#1b4332]">Our Solution</h3>
                               <p className="text-slate-650 font-normal leading-relaxed text-base">
                                  This cohort exists to close that gap—training professionals to navigate the intersection of AI and sustainability with systems thinking, strategic foresight, and responsible decision-making.
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </section>
          </div>

          {/* CURRICULUM: WEEK BY WEEK */}
          <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
             <section className="py-20 px-6 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                   <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-serif text-[#1b4332] font-bold mb-4">
                         What You&apos;ll Learn
                      </h2>
                      <p className="text-base text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                         A structured 4-week journey through the sustainability and AI landscape
                      </p>
                   </div>

                   <SyllabusMindMap
                      data={CURRICULUM_DATA.map(({ week, title, topics }) => ({ period: week, title, topics }))}
                      periodLabel="Week"
                      hubTitle="SUSTAINABILITY"
                      theme="emerald"
                   />
                </div>
             </section>
          </div>

          {/* TOOLS & FRAMEWORKS */}
          <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#E5EFE7] border border-[#c2d8c6] rounded-1xl shadow-lg shadow-black/15 py-12 mt-[30px] mb-8 overflow-hidden relative">
             {/* Centered heading */}
             <div className="container mx-auto px-2 mb-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-serif text-[#1b4332] font-bold mb-4">
                   Tools & Frameworks
                </h2>
             </div>

             {/* Marquee row 1 */}
             <div className="relative py-2 overflow-hidden w-full flex flex-col gap-4">
                <motion.div
                   className="flex items-center gap-12 whitespace-nowrap will-change-transform"
                   animate={{ x: ["0%", "-50%"] }}
                   transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 120,
                      ease: "linear",
                   }}
                   style={{ width: "max-content" }}
                >
                   {[1, 2].map((i) => (
                      <div
                         key={i}
                         className="flex items-center gap-12 text-[#567bb3] font-bold text-sm md:text-lg uppercase tracking-widest"
                      >
                         <span>UN Sustainable Development Goals (SDGs)</span> <span>&bull;</span>
                         <span>Global Reporting Initiative (GRI)</span> <span>&bull;</span>
                         <span>ESG</span> <span>&bull;</span>
                         <span>Science Based Targets initiative (SBTi)</span> <span>&bull;</span>
                         <span>Carbon Disclosure Project (CDP)</span> <span>&bull;</span>
                         <span>ISO 14001</span> <span>&bull;</span>
                         <span>OpenLCA</span> <span>&bull;</span>
                         <span>Brightway</span> <span>&bull;</span>
                         <span>OpenGHG</span> <span>&bull;</span>
                         <span>Climate TRACE</span> <span>&bull;</span>
                         <span>Open Energy Platform</span> <span>&bull;</span>
                         <span>EnergyPlus</span> <span>&bull;</span>
                         <span>OpenFOAM</span> <span>&bull;</span>
                         <span>QGIS</span> <span>&bull;</span>
                         <span>OSeMOSYS</span> <span>&bull;</span>
                         <span>Calliope</span> <span>&bull;</span>
                         <span>World Bank Open Data</span> <span>&bull;</span>
                         <span>OpenStreetMap</span> <span>&bull;</span>
                         <span>Global Carbon Atlas</span> <span>&bull;</span>
                         <span>Our World in Data</span> <span>&bull;</span>
                         <span>OpenAQ</span>
                      </div>
                   ))}
                </motion.div>

                {/* Marquee row 2 */}
                <motion.div
                   className="flex items-center gap-12 whitespace-nowrap will-change-transform"
                   animate={{ x: ["-50%", "0%"] }}
                   transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 120,
                      ease: "linear",
                   }}
                   style={{ width: "max-content" }}
                >
                   {[1, 2].map((i) => (
                      <div
                         key={i}
                         className="flex items-center gap-12 text-[#567bb3] font-bold text-sm md:text-lg uppercase tracking-widest"
                      >
                         <span>UN Sustainable Development Goals (SDGs)</span> <span>&bull;</span>
                         <span>Global Reporting Initiative (GRI)</span> <span>&bull;</span>
                         <span>ESG</span> <span>&bull;</span>
                         <span>Science Based Targets initiative (SBTi)</span> <span>&bull;</span>
                         <span>Carbon Disclosure Project (CDP)</span> <span>&bull;</span>
                         <span>ISO 14001</span> <span>&bull;</span>
                         <span>OpenLCA</span> <span>&bull;</span>
                         <span>Brightway</span> <span>&bull;</span>
                         <span>OpenGHG</span> <span>&bull;</span>
                         <span>Climate TRACE</span> <span>&bull;</span>
                         <span>Open Energy Platform</span> <span>&bull;</span>
                         <span>EnergyPlus</span> <span>&bull;</span>
                         <span>OpenFOAM</span> <span>&bull;</span>
                         <span>QGIS</span> <span>&bull;</span>
                         <span>OSeMOSYS</span> <span>&bull;</span>
                          <span>Calliope</span> <span>&bull;</span>
                          <span>World Bank Open Data</span> <span>&bull;</span>
                          <span>OpenStreetMap</span> <span>&bull;</span>
                          <span>Global Carbon Atlas</span> <span>&bull;</span>
                          <span>Our World in Data</span> <span>&bull;</span>
                          <span>OpenAQ</span>
                       </div>
                    ))}
                 </motion.div>
              </div>
           </section>

           {/* WHAT YOU'LL BECOME */}
           <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
              <section className="py-20 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                       <h2 className="text-4xl md:text-5xl font-serif text-[#1b4332] font-bold mb-4">What You&apos;ll Become</h2>
                       <p className="text-base text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                          Explore career paths at the intersection of AI and sustainability
                       </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                       {/* Mobile Layout (Accordion) */}
                       <div className="w-full lg:hidden flex flex-col gap-4">
                          {CAREER_ROLES.map((role, index) => (
                             <div
                                key={index}
                                ref={(el) => {
                                   if (el) roleRefs.current[index] = el;
                                }}
                                className="bg-white rounded-xl border border-stone-200 overflow-hidden scroll-mt-32"
                             >
                                <button
                                   onClick={() => {
                                      setSelectedCareer(index);
                                      setTimeout(() => {
                                         roleRefs.current[index]?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                         });
                                      }, 100);
                                   }}
                                   className={`w-full text-left p-4 min-h-[48px] flex items-center justify-between transition-colors ${selectedCareer === index ? "bg-emerald-50/50" : "bg-white"}`}
                                >
                                   <div className="flex items-center gap-4">
                                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${selectedCareer === index ? 'bg-emerald-100' : 'bg-emerald-50'}`}>
                                         <role.icon size={20} className="text-emerald-600" />
                                      </div>
                                      <div>
                                         <h3 className={`font-serif text-lg ${selectedCareer === index ? "text-emerald-800" : "text-stone-900"}`}>
                                            {role.title}
                                         </h3>
                                         <div className="text-sm font-bold text-emerald-600">
                                            {role.salary}
                                         </div>
                                      </div>
                                   </div>
                                   <ChevronDown
                                      size={20}
                                      className={`text-stone-400 transition-transform duration-300 ${selectedCareer === index ? "rotate-180 text-emerald-500" : ""}`}
                                   />
                                </button>
                                <AnimatePresence>
                                   {selectedCareer === index && (
                                      <motion.div
                                         initial={{ height: 0, opacity: 0 }}
                                         animate={{ height: "auto", opacity: 1 }}
                                         exit={{ height: 0, opacity: 0 }}
                                         transition={{ duration: 0.3 }}
                                      >
                                         <div className="p-4 pt-0 border-t border-stone-100">
                                            <div className="pt-4">
                                               <RoleDetailsContent role={role} themeColor="emerald" />
                                            </div>
                                         </div>
                                      </motion.div>
                                   )}
                                </AnimatePresence>
                             </div>
                          ))}
                       </div>

                       {/* Desktop Layout */}
                       <div className="hidden lg:grid lg:grid-cols-2 gap-8 w-full">
                          {/* Left: Roles List */}
                          <div className="space-y-3">
                             {CAREER_ROLES.map((role, i) => (
                                <button
                                   key={i}
                                   onClick={() => setSelectedCareer(i)}
                                   className={`w-full p-5 rounded-2xl transition-all text-left ${selectedCareer === i
                                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/10'
                                      : 'bg-white border-2 border-stone-150 hover:border-emerald-350 hover:shadow-md'
                                      }`}
                                >
                                   <div className="flex items-start gap-4">
                                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${selectedCareer === i ? 'bg-white/20' : 'bg-emerald-50'
                                         }`}>
                                         <role.icon size={22} className={selectedCareer === i ? 'text-white' : 'text-emerald-600'} />
                                      </div>
                                      <div className="flex-1">
                                         <h3 className={`text-base font-serif leading-tight mb-1.5 font-bold ${selectedCareer === i ? 'text-white' : 'text-stone-900'
                                            }`}>
                                            {role.title}
                                         </h3>
                                         <div className={`text-sm font-bold ${selectedCareer === i ? 'text-emerald-100' : 'text-emerald-650'
                                            }`}>
                                            {role.salary}
                                         </div>
                                      </div>
                                   </div>
                                </button>
                             ))}
                          </div>

                          {/* Right: Selected Role Details */}
                          <div className="lg:sticky lg:top-6 h-fit">
                             <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
                                <RoleDetailsContent role={CAREER_ROLES[selectedCareer]} themeColor="emerald" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </section>
           </div>

           {/* CERTIFICATION - COMPACT */}
           <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
              <section className="py-16 bg-white">
                 <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                       {/* Left: Certificate Image */}
                       <div className="relative">
                          <div className="relative p-3 bg-white border border-stone-200 rounded-xl shadow-lg">
                             <Image src="/sample-certificate.png" alt="Sample Certificate" width={600} height={400} className="w-full h-auto rounded-lg relative z-10" />
                             {/* Decorative Elements */}
                             <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl" />
                             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-stone-500/10 rounded-full blur-2xl" />
                          </div>
                       </div>

                       {/* Right: Description */}
                       <div>
                          <h2 className="text-3xl md:text-4xl font-serif text-[#1b4332] font-bold mb-4">Certification of Competence</h2>
                          <p className="text-base text-slate-600 font-light mb-6 leading-relaxed">
                             Upon passing the capstone review, you will be awarded a Certificate of Competence in Sustainable AI Systems, verifiable via our industry partners.
                          </p>

                          <div className="space-y-3">
                             {[
                                "Industry-recognized credential",
                                "Verifiable digital certificate",
                                "Lifetime access to alumni network",
                                "Portfolio-ready capstone project"
                             ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                   <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                      <CheckCircle2 size={14} className="text-emerald-600" />
                                   </div>
                                   <span className="text-sm text-stone-700">{item}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </section>
           </div>

           {/* FAQ SECTION */}
           <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-16 overflow-hidden relative">
              <section className="py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-4 font-mono">
                          <HelpCircle size={16} />
                          <span>FAQ</span>
                       </div>
                       <h2 className="text-3xl md:text-5xl font-serif text-[#1b4332] font-bold">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                       {FAQ_DATA.map((item, i) => (
                          <FAQItem key={i} question={item.question} answer={item.answer} />
                       ))}
                    </div>
                 </div>
              </section>
           </div>

           <Footer />
        </div>
     );
}
