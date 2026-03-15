
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { RenewableEnergyHero } from "@/components/schools/renewable-energy/hero";
import Link from "next/link";
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

      {/* Program Details Card */}
      <div className="relative z-20 px-4 -mt-14 mb-12">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 text-slate-900">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Length</p>
                <p className="text-lg font-bold">3-Year Full-Time</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Delivery Mode</p>
                <p className="text-lg font-bold">On-Campus, Immersive</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Campus</p>
                <p className="text-lg font-bold">Hyderabad, India</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Admissions</p>
                <p className="text-lg font-bold">Now Open</p>
              </div>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <Link href="/payment?course=schoolOfEnergy&type=freshers" className="flex-1 lg:flex-none text-center px-8 py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                Enroll Now
              </Link>
              <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RenewableEnergyWhyUs />
      <RenewableEnergyStats />
      <RenewableEnergySkills />
      <RenewableEnergyComparison />

      <Footer />
    </main>
  );
}
