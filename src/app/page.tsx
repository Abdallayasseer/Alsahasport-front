"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LiveChannels from "@/components/home/LiveChannels";
import UpcomingMatches from "@/components/home/UpcomingMatches";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection"; 
import Footer from "@/components/Footer"; 
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-dark-base text-white">
      <Hero />
      <Features />
      <LiveChannels />
      <UpcomingMatches />
      <HowItWorks />
      <Packages />
      <TrustSection /> 
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
