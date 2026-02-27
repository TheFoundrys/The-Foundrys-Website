"use client";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { AIHero } from "@/components/schools/cyber/hero";
import { WhyUs } from "@/components/schools/cyber/why-us";
import { ProgramStats } from "@/components/schools/cyber/program-stats";
import { EngineeringSkills } from "@/components/schools/cyber/engineering-skills";
import { ComparisonSection } from "@/components/schools/cyber/comparison";
import { PostAIJobs } from "@/components/schools/cyber/post-ai-jobs";
import { WhyThisProgram } from "@/components/schools/cyber/why-this-program";
import { motion } from "framer-motion";

export function CyberClient() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30">
      <Navbar />

      {/* 1. Hero */}
      <AIHero />

      {/* 2. Why Us */}
      <WhyUs />

      {/* 3. Why This Program */}
      <WhyThisProgram />

      {/* 3. Stats */}
      <ProgramStats />

      {/* 4. Skills */}
      <EngineeringSkills />

      {/* 5. Future Jobs */}
      <PostAIJobs />

      {/* 7. Comparison */}
      <ComparisonSection />


      <Footer />
    </main>
  );
}
