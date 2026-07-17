// src/components/sections/testimonials/Testimonials.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import TestimonialsContent from "./TestimonialsContent";
import TestimonialsGrid from "./TestimonialsGrid";
import TestimonialsNavigation from "./TestimonialsNavigation";

/**
 * ==========================================================
 * Testimonials
 * ==========================================================
 *
 * Fully Responsive Testimonials Section
 *
 * Improvements
 * ------------
 * ✅ Better mobile spacing
 * ✅ Responsive container
 * ✅ Better tablet layout
 * ✅ Large desktop alignment
 * ✅ Modern section spacing
 *
 */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        lg:py-28
      "
    >
      {/* Background Decorations */}

      <div
        className="
          absolute
          -left-32
          top-16
          h-72
          w-72
          rounded-full
          bg-blue-100/40
          blur-3xl
          sm:h-80
          sm:w-80
          lg:-left-40
          lg:top-20
          lg:h-96
          lg:w-96
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-12
          h-72
          w-72
          rounded-full
          bg-indigo-100/40
          blur-3xl
          sm:h-80
          sm:w-80
          lg:-right-40
          lg:bottom-20
          lg:h-96
          lg:w-96
        "
      />

      <div
        className="
          container
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <AnimatedSection animation="fadeUp">
          {/* Section Heading */}

          <TestimonialsContent />

          {/* Testimonials */}

          <div className="mt-12 sm:mt-16">
            <TestimonialsGrid />
          </div>

          {/* Navigation */}

          <div className="mt-10 sm:mt-12 flex justify-center">
            <TestimonialsNavigation />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}