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

  // Mobile: NO motion context at all - pure static rendering
  if (isMobile) {
    return <>{children}</>;
  }

  // Desktop: Keep motion animations
  return (
    <MotionConfig>
      {children}
    </MotionConfig>
  );
}
