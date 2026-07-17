// src/components/sections/faq/FAQ.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import FAQContent from "./FAQContent";
import FAQItem from "./FAQItem";

import faqData from "./faqData";

/**
 * ==========================================================
 * FAQ
 * ==========================================================
 *
 * Complete FAQ Section
 *
 * Includes:
 * ----------
 * ✅ Animated Heading
 * ✅ FAQ Accordion
 * ✅ Responsive Layout
 * ✅ Scroll Animations
 *
 */

export default function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-white
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
          bg-indigo-100/40
          blur-3xl
        "
      />

      <div
        className="
          container
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
          lg:px-8
        "
      >
        <AnimatedSection animation="fadeUp">
          {/* Section Heading */}

          <FAQContent />

          {/* FAQ Accordion */}

          <div className="mt-16 space-y-5">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}