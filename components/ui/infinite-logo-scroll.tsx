"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  "/logos/drpinnacle.png",
  "/logos/Faba.png",
  "/logos/redshelid1.png",
  "/logos/optgpt.png",
  "/logos/ApplyuniNow.png",
  "/logos/markitome.png",
  "/logos/image.png",
  "/logos/techop.png",
  "/logos/OptGrad_logo.png",
  "/logos/optsearch.png",
  "/logos/csi.jpg",
  "/logos/capsim.png",
  "/logos/hive_link_logo.jpg",
  "AI COMPASS"
];

/* Scale map for smaller logos */
const LOGO_SCALE: Record<string, string> = {
  "/logos/csi.jpg": "scale-[1.9]",
  "/logos/techop.png": "scale-[1.4]",
  "/logos/OptGrad_logo.png": "scale-[1.4]",
  "/logos/optsearch.png": "scale-[1.4]",
};

/* URL map for clickable logos */
const LOGO_LINKS: Record<string, string> = {
  "/logos/techop.png": "https://techoptima.ai/",
  "/logos/optgpt.png": "https://optgpt.in",
  "/logos/ApplyuniNow.png": "https://www.ApplyUniNow.com",
  "/logos/OptGrad_logo.png": "https://optgpt.in",
  "/logos/optsearch.png": "https://optsearch.in",
  "/logos/drpinnacle.png": "https://drpinnacle.com/",
  "/logos/csi.jpg": "https://csi.org",
  "/logos/markitome.png": "https://markitome.com",
  "/logos/hive_link_logo.jpg": "https://hivelink.com",
  "/logos/image.png": "https://www.policybazaar.com/",
  "/logos/Faba.png": "https://biofaba.org.in/"
};

export function InfiniteLogoScroll() {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-slate-50">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Our Alumni Works
        </p>
      </div>

      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-full items-center">
        <motion.div
          className="flex items-center flex-nowrap will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-33.333%"] }}
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
          {[0, 1, 2].map((setIndex) => (
            <div key={setIndex} className="flex flex-none items-center flex-nowrap gap-12 md:gap-20 lg:gap-24 pr-12 md:pr-20 lg:pr-24">
              {LOGOS.map((logo, index) => {
                const url = LOGO_LINKS[logo];
                const inner = (
                  <>
                    {logo.includes(".") ? (
                      <img
                        src={logo.startsWith("/") ? logo : `/${logo}`}
                        alt={`Partner logo ${setIndex}-${index}`}
                        className={`w-auto object-contain mix-blend-multiply border-none pointer-events-none ${logo.toLowerCase().includes("csi")
                          ? "h-10 md:h-14 lg:h-16"
                          : logo.toLowerCase().includes("capsim")
                            ? "h-6 md:h-8 lg:h-10"
                            : logo.toLowerCase().includes("optgrad") || logo.toLowerCase().includes("optsearch")
                              ? "h-12 md:h-16 lg:h-20 scale-125"
                              : logo.toLowerCase().includes("optgpt") || logo.toLowerCase().includes("techop") || logo.toLowerCase().includes("applyuninow")
                                ? "h-10 md:h-14 lg:h-16 scale-110"
                                : logo.toLowerCase().includes("image")
                                  ? "h-8 md:h-12 lg:h-14"
                                  : "h-10 md:h-14 lg:h-16"
                          }`}
                      />
                    ) : (
                      <span className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 whitespace-nowrap tracking-tighter border-none outline-none">
                        {logo}
                      </span>
                    )}
                  </>
                );
                return url ? (
                  <a
                    key={`${setIndex}-${index}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center hover:scale-110 cursor-pointer border-none outline-none"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex-none grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center hover:scale-110 border-none outline-none"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}