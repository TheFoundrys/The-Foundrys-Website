"use client";
import { motion } from "framer-motion";
import { useRegionalPricing } from "@/lib/useRegionalPricing";

interface ProgramInvestmentProps {
    courseId?: string; // Default to certifiedInnovatorMBA if not provided
    accentColor?: string;
}

export function ProgramInvestment({
    courseId = "certifiedInnovatorMBA",
    accentColor = "#B31B1B"
}: ProgramInvestmentProps) {
    const { isIndia } = useRegionalPricing();

    return (
        <section className="py-24 px-6 bg-neutral-50">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white border border-neutral-200 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden text-center">
                    <div className="absolute top-0 inset-x-0 h-1" style={{ backgroundColor: accentColor }} />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Program Investment</h2>
                        <p className="text-neutral-600 mb-12 max-w-lg mx-auto">
                            Premium education, designed for India's brightest innovators. An investment in your future, not just a certificate.
                        </p>

                        <div className="inline-block p-1 bg-neutral-50 rounded-2xl border border-neutral-100 mb-8">
                            <div className="px-12 py-8 bg-white rounded-xl shadow-lg border border-neutral-100">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: accentColor }}>Annual Fee</p>
                                <div className="flex items-center justify-center gap-2 text-5xl md:text-7xl font-black text-neutral-900">
                                    <span className="text-3xl text-neutral-300 font-light">{isIndia ? "₹" : "$"}</span>
                                    {isIndia ? "1,00,000" : "2,500"}
                                    <span className="text-sm font-normal text-neutral-400"> / year</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-neutral-400 uppercase tracking-widest">
                            Limited cohorts • Validation-first approach • Direct mentorship
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
