import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { VentureHero } from "@/components/schools/venture-building/hero";
import { VentureWhyUs } from "@/components/schools/venture-building/why-us";
import { MBAProgramDetails } from "@/components/schools/certified-innovator/program-details";
import { FutureVision } from "@/components/schools/shared/future-vision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venture Building School | Build Your Own Startup",
  description: "Stop looking for a job. Create jobs. Learn to validate ideas, build teams, and raise funding. The best alternative to an MBA.",
  keywords: ["Startup Course for Students", "Entrepreneurship Program India", "How to build a startup", "Business School Alternative", "Founder Training"],
};

export default function VentureBuildingPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      <VentureHero />
      <VentureWhyUs />
      <MBAProgramDetails />
      <FutureVision
        schoolName="Venture Building"
        whyAIImportant="In the next decade, startups won't just 'use' AI; they will be autonomous AI-native entities. Venture building today requires understanding how to architect business logic that resides directly within LLMs and agentic swarms. Traditional business models are failing because they can't match the zero-marginal-cost execution of AI."
        futureJobs={[
          {
            title: "AI-Venture Architect",
            desc: "Designing autonomous business units that run with 90%+ automation using agentic workflows."
          },
          {
            title: "Algorithmic Growth Officer",
            desc: "Managing neural-network driven customer acquisition and retention loops that evolve in real-time."
          },
          {
            title: "Decentralized CEO",
            desc: "Governing global, AI-coordinated organizations that operate without traditional central management."
          }
        ]}
        outcomeStatement="A high-velocity founder capable of building a 'Unicorn of One'—an AI-native startup that achieves massive scale with minimal human overhead and maximum technical leverage."
      />
      <Footer />
    </main>
  );
}
