"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  "/logos/drpinnacle.png",
  "/logos/Faba.png",
  "/logos/redshelid1.png",
  "/logos/optgpt.png",
  "/logos/markitome.png",
  "/logos/csi.jpg",
  "/logos/image.png",
  "/logos/techop.png",
  "/logos/OptGrad_logo.png",
  "/logos/optsearch.png",
  "/logos/capsim.png",
  "/logos/hive_link_logo.jpg",
  "AI COMPASS"
];

export function InfiniteLogoScroll() {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-slate-50">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Our Alumini Works</p>
      </div>

      {/* Gradient Masks for Fade Effect - Blended for seamless feel */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-full items-center">
        <motion.div
          className="flex items-center flex-nowrap will-change-transform"
          initial={{ x: 0 }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex flex-none items-center flex-nowrap gap-12 md:gap-20 lg:gap-24 pr-12 md:pr-20 lg:pr-24">
              {LOGOS.map((logo, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex-none grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center hover:scale-110"
                >
                  {logo.includes(".") ? (
                    <img
                      src={logo.startsWith("/") ? logo : `/${logo}`}
                      alt={`Partner logo ${setIndex}-${index}`}
                      className={`w-auto object-contain pointer-events-none mix-blend-multiply ${logo.toLowerCase().includes("csi")
                          ? "h-10 md:h-14 lg:h-16"
                          : logo.toLowerCase().includes("capsim")
                            ? "h-6 md:h-8 lg:h-10"
                            : logo.toLowerCase().includes("optgrad") || logo.toLowerCase().includes("optsearch")
                              ? "h-12 md:h-16 lg:h-20 scale-125"
                              : logo.toLowerCase().includes("optgpt") || logo.toLowerCase().includes("techop")
                                ? "h-10 md:h-14 lg:h-16 scale-110"
                                : logo.toLowerCase().includes("image")
                                  ? "h-8 md:h-12 lg:h-14"
                                  : "h-10 md:h-14 lg:h-16"
                        }`}
                    />
                  ) : (
                    <span className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 whitespace-nowrap tracking-tighter">
                      {logo}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
