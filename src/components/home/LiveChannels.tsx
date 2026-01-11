"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
        containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="hidden md:block absolute top-1/2 right-0 w-[500px] h-[500px] bg-alsaha-green/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div className="flex items-end justify-between mb-12">
            <div>
                <motion.div 
                    initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>بث مباشر الآن</span>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
                    قنوات <span className="text-transparent bg-clip-text bg-gradient-to-l from-alsaha-green to-white">التلفزيون</span>
                </h2>
                <p className="text-white/60 text-lg">أكثر القنوات مشاهدة الآن بجودة 4K</p>
            </div>
            
            <div className="hidden md:flex gap-3">
                <button onClick={scrollRight} className="p-4 rounded-2xl glass hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 group">
                    <ChevronRight size={24} className="group-hover:text-alsaha-green transition-colors" />
                </button>
                <button onClick={scrollLeft} className="p-4 rounded-2xl glass hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95 group">
                    <ChevronLeft size={24} className="group-hover:text-alsaha-green transition-colors" />
                </button>
            </div>
        </div>

        <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
        >
            {loading ? (
                Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="min-w-[280px] md:min-w-[340px] snap-center">
                        <div className="aspect-[16/10] rounded-3xl bg-white/5 border border-white/5 p-6 flex flex-col justify-end relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <Skeleton className="w-16 h-3 rounded-md mb-2 bg-white/10 relative z-10" />
                            <Skeleton className="w-32 h-6 rounded-md bg-white/10 relative z-10" />
                        </div>
                    </div>
                ))
            ) : (
                CHANNELS.map((channel, idx) => (
                    <motion.div 
                        key={channel.id}
                        initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={isMobile ? { duration: 0 } : { delay: idx * 0.1 }}
                        className="min-w-[280px] md:min-w-[340px] snap-center"
                    >
                        <Link href={`/live?channel=${channel.id}`}>
                            <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/5 md:transition-all md:duration-500 md:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] md:hover:-translate-y-2 md:hover:border-alsaha-green/30">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 md:group-hover:opacity-60 md:transition-all md:duration-500 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-alsaha-green/20 opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-500 z-10" />
                                
                                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 md:group-hover:left-[200%] md:transition-all md:duration-700 md:ease-in-out z-20" />
                                
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-500 transform md:translate-y-4 md:group-hover:translate-y-0">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg md:group-hover:scale-110 md:transition-transform md:duration-300">
                                        <Play size={32} className="fill-white text-white ml-1 drop-shadow-lg" />
                                    </div>
                                </div>
                                
                                <div className="absolute top-5 right-5 z-20 px-3 py-1.5 rounded-full bg-red-600/20 backdrop-blur-md border border-red-500/30 text-white text-[10px] font-black tracking-widest flex items-center gap-2 shadow-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                                    LIVE
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-alsaha-green/90 text-xs font-bold mb-2 tracking-widest uppercase">{channel.category}</p>
                                    <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-alsaha-green transition-all duration-300 drop-shadow-lg">
                                        {channel.name}
                                    </h3>
                                </div>

                                {/* Channel Image */}
                                <div className="absolute inset-0 bg-[#161616] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                   <div className="relative w-full h-full">
                                    <Image 
                                        src={channel.image} 
                                        alt={channel.name}
                                        fill
                                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 25vw, 20vw"
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                   </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))
            )}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
            <Link href="/channels">
                <Button variant="secondary" className="w-full">
                    <span>عرض كل القنوات</span>
                </Button>
            </Link>
        </div>

      </div>
    </section>
  );
}
