"use client";

import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <main className="min-h-screen pt-40 px-6 container mx-auto flex flex-col items-center">
      <div className="w-full max-w-2xl relative">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
              <SearchIcon size={20} />
          </div>
          <input 
            type="text" 
            placeholder="ابحث عن قناة، مباراة، فريق، أو خبر..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl pr-14 pl-6 py-5 text-white text-lg focus:outline-none focus:border-alsaha-green/50 focus:bg-white/10 focus:shadow-[0_0_30px_rgba(114,191,68,0.1)] transition-all placeholder:text-white/20 dir-rtl text-right"
            autoFocus
          />
      </div>

      <div className="mt-10 text-center">
          <h3 className="text-text-secondary text-xs font-bold mb-4 uppercase tracking-widest opacity-60">الأكثر بحثاً</h3>
          <div className="flex flex-wrap gap-2 justify-center max-w-lg">
              {["Real Madrid", "SSC 1", "دوري أبطال أوروبا", "ملخص المباريات"].map((tag) => (
                  <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                  <button className="px-4 py-1.5 rounded-full border border-white/5 bg-white/4 text-text-secondary hover:text-white hover:border-alsaha-green/50 hover:bg-alsaha-green/10 transition-all text-sm font-medium cursor-pointer">
                      {tag}
                  </button>
                  </Link>
              ))}
          </div>
      </div>
    </main>
  );
}
