import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { FutureVision } from "@/components/schools/shared/future-vision";
import { SustainabilityHero } from "@/components/schools/sustainability/hero";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bachelors of Sustainability | The Foundrys",
    description: "Merge environmental strategy with deep tech. Master ESG, Carbon Markets, and AI-driven sustainability solutions.",
    keywords: ["Sustainability School India", "ESG Career", "Climate Tech", "AI for Sustainability", "Green MBA Alternative"],
};

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen bg-white select-none">
            <Navbar />

            <SustainabilityHero />

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
                            <Link href="/payment?course=schoolOfSustainability&type=freshers" className="flex-1 lg:flex-none text-center px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                                Enroll Now
                            </Link>
                            <Link href="/contact" className="flex-1 lg:flex-none text-center px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-all border border-slate-300 active:scale-95 whitespace-nowrap">
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FutureVision
                schoolName="Sustainability"
                accentColor="#10b981" // Emerald
                whyAIImportant="The climate crisis is a high-dimensional problem that humans alone cannot compute. AI is the only tool capable of optimizing global supply chains for zero emissions, managing complex carbon markets, and predicting ecological shifts with granular accuracy. Sustainability in the 21st century is data science applied to survival."
                futureJobs={[
                    {
                        title: "AI Ecosystem Governor",
                        desc: "Managing autonomous planetary-scale networks that balance carbon credits and industrial output."
                    },
                    {
                        title: "Molecular Climate Architect",
                        desc: "Using generative AI to design new materials and carbon-capture systems at the atomic level."
                    },
                    {
                        title: "ESG Compliance AI Officer",
                        desc: "Leading organizations where transparent, real-time AI audits determine market valuation and survival."
                    }
                ]}
                outcomeStatement="A high-stakes sustainability leader capable of architecting circular economies and managing the transition to a planetary-scale, AI-optimized zero-carbon civilization."
            />

            <Footer />
        </main>
    );
}
