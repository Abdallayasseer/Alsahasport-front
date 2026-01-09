"use client";

import { useState, Suspense } from "react";
import VideoPlayer from "@/components/live/VideoPlayer";
import LiveSidebar from "@/components/live/LiveSidebar";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "بث مباشر",
  description: "شاهد قنواتك المفضلة الآن. بث حي ومباشر بدون تقطيع لجميع الدوريات العالمية.",
};

export default function LivePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <main className="min-h-screen pt-24 pb-32 md:pb-8 px-4 container mx-auto relative overflow-hidden w-full max-w-[1600px]">
      
      {/* Layout Grid - using dvh for better mobile height */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100dvh-180px)] min-h-[500px]">
        
        {/* Main Player Area */}
        <div className="flex-1 flex flex-col gap-4">
             
             {/* Player Wrapper */}
             <div className="flex-1 relative bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl z-10">
                <VideoPlayer channelName="beIN Sports 1 Premium" />
             </div>
             
             {/* Stream Info (Below Player) */}
             <div className="px-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div>
                     <h1 className="text-2xl font-black text-white mb-2 tracking-tight">Real Madrid <span className="text-white/30 mx-2">VS</span> Barcelona</h1>
                     <div className="flex items-center gap-3 text-sm font-medium">
                        <span className="text-alsaha-green">La Liga</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-text-secondary">Matchday 24</span>
                     </div>
                 </div>
                 
                 <div className="hidden md:flex items-center gap-3">
                     <button 
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                     >
                         <span className="w-2 h-2 rounded-full bg-alsaha-green animate-pulse" />
                         <span>القنوات المباشرة</span>
                     </button>
                 </div>
             </div>
        </div>

        {/* Sidebar (Desktop) */}
        <div 
            className={`
                hidden lg:block transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                ${isSidebarCollapsed ? 'w-0 opacity-0 pointer-events-none' : 'w-[320px] opacity-100'}
            `}
        >
             <Suspense fallback={<div className="w-full h-full bg-dark-surface/50 rounded-2xl animate-pulse" />}>
                <div className="h-full rounded-2xl overflow-hidden border border-white/5 bg-black/20">
                    <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
                </div>
             </Suspense>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsSidebarCollapsed(true)} />
            <div className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-[320px] h-full bg-dark-base border-r border-white/5 transform transition-transform duration-300 z-[70] ${isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'}`}>
                <div className="h-full">
                    <Suspense fallback={<div className="w-full h-full bg-dark-surface/50 rounded-2xl animate-pulse" />}>
                        <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
                    </Suspense>
                </div>
            </div>
        </div>

        {/* Mobile Toggle Button (Floating) */}
        <button 
            onClick={() => setIsSidebarCollapsed(false)}
            className={`
                lg:hidden fixed bottom-24 left-4 z-40 p-3.5 
                bg-alsaha-green text-black rounded-full shadow-[0_0_20px_rgba(114,191,68,0.4)]
                transition-all duration-300 transform
                ${!isSidebarCollapsed ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}
            `}
        >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </button>

      </div>
    </main>
  );
}
