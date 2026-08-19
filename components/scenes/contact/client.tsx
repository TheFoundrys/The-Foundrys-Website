"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const offices = [
    {
        country: "India",
        city: "Jubilee Hills, Hyderabad",
        address: "Sasi Icon, Beside Madhapur Metro Station, Jubilee Hills Road No 36 & 37, Hyderabad, Telangana - 500033",
        mapsUrl: "https://maps.google.com/?q=Sasi+Icon+Jubilee+Hills+Hyderabad",
    },
    {
        country: "India",
        city: "Hanamkonda, Warangal",
        address: "2-6-983 New, 2/725/1-1-X/5-3 old circuit house road, KLN Reddy colony, Hanamkonda Warangal Telangana 506001",
        mapsUrl: "https://maps.google.com/?q=KLN+Reddy+colony+Hanamkonda+Warangal",
    },
    {
        country: "Australia",
        city: "Googong, NSW",
        address: "84 Erskine Loop, Googong NSW 2620, Australia",
        mapsUrl: "https://maps.google.com/?q=84+Erskine+Loop+Googong+NSW+2620+Australia",
    },
    {
        country: "USA",
        city: "Herndon, Virginia",
        address: "2343 Dulles Station Blvd Apt 256, Herndon, Virginia 20171",
        mapsUrl: "https://maps.google.com/?q=2343+Dulles+Station+Blvd+Herndon+Virginia+20171",
    },
    {
        country: "UK",
        city: "Leicestershire",
        address: "11 Samphire Cl, Hamilton, Leicester LE5 1RW, UK",
        mapsUrl: "https://maps.google.com/?q=11+Samphire+Cl+Hamilton+Leicester+LE5+1RW+UK",
    },
    {
        country: "Qatar",
        city: "Doha City",
        address: "Office 1, Building 69, Street 220, Zone 26, PO Box 7894, Doha",
        mapsUrl: "https://maps.google.com/?q=Building+69+Street+220+Zone+26+Doha+Qatar",
    },
];

export function ContactClient() {
    return (
        <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pt-24 pb-0" style={{ backgroundColor: "#EAEAE5" }}>
            <Navbar />

            {/* Master Centered Card Container */}
            <div className="mx-4 sm:mx-6 md:mx-auto max-w-[1400px] bg-white border border-slate-200/50 overflow-hidden mb-16 shadow-lg shadow-black/15 rounded-none">
                
                {/* Introduction Section */}
                <section className="p-8 sm:p-12 md:p-16 border-b border-slate-200/50 bg-white">
                    <div className="max-w-4xl">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#002f86] mb-4 leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl font-sans">
                            Whether you&apos;re looking for admissions, research partnerships, or just want to visit our campus, we&apos;re here to connect. Reach out directly or visit one of our global centers.
                        </p>
                    </div>
                </section>

                {/* Quick Contact Cards */}
                <section className="p-8 sm:p-12 md:p-16 bg-[#F7F7F4] border-b border-slate-200/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.a
                            href="tel:+917981171474"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col p-8 bg-white border border-slate-200/80 hover:border-[#002f86] transition-all group shadow-xs cursor-pointer rounded-none"
                        >
                            <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center text-[#002f86] mb-6 group-hover:scale-105 transition-transform rounded-none">
                                <Phone size={22} />
                            </div>
                            <span className="text-xs font-bold font-mono text-[#002f86] uppercase tracking-widest mb-2">Call Us Directly</span>
                            <span className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-slate-900">+91 79811 71474</span>
                        </motion.a>

                        <motion.a
                            href="mailto:info@thefoundrys.com"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col p-8 bg-white border border-slate-200/80 hover:border-[#002f86] transition-all group shadow-xs cursor-pointer rounded-none"
                        >
                            <div className="w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center text-[#002f86] mb-6 group-hover:scale-105 transition-transform rounded-none">
                                <Mail size={22} />
                            </div>
                            <span className="text-xs font-bold font-mono text-[#002f86] uppercase tracking-widest mb-2">Email Admissions & Support</span>
                            <span className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-slate-900">info@thefoundrys.com</span>
                        </motion.a>
                    </div>
                </section>

                {/* Global Locations Section */}
                <section className="p-8 sm:p-12 md:p-16 bg-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                        <div>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002f86] mb-2">Our Global Campuses & Offices</h2>
                            <p className="text-slate-600 text-sm font-sans">Find us in key innovation hubs across the globe.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offices.map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#F7F7F4] p-6 border border-slate-200/80 hover:border-[#002f86] transition-colors flex flex-col justify-between rounded-none"
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin size={15} className="text-[#002f86]" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#002f86]">
                                            {office.country}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {office.city}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed font-sans mb-6">
                                        {office.address}
                                    </p>
                                </div>
                                <a
                                    href={office.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002f86] hover:underline uppercase tracking-wider font-mono cursor-pointer"
                                >
                                    Get Directions <ArrowUpRight size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer hideCTA />
        </main>
    );
}
