import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Artificial Intelligence | The Foundrys",
  description: "Master LLMs, Neural Networks, and Agentic AI. Build real-world AI applications. The most advanced AI engineering course in India.",
  keywords: ["AI Engineering Course India", "LLM Training Hyderabad", "Best AI College", "Artificial Intelligence Career", "Agentic AI Course"],
  openGraph: {
    title: "Bachelors of Artificial Intelligence | The Foundrys",
    description: "Master LLMs, Neural Networks, and Agentic AI. Build real-world AI applications.",
    images: ["/ai-hero.jpg"],
  },
};

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
