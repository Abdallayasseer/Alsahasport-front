"use client";

import dynamic from 'next/dynamic';
import HomeHero from "@/components/home/HomeHero";

// Lazy load heavy components below the fold
const LiveChannels = dynamic(() => import("@/components/home/LiveChannels"));
const UpcomingMatches = dynamic(() => import("@/components/home/UpcomingMatches"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-dark-base text-white">
      <HomeHero />
      <LiveChannels />
      <UpcomingMatches />
      
      {/* Retain Footer */}
      <Footer />
    </main>
  );
}
