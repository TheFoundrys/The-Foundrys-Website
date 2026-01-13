import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { BlockchainHero } from "@/components/programs/blockchain/hero";
import { BlockchainWhyUs } from "@/components/programs/blockchain/why-us";
import { BlockchainSkills } from "@/components/programs/blockchain/founder-skills";
import { BlockchainStats } from "@/components/programs/blockchain/program-stats";
import { BlockchainComparison } from "@/components/programs/blockchain/comparison";
import { BlockchainCurriculumAccordion } from "@/components/programs/blockchain/curriculum-accordion";

export default function BlockchainPage() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
        <BlockchainHero />
        <BlockchainWhyUs />
        <BlockchainStats />
        <BlockchainSkills />
        <BlockchainComparison />
        <BlockchainCurriculumAccordion />
        <Footer />
    </main>
  );
}
