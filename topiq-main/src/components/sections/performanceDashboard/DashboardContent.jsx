// src/components/sections/performanceDashboard/DashboardContent.jsx

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";

const benefits = [
  "AI-powered performance analytics",
  "Detailed subject-wise insights",
  "Real-time accuracy tracking",
  "Leaderboard & rank prediction",
];

export default function DashboardContent() {
  return (
    <div>
      {/* Badge */}

      <FadeUp>
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          Performance Dashboard
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
            {"Track\u00A0Every\u00A0Step"}
          </AnimatedText>
        </span>

        <span
          className="
            mt-2
            block
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-indigo-600
            bg-clip-text
            text-transparent
          "
        >
          Towards Success
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
          Monitor your preparation with an intelligent dashboard that provides
          real-time analytics, subject-wise performance, mock test reports,
          accuracy trends, and personalized improvement recommendations.
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

              <span
                className="
                  font-medium
                  leading-7
                  text-slate-700
                "
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}