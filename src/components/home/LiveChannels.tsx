"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

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
    if (containerRef.current) containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-alsaha-green rounded-full" />
                    قنوات <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">البث المباشر</span>
                </h2>
            </div>
            {/* View All Link (Desktop) */}
            <Link href="/channels" className="hidden md:flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors">
                عرض الكل
                <ChevronLeft size={16} />
            </Link>
        </div>

        {/* Carousel Container - The "Strip" */}
        <div className="relative group/carousel">
            
            {/* Navigation Button: LEFT */}
            <button 
                onClick={scrollRight} // RTL: Right arrow moves content right (scrolls left visually?) Wait. scrollBy left positive moves right. In RTL, scrolling "right" means showing content hidden on the left? No.
                // Standard: Click Right Arrow -> Scroll Content to Right (show items on right). Content moves Left. scrollBy left > 0.
                // RTL: Content starts at Right. Click Left Arrow -> Scroll to Left (show items on left).
                // Let's stick to logical directions. Arrow pointing LEFT should scroll so we see MORE LEFT content.
                // In RTL, "Next" items are to the LEFT. So LEFT arrow is NEXT.
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-full bg-black/50 backdrop-blur-sm border-r border-white/5 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hidden md:flex hover:bg-black/80 text-white cursor-pointer"
            >
                <ChevronLeft size={40} />
            </button>

            {/* Navigation Button: RIGHT (Previous in RTL) */}
            <button 
                onClick={scrollLeft}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-full bg-black/50 backdrop-blur-sm border-l border-white/5 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hidden md:flex hover:bg-black/80 text-white cursor-pointer"
            >
                <ChevronRight size={40} />
            </button>

            {/* The Scrollable Strip */}
            <div 
                ref={containerRef}
                className="flex gap-4 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 scroll-smooth"
            >
                {loading ? (
                    Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className="min-w-[260px] md:min-w-[320px] snap-center">
                            <div className="aspect-video rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col justify-end relative overflow-hidden animate-pulse">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-[shimmer_2s_infinite]" />
                            </div>
                        </div>
                    ))
                ) : (
                    CHANNELS.map((channel) => (
                        <div 
                            key={channel.id}
                            className="min-w-[260px] md:min-w-[320px] snap-center flex-shrink-0 transition-transform duration-500 ease-out"
                        >
                            <Link href={`/live?channel=${channel.id}`} className="block h-full">
                                <div className="group relative aspect-video rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 md:hover:border-alsaha-green/50 md:transition-all md:duration-500">
                                    
                                    {/* Image */}
                                    <Image 
                                        src={channel.image} 
                                        alt={channel.name}
                                        fill
                                        sizes="(max-width: 768px) 70vw, 320px"
                                        className="object-cover transition-transform duration-700 md:group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 md:group-hover:opacity-60 transition-opacity" />

                                    {/* Play Icon (Dynamic Fade) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-500 scale-50 md:group-hover:scale-100">
                                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                            <Play className="fill-white text-white ml-1" size={24} />
                                        </div>
                                    </div>

                                    {/* Text Info */}
                                    <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-[10px] font-bold text-alsaha-green mb-1 opacity-0 md:group-hover:opacity-100 transition-opacity uppercase tracking-wider">{channel.category}</p>
                                        <h3 className="text-xl font-bold text-white leading-none">{channel.name}</h3>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>

      </div>
    </section>
  );
}
