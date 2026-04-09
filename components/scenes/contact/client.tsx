"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const offices = [
    {
        country: "India",
        city: "Jubilee Hills",
        address: "Sasi Icon, Beside Madhapur Metro Station, Jubilee Hills Road No 36 & 37, Hyderabad, Telangana - 500033",
    },
    {
        country: "India",
        city: "Warangal",
        address: "2-6-983 New, 2/725/1-1-X/5-3 old circuit house road, KLN Reddy colony, Hanamkonda Warangal Telangana 506001.",
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
        <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-slate-900">
                            Say <span className="text-blue-600">Hello</span>.
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            Whether you're looking for admissions, partnership, or just want to see our campus, we're here to help. Reach out to us directly or visit one of our global offices.
                        </p>
                    </motion.div>

                    {/* Quick Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                        <motion.a
                            href="tel:+917981171474"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all group shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Call Us</span>
                            <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">+91 79811 71474</span>
                        </motion.a>

                        <motion.a
                            href="mailto:info@thefoundrys.com"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all group shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Email Us</span>
                            <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">info@thefoundrys.com</span>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="pb-24 px-6 md:px-12 lg:px-24 border-t border-slate-100 pt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">Our Locations</h2>
                            <p className="text-slate-600">Find us in major cities across the globe.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {offices.map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <MapPin size={16} className="text-blue-600" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60">
                                        {office.country}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors text-slate-900">
                                    {office.city}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light mb-6">
                                    {office.address}
                                </p>
                                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                                    Directions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer hideCTA />
        </main>
    );
}
