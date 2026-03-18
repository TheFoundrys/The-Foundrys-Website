"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  "/logos/drpinnacle.png",
  "/logos/Faba.png",
  "/logos/redshelid1.png",
  "/logos/optgpt.png",
  "/logos/markitome.png",
  "/logos/csi.png",
  "/logos/image.png",
  "/logos/techop.png",
  "/logos/OptGrad_logo.png",
  "/logos/optsearch.png",
  "/logos/hive_link_logo.jpg",
  "AI COMPASS"
];

export function InfiniteLogoScroll() {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-slate-50">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Our Trusted Partners</p>
      </div>

      {/* Gradient Masks for Fade Effect - Blended for seamless feel */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-full items-center">
        <motion.div
          className="flex items-center gap-12 md:gap-24"
          initial={{ x: 0 }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {/* Duplicate logos once to create seamless loop with -50% animation */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center px-4 hover:scale-110"
            >
              {logo.includes(".") ? (
                <img
                  src={logo.startsWith("/") ? logo : `/${logo}`}
                  alt={`Partner logo ${index}`}
                  className="h-8 md:h-12 lg:h-14 w-auto object-contain pointer-events-none"
                />
              ) : (
                <span className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 whitespace-nowrap tracking-tighter">
                  {logo}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
