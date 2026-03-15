import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
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
              <Link href="/payment?course=schoolOfBlockchain&type=freshers" className="flex-1 lg:flex-none text-center px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                Enroll Now
              </Link>
              <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BlockchainWhyUs />
      <BlockchainStats />
      <BlockchainSkills />
      <BlockchainComparison />
      <BlockchainCurriculumAccordion />
      <Footer />
    </main>
  );
}
