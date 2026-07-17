import { motion } from "framer-motion";
import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "AI-powered exam preparation",
  "Personalized learning roadmap",
  "Smart performance tracking",
];

export default function AboutContent() {
  return (
    <div className="w-full">
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
            text-xs
            font-semibold
            text-blue-700
            sm:text-sm
          "
        >
          About TOPIQ
        </span>
      </FadeUp>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-3xl
          font-extrabold
          leading-tight
          text-slate-900
          sm:text-4xl
          lg:text-5xl
        "
      >
        <AnimatedText>Learn Smarter</AnimatedText>

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
          Crack Exams Faster
        </span>
      </h2>

      {/* Description */}

      <FadeUp delay={0.3}>
        <p
          className="
            mt-6
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            sm:text-lg
            sm:leading-8
          "
        >
          TOPIQ is an AI-powered competitive exam preparation platform
          designed to help students prepare effectively for SSC,
          Banking, Railway, UPSC, MPSC and other government
          examinations through personalized learning, smart analytics
          and adaptive study plans.
        </p>
      </FadeUp>

      {/* Highlights */}

      <FadeUp delay={0.45}>
        <div className="mt-8 space-y-5">
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
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                items-start
                gap-3
              "
            >
              <CheckCircle2
                size={22}
                className="
                  mt-1
                  shrink-0
                  text-green-500
                "
              />

              <span
                className="
                  text-sm
                  leading-7
                  text-slate-700
                  sm:text-base
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