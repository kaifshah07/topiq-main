// src/components/sections/about/About.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutFeatures from "./AboutFeatures";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-28
      "
    >
      {/* Background Decoration */}

      <div
        className="
          absolute
          -left-24
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
          -right-24
          bottom-10
          h-72
          w-72
          rounded-full
          bg-cyan-100/40
          blur-3xl
          sm:h-80
          sm:w-80
          lg:-right-40
          lg:bottom-10
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
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >
            {/* Image */}

            <div className="order-1">
              <AboutImage />
            </div>

            {/* Content */}

            <div className="order-2">
              <AboutContent />
            </div>
          </div>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <AboutFeatures />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}