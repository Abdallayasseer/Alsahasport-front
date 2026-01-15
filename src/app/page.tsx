"use client";

import dynamic from 'next/dynamic';
import HomeHero from "@/components/home/HomeHero";
import LiveTicker from "@/components/home/LiveTicker";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import DeviceSection from "@/components/home/DeviceSection";
import CTASection from "@/components/home/CTASection";

// Lazy load heavy components
const LiveChannels = dynamic(() => import("@/components/home/LiveChannels"));
const UpcomingMatches = dynamic(() => import("@/components/home/UpcomingMatches"));
const CategoriesGrid = dynamic(() => import("@/components/home/CategoriesGrid"));
const SubscriptionFAQ = dynamic(() => import("@/components/subscription/SubscriptionFAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#030303] text-white">
      {/* 🔮 THE SPOTLIGHT BASE (Ambient Glow) */}
      <div className="fixed top-0 inset-x-0 h-[1200px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#72BF44]/10 via-[#050505] to-[#050505] pointer-events-none z-0" />
      
      {/* 🌫️ NOISE TEXTURE (Fixed Overlay - Base64) */}
      <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAAAAAAAAAABMTExERERmZmZVNzZQAAAACHRSTlMAMwAozNjU0EulBugAAABMSURBVDjLY2AYBaNgFIyCUTAKRgEAZZAABW2QS2AAAAAASUVORK5CYII=')] opacity-[0.03] pointer-events-none z-[1]" />
      
      {/* 1. Hero Section - Premium Entry Point */}
      <HomeHero />

      {/* 🟢 PHASE 4: LIVE TICKER */}
      <div className="relative z-30 -mt-1">
        <LiveTicker />
      </div>

      {/* Content Sections - Vertical Rhythm & Visual Separation */}
      <div className="space-y-20 md:space-y-28 py-12 md:py-16">
        
        {/* 2. Why Us - Value Proposition */}
        <section className="border-t border-white/5">
          <FeaturesSection />
        </section>

        {/* 3. Live Content Teasers - Engagement Layer */}
        <div className="space-y-0 border-t border-white/5 bg-dark-surface/30">
           <LiveChannels />
           <UpcomingMatches />
           <CategoriesGrid />
        </div>

        {/* 4. Pricing - Conversion Point */}
        <section className="border-t border-white/5">
          <PricingSection />
        </section>

        {/* 5. Device Compatibility - Technical Confidence */}
        <section className="border-t border-white/5 bg-dark-surface/30">
          <DeviceSection />
        </section>

        {/* 6. FAQ - Trust Building */}
        <section className="border-t border-white/5">
          <SubscriptionFAQ limit={3} />
        </section>

        {/* 7. Final CTA - Last Conversion Opportunity */}
        <section className="border-t border-white/5 bg-dark-surface/30">
          <CTASection />
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
