"use client";

import { Search, Radio, ChevronRight, Play } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CHANNELS = [
  { id: 1, name: "beIN Sports 1", active: true },
  { id: 2, name: "beIN Sports 2", active: false },
  { id: 3, name: "beIN Sports 3", active: false },
  { id: 4, name: "SSC 1 HD", active: false },
  { id: 5, name: "SSC 5 HD", active: false },
  { id: 6, name: "Abu Dhabi Sp 1", active: false },
  { id: 7, name: "Al Kass One", active: false },
  { id: 8, name: "MBC Action", active: false },
];

export default function LiveSidebar({ isCollapsed, toggleCollapse }: { isCollapsed: boolean, toggleCollapse: () => void }) {
  const searchParams = useSearchParams();
  const currentChannelId = Number(searchParams.get("channel")) || 1;

  return (
    <div className={`h-full flex flex-col ${isCollapsed ? 'items-center' : ''}`}>
        
        {/* Header & Toggle */}
        <div className={`p-5 border-b border-white/5 flex items-center shrink-0 w-full ${isCollapsed ? 'justify-center py-6 flex-col gap-4' : 'justify-between'}`}>
            {!isCollapsed && (
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                        <Radio size={20} className="text-alsaha-green animate-pulse" />
                        قائمة القنوات
                    </h3>
                </div>
            )}
            
            <button 
                onClick={toggleCollapse}
                className="lg:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/50 flex items-center justify-center hover:bg-white/10"
            >
                <ChevronRight size={20} className="rtl-rotate-180" />
            </button>
        </div>

        {/* Search */}
        {!isCollapsed && (
            <div className="p-4 shrink-0 w-full">
                <div className="relative group">
                    <Search size={18} className="absolute end-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-white/50 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="ابحث عن قناة..." 
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pe-12 ps-4 text-sm text-white focus:outline-none focus:border-alsaha-green/30 focus:bg-white/10 placeholder:text-white/20 transition-all"
                    />
                </div>
            </div>
        )}

        {/* List */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-2 w-full">
            {CHANNELS.map((channel) => {
                const isActive = channel.id === currentChannelId;
                return (
                    <Link key={channel.id} href={`/live?channel=${channel.id}`} className="block w-full group">
                        <div
                            className={`
                                flex items-center rounded-xl relative w-full transition-all duration-300
                                ${isCollapsed ? 'justify-center p-2 h-14 w-14 mx-auto' : 'gap-4 p-3.5'}
                                ${isActive 
                                    ? "bg-alsaha-green text-black shadow-[0_0_25px_rgba(114,191,68,0.2)] scale-[1.02]" 
                                    : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"}
                            `}
                        >
                            <div className="relative flex items-center justify-center flex-shrink-0">
                                <div className={`
                                    rounded-full flex items-center justify-center font-black transition-colors
                                    ${isCollapsed ? 'w-10 h-10 text-sm' : 'w-10 h-10 text-sm'}
                                    ${isActive 
                                        ? "bg-black/20 text-black border border-black/10" 
                                        : "bg-white/10 text-white/50 group-hover:bg-white/20 group-hover:text-white"}
                                `}>
                                    {isActive ? <Play size={14} className="fill-current" /> : channel.name.charAt(0)}
                                </div>
                                
                                {isActive && !isCollapsed && (
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#111] animate-pulse" />
                                )}
                            </div>
                            
                            {!isCollapsed && (
                                <div className="text-right truncate flex-1 min-w-0">
                                    <span className={`text-sm block truncate ${isActive ? 'font-black' : 'font-medium'}`}>{channel.name}</span>
                                    {isActive && <span className="text-[10px] font-bold opacity-70 mt-0.5 flex items-center gap-1">LIVE NOW</span>}
                                </div>
                            )}
                            
                            {/* Tooltip for Collapsed State */}
                            {isCollapsed && (
                                <div className="absolute right-full rtl:left-full rtl:right-auto top-1/2 -translate-y-1/2 mr-4 rtl:ml-4 rtl:mr-0 px-4 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl text-xs font-bold text-white opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-50 shadow-2xl flex items-center gap-2 transition-opacity">
                                    <span>{channel.name}</span>
                                    {isActive && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />}
                                </div>
                            )}
                        </div>
                    </Link>
                );
            })}
        </div>
    </div>
  );
}
