"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

interface Channel {
  id: number;
  name: string;
  category: string;
  image: string;
  quality?: "HD" | "4K" | "SD";
  isLive?: boolean;
}

interface ChannelCardProps {
  channel: Channel;
}

export default function ChannelCard({ channel }: ChannelCardProps) {
  return (
    <Link href="/subscription" className="block h-full group perspective-1000">
      <div className="relative h-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#080808] border border-white/5 transition-all duration-500 group-hover:border-alsaha-green/30 group-hover:shadow-[0_0_30px_rgba(114,191,68,0.15)] group-hover:-translate-y-1">
        
        {/* Hover Glow Background */}
        <div className="absolute inset-0 bg-alsaha-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-start pointer-events-none">
             {/* Quality Badge */}
             {channel.quality && (
                <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-white/50 border border-white/5 group-hover:border-white/10 transition-colors">
                    {channel.quality}
                </div>
            )}

            {/* Live Indicator */}
            {channel.isLive && (
                <div className="flex items-center gap-1.5 bg-red-600/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-red-500/20 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_rgba(220,38,38,0.5)]" />
                    <span className="text-[9px] font-black text-white uppercase tracking-wider">LIVE</span>
                </div>
            )}
        </div>

        {/* Logo Container */}
        <div className="absolute inset-0 p-8 pb-14 flex items-center justify-center z-10">
          <div className="relative w-full h-full max-w-[75%] max-h-[75%] transition-transform duration-700 ease-out group-hover:scale-110">
            <Image
              src={channel.image}
              alt={channel.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            />
          </div>
        </div>
        
        {/* Play Icon Overlay (Fade in on hover) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="w-12 h-12 rounded-full bg-alsaha-green/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(114,191,68,0.4)] scale-75 group-hover:scale-100 transition-transform duration-300 delay-75">
                 <Play size={20} className="fill-black text-black ml-1" />
             </div>
        </div>

        {/* Bottom Gradient & Info */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-20 flex flex-col justify-end min-h-[40%] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-sm font-bold text-white text-center leading-tight line-clamp-1 group-hover:text-alsaha-green transition-colors duration-300">
              {channel.name}
            </h3>
            <p className="text-[10px] text-white/40 text-center font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {channel.category}
            </p>
        </div>
      </div>
    </Link>
  );
}
