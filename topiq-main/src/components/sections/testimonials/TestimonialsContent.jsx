// src/components/sections/testimonials/TestimonialsContent.jsx

import { motion } from "framer-motion";
import { MessageSquareQuote, Sparkles } from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import ScaleIn from "../../../animations/ScaleIn";

import { iconHover } from "../../../utils/animationVariants";

export default function TestimonialsContent() {
  const stats = [
    {
      value: "25K+",
      label: "Happy Learners",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
    },
    {
      value: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}

      <FadeUp>
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-4
            py-2
            text-xs
            font-semibold
            text-blue-700
            sm:px-5
            sm:text-sm
          "
        >
          <Sparkles size={16} />

          Student Success Stories
        </span>
      </FadeUp>

      {/* Icon */}

      <ScaleIn delay={0.15}>
        <motion.div
          {...iconHover}
          className="
            mx-auto
            mt-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-cyan-500
            text-white
            shadow-xl
            sm:h-20
            sm:w-20
          "
        >
          <MessageSquareQuote size={32} />
        </motion.div>
      </ScaleIn>

      {/* Heading */}

      <h2
        className="
          mt-8
          text-3xl
          font-extrabold
          leading-tight
          text-slate-900
          sm:text-4xl
          lg:text-5xl
        "
      >
        <AnimatedText>
          Hear From Our
        </AnimatedText>

        <span
          className="
            mt-2
            block
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >
          Successful Students
        </span>
      </h2>

      {/* Description */}

      <FadeUp delay={0.3}>
        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            px-2
            text-base
            leading-7
            text-slate-600
            sm:px-0
            sm:text-lg
            sm:leading-8
          "
        >
          Thousands of learners trust TOPIQ to prepare for
          competitive examinations. Discover how our
          AI-powered learning platform has helped students
          improve performance, gain confidence, and achieve
          their career goals.
        </p>
      </FadeUp>

      {/* Statistics */}

      <FadeUp delay={0.45}>
        <div
          className="
            mt-12
            grid
            grid-cols-3
            gap-5
            sm:grid-cols-3
            sm:gap-6
            testimonials-stats-row
          "
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                h-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <h3
                className="
                  text-3xl
                  font-extrabold
                  text-blue-600
                  sm:text-4xl
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
