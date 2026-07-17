// src/components/sections/smartExam/SmartExamContent.jsx

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";

const benefits = [
  "AI-powered personalized practice",
  "Real exam pattern mock tests",
  "Instant performance analytics",
  "Smart recommendations for improvement",
];

export default function SmartExamContent() {
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
          Smart Exam Engine
        </span>
      </FadeUp>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-4xl
          font-extrabold
          leading-tight
          md:text-5xl
        "
      >
        <span className="text-black">
          <AnimatedText>
            {"Practice\u00A0Smarter,"}
          </AnimatedText>
        </span>

        <span
          className="
            block
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-indigo-600
            bg-clip-text
            text-transparent
          "
        >
          Perform Better
        </span>
      </h2>

      {/* Description */}

      <FadeUp delay={0.25}>
        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          "
        >
          TOPIQ Smart Exam uses artificial intelligence to personalize your
          preparation with adaptive mock tests, instant feedback, detailed
          performance analysis, and targeted recommendations that help you
          improve faster.
        </p>
      </FadeUp>

      {/* Benefits */}

      <FadeUp delay={0.4}>
        <div className="mt-8 space-y-4">
          {benefits.map((item, index) => (
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
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={22}
                className="text-green-500"
              />

              <span className="font-medium text-slate-700">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}