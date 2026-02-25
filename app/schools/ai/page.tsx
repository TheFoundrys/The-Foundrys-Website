import { Navbar } from "@/components/ui/navbar";

import { Footer } from "@/components/footer";
import { AIHero } from "@/components/schools/ai/hero";
import { WhyUs } from "@/components/schools/ai/why-us";
import { EngineeringSkills } from "@/components/schools/ai/founder-skills"; // File name kept, component renamed
import { ProgramStats } from "@/components/schools/ai/program-stats";
import { ComparisonSection } from "@/components/schools/ai/comparison";
// import { EntrepreneurshipHighlight } from "@/components/schools/ai/entrepreneurship-highlight";
import { CurriculumAccordion } from "@/components/schools/ai/curriculum-accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence & Agentic AI | Best AI Course in Hyderabad",
  description: "Master LLMs, Neural Networks, and Agentic AI. Build real-world AI applications. The most advanced AI engineering course in India.",
  keywords: ["AI Engineering Course India", "LLM Training Hyderabad", "Best AI College", "Artificial Intelligence Career", "Agentic AI Course"],
  openGraph: {
    title: "Artificial Intelligence & Agentic AI | Best AI Course in Hyderabad",
    description: "Master LLMs, Neural Networks, and Agentic AI. Build real-world AI applications.",
    images: ["/ai-hero.jpg"],
  },
};

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      <AIHero />
      <WhyUs />
      <ProgramStats />
      <EngineeringSkills />
      <ComparisonSection />
      {/* <EntrepreneurshipHighlight /> */}
      <CurriculumAccordion />



      <Footer />
    </main>
  );
}



