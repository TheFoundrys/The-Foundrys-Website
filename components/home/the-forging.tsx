"use client";
import { Hammer, Flame, Anvil, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function TheForging() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 md:flex items-end justify-between border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
                <h4 className="text-blue-600 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Flame size={18} /> The Process
                </h4>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
                    The Forging.
                </h2>
                <p className="mt-4 text-xl text-slate-500 leading-relaxed">
                    We don't just teach. We refine raw potential into sovereign capability. <br className="hidden md:block"/>
                    A 3-year metamorphosis from Student to Founder.
                </p>
            </div>
            <div className="hidden md:block text-right">
                 <div className="text-slate-400 font-mono text-sm">EST. TIME: 36 MONTHS</div>
                 <div className="text-slate-400 font-mono text-sm">INTENSITY: HIGH</div>
            </div>
        </div>

        {/* The 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

            {/* Year 1 */}
            <Step 
                year="01" 
                title="The Raw Material" 
                subtitle="Foundation & Mental Models"
                icon={<Anvil size={32} />}
                desc="Strip away the noise. Master the first principles of Physics, Code, and Economics. You are not learning to pass tests; you are learning to think."
                tags={["First Principles", "Systems Thinking", "Core Tech"]}
            />

             {/* Year 2 */}
             <Step 
                year="02" 
                title="The Mold" 
                subtitle="Prototyping & Iteration"
                icon={<Hammer size={32} />}
                desc="Theory hits reality. You enter the workshop to build, break, and rebuild. Hackathons, 24-hour sprints, and failure are your new teachers."
                tags={["Rapid Prototyping", "Product Design", "Failure Labs"]}
            />

             {/* Year 3 */}
             <Step 
                year="03" 
                title="The Architecture" 
                subtitle="Venture Creation & Scale"
                icon={<Flame size={32} />}
                desc="The final tempering. You don't graduate with a resume; you launch with a pitch deck, a product, and a seed round. You are now an Architect."
                tags={["Incubation", "Seed Funding", "Market Launch"]}
            />
        </div>

      </div>
    </section>
  );
}

function Step({ year, title, subtitle, icon, desc, tags }: { year: string, title: string, subtitle: string, icon: React.ReactNode, desc: string, tags: string[] }) {
    return (
        <div className="group">
            <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:border-blue-500 transition-all duration-300 relative">
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                    {icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {year}
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-4">{subtitle}</p>
            
            <p className="text-slate-500 leading-relaxed mb-6">
                {desc}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
