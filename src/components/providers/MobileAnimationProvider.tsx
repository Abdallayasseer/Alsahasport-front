"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MotionConfig transition={isMobile ? { duration: 0, ease: "linear" } : undefined}>
      {children}
    </MotionConfig>
  );
}
