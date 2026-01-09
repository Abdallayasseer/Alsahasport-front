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
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Why Us? */}
      <FeaturesSection />

      {/* 3. Live Content Teasers */}
      <div className="space-y-0">
         <LiveChannels />
         <UpcomingMatches />
      </div>

      {/* 4. Pricing (The Killer Section) */}
      <PricingSection />

      {/* 5. Device Compatibility */}
      <DeviceSection />

      {/* 6. FAQ (Mini Version) */}
      <SubscriptionFAQ limit={3} />

      {/* 7. Final CTA */}
      <CTASection />
      
      {/* Retain Footer */}
      <Footer />
    </main>
  );
}
