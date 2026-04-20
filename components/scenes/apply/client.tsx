"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Send,
    Loader2,
    CheckCircle2,
    ArrowUpRight,
    User,
    Mail,
    Phone,
    Briefcase,
    GraduationCap,
    Clock,
    Globe,
    Shield,
    MapPin,
    BookOpen
} from "lucide-react";
import Link from "next/link";

export function ApplyClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to submit");

            setIsSuccess(true);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-white selection:bg-blue-100 flex flex-col font-sans text-slate-900">
                <Navbar />
                <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-12 overflow-hidden relative">
                    {/* Success Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent z-0" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        className="absolute text-[10rem] md:text-[30rem] font-black text-blue-600 pointer-events-none select-none z-0 tracking-tighter"
                    >
                        DONE
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-xl w-full bg-white/80 backdrop-blur-2xl p-12 rounded-[3rem] shadow-[0_32px_120px_-10px_rgba(0,0,0,0.08)] text-center border border-white/50 relative z-10"
                    >
                        <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-blue-200 rotate-3">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Interest Recorded</h2>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light">
                            We have received your details. Our admissions team will reach out to you shortly with the next steps.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="group w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                        >
                            Return to Homepage
                            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
                <Footer hideCTA={true} />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white selection:bg-blue-100 font-sans text-slate-900">
            <Navbar />

            <section className="pt-24 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 min-h-screen relative overflow-hidden text-slate-900">
                {/* Dynamic Background Elements */}
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 md:translate-x-1/4 z-0" />
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 0.05, x: 0 }}
                    className="absolute top-32 md:top-40 left-4 md:left-10 text-[8rem] md:text-[20rem] font-black text-slate-900 select-none pointer-events-none z-0 tracking-tighter"
                >
                    APPLY
                </motion.div>

                <div className="container mx-auto max-w-7xl relative z-10 text-slate-900">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-32 items-start">
                        {/* Left Column: Context & Info */}
                        <div className="lg:col-span-5 pt-0 lg:pt-8 space-y-10 md:space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 md:mb-6">Step One</p>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-slate-900 mb-6 md:mb-10 tracking-tight leading-[0.95] md:leading-[0.9]">
                                    Unlocking <br />
                                    <span className="text-slate-400">Potential.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light max-w-lg">
                                    Begin your journey at The Foundry. We prioritize your ambition and logical clarity over traditional credentials.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="grid sm:grid-cols-2 gap-6 md:gap-8 text-slate-900"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                        <Clock size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900">Swift Process</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Recorded interest leads to profile evaluation within 48 hours.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                                        <Shield size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900">Privacy First</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Your data is secured and used solely for admissions purposes.</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Application Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white/90 md:bg-white/80 backdrop-blur-2xl p-6 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_32px_120px_-10px_rgba(0,0,0,0.06)] border border-slate-100 relative text-slate-900"
                            >
                                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 relative z-10 text-slate-900">
                                    <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-10 text-slate-900">
                                        {/* Name Field */}
                                        <div className="space-y-3 group text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <User size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                                            </div>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-200 font-medium text-base md:text-lg text-slate-900"
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div className="space-y-3 group text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Phone size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                                            </div>
                                            <input
                                                required
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-200 font-medium text-base md:text-lg text-slate-900"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div className="md:col-span-2 space-y-3 group text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Mail size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                                            </div>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="hello@example.com"
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-200 font-medium text-base md:text-lg text-slate-900"
                                            />
                                        </div>

                                        {/* Program Selection */}
                                        <div className="space-y-3 group relative text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Globe size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Program</label>
                                            </div>
                                            <select
                                                name="program"
                                                required
                                                defaultValue=""
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all font-medium text-base md:text-lg text-slate-900 appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select program</option>
                                                <option value="AI">AI (Machine Learning)</option>
                                                <option value="Cyber Security">Cyber Security</option>
                                                <option value="Venture Building">Venture Building</option>
                                                <option value="Strategic Innovation">Strategic Innovation</option>
                                                <option value="ESG">ESG & Sustainability</option>
                                                <option value="Blockchain">Blockchain</option>
                                                <option value="BCA AI Professional">BCA AI Professional</option>
                                                <option value="B.Sc in AI">B.Sc in AI</option>
                                                <option value="B.Sc in DataScience">B.Sc in DataScience</option>
                                                <option value="Quantum Computing">Quantum Computing</option>
                                            </select>
                                            <div className="absolute right-0 bottom-5 md:bottom-6 text-slate-300 pointer-events-none">▼</div>
                                        </div>

                                        {/* Occupation Selection */}
                                        <div className="space-y-3 group relative text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <GraduationCap size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Occupation</label>
                                            </div>
                                            <select
                                                name="occupation"
                                                required
                                                defaultValue=""
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all font-medium text-base md:text-lg text-slate-900 appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select current role</option>
                                                <option value="Student">Student</option>
                                                <option value="Professional">Working Professional</option>
                                                <option value="Founder">Founder</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="absolute right-0 bottom-5 md:bottom-6 text-slate-300 pointer-events-none">▼</div>
                                        </div>

                                        {/* Location Field */}
                                        <div className="space-y-3 group text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <MapPin size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Location</label>
                                            </div>
                                            <input
                                                required
                                                name="location"
                                                type="text"
                                                placeholder="e.g. Online, Hyderabad"
                                                defaultValue=""
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-200 font-medium text-base md:text-lg text-slate-900"
                                            />
                                        </div>

                                        {/* Educational Background Field */}
                                        <div className="space-y-3 group text-slate-900">
                                            <div className="flex items-center gap-2 mb-1">
                                                <BookOpen size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Edu Background</label>
                                            </div>
                                            <input
                                                required
                                                name="eduBackground"
                                                type="text"
                                                placeholder="e.g. B.Tech"
                                                className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-200 font-medium text-base md:text-lg text-slate-900"
                                            />
                                        </div>
                                    </div>
                                    <input type="hidden" name="leadSource" value="Website" />

                                    {/* Message / Goals */}
                                    <div className="space-y-4 group text-slate-900">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Briefcase size={14} className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Goals & Ambitions</label>
                                        </div>
                                        <textarea
                                            name="message"
                                            rows={2}
                                            placeholder="Tell us what you want to build..."
                                            className="w-full pb-3 md:pb-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 focus:outline-none transition-all placeholder:text-slate-200 font-medium text-base md:text-lg text-slate-900 resize-none"
                                        />
                                    </div>

                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="p-4 rounded-2xl bg-red-50 text-red-600 text-sm font-bold flex items-center gap-3 border border-red-100"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                            {error}
                                        </motion.div>
                                    )}

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group w-full py-5 md:py-6 bg-slate-900 text-white rounded-[1.5rem] md:rounded-[2rem] font-bold text-lg md:text-xl hover:bg-slate-800 transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={24} />
                                                    <span>Registering Interest...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Unlock Potential</span>
                                                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mt-8">
                                            The Foundry Admissions &copy; 2026
                                        </p>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer hideCTA={true} />
        </main>
    );
}
