// src/components/sections/howItWorks/HowItWorksContent.jsx

import { motion } from "framer-motion";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";

import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Personalized exam roadmap",
  "AI-powered practice recommendations",
  "Real-time performance analysis",
  "Continuous improvement tracking",
];

export default function HowItWorksContent() {
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
          How TOPIQ Works
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
            {"Your\u00A0Complete"}
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
          Learning Journey
        </span>
      </h2>

      {/* Description */}

      <FadeUp delay={0.3}>
        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          "
        >
          TOPIQ makes exam preparation simple and effective. Follow a smart
          learning process, practice regularly, and improve your score with
          intelligent guidance.
        </p>
      </FadeUp>

      {/* Benefits */}

      <FadeUp delay={0.45}>
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
              transition={{
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
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