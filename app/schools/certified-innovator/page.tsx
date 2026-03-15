import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { MBAHero } from "@/components/schools/certified-innovator/mba-hero";
import { MBAProgramDetails } from "@/components/schools/certified-innovator/program-details";
import Link from "next/link";
import { FutureVision } from "@/components/schools/shared/future-vision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Certified Innovation | The Foundrys",
  description: "Master the game of business. A 4-year integrated program: 3 years of AI Engineering + 1 year MBA. Prepare for founder and C-Suite roles.",
  keywords: ["Bachelor of AI + MBA", "Integrated MBA Program India", "Business Strategy Course", "Leadership Training", "Certified Innovator MBA"],
};

export default function CertifiedInnovatorPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <Navbar />
      <MBAHero />

      {/* Program Details Card */}
      <div className="relative z-20 px-4 -mt-14 mb-12">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 text-slate-900">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 flex-1 text-center lg:text-left w-full">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Program Length</p>
                <p className="text-lg font-bold">4-Year Integrated</p>
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
              <Link href="/payment?course=schoolOfInnovation&type=freshers" className="flex-1 lg:flex-none text-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                Enroll Now
              </Link>
              <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MBAProgramDetails />
      <FutureVision
        schoolName="Certified Innovator MBA"
        accentColor="#4f46e5" // Indigo
        whyAIImportant="AI is shifting the nature of leadership from resource management to algorithmic governance. A future CEO won't just manage people; they will manage cognitive architectures. Innovators who don't understand the underlying physics of Intelligence will be unable to lead the organizations that build the future."
        futureJobs={[
          {
            title: "Neural-Network CEO",
            desc: "Leading organizations where the core value proposition and operations are governed by proprietary, fine-tuned model architectures."
          },
          {
            title: "Chief Automation Officer",
            desc: "Architecting the transition of multi-billion dollar enterprises into fully autonomous, lean entities."
          },
          {
            title: "Ecosystem Strategist",
            desc: "Navigating the complex interplay between human capital, agentic labor, and decentralized autonomous markets."
          }
        ]}
        outcomeStatement="A transformative leader—a Technical CEO—who possesses both the engineering depth of an AI Architect and the strategic vision to scale global, AI-native organizations."
      />
      <Footer />
    </main>
  );
}
