// src/components/sections/testimonials/TestimonialsNavigation.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ScaleIn from "../../../animations/ScaleIn";

import {
  buttonHover,
} from "../../../utils/animationVariants";

/**
 * ==========================================================
 * TestimonialsNavigation
 * ==========================================================
 *
 * Premium Testimonials Navigation
 *
 * Features
 * ----------
 * ✅ Previous button
 * ✅ Next button
 * ✅ Animated pagination dots
 * ✅ Ready for future carousel integration
 *
 * NOTE:
 * ----------
 * This component is currently UI-only.
 * Replace the handlers with Embla/Swiper logic
 * whenever you integrate a carousel.
 *
 */

export default function TestimonialsNavigation({

  total = 6,

  initialIndex = 0,

  onPrevious,

  onNext,

  onDotClick,

}) {

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handlePrevious = () => {

    const nextIndex =
      activeIndex === 0
        ? total - 1
        : activeIndex - 1;

    setActiveIndex(nextIndex);

    if (onPrevious) onPrevious(nextIndex);
  };

  const handleNext = () => {

    const nextIndex =
      activeIndex === total - 1
        ? 0
        : activeIndex + 1;

    setActiveIndex(nextIndex);

    if (onNext) onNext(nextIndex);
  };

  const handleDotClick = (index) => {

    setActiveIndex(index);

    if (onDotClick) onDotClick(index);
  };

  return (
    <ScaleIn>
      <div
        className="
          flex
          items-center
          justify-center
          gap-5
        "
      >
        {/* Previous */}

        <motion.button
          {...buttonHover}
          onClick={handlePrevious}
          aria-label="Previous testimonial"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-700
            shadow-md
            transition-all
            duration-300
            hover:border-blue-600
            hover:bg-blue-600
            hover:text-white
          "
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* Dots */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className="group"
            >
              <motion.span
                layout
                transition={{
                  duration: 0.25,
                }}
                className={`
                  block
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "h-3 w-10 bg-gradient-to-r from-blue-600 to-indigo-600"
                      : "h-3 w-3 bg-slate-300 group-hover:bg-blue-300"
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* Next */}

        <motion.button
          {...buttonHover}
          onClick={handleNext}
          aria-label="Next testimonial"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-700
            shadow-md
            transition-all
            duration-300
            hover:border-blue-600
            hover:bg-blue-600
            hover:text-white
          "
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </ScaleIn>
  );
}