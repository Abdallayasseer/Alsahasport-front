"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap, X } from "lucide-react";

export default function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true); // Start dismissed until mounted/verified
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check dismissal state on mount
  useEffect(() => {
    const dismissedAt = localStorage.getItem("cta_dismissed_at");
    if (dismissedAt) {
      const isExpired = Date.now() - parseInt(dismissedAt) > 24 * 60 * 60 * 1000;
      if (isExpired) {
        localStorage.removeItem("cta_dismissed_at");
        if (isDismissed) setTimeout(() => setIsDismissed(false), 0);
      } 
      // Else: already true (default), no update needed
    } else {
      setTimeout(() => setIsDismissed(false), 0);
    }
  }, [isDismissed]);

  // Triggers: Scroll > 40%, Inactivity, Click triggers
  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      // 1. Scroll Trigger (> 40% viewport height)
      // A more robust check might be document height, but viewport relative is good for "start browsing"
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.15) { // Lowered slightly to ensure it appears reasonably fast on long pages
         setIsVisible(true);
      }
    };

    const resetInactivityTimer = () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (!isVisible) {
          inactivityTimerRef.current = setTimeout(() => {
            setIsVisible(true);
          }, 6000); // 6 seconds inactivity
      }
    };

    // 3. Click Trigger (Global listener for elements with specific data attribute)
    const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-trigger-cta="true"]')) {
            setIsVisible(true);
        }
        resetInactivityTimer();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", resetInactivityTimer);
    window.addEventListener("touchstart", resetInactivityTimer);
    window.addEventListener("click", handleClick);

    // Initial timer start
    resetInactivityTimer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", resetInactivityTimer);
      window.removeEventListener("touchstart", resetInactivityTimer);
      window.removeEventListener("click", handleClick);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [isDismissed, isVisible]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("cta_dismissed_at", Date.now().toString());
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden fixed bottom-[100px] left-4 right-4 z-50 pb-safe"
        >
          <div className="relative group">
            {/* Dismiss Button */}
            <button
                onClick={handleDismiss}
                className="absolute -top-3 -right-3 z-50 bg-black/80 text-white/70 p-2 rounded-full border border-white/10 hover:bg-black hover:text-white transition-colors"
                aria-label="Close"
            >
                <X size={14} />
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
