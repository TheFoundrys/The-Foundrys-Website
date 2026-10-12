"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

export default function AILeadershipPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-24 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Strategic AI Leadership</h1>
        <p className="text-lg text-slate-600">Curriculum and details coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
