"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background - Realistic Abstract Tech */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            // Abstract architecture/network image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Abstract Tech Background"
            className="w-full h-full object-cover"
         />
         {/* Ethereal Light Overlay */}
         <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
         
         {/* Subtle Moving Gradient Blobs on top of image for that 'Ethereal' feel */}
         <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-200/30 blur-[100px] mix-blend-multiply" 
         />
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
            <h1 className="text-[10vw] md:text-[9rem] font-bold tracking-tighter text-slate-900 leading-none select-none uppercase drop-shadow-sm">
            FORGING<br/>ARCHITECTS.
            </h1>
        </motion.div>
        
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-slate-600 text-lg md:text-2xl font-medium tracking-wide mb-12 max-w-3xl"
        >
            We don’t train junior engineers. We build the builders.<br/>
            <span className="text-slate-400 line-through decoration-slate-400">Not a College.</span> India’s First Deep Tech Ecosystem.
        </motion.p>

        <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.7 }}
             className="flex flex-col sm:flex-row gap-6"
        >
            <button className="relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg overflow-hidden group hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                 <span className="relative flex items-center gap-2">
                    ENTER THE FOUNDRY <span className="text-slate-200">↗</span>
                 </span>
            </button>
            <button className="px-10 py-5 text-slate-600 font-medium text-lg hover:text-slate-900 transition-colors border border-transparent hover:border-slate-200 rounded-full">
                VIEW THE MANIFESTO
            </button>
        </motion.div>
      </div>
    </section>
  );
}
