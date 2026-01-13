import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { BlockchainHero } from "@/components/programs/blockchain/hero";
import { BlockchainWhyUs } from "@/components/programs/blockchain/why-us";
import { BlockchainSkills } from "@/components/programs/blockchain/founder-skills";
import { BlockchainStats } from "@/components/programs/blockchain/program-stats";
import { BlockchainComparison } from "@/components/programs/blockchain/comparison";
import { BlockchainCurriculumAccordion } from "@/components/programs/blockchain/curriculum-accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain & Web3 Engineering | Decentralized Future",
  description: "Learn Solidity, Smart Contracts, and Zero Knowledge Proofs. Build the next Unicorn in Web3. Practical Blockchain course in Hyderabad.",
  keywords: ["Blockchain Course India", "Web3 Developer Job", "Solidity Bootcamp Hyderabad", "Smart Contract Development", "Crypto Career India"],
  openGraph: {
    title: "Blockchain & Web3 Engineering | Decentralized Future",
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
