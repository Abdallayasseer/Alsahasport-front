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
    <section className="section-padding relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-dark-base" />
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none" />
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none" />
       
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-alsaha-green/10 border border-alsaha-green/20 text-alsaha-green text-sm font-bold mb-6 shadow-[0_0_15px_rgba(114,191,68,0.1)]"
          >
             <Trophy size={16} className="animate-pulse" />
             <span>أهم مباريات اليوم</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            جدول <span className="text-transparent bg-clip-text bg-gradient-to-r from-alsaha-green to-white">المباريات</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            تابع نتائج ومواعيد أهم المباريات في مختلف الدوريات العالمية والمحلية في الوقت الفعلي.
          </p>
        </div>

        {/* Swipeable Carousel Container */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
            {loading ? (
                // Skeleton Loader
                Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center md:snap-start">
                        <div className="bg-white/5 border border-white/5 rounded-3xl p-6 h-[220px] flex flex-col justify-between">
                             <div className="flex justify-between">
                                 <Skeleton className="w-24 h-4 rounded-full" />
                                 <Skeleton className="w-16 h-4 rounded-full" />
                             </div>
                             <div className="flex justify-between items-center px-4">
                                 <div className="flex flex-col items-center gap-3">
                                     <Skeleton className="w-16 h-16 rounded-full" />
                                     <Skeleton className="w-20 h-4 rounded-full" />
                                 </div>
                                 <div className="flex flex-col items-center gap-2">
                                     <Skeleton className="w-12 h-8 rounded-lg" />
                                     <Skeleton className="w-16 h-3 rounded-full" />
                                 </div>
                                 <div className="flex flex-col items-center gap-3">
                                     <Skeleton className="w-16 h-16 rounded-full" />
                                     <Skeleton className="w-20 h-4 rounded-full" />
                                 </div>
                             </div>
                        </div>
                    </div>
                ))
            ) : (
                MATCHES.map((match, idx) => (
                    <motion.div
                        key={match.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="min-w-[85vw] md:min-w-[400px] snap-center md:snap-start"
                    >
                        <Link href={`/matches/${match.id}`}>
                            <div className="glass-card h-full group relative overflow-hidden rounded-3xl p-5 md:p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(114,191,68,0.1)] hover:-translate-y-1">
                                
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                
                                <div className="flex flex-col gap-6 relative z-10">
                                
                                    {/* League Info (Top) */}
                                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-alsaha-green transition-colors">
                                                <Trophy size={14} />
                                            </div>
                                            <span className="text-xs md:text-sm text-text-secondary font-bold group-hover:text-white transition-colors">{match.league}</span>
                                        </div>
                                        <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-white/60 font-medium">
                                            Week 24
                                        </div>
                                    </div>

                                    {/* Match Center */}
                                    <div className="flex items-center justify-between">
                                        {/* Home Team */}
                                        <div className="flex flex-col items-center gap-3 w-1/3 text-center">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:from-alsaha-green/50 transition-colors">
                                                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center p-2">
                                                     <div className="w-full h-full rounded-full bg-white/5" /> {/* Placeholder */}
                                                </div>
                                            </div>
                                            <span className="font-bold text-white text-sm md:text-base line-clamp-1 w-full">{match.homeTeam}</span>
                                        </div>

                                        {/* VS / Score */}
                                        <div className="flex flex-col items-center justify-center w-1/3">
                                            {match.status === 'LIVE' ? (
                                                <>
                                                    <span className="text-2xl md:text-3xl font-black text-white tracking-widest font-mono mb-1">{match.score}</span>
                                                    <span className="px-2 py-0.5 bg-red-600 rounded text-[10px] font-bold text-white animate-pulse">LIVE</span>
                                                </>
                                            ) : (
                                                <div className="flex flex-col items-center">
                                                    <span className="text-xl md:text-2xl font-black text-white tracking-widest">{match.time}</span>
                                                    <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider mt-1">{match.date}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Away Team */}
                                        <div className="flex flex-col items-center gap-3 w-1/3 text-center">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:from-alsaha-green/50 transition-colors">
                                                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center p-2">
                                                     <div className="w-full h-full rounded-full bg-white/5" /> {/* Placeholder */}
                                                </div>
                                            </div>
                                            <span className="font-bold text-white text-sm md:text-base line-clamp-1 w-full">{match.awayTeam}</span>
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
                <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-alsaha-green hover:border-alsaha-green text-white hover:text-black font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 group">
                    <span>عرض جدول المباريات الكامل</span>
                    <ChevronLeft size={20} className="rtl-flip group-hover:-translate-x-1 transition-transform" />
                </button>
            </Link>
        </div>

      </div>
    </section>
  );
}


