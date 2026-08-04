import { Footer } from "@/components/footer";
import { Navbar } from "@/components/ui/navbar";
import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-playfair"
});

export const metadata: Metadata = {
    title: "Centre of Excellence | The Foundry's",
    description:
        "Build institutional learning infrastructure and explore Skill Compass, The Foundry's AI-powered learning platform."
};

const excellencePillars = [
    {
        id: "01",
        title: "High-Performance Computing",
        desc: "Infrastructure for AI, simulation, cybersecurity, data and advanced research workloads."
    },
    {
        id: "02",
        title: "Integrated Labs",
        desc: "Applied labs that connect Deeptech, entrepreneurship, sustainability and energy."
    },
    {
        id: "03",
        title: "Curriculum & Faculty Enablement",
        desc: "Industry-aligned curriculum, train-the-trainer programs and execution frameworks."
    },
    {
        id: "04",
        title: "Innovation & Industry Collaboration",
        desc: "Project studios, research pathways, startup support and enterprise engagement."
    }
];

const skillCompassFeatures = [
    "AI-powered learning recommendations",
    "Integrated payment gateway and enrollment",
    "Program content, assignments and assessments",
    "Mentorship, progress tracking and learner analytics",
    "Institutional dashboards and cohort management"
];

export default function CentreOfExcellencePage() {
    return (
        <main className={`programs-light-page min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-lime-vibrant/20 selection:text-lime-vibrant ${playfair.variable}`}>
            <Navbar />

            <section className="pt-36 pb-24 px-6 sm:px-12 lg:px-16 relative">
                <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-[1px] bg-lime-vibrant" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant font-sans">Centre of excellence</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-serif leading-tight">
                            Build the infrastructure <br />
                            to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">learn, research and innovate.</span>
                        </h1>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                            The Foundry&apos;s Centre of Excellence model helps institutions establish high-performance computing, specialized labs, applied curriculum, faculty enablement and multidisciplinary research environments across the Schools of Thought.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-slate-100 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Discuss a CoE Partnership
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {excellencePillars.map((item) => (
                            <div key={item.id} className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-white/20 transition-colors">
                                <div className="text-lg font-extrabold text-lime-vibrant mb-3">{item.id}</div>
                                <h2 className="font-bold text-white text-sm mb-2">{item.title}</h2>
                                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 sm:px-12 lg:px-16 relative">
                <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-[1px] bg-lime-vibrant" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-vibrant font-sans">Skill compass</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-serif leading-tight">
                            One AI-powered platform <br />
                            for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-lime-vibrant italic font-serif font-normal">complete learning journey.</span>
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                            Skill Compass is The Foundry&apos;s AI-powered learning management system that brings discovery, enrollment, payments, learning, assessment, mentoring and progress tracking into one seamless customer experience.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="https://compass.thefoundrys.com"
                                target="_blank"
                                className="inline-flex px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-slate-100 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Start Learning
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {skillCompassFeatures.map((feature) => (
                            <div key={feature} className="p-4 rounded-xl bg-slate-900/30 border border-white/10 hover:border-white/20 transition-colors flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-lime-vibrant shrink-0" />
                                <span className="text-slate-200 text-sm font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
