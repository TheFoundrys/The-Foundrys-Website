"use client";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Brain, Shield, Blocks } from "lucide-react";

export function Triad() {
  const cards = [
    {
      title: "THE INTELLIGENCE LAYER",
      subtitle: "Architecting Minds",
      desc: "Don't just call APIs. Train them. Build autonomous agents and the neural architecture of the future.",
      icon: Brain,
      color: "text-violet-600",
      bg: "bg-violet-50"
    },
    {
      title: "THE DEFENSE LAYER",
      subtitle: "Architecting Fortresses",
      desc: "The next war is digital. Learn offensive pentesting and build impenetrable network designs.",
      icon: Shield,
      color: "text-slate-800",
      bg: "bg-slate-100"
    },
    {
      title: "THE TRUST LAYER",
      subtitle: "Architecting Truth",
      desc: "Code is law. Build the decentralized financial systems that will replace the old world.",
      icon: Blocks,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
      <section className="py-32 px-4 bg-white relative overflow-hidden">
          {/* Subtle Backgound Gradient */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-slate-50 to-transparent pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="h-full"
                    >
                        <div className="h-full p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col group">
                             <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                 <card.icon className={`w-8 h-8 ${card.color}`} />
                             </div>
                            
                            <div className="mt-auto">
                                <h4 className="text-xs font-bold tracking-widest text-slate-400 mb-2 uppercase">{card.title}</h4>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{card.subtitle}</h3>
                                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                  ))}
              </div>
          </div>
      </section>
  )
}
