import { FaqClient } from "./FaqClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Everything About The Foundry's",
  description: "Get answers to common questions about The Foundry's curriculum, accreditation, admission process, and career outcomes. Learn why we're the best alternative to traditional engineering.",
  keywords: ["The Foundry's FAQ", "Engineering College FAQ Hyderabad", "Deep Tech Admission Questions", "Career After The Foundry", "Practical Engineering Degree FAQ"],
};

export default function FAQPage() {
  return <FaqClient />;
}
