"use client";

import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Removed for Mobile Optimization
import Link from "next/link";
import { Zap, X } from "lucide-react";

export default function MobileFloatingCTA() {
  // Mobile Stone Mode: Static display, no scroll triggers, persistence logic only
  const [isDismissed, setIsDismissed] = useState(true); // Start dismissed until mounted/verified


  // Check dismissal state on mount
  useEffect(() => {
    const dismissedAt = localStorage.getItem("cta_dismissed_at");
    if (dismissedAt) {
      const isExpired = Date.now() - parseInt(dismissedAt) > 24 * 60 * 60 * 1000;
      if (isExpired) {
        localStorage.removeItem("cta_dismissed_at");
        if (isDismissed) setTimeout(() => setIsDismissed(false), 0);
      } 
    } else {
      setTimeout(() => setIsDismissed(false), 0);
    }
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    localStorage.setItem("cta_dismissed_at", Date.now().toString());
  };

  if (isDismissed) return null;

  if (isDismissed) return null;

  return (
    <div className="md:hidden fixed bottom-[110px] left-4 right-4 z-[90] pb-safe opacity-100 visible">
        <div className="relative group">
        {/* Dismiss Button */}
        <button
            onClick={handleDismiss}
            className="absolute -top-4 -right-2 z-50 bg-black/80 text-white/70 w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:bg-black hover:text-white transition-colors active:scale-90"
            aria-label="Close"
        >
            <X size={16} />
        </button>

        {/* Main CTA */}
        <Link href="/subscription" className="block w-full">
            <div className="
            w-full h-[44px] 
            bg-alsaha-green 
            rounded-full 
            shadow-lg shadow-alsaha-green/20
            flex items-center justify-between px-1.5
            active:scale-[0.98] transition-all
            ">
            {/* Icon Circle */}
            <div className="w-[34px] h-[34px] bg-black/10 rounded-full flex items-center justify-center shrink-0">
                <Zap size={18} className="text-black fill-black/20" />
            </div>

            {/* Text */}
            <span className="flex-1 text-center text-black font-black text-sm tracking-wide">
                ⚡ مشاهدة بدون تقطيع
            </span>

            {/* Price Pill */}
            <div className="bg-black/10 px-3 py-1 rounded-full h-[34px] flex items-center justify-center shrink-0">
                <span className="text-[11px] font-bold text-black">5000 د.ع</span>
            </div>
            </div>
        </Link>
        </div>
    </div>
  );
}
