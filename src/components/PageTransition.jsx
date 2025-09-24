import React from 'react';
import { motion } from 'framer-motion';

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

/**
 * Page Transition component that adds smooth transitions between routes
 * Wrap page content with this component for consistent page transition effects
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransitionVariants}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;