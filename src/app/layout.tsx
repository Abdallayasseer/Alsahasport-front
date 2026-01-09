import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import AuroraBackground from "@/components/layout/AuroraBackground";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alsahasport-front.vercel.app"),
  title: {
    default: "الساحة سبورت | مشاهدة المباريات بجودة 4K",
    template: "%s | الساحة سبورت",
  },
  description: "وجهتك الأولى لمشاهدة المباريات والقنوات العالمية بجودة عالية وبدون تقطيع. سيرفرات فائقة السرعة ودعم فني على مدار الساعة.",
  keywords: ["IPTV", "مباريات اليوم", "بث مباشر", "الساحة سبورت", "مشاهدة مباريات", "4K", "رياضة"],
  authors: [{ name: "Al Saha Sport Team" }],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://alsahasport-front.vercel.app",
    siteName: "الساحة سبورت",
    title: "الساحة سبورت | عالم الرياضة بين يديك",
    description: "اشترك الآن واستمتع بأقوى السيرفرات الرياضية. ثبات تام، جودة 4K، ودعم فني محترف.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Al Saha Sport Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الساحة سبورت | مشاهدة بلا حدود",
    description: "منصتك الأولى لمشاهدة المباريات. اشترك الآن.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

import BottomNav from "@/components/layout/BottomNav";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased min-h-screen pb-32 md:pb-0 relative overflow-x-hidden`}
      >
        <NoiseOverlay />
        <AuroraBackground />
        <Navbar />
        <main className="flex-grow mb-32 md:mb-0">
          {children}
        </main>
        
        {/* Mobile Floating Subscribe CTA */}
        <div className="md:hidden fixed bottom-[90px] left-4 right-4 z-40 pointer-events-none">
            <a href="/subscription" className="pointer-events-auto block w-full">
                <button className="w-full bg-alsaha-green text-black font-black text-lg py-3.5 rounded-2xl shadow-[0_0_20px_rgba(114,191,68,0.4)] animate-pulse hover:animate-none transition-transform active:scale-95 flex items-center justify-center gap-2">
                    <span>اشترك الآن</span>
                    <span className="bg-black/10 px-2 py-0.5 rounded text-sm font-bold">5000 د.ع</span>
                </button>
            </a>
        </div>

        <BottomNav />
      </body>
    </html>
  );
}
