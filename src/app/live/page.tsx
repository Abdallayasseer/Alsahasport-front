"use client";

import Link from "next/link";
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
    <main className="min-h-screen pt-28 pb-20 px-4 container mx-auto relative overflow-hidden max-w-5xl">
      {/* Background Ambience (Subtle Arena Lights) */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-red-600/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-5xl font-black text-white">مباشر</h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-[10px] font-bold tracking-wider">LIVE NOW</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {liveMatches.map((match, idx) => (
            <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/4 border border-white/5 rounded-xl p-5 backdrop-blur-md hover:border-alsaha-green/20 transition-all hover:bg-white/5"
            >
                {/* League Badge - Subtle */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-text-secondary text-xs opacity-60">
                    <Trophy size={12} />
                    <span>{match.league}</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Home Team */}
                    <div className="flex-1 text-center md:text-right order-1 w-full md:w-auto">
                        <h3 className="text-lg md:text-xl font-bold text-white">{match.home}</h3>
                    </div>

                    {/* Score Board - Compact */}
                    <div className="order-2 flex flex-col items-center min-w-[100px]">
                        <div className="text-3xl md:text-4xl font-black tracking-widest text-white mb-1 font-mono">
                            {match.score}
                        </div>
                        <div className="flex items-center gap-1 text-alsaha-green font-bold text-[10px] bg-alsaha-green/5 px-2 py-0.5 rounded-full">
                            <Clock size={10} />
                            <span>{match.minute}</span>
                        </div>
                    </div>

                    {/* Away Team */}
                    <div className="flex-1 text-center md:text-left order-3 w-full md:w-auto">
                        <h3 className="text-lg md:text-xl font-bold text-white">{match.away}</h3>
                    </div>
                </div>
                
                {/* Quick Action - Clean & Instant */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-xl backdrop-blur-[2px] z-10">
                     <Link href="/subscription">
                        <button className="px-6 py-2 bg-alsaha-green text-white text-sm font-bold rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
                            مشاهدة الآن
                        </button>
                     </Link>
                </div>
            </motion.div>
        ))}
      </div>
    </main>
  );
}
