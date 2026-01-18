"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Award, Compass, Globe, Users, TrendingUp, Shield, BarChart3, Target, Landmark, Rocket, ChevronRight, CheckCircle2, Brain, LineChart, Building2, FileText, UserCheck, Clock, Briefcase, Video, Cpu, ShieldCheck, Network, Play } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

// Custom Gradient (matching professional page)
const customGradient = "linear-gradient(to right, lab(44.0605 29.0279 -86.0352) 0%, lab(38.4009 52.6132 -92.3857) 100%)";
const textGradientClass = "text-transparent bg-clip-text";

export default function ExecutiveProgramPage() {
  useEffect(() => {
    document.title = "Executive Leadership Programs | The Foundry";
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/executive_hero_bg.png" 
                alt="Executive Leadership" 
                fill 
                className="object-cover opacity-50 mix-blend-overlay"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900 z-10" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-20">
             <div className="max-w-4xl pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                        Executive Leadership <br/>
                        <span style={{ backgroundImage: customGradient }} className={textGradientClass}>Programs.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl font-medium">
                        Upskill for Strategic Impact in Emerging Technologies. Designed for experienced professionals to deepen their understanding and lead technology initiatives with confidence.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            href="/apply?type=executive" 
                            style={{ background: customGradient }}
                            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg opacity-90 hover:opacity-100"
                        >
                            Apply Now <ArrowUpRight size={18} />
                        </Link>
                         <a 
                            href="#program-details" 
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('program-details')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                        >
                            View Program Details
                        </a>
                    </div>

                    {/* Program Specs */}
                    <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ExecutiveStat icon={<Clock size={20} />} label="Format" value="Short-Form" sub="High-Intensity Modules" />
                        <ExecutiveStat icon={<Building2 size={20} />} label="Delivery" value="Hybrid" sub="Tailored to Executives" />
                        <ExecutiveStat icon={<Users size={20} />} label="Experience" value="5+ Years" sub="Leadership Roles" />
                        <ExecutiveStat icon={<Target size={20} />} label="Focus" value="Strategic" sub="Applied Frameworks" />
                    </div>
                </motion.div>
             </div>
        </div>
      </section>

      {/* The Executive Advantage */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
          <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Executive Advantage</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">Build the strategic foresight and leadership capabilities required to steer organizations through technological disruption.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Boardroom Readiness</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Articulate technical risk and opportunity with clarity. Bridge the gap between engineering reality and business strategy.
                        </p>
                  </div>
                   <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Compass size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Foresight</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Anticipate market shifts 5-10 years out. Develop the conviction to place early organizational bets on emerging technologies.
                        </p>
                  </div>
                   <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Landmark size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Legacy & Impact</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Build systems and strategies that outlast your tenure. Create a culture of innovation that becomes self-sustaining.
                        </p>
                  </div>
              </div>
          </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200" id="program-details">
          <div className="container mx-auto max-w-6xl">
               <div className="mb-16">
                   <h2 className="text-4xl font-bold text-slate-900 mb-6">What You Will Learn</h2>
                   <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                       Gain strategic and business-level understanding of emerging technologies and their impact on organizations, markets, and leadership.
                   </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <LearningCard 
                        title="Strategic Understanding of Emerging Tech"
                        desc="Explore how AI, Cyber Security, Quantum Computing, and Blockchain are reshaping industries, business models, and competitive landscapes."
                        icon={<Brain />}
                   />
                   <LearningCard 
                        title="Technology Evaluation Frameworks"
                        desc="Learn structured approaches to assess technology adoption, evaluate risk, and prioritize strategic technology investments."
                        icon={<BarChart3 />}
                   />
                   <LearningCard 
                        title="Organizational Impact & Transformation"
                        desc="Understand how emerging technologies influence operations, culture, talent strategy, and long-term organizational resilience."
                        icon={<Building2 />}
                   />
                   <LearningCard 
                        title="Real-World Leadership Perspectives"
                        desc="Engage with enterprise case studies, interactive discussions, and applied frameworks grounded in executive decision-making."
                        icon={<Users />}
                   />
               </div>
          </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
          <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2">
                      <h2 className="text-4xl font-bold text-slate-900 mb-6">Program Structure</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          High-impact learning designed for busy executives. Short-format modules that fit your leadership schedule without compromising depth.
                      </p>
                      
                      <div className="space-y-6">
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                                  <Clock size={24} />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold text-slate-900 mb-2">Short-Format Modules</h4>
                                  <p className="text-slate-600">Concise, high-intensity learning sessions focused on strategic application and decision-making frameworks.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                                  <Globe size={24} />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold text-slate-900 mb-2">Hybrid or Virtual Delivery</h4>
                                  <p className="text-slate-600">Flexible delivery formats tailored to executive schedules—attend in-person or join virtually.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-xl bg-green-50 border border-green-100 text-green-600 shrink-0">
                                  <Target size={24} />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold text-slate-900 mb-2">Interactive & Applied</h4>
                                  <p className="text-slate-600">Engage in case studies, group discussions, and practical frameworks you can immediately apply in your organization.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:w-1/2">
                      <div className="bg-slate-900 text-white rounded-3xl p-10 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                          <div className="relative z-10">
                              <h3 className="text-2xl font-bold mb-6">Executive Focus Areas</h3>
                              <div className="space-y-4">
                                  <Link href="/programs/executive/ai-leadership" className="block group/item">
                                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                          <Brain size={24} className="text-blue-400 group-hover/item:text-white transition-colors" />
                                          <div>
                                              <div className="font-bold">AI Leadership</div>
                                              <div className="text-sm text-slate-400">Governance, adoption & competitive advantage</div>
                                          </div>
                                          <ArrowUpRight size={16} className="ml-auto text-slate-500 group-hover/item:text-white opacity-0 group-hover/item:opacity-100 transition-all" />
                                      </div>
                                  </Link>
                                  <Link href="/programs/executive/strategic-impact" className="block group/item">
                                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                          <TrendingUp size={24} className="text-blue-400 group-hover/item:text-white transition-colors" />
                                          <div>
                                              <div className="font-bold">Strategic Tech Impact</div>
                                              <div className="text-sm text-slate-400">Evaluating & leveraging emerging tech</div>
                                          </div>
                                          <ArrowUpRight size={16} className="ml-auto text-slate-500 group-hover/item:text-white opacity-0 group-hover/item:opacity-100 transition-all" />
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Executive Assessment */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />

          <div className="container mx-auto max-w-6xl relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-16">
                  <div className="w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
                      <Video size={36} className="text-blue-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6">Executive Assessment</h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                      As part of the application process, participants submit a self-recorded 15-minute video outlining their professional context and learning objectives.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Play size={24} className="text-blue-400" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">Motivation & Goals</h4>
                      <p className="text-slate-400 text-sm">Why you want to join the program and what you aim to achieve</p>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Briefcase size={24} className="text-blue-400" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">Professional Context</h4>
                      <p className="text-slate-400 text-sm">Your current role, responsibilities, and organizational context</p>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
                      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Target size={24} className="text-blue-400" />
                      </div>
                      <h4 className="text-lg font-bold mb-3">Program Alignment</h4>
                      <p className="text-slate-400 text-sm">How this program aligns with your leadership and career objectives</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
          <div className="container mx-auto max-w-6xl">
               <div className="flex flex-col md:flex-row items-center gap-16">
                   <div className="md:w-1/2 order-2 md:order-1">
                       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Program Outcomes</h2>
                       <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                           Executives completing the program will gain the strategic clarity and confidence needed to lead technology initiatives and make informed, forward-looking decisions.
                       </p>
                       <ul className="space-y-4 mb-8">
                           <li className="flex items-start gap-3 text-slate-700 font-medium">
                               <div className="p-1 rounded-full bg-blue-100 text-blue-600 shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                               <span>Strategic clarity on emerging technologies and their organizational impact</span>
                           </li>
                           <li className="flex items-start gap-3 text-slate-700 font-medium">
                               <div className="p-1 rounded-full bg-blue-100 text-blue-600 shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                               <span>Confidence to lead or sponsor technology initiatives with informed decision-making</span>
                           </li>
                           <li className="flex items-start gap-3 text-slate-700 font-medium">
                               <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                               <span>Frameworks to evaluate technology adoption, assess risk, and drive transformation</span>
                           </li>
                           <li className="flex items-start gap-3 text-slate-700 font-medium">
                               <div className="p-1 rounded-full bg-purple-100 text-purple-600 shrink-0 mt-1"><CheckCircle2 size={16} /></div>
                               <span>Ability to make forward-looking decisions that position organizations for long-term success</span>
                           </li>
                       </ul>
                       <Link 
                            href="/apply?type=executive"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors"
                       >
                            Apply Now <ArrowUpRight size={18} />
                       </Link>
                   </div>
                   <div className="md:w-1/2 order-1 md:order-2">
                       <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-2xl">
                            <Image 
                                src="/sample-certificate.png" 
                                alt="Executive Certificate Sample" 
                                width={600} 
                                height={400} 
                                className="rounded-lg"
                            />
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                       </div>
                   </div>
               </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-slate-600">Common queries about the executive leadership tracks.</p>
            </div>
            
            <div className="space-y-4">
                <FAQItem question="Who is this program designed for?">
                    <p className="mb-4">This program is strictly designed for:</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li><strong>Senior Executives (C-Suite/VP):</strong> Responsible for organizational strategy and transformation.</li>
                        <li><strong>Directors:</strong> Leading large-scale technology initiatives or business units.</li>
                        <li><strong>Founders:</strong> Navigating technical disruption and scaling innovation.</li>
                    </ul>
                </FAQItem>
                <FAQItem question="Do I need a technical background?">
                    No. The curriculum focuses on <strong>strategic application</strong>, risk assessment, and decision-making logic, not code implementation. A conceptual understanding of technology is sufficient.
                </FAQItem>
                <FAQItem question="What is the time commitment?">
                    The program is designed for busy schedules. Expect 4-6 hours per week of high-intensity engagement, comprised of live virtual sessions and self-paced strategic modules.
                </FAQItem>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ExecutiveStat({ icon, label, value, sub }: { icon: any, label: string, value: string, sub: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 shrink-0 group-hover:text-blue-400 transition-colors">
                {icon}
            </div>
            <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">{label}</div>
                <div style={{ backgroundImage: customGradient }} className={`${textGradientClass} text-lg font-bold leading-tight`}>{value}</div>
                <div className="text-xs text-slate-400 font-medium">{sub}</div>
            </div>
        </div>
    )
}

function TargetCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">
                {desc}
            </p>
        </div>
    )
}

function LearningCard({ title, desc, icon }: { title: string, desc: string, icon: any }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                    {React.cloneElement(icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight pt-2">{title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    )
}

function FAQItem({ question, children }: { question: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="text-lg font-bold text-slate-900">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ArrowDown size={20} className="text-slate-400" />
                </span>
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
