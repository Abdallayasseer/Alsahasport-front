"use client";

import { Monitor, Trophy, Zap } from "lucide-react";

export default function LiveTicker() {
  const newsItems = [
    { type: "LIVE", text: "ليفربول vs مانشستر سيتي (1-1) - دقيقة 75'", highlight: true },
    { type: "BREAKING", text: "رسمياً: موعد الكلاسيكو القادم يوم السبت 21:00 بتوقيت بغداد", highlight: false },
    { type: "RESULT", text: "برشلونة يفوز على أتلتيكو مدريد 2-0 في الليغا", highlight: false },
    { type: "TRENDING", text: "أكثر من 50,000 مشاهد يتابعون البث الآن", highlight: false },
  ];

  return (
    <div className="w-full bg-[#020202] border-b border-white/5 h-10 flex items-center overflow-hidden relative z-20 shadow-lg">
      
      {/* Label: The "Breaking" Badge */}
      <div className="h-full bg-red-600 px-5 flex items-center justify-center relative z-20 shrink-0 shadow-[0_0_25px_rgba(220,38,38,0.5)]">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
            <span className="font-black text-white text-[10px] md:text-xs tracking-wide">عاجل</span>
        </div>
        {/* Slant Effect - Tech Edge */}
        <div className="absolute right-auto left-0 top-0 bottom-0 w-4 bg-[#020202] skew-x-[20deg] -translate-x-1/2" />
      </div>

      {/* Ticker Content */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        {/* Scrolling Animation Container */}
        <div className="animate-ticker flex items-center gap-16 whitespace-nowrap px-4 w-max">
            {/* Duplicate content for seamless loop */}
            {[...newsItems, ...newsItems].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    {getIcon(item.type)}
                    <span className={`text-xs md:text-sm font-bold tracking-wide ${item.highlight ? 'text-alsaha-green drop-shadow-[0_0_8px_rgba(114,191,68,0.5)]' : 'text-white/70'}`}>
                        {item.text}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/10 mx-2" />
                </div>
            ))}
        </div>
        
        {/* Gradient Masks (Fade edges) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#020202] to-transparent z-10" />
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#020202] to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        /* RTL Flip for ticker direction - Move Right to Left (Native Arabic reading flow) */
        [dir="rtl"] .animate-ticker {
             animation-direction: reverse;
        }
        /* Pause on hover for readability */
        .animate-ticker:hover {
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

function getIcon(type: string) {
    switch (type) {
        case "LIVE": return <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]" />;
        case "BREAKING": return <Zap size={12} className="text-yellow-500 fill-yellow-500" />;
        case "RESULT": return <Trophy size={12} className="text-blue-500" />;
        default: return <Monitor size={12} className="text-white/20" />;
    }
}
