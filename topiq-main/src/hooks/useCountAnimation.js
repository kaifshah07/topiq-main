// src/hooks/useCountAnimation.js

import { useEffect, useRef, useState } from "react";

/**
 * ==========================================================
 * useCountAnimation
 * ==========================================================
 *
 * Production-ready animated counter hook.
 *
 * Features
 * ----------
 * ✅ Smooth number animation
 * ✅ Intersection based trigger
 * ✅ Runs once by default
 * ✅ Custom duration
 * ✅ Custom start value
 * ✅ Decimal support
 * ✅ SSR safe
 * ✅ Performance optimized
 *
 *
 * Usage
 * ----------
 *
 * const count = useCountAnimation(50000);
 *
 * <h2>{count}+</h2>
 *
 *
 * Advanced:
 *
 * const count = useCountAnimation(4.9, {
 *   duration: 2000,
 *   decimals: 1
 * });
 *
 */

export default function useCountAnimation(
  targetValue,
  {
    duration = 2000,
    startValue = 0,
    decimals = 0,
    once = true,
  } = {}
) {
  const elementRef = useRef(null);

  const animationRef = useRef(null);

  const startTimeRef = useRef(null);

  const hasAnimatedRef = useRef(false);

  const [count, setCount] = useState(startValue);


  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;


    // Browser fallback
    if (!("IntersectionObserver" in window)) {
      setCount(targetValue);
      return;
    }


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          (!once || !hasAnimatedRef.current)
        ) {
          hasAnimatedRef.current = true;

          startAnimation();

          if (once) {
            observer.disconnect();
          }
        }
      },
      {
        threshold: 0.3,
      }
    );


    observer.observe(element);


    return () => {
      observer.disconnect();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };


  // startAnimation reads the latest values listed below and is intentionally
  // scoped to this hook rather than exposed as a reactive dependency.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValue, duration, startValue, decimals, once]);


  function startAnimation() {

    startTimeRef.current = null;


    const animate = (timestamp) => {

      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }


      const progress =
        Math.min(
          (timestamp - startTimeRef.current) /
          duration,
          1
        );


      // Smooth easing
      const easedProgress =
        1 - Math.pow(1 - progress, 4);


      const currentValue =
        startValue +
        (targetValue - startValue) *
        easedProgress;


      setCount(
        Number(
          currentValue.toFixed(decimals)
        )
      );


      if (progress < 1) {

        animationRef.current =
          requestAnimationFrame(
            animate
          );

      } else {

        setCount(targetValue);

      }
    };


    animationRef.current =
      requestAnimationFrame(
        animate
      );
  }


  return {
    ref: elementRef,
    count,
  };
}
