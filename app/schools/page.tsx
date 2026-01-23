"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck, Atom, Network, Rocket, Lightbulb, Leaf, Zap, Globe } from "lucide-react";
import { Footer } from "@/components/footer";

import { Navbar } from "@/components/ui/navbar";

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10" />
             <img 
                src="/images/schools-hero-bg.jpg" 
                alt="Schools of Thought" 
                className="w-full h-full object-cover"
             />
        </div>
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6">
              Schools of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Thought & Action.</span>
            </h1>
            <p className="text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed font-medium mb-12 drop-shadow-sm">
              The Foundry's is organized into specialized schools. Each dedicated to a pillar of the future economy.
              We don't just teach subjects; we construct worldviews.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Sections */}
      <div className="container mx-auto max-w-7xl px-4 py-24 space-y-32 pb-32">
        
        {/* 1. School of Deep Tech */}
        <SchoolSection 
            id="01"
            title="School of Deep Tech" 
            subtitle="The Engineering Core"
            description="Where mathematics meets reality. Mastering the fundamental layers of the intelligence age."
            variant="deep-tech"
            programs={[
                { title: "Artificial Intelligence", desc: "The Intelligence Layer", href: "/schools/ai", icon: BrainCircuit, color: "text-cyan-400", bg: "bg-cyan-950/30", border: "border-cyan-500/20" },
                { title: "Cyber Security", desc: "The Defense Layer", href: "/schools/cyber", icon: ShieldCheck, color: "text-red-400", bg: "bg-red-950/30", border: "border-red-500/20" },
                { title: "Quantum Computing", desc: "The Q-Layer", href: "/schools/quantum-computing", icon: Atom, color: "text-blue-400", bg: "bg-blue-950/30", border: "border-blue-500/20" },
                { title: "Blockchain", desc: "The Trust Layer", href: "/schools/blockchain", icon: Network, color: "text-purple-400", bg: "bg-purple-950/30", border: "border-purple-500/20" },
            ]}
        />

        {/* 2. School of Entrepreneurship */}
        <SchoolSection 
            id="02"
            title="School of Entrepreneurship" 
            subtitle="The Strategy Core"
            description="Building the vehicles of change. From zero-to-one venture building to market dominance."
            variant="entrepreneurship"
            reversed
            programs={[
                { title: "Venture Building", desc: "Zero to One", href: "/schools/venture-building", icon: Rocket, color: "text-amber-400", bg: "bg-amber-950/30", border: "border-amber-500/20" },
                { title: "Strategic Innovation", desc: "Market Disruption", href: "/schools/strategy", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-950/30", border: "border-yellow-500/20" },
            ]}
        />

        {/* 3. School of Sustainability */}
        <SchoolSection 
            id="03"
            title="School of Sustainability" 
            subtitle="The Resilience Core"
            description="Engineering for a permanent future. Solving the planet's hardest problems."
            variant="sustainability"
            programs={[
                { title: "ESG & Sustainability", desc: "Strategic Responsibility", href: "/schools/esg", icon: Leaf, color: "text-emerald-400", bg: "bg-emerald-950/30", border: "border-emerald-500/20" },
            ]}
        />

        {/* 4. School of Energy */}
        <SchoolSection 
            id="04"
            title="School of Energy" 
            subtitle="The Power Core"
            description="Fueling the next civilization. Mastering renewable systems and grid infrastructure."
            variant="energy"
            reversed
            programs={[
                { title: "Renewable Energy", desc: "Powering the Future", href: "/schools/renewable-energy", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-950/30", border: "border-yellow-500/20" },
            ]}
        />

      </div>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative border-t border-slate-800">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">Ready to Forge Your Future?</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link href="/apply" className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start Application <ArrowRight size={20} />
                    </Link>
                    {/* <Link href="/programs" className="px-10 py-4 bg-slate-900 border border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2 group hover:border-slate-500">
                        <Globe size={20} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                        Explore Online Programs
                    </Link> */}
                </div>
            </div>
      </section>

      <Footer />
    </main>
  );
}

function SchoolSection({ id, title, subtitle, description, programs, variant, reversed = false }: any) {
    
    // Aesthetic variants for background/decorations
    const variants: any = {
        "deep-tech": {
            accent: "from-cyan-500 to-blue-600",
            bgPattern: "bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]",
            lineColor: "bg-cyan-500"
        },
        "entrepreneurship": {
            accent: "from-amber-500 to-orange-600",
            bgPattern: "bg-[linear-gradient(45deg,#f59e0b_1px,transparent_1px)] [background-size:30px_30px]",
            lineColor: "bg-amber-500"
        },
        "sustainability": {
            accent: "from-emerald-500 to-green-600",
            bgPattern: "bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]", 
            lineColor: "bg-emerald-500"
        },
         "energy": {
            accent: "from-yellow-400 to-amber-500",
            bgPattern: "bg-[linear-gradient(0deg,#facc15_1px,transparent_1px)] [background-size:40px_40px]",
            lineColor: "bg-yellow-500"
        }
    };

    const theme = variants[variant] || variants["deep-tech"];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col lg:flex-row gap-16 items-center relative py-12 scroll-mt-[25vh] ${reversed ? 'lg:flex-row-reverse' : ''}`}
            id={variant}
        >
            {/* Tech Background for the Section */}
            <div className={`absolute inset-0 ${theme.bgPattern} opacity-[0.03] pointer-events-none rounded-3xl`} />
            
            {/* Text Side */}
            <div className="flex-1 space-y-8 text-center lg:text-left relative z-10">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-8xl font-black text-slate-200/50 tracking-tighter select-none">{id}</span>
                     <div className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-slate-900 text-white border border-slate-700 shadow-xl`}>
                        {subtitle}
                    </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
                    {title.replace("School of ", "")}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                    {description}
                </p>
                
                {/* Decorative Tech Line */}
                <div className="flex items-center gap-2 justify-center lg:justify-start opacity-60">
                     <div className={`h-1 w-2 ${theme.lineColor}`} />
                     <div className={`h-0.5 w-32 bg-slate-200`} />
                     <div className={`h-1 w-2 ${theme.lineColor}`} />
                </div>
            </div>

            {/* Cards Side (Holographic Grid) */}
            <div className="flex-1 w-full relative perspective-[1000px]">
                {/* Glow behind cards */}
                <div className={`absolute inset-0 ${theme.accent} blur-[120px] opacity-20 rounded-full pointer-events-none -z-10`} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {programs.map((program: any, i: number) => (
                        <Link 
                            key={program.href} 
                            href={program.href}
                            className={`group relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ring-1 ring-slate-900/5`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${theme.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            {/* Animated Icon Container */}
                            <motion.div 
                                className={`w-14 h-14 rounded-2xl ${program.bg} ${program.color} ${program.border} border flex items-center justify-center mb-6 shadow-inner`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <program.icon size={28} />
                            </motion.div>
                            
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                                {program.title}
                            </h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{program.desc}</p>
                            
                            {/* Tech Corner Accent */}
                            <div className={`absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                <div className="w-2 h-2 rounded-full bg-slate-900/10" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
