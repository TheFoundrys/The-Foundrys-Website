import { Metadata } from "next";
import FellowExecutiveClient from "./FellowExecutiveClient";

export const metadata: Metadata = {
    title: "Fellow Executive Program | The Foundry's",
    description: "Executive education and integrated MBA programs for the age of AI. Designed for senior technical leaders, CTOs, and future technical CEOs.",
    keywords: ["Fellow Executive Program", "Executive Leadership", "CTO Training", "Tech Leadership", "AI Strategy", "MBA in AI", "Certified Innovator"],
    alternates: {
        canonical: "https://thefoundrys.com/programs/fellow-executive",
    },
};

export default function FellowExecutivePage() {
    return (
        <FellowExecutiveClient />
    );
}
