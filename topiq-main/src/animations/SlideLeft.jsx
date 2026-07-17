// src/animations/SlideLeft.jsx

import { motion, useReducedMotion } from "framer-motion";
import { slideLeft, viewport } from "../utils/animationVariants";

/**
 * ==========================================================
 * SlideLeft
 * ==========================================================
 *
 * Production Ready Slide Left Animation
 *
 * Features
 * ----------
 * ✅ Scroll reveal
 * ✅ GPU accelerated
 * ✅ Delay support
 * ✅ Duration support
 * ✅ Viewport control
 * ✅ Reduced motion support
 * ✅ Reusable
 *
 * Usage:
 *
 * <SlideLeft>
 *    <Image />
 * </SlideLeft>
 *
 * <SlideLeft delay={0.2}>
 *    <HeroImage />
 * </SlideLeft>
 *
 */

export default function SlideLeft({
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
      style={{ willChange: "transform, opacity" }}
      variants={{
        hidden: slideLeft.hidden,
        visible: {
          ...slideLeft.visible,
          transition: {
            ...slideLeft.visible.transition,
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