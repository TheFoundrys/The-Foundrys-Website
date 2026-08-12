"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PlayCircle, X } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});

// Dynamically import 3D component to avoid SSR issues
const ParticleForge = dynamic(() => import("@/components/3d/particle-forge"), { ssr: false });

// Video Modal Component to play the local MP4 film
function HeroVideoModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      {/* Close Button Trigger for manual exit */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-[102] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md group"
      >
        <X size={24} className="group-hover:rotate-90 transition-transform" />
      </button>

      {/* Video Container playing native local MP4 film with no controls */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-0">
        <video
          src="/videos/foundry-film-modal.mp4"
          autoPlay
          playsInline
          className="max-w-full max-h-full object-contain pointer-events-none"
          style={{ pointerEvents: 'none' }}
          onEnded={onClose}
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 74) {
              onClose();
            }
          }}
        />
      </div>

      {/* Transparent overlay that catches all clicks/taps to prevent any interaction with the video */}
      <div
        className="absolute inset-0 z-10 bg-transparent"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  // Video State
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background Video using native local MP4 film */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src="/videos/foundry-film-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none scale-[1.08] origin-center"
          style={{ pointerEvents: 'none' }}
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 74) {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }
          }}
        />
        {/* Transparent overlay that catches all clicks/taps, preventing them from focusing the video */}
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
            backgroundRepeat: 'repeat',
            cursor: 'default'
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>

      {/* Bottom-left Motive Overlay */}
      <div className="absolute bottom-16 left-8 md:bottom-24 md:left-16 lg:left-24 z-30 pointer-events-none select-none max-w-5xl text-left">
        <h2 className={`${instrumentSerif.className} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] [text-shadow:4px_4px_8px_rgba(0,0,0,0.8)]`}>
          THE FUTURE ISN’T PREDICTED.<br></br>IT’S FORGED.
        </h2>
      </div>

      {/* Video Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <HeroVideoModal onClose={() => setIsVideoOpen(false)} />
        )}
      </AnimatePresence>


      {/* Bottom spacer with no visual gradients */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" />
    </section>
  );
}
