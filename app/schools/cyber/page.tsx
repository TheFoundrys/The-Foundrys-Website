"use strict";
import { CyberClient } from "@/components/scenes/cyber/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Cyber Security | The Foundrys",
  description: "Defend national infrastructure. Master Offensive Security, Red Teaming, and Zero Trust. High-paying cyber security careers start here.",
  keywords: ["Cyber Security Course Hyderabad", "Ethical Hacking Course India", "Red Teaming Training", "Information Security Career", "Network Defense"],
  openGraph: {
    title: "Bachelors of Cyber Security | The Foundrys",
    description: "Defend national infrastructure. Master Offensive Security, Red Teaming, and Zero Trust.",
    images: ["/cyber-hero.jpg"],
  },
};

export default function CyberProgramPage() {
  return <CyberClient />;
}
