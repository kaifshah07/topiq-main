// src/animations/AnimatedSection.jsx

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
  viewport,
} from "../utils/animationVariants";

/**
 * ==========================================================
 * AnimatedSection
 * ==========================================================
 *
 * Production-ready wrapper for all TOPIQ sections.
 *
 * Features:
 * ✅ Scroll reveal animation
 * ✅ Reduced motion accessibility
 * ✅ Reusable
 * ✅ Custom delay
 * ✅ Custom duration
 * ✅ Multiple animation presets
 * ✅ Once / repeat support
 * ✅ Viewport amount control
 *
 * Example:
 *
 * <AnimatedSection>
 *    <Hero />
 * </AnimatedSection>
 *
 * <AnimatedSection
 *    animation="left"
 *    delay={0.2}
 * >
 *    <About />
 * </AnimatedSection>
 *
 */

const animations = {
  fade: fadeIn,
  fadeUp,
  left: slideLeft,
  right: slideRight,
  scale: scaleIn,
};

export default function AnimatedSection({
  children,
  className = "",

  animation = "fadeUp",

  delay = 0,

  duration,

  once = true,

  amount = 0.2,

  as = "div",
}) {
  const reduceMotion = useReducedMotion();

  const MotionComponent = motion[as] || motion.div;

  if (reduceMotion) {
    return (
      <MotionComponent className={className}>
        {children}
      </MotionComponent>
    );
  }

  const selectedVariant =
    animations[animation] || fadeUp;

  const animatedVariants = {
    hidden: selectedVariant.hidden,

    visible: {
      ...selectedVariant.visible,

      transition: {
        ...selectedVariant.visible.transition,

        delay,

        ...(duration && { duration }),
      },
    },
  };

  return (
    <MotionComponent
      className={className}
      variants={animatedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...viewport,
        once,
        amount,
      }}
    >
      {children}
    </MotionComponent>
  );
}