import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { VentureHero } from "@/components/schools/venture-building/hero";
import Link from "next/link";
import { VentureWhyUs } from "@/components/schools/venture-building/why-us";
import { MBAProgramDetails } from "@/components/schools/certified-innovator/program-details";
import { FutureVision } from "@/components/schools/shared/future-vision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Venture Building | The Foundrys",
  description: "Stop looking for a job. Create jobs. Learn to validate ideas, build teams, and raise funding. The best alternative to an MBA.",
  keywords: ["Startup Course for Students", "Entrepreneurship Program India", "How to build a startup", "Business School Alternative", "Founder Training"],
};

export default function VentureBuildingPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      <VentureHero />

      {/* Program Details Card */}
      <div className="relative z-20 px-4 -mt-14 mb-12">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 text-slate-900">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Length</p>
                <p className="text-lg font-bold">3-Year Full-Time</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Delivery Mode</p>
                <p className="text-lg font-bold">On-Campus, Immersive</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Campus</p>
                <p className="text-lg font-bold">Hyderabad, India</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Admissions</p>
                <p className="text-lg font-bold">Now Open</p>
              </div>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <Link href="/payment?course=schoolOfVenture&type=freshers" className="flex-1 lg:flex-none text-center px-8 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                Enroll Now
              </Link>
              <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <VentureWhyUs />
      <MBAProgramDetails />
      <FutureVision
        schoolName="Venture Building"
        whyAIImportant="In the next decade, startups won't just 'use' AI; they will be autonomous AI-native entities. Venture building today requires understanding how to architect business logic that resides directly within LLMs and agentic swarms. Traditional business models are failing because they can't match the zero-marginal-cost execution of AI."
        futureJobs={[
          {
            title: "AI-Venture Architect",
            desc: "Designing autonomous business units that run with 90%+ automation using agentic workflows."
          },
          {
            title: "Algorithmic Growth Officer",
            desc: "Managing neural-network driven customer acquisition and retention loops that evolve in real-time."
          },
          {
            title: "Decentralized CEO",
            desc: "Governing global, AI-coordinated organizations that operate without traditional central management."
          }
        ]}
        outcomeStatement="A high-velocity founder capable of building a 'Unicorn of One'—an AI-native startup that achieves massive scale with minimal human overhead and maximum technical leverage."
      />
      <Footer />
    </main>
  );
}
