import { Navbar } from "@/components/ui/navbar";
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

         {/* Admissions CTA */}
        <section className="py-24 bg-blue-600 text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to engineer the future?</h2>
            <button className="px-12 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                APPLY FOR PROGRAM
            </button>
        </section>

        <Footer />
    </main>
  );
}



