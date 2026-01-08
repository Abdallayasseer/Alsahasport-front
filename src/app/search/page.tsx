"use client";

import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <main className="min-h-screen pt-40 px-6 container mx-auto flex flex-col items-center">
      <div className="w-full max-w-3xl relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-text-secondary">
              <SearchIcon size={24} />
          </div>
          <input 
            type="text" 
            placeholder="ابحث عن قناة، مباراة، فريق، أو خبر..." 
            className="w-full bg-white/5 border border-white/10 rounded-full pl-16 pr-8 py-6 text-white text-xl focus:outline-none focus:border-alsaha-green focus:bg-white/10 transition-all placeholder:text-white/20 shadow-2xl"
            autoFocus
          />
      </div>

      <div className="mt-12 text-center">
          <h3 className="text-text-secondary text-sm mb-4">الأكثر بحثاً</h3>
          <div className="flex flex-wrap gap-3 justify-center">
              {["Real Madrid", "SSC 1", "دوري أبطال أوروبا", "ملخص المباريات"].map((tag) => (
                  <button key={tag} className="px-5 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-alsaha-green hover:bg-alsaha-green/10 transition-all text-sm">
                      {tag}
                  </button>
              ))}
          </div>
      </div>
    </main>
  );
}
