import { BlogClient } from "./BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transmissions from the Edge | Deep Tech Insights & News",
  description: "Explore the latest insights on Artificial Intelligence, Cybersecurity, and Deep Tech from The Foundry's Editorial team. Stay updated with the mapping of tomorrow.",
  keywords: ["Deep Tech Blog", "AI Engineering Insights", "Cybersecurity Trends", "The Foundry News", "Future Technology Mapping"],
};

export default function BlogPage() {
  return <BlogClient />;
}
