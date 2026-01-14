"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Calendar, Instagram, Youtube, Linkedin } from "lucide-react";

export function ContactClient() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100">
      <Navbar />

      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full blur-[100px] opacity-30 animate-pulse" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6"
            >
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 font-medium"
            >
              Have questions about our programs? We're here to help you build the future.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col justify-center h-full">
                 <h2 className="text-2xl font-bold mb-6">Connect with us</h2>
                 <p className="text-slate-500 mb-8">Follow our journey and stay updated with the latest news from The Foundry's.</p>
                 <div className="flex items-center gap-4">
                      <Link href="https://x.com/thefoundrys" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </Link>
                      <Link href="https://www.instagram.com/the.foundrys/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                          <Instagram size={24} />
                      </Link>
                      <Link href="https://www.youtube.com/@TheFoundrys" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                          <Youtube size={24} />
                      </Link>
                      <Link href="https://www.linkedin.com/company/the-foundry-s" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                          <Linkedin size={24} />
                      </Link>
                 </div>
              </div>
            </motion.div>

            {/* Application Card */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-slate-900 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                  <Calendar className="text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Admissions Open</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Ready to start your journey? Our admissions team is currently reviewing applications for the upcoming cohort.
                </p>
              </div>

              <Link href="/apply" className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-colors block text-center">
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer hideCTA />
    </main>
  );
}
