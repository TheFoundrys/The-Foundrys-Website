"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { Wifi, Coffee, Clock, Lock, Zap, Armchair } from "lucide-react";

const warangalAmenities = [
    { icon: Wifi, label: "Gigabit Fiber" },
    { icon: Coffee, label: "Specialty Coffee" },
    { icon: Clock, label: "24/7 Access" },
    { icon: Lock, label: "Biometric Entry" },
    { icon: Zap, label: "Power Backup" },
    { icon: Armchair, label: "Ergo Chairs" },
];

const warangalSpaces = [
    {
        title: "AI & Quantum Research Bay",
        desc: "Equipped with high-compute workstations and GPU node access for model training.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
        col: "md:col-span-2"
    },
    {
        title: "The Founders Lounge",
        desc: "Collaborative networking arena where students pitch, demo, and connect with mentors.",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
        col: "md:col-span-1"
    },
    {
        title: "Hardware & IoT Lab",
        desc: "Prototyping equipment, microcontrollers, and logic analyzers for deep tech builds.",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
        col: "md:col-span-1"
    },
    {
        title: "Seminar & Demo Auditorium",
        desc: "Presentation zone for live podcasts, hackathons, and guest keynotes.",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
        col: "md:col-span-2"
    }
];

export default function WarangalCampusPage() {
    return (
        <main className="min-h-screen bg-white select-none">
            <Navbar />

            {/* Campus Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <motion.img 
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2070&q=80"
                        alt="Warangal Campus" 
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/90" />
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-900/10 bg-white/50 backdrop-blur-md text-slate-900 font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
                    >
                        HANAMKONDA, WARANGAL
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter text-slate-900 mb-6 drop-shadow-sm"
                    >
                        NOT A CAMPUS.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        We traded lecture halls for <span className="font-bold border-b-2 border-orange-500">lounges</span>. <br/>
                        We traded professors for <span className="font-bold border-b-2 border-blue-500">CTOs</span>.
                    </motion.p>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-24 border-y" style={{ backgroundColor: "#F7F7F4", borderColor: "#E8E8E3" }}>
                <div className="container mx-auto max-w-5xl px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Built for Builders</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                        {warangalAmenities.map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform group-hover:border-blue-200">
                                    <item.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
                                </div>
                                <span className="font-semibold text-slate-600">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {warangalSpaces.map((space, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative h-80 rounded-3xl overflow-hidden shadow-lg ${space.col}`}
                            >
                                <img 
                                    src={space.img} 
                                    alt={space.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl font-bold mb-2 text-white">{space.title}</h3>
                                    <p className="text-white/95 font-medium">{space.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location / CTA Section */}
            <section className="py-32 px-4 text-center bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80" 
                        alt="City Night"
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">You are the average of the 5 people you sit with.</h2>
                    <p className="text-xl text-slate-300 mb-10">Don&apos;t sit with students. Sit with founders.</p>
                    <Link href="/contact">
                        <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-colors cursor-pointer">
                            VISIT THE FOUNDRY
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
