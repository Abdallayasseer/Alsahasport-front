"use client";

import LiveSidebar from "@/components/live/LiveSidebar";
import LiveFeed from "@/components/live/LiveFeed";
import { Suspense } from "react";

export default function LiveClientPage() {
  return (
    <main className="min-h-screen bg-[#050505] w-full flex flex-col lg:flex-row relative pt-20 lg:pt-24">
      
      {/* 🔮 Background Atmosphere */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-alsaha-green/5 blur-[150px] rounded-full pointer-events-none z-0 opacity-20" />

      {/* 🧭 NAVIGATION SIDEBAR (Sticky on Desktop, Scroll on Mobile) */}
      <div className="shrink-0 z-30">
          <Suspense fallback={<div className="w-64 h-screen bg-black/50" />}>
            <LiveSidebar />
          </Suspense>
      </div>

      {/* 📺 MAIN FEED (Grid) */}
      <div className="flex-1 relative z-10">
          <LiveFeed />
      </div>

    </main>
  );
}
