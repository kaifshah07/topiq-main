// src/animations/StaggerContainer.jsx

import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainer,
  fastStaggerContainer,
  viewport,
} from "../utils/animationVariants";

/**
 * ==========================================================
 * StaggerContainer
 * ==========================================================
 *
 * Production-ready stagger animation wrapper.
 *
 * Features
 * --------
 * ✅ Stagger children automatically
 * ✅ Normal / Fast stagger
 * ✅ Scroll-triggered animation
 * ✅ Reduced motion support
 * ✅ Configurable delay & viewport
 * ✅ Reusable for grids, lists, timelines
 *
 * Usage
 * -----
 *
 * <StaggerContainer>
 *   <motion.div variants={fadeUp}>...</motion.div>
 *   <motion.div variants={fadeUp}>...</motion.div>
 * </StaggerContainer>
 *
 * <StaggerContainer fast>
 *   ...
 * </StaggerContainer>
 *
 */

export default function StaggerContainer({
  children,
  className = "",

  fast = false,

  delay = 0,

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

  const selected = fast
    ? fastStaggerContainer
    : staggerContainer;

  return (
    <MotionComponent
      className={className}
      variants={{
        hidden: selected.hidden,
        visible: {
          ...selected.visible,
          transition: {
            ...selected.visible.transition,
            delayChildren:
              (selected.visible.transition?.delayChildren || 0) + delay,
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