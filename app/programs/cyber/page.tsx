"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { AIHero } from "@/components/programs/cyber/hero";
import { WhyUs } from "@/components/programs/cyber/why-us";
import { ProgramStats } from "@/components/programs/cyber/program-stats";
import { EngineeringSkills } from "@/components/programs/cyber/engineering-skills";
import { ComparisonSection } from "@/components/programs/cyber/comparison";
import { CurriculumAccordion } from "@/components/programs/cyber/curriculum-accordion";
import { MoveRight } from "lucide-react";

export default function CyberProgramPage() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      {/* 1. Hero (Reverted to clean version) */}
      <AIHero />

      {/* 2. Why Us (Enhanced 3D Wireframe) */}
      <WhyUs />
      
      {/* 3. Stats (Enhanced Radar Scan) */}
      <ProgramStats />
      
      {/* 4. Skills (Enhanced Decrypt Effect - 'Core Mastery') */}
      <EngineeringSkills />
      
      {/* 5. Comparison (Enhanced Diff Style - 'Education is Evolving') */}
      <ComparisonSection />

      {/* 6. Curriculum */}
      <CurriculumAccordion />

      {/* 7. Admissions CTA (Cyber Themed) */}
      <section className="py-24 bg-emerald-600 text-center px-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                  Ready to <span className="text-emerald-950">Breach</span> the Industry?
              </h2>
              <button className="px-12 py-5 bg-slate-950 text-emerald-400 border border-emerald-500/30 rounded-none font-bold text-lg hover:bg-slate-900 hover:text-emerald-300 transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] flex items-center gap-3 mx-auto uppercase tracking-widest group-hover:scale-105">
                  INITIATE_APPLICATION <MoveRight className="w-5 h-5" />
              </button>
          </div>
      </section>
      
      <Footer />
    </main>
  );
}
