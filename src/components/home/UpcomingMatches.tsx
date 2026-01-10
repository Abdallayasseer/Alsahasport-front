"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

// Mock Data
const MATCHES = [
  {
    id: 1,
    league: "دوري أبطال أوروبا",
    leagueLogo: "/images/leagues/ucl.png",
    homeTeam: "Real Madrid",
    homeLogo: "/images/teams/realmadrid.png",
    awayTeam: "Man City",
    awayLogo: "/images/teams/mancity.png",
    time: "22:00",
    date: "اليوم",
    status: "UPCOMING",
  },
  {
    id: 2,
    league: "الدوري الإنجليزي",
    leagueLogo: "/images/leagues/pl.png",
    homeTeam: "Liverpool",
    homeLogo: "/images/teams/liverpool.png",
    awayTeam: "Arsenal",
    awayLogo: "/images/teams/arsenal.png",
    time: "19:30",
    date: "اليوم",
    status: "LIVE",
    score: "1 - 1"
  },
  {
    id: 3,
    league: "الدوري السعودي",
    leagueLogo: "/images/leagues/rsl.png",
    homeTeam: "Al Hilal",
    homeLogo: "/images/teams/alhilal.png",
    awayTeam: "Al Nassr",
    awayLogo: "/images/teams/alnassr.png",
    time: "21:00",
    date: "غدًا",
    status: "UPCOMING",
  },
];

export default function UpcomingMatches() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-dark-base" />
       
       <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-alsaha-green/10 border border-alsaha-green/20 text-alsaha-green text-sm font-black mb-6 shadow-[0_0_20px_rgba(114,191,68,0.1)]"
          >
             <Trophy size={16} className="animate-pulse" />
             <span>أهم مباريات اليوم</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            جدول <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-white">المباريات</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            تابع نتائج ومواعيد أهم المباريات في مختلف الدوريات العالمية والمحلية في الوقت الفعلي.
          </p>
        </div>

        {/* Swipeable Carousel Container */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
            {loading ? (
                // Skeleton Loader
                Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="min-w-[85vw] md:min-w-[420px] snap-center">
                        <div className="bg-white/5 border border-white/5 rounded-3xl p-8 h-[240px] flex flex-col justify-between">
                             <div className="flex justify-between">
                                 <Skeleton className="w-24 h-4 rounded-full bg-white/10" />
                                 <Skeleton className="w-16 h-4 rounded-full bg-white/10" />
                             </div>
                             <div className="flex justify-between items-center px-4">
                                 <div className="flex flex-col items-center gap-3">
                                     <Skeleton className="w-16 h-16 rounded-full bg-white/10" />
                                     <Skeleton className="w-20 h-4 rounded-full bg-white/10" />
                                 </div>
                                 <div className="flex flex-col items-center gap-2">
                                     <Skeleton className="w-12 h-8 rounded-lg bg-white/10" />
                                     <Skeleton className="w-16 h-3 rounded-full bg-white/10" />
                                 </div>
                                 <div className="flex flex-col items-center gap-3">
                                     <Skeleton className="w-16 h-16 rounded-full bg-white/10" />
                                     <Skeleton className="w-20 h-4 rounded-full bg-white/10" />
                                 </div>
                             </div>
                        </div>
                    </div>
                ))
            ) : (
                MATCHES.map((match, idx) => (
                    <motion.div
                        key={match.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="min-w-[85vw] md:min-w-[420px] snap-center"
                    >
                        <Link href={match.status === 'LIVE' ? '/live' : '/matches'}>
                            <div className="glass-card h-full group relative overflow-hidden rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-1 border border-white/5 hover:border-alsaha-green/20 bg-[#141414]/60 backdrop-blur-3xl">
                                
                                {/* Background Image/Texture for specific matches (Optional) */}
                                <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                                
                                {/* Hover Gradient Overlay & Shine */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-alsaha-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                                
                                <div className="flex flex-col gap-8 relative z-10 h-full justify-between">
                                
                                    {/* League Info (Top) */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-alsaha-green group-hover:bg-white/10 transition-colors border border-white/5">
                                                <Trophy size={16} />
                                            </div>
                                            <span className="text-xs md:text-sm text-text-secondary font-bold group-hover:text-white transition-colors tracking-wide">{match.league}</span>
                                        </div>
                                        {/* Status Badge */}
                                        {match.status === 'LIVE' ? (
                                             <div className="px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black tracking-widest flex items-center gap-2">
                                                 <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                                 LIVE
                                             </div>
                                        ) : (
                                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/40 text-[10px] font-bold tracking-widest">
                                                UPCOMING
                                            </div>
                                        )}
                                    </div>

                                    {/* Match Center */}
                                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 relative">
                                        
                                        {/* Home Team */}
                                        <div className="flex flex-col items-center gap-4 text-center group/team overflow-hidden">
                                            <div className="relative shrink-0">
                                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover/team:from-alsaha-green group-hover/team:to-alsaha-green/0 transition-all duration-500">
                                                    <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center relative overflow-hidden group-hover/team:shadow-[0_0_20px_rgba(114,191,68,0.2)] transition-shadow duration-500">
                                                         <span className="text-sm md:text-base font-black text-white/20 group-hover/team:text-alsaha-green transition-colors uppercase tracking-tighter scale-125">
                                                            {match.homeTeam.substring(0, 2)}
                                                         </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="font-bold text-white text-sm md:text-base truncate w-full group-hover/team:text-alsaha-green transition-colors px-1">{match.homeTeam}</span>
                                        </div>

                                        {/* VS / Score */}
                                        <div className="flex flex-col items-center justify-center relative z-10 px-1 md:px-4">
                                            {match.status === 'LIVE' ? (
                                                <div className="flex flex-col items-center">
                                                    <div className="w-max mx-auto text-3xl md:text-5xl font-black text-white font-mono mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] whitespace-nowrap" dir="ltr">
                                                        {match.score || "0 - 0"}
                                                    </div>
                                                    <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase animate-pulse">On Air</span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-1">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center mb-1 border border-white/10 shadow-lg">
                                                        <span className="font-black italic text-sm md:text-base text-white/30">VS</span>
                                                    </div>
                                                    <span className="text-xl md:text-2xl font-black text-white tracking-tight">{match.time}</span>
                                                    <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">{match.date}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Away Team */}
                                        <div className="flex flex-col items-center gap-4 text-center group/team overflow-hidden">
                                            <div className="relative shrink-0">
                                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover/team:from-alsaha-green group-hover/team:to-alsaha-green/0 transition-all duration-500">
                                                    <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center relative overflow-hidden group-hover/team:shadow-[0_0_20px_rgba(114,191,68,0.2)] transition-shadow duration-500">
                                                         <span className="text-sm md:text-base font-black text-white/20 group-hover/team:text-alsaha-green transition-colors uppercase tracking-tighter scale-125">
                                                            {match.awayTeam.substring(0, 2)}
                                                         </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="font-bold text-white text-sm md:text-base truncate w-full group-hover/team:text-alsaha-green transition-colors px-1">{match.awayTeam}</span>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))
            )}
        </div>
        
        <div className="flex justify-center mt-12">
            <Link href="/matches">
                <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-alsaha-green hover:border-alsaha-green text-white hover:text-black font-black text-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 group shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(114,191,68,0.4)]">
                    <span>عرض كل المباريات</span>
                    <ChevronLeft size={20} className="rtl-flip group-hover:-translate-x-1 transition-transform" />
                </button>
            </Link>
        </div>

      </div>
    </section>
  );
}


