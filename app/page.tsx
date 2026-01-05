import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Triad } from "@/components/triad";
import { Campus } from "@/components/campus";
import { Stack } from "@/components/stack";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
        <Hero />
        <Philosophy />
        <Triad />
        <Campus />
        <Stack />
        <Footer />
    </main>
  );
}
