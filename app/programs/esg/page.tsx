"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function ESGPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-green-100">
      <Navbar />
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/esg-hero.jpg" 
                alt="ESG Future City" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-20 h-20 bg-white/10 backdrop-blur-md text-green-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-white/20"
            >
                <Leaf size={40} />
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
                ESG Strategy
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
            >
                Environmental. Social. Governance.<br/>
                <span className="text-white font-medium">The new operating system for business.</span>
            </motion.p>
            

        </div>
      </section>

      {/* Added Content Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                    { title: "Environmental", desc: "Sustainable operations & carbon footprint reduction." },
                    { title: "Social", desc: "Community impact, labor standards & inclusivity." },
                    { title: "Governance", desc: "Ethical leadership, compliance & transparency." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                    >
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
      {/* Strategic Impact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Strategic Integration</h2>
            <div className="space-y-12">
                {[
                    { 
                        head: "Risk Management", 
                        text: "Proactively identifying non-financial risks from climate volatility to supply chain ethics." 
                    },
                    { 
                        head: "Capital Access", 
                        text: "Unlocking green financing. 80% of institutional investors now integrate ESG into investment decisions." 
                    },
                    { 
                        head: "Talent Attraction", 
                        text: "Purpose-driven organizations retain top talent. Build a culture that aligns with the values of the future workforce." 
                    }
                ].map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col md:flex-row gap-6 items-start md:items-center border-b border-slate-100 pb-8 last:border-0"
                    >
                        <div className="w-full md:w-1/3 text-xl font-bold text-green-700">{feature.head}</div>
                        <div className="w-full md:w-2/3 text-lg text-slate-600 leading-relaxed">{feature.text}</div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
