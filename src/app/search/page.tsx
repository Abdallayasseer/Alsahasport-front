"use client";

import Link from "next/link";
import { Search as SearchIcon, Tv, Calendar, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Mock Data for "Predictive" Search
const MOCK_RESULTS = [
    { id: 1, type: "channel", title: "beIN Sports 1 Premium", subtitle: "Live • 4K", image: "https://ui-avatars.com/api/?name=beIN&background=111&color=fff" },
    { id: 2, type: "match", title: "Real Madrid vs Barcelona", subtitle: "La Liga • Tonight 22:00", image: "https://ui-avatars.com/api/?name=RM+vs+FCB&background=111&color=fff" },
    { id: 3, type: "channel", title: "SSC News", subtitle: "News & Analysis", image: "https://ui-avatars.com/api/?name=SSC&background=111&color=fff" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Clear query on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setQuery("");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen pt-32 px-4 container mx-auto max-w-4xl flex flex-col items-center relative">
      
      {/* 🔮 THE ORACLE INPUT */}
      <div className={`w-full relative transition-all duration-500 ${query ? '-translate-y-10' : 'translate-y-0'}`}>
          <div className="relative group">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="ابحث..." 
                className="w-full bg-transparent border-none text-4xl md:text-6xl font-black text-white placeholder:text-white/10 focus:ring-0 text-center caret-alsaha-green p-4 transition-all"
                autoFocus
              />
              
              {/* Clear Button */}
              {query && (
                  <button 
                    onClick={() => setQuery("")}
                    className="absolute top-1/2 -translate-y-1/2 left-0 p-2 text-white/20 hover:text-white transition-colors"
                  >
                      <X size={24} />
                  </button>
              )}
          </div>

          {/* Underline Indicator */}
          <div className={`h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full mt-4 transition-all duration-500 ${isFocused ? 'via-alsaha-green/50 scale-x-110' : 'scale-x-75 opacity-50'}`} />
      </div>

      {/* 🚀 QUICK LINKS (Empty State) */}
      {!query && (
          <div className="mt-16 text-center animate-fade-up">
              <h3 className="text-white/30 text-xs font-bold mb-6 uppercase tracking-widest">مقترحات سريعة</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                  {["دوري أبطال أوروبا", "ليفربول", "ملخصات", "أفلام أكشن", "SSC 1"].map((tag) => (
                      <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/5 hover:border-white/20 transition-all text-sm font-bold backdrop-blur-sm"
                      >
                          {tag}
                      </button>
                  ))}
              </div>
          </div>
      )}

      {/* ⚡ PREDICTIVE RESULTS (Active State) */}
      {query && (
          <div className="w-full mt-8 animate-fade-in space-y-2">
              <div className="text-right mb-4 px-2">
                  <span className="text-white/30 text-xs font-bold uppercase tracking-wider">النتائج المقترحة</span>
              </div>
              
              {MOCK_RESULTS.map((result) => (
                  <Link href={result.type === 'match' ? '/live' : '/live'} key={result.id} className="block group">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 transition-all cursor-pointer">
                          
                          {/* Image */}
                          <div className="w-16 h-16 rounded-xl relative overflow-hidden bg-white/5 flex-shrink-0 group-hover:scale-105 transition-transform">
                              <Image src={result.image} alt={result.title} fill className="object-cover opacity-80" />
                          </div>
                          
                          {/* Text */}
                          <div className="flex-1 min-w-0 text-right">
                              <h4 className="text-lg font-bold text-white group-hover:text-alsaha-green transition-colors">{result.title}</h4>
                              <p className="text-white/40 text-sm flex items-center gap-2 justify-end">
                                  {result.subtitle}
                                  {result.type === 'channel' ? <Tv size={12} /> : <Calendar size={12} />}
                              </p>
                          </div>

                          {/* Arrow */}
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-alsaha-green transition-all">
                              <SearchIcon size={14} className="rtl:rotate-90" />
                          </div>
                      </div>
                  </Link>
              ))}

              <div className="text-center mt-8">
                  <button className="text-white/40 hover:text-white text-sm font-bold transition-colors border-b border-transparent hover:border-white/40 pb-0.5">
                      عرض كل النتائج لـ &quot;{query}&quot;
                  </button>
              </div>
          </div>
      )}

    </main>
  );
}
