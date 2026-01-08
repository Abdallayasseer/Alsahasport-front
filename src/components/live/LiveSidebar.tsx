"use client";

import { motion } from "framer-motion";
import { Search, Radio, ChevronRight, ChevronLeft } from "lucide-react";
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
    <div 
        className={`relative h-full bg-dark-surface/50 border border-white/5 rounded-2xl flex flex-col backdrop-blur-md transition-all duration-300 overflow-hidden ${isCollapsed ? 'items-center' : ''}`}
    >
        {/* Header & Toggle */}
        <div className={`p-4 border-b border-white/5 flex items-center shrink-0 w-full ${isCollapsed ? 'justify-center py-6 flex-col gap-4' : 'justify-between'}`}>
            {!isCollapsed && (
                <div className="flex items-center gap-3">
                    <h3 className="text-base font-black text-white flex items-center gap-2">
                        <Radio size={18} className="text-alsaha-green animate-pulse" />
                        القنوات
                    </h3>
                </div>
            )}
            
            <button 
                onClick={toggleCollapse}
                className="lg:hidden p-1.5 rounded-lg border border-white/5 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center"
            >
                {/* Mobile (Expanded): X to close */}
                 <ChevronRight size={20} className="rtl-rotate-180" />
            </button>
        </div>

        {/* Search */}
        {!isCollapsed && (
            <div className="p-3 shrink-0 w-full">
                <div className="relative group">
                    <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-alsaha-green transition-colors" />
                    <input 
                        type="text" 
                        placeholder="ابحث عن قناة..." 
                        className="w-full bg-black/20 border border-white/5 rounded-xl py-2.5 pr-10 pl-4 text-sm text-white focus:outline-none focus:border-alsaha-green/30 focus:bg-black/40 transition-all placeholder:text-white/20"
                    />
                </div>
            </div>
        )}

        {/* List */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-2 w-full">
            {CHANNELS.map((channel) => {
                const isActive = channel.id === currentChannelId;
                return (
                    <Link key={channel.id} href={`/live?channel=${channel.id}`} className="block w-full">
                        <div
                            className={`
                                flex items-center transition-all rounded-xl relative group w-full
                                ${isCollapsed ? 'justify-center p-2 h-12 w-12 mx-auto' : 'gap-3 p-3'}
                                ${isActive 
                                    ? "bg-alsaha-green/10 text-alsaha-green border border-alsaha-green/20" 
                                    : "hover:bg-white/5 text-text-secondary hover:text-white border border-transparent hover:border-white/5"}
                            `}
                        >
                            <div className={`relative flex items-center justify-center flex-shrink-0 transition-transform ${isCollapsed ? '' : 'group-hover:scale-105'}`}>
                                <div className={`
                                    rounded-full flex items-center justify-center bg-white/5 font-black
                                    ${isCollapsed ? 'w-10 h-10 text-xs' : 'w-9 h-9 text-xs'}
                                    ${isActive ? 'bg-alsaha-green text-black' : ''}
                                `}>
                                    {channel.name.charAt(0)}
                                </div>
                                
                                {isActive && !isCollapsed && (
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-alsaha-green rounded-full border-2 border-dark-surface animate-pulse" />
                                )}
                            </div>
                            
                            {!isCollapsed && (
                                <div className="text-right truncate flex-1 min-w-0">
                                    <span className="text-sm font-bold block truncate">{channel.name}</span>
                                    {isActive && <span className="text-[10px] font-mono opacity-80 mt-0.5">LIVE • HD</span>}
                                </div>
                            )}
                            
                            {/* Tooltip for Collapsed State */}
                            {isCollapsed && (
                                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1.5 bg-dark-base border border-white/10 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl flex items-center gap-2">
                                    <span>{channel.name}</span>
                                    {isActive && <span className="w-1.5 h-1.5 bg-alsaha-green rounded-full animate-pulse" />}
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
