"use client";

import Link from "next/link";
import { Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-2xl font-bold text-white mb-4">الساحة سبورت</h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              وجهتك الأولى لمشاهدة المباريات والقنوات العالمية بجودة عالية وبدون تقطيع.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-4">روابط سريعة</h5>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/" className="hover:text-alsaha-green transition-colors cursor-pointer">الرئيسية</Link></li>
              <li><Link href="/subscription" className="hover:text-alsaha-green transition-colors cursor-pointer">الباقات</Link></li>
              <li><Link href="/how-it-works" className="hover:text-alsaha-green transition-colors cursor-pointer">كيف يعمل</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-4">الدعم والمساعدة</h5>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/support" className="hover:text-alsaha-green transition-colors cursor-pointer">اتصل بنا</Link></li>
              <li><Link href="/support" className="hover:text-alsaha-green transition-colors cursor-pointer">الأسئلة الشائعة</Link></li>
              <li><Link href="/support" className="hover:text-alsaha-green transition-colors cursor-pointer">شروط الخدمة</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h5 className="text-white font-bold mb-4">تابعنا</h5>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/alsahasports?igsh=OTU0cWFhYnExbDZu" target="_blank" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-alsaha-green hover:text-white transition-all cursor-pointer">
                <Instagram size={20} />
              </Link>
              <Link href="https://t.me/fareedsaad" target="_blank" aria-label="Telegram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-alsaha-green hover:text-white transition-all cursor-pointer">
                <Send size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-text-secondary text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} الساحة سبورت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
