// src/animations/FadeIn.jsx

import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, viewport } from "../utils/animationVariants";

/**
 * ==========================================================
 * FadeIn
 * ==========================================================
 *
 * Lightweight reusable fade animation.
 *
 * Features
 * --------
 * ✅ Fade opacity
 * ✅ Delay support
 * ✅ Duration support
 * ✅ Accessible (prefers-reduced-motion)
 * ✅ Viewport animation
 * ✅ Reusable anywhere
 *
 * Examples
 * --------
 *
 * <FadeIn>
 *    <HeroTitle />
 * </FadeIn>
 *
 * <FadeIn delay={0.3}>
 *    <Button />
 * </FadeIn>
 *
 * <FadeIn duration={1}>
 *    <Image />
 * </FadeIn>
 *
 */

export default function FadeIn({
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
        hidden: fadeIn.hidden,
        visible: {
          ...fadeIn.visible,
          transition: {
            ...fadeIn.visible.transition,
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