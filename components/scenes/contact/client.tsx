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

          <div className="max-w-2xl mx-auto">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
                    <MapPin size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">Visit Us</h2>
                </div>

                <div className="space-y-5 mb-8 w-full">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">HeadQuarters</h3>
                    <p className="text-slate-500 leading-relaxed">
                      2343 Dulles Station Blvd, Apt 256, Herndon, Virginia 20171
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">INDIA</h3>
                    <p className="text-slate-500 leading-relaxed">
                      SASI ICON, Beside Madhapur Metro Station,<br />
                      Jubilee Hills, Road No 36 &amp; 37, Hyderabad, Telangana - 500033.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@thefoundrys.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                      info@thefoundrys.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link href="https://x.com/thefoundrys" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-all hover:-translate-y-1">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
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
          </div>
        </div>
      </div>

      <Footer hideCTA />
    </main>
  );
}
