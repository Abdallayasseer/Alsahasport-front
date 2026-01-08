"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection"; // Will create next
import Footer from "@/components/Footer"; // Will create next
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-dark-base text-white">
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <HowItWorks />
      <TrustSection /> 
      <Footer />
      <FloatingTelegram />
    </main>
  );
}
