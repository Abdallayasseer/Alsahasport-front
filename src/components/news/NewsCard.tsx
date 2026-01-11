"use client";

import { Clock, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";

interface NewsCardProps {
    id: number;
    title: string;
    category: string;
    time: string;
    image?: string;
    excerpt: string;
}

export default function NewsCard({ id, title, category, time, excerpt }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`} className="block h-full outline-none group">
        <article className="flex flex-col h-full bg-white/4 border border-white/5 rounded-2xl overflow-hidden hover:bg-white/5 hover:border-alsaha-green/20 transition-all duration-300">
            {/* Image Area */}
            <div className="relative aspect-video bg-neutral-800 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 {/* Placeholder for now */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556816214-6d9b35b6c367?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500 ease-out" />
                 
                 <div className="absolute top-3 right-3 z-20">
                     <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                         {category}
                     </span>
                 </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                 <div className="flex items-center gap-2 text-[10px] text-text-secondary mb-3">
                     <span className="flex items-center gap-1">
                         <Clock size={10} />
                         {time}
                     </span>
                 </div>

                 <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-alsaha-green transition-colors line-clamp-2">
                     {title}
                 </h3>

                 <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">
                     {excerpt}
                 </p>

                 {/* Footer Actions */}
                 <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                     <div className="flex items-center gap-3">
                         <button className="text-text-secondary hover:text-white transition-colors flex items-center gap-1 text-[10px]">
                             <MessageSquare size={12} />
                             <span>24</span>
                         </button>
                     </div>
                     <button className="text-text-secondary hover:text-alsaha-green transition-colors">
                         <Share2 size={14} />
                     </button>
                 </div>
            </div>
        </article>
    </Link>
  );
}
