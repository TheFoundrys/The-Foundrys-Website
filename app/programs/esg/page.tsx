import { ESGClient } from "@/components/scenes/esg/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG & Sustainability | School of Entrepreneurship",
  description: "Master Environmental, Social, and Governance strategies. Build sustainable ventures and lead the future of responsible business.",
  keywords: ["ESG Course India", "Sustainability Management", "Green Finance Course", "Corporate Social Responsibility", "Sustainable Business Strategy"],
  openGraph: {
    title: "ESG & Sustainability | School of Entrepreneurship",
    description: "Master Environmental, Social, and Governance strategies. Build sustainable ventures.",
    images: ["/foundry.jpg"], 
  },
};

export default function ESGPage() {
  return <ESGClient />;
}
