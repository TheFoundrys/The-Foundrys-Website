import { TestimonialsClient } from "./TestimonialsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Stories of Transformation | The Foundrys",
  description: "Read real stories of transformation from our alumni who successfully transitioned into high-impact roles in AI, Data Science, and Cybersecurity under our practical mentorship.",
  keywords: ["The Foundrys Reviews", "The Foundrys Testimonials", "Deep Tech Careers", "AI Student Stories", "Vishwankath Akuthota Mentorship Reviews"],
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
