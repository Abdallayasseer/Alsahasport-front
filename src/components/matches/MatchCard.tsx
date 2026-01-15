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
    <div className="p-3 md:p-6 hover:bg-white/5 transition-colors flex items-center justify-between gap-2 md:gap-4 group cursor-pointer border-b border-white/5 last:border-0">
        
        {/* Status / Time (Right on RTL) */}
        <div className="w-12 md:w-24 text-center shrink-0">
            {match.status === 'LIVE' ? (
                <div className="flex flex-col items-center gap-1">
                    <span className="text-red-500 font-black text-[10px] md:text-xs md:animate-pulse">مباشر</span>
                    <span className="text-alsaha-green text-[10px] font-bold">45&apos;</span>
                </div>
            ) : match.status === 'FINISHED' ? (
                <div className="flex flex-col items-center gap-1 opacity-50">
                    <span className="text-white font-bold text-xs md:text-sm">FT</span>
                    <span className="text-text-secondary text-[10px]">{match.time}</span>
                </div>
            ) : (
                <div className="flex flex-col items-center gap-1">
                    <span className="text-white font-bold text-xs md:text-lg">{match.time}</span>
                    <Clock size={12} className="text-text-secondary hidden md:block" />
                </div>
            )}
        </div>

        {/* Teams */}
        <div className="flex-1 flex items-center justify-center gap-2 md:gap-12 min-w-0">
            <div className="flex-1 text-left md:text-right font-bold text-white text-xs md:text-lg truncate pl-1">
                {match.home}
            </div>
            
            <div className="shrink-0 w-auto min-w-[60px] md:min-w-[100px] text-center relative z-10">
                {match.status === 'LIVE' || match.status === 'FINISHED' ? (
                    <span className={`
                        px-2 md:px-4 py-1 rounded-lg font-mono font-bold tracking-widest text-sm md:text-3xl whitespace-nowrap block
                        ${match.status === 'LIVE' ? 'bg-dark-base border border-alsaha-green/30 text-white shadow-[0_0_10px_rgba(114,191,68,0.2)]' : 'bg-white/5 text-white/50'}
                    `} dir="ltr">
                        {match.score}
                    </span>
                ) : (
                    <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] md:text-xs text-text-secondary font-bold mx-auto">VS</span>
                )}
            </div>

            <div className="flex-1 text-right md:text-left font-bold text-white text-xs md:text-lg truncate pr-1">
                {match.away}
            </div>
        </div>

        {/* Actions */}
        <div className="w-8 md:w-24 shrink-0 flex justify-end">
            {match.status === 'LIVE' ? (
                <Link href="/live">
                    <button className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 bg-alsaha-green/10 text-alsaha-green hover:bg-alsaha-green hover:text-black rounded-lg text-[10px] md:text-xs font-bold transition-all border border-alsaha-green/20 group-hover:scale-105">
                        <Trophy size={12} className="md:w-[14px] md:h-[14px]" />
                        <span className="hidden md:inline">مشاهدة</span>
                    </button>
                </Link>
            ) : match.status === 'FINISHED' ? (
                 <button className="p-2 text-white/20 cursor-default hidden md:block">
                    <Trophy size={14} />
                 </button>
            ) : (
                <button className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-alsaha-green hover:border-alsaha-green transition-all hover:scale-110 active:scale-95">
                    <Bell size={12} className="md:w-[14px] md:h-[14px]" />
                </button>
            )}
        </div>
    </div>
  );
}
