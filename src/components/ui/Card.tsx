"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glass-hover";
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "glass", children, ...props }, ref) => {
    
    const variants = {
      default: "bg-[#111111] border border-white/5",
      glass: "glass-card", // Uses global CSS utility
      "glass-hover": "glass-card hover:bg-white/5 cursor-pointer", // Interactive
    };

    return (
      <div
        ref={ref}
        className={`rounded-2xl p-4 md:p-6 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
