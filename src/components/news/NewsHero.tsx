"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft } from "lucide-react";

export default function NewsHero() {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden group cursor-pointer border border-white/5">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-neutral-900">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
             <div className="absolute inset-0 bg-[url('/images/placeholder-news.jpg')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col items-start gap-4">
             <div className="flex items-center gap-2">
                 <span className="bg-alsaha-green text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(114,191,68,0.4)]">
                     BREAKING
                 </span>
                 <span className="flex items-center gap-1 text-white/60 text-xs font-mono bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/5">
                     <Clock size={12} />
                     <span>10 MIN AGO</span>
                 </span>
             </div>

             <h1 className="text-2xl md:text-5xl font-black text-white leading-tight max-w-4xl drop-shadow-2xl">
                صفقة القرن: كيليان مبابي يصل مدريد في زيارة مفاجئة
             </h1>

             <p className="text-white/80 text-sm md:text-lg max-w-2xl line-clamp-2 md:line-clamp-none">
                 التفاصيل الكاملة والحيّة لوصول النجم الفرنسي إلى العاصمة الإسبانية، وتوقعات الإعلان الرسمي خلال الساعات القادمة.
             </p>

             <motion.div 
                whileHover={{ x: -10 }}
                className="mt-2 flex items-center gap-2 text-alsaha-green font-bold text-sm md:text-base border-b border-alsaha-green/30 pb-0.5"
             >
                 اقرأ التفاصيل
                 <ArrowLeft size={18} />
             </motion.div>
        </div>
    </div>
  );
}
