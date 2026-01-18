"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";

export default function BlockchainPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <section className="pt-32 pb-24 px-6 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Blockchain</h1>
        <p className="text-lg text-slate-600 mb-12">Professional Certification Program</p>
        
        <div className="max-w-2xl mx-auto p-12 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔗</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Curriculum Loading...</h2>
            <p className="text-slate-500">Detailed syllabus and enrollment information will be available here shortly.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
