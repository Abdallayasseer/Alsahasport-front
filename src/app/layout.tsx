import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import AuroraBackground from "@/components/layout/AuroraBackground";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Alsaha Sport | اشتراكات رياضية مميزة",
  description: "استمتع بالمباريات بثبات وجودة عالية مع الساحة سبورت. اشتراكات IPTV مميزة وتفعيل فوري.",
};

import BottomNav from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased pb-32`}
      >
        <NoiseOverlay />
        <AuroraBackground />
        <BottomNav />
        {children}
      </body>
    </html>
  );
}
