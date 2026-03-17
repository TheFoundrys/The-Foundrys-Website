import { EventsClient } from "./EventsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Experiences | Shaping the Future of Tech",
  description: "Join our masterclasses, workshops, and founder talks. The Foundry's events are designed to turn ambition into action and connect you with the next generation of builders.",
  keywords: ["Deep Tech Events Hyderabad", "AI Workshops", "Founder Talks", "The Foundry Events", "Tech Community Hyderabad"],
};

export default function EventsPage() {
  return <EventsClient />;
}
