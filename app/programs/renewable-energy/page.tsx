
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { RenewableEnergyHero } from "@/components/programs/renewable-energy/hero";
import { RenewableEnergyWhyUs } from "@/components/programs/renewable-energy/why-us";
import { RenewableEnergySkills } from "@/components/programs/renewable-energy/founder-skills";
import { RenewableEnergyStats } from "@/components/programs/renewable-energy/program-stats";
import { RenewableEnergyComparison } from "@/components/programs/renewable-energy/comparison";
import { RenewableEnergyCurriculumAccordion } from "@/components/programs/renewable-energy/curriculum-accordion";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewable Energy & Smart Grids | School of Energy",
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
        <RenewableEnergyCurriculumAccordion />
        <Footer />
    </main>
  );
}
