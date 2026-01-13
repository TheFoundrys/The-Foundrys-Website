"use strict";
import { ClimateClient } from "@/components/scenes/climate/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Climate Change Engineering | School of Sustainability",
  description: "An advanced engineering program dedicated to climate mitigation and adaptation strategies, including Carbon Capture, Geo-Engineering, and Environmental Policy.",
  keywords: ["Climate Change Engineering", "Environmental Engineering", "Carbon Capture Technology", "Sustainability Sciences", "Geo-Engineering Solutions"],
};

export default function ClimatePage() {
  return <ClimateClient />;
}
