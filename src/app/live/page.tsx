"use client";

import { useState } from "react";
import Link from "next/link";
import VideoPlayer from "@/components/live/VideoPlayer";
import LiveSidebar from "@/components/live/LiveSidebar";

export default function LivePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <main className="min-h-screen pt-24 pb-32 md:pb-8 px-4 container mx-auto relative overflow-x-hidden w-full max-w-[1600px]">
      
      {/* Layout Grid - using dvh for better mobile height */}
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100dvh-180px)] min-h-[500px]">
        
        {/* Main Player Area */}
        <div className="flex-1 flex flex-col gap-4">
             {/* Mobile Sidebar Toggle (Above Video) */}
             <div className="lg:hidden flex justify-end w-full">
                <button 
                    onClick={() => setIsSidebarCollapsed(false)}
                    className={`p-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-alsaha-green hover:text-black transition-all ${!isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'} flex items-center gap-2`}
                >
                    <span className="text-sm font-bold">القنوات</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </button>
             </div>

             {/* Player Wrapper */}
             <div className="flex-1 relative bg-black/40 rounded-2xl overflow-hidden border border-white/5 group">
                <VideoPlayer channelName="beIN Sports 1 Premium" />
             </div>
             
             {/* Stream Info (Below Player) */}
             <div className="glass p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <div>
                     <h1 className="text-xl md:text-2xl font-bold text-white mb-1">Real Madrid vs Barcelona</h1>
                     <p className="text-text-secondary text-sm">La Liga • Matchday 24</p>
                 </div>
                 <div className="flex gap-3 w-full md:w-auto">
                     <Link href="/support" className="flex-1 md:flex-none">
                        <button className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold text-white transition-colors">
                            الإبلاغ عن مشكلة
                        </button>
                     </Link>
                     <Link href="/subscription" className="flex-1 md:flex-none">
                        <button className="w-full px-4 py-2 bg-alsaha-green text-black rounded-lg text-sm font-black hover:scale-105 transition-transform">
                            تجديد الاشتراك
                        </button>
                     </Link>
                 </div>
             </div>
        </div>

        {/* Sidebar (Desktop) */}
        <div 
            className="hidden lg:block flex-shrink-0 w-[320px]"
        >
             <LiveSidebar isCollapsed={false} toggleCollapse={() => {}} />
        </div>

        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsSidebarCollapsed(true)} />
            <div className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-[300px] h-full bg-dark-base transform transition-transform duration-300 z-[70] ${isSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'}`}>
                <div className="h-full p-2">
                    <LiveSidebar isCollapsed={false} toggleCollapse={() => setIsSidebarCollapsed(true)} />
                </div>
            </div>
        </div>

        {/* Mobile Toggle Button (Fixed) - Removed in favor of Video Overlay */}
        {!isSidebarCollapsed && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden user-select-none" onClick={() => setIsSidebarCollapsed(true)} />}

        {/* Mobile/Tablet Sidebar (Maybe handled differently or below) */}
        
      </div>

    </main>
  );
}
