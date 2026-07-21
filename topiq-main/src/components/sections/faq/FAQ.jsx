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
        py-12
        lg:py-16
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
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        <AnimatedSection animation="fadeUp">
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
            <FAQContent />

            <div className="faq-list-grid grid grid-cols-2 gap-2.5 sm:gap-3">
              {faqData.map((item) => (
                <FAQItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
