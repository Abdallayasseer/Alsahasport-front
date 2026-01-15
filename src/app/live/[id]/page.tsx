"use client";

import { useState, useEffect, use } from "react";
import { ChevronRight, Heart, Flag, Share2, Play, Radio, Signal, Info, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ChannelFallback from "@/components/channels/ChannelFallback";

// Mock Data for "Related Channels"
const RELATED_CHANNELS = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 100,
    name: `قناة ${i + 1}`,
    image: `https://ui-avatars.com/api/?name=CH${i}&background=111&color=fff`,
}));

// Premium Tips Rotation (Arabic)
const TIPS = [
    "نصيحة: استخدم سماعات الرأس لتجربة صوتية محيطية 360°.",
    "هل تعلم؟ يمكنك ضبط جودة الفيديو تلقائياً حسب سرعة الانترنت.",
    "نصيحة: إذا توقف البث، جرب تحديث الصفحة أو تغيير السيرفر.",
    "معلومة: هذا البث يدعم تقنية Dolby Atmos الصوتية.",
    "نصيحة: يمكنك إضافة هذه القناة للمفضلة للوصول السريع إليها لاحقاً.",
    "جاري تهيئة مشغل الفيديو بأعلى دقة متاحة...",
    "نصيحة: للحصول على أفضل استقرار، استخدم اتصال WiFi قوي."
];

