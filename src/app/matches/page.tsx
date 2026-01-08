"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Trophy, Clock, Bell } from "lucide-react";
import DateStrip from "@/components/matches/DateStrip";
import Link from "next/link"; // Ensure Link is imported

// Mock Data
const DATES = [
    { day: "اليوم", date: "08", fullDate: "2024-01-08" },
    { day: "غداً", date: "09", fullDate: "2024-01-09" },
    { day: "الأربعاء", date: "10", fullDate: "2024-01-10" },
    { day: "الخميس", date: "11", fullDate: "2024-01-11" },
    { day: "الجمعة", date: "12", fullDate: "2024-01-12" },
];

// Define Match Interface
interface Match {
    id: number;
    home: string;
    away: string;
    time: string;
    status: 'LIVE' | 'UPCOMING' | 'FINISHED';
    score: string;
}

const MATCHES_DATA: Record<string, { league: string; matches: Match[] }[]> = {
    "2024-01-08": [
        {
            league: "الدوري الإنجليزي",
            matches: [
                { id: 1, home: "Man United", away: "Wigan", time: "23:15", status: "UPCOMING", score: "-" },
            ]
        },
        // ... (rest of data)
    ]
    // ...
};

// ... inside component ...
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="text-red-500 font-black text-xs animate-pulse">مباشر</span>
                                                    <span className="text-alsaha-green text-[10px] font-bold">45&apos;</span>
                                                </div>

export default function MatchesPage() {
  const [selectedDate, setSelectedDate] = useState(DATES[0].fullDate);
  
  const activeMatches = MATCHES_DATA[selectedDate] || [];

  return (
    <main className="min-h-screen pt-28 pb-32 px-4 container mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8 text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-4">
         <div>
            <h1 className="text-3xl font-black text-white mb-1 flex items-center justify-center md:justify-start gap-2">
                <CalendarDays className="text-alsaha-green" size={28} />
                جدول المباريات
            </h1>
            <p className="text-text-secondary text-xs md:text-sm">تابع نتائج ومواعيد مباريات اليوم</p>
         </div>
      </div>

      {/* Date Navigation */}
      <DateStrip 
        dates={DATES} 
        selectedDate={selectedDate} 
        onSelectDate={setSelectedDate} 
      />

      {/* Matches List */}
      <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
             <motion.div
                key={selectedDate}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
             >
                {activeMatches.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-2xl border border-white/5">
                        <Trophy size={48} className="text-white/10 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">لا توجد مباريات</h3>
                        <p className="text-text-secondary">لا توجد مباريات مجدولة لهذا اليوم.</p>
                    </div>
                ) : (
                    activeMatches.map((leagueGroup, idx) => (
                        <div key={idx} className="bg-dark-surface/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                            {/* League Header */}
                            <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                <div className="w-1 h-4 bg-alsaha-green rounded-full" />
                                <h2 className="font-bold text-white text-sm md:text-base">{leagueGroup.league}</h2>
                            </div>
                            
                            {/* Matches */}
                            <div className="divide-y divide-white/5">
                                {leagueGroup.matches.map((match, mIdx) => (
                                    <div key={mIdx} className="p-4 md:p-6 hover:bg-white/5 transition-colors flex items-center justify-between gap-4 group">
                                        
                                        {/* Status / Time (Right on RTL) */}
                                        <div className="w-16 md:w-24 text-center shrink-0">
                                            {match.status === 'LIVE' ? (
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="text-red-500 font-black text-xs animate-pulse">مباشر</span>
                                                    <span className="text-alsaha-green text-[10px] font-bold">45&apos;</span>
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
                                                    <span className="bg-dark-base border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold tracking-widest text-lg md:text-xl whitespace-nowrap">
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
                                                <Link href="/live"> {/* Navigate to live page if live */}
                                                    <button className="flex items-center gap-1 px-3 py-1.5 bg-alsaha-green/10 text-alsaha-green hover:bg-alsaha-green hover:text-black rounded-lg text-xs font-bold transition-all border border-alsaha-green/20">
                                                        <Trophy size={14} />
                                                        <span className="hidden md:inline">مشاهدة</span>
                                                    </button>
                                                </Link>
                                            ) : (
                                                <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-alsaha-green hover:border-alsaha-green transition-all">
                                                    <Bell size={14} />
                                                </button>
                                            )}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
             </motion.div>
          </AnimatePresence>
      </div>

    </main>
  );
}
