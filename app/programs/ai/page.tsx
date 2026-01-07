import { Navbar } from "@/components/ui/navbar";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { AIHero } from "@/components/programs/ai/hero";
import { WhyUs } from "@/components/programs/ai/why-us";
import { EngineeringSkills } from "@/components/programs/ai/founder-skills"; // File name kept, component renamed
import { ProgramStats } from "@/components/programs/ai/program-stats";
import { ComparisonSection } from "@/components/programs/ai/comparison";
import { CurriculumAccordion } from "@/components/programs/ai/curriculum-accordion";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
        <AIHero />
        <WhyUs />
        <ProgramStats />
        <EngineeringSkills />
        <ComparisonSection />
        <CurriculumAccordion />



        <Footer />
    </main>
  );
}



