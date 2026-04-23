import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, GraduationCap, Award, BookOpen, Briefcase, Quote } from "lucide-react";

export default function PramodChadaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header/Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-4 border-slate-800 shrink-0">
                            <Image
                                src="/images/pramod-chada.jpg"
                                alt="Pramod Chada"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                                Advisory Board Member
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                Pramod Chada
                            </h1>
                            <p className="text-xl text-blue-400 font-medium mb-6">CEO, TechOptima | IT Delivery</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Linkedin size={20} className="text-blue-400" />
                                </a>
                                <a href="mailto:#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                    <Mail size={20} className="text-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Column - Main Bio */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Briefcase className="text-blue-600" /> Professional Profile
                                </h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        Pramod Chada is a visionary leader in the field of Information Technology, contributing 2.5 decades of dedicated research, expertise, and unwavering commitment to advancing the evolution of SDLC (Software Development Life Cycle) across various roles.
                                    </p>
                                    <p>
                                        His expertise spans IT Delivery Management, Program/Project Management, Business Development, and setting up offshore delivery centers from the ground up, including establishing business entities, infrastructure, and talent acquisition.
                                    </p>
                                    <p>
                                        In January 2021, Pramod co-founded TechOptima with a vision to transform businesses through cutting-edge AI solutions. As CEO, he is responsible for strategic planning, global operations, and fostering a culture of excellence. Pramod's extensive experience in delivering complex, high-visibility engagements across the US, India, and APAC makes him a cornerstone of TechOptima's success.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 italic relative">
                                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                                <p className="text-xl text-slate-800 relative z-10 leading-relaxed">
                                    "True leadership isn’t about titles; it’s about the ability to inspire and empower others to reach their fullest potential."
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Qualifications */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <GraduationCap className="text-blue-600" /> Education
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <p className="font-bold text-slate-900">Master's Degree</p>
                                        <p className="text-sm text-slate-600">Electronics & Instrumentation</p>
                                        <p className="text-sm text-blue-600 font-semibold">NIT Warangal</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Award className="text-blue-600" /> Certifications
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                        <p className="text-slate-600 font-medium">Six Sigma Green Belt Certified</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-600" /> Key Expertise
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["IT Delivery Management", "Program Management", "AI Solutions", "Business Development", "SDLC Evolution", "Strategic Planning"].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium whitespace-nowrap">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
