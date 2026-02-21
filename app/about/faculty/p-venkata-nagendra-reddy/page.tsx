"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, ArrowLeft, Shield, Globe, Zap, Cpu, Award, BookOpen, Quote } from "lucide-react";
import Link from "next/link";

export default function PVenkataNagendraReddyProfile() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/about/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Team
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-1/3 relative"
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800">
                                <Image
                                    src="/images/venkat-reddy.jpg"
                                    alt="P. Venkata Nagendra Reddy"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/20 blur-3xl rounded-full" />
                        </motion.div>

                        {/* Header Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 space-y-6"
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
                                    Head of the School of Sustainability
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    P. Venkata Nagendra Reddy
                                </h1>
                                <p className="text-xl text-emerald-400 font-medium mb-4">
                                    The Architect of Convergence
                                </p>

                                <div className="flex gap-4 mb-6">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
                                        <Award size={14} /> PhD Candidate (ESG)
                                    </span>
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
                                        <Shield size={14} /> Corporate Strategist
                                    </span>
                                </div>

                                <a
                                    href="https://www.linkedin.com/in/pvenkatanreddy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-full transition-colors mb-6"
                                >
                                    <Linkedin size={16} /> Connect on LinkedIn
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {["ESG Compliance", "BRSR & CSRD", "Deep Tech", "Circular Economy", "Real Estate & Infra", "Biology as Tech"].map((skill) => (
                                    <div key={skill} className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 px-6 bg-white border-b border-slate-100">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Quote className="absolute -top-8 left-0 text-emerald-100 -z-10" size={120} />
                        <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed italic">
                            "The lecture hall is dead. The planet does not have time for theory. We do not memorize the laws of nature; we architect systems that scale with them."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">

                        {/* Summary / Introduction */}
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-4">The Forged Leader</h2>
                            <p className="text-slate-700 leading-relaxed m-0">
                                P. Venkata Nagendra Reddy stands as the embodiment of a new leadership paradigm. As the Head of the School of Sustainability at The Foundry’s, he represents the synthesis of 19 years of aggressive revenue growth, complex stakeholder management, and high-level strategic execution with the profound academic rigor of doctoral research in Environmental, Social, and Governance (ESG) compliance.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">A Professional Metamorphosis (2003–2025)</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Reddy’s expertise was not accumulated in the safety of a library but was extracted from the friction of competitive markets. Over two decades, he has honed a skillset uniquely transferable to the domain of sustainability: the ability to sell a vision, manage complex infrastructure, and drive compliance in challenging environments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Zap className="text-emerald-500" size={20} /> Architect of Revenue
                                </h3>
                                <p className="text-slate-600 text-base">
                                    Formerly Business Head of Client Solutions at Innowell Engineering, where he generated ₹10 Crore in enquiries and successfully closed a ₹4.58 Crore sustainability-focused order, demonstrating the "Green Premium" as a competitive advantage.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Globe className="text-emerald-500" size={20} /> Infrastructure Nexus
                                </h3>
                                <p className="text-slate-600 text-base">
                                    Expertise at the intersection of land, law, and capital. Handled projects worth ₹1000 Crore at Navnaami Ventures and managed critical infrastructure at Bajaj International Realty, providing granular insights into the built environment's material footprint.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">The Academic Mandate: PhD Research</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Reddy's doctoral research at ESGCI-Paris serves as the intellectual cornerstone of the School of Sustainability. Titled <span className="font-semibold text-slate-900">"The Role of Technology in Enhancing BRSR Compliance and Reporting Efficiency,"</span> his study addresses the "Compliance Gap" in Indian industry.
                        </p>

                        <div className="bg-slate-900 text-slate-300 rounded-3xl p-8 my-10 overflow-x-auto">
                            <h3 className="text-white font-bold mb-4">Leveraging Technology for Compliance</h3>
                            <table className="w-full text-sm text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-800">
                                        <th className="pb-3 pr-4 text-emerald-400">Technology</th>
                                        <th className="pb-3 px-4 text-emerald-400">Function in Research</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    <tr>
                                        <td className="py-3 pr-4 font-bold text-slate-100">Salesforce Net Zero</td>
                                        <td className="py-3 px-4">Emissions Tracking: Automates utility data for Scope 1, 2, & 3.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-bold text-slate-100">Enablon</td>
                                        <td className="py-3 px-4">Risk & EHS Management: Manages lifecycle data (waste, water, materials).</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-bold text-slate-100">SAP ESG</td>
                                        <td className="py-3 px-4">ERP Integration: Embeds sustainability into core financial and procurement systems.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Philosophy: Biology as The Blueprint</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            The School of Sustainability at The Foundry’s is distinct from traditional departments. Under Reddy's leadership, it operates on the principle that <span className="font-semibold text-slate-900">"Biology is the only technology that scales."</span>
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-10">
                            He advocates for a transition from an "Extraction Economy" to a "Cultivation Economy," where corporate systems mimic biological resilience and efficiency. By integrating AI for modeling and Blockchain for verification, he is building the "Transparency Layer" of India’s Deep Tech ecosystem.
                        </p>

                        <div className="border-t-2 border-slate-100 pt-16 mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Strategic Roadmap</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">1</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Immediate: Data-Driven Baseline</h4>
                                        <p className="text-slate-600">Operationalizing PhD research into the curriculum through "Shadow Audits" using real BRSR data sets from the NSE 500.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">2</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Medium: The Hyderabad "Green Forge"</h4>
                                        <p className="text-slate-600">Forming consortiums of real estate and infrastructure firms committed to adopting student-led circular economy solutions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">3</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Long Term: The Biological Pivot</h4>
                                        <p className="text-slate-600">Incubating startups focused on material science—growing bricks from mycelium and plastic from algae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-slate-900 rounded-3xl p-10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Welcome to the Forge</h3>
                            <p className="text-slate-400 mb-8">
                                "The planet does not have time for theory. We are here to forge Sustainability Architects—founders capable of building systems that mimic nature’s efficiency while satisfying the modern world's regulatory frameworks."
                            </p>
                            <Link href="/programs/sustainability-in-the-age-of-ai" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
                                Forge Your Career
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
