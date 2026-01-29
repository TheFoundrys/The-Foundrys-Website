import { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import AIClient from "./AIClient";

export const metadata: Metadata = {
  title: "Best AI Engineering College in Hyderabad | Alternative to B.Tech CSE",
  description: "Learn to build LLMs, Agents, and Neural Networks. The perfect alternative to B.Tech for students who want to be AI Engineers, not just graduates.",
  keywords: ["AI Engineering", "Best AI College Hyderabad", "Artificial Intelligence Course after 12th", "B.Tech AI Alternative", "Practical AI Learning"],
  alternates: {
      canonical: "https://thefoundrys.com/programs/professional/ai",
  },
};

const aiFaqs = [
    {
        question: "Is this AI program better than a B.Tech in CSE?",
        answer: "Yes, for students who want to build. A standard B.Tech spends 3 years on theory. At The Foundry's, you start building Neural Networks and AI Agents in your first year. We focus on 'shipping', not exams."
    },
    {
        question: "Can I get a high paying job with this certification?",
        answer: "Absolutely. Companies hire for skills, not degrees. Our graduates portfolio includes deployed AI agents and LLMs, which makes them more valuable than freshers with just a degree."
    }
];

export default function AIPage() {
  return (
    <>
      <FaqJsonLd questions={aiFaqs} />
      <AIClient />
    </>
  );
}
