import { Navbar } from "@/components/ui/navbar";

import { Footer } from "@/components/footer";
import { AIHero } from "@/components/schools/ai/hero";
import { WhyUs } from "@/components/schools/ai/why-us";
import { EngineeringSkills } from "@/components/schools/ai/founder-skills"; // File name kept, component renamed
import { ProgramStats } from "@/components/schools/ai/program-stats";
import { ComparisonSection } from "@/components/schools/ai/comparison";
import { EntrepreneurshipHighlight } from "@/components/schools/ai/entrepreneurship-highlight";
import { FutureVision } from "@/components/schools/shared/future-vision";
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
      <EntrepreneurshipHighlight />
      <FutureVision
        schoolName="Artificial Intelligence"
        accentColor="#2563eb" // Blue
        whyAIImportant="AI is not a sector; it is the new substrate of reality. Within 10 years, any organization not built on an AI-first architecture will be as obsolete as a company without internet today. We are moving from 'software eating the world' to 'AI architecting the world' in real-time."
        futureJobs={[
          {
            title: "Agentic Systems Architect",
            desc: "Designing swarms of autonomous agents that manage entire departments with zero human intervention."
          },
          {
            title: "Neural Synergy Officer",
            desc: "Optimizing the interface between specialized LLMs and proprietary data to create infinite business leverage."
          },
          {
            title: "Synthetic Reality Designer",
            desc: "Governing the generation of data, media, and environments that power the post-labor economy."
          }
        ]}
        outcomeStatement="A high-tier AI Engineer capable of not just training models, but architecting the autonomous infrastructure that will power the next 50 years of human civilization."
      />



      <Footer />
    </main>
  );
}