export default function ChannelPlayerPage({ params }: { params: Promise<{ id: string }> }) {
    // 1. Unwrap params with React.use()
    const { id } = use(params);

    const [isFavorite, setIsFavorite] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const [relatedErrors, setRelatedErrors] = useState<{[key: number]: boolean}>({});
    const [tipIndex, setTipIndex] = useState(0);

    // Rotate Tips
    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex(prev => (prev + 1) % TIPS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleRelatedError = (itemId: number) => {
        setRelatedErrors(prev => ({ ...prev, [itemId]: true }));
    };

    // Mock Channel Data based on ID
    const channel = {
        id: id,
        name: "beIN SPORTS 1 Premium",
        currentProgram: "ريال مدريد ضد برشلونة - الدوري الإسباني",
        logo: "https://ui-avatars.com/api/?name=beIN&background=transparent&color=fff",
    };

    return (
        // 1. Force content down by 120px to clear ANY header size (Nuclear Fix)
        <main className="min-h-screen bg-[#050505] pt-[120px] pb-20 px-4 md:px-8" dir="rtl">
            
            {/* 2. Constrain width for large screens */}
            <div className="max-w-[1600px] mx-auto space-y-8 md:space-y-12">

                {/* 🔙 BACK NAVIGATION */}
                <div className="hidden md:flex">
                    <Link href="/live" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold group">
                        <div className="p-1 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/5">
                            {/* RTL Back Arrow: Pointing Right */}
                            <ChevronRight size={14} />
                        </div>
                        عودة للقنوات
                    </Link>
                </div>

                {/* 3. THE VIDEO PLAYER BOX (Relative Parent - The 'Prison') */}
                <div className="relative w-full aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] z-10 group">
                    
                    {/* Background Stadium Image (Visual Polish) */}
                    <div className="absolute inset-0 z-0">
                         <Image 
                            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
                            alt="Stadium Background"
                            fill
                            className="object-cover opacity-20 blur-sm scale-110 animate-pulse-slow"
                            priority
                            unoptimized
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
                    </div>

                    {/* 4. THE LOADING OVERLAY (Absolute Child - Locked Inside) */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 md:gap-8 bg-black/50 backdrop-blur-sm">
                        
                        {/* Pulse Ring */}
                        <div className="relative scale-75 md:scale-100">
                            <div className="absolute inset-0 bg-alsaha-green/20 blur-[60px] rounded-full animate-pulse" />
                            <div className="relative w-24 h-24 rounded-full border-4 border-white/5 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_0_40px_rgba(114,191,68,0.2)]">
                                <div className="w-16 h-16 border-t-4 border-r-4 border-alsaha-green rounded-full animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Signal size={24} className="text-white/80 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Text & Tips */}
                        <div className="text-center space-y-2 md:space-y-3 max-w-md px-4">
                            <h2 className="text-lg md:text-2xl font-black tracking-tight text-white animate-pulse font-mono">
                                جاري تأمين الاتصال بالسيرفر...
                            </h2>
                            <div className="h-6 overflow-hidden relative">
                                <p className="text-alsaha-green/80 text-xs md:text-sm font-bold flex items-center justify-center gap-2 animate-fade-in key-{tipIndex}">
                                    <Info size={12} className="md:w-3.5 md:h-3.5 shrink-0" />
                                    {TIPS[tipIndex]}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Overlay Info (Top Right in RTL - Inside Player) */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 flex items-center gap-2 md:gap-3">
                         <div className="flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-red-600/90 backdrop-blur-md text-white border border-red-500/20 shadow-lg select-none">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-[9px] md:text-[10px] font-black tracking-widest">مباشر الآن</span>
                        </div>
                        <div className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/5 text-[10px] md:text-xs font-bold text-white/80 select-none">
                            1080p
                        </div>
                         <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-alsaha-green/10 backdrop-blur-md border border-alsaha-green/20 text-xs font-bold text-alsaha-green select-none">
                            <Trophy size={10} />
                            رياضة
                        </div>
                    </div>

                </div>

                {/* INFO BAR SECTION (Premium Glass RTL) */}
                <div className="w-full mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-2 pb-8 border-b border-white/5">

                    {/* RIGHT SIDE: Channel Info */}
                    <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                        {/* 1. Channel Logo (Circle) */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#111] border border-white/10 p-3 shadow-lg flex items-center justify-center shrink-0 overflow-hidden relative group">
                            {!logoError ? (
                                <Image 
                                    src={channel.logo} 
                                    alt={channel.name} 
                                    width={64} 
                                    height={64} 
                                    className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                                    onError={() => setLogoError(true)}
                                    unoptimized
                                />
                            ) : (
                                <span className="text-xl font-black text-white/20 select-none">BE</span>
                            )}
                        </div>

                        {/* 2. Text Details */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight truncate">
                                    {channel.name}
                                </h1>
                                {/* Live Badge */}
                                <div className="px-2 py-0.5 bg-red-600/20 border border-red-500/30 rounded text-red-500 text-[10px] font-bold tracking-wider animate-pulse whitespace-nowrap">
                                    مباشر
                                </div>
                            </div>
                            
                            {/* Current Match / Description */}
                            <p className="text-white/40 text-sm md:text-base flex items-center gap-2 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#72BF44] shrink-0 animate-pulse"/>
                                <span className="truncate">جارٍ الآن: <span className="text-white/70">{channel.currentProgram}</span></span>
                            </p>
                        </div>
                    </div>

                    {/* LEFT SIDE: Actions */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        
                        <Button 
                            className={`flex-1 md:flex-none h-12 md:h-10 px-6 rounded-full border flex items-center justify-center gap-2 transition-all duration-300 group ${isFavorite ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#72BF44]/50'}`}
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : 'group-hover:text-red-500 transition-colors'}`} />
                            <span className="text-sm font-bold">المفضلة</span>
                        </Button>

                        <Button 
                            className="flex-1 md:flex-none h-12 md:h-10 px-6 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <Share2 className="w-4 h-4" />
                            <span className="text-sm font-bold">مشاركة</span>
                        </Button>

                        <Button 
                            className="h-12 md:h-10 w-12 md:w-10 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500 text-white/40 hover:text-red-500 flex items-center justify-center transition-all duration-300 shrink-0" 
                            title="إبلاغ عن مشكلة"
                        >
                            <Flag className="w-4 h-4" />
                        </Button>

                    </div>

                </div>

                {/* 6. RELATED CHANNELS (Arabic Title) */}
                <div className="mb-20">
                   <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                      <span className="w-2.5 h-2.5 bg-[#72BF44] rounded-full animate-pulse shadow-[0_0_10px_#72BF44]"/>
                      قنوات قد تعجبك
                   </h2>
                   
                   <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
                        {RELATED_CHANNELS.map((item) => (
                            <Link key={item.id} href={`/live/${item.id}`} className="min-w-[180px] md:min-w-0 group snap-start">
                                <div className="aspect-video rounded-xl md:rounded-2xl bg-[#111] border border-white/5 overflow-hidden relative mb-2 md:mb-3 transition-all duration-300 md:group-hover:border-alsaha-green/50 md:group-hover:shadow-[0_0_30px_rgba(114,191,68,0.1)] md:group-hover:-translate-y-1">
                                    {!relatedErrors[item.id] ? (
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={item.image} 
                                                alt={item.name} 
                                                fill 
                                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                                                onError={() => handleRelatedError(item.id)}
                                                unoptimized
                                            />
                                        </div>
                                    ) : (
                                        <ChannelFallback name={item.name} />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute top-2 left-2"> {/* Changed right to left for RTL Logic if needed, but in RTL 'right' is visual right. Wait, top-2 right-2 in RTL puts it on the left? No. Start/End does. Right is Right. Let's keep indicators consistent. */}
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity"> {/* Swapped left->right for Play icon in RTL? usually play is on right or center. */}
                                         <Play size={12} className="fill-white text-white" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-xs md:text-sm text-white/80 group-hover:text-white transition-colors px-1 truncate text-right">{item.name}</h4>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
