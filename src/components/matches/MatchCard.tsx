"use client";

import Link from "next/link";
import { Clock, Trophy, Bell } from "lucide-react";

export interface MatchProps {
    id: number;
    home: string;
    away: string;
    time: string;
    status: 'LIVE' | 'UPCOMING' | 'FINISHED';
    score: string;
}

export default function MatchCard({ match }: { match: MatchProps }) {
  return (
    <div className="p-4 md:p-6 hover:bg-white/5 transition-colors flex items-center justify-between gap-4 group cursor-pointer border-b border-white/5 last:border-0">
        
        {/* Status / Time (Right on RTL) */}
        <div className="w-16 md:w-24 text-center shrink-0">
            {match.status === 'LIVE' ? (
                <div className="flex flex-col items-center gap-1">
                    <span className="text-red-500 font-black text-xs animate-pulse">مباشر</span>
                    <span className="text-alsaha-green text-[10px] font-bold">45&apos;</span>
                </div>
            ) : match.status === 'FINISHED' ? (
                <div className="flex flex-col items-center gap-1 opacity-50">
                    <span className="text-white font-bold text-sm">FT</span>
                    <span className="text-text-secondary text-[10px]">{match.time}</span>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-1">
                    <span className="text-white font-bold text-sm md:text-lg">{match.time}</span>
                    <Clock size={12} className="text-text-secondary" />
                </div>
            )}
        </div>

        {/* Teams */}
        <div className="flex-1 flex items-center justify-center gap-4 md:gap-12">
            <div className="flex-1 text-left md:text-right font-bold text-white text-sm md:text-lg truncate">
                {match.home}
            </div>
            
            <div className="shrink-0 w-16 md:w-20 text-center">
                {match.status === 'LIVE' || match.status === 'FINISHED' ? (
                    <span className={`
                        px-3 py-1 rounded-lg font-mono font-bold tracking-widest text-lg md:text-xl whitespace-nowrap
                        ${match.status === 'LIVE' ? 'bg-dark-base border border-alsaha-green/30 text-white shadow-[0_0_10px_rgba(114,191,68,0.2)]' : 'bg-white/5 text-white/50'}
                    `}>
                        {match.score}
                    </span>
                ) : (
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-text-secondary font-bold">VS</span>
                )}
            </div>

            <div className="flex-1 text-right md:text-left font-bold text-white text-sm md:text-lg truncate">
                {match.away}
            </div>
        </div>

        {/* Actions */}
        <div className="w-10 md:w-24 shrink-0 flex justify-end">
            {match.status === 'LIVE' ? (
                <Link href="/live">
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-alsaha-green/10 text-alsaha-green hover:bg-alsaha-green hover:text-black rounded-lg text-xs font-bold transition-all border border-alsaha-green/20 group-hover:scale-105">
                        <Trophy size={14} />
                        <span className="hidden md:inline">مشاهدة</span>
                    </button>
                </Link>
            ) : match.status === 'FINISHED' ? (
                 <button className="p-2 text-white/20 cursor-default">
                    <Trophy size={14} />
                 </button>
            ) : (
                <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-alsaha-green hover:border-alsaha-green transition-all hover:scale-110 active:scale-95">
                    <Bell size={14} />
                </button>
            )}
        </div>
    </div>
  );
}
