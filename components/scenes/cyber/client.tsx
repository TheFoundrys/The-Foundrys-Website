"use client";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { AIHero } from "@/components/schools/cyber/hero";
import { WhyUs } from "@/components/schools/cyber/why-us";
import { ProgramStats } from "@/components/schools/cyber/program-stats";
import { EngineeringSkills } from "@/components/schools/cyber/engineering-skills";
import { ComparisonSection } from "@/components/schools/cyber/comparison";
import { CurriculumAccordion } from "@/components/schools/cyber/curriculum-accordion";
import { MoveRight } from "lucide-react";

export function CyberClient() {
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

      <Footer />
    </main>
  );
}
