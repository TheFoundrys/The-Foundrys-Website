"use strict";
import { ContactClient } from "@/components/scenes/contact/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hyderabad & Warangal Campuses",
  description: "Visit our campuses in Hyderabad and Warangal. Talk to our counselors about your future in Deep Tech and Entrepreneurship.",
  keywords: ["The Foundry Address", "Contact Number", "Hitech City Campus", "Warangal Campus", "Visit College Hyderabad", "Admissions Office"],
};

export default function ContactPage() {
  return <ContactClient />;
}
