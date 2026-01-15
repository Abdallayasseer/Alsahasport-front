"use client";

import Link from "next/link";
import { Instagram, Send, ShieldCheck, Server, Globe, Lock } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* 🟢 ATMOSPHERE BLOBS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-alsaha-green/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#0A0A0A] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand & Mission (4 Columns) */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
                <h4 className="text-5xl font-black text-white tracking-tighter group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                    ALSAHA<span className="text-alsaha-green group-hover:drop-shadow-[0_0_20px_rgba(114,191,68,0.5)] transition-all">.SPORT</span>
                </h4>
            </Link>
            <p className="text-white/50 text-lg leading-relaxed max-w-sm font-medium">
              الوجهة البريميوم الأولى في الشرق الأوسط. قنوات رياضية عالمية، جودة 4K حقيقية، وثبات لا يضاهى.
            </p>
            
            {/* Socials */}
            <div className="flex gap-4">
              <SocialButton icon={Instagram} href="https://instagram.com" label="Instagram" />
              <SocialButton icon={Send} href="https://telegram.org" label="Telegram" />
            </div>

            {/* TRUST BADGES (Payment Logos Simulation) */}
            <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-white/30 font-bold mb-4 uppercase tracking-widest">طرق الدفع الآمنة</p>
                <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <PaymentIcon label="VISA" />
                    <PaymentIcon label="Mastercard" />
                    <PaymentIcon label="Paypal" />
                    <PaymentIcon label="Apple Pay" />
                </div>
            </div>
          </div>

          {/* Links Column 1 (2 Columns) */}
          <div className="md:col-span-2 md:col-start-6 pt-4">
            <h5 className="text-white font-bold mb-8 text-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-alsaha-green" />
                المنصة
            </h5>
            <ul className="space-y-4">
              <FooterLink href="/live">البث المباشر</FooterLink>
              <FooterLink href="/matches">جدول المباريات</FooterLink>
              <FooterLink href="/channels">قائمة القنوات</FooterLink>
              <FooterLink href="/news">أخبار الرياضة</FooterLink>
            </ul>
          </div>

          {/* Links Column 2 (2 Columns) */}
          <div className="md:col-span-2 pt-4">
            <h5 className="text-white font-bold mb-8 text-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-alsaha-green" />
                المساعدة
            </h5>
            <ul className="space-y-4">
              <FooterLink href="/subscription">باقات الاشتراك</FooterLink>
              <FooterLink href="/support">مركز الدعم</FooterLink>
              <FooterLink href="/faq">الأسئلة الشائعة</FooterLink>
              <FooterLink href="/terms">شروط الخدمة</FooterLink>
            </ul>
          </div>

          {/* System Status (4 Columns) */}
          <div className="md:col-span-3">
             <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors shadow-2xl">
                <h5 className="text-white font-bold mb-6 flex items-center gap-3">
                    <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-alsaha-green animate-ping opacity-20" />
                        <Server size={20} className="text-alsaha-green relative z-10" />
                    </div>
                    حالة الأنظمة
                </h5>
                <div className="space-y-4">
                    <StatusItem label="سيرفرات البث" />
                    <StatusItem label="نظام الدفع" />
                    <StatusItem label="بوابة المشتركين" />
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <p className="text-xs text-white/30 font-mono">SYSTEM_ID: #8821X</p>
                    <span className="flex items-center gap-2 text-[10px] font-bold text-alsaha-green bg-alsaha-green/5 px-2 py-1 rounded border border-alsaha-green/10">
                        <span className="w-1 h-1 rounded-full bg-alsaha-green animate-pulse" />
                        OPERATIONAL
                    </span>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 font-medium text-sm">© {new Date().getFullYear()} الساحة سبورت. جميع الحقوق محفوظة.</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <Globe size={14} className="text-white/50" />
                <span className="text-xs text-white/50 font-bold">العربية (IQ)</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <ShieldCheck size={14} className="text-white/50" />
                <span className="text-xs text-white/50 font-bold">SSL Secured 256-bit</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <Lock size={14} className="text-white/50" />
                <span className="text-xs text-white/50 font-bold">Privacy Protected</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-white/40 hover:text-white hover:translate-x-[-5px] transition-all duration-300 block font-medium group flex items-center gap-2">
                <span className="w-0 h-px bg-alsaha-green group-hover:w-3 transition-all duration-300" />
                {children}
            </Link>
        </li>
    )
}

function SocialButton({ icon: Icon, href, label }: { icon: React.ElementType, href: string, label: string }) {
    return (
        <Link 
            href={href} 
            target="_blank"
            aria-label={label}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all border border-white/5 group"
        >
            <Icon size={20} className="group-hover:scale-110 transition-transform" />
        </Link>
    )
}

function StatusItem({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-between text-sm group cursor-default">
            <span className="text-white/40 group-hover:text-white/60 transition-colors">{label}</span>
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-alsaha-green opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">100%</span>
                <span className="w-2 h-2 rounded-full bg-alsaha-green shadow-[0_0_8px_rgba(114,191,68,0.5)] animate-pulse" />
            </div>
        </div>
    )
}

function PaymentIcon({ label }: { label: string }) {
    return (
        <div className="h-8 px-3 rounded bg-white text-black font-black text-[10px] flex items-center justify-center tracking-tighter">
            {label}
        </div>
    )
}
