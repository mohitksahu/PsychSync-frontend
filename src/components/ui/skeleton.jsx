import React from 'react';
import { cn } from "../../lib/utils";

/**
 * Enhanced skeleton component for content loading states
 * with smoother animations
 */
function Skeleton({ className, variant = 'default', ...props }) {
  // Add custom variants for different skeleton shapes
  const variantClasses = {
    default: '',
    text: 'h-4',
    avatar: 'rounded-full',
    button: 'h-10 rounded-md',
    card: 'h-[120px]',
  };
  
  return (
    <div 
      className={cn(
        "animate-pulse rounded-md bg-muted/60 transition-all duration-1000", 
        variantClasses[variant] || '',
        className
      )} 
      {...props} 
    />
  );
}

export { Skeleton };
