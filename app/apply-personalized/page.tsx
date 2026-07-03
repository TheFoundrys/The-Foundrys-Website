"use strict";
import { ApplyPersonalizedClient } from "@/components/scenes/apply-personalized/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Personalized Learning | The Foundry's Deep Tech School",
  description: "Admissions Open for upcoming cohorts. Secure your spot in India's first Deep Tech & Venture Building school. Apply now.",
  keywords: ["College Admission Hyderabad", "Apply to The Foundry", "Engineering Admission 2026", "Entrance Exam Alternative", "Course Application"],
};

export default function ApplyPersonalizedPage() {
  return <ApplyPersonalizedClient />;
}
