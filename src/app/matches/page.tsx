"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Trophy } from "lucide-react";
import DateStrip from "@/components/matches/DateStrip";
import MatchCard, { MatchProps } from "@/components/matches/MatchCard";

// Helper to generate dates
const generateDates = () => {
    const dates = [];
    const today = new Date();
    // Generate 2 days before and 4 days after
    for (let i = -2; i <= 4; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        
        const dayNames = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        let dayLabel = dayNames[d.getDay()];
        
        if (i === 0) dayLabel = "اليوم";
        if (i === 1) dayLabel = "غداً";
        if (i === -1) dayLabel = "أمس";

        dates.push({
            day: dayLabel,
            date: d.getDate().toString().padStart(2, '0'),
            fullDate: d.toISOString().split('T')[0]
        });
    }
    return dates;
};

const DATES = generateDates();
const TODAY_DATE = DATES.find(d => d.day === "اليوم")?.fullDate || DATES[2].fullDate;

// Mock Data Generator for each date
const getMatchesForDate = (date: string) => {
    // Return empty for past dates just for demo
    if (new Date(date) < new Date(new Date().setHours(0,0,0,0))) return [];

    return [
        {
            league: "الدوري الإنجليزي",
            matches: [
                { id: 1, home: "Man United", away: "Wigan", time: "23:15", status: "UPCOMING", score: "-" },
                { id: 2, home: "Liverpool", away: "Arsenal", time: "20:00", status: "LIVE", score: "2 - 1" },
            ] as MatchProps[] // Type assertion needed for mock
        },
        {
            league: "الدوري الإسباني",
            matches: [
                 { id: 3, home: "Real Madrid", away: "Mallorca", time: "22:00", status: "UPCOMING", score: "-" },
            ] as MatchProps[]
        }
    ];
};

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "جدول المباريات",
  description: "تعرف على مواعيد مباريات اليوم، النتائج المباشرة، والقنوات الناقلة.",
};

export default function MatchesPage() {
  const [selectedDate, setSelectedDate] = useState(TODAY_DATE);
  
  // In a real app, useQuery here based on selectedDate
  const activeMatches = getMatchesForDate(selectedDate);

  return (
    <main className="min-h-screen pt-28 pb-32 px-4 container mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8 text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-4">
         <div>
            <h1 className="text-3xl font-black text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                <CalendarDays className="text-alsaha-green" size={32} />
                <span>جدول المباريات</span>
            </h1>
            <p className="text-text-secondary text-sm font-medium">تابع نتائج ومواعيد مباريات اليوم في جميع الدوريات العالمية</p>
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
             >
                {activeMatches.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-3xl border border-white/5">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                            <Trophy size={40} className="text-white/20" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">لا توجد مباريات</h3>
                        <p className="text-text-secondary">لا توجد مباريات مجدولة لهذا اليوم.</p>
                    </div>
                ) : (
                    activeMatches.map((leagueGroup, idx) => (
                        <div key={idx} className="bg-dark-surface/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl">
                            {/* League Header */}
                            <div className="bg-white/5 px-6 py-4 flex items-center gap-3 border-b border-white/5">
                                <div className="w-1.5 h-6 bg-alsaha-green rounded-full shadow-[0_0_10px_#72BF44]" />
                                <h2 className="font-bold text-white text-lg">{leagueGroup.league}</h2>
                            </div>
                            
                            {/* Matches */}
                            <div className="divide-y divide-white/5">
                                {leagueGroup.matches.map((match, mIdx) => (
                                    <MatchCard key={mIdx} match={match} />
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
