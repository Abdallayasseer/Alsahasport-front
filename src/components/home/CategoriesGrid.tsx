"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Film, Trophy, Tv, Baby, Gamepad2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    id: "sports",
    title: "الرياضة العالمية",
    description: "أقوى البطولات والدوريات في بث حي ومباشر بأعلى جودة.",
    icon: Trophy,
    colSpan: "col-span-1 md:col-span-2",
    bgPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-alsaha-green/20 via-transparent to-transparent opacity-40",
    href: "/live",
  },
  {
    id: "movies",
    title: "أحدث الأفلام",
    description: "مكتبة ضخمة من أحدث أفلام السينما العالمية والعربية.",
    icon: Film,
    colSpan: "col-span-1",
    bgPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-30",
    href: "/movies",
  },
  {
    id: "series",
    title: "المسلسلات",
    description: "مسلسلات حصرية وإنتاجات أصلية متجددة يومياً.",
    icon: Tv,
    colSpan: "col-span-1",
    bgPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-30",
    href: "/series",
  },
  {
    id: "kids",
    title: "أطفال وعائلة",
    description: "محتوى آمن وترفيهي يناسب جميع أفراد العائلة.",
    icon: Baby,
    colSpan: "col-span-1 md:col-span-2",
    bgPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent opacity-30",
    href: "/kids",
  },
  {
    id: "games",
    title: "الرياضات الإلكترونية",
    description: "بث مباشر لأهم بطولات الألعاب الإلكترونية حول العالم.",
    icon: Gamepad2,
    colSpan: "col-span-1 md:col-span-2", // Full width on mobile/tablet, partial on large
    bgPattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-30",
    href: "/esports",
  },
];

export default function CategoriesGrid() {
  return (
    <section className="py-24 relative bg-[#080808]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                اكتشف <span className="text-alsaha-green">عالمنا</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
                كل ما تبحث عنه من ترفيه ورياضة في مكان واحد، مصمم ليناسب ذوقك الرفيع.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {CATEGORIES.map((category) => (
            <BentoCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ category }: { category: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative border border-white/5 bg-white/5 overflow-hidden rounded-3xl",
        category.colSpan
      )}
      onMouseMove={handleMouseMove}
    >
      <Link href={category.href} className="flex flex-col justify-between h-full p-8 relative z-10">
          
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
              <category.icon size={24} />
          </div>

          {/* Text */}
          <div>
              <h3 className="text-2xl font-black text-white mb-2 group-hover:translate-x-[-5px] transition-transform duration-300">
                  {category.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {category.description}
              </p>
          </div>
          
          {/* Arrow */}
          <div className="absolute top-8 left-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
             <ChevronLeft size={16} className="text-white rtl-flip" />
          </div>

      </Link>

      {/* 🔮 MOUSE SPOTLIGHT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 🎨 COLOR AMBIENCE */}
      <div className={cn("absolute inset-0 pointer-events-none transition-opacity duration-500", category.bgPattern)} />
    </motion.div>
  );
}
