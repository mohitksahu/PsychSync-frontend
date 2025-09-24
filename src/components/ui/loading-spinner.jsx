import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loading spinner component with smooth animations
 * Can be used throughout the site for loading states
 */
const LoadingSpinner = ({ size = 'md', color = 'primary', className = '' }) => {
  // Size mapping
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  // Color mapping
  const colorMap = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
    foreground: 'border-foreground'
  };

  const spinnerSize = sizeMap[size] || sizeMap.md;
  const spinnerColor = colorMap[color] || colorMap.primary;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`rounded-full border-2 border-t-transparent ${spinnerSize} ${spinnerColor}`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.2, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
    </div>
  );
};

export default LoadingSpinner;