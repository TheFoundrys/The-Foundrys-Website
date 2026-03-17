import { AboutClient } from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Vision | Forging Architects of the Future",
  description: "Learn about the origin, mission, and vision of The Foundry's. Meet our founder, Vishwanath Akuthota, and discover how we're bridging the void in Deep Tech education.",
  keywords: ["Educational Vision", "Deep Tech School Hyderabad", "The Foundry Origin", "Vishwanath Akuthota Founder", "Building Future Architects"],
};

export default function AboutPage() {
  return <AboutClient />;
}
