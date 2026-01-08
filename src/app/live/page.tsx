"use client";

import { motion } from "framer-motion";
import { Clock, Trophy } from "lucide-react";

// Mock Live Matches
const liveMatches = [
  { id: 1, home: "Real Madrid", away: "Barcelona", league: "La Liga", time: "LIVE", score: "2 - 1", minute: "78'" },
  { id: 2, home: "Liverpool", away: "Man City", league: "Premier League", time: "LIVE", score: "0 - 0", minute: "12'" },
  { id: 3, home: "Al Hilal", away: "Al Nassr", league: "SPL", time: "LIVE", score: "1 - 1", minute: "45+2'" },
];

export default function LivePage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 container mx-auto relative overflow-hidden">
      {/* Background Ambience (Arena Lights) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="flex items-center gap-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-white">مباشر</h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-xs font-bold tracking-wider">LIVE NOW</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {liveMatches.map((match, idx) => (
            <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-alsaha-green/30 transition-all hover:bg-white/10"
            >
                {/* League Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 text-text-secondary text-sm">
                    <Trophy size={14} />
                    <span>{match.league}</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                    {/* Home Team */}
                    <div className="flex-1 text-center md:text-right order-1">
                        <h3 className="text-2xl font-bold text-white">{match.home}</h3>
                    </div>

                    {/* Score Board */}
                    <div className="order-2 flex flex-col items-center min-w-[140px]">
                        <div className="text-4xl md:text-5xl font-black tracking-wider text-white mb-2 font-mono">
                            {match.score}
                        </div>
                        <div className="flex items-center gap-1 text-alsaha-green font-bold text-sm bg-alsaha-green/10 px-3 py-1 rounded-full animate-pulse">
                            <Clock size={12} />
                            <span>{match.minute}</span>
                        </div>
                    </div>

                    {/* Away Team */}
                    <div className="flex-1 text-center md:text-left order-3">
                        <h3 className="text-2xl font-bold text-white">{match.away}</h3>
                    </div>
                </div>
                
                {/* Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-3xl backdrop-blur-sm z-10">
                     <button className="px-8 py-3 bg-alsaha-green text-white font-bold rounded-full shadow-[0_0_20px_rgba(114,191,68,0.4)] hover:scale-105 transition-transform">
                        مشاهدة الآن
                     </button>
                </div>
            </motion.div>
        ))}
      </div>
    </main>
  );
}
