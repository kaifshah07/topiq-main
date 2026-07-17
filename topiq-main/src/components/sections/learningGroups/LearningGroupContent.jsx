// src/components/sections/learningGroups/LearningGroupContent.jsx

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

const benefits = [
  "Personalized learning paths for every student",
  "Exam-focused content and practice sessions",
  "Expert guidance and mentorship",
  "Community-based learning experience",
];

export default function LearningGroupContent() {
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
          Learning Communities
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
            {"Learn\u00A0Together,"}
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
          Grow Together
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
          Join specialized learning groups designed for school students,
          graduates, professionals, and competitive exam aspirants. Get the
          right resources, guidance, and community support to achieve your
          goals faster.
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

      {/* CTA */}

      <ScaleIn delay={0.7}>
        <motion.button
          {...buttonHover}
          className="
            learning-groups-cta
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-blue-600
            px-7
            py-4
            font-bold
            text-white
            shadow-lg
            shadow-blue-200
          "
        >
          Explore Learning Groups

          <ArrowRight size={20} />
        </motion.button>
      </ScaleIn>
    </div>
  );
}