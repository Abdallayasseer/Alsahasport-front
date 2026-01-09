"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, icon: Icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-sm font-medium text-white/80 ms-1">
            {label}
          </label>
        )}
        
        <div className="relative group">
          {Icon && (
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-white/40 group-focus-within:text-alsaha-green transition-colors">
              <Icon size={18} />
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full bg-white/5 border border-white/10 
              rounded-xl px-4 py-3.5 
              ${Icon ? "ps-11" : "ps-4"} 
              text-white placeholder:text-white/30 
              focus:outline-none focus:border-alsaha-green/50 focus:ring-1 focus:ring-alsaha-green/50 
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? "border-red-500/50 focus:border-red-500" : ""}
              ${className}
            `}
            {...props}
          />
        </div>

        {error && (
          <span className="text-xs text-red-500 ms-1 animate-fade-in">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
