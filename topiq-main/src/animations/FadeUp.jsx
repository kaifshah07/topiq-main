// src/animations/FadeUp.jsx

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "../utils/animationVariants";

/**
 * ==========================================================
 * FadeUp
 * ==========================================================
 *
 * Production-ready Fade Up Animation
 *
 * Features
 * ----------
 * ✅ Scroll reveal
 * ✅ Custom delay
 * ✅ Custom duration
 * ✅ Viewport control
 * ✅ Reduced motion support
 * ✅ Reusable wrapper
 *
 * Usage:
 *
 * <FadeUp>
 *   <Card />
 * </FadeUp>
 *
 * <FadeUp delay={0.3}>
 *   <Hero />
 * </FadeUp>
 *
 */

export default function FadeUp({
  children,
  className = "",
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

  return (
    <MotionComponent
      className={className}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...fadeUp.visible.transition,
            delay,
            ...(duration && { duration }),
          },
        },
      }}
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