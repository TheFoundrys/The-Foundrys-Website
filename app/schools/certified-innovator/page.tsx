import { StrategyClient } from "@/components/scenes/strategy/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Innovator | The Foundrys",
  description: "Master the game of business. A 4-year integrated program: 3 years of AI Engineering + 1 year MBA. Prepare for founder and C-Suite roles.",
  keywords: ["Bachelor of AI + MBA", "Integrated MBA Program India", "Business Strategy Course", "Leadership Training", "Certified Innovator MBA"],
};

export default function CertifiedInnovatorPage() {
  return <StrategyClient />;
}
