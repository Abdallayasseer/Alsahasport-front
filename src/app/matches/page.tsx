"use client";

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
    <main className="min-h-screen pt-32 pb-24 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
         <CalendarDays className="text-alsaha-green" size={36} />
         جدول المباريات
      </h1>

      <div className="space-y-12">
        {schedule.map((dayGroup, groupIdx) => (
            <div key={groupIdx}>
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-white">{dayGroup.day}</h2>
                    <span className="text-text-secondary text-lg">{dayGroup.date}</span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                </div>

                <div className="space-y-4">
                    {dayGroup.matches.map((match, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-alsaha-green/20 hover:bg-white/10 transition-all"
                        >
                             <div className="flex items-center gap-6 w-1/3">
                                 <span className="text-white font-bold text-lg">{match.time}</span>
                                 <span className="text-xs text-text-secondary bg-white/5 px-2 py-1 rounded border border-white/5">{match.league}</span>
                             </div>

                             <div className="flex-1 flex justify-center items-center gap-8">
                                 <span className="text-white font-bold">{match.home}</span>
                                 <span className="text-text-secondary text-sm">VS</span>
                                 <span className="text-white font-bold">{match.away}</span>
                             </div>

                             <div className="w-1/3 flex justify-end">
                                 <button className="text-sm text-alsaha-green border border-alsaha-green/30 px-4 py-1.5 rounded-full hover:bg-alsaha-green hover:text-white transition-all">
                                     تذكير
                                 </button>
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
