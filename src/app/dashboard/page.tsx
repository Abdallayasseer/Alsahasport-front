"use client";

import { motion } from "framer-motion";
import { User, CreditCard, Clock, Settings, LogOut, ChevronRight, Crown, ShieldCheck, Activity, Tv } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock Data
const MOCK_USER = {
    name: "Abdullah Al-User",
    email: "abdullah@example.com",
    plan: "VIP Global Pass",
    status: "Active",
    daysRemaining: 145,
    totalDays: 365,
    renewalDate: "2026-06-15",
    code: "XYZ-9988-7766"
};

const WATCH_HISTORY = [
    { id: 1, title: "Real Madrid vs Barcelona", type: "Match Replay", date: "Yesterday", image: "https://ui-avatars.com/api/?name=RM+vs+FCB&background=111&color=fff" },
    { id: 2, title: "Premier League Show", type: "Show", date: "2 days ago", image: "https://ui-avatars.com/api/?name=EPL&background=111&color=fff" },
    { id: 3, title: "beIN Sports 1 Premium", type: "Live Channel", date: "3 days ago", image: "https://ui-avatars.com/api/?name=beIN&background=111&color=fff" },
];

export default function DashboardPage() {
    const progressPercentage = (MOCK_USER.daysRemaining / MOCK_USER.totalDays) * 100;

    return (
        <main className="min-h-screen pt-24 pb-12 px-4 container mx-auto max-w-7xl">
            
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-2">لوحة التحكم</h1>
                    <p className="text-white/40">مرحباً بك، {MOCK_USER.name}</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold flex items-center gap-2 transition-colors">
                        <Settings size={16} />
                        <span>الإعدادات</span>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-500 text-sm font-bold flex items-center gap-2 transition-colors">
                        <LogOut size={16} />
                        <span>خروج</span>
                    </button>
                </div>
            </div>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {/* 1. Subscription Card (Hero) - Spans 2 cols */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 shadow-2xl group"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-alsaha-green/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-alsaha-green/15 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="text-alsaha-green text-sm font-bold mb-1 flex items-center gap-2">
                                    <Crown size={16} />
                                    <span>باقتك الحالية</span>
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-tight">{MOCK_USER.plan}</h2>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-alsaha-green/20 border border-alsaha-green/30 text-alsaha-green text-xs font-black uppercase tracking-wider shadow-[0_0_10px_rgba(114,191,68,0.2)]">
                                {MOCK_USER.status}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                            <div className="flex justify-between text-xs font-bold text-white/50 mb-2">
                                <span>صلاحية الاشتراك</span>
                                <span>باقي {MOCK_USER.daysRemaining} يوم</span>
                            </div>
                            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-alsaha-green/50 to-alsaha-green rounded-full shadow-[0_0_15px_rgba(114,191,68,0.3)] relative"
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex-1 py-3 px-4 bg-alsaha-green text-black font-bold rounded-xl hover:bg-[#6bbf3a] transition-colors shadow-lg shadow-alsaha-green/10">
                                تجديد الاشتراك
                            </button>
                            <button className="py-3 px-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                                ترقية الباقة
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Account Details */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-1 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-between"
                >
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/50 mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">تفاصيل الحساب</h3>
                        <p className="text-white/40 text-xs mb-4">بياناتك الشخصية آمنة ومشفرة</p>
                        
                        <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-[10px] text-white/30 block mb-0.5">البريد الإلكتروني</span>
                                <span className="text-sm text-white font-mono truncate block">{MOCK_USER.email}</span>
                            </div>
                            <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-[10px] text-white/30 block mb-0.5">كود التفعيل</span>
                                <span className="text-sm text-white font-mono tracking-widest truncate block">{MOCK_USER.code}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Quick Actions Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-1 lg:col-span-1 grid grid-rows-2 gap-4"
                >
                    <button className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center gap-3 hover:bg-white/5 transition-all group">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Activity size={20} />
                        </div>
                        <span className="text-white font-bold text-sm">حالة السيرفرات</span>
                    </button>
                    <button className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center gap-3 hover:bg-white/5 transition-all group">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CreditCard size={20} />
                        </div>
                        <span className="text-white font-bold text-sm">سجل الفواتير</span>
                    </button>
                </motion.div>

                {/* 4. Watch History */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-3 lg:col-span-4 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <Clock size={20} className="text-alsaha-green" />
                            المشاهدات الأخيرة
                        </h3>
                        <Link href="/history" className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1">
                            عرض الكل
                            <ChevronRight size={14} className="rtl-rotate-180" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {WATCH_HISTORY.map((item) => (
                            <div key={item.id} className="group relative bg-black/40 border border-white/5 rounded-xl p-3 flex items-center gap-4 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer">
                                <div className="w-16 h-16 rounded-lg bg-white/5 relative overflow-hidden flex-shrink-0">
                                    <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-wider text-alsaha-green font-bold mb-1 block">{item.type}</span>
                                    <h4 className="text-white font-bold text-sm mb-1 group-hover:text-alsaha-green transition-colors line-clamp-1">{item.title}</h4>
                                    <span className="text-white/30 text-xs">{item.date}</span>
                                </div>
                                <div className="absolute left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 rtl:-translate-x-2 rtl:group-hover:translate-x-0">
                                    <Tv size={18} className="text-white/50" />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
