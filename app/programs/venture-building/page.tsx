"use strict";
import { VentureClient } from "@/components/scenes/venture-building/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venture Building School | Build Your Own Startup",
  description: "Stop looking for a job. Create jobs. Learn to validate ideas, build teams, and raise funding. The best alternative to an MBA.",
  keywords: ["Startup Course for Students", "Entrepreneurship Program India", "How to build a startup", "Business School Alternative", "Founder Training"],
};

export default function VentureBuildingPage() {
  return <VentureClient />;
}
