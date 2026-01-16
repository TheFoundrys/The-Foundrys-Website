"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function ClimatePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-teal-100">
      <Navbar />
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/climate-hero.jpg" 
                alt="Global Climate Solutions" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-20 h-20 bg-white/10 backdrop-blur-md text-teal-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-white/20"
            >
                <Globe size={40} />
            </motion.div>
            {/* <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
                Global Climate Change
            </motion.h1> */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
            >
                Understand the crisis. Design the solution.<br/>
                <span className="text-white font-medium">Engineering a habitable future.</span>
            </motion.p>

        </div>
      </section>

      {/* Added Content Section */}
      <section className="py-20 bg-teal-50/30">
        <div className="container mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-8 bg-white rounded-2xl border border-teal-100 shadow-sm"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Mitigation</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Desiging systems to reduce emissions. From renewable energy grids to carbon capture technology and industrial efficiency.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-8 bg-white rounded-2xl border border-teal-100 shadow-sm"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Adaptation</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Engineering resilience. Building infrastructure that withstands extreme weather and protects vulnerable communities.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>
      {/* Frontiers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frontiers of Innovation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Geo-Engineering", "Carbon Capture", "Green Hydrogen", "Smart Grids",
                    "Fusion Energy", "Circular Economy", "Agro-Tech", "Policy Modeling"
                ].map((tech, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: i * 0.05 }}
                        className="p-6 rounded-2xl bg-teal-50/50 text-teal-800 font-bold text-center text-sm border border-teal-100/50 cursor-default hover:bg-teal-100 transition-colors"
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
            
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <div className="inline-block p-6 bg-slate-50 rounded-2xl text-slate-500 italic max-w-2xl">
                    "The Stone Age didn't end because we ran out of stones. <br/>The Oil Age will end long before we run out of oil."
                </div>
            </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
