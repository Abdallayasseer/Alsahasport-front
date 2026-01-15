"use client";

import Image from "next/image";
import Link from "next/link";

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
    <Link href="/subscription" className="block h-full">
      <div className="relative h-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-black border border-white/10 shadow-lg">
        
        {/* Top Right Badge (Live or Quality) */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1 items-end">
            {channel.isLive && (
                <div className="flex items-center gap-1 bg-red-600/90 px-2 py-0.5 rounded-md border border-red-500/20 shadow-lg md:animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white md:animate-ping" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider">MUBASH ER</span>
                </div>
            )}
            {channel.quality && (
                <div className="bg-black/50 px-1.5 py-0.5 rounded text-[9px] font-bold text-white/70 border border-white/10">
                    {channel.quality}
                </div>
            )}
        </div>

        {/* Logo Container (Centered) */}
        <div className="absolute inset-0 p-8 pb-12 flex items-center justify-center z-10">
          <div className="relative w-full h-full max-w-[80%] max-h-[80%]">
            <Image
              src={channel.image}
              alt={channel.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            />
          </div>
        </div>

        {/* Bottom Info (Centered) */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex flex-col items-center justify-end h-1/3">
            <h3 className="text-sm font-semibold text-white text-center leading-tight line-clamp-1 px-2">
              {channel.name}
            </h3>
        </div>
      </div>
    </Link>
  );
}
