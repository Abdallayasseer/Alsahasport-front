"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ChevronLeft, CalendarClock } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

// Mock Data
const MATCHES = [
  {
    id: 1,
    league: "دوري أبطال أوروبا",
    homeTeam: "Real Madrid",
    homeCode: "RMA",
    awayTeam: "Man City",
    awayCode: "MCI",
    time: "22:00",
    date: "اليوم",
    status: "UPCOMING",
  },
  {
    id: 2,
    league: "الدوري الإنجليزي",
    homeTeam: "Liverpool",
    homeCode: "LIV",
    awayTeam: "Arsenal",
    awayCode: "ARS",
    time: "19:30",
    date: "اليوم",
    status: "LIVE",
    score: "1 - 1"
  },
  {
    id: 3,
    league: "الدوري السعودي",
    homeTeam: "Al Hilal",
    homeCode: "HIL",
    awayTeam: "Al Nassr",
    awayCode: "NSR",
    time: "21:00",
    date: "غدًا",
    status: "UPCOMING",
  },
];

export default function UpcomingMatches() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
       {/* Stadium Ambient Light */}
       <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
       
       <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold mb-4"
                >
                    <Trophy size={14} className="text-alsaha-green" />
                    <span>أقوى المواجهات</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                    جدول <span className="text-transparent bg-clip-text bg-gradient-to-tr from-alsaha-green to-white">المباريات</span>
                </h2>
            </div>
            
            <Link href="/matches" className="hidden md:flex group">
                 <Button variant="secondary" className="bg-white/5 border border-white/10 p-6 h-14 hover:bg-white/10 text-white gap-3 rounded-2xl">
                    الجدول الكامل
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform rtl-flip" />
                 </Button>
            </Link>
        </div>

        {/* 🏟️ THE SCOREBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {loading ? (
                Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="h-[240px] rounded-[32px] bg-white/5 animate-pulse border border-white/5" />
                ))
            ) : (
                MATCHES.map((match, idx) => (
                    <motion.div
                        key={match.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group"
                    >
                        <Link href="/live" className="block h-full">
                            
                            {/* Card Body */}
                            <div className={`
                                relative h-full rounded-[32px] overflow-hidden transition-all duration-500
                                ${match.status === 'LIVE' 
                                    ? 'bg-black border border-red-600/50 shadow-[0_0_40px_rgba(220,38,38,0.15)]' 
                                    : 'bg-[#080808] border border-white/5 hover:border-white/10 hover:bg-[#0A0A0A]'
                                }
                            `}>
                                {/* Live Glow Pulsing Background */}
                                {match.status === 'LIVE' && (
                                    <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
                                )}

                                {/* Content Container */}
                                <div className="p-8 flex flex-col justify-between h-full min-h-[260px] relative z-10">
                                    
                                    {/* Top Bar: League & Status */}
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-xs font-bold text-white/30 tracking-widest uppercase">{match.league}</span>
                                        {match.status === 'LIVE' ? (
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                LIVE
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-white/30">
                                                <CalendarClock size={14} />
                                                <span className="text-xs font-bold">{match.date}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Teams Row */}
                                    <div className="flex items-center justify-between">
                                        
                                        {/* Home Team */}
                                        <div className="flex flex-col items-center gap-4 flex-1">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-2xl relative
                                                ${match.status === 'LIVE' ? 'bg-[#111] border-white/10' : 'bg-white/5 border-white/5 group-hover:bg-white/10'}
                                            `}>
                                                <span className="text-lg font-black text-white/40">{match.homeCode}</span>
                                                {/* Color Dot */}
                                                <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-white/20 backdrop-blur-md border border-black" />
                                            </div>
                                            <h3 className="text-sm font-bold text-white text-center leading-tight max-w-[100px]">{match.homeTeam}</h3>
                                        </div>

                                        {/* VS / Score / Time */}
                                        <div className="flex flex-col items-center justify-center w-24">
                                            {match.status === 'LIVE' ? (
                                                <div className="flex flex-col items-center gap-1">
                                                     <div className="text-3xl font-mono font-black text-white tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                                        {match.score}
                                                     </div>
                                                     <span className="text-[10px] text-red-500 font-bold animate-pulse">شوط 2 - دقيقة 75&apos;</span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                                        <span className="text-[10px] font-black text-white/20">VS</span>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xl font-mono font-bold text-white tracking-widest">{match.time}</span>
                                                        <span className="text-[10px] text-white/30">توقيت مكة</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Away Team */}
                                        <div className="flex flex-col items-center gap-4 flex-1">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-2xl relative
                                                ${match.status === 'LIVE' ? 'bg-[#111] border-white/10' : 'bg-white/5 border-white/5 group-hover:bg-white/10'}
                                            `}>
                                                <span className="text-lg font-black text-white/40">{match.awayCode}</span>
                                                {/* Color Dot */}
                                                <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-white/20 backdrop-blur-md border border-black" />
                                            </div>
                                            <h3 className="text-sm font-bold text-white text-center leading-tight max-w-[100px]">{match.awayTeam}</h3>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))
            )}
        </div>
        
        {/* Mobile View All */}
        <div className="mt-12 text-center md:hidden">
            <Link href="/matches">
                <Button variant="secondary" className="w-full py-4 border-white/10 bg-white/5 text-white/60">
                    عرض الجدول الكامل
                </Button>
            </Link>
        </div>

       </div>
    </section>
  );
}
