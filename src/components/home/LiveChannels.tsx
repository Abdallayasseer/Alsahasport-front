"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const CHANNELS = [
  { id: 1, name: "beIN Sports 1", image: "/images/channels/bein1.png", category: "Sports" },
  { id: 2, name: "SSC 1", image: "/images/channels/ssc1.png", category: "Sports" },
  { id: 3, name: "MBC Action", image: "/images/channels/mbc.png", category: "Entertainment" },
  { id: 4, name: "OSN Movies", image: "/images/channels/osn.png", category: "Movies" },
  { id: 5, name: "Abu Dhabi Sports", image: "/images/channels/ad.png", category: "Sports" },
  { id: 6, name: "Al Kass One", image: "/images/channels/alkass.png", category: "Sports" },
];

export default function LiveChannels() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock scroll for now, or just simple horizontal scroll
  const scrollLeft = () => {
    if (containerRef.current) {
        containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
        containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
            <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
                    قنوات <span className="text-alsaha-green">مباشرة</span>
                </h2>
                <p className="text-text-secondary">أكثر القنوات مشاهدة الآن بجودة 4K</p>
            </div>
            
            <div className="flex gap-2">
                <button onClick={scrollRight} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5">
                    <ChevronRight size={24} />
                </button>
                <button onClick={scrollLeft} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5">
                    <ChevronLeft size={24} />
                </button>
            </div>
        </div>

        {/* Carousel */}
        <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory"
        >
            {CHANNELS.map((channel, idx) => (
                <motion.div 
                    key={channel.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="min-w-[280px] md:min-w-[320px] snap-start"
                >
                    <Link href={`/live?channel=${channel.id}`}>
                        <div className="group relative aspect-video rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/5">
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
                            
                            {/* Hover Play Button */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                <div className="w-16 h-16 rounded-full bg-alsaha-green/90 flex items-center justify-center shadow-[0_0_30px_rgba(114,191,68,0.5)]">
                                    <Play size={32} className="fill-black text-black ml-1" />
                                </div>
                            </div>
                            
                            {/* Live Badge */}
                            <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                LIVE
                            </div>

                            {/* Channel Info (Bottom) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <p className="text-alsaha-green text-xs font-bold mb-1 tracking-wider uppercase">{channel.category}</p>
                                <h3 className="text-xl font-bold text-white group-hover:text-alsaha-green transition-colors">{channel.name}</h3>
                            </div>

                            {/* Placeholder Image (Use a gradient or pattern if no real image) */}
                            <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                                {/* Use text fallback for now as we don't have images */}
                                <span className="text-white/10 font-black text-4xl uppercase">{channel.name.substring(0, 2)}</span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

        <div className="flex justify-center mt-8">
            <Link href="/channels">
                <button className="btn-secondary">
                    <span>عرض كل القنوات</span>
                </button>
            </Link>
        </div>

      </div>
    </section>
  );
}
