"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, Maximize, Settings, Cast, AlertCircle, RefreshCw } from "lucide-react";

interface VideoPlayerProps {
    channelName?: string;
    onError?: () => void;
    onShowSidebar?: () => void;
}

export default function VideoPlayer({ channelName = "Channel", onShowSidebar }: VideoPlayerProps) {
  // ... (keep state)
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-hide controls logic
  // Auto-hide controls logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying && isHovering && !isLoading && !hasError) {
        if (!showControls) setTimeout(() => setShowControls(true), 0);
        timeout = setTimeout(() => setShowControls(false), 2500); // Faster fade 2.5s
    } else if (!isPlaying || isLoading || hasError) {
        if (!showControls) setTimeout(() => setShowControls(true), 0);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, isHovering, isLoading, hasError, showControls]);
  
  const togglePlay = () => {
      // ... (keep existing logic)
      if (hasError) {
          setHasError(false);
          setIsLoading(true);
          setTimeout(() => {
              setIsLoading(false);
              setIsPlaying(true);
          }, 1500);
          return;
      }
      setIsPlaying(!isPlaying);
  };

  const handleFullscreen = () => {
      // ...
      if (!document.fullscreenElement && containerRef.current) {
          containerRef.current.requestFullscreen().catch(err => console.error(err));
      } else {
          document.exitFullscreen();
      }
  };

  return (
    <div 
        ref={containerRef}
        className="relative w-full h-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/5 ring-1 ring-white/5 group select-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={() => {
            setShowControls(true);
            if(isPlaying && !isLoading) {
                // Reset timer...
            }
        }}
    >
        {/* ... (Start Screen, Active Player, Error Fallback - Unchanged) ... */}
        {!isPlaying && !isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-black/60" />
                 <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(114,191,68,0.2)] group-hover:bg-alsaha-green group-hover:border-alsaha-green transition-all duration-300"
                 >
                     <Play size={40} className="fill-white text-white ml-2 group-hover:fill-black group-hover:text-black transition-colors" />
                 </motion.button>
            </div>
        )}

        {(isPlaying || isLoading) && !hasError && (
             <div className="absolute inset-0 flex items-center justify-center bg-black">
                 <div className={`w-full h-full bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-opacity duration-1000 ${isLoading ? 'opacity-30' : 'opacity-60'}`} />
                 
                 {isLoading && (
                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                         <div className="w-12 h-12 border-4 border-alsaha-green/30 border-t-alsaha-green rounded-full animate-spin" />
                         <p className="text-white/50 text-xs font-mono tracking-widest uppercase">Connecting...</p>
                     </div>
                 )}
             </div>
        )}

        {hasError && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/95">
                 <AlertCircle size={48} className="text-red-500 mb-4" />
                 <h3 className="text-xl font-bold text-white mb-2">Stream Connection Lost</h3>
                 <p className="text-white/40 mb-6 text-sm">Unable to connect to the secure streaming server.</p>
                 <button 
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-bold transition-all"
                 >
                     <RefreshCw size={18} />
                     <span>Retry Connection</span>
                 </button>
            </div>
        )}

        {/* Controls Overlay */}
        <AnimatePresence>
            {showControls && !isLoading && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none"
                >
                    {/* Top Bar */}
                    <div className="flex justify-between items-start pointer-events-auto w-full gap-4">
                        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                            <span className="px-2 py-1 bg-red-600 rounded-md text-[10px] font-black text-white flex items-center gap-1.5 shadow-lg tracking-wider shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                LIVE
                            </span>
                            
                            {/* Mobile Channels Button (Visible on Mobile Only) */}
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onShowSidebar?.();
                                }}
                                className="md:hidden flex items-center gap-2 px-3 py-1.5 bg-alsaha-green/20 border border-alsaha-green/50 hover:bg-alsaha-green rounded-lg text-white hover:text-black transition-colors"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-alsaha-green animate-pulse shadow-[0_0_5px_#72BF44]" />
                                <span className="text-[10px] font-bold">القنوات</span>
                            </button>

                            <div className="flex flex-col min-w-0 hidden md:flex">
                                <h3 className="font-bold text-white drop-shadow-md leading-none truncate text-sm md:text-base">{channelName}</h3>
                                <span className="text-[10px] text-white/50 font-mono mt-0.5 md:mt-1">1080p • 60FPS</span>
                            </div>
                        </div>
                        <button className="p-2.5 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white">
                            <Cast size={20} />
                        </button>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center justify-between gap-4 pointer-events-auto pb-safe">
                         <div className="flex items-center gap-4 md:gap-6">
                             <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-alsaha-green transition-transform hover:scale-110 active:scale-95">
                                 {isPlaying ? (
                                    <Pause size={28} className="fill-white" /> 
                                 ) : (
                                    <Play size={28} className="fill-white" />
                                 )}
                             </button>
                             
                             <div className="flex items-center gap-3 group/vol">
                                 <Volume2 size={24} className="text-white/90" />
                                 <div className="w-0 overflow-hidden group-hover/vol:w-24 transition-all duration-300 ease-out">
                                     <div className="h-1.5 bg-white/20 rounded-full w-full relative cursor-pointer">
                                         <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-alsaha-green rounded-full shadow-[0_0_10px_#72BF44]" />
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div className="flex items-center gap-3">
                             <button 
                                onClick={() => setHasError(true)} // Debug trigger
                                className="p-2 text-white/50 hover:text-white transition-colors"
                                title="Report Issue"
                             >
                                 <AlertCircle size={20} />
                             </button>
                             <button className="p-2 text-white/70 hover:text-white hover:rotate-90 transition-all duration-500">
                                 <Settings size={22} />
                             </button>
                             <button onClick={handleFullscreen} className="p-2 text-white/70 hover:text-white hover:scale-110 transition-transform">
                                 <Maximize size={22} />
                             </button>
                         </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}
