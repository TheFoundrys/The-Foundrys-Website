import { Metadata } from "next";
import ExecutiveLandingClient from "./ExecutiveLandingClient";

export const metadata: Metadata = {
    title: "Executive Leadership Programs | The Foundry's",
    description: "Executive education for the age of AI. Programs designed for CTOs, VPs, and Senior Technical Leaders to master systems-level authority.",
    keywords: ["Executive Leadership", "CTO Training", "Tech Leadership", "AI Strategy", "System Design"],
    alternates: {
        canonical: "https://thefoundrys.com/programs/executive",
    },
};

export default function ExecutivePage() {
    return (
        <ExecutiveLandingClient />
    );
}
