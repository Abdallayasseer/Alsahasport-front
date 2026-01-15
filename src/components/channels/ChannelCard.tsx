"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// INTERFACE
interface ChannelProps {
  id: string | number;
  name?: string;     // Optional to prevent build crashes
  logoUrl?: string;  // Optional
}

export default function ChannelCard({ id, name, logoUrl }: ChannelProps) {
  const [imgError, setImgError] = useState(false);

  // LOGIC: Safe Name handling (Defensive Programming)
  // Defaults to "Unknown Channel" if name is undefined/null/empty
  const safeName = name && name.trim() ? name : "Unknown Channel";

  // LOGIC: If no url provided, treat as error immediately
  const hasValidUrl = logoUrl && logoUrl.trim() !== '';
  const showFallback = !hasValidUrl || imgError;

  return (
    <Link href={`/live/${id}`} className="group relative aspect-[4/3] flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-[#050505] transition-all duration-300 hover:-translate-y-1 hover:border-[#72BF44]/50 hover:shadow-[0_10px_40px_-10px_rgba(114,191,68,0.15)]">
      
      {/* CARD BODY (Image or Monogram) */}
      <div className="relative flex-1 flex items-center justify-center p-6">
        
        {!showFallback ? (
          <Image 
            src={logoUrl!} 
            alt={safeName}
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 50vw, 20vw"
            unoptimized
          />
        ) : (
          /* FALLBACK UI: Massive Letter + Center Name */
          <>
            {/* Artistic Background Letter */}
            <span className="absolute -bottom-2 -right-2 text-9xl font-black text-white/[0.03] select-none leading-none">
              {safeName.charAt(0).toUpperCase()}
            </span>
            {/* Centered Name (High Contrast) */}
            <div className="z-10 flex flex-col items-center gap-2">
                <span className="p-3 rounded-full bg-white/5 border border-white/10 text-[#72BF44]">
                    {/* Generic TV Icon */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                <span className="text-white font-bold text-lg text-center px-2">{safeName}</span>
            </div>
          </>
        )}
      </div>

      {/* FOOTER LABEL (Always Visible) */}
      <div className="w-full bg-black/60 backdrop-blur-md border-t border-white/5 py-3 px-4 flex items-center justify-between">
        <span className="text-gray-300 text-sm font-medium truncate w-full text-center group-hover:text-white transition-colors">
          {safeName}
        </span>
      </div>

      {/* HOVER GLOW EFFECT (Visual Polish) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#72BF44]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
    </Link>
  );
}
