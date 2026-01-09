"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "relative flex items-center justify-center font-bold rounded-xl transition-all select-none disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant styles
    const variants = {
      primary:
        "bg-alsaha-green text-black shadow-[0_0_20px_rgba(114,191,68,0.2)] hover:shadow-[0_0_35px_rgba(114,191,68,0.4)] border border-alsaha-green hover:brightness-110",
      secondary:
        "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md",
      tertiary:
        "bg-transparent text-white/80 hover:text-white hover:bg-white/5",
    };

    // Size styles
    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5 h-9",
      md: "text-sm px-6 py-3 gap-2 h-12",
      lg: "text-base px-8 py-4 gap-3 h-14",
      icon: "p-0 w-10 h-10 md:w-12 md:h-12",
    };

    const isIconOnly = size === "icon";

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.96 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...(props as HTMLMotionProps<"button">)}
      >
        {isLoading && (
          <Loader2 className="animate-spin" size={size === "sm" ? 14 : 18} />
        )}
        
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        
        {!isIconOnly && <span>{children}</span>}
        {isIconOnly && children}

        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
