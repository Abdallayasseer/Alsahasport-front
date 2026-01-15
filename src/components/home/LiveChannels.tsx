"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import Button from "@/components/ui/Button";

const CHANNELS = [
  { id: 1, name: "beIN Sports 1", image: "https://ui-avatars.com/api/?name=beIN+1&background=5a2d82&color=fff&size=256&font-size=0.35&length=2", category: "Sports" },
  { id: 2, name: "SSC 1", image: "https://ui-avatars.com/api/?name=SSC+1&background=FFD700&color=000&size=256&font-size=0.4", category: "Sports" },
  { id: 3, name: "MBC Action", image: "https://ui-avatars.com/api/?name=MBC+A&background=e3001b&color=fff&size=256&font-size=0.4", category: "Entertainment" },
  { id: 4, name: "OSN Movies", image: "https://ui-avatars.com/api/?name=OSN+M&background=000000&color=fff&size=256&font-size=0.4", category: "Movies" },
  { id: 5, name: "Abu Dhabi Sports", image: "https://ui-avatars.com/api/?name=AD+S&background=0284c7&color=fff&size=256&font-size=0.4", category: "Sports" },
  { id: 6, name: "Al Kass One", image: "https://ui-avatars.com/api/?name=Kass&background=b91c1c&color=fff&size=256&font-size=0.4", category: "Sports" },
];

export default function LiveChannels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">
      {/* 🌑 PHASE 4: LIVE CHANNELS */}
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold mb-4 opacity-100 md:opacity-0 md:animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-red-500 md:animate-pulse" />
                    <span>بث مباشر الآن</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
                    قنوات <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">التلفزيون</span>
                </h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-3">
                <button onClick={scrollRight} className="p-4 rounded-2xl glass hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 group border border-white/5">
                    <ChevronRight size={24} className="group-hover:text-alsaha-green transition-colors" />
                </button>
                <button onClick={scrollLeft} className="p-4 rounded-2xl glass hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 group border border-white/5">
                    <ChevronLeft size={24} className="group-hover:text-alsaha-green transition-colors" />
                </button>
            </div>
        </div>

        {/* Carousel Container - Snap X for Mobile */}
        <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0"
        >
            {loading ? (
                Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="min-w-[280px] md:min-w-[340px] snap-center">
                        <div className="aspect-video rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col justify-end relative overflow-hidden">
                            <Skeleton className="w-16 h-3 rounded-md mb-2 bg-white/10 relative z-10" />
                            <Skeleton className="w-32 h-6 rounded-md bg-white/10 relative z-10" />
                        </div>
                    </div>
                ))
            ) : (
                CHANNELS.map((channel) => (
                    <div 
                        key={channel.id}
                        className="min-w-[280px] md:min-w-[340px] snap-center flex-shrink-0"
                    >
                        <Link href={`/live?channel=${channel.id}`}>
                            <div className="group relative aspect-video rounded-xl overflow-hidden bg-[#111] border border-white/10 cursor-pointer md:transition-all md:duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] md:hover:border-alsaha-green/50">
                                
                                {/* Image Zoom Effect */}
                                <div className="absolute inset-0 md:group-hover:scale-110 md:transition-transform md:duration-700">
                                    <Image 
                                        src={channel.image} 
                                        alt={channel.name}
                                        fill
                                        sizes="(max-width: 768px) 80vw, 340px"
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                {/* Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                
                                {/* Live Badge (Desktop Only) */}
                                <div className="absolute top-4 right-4 hidden md:flex items-center gap-2 px-2 py-1 rounded bg-red-600/90 backdrop-blur text-white text-[10px] font-black tracking-widest uppercase shadow-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    LIVE
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <p className="text-alsaha-green text-xs font-bold mb-1 tracking-widest uppercase">{channel.category}</p>
                                    <h3 className="text-2xl font-black text-white group-hover:text-alsaha-green transition-colors duration-300">
                                        {channel.name}
                                    </h3>
                                </div>

                                {/* Play Icon Overlay (Center) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                        <Play className="fill-white text-white ml-1" size={24} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            )}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center md:hidden">
            <Link href="/channels" className="w-full">
                <Button variant="secondary" className="w-full py-4 bg-white/5 border border-white/10">
                    عرض كل القنوات
                </Button>
            </Link>
        </div>

      </div>
    </section>
  );
}
