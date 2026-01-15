"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ChevronLeft, CalendarClock, Zap } from "lucide-react";
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
    <section className="py-24 relative overflow-hidden bg-[#020202]">
       {/* 🏟️ Stadium Ambient - "The Floodlights" */}
       <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-alsaha-green/5 blur-[150px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
       
       {/* Texture Overlay */}
       <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

       <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
        
        {/* Header - "The Scoreboard Top" */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold mb-4 backdrop-blur-md"
                >
                    <Trophy size={14} className="text-alsaha-green" />
                    <span>أقوى المواجهات</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-2xl">
                    جدول <span className="text-transparent bg-clip-text bg-gradient-to-tr from-alsaha-green to-white">المباريات</span>
                </h2>
            </div>
            
            <Link href="/matches" className="hidden md:flex group">
                 <Button variant="secondary" className="bg-white/5 border border-white/10 p-6 h-14 hover:bg-white/10 text-white gap-3 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    الجدول الكامل
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform rtl-flip" />
                 </Button>
            </Link>
        </div>

        {/* 🏟️ THE SCOREBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {loading ? (
                Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="h-[280px] rounded-[40px] bg-white/5 animate-pulse border border-white/5" />
                ))
            ) : (
                MATCHES.map((match, idx) => (
                    <motion.div
                        key={match.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, type: "spring", bounce: 0.2 }}
                        className="relative group h-full"
                    >
                        <Link href="/live" className="block h-full">
                            
                            {/* Card Body - "The Glass Stack" */}
                            <div className={`
                                relative h-full rounded-[40px] overflow-hidden transition-all duration-500 group-hover:scale-[1.02]
                                ${match.status === 'LIVE' 
                                    ? 'bg-gradient-to-br from-[#1a0505] to-black border border-red-900/60 shadow-[0_20px_60px_-10px_rgba(220,38,38,0.15)] group-hover:shadow-[0_30px_80px_-15px_rgba(220,38,38,0.25)]' 
                                    : 'bg-white/[0.02] backdrop-blur-2xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]'
                                }
                            `}>
                                {/* Live Glow Pulsing Background */}
                                {match.status === 'LIVE' && (
                                    <>
                                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-red-600/5 to-transparent pointer-events-none" />
                                        <div className="absolute inset-0 bg-red-500/5 animate-[pulse_3s_infinite]" />
                                    </>
                                )}

                                {/* Content Container */}
                                <div className="p-8 flex flex-col justify-between h-full min-h-[280px] relative z-10">
                                    
                                    {/* Top Bar */}
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-3 bg-white/20 rounded-full" />
                                            <span className="text-xs font-bold text-white/40 tracking-widest uppercase">{match.league}</span>
                                        </div>
                                        {match.status === 'LIVE' ? (
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                                                LIVE
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/40 text-[10px] font-bold">
                                                <CalendarClock size={12} />
                                                <span>{match.date}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Teams Row */}
                                    <div className="flex items-center justify-between relative">
                                        
                                        {/* Home Team */}
                                        <div className="flex flex-col items-center gap-5 flex-1 relative group/team">
                                            {/* Logo Glow */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 blur-[30px] rounded-full opacity-0 group-hover/team:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border transition-all duration-500 shadow-2xl relative z-10
                                                ${match.status === 'LIVE' ? 'bg-[#0f0f0f] border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-white/5 border-white/5 group-hover:bg-white/10 group-hover:-translate-y-1'}
                                            `}>
                                                <span className="text-xl font-black text-white/50 tracking-tighter">{match.homeCode}</span>
                                            </div>
                                            <h3 className="text-base font-bold text-white text-center leading-tight">{match.homeTeam}</h3>
                                        </div>

                                        {/* VS / Score */}
                                        <div className="flex flex-col items-center justify-center w-auto min-w-[120px] relative z-20">
                                            {match.status === 'LIVE' ? (
                                                <div className="flex flex-col items-center gap-3">
                                                     <div className="text-5xl font-mono font-black text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] whitespace-nowrap scale-y-110">
                                                        {match.score}
                                                     </div>
                                                     <span className="text-[10px] text-red-400 font-bold animate-pulse whitespace-nowrap tracking-wider flex items-center gap-1.5">
                                                        <Zap size={10} className="fill-red-400" />
                                                        دقيقة 75&apos;
                                                     </span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center gap-3">
                                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                                        <span className="text-xs font-black text-white/20">VS</span>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-2xl font-mono font-bold text-white tracking-widest group-hover:text-alsaha-green transition-colors duration-300">{match.time}</span>
                                                        <span className="text-[10px] text-white/20">مكة المكرمة</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Away Team */}
                                        <div className="flex flex-col items-center gap-5 flex-1 relative group/team">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 blur-[30px] rounded-full opacity-0 group-hover/team:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border transition-all duration-500 shadow-2xl relative z-10
                                                ${match.status === 'LIVE' ? 'bg-[#0f0f0f] border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-white/5 border-white/5 group-hover:bg-white/10 group-hover:-translate-y-1'}
                                            `}>
                                                <span className="text-xl font-black text-white/50 tracking-tighter">{match.awayCode}</span>
                                            </div>
                                            <h3 className="text-base font-bold text-white text-center leading-tight">{match.awayTeam}</h3>
                                        </div>

                                    </div>
                                    
                                    {/* Footer / Hover Hint (Optional: View Match) */}
                                    <div className={`absolute bottom-6 inset-x-0 text-center transition-all duration-300 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                                         ${match.status === 'LIVE' ? 'text-red-500' : 'text-alsaha-green'}
                                    `}>
                                        <span className="text-[10px] font-bold tracking-widest uppercase">
                                            {match.status === 'LIVE' ? 'شاهد البث المباشر' : 'تفعيل التنبيه'}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))
            )}
        </div>
        
        {/* Mobile View All */}
        <div className="mt-16 text-center md:hidden">
            <Link href="/matches">
                <Button variant="secondary" className="w-full py-5 border-white/10 bg-white/5 text-white/60 font-bold rounded-2xl">
                    عرض الجدول الكامل
                </Button>
            </Link>
        </div>

       </div>
    </section>
  );
}
