// src/components/sections/awards/Awards.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import AwardsContent from "./AwardsContent";
import AwardsIllustration from "./AwardsIllustration";
import AwardsGrid from "./AwardsGrid";

/**
 * ==========================================================
 * Awards
 * ==========================================================
 *
 * Complete Awards & Scholarships Section
 *
 * Includes:
 * ----------
 * ✅ Awards Introduction
 * ✅ Achievement Illustration
 * ✅ Awards Cards
 * ✅ Scholarship Cards
 * ✅ Scroll Animations
 * ✅ Responsive Layout
 *
 */

export default function Awards() {
  return (
    <section
      id="awards"
      className="
      relative
      overflow-hidden
      bg-slate-50
      py-20
      lg:py-28
      "
    >
      {/* Background Decorations */}

      <div
        className="
        absolute
        -left-40
        top-20
        h-96
        w-96
        rounded-full
        bg-blue-100/40
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -right-40
        bottom-20
        h-96
        w-96
        rounded-full
        bg-blue-100/40
        blur-3xl
        "
      />

      <div
        className="
        container
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        lg:px-8
        "
      >
        <AnimatedSection animation="fadeUp">
          {/* Hero Layout */}

          <div
            className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
            "
          >
            {/* Content */}
            <AwardsContent />

            {/* Illustration */}
            <AwardsIllustration />
          </div>

          {/* Awards & Scholarships Grid */}

          <div
            className="
            awards-grids-block
            "
          >
            <AwardsGrid />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}