"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ChevronLeft } from "lucide-react";

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

        <div className="grid gap-6">
            {MATCHES.map((match, idx) => (
                <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                >
                    <Link href={`/matches/${match.id}`}>
                        <div className="group relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/5 hover:border-alsaha-green/30 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(114,191,68,0.05)] hover:-translate-y-1">
                            
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            
                                {/* League Info (Desktop Left / Mobile Top) */}
                                <div className="flex items-center gap-4 w-full md:w-[200px] justify-center md:justify-start border-b md:border-b-0 border-white/5 pb-4 md:pb-0">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-alsaha-green group-hover:bg-alsaha-green/10 transition-colors">
                                        <Trophy size={18} />
                                    </div>
                                    <span className="text-sm md:text-base text-text-secondary font-bold group-hover:text-white transition-colors">{match.league}</span>
                                </div>

                                {/* Match Center */}
                                <div className="flex items-center justify-center gap-8 md:gap-16 flex-1 w-full">
                                    {/* Home Team */}
                                    <div className="flex flex-col items-center gap-4 flex-1 text-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:from-alsaha-green/50 transition-colors">
                                            <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center p-3">
                                                 <div className="w-full h-full rounded-full bg-white/5" /> {/* Placeholder */}
                                            </div>
                                        </div>
                                        <span className="font-bold text-white text-lg md:text-xl md:whitespace-nowrap">{match.homeTeam}</span>
                                    </div>

                                    {/* Score / Time */}
                                    <div className="flex flex-col items-center min-w-[120px] relative">
                                        {match.status === 'LIVE' ? (
                                            <>
                                                <div className="bg-black/50 border border-white/10 rounded-2xl px-6 py-3 mb-2 shadow-inner">
                                                    <span className="text-3xl md:text-4xl font-black text-white tracking-[0.2em] font-mono">{match.score}</span>
                                                </div>
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                    <span className="text-[10px] font-black text-white leading-none">LIVE</span>
                                                </div>
                                                <span className="text-alsaha-green text-xs font-bold mt-1">45'</span>
                                            </>
                                        ) : (
                                            <div className="bg-white/5 border border-white/5 rounded-2xl px-6 py-2 md:py-3 flex flex-col items-center group-hover:bg-white/10 transition-colors">
                                                <span className="text-2xl md:text-3xl font-black text-white tracking-widest">{match.time}</span>
                                                <span className="text-[10px] md:text-xs text-text-secondary font-bold uppercase tracking-wider mt-1">{match.date}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Away Team */}
                                    <div className="flex flex-col items-center gap-4 flex-1 text-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent p-[1px] group-hover:from-alsaha-green/50 transition-colors">
                                            <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center p-3">
                                                 <div className="w-full h-full rounded-full bg-white/5" /> {/* Placeholder */}
                                            </div>
                                        </div>
                                        <span className="font-bold text-white text-lg md:text-xl md:whitespace-nowrap">{match.awayTeam}</span>
                                    </div>
                                </div>

                                {/* Arrow (Desktop) */}
                                <div className="hidden md:flex w-[100px] justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                                    <div className="w-12 h-12 rounded-full border border-alsaha-green/30 bg-alsaha-green/10 flex items-center justify-center text-alsaha-green shadow-[0_0_15px_rgba(114,191,68,0.2)]">
                                        <ChevronLeft size={24} className="rtl-flip" />
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
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


