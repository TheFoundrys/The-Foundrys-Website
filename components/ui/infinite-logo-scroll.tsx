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
  "AI COMPASS",
  "OpenVals"
];

/* URL map for clickable logos */
const LOGO_LINKS: Record<string, string> = {
  "/logos/techop.png": "https://techoptima.ai/",
  "/logos/optgpt.png": "https://optgpt.in",
  "/logos/ApplyuniNow.png": "https://www.ApplyUniNow.com",
  "/logos/OptGrad_logo.png": "https://optgpt.in",
  "/logos/optsearch.png": "https://optsearch.in",
  "/logos/drpinnacle.png": "https://drpinnacle.com/",
  "/logos/csi.jpg": "https://csi.org",
  "OpenVals": "https://openvalidations.com/",
  "/logos/markitome.png": "https://markitome.com",
  "/logos/hive_link_logo.jpg": "https://hivelink.com",
  "/logos/image.png": "https://www.policybazaar.com/",
  "/logos/Faba.png": "https://biofaba.org.in/",
  "/logos/capsim.png": "https://www.capsim.com/",
  "/logos/redshelid1.png": "https://thefoundrys.com",
  "AI COMPASS": "https://openvalidations.com/services/ai-compass",
};

export function InfiniteLogoScroll() {
  const sets = [0, 1, 2, 3];

  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-slate-50">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Our Alumni Works
        </p>
      </div>

      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex flex-none items-center flex-nowrap will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ width: "max-content" }}
        >
          {sets.map((setIndex) => (
            <div
              key={setIndex}
              className="flex flex-none items-center flex-nowrap gap-10 md:gap-14 lg:gap-16 pr-10 md:pr-14 lg:pr-16"
            >
              {LOGOS.map((logo, index) => {
                const url = LOGO_LINKS[logo];
                const l = logo.toLowerCase();

                // Normalizing sizes using height classes (layout-aware) instead of scale
                let heightClass = "h-8 md:h-12";
                if (l.includes("csi")) heightClass = "h-14 md:h-22";
                if (l.includes("techop") || l.includes("optgrad") || l.includes("optsearch") || l.includes("optgpt")) heightClass = "h-12 md:h-18";
                if (l.includes("image")) heightClass = "h-10 md:h-16";
                if (l.includes("capsim")) heightClass = "h-6 md:h-10";
                if (l.includes("drpinnacle")) heightClass = "h-10 md:h-16";

                const inner = (
                  <>
                    {logo.includes(".") ? (
                      <img
                        src={logo.startsWith("/") ? logo : `/${logo}`}
                        alt="Partner"
                        loading="eager"
                        className={`w-auto object-contain mix-blend-multiply transition-all duration-300 ${heightClass}`}
                      />
                    ) : (
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 whitespace-nowrap px-4">
                        {logo}
                      </span>
                    )}
                  </>
                );

                const commonClasses = "flex-none grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center hover:scale-105 min-w-[110px] md:min-w-[150px]";

                return url ? (
                  <a
                    key={`${setIndex}-${index}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonClasses} cursor-pointer`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={`${setIndex}-${index}`}
                    className={commonClasses}
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

