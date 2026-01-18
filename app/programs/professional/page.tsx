"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Users, Zap, Briefcase, GraduationCap, CheckCircle2, ChevronRight, Terminal, Cpu, Network, ShieldCheck, BrainCircuit, Globe, Calendar, Wifi, Target, Clock, ArrowDown, ChevronLeft, FileText, UserCheck, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// Custom Gradient Style
const customGradient = "linear-gradient(to right, lab(44.0605 29.0279 -86.0352) 0%, lab(38.4009 52.6132 -92.3857) 100%)";
const textGradientClass = "text-transparent bg-clip-text";

export default function ProfessionalProgramPage() {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const domains = ["Artificial Intelligence", "Cyber Security", "Blockchain", "Quantum Computing"];

  useEffect(() => {
    document.title = "Professional Certification Programs | The Foundry";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % domains.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-slate-900 border-b border-slate-800">
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="/pfl_hero_bg.png" 
                alt="Professional Learning" 
                fill 
                className="object-cover opacity-40 mix-blend-overlay"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900 z-10" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-20">
             <div className="max-w-4xl pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-2">
                        <p className="text-3xl md:text-4xl text-slate-400 font-medium tracking-wide">Become a</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                            Certified Professional in
                            <br/>
                            <span className="inline-block relative min-h-[1.2em] mt-2">
                                {domains.map((domain, index) => (
                                    <motion.span
                                        key={domain}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: currentDomainIndex === index ? 1 : 0,
                                            y: currentDomainIndex === index ? 0 : 20,
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        style={{ backgroundImage: customGradient }}
                                        className={`${textGradientClass} ${currentDomainIndex === index ? 'inline-block' : 'absolute top-0 left-0'}`}
                                    >
                                        {domain}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl font-medium">
                        Build deep expertise in emerging technologies. A structured introduction to Artificial Intelligence, Cyber Security, Quantum Computing, and Blockchain designed for clarity and application.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            href="/apply" 
                            style={{ background: customGradient }}
                            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg opacity-90 hover:opacity-100"
                        >
                            Start Application <ArrowUpRight size={18} />
                        </Link>
                         <a 
                            href="#curriculum" 
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                        >
                            Explore Domains
                        </a>
                    </div>

                    {/* Strategic Program Specs - Integrated into Hero */}
                    <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <HeroStat icon={<Calendar size={20} />} label="Duration" value="3 Months" sub="Intensive Cohort" />
                        <HeroStat icon={<Wifi size={20} />} label="Format" value="Hybrid" sub="In-Person + Virtual" />
                        <HeroStat icon={<Zap size={20} />} label="Approach" value="Applied" sub="Concept + Practice" />
                        <HeroStat icon={<Target size={20} />} label="Outcome" value="Ready" sub="For Specialization" />
                    </div>
                </motion.div>
             </div>
        </div>
      </section>

      {/* Value Creation - Why The Foundry? */}
      <section className="py-24 px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Professional Edge</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">Acquire the deep technical expertise and applied skills required to lead in the modern digital economy.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                            <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                            <div className="relative z-10 text-slate-900">
                                <Target size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Clarity</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Move from execution to strategy. Learn not just how to implement technology, but how to leverage it for asymmetric business advantage.
                        </p>
                  </div>
                   <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                            <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                            <div className="relative z-10 text-slate-900">
                                <Globe size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Global Benchmarking</h3>
                        <p className="text-slate-600 leading-relaxed">
                            We don't teach to local standards. Our curriculum is calibrated against the world's most competitive technical environments.
                        </p>
                  </div>
                   <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                            <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                            <div className="relative z-10 text-slate-900">
                                <Network size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">The Peer Advantage</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Iron sharpens iron. Join a curated cohort of high-ambition professionals. Your network is your safety net and your launchpad.
                        </p>
                  </div>
                  
                  {/* New Premium Tiles */}
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                            <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                            <div className="relative z-10 text-slate-900">
                                <Target size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Applied Knowledge</h3>
                        <p className="text-slate-600 leading-relaxed">
                           Transcend functional execution. Master the art of translating technical complexity into actionable business strategy.
                        </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                            <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                            <div className="relative z-10 text-slate-900">
                                <Globe size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Architectural Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Don't just write code; design systems. Gain the high-level perspective required to architect scalable, resilient enterprise solutions.
                        </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                            <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                            <div className="relative z-10 text-slate-900">
                                <Briefcase size={24} strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Leadership Velocity</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Accelerate your transition from contributor to leader. Equip yourself with the authority that comes from deep domain mastery.
                        </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Core Domains */}
      <section className="py-24 px-6 bg-white border-y border-slate-200" id="curriculum">
          <div className="container mx-auto max-w-6xl">
               <div className="mb-16">
                   <h2 className="text-4xl font-bold text-slate-900 mb-6">Choose your career transition</h2>
                   <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                       Precision-engineered learning tracks. Each domain is structured as a comprehensive, standalone professional program allowing you to bypass generalities and build deep, vertical expertise in the technology defining your future.
                   </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <DomainCard 
                        title="Artificial Intelligence"
                        desc="Understand the core concepts of ML and Neural Networks. Learn how AI is applied in real-world decision systems."
                        icon={<BrainCircuit />}
                        href="/programs/professional/ai"
                   />
                   <DomainCard 
                        title="Cyber Security"
                        desc="Grasp the fundamentals of digital defense, encryption, and network security in an increasingly hostile cyber landscape."
                        icon={<ShieldCheck />}
                        href="/programs/professional/cyber-security"
                   />
                   <DomainCard 
                        title="Quantum Computing"
                        desc="An introduction to qubits, superposition, and the future of computation. Prepare for the next paradigm shift."
                        icon={<Cpu />}
                        href="/programs/professional/quantum-computing"
                   />
                    <DomainCard 
                        title="Blockchain"
                        desc="Explore decentralized ledgers, smart contracts, and the trust layer of the new internet."
                        icon={<Network />}
                        href="/programs/professional/blockchain"
                   />
               </div>
          </div>
      </section>

      {/* The Learning Journey */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="container mx-auto max-w-6xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-6">Structured Progression.</h2>
                      <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                          We don't just dump content. We guide you through a logical progression of learning.
                      </p>
                      
                      <div className="space-y-8">
                          <ProgressionStep 
                            title="1. Conceptual Clarity" 
                            desc="Master the core terminology and theory. No black boxes." 
                          />
                          <ProgressionStep 
                            title="2. Applied Understanding" 
                            desc="Guided exercises and examples to see technology in action." 
                          />
                          <ProgressionStep 
                            title="3. Industry Context" 
                            desc="Connect theory with real-world application." 
                          />
                          <ProgressionStep 
                            title="4. Assessment & Certification" 
                            desc="Evaluate your domain familiarity and readiness for specialization." 
                          />
                      </div>
                  </div>
                  <div className="relative flex justify-center">
                      <div className="relative w-full max-w-md aspect-square">
                           {/* Gradient Orb */}
                           <div style={{ background: customGradient }} className="absolute inset-0 rounded-full blur-[100px] opacity-30 animate-pulse" />
                           <div className="relative z-10 grid grid-cols-2 gap-4 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <div style={{ backgroundImage: customGradient }} className={`${textGradientClass} text-2xl font-bold mb-1`}>Hybrid</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Learning Format</div>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <div style={{ backgroundImage: customGradient }} className={`${textGradientClass} text-2xl font-bold mb-1`}>Guided</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Exercises</div>
                                </div>
                                <div className="p-4 bg-white/10 rounded-xl col-span-2">
                                    <div style={{ backgroundImage: customGradient }} className={`${textGradientClass} text-2xl font-bold mb-1`}>Certified</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Upon Completion</div>
                                </div>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>



      {/* Certification Section */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
          <div className="container mx-auto max-w-6xl">
               <div className="flex flex-col md:flex-row items-center gap-16">
                   <div className="md:w-1/2">
                       <div className="relative p-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-xl">
                            <Image 
                                src="/sample-certificate.png" 
                                alt="Foundry Professional Certificate Sample" 
                                width={600} 
                                height={400} 
                                className="rounded-lg shadow-sm"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                       </div>
                   </div>
                   <div className="md:w-1/2">
                       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Industry Recognized Certification</h2>
                       <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                           Your effort deserves recognition. Upon successful completion of the professional track, you will receive a verifiable digital certificate from The Foundry, signaling your readiness to industry partners.
                       </p>
                       <ul className="space-y-4">
                           <li className="flex items-center gap-3 text-slate-700 font-medium">
                               <div className="p-1 rounded-full bg-blue-100 text-blue-600"><CheckCircle2 size={16} /></div>
                               Shareable on LinkedIn & Resumes
                           </li>
                           <li className="flex items-center gap-3 text-slate-700 font-medium">
                               <div className="p-1 rounded-full bg-amber-100 text-amber-600"><CheckCircle2 size={16} /></div>
                               Gateway to Advanced Specializations
                           </li>
                       </ul>
                   </div>
               </div>
          </div>
      </section>



      {/* Admissions Process */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
               <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
               <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions Process</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                      We select high-potential candidates who are ready to commit to rigorous learning.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                   {/* Connector Line (Desktop) */}
                   <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 z-0"></div>

                   {/* Step 1 */}
                   <div className="relative z-10 text-center group">
                       <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <div className="relative">
                                <FileText size={40} className="text-blue-400" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-800">1</div>
                            </div>
                       </div>
                       <h3 className="text-xl font-bold mb-3">Application</h3>
                       <p className="text-slate-400 leading-relaxed px-4">
                           Submit your profile and statement of purpose. Tell us why you want to build this expertise.
                       </p>
                   </div>

                   {/* Step 2 */}
                   <div className="relative z-10 text-center group">
                       <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 delay-100">
                            <div className="relative">
                                <UserCheck size={40} className="text-amber-400" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-800">2</div>
                            </div>
                       </div>
                       <h3 className="text-xl font-bold mb-3">Screening</h3>
                       <p className="text-slate-400 leading-relaxed px-4">
                           Our interactive assessment evaluates your aptitude and logical reasoning capabilities.
                       </p>
                   </div>

                   {/* Step 3 */}
                   <div className="relative z-10 text-center group">
                       <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 delay-200">
                            <div className="relative">
                                <Rocket size={40} className="text-green-400" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm border-2 border-slate-800">3</div>
                            </div>
                       </div>
                       <h3 className="text-xl font-bold mb-3">Onboarding</h3>
                       <p className="text-slate-400 leading-relaxed px-4">
                           Successful candidates receive an offer letter and access to the pre-course modules.
                       </p>
                   </div>
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-slate-600">Common queries about the professional foundation tracks.</p>
            </div>
            
            <div className="space-y-4">
                <FAQItem question="Who is this program designed for?">
                    <p className="mb-4">This program is structured for three primary groups:</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li><strong>Engineering Students:</strong> 3rd and 4th year students looking to supplement their academic curriculum with industry-relevant skills.</li>
                        <li><strong>Undergraduates:</strong> Final-year B.Com/B.Sc students seeking to build technical awareness in a digital-first economy.</li>
                        <li><strong>Early Professionals:</strong> Graduates with 2+ years experience aiming to build a strong technical base for future roles.</li>
                    </ul>
                </FAQItem>
                <FAQItem question="Do I need prior coding experience?">
                    No prior deep technical expertise is required, but a basic familiarity with computers and a logical mindset is recommended. The program starts with conceptual clarity before moving to application.
                </FAQItem>
                <FAQItem question="Is this an online or offline program?">
                    It is a <strong>Hybrid</strong> program. We combine self-paced digital learning modules with in-person or live virtual guided exercises and mentorship sessions.
                </FAQItem>
                 <FAQItem question="Will I receive a certificate?">
                    Yes. Upon successful completion of the course and assessment, you will receive a verifiable digital certificate from The Foundry, which can be shared on LinkedIn and your resume.
                </FAQItem>
            </div>
        </div>
      </section>



      <Footer />
    </main>
  );
}



// Optimized Stat Component for Hero
function HeroStat({ icon, label, value, sub }: { icon: any, label: string, value: string, sub: string }) {
    return (
        <div className="flex items-start gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 shrink-0 group-hover:text-white transition-colors">
                 {/* Icon with potential gradient or just white/slate */}
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
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            {/* Custom Icon Container */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                <div style={{ color: "black" }} className="relative z-10 text-slate-900">
                     {React.cloneElement(icon, { size: 24, strokeWidth: 1.5 })}
                </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">
                {desc}
            </p>
        </div>
    )
}

function DomainCard({ title, desc, icon, href }: { title: string, desc: string, icon: any, href: string }) {
    return (
        <div className="p-8 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-all group flex flex-col items-start gap-6 h-full relative">
            <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0 relative overflow-hidden">
                     <div style={{ background: customGradient }} className="absolute inset-0 opacity-10"></div>
                     <div className="relative z-10 text-slate-900">
                        {React.cloneElement(icon, { size: 28, strokeWidth: 1.5 })}
                     </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
            </div>
            
            <div className="mt-auto w-full pt-4 border-t border-slate-50">
                <Link 
                    href={href}
                    className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors"
                >
                    View Curriculum <ArrowUpRight size={16} className="rotate-45 group-hover:rotate-90 transition-transform" />
                </Link>
            </div>
        </div>
    )
}

function ProgressionStep({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1">
                {/* Gradient Icon */}
                 <div className="relative">
                    <CheckCircle2 size={24} className="text-slate-700" />
                    <div style={{ background: customGradient }} className="absolute inset-0 mix-blend-screen opacity-50" />
                 </div>
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                <p className="text-slate-400 leading-relaxed">{desc}</p>
            </div>
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
