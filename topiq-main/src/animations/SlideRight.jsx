// src/animations/SlideRight.jsx

import { motion, useReducedMotion } from "framer-motion";
import { slideRight, viewport } from "../utils/animationVariants";

/**
 * ==========================================================
 * SlideRight
 * ==========================================================
 *
 * Production Ready Slide Right Animation
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
 * <SlideRight>
 *   <Content />
 * </SlideRight>
 *
 * <SlideRight delay={0.2}>
 *   <AboutContent />
 * </SlideRight>
 */

export default function SlideRight({
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
        hidden: slideRight.hidden,
        visible: {
          ...slideRight.visible,
          transition: {
            ...slideRight.visible.transition,
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