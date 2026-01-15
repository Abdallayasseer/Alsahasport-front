"use client";

import Link from "next/link";
import { Clock, Trophy, Bell, ChevronLeft } from "lucide-react";

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
        <div className="group relative w-full p-4 rounded-xl border border-white/5 bg-[#0a0a0a] transition-all duration-300 md:hover:-translate-y-1 md:hover:border-[#72BF44] md:hover:shadow-[0_10px_30px_rgba(114,191,68,0.1)] active:scale-[0.98]">
            {/* Background Hover Highlight */}
            <div className="absolute inset-0 bg-white/0 md:group-hover:bg-white/5 transition-colors duration-300 rounded-xl" />

            <div className="relative z-10 flex items-center justify-between gap-4">
                
                {/* 1. Time / Status (Left Side) */}
                <div className="w-20 shrink-0 md:w-24 text-center">
                    {match.status === 'LIVE' ? (
                        <div className="flex flex-col items-center gap-1.5">
                            <span className="inline-flex items-center gap-1.5 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black px-2 py-0.5 rounded-full md:animate-pulse">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                LIVE
                            </span>
                            <span className="text-alsaha-green text-[10px] font-mono tracking-widest">45'</span>
                        </div>
                    ) : match.status === 'FINISHED' ? (
                        <div className="flex flex-col items-center gap-1 opacity-50">
                            <span className="text-white/60 font-bold text-xs bg-white/5 px-2 py-0.5 rounded">FT</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white/80 font-mono font-medium text-sm md:text-base tracking-wider group-hover:text-white transition-colors">{match.time}</span>
                            <div className="text-[10px] text-text-secondary bg-white/5 px-2 rounded hidden md:block group-hover:bg-white/10 transition-colors">
                                الليلة
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Teams & VS (Center) */}
                <div className="flex-1 flex items-center justify-center gap-3 md:gap-8 min-w-0">
                    
                    {/* Home Team */}
                    <div className="flex-1 flex items-center justify-end gap-3 text-right">
                        <span className="font-bold text-white text-sm md:text-base truncate md:group-hover:text-alsaha-green transition-colors">{match.home}</span>
                         {/* Circle Logo Placeholder */}
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 p-1.5 flex items-center justify-center border border-white/5 md:group-hover:border-alsaha-green/50 md:group-hover:bg-alsaha-green/10 transition-all duration-300">
                             <div className="w-full h-full rounded-full bg-white/10" /> 
                        </div>
                    </div>

                    {/* VS / Score */}
                    <div className="shrink-0">
                        {match.status !== 'UPCOMING' ? (
                            <div className="px-3 py-1 bg-black/40 border border-white/10 rounded-lg backdrop-blur-md">
                                <span className="text-lg md:text-2xl font-mono font-black text-white tracking-widest leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" dir="ltr">
                                    {match.score}
                                </span>
                            </div>
                        ) : (
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 md:group-hover:border-[#72BF44]/30 md:group-hover:shadow-[0_0_15px_rgba(114,191,68,0.2)] transition-all duration-300">
                                <span className="text-[10px] font-black text-white/30 md:group-hover:text-[#72BF44] transition-colors">VS</span>
                            </div>
                        )}
                    </div>

                    {/* Away Team */}
                    <div className="flex-1 flex items-center justify-start gap-3 text-left">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 p-1.5 flex items-center justify-center border border-white/5 md:group-hover:border-alsaha-green/50 md:group-hover:bg-alsaha-green/10 transition-all duration-300">
                             <div className="w-full h-full rounded-full bg-white/10" /> 
                        </div>
                        <span className="font-bold text-white text-sm md:text-base truncate md:group-hover:text-alsaha-green transition-colors">{match.away}</span>
                    </div>
                </div>

                {/* 3. Action (Right Side) */}
                <div className="w-10 shrink-0 flex justify-end">
                     {match.status === 'LIVE' ? (
                        <Link href="/live" className="w-8 h-8 rounded-full bg-alsaha-green/20 flex items-center justify-center text-alsaha-green hover:bg-alsaha-green hover:text-black transition-all hover:scale-110 shadow-[0_0_10px_rgba(114,191,68,0.2)]">
                            <Trophy size={14} />
                        </Link>
                     ) : (
                        <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 md:group-hover:border-alsaha-green/50 md:group-hover:text-alsaha-green transition-all">
                            <Bell size={14} />
                        </button>
                     )}
                </div>

            </div>
        </div>
    );
}
