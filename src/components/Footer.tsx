"use client";

import Link from "next/link";
import { Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-surface py-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-alsaha-green/50 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="inline-block group">
                <h4 className="text-3xl font-black text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
                    ALSAHA<span className="text-alsaha-green group-hover:drop-shadow-[0_0_15px_rgba(114,191,68,0.5)] transition-all">.SPORT</span>
                </h4>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              وجهتك الأولى لمشاهدة المباريات والقنوات العالمية بجودة عالية وبدون تقطيع. استمتع بتجربة مشاهدة لا مثيل لها.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-6 text-lg">روابط سريعة</h5>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="/" className="hover:text-alsaha-green hover:pl-2 transition-all duration-300 block">الرئيسية</Link></li>
              <li><Link href="/subscription" className="hover:text-alsaha-green hover:pl-2 transition-all duration-300 block">الباقات والاشتراك</Link></li>
              <li><Link href="/how-it-works" className="hover:text-alsaha-green hover:pl-2 transition-all duration-300 block">كيف يعمل</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-6 text-lg">الدعم والمساعدة</h5>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="/support" className="hover:text-alsaha-green hover:pl-2 transition-all duration-300 block">اتصل بنا</Link></li>
              <li><Link href="/support" className="hover:text-alsaha-green hover:pl-2 transition-all duration-300 block">الأسئلة الشائعة</Link></li>
              <li><Link href="/support" className="hover:text-alsaha-green hover:pl-2 transition-all duration-300 block">شروط الخدمة</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-6 text-lg">تابعنا</h5>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/alsahasports?igsh=OTU0cWFhYnExbDZu" target="_blank" aria-label="Instagram" 
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg border border-white/5"
              >
                <Instagram size={22} />
              </Link>
              <Link href="https://t.me/fareedsaad" target="_blank" aria-label="Telegram" 
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#2AABEE] hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg border border-white/5"
              >
                <Send size={22} className="rtl-flip" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} الساحة سبورت. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
             <span className="w-2 h-2 rounded-full bg-alsaha-green md:animate-pulse" />
             <p className="text-xs text-alsaha-green font-medium">جميع الأنظمة تعمل بكفاءة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
