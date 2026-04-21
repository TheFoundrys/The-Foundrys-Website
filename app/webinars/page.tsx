import { WebinarsClient } from "@/app/webinars/WebinarsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | Expert Insights & Learning",
  description: "Join our expert-led webinars on Deep Tech, AI, and Entrepreneurship. Gain knowledge from industry leaders and stay ahead in the tech landscape.",
  keywords: ["Deep Tech Webinars", "AI Webinars", "Tech Learning", "The Foundry Webinars", "Online Workshops"],
};

export default function WebinarsPage() {
  return <WebinarsClient />;
}

