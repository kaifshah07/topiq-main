// src/components/sections/awards/AwardsContent.jsx

import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import ScaleIn from "../../../animations/ScaleIn";

import {
  buttonHover,
} from "../../../utils/animationVariants";

/**
 * ==========================================================
 * AwardsContent
 * ==========================================================
 *
 * Production Ready Awards Section Content
 *
 * Features
 * ----------
 * ✅ Animated badge
 * ✅ Premium heading
 * ✅ Description animation
 * ✅ Achievement highlights
 * ✅ CTA interaction
 *
 */

const highlights = [
  "Recognizing exceptional student achievements",
  "Merit-based scholarships and rewards",
  "Motivating learners through excellence",
  "Celebrating academic success stories",
];

export default function AwardsContent() {
  return (
    <div>
      {/* Badge */}
      <FadeUp>
        <span
          className="
          inline-flex
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
          "
        >
          Awards & Scholarships
        </span>
      </FadeUp>

      {/* Heading */}
      <h2
        className="
        mt-6
        text-4xl
        font-extrabold
        leading-tight
        text-slate-900
        md:text-5xl
        "
      >
        <AnimatedText>
          Celebrate Success,
        </AnimatedText>

        <span
          className="
          block
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-cyan-500
          bg-clip-text
          text-transparent
          "
        >
          Reward Excellence
        </span>
      </h2>

      {/* Description */}
      <FadeUp delay={0.25}>
        <p
          className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-slate-600
          "
        >
          TOPIQ believes in recognizing hard work and
          encouraging learners to achieve their highest
          potential. Through awards, scholarships, and
          performance-based rewards, we celebrate every
          milestone on the journey to success.
        </p>
      </FadeUp>

      {/* Highlights */}
      <FadeUp delay={0.4}>
        <div
          className="
          mt-8
          space-y-4
          "
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
              }}
              className="
              flex
              items-center
              gap-3
              "
            >
              <CheckCircle2
                size={22}
                className="
                text-blue-600
                "
              />

              <span
                className="
                font-medium
                text-slate-700
                "
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeUp>

      {/* CTA */}
      <ScaleIn delay={0.7}>
        <motion.button
          {...buttonHover}
          className="
          awards-view-cta
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          px-7
          py-4
          font-bold
          text-white
          shadow-lg
          shadow-blue-200
          "
        >
          View Achievements
          <ArrowRight size={20} />
        </motion.button>
      </ScaleIn>
    </div>
  );
}