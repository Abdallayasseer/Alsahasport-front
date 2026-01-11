"use client";

import { useState, Suspense } from "react";
import VideoPlayer from "@/components/live/VideoPlayer";
import LiveSidebar from "@/components/live/LiveSidebar";
import { Skeleton } from "@/components/ui/Skeleton";

export default function LiveClientPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <main className="min-h-screen pt-24 pb-32 md:pb-8 px-4 container mx-auto relative overflow-hidden w-full max-w-[1600px]">
      
      {/* Layout Grid - using dvh for better mobile height */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100dvh-180px)] min-h-[500px]">
        
        {/* Main Player Area */}
        <div className="flex-1 flex flex-col gap-4">
             
             {/* Player Wrapper */}
             <div className="flex-1 relative bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl z-10">
                <VideoPlayer 
                    channelName="beIN Sports 1 Premium" 
                    onShowSidebar={() => setIsSidebarCollapsed(false)}
                />
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

<Suspense fallback={<Skeleton className="w-full h-full rounded-2xl" />}>
    <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
</Suspense>
        </div>

        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsSidebarCollapsed(true)} />
            <div className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-[320px] h-full bg-dark-base border-r border-white/5 transform transition-transform duration-300 z-[70] ${isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'}`}>
                <div className="h-full">
                    <Suspense fallback={<div className="w-full h-full bg-dark-surface/50 rounded-2xl animate-pulse" />}>
                        <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
                    </Suspense>
                </div>
            </div>
        </div>



      </div>
    </main>
  );
}
