import { Metadata } from "next";
import BlockchainClient from "./BlockchainClient";

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
  return <BlockchainClient />;
}
