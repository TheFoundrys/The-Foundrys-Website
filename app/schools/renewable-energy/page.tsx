
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { RenewableEnergyHero } from "@/components/schools/renewable-energy/hero";
import { RenewableEnergyWhyUs } from "@/components/schools/renewable-energy/why-us";
import { RenewableEnergySkills } from "@/components/schools/renewable-energy/founder-skills";
import { RenewableEnergyStats } from "@/components/schools/renewable-energy/program-stats";
import { RenewableEnergyComparison } from "@/components/schools/renewable-energy/comparison";
import { RenewableEnergyCurriculumAccordion } from "@/components/schools/renewable-energy/curriculum-accordion";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Renewable Energy | The Foundrys",
  description: "A comprehensive program exploring solar, wind, and smart grid technologies. We focus on the engineering and implementation of sustainable power systems for the future.",
  keywords: ["Renewable Energy Engineering", "Solar Power Systems", "Smart Grid Technology", "Sustainable Energy Course", "Power Systems Engineering"],
};

export default function RenewableEnergyPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-800 overflow-x-hidden" style={{ backgroundColor: "#EAEAE5" }}>
      <Navbar />
      <RenewableEnergyHero />
      <RenewableEnergyWhyUs />

      {/* Consolidated Program Mix (Stats) & Core Competencies (Skills) */}
      <section className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-[#DCE7F1] border border-[#c5d8ec] rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <RenewableEnergyStats />
        <RenewableEnergySkills />
      </section>

      {/* Comparison block */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-8 overflow-hidden relative">
        <RenewableEnergyComparison />
      </div>

      {/* Curriculum block */}
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 rounded-1xl shadow-lg shadow-black/15 mt-[30px] mb-16 overflow-hidden relative">
        <RenewableEnergyCurriculumAccordion />
      </div>

      <Footer />
    </main>
  );
}
