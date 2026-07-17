// src/hooks/useScrollReveal.js

import { useEffect, useRef, useState } from "react";

/**
 * ==========================================================
 * useScrollReveal
 * ==========================================================
 *
 * Production-ready Intersection Observer hook.
 *
 * Features
 * ----------
 * ✅ Lightweight
 * ✅ Uses native IntersectionObserver
 * ✅ SSR Safe
 * ✅ Supports once / repeat
 * ✅ Custom threshold
 * ✅ Custom rootMargin
 * ✅ No external dependency
 *
 * Usage
 * ----------
 *
 * const { ref, isVisible } = useScrollReveal();
 *
 * <div
 *   ref={ref}
 *   className={isVisible ? "opacity-100" : "opacity-0"}
 * >
 *   Content
 * </div>
 *
 */

export default function useScrollReveal({
  threshold = 0.2,
  root = null,
  rootMargin = "0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Browser doesn't support IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return {
    ref,
    isVisible,
  };
}