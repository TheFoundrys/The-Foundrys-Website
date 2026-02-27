
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { RenewableEnergyHero } from "@/components/schools/renewable-energy/hero";
import { RenewableEnergyWhyUs } from "@/components/schools/renewable-energy/why-us";
import { RenewableEnergySkills } from "@/components/schools/renewable-energy/founder-skills";
import { RenewableEnergyStats } from "@/components/schools/renewable-energy/program-stats";
import { RenewableEnergyComparison } from "@/components/schools/renewable-energy/comparison";
// import { RenewableEnergyCurriculumAccordion } from "@/components/schools/renewable-energy/curriculum-accordion";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Renewable Energy | The Foundrys",
  description: "A comprehensive program exploring solar, wind, and smart grid technologies. We focus on the engineering and implementation of sustainable power systems for the future.",
  keywords: ["Renewable Energy Engineering", "Solar Power Systems", "Smart Grid Technology", "Sustainable Energy Course", "Power Systems Engineering"],
};

export default function RenewableEnergyPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      <RenewableEnergyHero />
      <RenewableEnergyWhyUs />
      <RenewableEnergyStats />
      <RenewableEnergySkills />
      <RenewableEnergyComparison />

      <Footer />
    </main>
  );
}
