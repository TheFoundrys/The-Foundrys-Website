"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  "/logos/drpinnacle.png",
  // "/logos/GSCentriQ.jpeg",
  "/logos/Faba.png",
  // "/logos/gs.png",
  "/logos/redshelid1.png",
  "/logos/csi.png",
  "/logos/techop.png",
  "/logos/OptGrad_logo.png",
  "/logos/optsearch.png"
];

export function InfiniteLogoScroll() {
  return (
    <section className="py-10 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Our Partners</p>
      </div>

      {/* Gradient Masks for Fade Effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-full items-center">
        <motion.div
          className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Slightly slower for better readability
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the logos to create seamless loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-28 md:w-40 lg:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center p-2">
              <img
                src={logo}
                alt={`Partner logo ${index}`}
                className="w-full h-auto max-h-10 md:max-h-14 lg:max-h-16 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
