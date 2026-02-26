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
  "/logos/optgpt.png"
];

export function InfiniteLogoScroll() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Our Partners</p>
      </div>

      {/* Gradient Masks for Fade Effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-full">
        <motion.div
          className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Adjust speed here
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the logos to create seamless loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="relative w-40 h-20 md:w-52 md:h-28 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Partner logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
