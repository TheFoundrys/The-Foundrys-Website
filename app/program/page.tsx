import { Navbar } from "@/components/ui/navbar";
import { ProgramHero } from "@/components/program/hero";
import { Problem } from "@/components/program/problem";
import { Solution } from "@/components/program/solution";
import { Tracks } from "@/components/program/tracks";
import { Footer } from "@/components/footer";

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
        <ProgramHero />
        <Problem />
        <Solution />
        <Tracks />
        
        {/* Simple CTA Section */}
        <section className="py-24 bg-slate-900 border-t border-slate-800 text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to compile?</h2>
            <button className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all">
                SECURE YOUR SEAT
            </button>
        </section>

        <Footer />
    </main>
  );
}
