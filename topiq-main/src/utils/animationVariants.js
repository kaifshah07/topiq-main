// src/utils/animationVariants.js

/**
 * Production Ready Animation Variants
 * -----------------------------------
 * Used across the entire TOPIQ website.
 *
 * Compatible with:
 * - Framer Motion v12+
 * - React 19
 */

export const easing = [0.22, 1, 0.36, 1];

export const transition = {
  duration: 0.7,
  ease: easing,
};

/* =========================================================
   Fade
========================================================= */

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition,
  },
};

/* =========================================================
   Fade Up
========================================================= */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

/* =========================================================
   Fade Down
========================================================= */

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

/* =========================================================
   Slide Left
========================================================= */

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

/* =========================================================
   Slide Right
========================================================= */

export const slideRight = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

/* =========================================================
   Scale
========================================================= */

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition,
  },
};

/* =========================================================
   Zoom
========================================================= */

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition,
  },
};

/* =========================================================
   Rotate
========================================================= */

export const rotateIn = {
  hidden: {
    opacity: 0,
    rotate: -8,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition,
  },
};

/* =========================================================
   Stagger Container
========================================================= */

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/* =========================================================
   Faster Stagger
========================================================= */

export const fastStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* =========================================================
   Hero Animation
========================================================= */

export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

/* =========================================================
   Floating Animation
========================================================= */

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* =========================================================
   Slow Floating
========================================================= */

export const slowFloatingAnimation = {
  animate: {
    y: [0, -20, 0],
    x: [0, 8, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* =========================================================
   Pulse Glow
========================================================= */

export const pulseGlow = {
  animate: {
    scale: [1, 1.03, 1],
    opacity: [1, 0.95, 1],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* =========================================================
   Button Hover
========================================================= */

export const buttonHover = {
  whileHover: {
    scale: 1.04,
    y: -2,
    transition: {
      duration: 0.25,
    },
  },

  whileTap: {
    scale: 0.97,
  },
};

/* =========================================================
   Card Hover
========================================================= */

export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};

/* =========================================================
   Icon Hover
========================================================= */

export const iconHover = {
  whileHover: {
    rotate: 8,
    scale: 1.12,
    transition: {
      duration: 0.25,
    },
  },
};

/* =========================================================
   Image Hover
========================================================= */

export const imageHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.45,
    },
  },
};

/* =========================================================
   Reveal Utility
========================================================= */

export const viewport = {
  once: true,
  amount: 0.2,
};

/* =========================================================
   Common Animation Props
========================================================= */

export const revealAnimation = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport,
};

export const staggerAnimation = {
  variants: staggerContainer,
  initial: "hidden",
  whileInView: "visible",
  viewport,
};