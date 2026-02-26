import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { MBAHero } from "@/components/schools/certified-innovator/mba-hero";
import { MBAProgramDetails } from "@/components/schools/certified-innovator/program-details";
import { FutureVision } from "@/components/schools/shared/future-vision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Innovator MBA (3+1) | Bachelor of AI + MBA",
  description: "Master the game of business. A 4-year integrated program: 3 years of AI Engineering + 1 year MBA. Prepare for founder and C-Suite roles.",
  keywords: ["Bachelor of AI + MBA", "Integrated MBA Program India", "Business Strategy Course", "Leadership Training", "Certified Innovator MBA"],
};

export default function CertifiedInnovatorPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      <MBAHero />
      <MBAProgramDetails />
      <FutureVision
        schoolName="Certified Innovator MBA"
        accentColor="#4f46e5" // Indigo
        whyAIImportant="AI is shifting the nature of leadership from resource management to algorithmic governance. A future CEO won't just manage people; they will manage cognitive architectures. Innovators who don't understand the underlying physics of Intelligence will be unable to lead the organizations that build the future."
        futureJobs={[
          {
            title: "Neural-Network CEO",
            desc: "Leading organizations where the core value proposition and operations are governed by proprietary, fine-tuned model architectures."
          },
          {
            title: "Chief Automation Officer",
            desc: "Architecting the transition of multi-billion dollar enterprises into fully autonomous, lean entities."
          },
          {
            title: "Ecosystem Strategist",
            desc: "Navigating the complex interplay between human capital, agentic labor, and decentralized autonomous markets."
          }
        ]}
        outcomeStatement="A transformative leader—a Technical CEO—who possesses both the engineering depth of an AI Architect and the strategic vision to scale global, AI-native organizations."
      />
      <Footer />
    </main>
  );
}
