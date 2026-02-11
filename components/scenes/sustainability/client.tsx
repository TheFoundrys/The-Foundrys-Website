"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
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
   Users
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { AnimatePresence } from "framer-motion";

import { RoleDetailsContent } from "@/components/role-details-content";

// CAREER ROLES DATA
const CAREER_ROLES = [
   {
      icon: Layers,
      title: "Sustainability Systems Architect",
      salary: "₹18-25 LPA",
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
      salary: "₹15-30 LPA",
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
      salary: "₹18-35 LPA",
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
      salary: "₹14-28 LPA",
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
      salary: "₹12-24 LPA",
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
      salary: "₹10-20 LPA",
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
      salary: "₹16-32 LPA",
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

export default function SustainabilityClient() {
   const containerRef = useRef(null);
   const roleRefs = useRef<(HTMLDivElement | null)[]>([]);
   const [selectedCareer, setSelectedCareer] = useState(0);
   const { symbol, currency } = useRegionalPricing();

   const originalPrice = COURSE_PRICING.sustainability.original[currency];
   const discountedPrice = COURSE_PRICING.sustainability.discounted[currency];

   useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   return (
      <div ref={containerRef} className="bg-stone-50 text-stone-900 min-h-screen selection:bg-emerald-200 selection:text-emerald-900 font-sans">
         <Navbar />

         {/* HERO SECTION: FULL PAGE DARK DESIGN */}
         <section className="relative pt-32 pb-48 px-6 bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 overflow-hidden">
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent"></div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
               <div className="text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
                     <Leaf size={16} />
                     <span>Professional Certification Program</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-white mb-6 leading-tight">
                     Sustainability in the <br />
                     <span className="text-emerald-400 italic">Age of AI</span>
                  </h1>

                  {/* Program Description */}
                  <p className="text-lg md:text-xl text-emerald-100/80 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                     A Intensive program designed for professionals shaping the future of technology, climate, and governance.
                  </p>

                  {/* Quick Highlights */}
                  <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm text-emerald-100">
                     <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span>Industry-Recognized Certificate</span>
                     </div>
                     <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span>Hands-on Capstone Project</span>
                     </div>
                     <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span>Expert-Led Sessions</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         {/* Program Details Block - Relative with negative margin for overlap */}
         <div className="relative z-20 px-4 -mt-14 mb-12">
            <div className="mx-auto max-w-5xl">
               <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
                     <div className="border-r-0 border-stone-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1"> Duration</p>
                        <p className="text-lg font-bold text-stone-900">4 Weeks</p>
                     </div>
                     <div className="border-r-0 border-stone-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Mode</p>
                        <p className="text-lg font-bold text-stone-900">Hybrid</p>
                     </div>
                     <div className="border-r-0 border-stone-100 lg:border-r lg:last:border-r-0 lg:pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Starts</p>
                        <p className="text-lg font-bold text-stone-900">February 2026</p>
                     </div>
                     <div className="lg:pr-4">
                        <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-1">Program Fee</p>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                           <span className="text-sm text-stone-400 line-through">{symbol}{originalPrice}</span>
                           <span className="text-lg font-bold text-stone-900">{symbol}{discountedPrice}</span>
                        </div>
                     </div>
                  </div>


                  <div className="w-full lg:w-auto">
                     <Link href="https://compass.thefoundrys.com/courses/sustainability/sustainability-in-the-age-of-ai" className="block w-full text-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap">
                        Enroll Now
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* WHY THIS COHORT EXISTS + WHO IT'S FOR - IMPROVED LAYOUT */}
         <section className="py-12 md:py-4 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
               <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                  {/* Left: Why This Cohort Exists */}
                  <div>
                     <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Why This Cohort Exists</h2>

                     <p className="text-xl text-stone-800 mb-8 font-light italic leading-snug">
                        The tension between acceleration and sustainability will define the next decade.
                     </p>

                     {/* Problem Cards */}
                     <div className="space-y-4">
                        <div className="border-l-4 border-red-400 bg-red-50/50 p-5">
                           <h4 className="text-sm font-bold text-red-900 uppercase tracking-wider mb-2">The Acceleration</h4>
                           <p className="text-base text-stone-700 font-light">
                              AI is accelerating everything—growth, efficiency, consumption, extraction.
                           </p>
                        </div>

                        <div className="border-l-4 border-blue-400 bg-blue-50/50 p-5">
                           <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">The Slowdown</h4>
                           <p className="text-base text-stone-700 font-light">
                              Sustainability is trying to slow things down—emissions, waste, inequality, collapse.
                           </p>
                        </div>

                        <div className="border-l-4 border-amber-400 bg-amber-50/50 p-5">
                           <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-2">The Gap</h4>
                           <p className="text-base text-stone-700 font-light">
                              Most professionals are trained in either technology or sustainability. Very few are trained to <span className="font-semibold text-amber-900">think in systems</span>, understand trade-offs, and make AI-era decisions responsibly.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Right: Who This Cohort Is For */}
                  <div>
                     <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Who This Cohort Is For</h2>
                     <p className="text-xl text-stone-800 mb-8 font-light italic leading-snug">
                        No deep coding background required. Deep thinking required and trained.
                     </p>

                     <div className="space-y-2">
                        {[
                           { title: "Future-Ready Careers", desc: "Entry-level professionals building future-ready careers.", icon: Users },
                           { title: "Mid-Career Navigators", desc: "Mid-career professionals navigating AI-driven disruption.", icon: Anchor },
                           { title: "Upgraders", desc: "Sustainability, ESG, policy, and climate professionals upgrading into AI literacy.", icon: Leaf },
                           { title: "Cross-Functional", desc: "Engineers, analysts, consultants, and managers moving into cross-functional roles.", icon: Layers }
                        ].map((item, i) => (
                           <div key={i} className="flex items-start gap-6 bg-stone-50 p-4 border border-stone-200 rounded-xl shadow-sm hover:border-emerald-300 transition-all hover:shadow-md group">
                              <div className="shrink-0">
                                 <item.icon size={24} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-base font-serif text-stone-900 mb-1">{item.title}</h3>
                                 <p className="text-sm text-stone-600 font-light leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Centered Solution Card */}
               <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-xl shadow-xl">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                           <CheckCircle2 size={24} className="text-white" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-serif mb-3">Our Solution</h3>
                           <p className="text-emerald-50 font-light leading-relaxed text-lg">
                              This cohort exists to close that gap—training professionals to navigate the intersection of AI and sustainability with systems thinking, strategic foresight, and responsible decision-making.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>



         {/* CURRICULUM: WEEK BY WEEK */}
         <section className="py-24 bg-stone-50 border-y border-stone-200">
            <div className="container mx-auto px-6 max-w-6xl">
               <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-16 text-center">What You&apos;ll Learn</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        focus: ["Analyze AI's carbon, water, and energy footprint", "Understand model scale and efficiency trade-offs", "Learn when NOT to use AI"],
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
                     <div key={i} className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col gap-6 hover:border-emerald-300 transition-colors">
                        <div>
                           <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase block mb-2">{module.week}</span>
                           <h3 className="text-xl font-serif text-stone-900 leading-tight">{module.title}</h3>
                        </div>
                        <div>
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

         <section className="py-5 bg-slate-50 border-y border-slate-200 overflow-hidden">
            {/* Centered heading + description */}
            <div className="container mx-auto px-2 mb-6 text-center max-w-3xl">
               <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
                  Tools & Frameworks
               </h2>
            </div>

            {/* Marquee row 1 */}
            <motion.div
               className="flex items-center gap-12 whitespace-nowrap will-change-transform mb-8"
               animate={{ x: ["0%", "-50%"] }}
               transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 120,
                  ease: "linear",
               }}
               style={{ width: "max-content" }}
            >
               {[1, 2, 3, 4].map((i) => (
                  <div
                     key={i}
                     className="flex items-center gap-12 text-slate-400 font-bold text-2xl uppercase tracking-widest"
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
               {[1, 2, 3, 4].map((i) => (
                  <div
                     key={i}
                     className="flex items-center gap-12 text-slate-400 font-bold text-2xl uppercase tracking-widest"
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
         </section>


         {/* CAPSTONE & TOOLS - CAROUSEL */}


         {/* WHAT YOU'LL BECOME - REDESIGNED */}
         <section className="py-20 bg-gradient-to-b from-white to-stone-50 border-y border-stone-200">
            <div className="container mx-auto px-6 max-w-6xl">
               {/* Header */}
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">What You&apos;ll Become</h2>
                  <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
                     Explore career paths at the intersection of AI and sustainability
                  </p>
               </div>

               <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Mobile Layout (Accordion) - Visible only on small screens */}
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
                              className={`w-full text-left p-4 flex items-center justify-between transition-colors ${selectedCareer === index ? "bg-emerald-50/50" : "bg-white"}`}
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
                                          <RoleDetailsContent role={role} />
                                       </div>
                                    </div>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                     ))}
                  </div>

                  {/* Desktop Layout - Visible only on lg screens and up */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-8 w-full">
                     {/* Left: Roles List */}
                     <div className="space-y-3">
                        {CAREER_ROLES.map((role, i) => (
                           <button
                              key={i}
                              onClick={() => setSelectedCareer(i)}
                              className={`w-full p-5 rounded-lg transition-all text-left ${selectedCareer === i
                                 ? 'bg-emerald-600 text-white shadow-lg'
                                 : 'bg-white border-2 border-stone-200 hover:border-emerald-300 hover:shadow-md'
                                 }`}
                           >
                              <div className="flex items-start gap-4">
                                 <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${selectedCareer === i ? 'bg-white/20' : 'bg-emerald-100'
                                    }`}>
                                    <role.icon size={22} className={selectedCareer === i ? 'text-white' : 'text-emerald-600'} />
                                 </div>
                                 <div className="flex-1">
                                    <h3 className={`text-base font-serif leading-tight mb-1.5 ${selectedCareer === i ? 'text-white' : 'text-stone-900'
                                       }`}>
                                       {role.title}
                                    </h3>
                                    <div className={`text-sm font-bold ${selectedCareer === i ? 'text-emerald-100' : 'text-emerald-600'
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
                        <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 md:p-10">
                           <RoleDetailsContent role={CAREER_ROLES[selectedCareer]} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* WHAT YOU WALK AWAY WITH */}
         {/* <section className="py-24 bg-stone-50 border-t border-stone-200">
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
         </section> */}

         {/* CERTIFICATION - COMPACT */}
         <section className="py-16 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6 max-w-6xl">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Certificate Image */}
                  <div className="relative">
                     <div className="relative p-3 bg-white border border-stone-200 rounded-xl shadow-lg">
                        <img
                           src="/sample-certificate.png"
                           alt="Sample Certificate"
                           className="w-full h-auto rounded-lg relative z-10"
                        />
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-stone-500/10 rounded-full blur-2xl" />
                     </div>
                  </div>

                  {/* Right: Description */}
                  <div>
                     <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Certification of Competence</h2>
                     <p className="text-base text-stone-600 font-light mb-6 leading-relaxed">
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

         <Footer />
      </div>
   );
}
