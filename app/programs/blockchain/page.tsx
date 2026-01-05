import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

export default function BlockchainPage() {
  return (
    <main className="min-h-screen bg-white select-none">
        <Navbar />
         <section className="pt-40 pb-20 px-4 text-center">
             <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 font-mono text-xs font-bold uppercase tracking-wider">
                The Trust Layer
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6">Blockchain Engineering</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Smart Contracts, DeFi, and ZK-Rollups. Build the new internet.
            </p>
        </section>
        <Footer />
    </main>
  );
}
