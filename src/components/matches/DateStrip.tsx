"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface DateItem {
    date: string;
    day: string;
    fullDate: string; // YYYY-MM-DD
}

interface DateStripProps {
    dates: DateItem[];
    selectedDate: string;
    onSelectDate: (date: string) => void;
}

export default function DateStrip({ dates, selectedDate, onSelectDate }: DateStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to active date
  useEffect(() => {
    // Simple logic: Scroll to 0 if first, else could calculate pos
    // For now assume start
  }, [selectedDate]);

  return (
    <div className="relative mb-8">
        <div 
            ref={containerRef}
            className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 pt-2 px-2 mask-linear-fade"
        >
            {dates.map((item, idx) => {
                const isActive = item.fullDate === selectedDate;
                return (
                    <button
                        key={idx}
                        onClick={() => onSelectDate(item.fullDate)}
                        className={`
                            relative flex flex-col items-center justify-center min-w-[70px] h-[80px] rounded-2xl transition-all duration-300
                            ${isActive 
                                ? "bg-alsaha-green text-black shadow-[0_0_20px_rgba(114,191,68,0.4)] scale-105" 
                                : "bg-white/5 border border-white/5 text-text-secondary hover:bg-white/10 hover:border-white/10 hover:text-white"}
                        `}
                    >
                        <span className={`text-xs font-bold mb-1 ${isActive ? "text-black/70" : "text-white/40"}`}>{item.day}</span>
                        <span className={`text-xl md:text-3xl font-black ${isActive ? "text-black" : "text-white"}`}>{item.date}</span>
                        
                        {isActive && (
                            <motion.div 
                                layoutId="activeDate"
                                className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-alsaha-green shadow-[0_0_10px_#72BF44]"
                            />
                        )}
                    </button>
                );
            })}
        </div>
        
        {/* Fade Edges (Visual cue) */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-dark-base to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-dark-base to-transparent pointer-events-none" />
    </div>
  );
}
