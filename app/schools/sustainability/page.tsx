import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { FutureVision } from "@/components/schools/shared/future-vision";
import { SustainabilityHero } from "@/components/schools/sustainability/hero";
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
