"use strict";
import { StrategyClient } from "@/components/scenes/strategy/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Innovation & Leadership | Future CEOs",
  description: "Master the game of business. Market dynamics, global scaling, and leadership strategy. Prepare for C-Suite roles.",
  keywords: ["Business Strategy Course", "Leadership Training India", "CEO Program", "Strategic Management", "Future Business Leaders"],
};

export default function StrategyPage() {
  return <StrategyClient />;
}
