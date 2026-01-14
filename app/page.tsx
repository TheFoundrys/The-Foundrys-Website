import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/hero";
import { InfiniteLogoScroll } from "@/components/ui/infinite-logo-scroll";
import { Philosophy } from "@/components/philosophy";
import { Triad } from "@/components/triad";
import { Campus } from "@/components/campus";
import { Stack } from "@/components/stack";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { ArchetypeColumns } from "@/components/home/archetype-columns";
import { TheForging } from "@/components/home/the-forging";

export const metadata: Metadata = {
  title: "The Foundry's | India's First Deep Tech & Venture School",
  description: "The Foundry's: A new era of education in Hyderabad. Bridging the gap in Deep Tech, Sustainability, and Entrepreneurship. Forging Architects, not just Graduates.",
  alternates: {
    canonical: "https://thefoundrys.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
        <Hero />
        <Philosophy />
        <Triad />
        <Campus />
        <Stack />
        
        {/* Section 2: The Archetypes */}
        <ArchetypeColumns />
        
        {/* Section 3: The Forging */}
        <TheForging />

        <InfiniteLogoScroll />
        <Footer />
    </main>
  );
}
