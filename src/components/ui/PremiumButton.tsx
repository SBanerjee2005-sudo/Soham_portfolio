import React from 'react';
import { motion } from 'framer-motion';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function PremiumButton({ children, variant = 'primary', href, className = '', onClick, icon }: PremiumButtonProps) {
  const baseClasses = "relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group";
  
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-accent text-white hover:bg-accent/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]";
      break;
    case 'secondary':
      variantClasses = "bg-white text-background hover:bg-gray-100 shadow-lg";
      break;
    case 'outline':
      variantClasses = "glass-panel text-white hover:bg-white/10 hover:border-white/20";
      break;
  }

  const MotionTag = href ? motion.a : motion.button;
  const commonProps = href ? { href, target: "_blank", rel: "noreferrer" } : { onClick };

  return (
    <MotionTag
      {...commonProps}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {/* Ripple/Glow Effect Layer */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ filter: 'blur(8px)' }} />
      
      <span className="relative z-10 flex items-center gap-2">
        {icon && (
          <span className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        )}
        {children}
      </span>
    </MotionTag>
  );
}
