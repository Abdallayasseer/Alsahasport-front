"use client";

import { useState, Suspense } from "react";
import VideoPlayer from "@/components/live/VideoPlayer";
import LiveSidebar from "@/components/live/LiveSidebar";
import { Skeleton } from "@/components/ui/Skeleton";
import { Maximize, Minimize } from "lucide-react";

"use client";

import { useState, Suspense } from "react";
import VideoPlayer from "@/components/live/VideoPlayer";
import LiveSidebar from "@/components/live/LiveSidebar";
import { Skeleton } from "@/components/ui/Skeleton";
import { Maximize, Minimize, Clock, Zap } from "lucide-react";

// Mock Up Next Data
const UP_NEXT = [
    { id: 1, title: "Post Match Analysis", time: "22:00", genre: "Studio", image: "https://ui-avatars.com/api/?name=Studio&background=111&color=fff" },
    { id: 2, title: "Premier League Highlights", time: "23:00", genre: "Highlights", image: "https://ui-avatars.com/api/?name=EPL&background=111&color=fff" },
    { id: 3, title: "Sports Center", time: "00:00", genre: "News", image: "https://ui-avatars.com/api/?name=SC&background=111&color=fff" },
];

export default function LiveClientPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCinemaMode, setIsCinemaMode] = useState(false);

  const toggleCinemaMode = () => {
      const newState = !isCinemaMode;
      setIsCinemaMode(newState);
      setIsSidebarCollapsed(newState);
  };

  return (
    <main className={`min-h-screen container mx-auto relative overflow-hidden w-full max-w-[1800px] transition-all duration-700 ${isCinemaMode ? 'pt-8 bg-black' : 'pt-24 pb-8 bg-[#020202]'}`}>
      
      {/* 🎭 THEATER ATMOSPHERE */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-alsaha-green/5 blur-[150px] rounded-full pointer-events-none z-0 transition-opacity duration-1000 ${isCinemaMode ? 'opacity-10' : 'opacity-40'}`} />

      {/* Control Bar (Cinema Mode Toggle) */}
      <div className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ${isCinemaMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button 
            onClick={toggleCinemaMode}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/5 flex items-center gap-2"
          >
              <Minimize size={14} />
              <span>Exit Cinema Mode</span>
          </button>
      </div>

      {/* Layout Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:h-[calc(100dvh-120px)] min-h-[600px]">
        
        {/* Main Player Area */}
        <div className={`flex-1 flex flex-col gap-6 relative group/player transition-all duration-700 ${isCinemaMode ? 'h-full justify-center' : ''}`}>
             
             {/* Player Wrapper (The Screen) */}
             <div className={`relative bg-black rounded-[32px] overflow-hidden border border-white/5 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] z-10 ring-1 ring-white/5 transition-all duration-700 ${isCinemaMode ? 'h-[85vh] w-full shadow-[0_0_100px_rgba(0,0,0,1)] ring-0 border-0 rounded-none md:rounded-[32px]' : 'flex-[3]'}`}>
                <VideoPlayer 
                    channelName="beIN Sports 1 Premium" 
                    onShowSidebar={() => setIsSidebarCollapsed(false)}
                />
             </div>
             
             {/* Info & Up Next (Hidden in Cinema Mode) */}
             <div className={`transition-all duration-500 overflow-hidden ${isCinemaMode ? 'h-0 opacity-0' : 'flex-[2] opacity-100'}`}>
                
                {/* Info Card */}
                <div className="px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tighter flex items-center gap-3">
                            <span className="drop-shadow-lg">Real Madrid</span>
                            <span className="text-white/20 text-lg">VS</span>
                            <span className="drop-shadow-lg">Barcelona</span>
                        </h1>
                        <div className="flex items-center gap-3 text-sm font-bold">
                            <span className="px-2 py-0.5 rounded bg-alsaha-green/10 text-alsaha-green border border-alsaha-green/20">La Liga</span>
                            <span className="flex items-center gap-1.5 text-red-500 animate-pulse bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                LIVE
                            </span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={toggleCinemaMode}
                        className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold flex items-center gap-3 transition-colors group"
                    >
                        <Maximize size={18} />
                        <span className="opacity-90 group-hover:opacity-100">Cinema Mode</span>
                    </button>
                </div>

                {/* Up Next Section */}
                <div>
                    <h3 className="text-white/50 font-bold text-sm mb-3 flex items-center gap-2">
                        <Clock size={14} />
                        Up Next
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {UP_NEXT.map((item) => (
                            <div key={item.id} className="group relative bg-[#0A0A0A] rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex-shrink-0" />
                                <div>
                                    <div className="text-xs text-alsaha-green font-mono mb-0.5">{item.time}</div>
                                    <h4 className="text-sm font-bold text-white group-hover:text-alsaha-green transition-colors">{item.title}</h4>
                                    <p className="text-[10px] text-white/30">{item.genre}</p>
                                </div>
                                <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Zap size={14} className="text-white/50" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

             </div>
        </div>

        {/* Sidebar */}
        <div 
            className={`hidden lg:block transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isSidebarCollapsed || isCinemaMode ? 'w-0 opacity-0 translate-x-10' : 'w-[360px] opacity-100 translate-x-0'}`}
        >
            <div className="h-full rounded-[32px] overflow-hidden bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/5 shadow-2xl">
                <Suspense fallback={<Skeleton className="w-full h-full" />}>
                    <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
                </Suspense>
            </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {!isSidebarCollapsed && !isCinemaMode && (
            <div className="fixed inset-0 z-[60] lg:hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSidebarCollapsed(true)} />
                <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-[320px] h-full bg-[#0A0A0A] border-r border-white/10 z-[70] shadow-2xl">
                    <div className="h-full">
                        <Suspense fallback={<div className="w-full h-full bg-white/5 animate-pulse" />}>
                            <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
                        </Suspense>
                    </div>
                </div>
            </div>
        )}

      </div>
    </main>
  );
}
