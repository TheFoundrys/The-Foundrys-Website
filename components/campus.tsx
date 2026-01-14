"use client";
import { motion } from "framer-motion";

export function Campus() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-50 border-y border-slate-100">
         {/* Background Simulation - Real Image */}
         <div className="absolute inset-0 z-0">
             <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                // Modern Coffee Shop/Coding environment
                src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=2000&q=80"
                alt="Coffee Shop Coding"
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
         </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center">
        <div className="max-w-4xl w-full p-12 md:p-16 text-center bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter"
             >
                <span className="line-through decoration-slate-300 text-slate-400 mr-4">Classrooms</span>
                are for sleeping. <br/>
                <span className="text-orange-500">Workspaces are for shipping.</span>
             </motion.h2>

             <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                We replaced dusty desks with premium lounges. We replaced professors with active CTOs. 
                Located inside a premium workspace in the heart of Hyderabad, you aren't isolated on a campus. 
                You are embedded in the ecosystem.
             </p>

             <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full border border-slate-100 text-slate-600 shadow-sm">
                <span className="font-semibold">📍 Neighbors: Google, Amazon, T-Hub</span>
             </div>
        </div>
      </div>
    </section>
  );
}
