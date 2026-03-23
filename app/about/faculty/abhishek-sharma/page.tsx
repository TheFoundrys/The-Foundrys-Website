"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowLeft, Zap, BookOpen, BarChart3, Target, Rocket, GraduationCap, Quote, Database, Code2 } from "lucide-react";
import Link from "next/link";

export default function AbhishekSharmaProfile() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

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
                                    src="/images/abhishek shaarma.png"
                                    alt="Abhishek Sharma"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl rounded-full" />
                        </motion.div>

                        {/* Header Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 space-y-6"
                        >
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                    Senior Data Analyst
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    Abhishek Sharma
                                </h1>
                                <p className="text-xl text-blue-400 font-medium mb-4 italic">
                                    Senior Data Analyst
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <a
                                        href="https://linkedin.com/in/abhishek-sharma-27b585ba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
                                    >
                                        <Linkedin size={16} /> Connect
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-slate-300">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <BarChart3 size={16} className="text-blue-400" /> 8+ Years Experience
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <Zap size={16} className="text-blue-400" /> 220+ Hours Saved
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm font-medium">
                                    <GraduationCap size={16} className="text-blue-400" /> Master in Economics
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Biography Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <div className="relative mb-16">
                            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                    A Narrative of Data & Precision
                                </h2>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Abhishek Sharma is an analytical and results-driven professional who believes that the true value of data lies in its power to uncover hidden truths. With a career spanning over eight years, he has dedicated himself to impacting organizational performance by digging deep into metrics and transforming complex datasets into actionable business intelligence.
                                </p>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    His journey is characterized by a relentless drive for efficiency. At Statestreet, he single-handedly revolutionized the daily Mark-to-Market (MTM) reporting process. By integrating Python-driven workflows with AI-integrated analytics, he shifted the paradigm from manual data collection to high-level strategic analysis, saving hundreds of hours of manual labor in the process.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" size={24} /> Academic Lens
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>Master in Economics from the University Of Hyderabad, providing a unique lens for interpreting complex market factors.</p>
                                    <p>Bachelor in Economics from the University Of Delhi, grounding his analytical approach in macroeconomic theory.</p>
                                    <p>His academic background allows him to blend theoretical economics with modern data engineering to solve aggressive business objectives.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Target className="text-blue-600" size={24} /> Professional Impact
                                </h3>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>Spearheaded function-level Treasury reports for self-service analytics and automated commentary.</p>
                                    <p>Built KPIs and customer insight platforms for key cloud-native storage solutions at Pure Storage.</p>
                                    <p>Established Visualization Centers of Excellence (CoE) to set new standards in digital reporting.</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8">Strategic Automation & AI</h3>
                        <p className="text-slate-700 leading-relaxed mb-10">
                            Abhishek is a pioneer in leveraging AI tools like Copilot to shorten development cycles and optimize Python scripts. His work at Statestreet and Pure Storage has consistently bridged the gap between raw data and executive narratives, ensuring that stakeholders from all regions and teams have access to high-fidelity, real-time insights.
                        </p>

                        <div className="bg-slate-900 rounded-3xl p-10 text-white mb-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 italic text-lg text-slate-300 leading-relaxed">
                                    "Deep data insights are the only way to navigate aggressive business objectives in a volatile market. Automation is the key to unlocking human potential for strategic thinking."
                                </div>

                                {/* <div className="flex-1">
                                    <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                        <Database className="text-blue-400" size={24} /> Technical Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Tableau', 'Power BI', 'SQL', 'Python', 'Snowflake', 'Looker', 'Copilot'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-blue-300">{tech}</span>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
                            <h3 className="text-3xl font-bold mb-4 italic">Uncovering the Truth in Data.</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Abhishek represents the future of data analytics—where AI and human intuition combine to drive unprecedented organizational performance.
                            </p>
                            <Link href="/about/team" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
                                Back to Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
