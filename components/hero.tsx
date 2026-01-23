"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { PlayCircle, Pause, Play, Volume2, VolumeX, X } from "lucide-react";

// Dynamically import 3D component to avoid SSR issues
const ParticleForge = dynamic(() => import("@/components/3d/particle-forge"), { ssr: false });

// Video Modal Component to handle Lifecycle properly
function HeroVideoModal({ onClose }: { onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const initPlayer = () => {
      // @ts-ignore
      if (window.YT && window.YT.Player) {
        // @ts-ignore
        playerRef.current = new window.YT.Player('youtube-player-hero', {
          videoId: 'C1j-X8nhSk0',
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              // YT.PlayerState.ENDED is 0
              if (event.data === 0) {
                onClose();
              }
            }
          }
        });
      }
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      // @ts-ignore
      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    return () => {
      // Cleanup on unmount
      if (playerRef.current) {
        try {
            playerRef.current.destroy();
        } catch(e) {
            console.error("Error destroying player:", e);
        }
      }
    };
  }, [onClose]);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

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

        {/* Custom Controls */}
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-[102] flex items-center gap-4">
            <button 
                onClick={togglePlay}
                className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 active:scale-95 border border-white/10"
            >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
            <button 
                onClick={toggleMute}
                className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 active:scale-95 border border-white/10"
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
        </div>

        <div id="youtube-player-hero" className="w-full h-full absolute inset-0 pointer-events-none" style={{ pointerEvents: 'none' }} />
        
        {/* Invisible layer to block interactions with youtube iframe if needed */}
        <div className="absolute inset-0 z-[101]" onClick={togglePlay} />
    </motion.div>
  );
}

export function Hero() {
  // Video State
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
      
      {/* 3D Animation: Full Screen Background */}
      <div className="absolute inset-0 z-0">
           {!isVideoOpen && <ParticleForge />}
           {/* Gradient Overlay to ensure text readability on the left */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className={`relative z-10 w-full h-full min-h-screen flex flex-col justify-center lg:justify-start items-center lg:items-start px-6 lg:px-16 pointer-events-none transition-opacity duration-500 ${isVideoOpen ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Text Content - Mobile: Centered, Desktop: Left Aligned */}
        <div className="max-w-5xl pointer-events-auto sm:mt-28 lg:mt-40 flex flex-col items-center lg:items-start px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 sm:mb-8 relative w-full"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7.5rem] font-bold tracking-tighter text-white leading-[1.1] sm:leading-[0.9] select-none uppercase drop-shadow-lg text-center lg:text-left">
                FORGING INNOVATORS
                </h1>
                <div className="flex flex-col justify-center items-center lg:items-start mt-2 sm:mt-3 lg:mt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-[7.5rem] font-bold tracking-tighter text-blue-400 select-none uppercase drop-shadow-md bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.1] sm:leading-[0.9]"
                    >
                      IN THE AGE OF AI
                    </motion.div>
                </div>
            </motion.div>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 lg:mt-10 text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide max-w-3xl text-center lg:text-left drop-shadow-md leading-relaxed px-2 sm:px-0"
            >
                We don't train junior engineers. We forge Founders & Leaders. <span className="hidden sm:inline text-slate-500 mx-2">|</span><span className="sm:hidden"><br/></span> <span className="text-slate-400 line-through decoration-slate-400 opacity-80">Not a College.</span> India's First Deep Tech & Venture Ecosystem.
            </motion.p>

            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center w-full"
            >
                <Link href="/apply" className="relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-full font-bold text-base sm:text-lg overflow-hidden group hover:scale-105 transition-all shadow-xl hover:shadow-2xl hover:bg-slate-50 ring-2 ring-white/50 w-full sm:w-fit text-center">
                     <span className="relative flex items-center justify-center gap-2">
                        Enter The Foundry <span className="text-slate-600 group-hover:translate-x-1 transition-transform">→</span>
                     </span>
                </Link>

                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/40 transition-all group backdrop-blur-sm w-full sm:w-fit justify-center hover:scale-105"
                >
                    <PlayCircle size={20} className="sm:w-6 sm:h-6 group-hover:text-blue-400 transition-colors" />
                    <span>Watch the Film</span>
                </button>
            </motion.div>
        </div>

      </div>

      {/* Video Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
            <HeroVideoModal onClose={() => setIsVideoOpen(false)} />
        )}
      </AnimatePresence>


      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}
