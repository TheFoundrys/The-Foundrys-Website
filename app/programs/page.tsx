import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { OnlineHero } from "@/components/online-learning/hero";
import { CompassFeature } from "@/components/online-learning/compass-feature";
import { ExecutiveCourses } from "@/components/online-learning/executive-courses";
import { ProgramPathways } from "@/components/online-learning/program-pathways";
import { ValueProposition } from "@/components/online-learning/value-proposition";

export const metadata: Metadata = {
  title: "Online Programs & Executive Learning | The Foundry's",
  description: "Advanced online degrees and executive certifications in Deep Tech, Entrepreneurship, and Leadership. Access the Compass Portal.",
};

export default function OnlineProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <OnlineHero />
      <ProgramPathways />
      <ValueProposition />

      <ExecutiveCourses />
      <CompassFeature />


      <Footer />
    </main>
  );
}
