"use client";

import dynamic from 'next/dynamic';
import HomeHero from "@/components/home/HomeHero";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import DeviceSection from "@/components/home/DeviceSection";
import CTASection from "@/components/home/CTASection";

// Lazy load heavy components
const LiveChannels = dynamic(() => import("@/components/home/LiveChannels"));
const UpcomingMatches = dynamic(() => import("@/components/home/UpcomingMatches"));
const SubscriptionFAQ = dynamic(() => import("@/components/subscription/SubscriptionFAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-dark-base text-white">
      {/* 1. Hero Section - Premium Entry Point */}
      <HomeHero />

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
