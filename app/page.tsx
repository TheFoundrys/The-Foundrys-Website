import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/hero";
import { InfiniteLogoScroll } from "@/components/ui/infinite-logo-scroll";
import { Philosophy } from "@/components/philosophy";
import { Triad } from "@/components/triad";
import { Campus } from "@/components/campus";
import { Stack } from "@/components/stack";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Foundry's | India's First Deep Tech & Venture School",
  description: "Degrees are printed. Companies are built.   We forge Architects in AI, Blockchain, Quantum, and Energy.",
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
        <InfiniteLogoScroll />
        <Footer />
    </main>
  );
}
