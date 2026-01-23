"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Sparkles, Send, Loader2, CheckCircle2 } from "lucide-react";

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
      <main className="min-h-screen bg-slate-50 selection:bg-blue-200 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-12">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-100"
            >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Interest Recorded</h2>
                <p className="text-slate-600 mb-8">
                    We have received your details. We will keep you updated on our launch and upcoming cohorts.
                </p>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                    Return Home
                </button>
            </motion.div>
        </div>
        <Footer hideCTA={true} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200">
      <Navbar />

      <section className="pt-32 pb-24 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl"
        >
            <div className="text-center mb-10">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles size={14} />
                    <span>Apply Now</span>
                </div> */}
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                    Apply Now
                </h1>
                <p className="text-lg text-slate-600 max-w-lg mx-auto">
                    Applications are now open for our upcoming programs. Apply today and begin your journey with us.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden">
                {/* Glass Shim */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 ml-1">Full Name <span className="text-red-500">*</span></label>
                            <input required name="name" type="text" placeholder="Enter your name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 ml-1">Phone Number <span className="text-red-500">*</span></label>
                            <input required name="phone" type="tel" placeholder="Enter your phone number" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 ml-1">Email Address <span className="text-red-500">*</span></label>
                        <input required name="email" type="email" placeholder="Enter your email address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 ml-1">Program of Interest</label>
                            <div className="relative">
                                <select name="program" defaultValue="" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all font-medium appearance-none text-slate-700">
                                    <option value="" disabled>Select a Program (Optional)</option>
                                    <option value="quantum computing">Quantum Computing</option>
                                    <option value="Blockchain">Blockchain</option>
                                    <option value="AI">Artificial Intelligence</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="Venture Building">Venture Building</option>
                                    <option value="Strategic Innovation">Strategic Innovation</option>
                                    <option value="ESG">Environmental, Social, and Governance (ESG)</option>
                                    <option value="renewable-energy">Renewable Energy</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-900 ml-1">Current Status <span className="text-red-500">*</span></label>
                             <div className="relative">
                                <select required name="status" defaultValue="" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all font-medium appearance-none text-slate-700">
                                    <option value="" disabled>Select Status</option>
                                    <option value="Student">Student (High School/College)</option>
                                    <option value="Professional">Working Professional</option>
                                    <option value="Founder">Founder</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 ml-1">Why do you want to join? <span className="text-slate-400 font-normal">(Optional)</span></label>
                        <textarea name="message" rows={4} placeholder="Tell us about your goals..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-slate-400 font-medium resize-none" />
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm font-bold text-center">
                            {error}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" />
                                <span>Submitting...</span>
                            </>
                        ) : (
                            <>
                                <span>Join Waitlist</span>
                                <Send size={18} />
                            </>
                        )}
                    </button>
                    
                    <p className="text-center text-xs text-slate-400 font-medium mt-4">
                        We respect your privacy. No spam, ever.
                    </p>
                </div>
            </form>
        </motion.div>
      </section>

      <Footer hideCTA={true} />
    </main>
  );
}
