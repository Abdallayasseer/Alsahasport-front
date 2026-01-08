"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const schedule = [
  { day: "اليوم", date: "8 يناير", matches: [
      { time: "22:00", home: "Man Utd", away: "Arsenal", league: "FA Cup" },
      { time: "23:00", home: "Milan", away: "Inter", league: "Serie A" }
  ]},
  { day: "غداً", date: "9 يناير", matches: [
      { time: "18:30", home: "Bayern", away: "Dortmund", league: "Bundesliga" }
  ]}
];

export default function MatchesPage() {
  return (
    <main className="min-h-screen pt-28 pb-32 px-4 container mx-auto max-w-4xl">
      <div className="mb-10 text-center">
         <h1 className="text-3xl md:text-5xl font-black text-white mb-2 flex items-center justify-center gap-3">
             <CalendarDays className="text-alsaha-green" size={32} />
             جدول المباريات
         </h1>
         <p className="text-text-secondary text-sm">أهم مباريات الأسبوع بتوقيت مكة المكرمة</p>
      </div>

      <div className="space-y-8">
        {schedule.map((dayGroup, groupIdx) => (
            <div key={groupIdx}>
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xl font-bold text-white">{dayGroup.day}</h2>
                    <span className="text-text-secondary text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">{dayGroup.date}</span>
                    <div className="h-[1px] flex-grow bg-white/5" />
                </div>

                <div className="space-y-3">
                    {dayGroup.matches.map((match, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between p-4 bg-white/4 border border-white/5 rounded-xl hover:border-alsaha-green/20 hover:bg-white/5 transition-all group"
                        >
                             <div className="flex items-center gap-2 md:gap-4 shrink-0 w-[60px] md:w-auto justify-start">
                                 <span className="text-white font-bold text-sm md:text-base">{match.time}</span>
                                 <span className="text-[10px] text-text-secondary bg-white/5 px-2 py-0.5 rounded border border-white/5 hidden md:inline-block truncate max-w-[80px]">{match.league}</span>
                             </div>

                             <div className="flex-1 flex justify-center items-center gap-2 md:gap-8 px-2">
                                 <span className="text-white font-bold text-xs md:text-base w-[45%] text-left md:text-right truncate leading-tight">{match.home}</span>
                                 <span className="text-alsaha-green/50 text-[10px] md:text-xs shrink-0 font-mono">VS</span>
                                 <span className="text-white font-bold text-xs md:text-base w-[45%] text-right md:text-left truncate leading-tight">{match.away}</span>
                             </div>

                             <div className="shrink-0 w-auto flex justify-end">
                                 <Link href="/subscription">
                                     <button className="text-[10px] md:text-xs text-alsaha-green border border-alsaha-green/20 px-2 md:px-3 py-1 md:py-1.5 rounded-full hover:bg-alsaha-green hover:text-white transition-all opacity-80 md:opacity-60 group-hover:opacity-100 flex items-center gap-1 cursor-pointer whitespace-nowrap">
                                         <span>تذكير</span>
                                     </button>
                                 </Link>
                             </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </main>
  );
}
