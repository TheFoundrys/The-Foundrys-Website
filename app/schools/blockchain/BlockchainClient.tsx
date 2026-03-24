"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { BlockchainHero } from "@/components/schools/blockchain/hero";
import { BlockchainWhyUs } from "@/components/schools/blockchain/why-us";
import { BlockchainSkills } from "@/components/schools/blockchain/founder-skills";
import { BlockchainStats } from "@/components/schools/blockchain/program-stats";
import { BlockchainComparison } from "@/components/schools/blockchain/comparison";
import { BlockchainCurriculumAccordion } from "@/components/schools/blockchain/curriculum-accordion";
import { useLayoutEffect } from "react";

export default function BlockchainClient() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A051E] select-none">
      <Navbar />
      <BlockchainHero />
      <BlockchainWhyUs />
      <BlockchainStats />
      <BlockchainSkills />
      <BlockchainComparison />
      <BlockchainCurriculumAccordion />
      <Footer />
    </main>
  );
}
