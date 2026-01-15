"use client";

import { Signal, Tv } from "lucide-react";

interface ChannelFallbackProps {
    name: string;
    className?: string;
}

export default function ChannelFallback({ name, className = "" }: ChannelFallbackProps) {
    // Generate simple initials (first 2 chars)
    const initials = name.slice(0, 2).toUpperCase();

    return (
        <div className={`w-full h-full bg-[#151515] flex flex-col items-center justify-center gap-3 text-white/40 group-hover:text-alsaha-green transition-colors duration-300 select-none ${className}`}>
            <div className="relative">
                <Tv size={40} className="stroke-[1.5]" />
                <Signal size={16} className="absolute -top-1 -right-2 animate-pulse text-alsaha-green/50" />
            </div>
            <span className="font-black text-xs tracking-widest opacity-80 uppercase">
                {name.length > 10 ? initials : name}
            </span>
        </div>
    );
}
