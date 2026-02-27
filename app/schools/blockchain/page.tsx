import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { BlockchainHero } from "@/components/schools/blockchain/hero";
import { BlockchainWhyUs } from "@/components/schools/blockchain/why-us";
import { BlockchainSkills } from "@/components/schools/blockchain/founder-skills";
import { BlockchainStats } from "@/components/schools/blockchain/program-stats";
import { BlockchainComparison } from "@/components/schools/blockchain/comparison";
import { BlockchainCurriculumAccordion } from "@/components/schools/blockchain/curriculum-accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Blockchain | The Foundrys",
  description: "Learn Solidity, Smart Contracts, and Zero Knowledge Proofs. Build the next Unicorn in Web3. Practical Blockchain course in Hyderabad.",
  keywords: ["Blockchain Course India", "Web3 Developer Job", "Solidity Bootcamp Hyderabad", "Smart Contract Development", "Crypto Career India"],
  openGraph: {
    title: "Bachelors of Blockchain | The Foundrys",
    description: "Learn Solidity, Smart Contracts, and Zero Knowledge Proofs. Build the next Unicorn in Web3.",
    images: ["/blockchain-hero.jpg"],
  },
};

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
