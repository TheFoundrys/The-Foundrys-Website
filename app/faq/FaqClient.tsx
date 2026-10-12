"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const allFaqs = [
    {
        category: "Academics & Degree",
        items: [
            {
                q: "Do you provide a recognized Degree?",
                a: "Yes. We offer a 3-Year Degree program. Unlike a traditional 4-year B.Tech, our model is accelerated and focused purely on high-impact skills. You graduate one year early with a portfolio of real-world products."
            },
            {
                q: "Is this better than a B.Tech?",
                a: "It depends on your goal. If you want a government stamp and theory, B.Tech is fine. If you want to build products, launch startups, and master AI/Cybersecurity, The Foundry's is the superior choice. We replace exams with product shipping."
            },
            {
                q: "Who are the faculty?",
                a: "We don't have 'professors'. We have 'Forgers'. Our mentors are CTOs, Founders, and Senior Engineers from the industry who teach what is actually used in the market today."
            }
        ]
    },
    {
        category: "Admissions & Eligibility",
        items: [
            {
                q: "Can I join after Intermediate / Class 12?",
                a: "Yes. This program is designed specifically for students finishing Class 12 (MPC/MEC) who are passionate about technology."
            },
            {
                q: "Do I need an EAMCET/JEE Rank?",
                a: "No. We believe standardized tests measure memory, not intelligence. Our admission is based on your passion, logic, and potential to build."
            }
        ]
    },
    {
        category: "Career & Placements",
        items: [
            {
                q: "Do you guarantee a job placement?",
                a: "We guarantee competence, not a job offer. In the age of AI, a 'placement guarantee' is often a marketing gimmick. We forge you to be so technically dominant and future-ready that jobs chase you, not the other way around."
            },
            {
                q: "What is the average package?",
                a: "Since our students graduate with 3 years of building experience, they enter the market as 'Lateral Hires' (Experienced Professionals) rather than freshers, often commanding significantly higher starting packages."
            }
        ]
    }
];

export function FaqClient() {
    const flatFaqs = allFaqs.flatMap(c => c.items.map(i => ({ question: i.q, answer: i.a })));

    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <FaqJsonLd questions={flatFaqs} />
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15">
                
                {/* Introduction Section */}
                <section className="p-8 sm:p-12 md:p-16 border-b border-slate-200/50 bg-white">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#002f86] mb-4 leading-tight">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl font-sans">
                            Everything you need to know about The Foundry&apos;s, our educational philosophy, degree programs, and your future.
                        </p>
                    </div>
                </section>

                {/* FAQ Feed Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4]">
                    <div className="max-w-4xl space-y-12">
                        {allFaqs.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#002f86] mb-6 border-b border-slate-200/80 pb-2">
                                    {section.category}
                                </h2>
                                <div className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <FaqItem key={i} question={item.q} answer={item.a} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border border-slate-200/80 overflow-hidden hover:border-[#002f86] transition-colors shadow-xs">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
                <span className="font-serif font-bold text-slate-900 text-base md:text-lg">{question}</span>
                <span className={`p-1 text-[#002f86] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-slate-700 text-sm md:text-base leading-relaxed font-sans border-t border-slate-100">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
}
