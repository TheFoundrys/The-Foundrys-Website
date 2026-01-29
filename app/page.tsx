import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/hero";
import { InfiniteLogoScroll } from "@/components/ui/infinite-logo-scroll";
import { Philosophy } from "@/components/philosophy";
import { Triad } from "@/components/triad";
import { Campus } from "@/components/campus";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { ArchetypeColumns } from "@/components/home/archetype-columns";
import { FaqPreview } from "@/components/home/faq-preview";
import { TheForging } from "@/components/home/the-forging";
import { UniqueNeeds } from "@/components/home/unique-needs";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";

export const metadata: Metadata = {
  title: "The Foundry's | India's First Deep Tech & Venture School",
  description: "The Foundry's: India's first Deep Tech & Venture School in Hyderabad. The best alternative to traditional engineering for Class 12 & Intermediate MPC students. Forging innovators, not just Graduates.",
  alternates: {
    canonical: "https://thefoundrys.com",
  },
};

const homeFaqs = [
    {
        question: "Is The Foundry's better than a B.Tech Engineering College?",
        answer: "Yes. A traditional B.Tech is 4 years of theory. Ours is a **3-Year Degree** focused on building. You graduate one year earlier than your peers, saving time and money, while carrying a portfolio of live products instead of just exams."
    },
    {
        question: "Do you provide a recognized Degree?",
        answer: "Yes, we provide a **3-Year Degree**. Unlike a 4-year B.Tech, our accelerated model focuses on high-impact skills, allowing you to enter the workforce or launch a startup significantly faster."
    },
    {
        question: "Is The Foundry's suitable for Intermediate / Class 12 MPC Students?",
        answer: "Yes. It is designed specifically for bright minds finishing 12th/Intermediate MPC who feel traditional college is too slow for them. We are the best alternative to EAMCET/IIT for practical learners."
    },
    {
        question: "Do you guarantee a job placement?",
        answer: "We guarantee **competence**, not a job offer. We make you technically strong and future-ready. By the time you graduate, your portfolio and skills will speak louder than any placement cell."
    },
    {
        question: "Where is the campus located in Hyderabad?",
        answer: "We are located in the heart of the tech ecosystem in Hitech City, Hyderabad. Our campus is inside a corporate workspace, giving students exposure to the real working world from Day 1."
    },
    {
        question: "Can I join if I didn't qualify for JEE/EAMCET?",
        answer: "Absolutely. Standardized tests measure memory, not intelligence. We look for passion, logic, and the hunger to build. Our admission process is based on your potential, not your rank."
    }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white select-none">
        <FaqJsonLd questions={homeFaqs} />
        <Navbar />
        <Hero />
        <Philosophy />
        <Triad />
        <Campus />
        <UniqueNeeds />
        
        {/* Section 2: The Archetypes */}
        <ArchetypeColumns />
        
        {/* Section 3: The Forging */}
        <TheForging />

        <FaqPreview />
        <InfiniteLogoScroll />
        <Footer />
    </main>
  );
}
