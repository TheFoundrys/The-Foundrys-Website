"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Calendar, Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react";

const offices = [
    {
        country: "India",
        city: "Jubilee Hills",
        address: "Sasi Icon,Beside Madhapur Metro Station, Jubilee Hills Road No 36 & 37, Hyderabad, Telangana - 500033",
    },
    {
        country: "Australia",
        city: "Googong",
        address: "84 Erskine Loop, Googong NSW 2620, Australia",
    },
    {
        country: "USA",
        city: "Virginia",
        address: "2343 Dulles Station Blvd Apt 256, Herndon, Virginia 20171",
    },
    {
        country: "UK",
        city: "Leicestershire",
        address: "11 Samphire Cl, Hamilton, Leicester LE5 1RW, UK",
    },
    {
        country: "Qatar",
        city: "Doha City",
        address: "Office 1, Building 69, Street 220, Zone 26, PO Box 7894, Doha",
    },
];

export function ContactClient() {
    return (
        <main className="min-h-screen bg-slate-900 selection:bg-blue-500/30">
            <Navbar />

            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-32 lg:pt-40 pb-24 px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-16 lg:mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span>.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 text-slate-300"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                            <Mail size={24} />
                        </div>
                        <a href="mailto:info@thefoundrys.com" className="text-xl md:text-2xl font-medium hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-8">
                            info@thefoundrys.com
                        </a>
                    </motion.div>
                </div>

                {/* Offices Grid */}
                <div className="max-w-7xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold mb-10 uppercase tracking-[0.2em] text-slate-500"
                    >
                        Global Presence
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.3 }}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <MapPin className="text-blue-400" />
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 block mb-1">
                                            {office.country}
                                        </span>
                                        <h4 className="text-xl font-bold text-white tracking-tight">
                                            {office.city}
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-slate-400 italic text-sm leading-relaxed mb-8 pl-1 lg:group-hover:pl-2 transition-all duration-500">
                                    {office.address}
                                </p>

                                <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">
                                    Find on Map <ArrowUpRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer isDark hideCTA />
        </main>
    );
}
