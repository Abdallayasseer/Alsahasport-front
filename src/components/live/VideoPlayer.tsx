"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, Maximize, Settings, Cast } from "lucide-react";

export default function VideoPlayer({ channelName = "Channel" }: { channelName?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying && isHovering) {
        setShowControls(true);
        timeout = setTimeout(() => setShowControls(false), 3000);
    } else if (!isPlaying) {
        setShowControls(true);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, isHovering]);

  return (
    <div 
        className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/5 ring-1 ring-white/5 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={() => setShowControls(true)}
    >
        {/* Mock Video Content (Gradient + Pulse) */}
        {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80" />
                 <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-20 h-20 rounded-full bg-alsaha-green flex items-center justify-center shadow-[0_0_40px_rgba(114,191,68,0.4)] group-hover:shadow-[0_0_60px_rgba(114,191,68,0.6)] transition-all"
                 >
                     <Play size={32} className="fill-black text-black ml-1" />
                 </motion.button>
            </div>
        )}

        {isPlaying && (
             <div className="absolute inset-0 flex items-center justify-center bg-black">
                 {/* Simulate Stream */}
                 <div className="w-full h-full opacity-30 bg-[url('/images/placeholder-stream.jpg')] bg-cover bg-center animate-pulse" />
                 <p className="text-white/20 font-mono animate-pulse">CONNECTING TO SECURE SERVER...</p>
             </div>
        )}

        {/* Overlay Controls */}
        <AnimatePresence>
            {showControls && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col justify-between p-6 z-20 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none"
                >
                    {/* Top Bar */}
                    <div className="flex justify-between items-start pointer-events-auto">
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-1 bg-red-600 rounded text-[10px] font-bold text-white flex items-center gap-1.5 shadow-lg">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                LIVE
                            </span>
                            <h3 className="font-bold text-white drop-shadow-md">{channelName}</h3>
                        </div>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors font-bold tooltip text-white/80 hover:text-white">
                            <Cast size={20} />
                        </button>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center justify-between pointer-events-auto">
                         <div className="flex items-center gap-4">
                             <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-alsaha-green transition-colors">
                                 {isPlaying ? (
                                    <div className="w-4 h-4 bg-white rounded-sm" /> 
                                 ) : (
                                    <Play size={24} className="fill-white" />
                                 )}
                             </button>
                             <div className="flex items-center gap-2 group/vol">
                                 <Volume2 size={20} className="text-white" />
                                 <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300">
                                     <div className="h-1 bg-white/30 rounded-full w-full relative">
                                         <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-alsaha-green rounded-full" />
                                     </div>
                                 </div>
                             </div>
                             <span className="text-xs font-mono text-white/60">LIVE</span>
                         </div>

                         <div className="flex items-center gap-4">
                             <button className="text-white/70 hover:text-white hover:rotate-45 transition-all">
                                 <Settings size={20} />
                             </button>
                             <button className="text-white/70 hover:text-white transition-colors">
                                 <Maximize size={20} />
                             </button>
                         </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}
