"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingTelegram() {
  return (
    <div className="fixed bottom-[110px] right-4 md:bottom-8 md:right-8 z-40 group transition-all duration-500">
       {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Need help? Chat with support
      </span>

      <Link
        href="https://t.me/fareedsaad"
        target="_blank"
        className="relative flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white shadow-lg transition-all duration-300 hover:bg-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_20px_rgba(34,158,217,0.5)] active:scale-95"
      >
        <MessageCircle size={20} className="fill-current" />
        
        {/* Subtle Ring (Always there but faint) */}
        <div className="absolute inset-0 rounded-full border border-alsaha-green/30 animate-[pulse_4s_infinite]" />
      </Link>
    </div>
  );
}
