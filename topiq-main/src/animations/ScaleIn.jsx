// src/animations/ScaleIn.jsx

import { motion, useReducedMotion } from "framer-motion";
import { scaleIn, viewport } from "../utils/animationVariants";

/**
 * ==========================================================
 * ScaleIn
 * ==========================================================
 *
 * Production Ready Scale Animation
 *
 * Features
 * ----------
 * ✅ Scroll reveal
 * ✅ Smooth scale animation
 * ✅ GPU accelerated
 * ✅ Delay support
 * ✅ Duration support
 * ✅ Viewport control
 * ✅ Reduced motion support
 * ✅ Reusable
 *
 * Usage:
 *
 * <ScaleIn>
 *   <Card />
 * </ScaleIn>
 *
 * <ScaleIn delay={0.2}>
 *   <Button />
 * </ScaleIn>
 *
 * <ScaleIn duration={0.9}>
 *   <Image />
 * </ScaleIn>
 */

export default function ScaleIn({
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
        hidden: scaleIn.hidden,
        visible: {
          ...scaleIn.visible,
          transition: {
            ...scaleIn.visible.transition,
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