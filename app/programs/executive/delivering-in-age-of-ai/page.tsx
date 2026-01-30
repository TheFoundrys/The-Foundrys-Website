import { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import DeliveringClient from "./DeliveringClient";

export const metadata: Metadata = {
    title: "Delivering In the Age of AI | Executive Program",
    description: "Where Senior Tech Leaders become System Owners. Forge innovation as a framework to design, engineer, deploy, and govern critical systems in an AI-driven world.",
    keywords: ["Executive Leadership", "AI Governance", "Tech Leadership", "System Ownership", "AI Strategy for Executives"],
    alternates: {
        canonical: "https://thefoundrys.com/programs/executive/delivering-in-age-of-ai",
    },
};

const executiveFaqs = [
    {
        question: "Who is this program designed for?",
        answer: "This program is strictly designed for Senior Technology Leaders (Delivery, Program Managers, Architects, senior engineers and security leads), Founders & CTOs, and Technical Product Leaders operating in regulated domains."
    },
    {
        question: "Do I need a technical background?",
        answer: "While the program is for tech leaders, the focus is on systems-level authority, governance, and strategic architecture rather than hands-on coding. A deep conceptual understanding of technology is required."
    },
    {
        question: "What is the time commitment?",
        answer: "The cohort structure is designed for busy executives, consisting of a 2-day intensive hybrid or in-person session, followed by modular, execution-driven work."
    }
];

export default function DeliveringPage() {
    return (
        <>
            <FaqJsonLd questions={executiveFaqs} />
            <DeliveringClient />
        </>
    );
}
