// src/components/sections/faq/FAQContent.jsx

import { motion } from "framer-motion";
import {
  HelpCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import ScaleIn from "../../../animations/ScaleIn";

import {
  iconHover,
} from "../../../utils/animationVariants";

/**
 * ==========================================================
 * FAQContent
 * ==========================================================
 *
 * Premium FAQ Section Header
 *
 * Features
 * ----------
 * ✅ Animated badge
 * ✅ Gradient heading
 * ✅ Description
 * ✅ Trust indicators
 * ✅ Scroll animations
 *
 */

export default function FAQContent() {

  const highlights = [

    {
      title: "24×7 Support",
      icon: ShieldCheck,
    },

    {
      title: "Quick Answers",
      icon: HelpCircle,
    },

    {
      title: "Expert Guidance",
      icon: Sparkles,
    },

  ];



  return (

    <div className="mx-auto max-w-3xl text-center lg:sticky lg:top-28 lg:text-left">

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
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          <HelpCircle size={16} />

          Frequently Asked Questions

        </span>

      </FadeUp>

      {/* Icon */}

      <ScaleIn delay={0.15}>

        <motion.div
          {...iconHover}
          className="
            mx-auto
            mt-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-cyan-500
            text-white
            shadow-xl
          "
        >
          <HelpCircle size={26} />

        </motion.div>

      </ScaleIn>

      {/* Heading */}

      <h2
        className="
          mt-5
          text-3xl
          font-extrabold
          leading-tight
          text-slate-900
          md:text-5xl
        "
      >
        <AnimatedText>

          Have Questions?

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
          We've Got Answers
        </span>

      </h2>

      {/* Description */}

      <FadeUp delay={0.3}>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-base
            leading-7
            text-slate-600
          "
        >
          Find answers to the most common questions about
          TOPIQ, our AI-powered learning platform, mock
          tests, subscriptions, performance analytics,
          and student support services.
        </p>

      </FadeUp>

      {/* Highlights */}

      <FadeUp delay={0.45}>

        <div
          className="
            faq-highlight-grid
            mt-6
            grid
            grid-cols-3
            gap-2
          "
        >
          {highlights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  shadow-sm
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Icon size={18} />

                </div>

                <h3
                  className="
                    mt-2
                    text-xs
                    font-semibold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

              </div>

            );

          })}

        </div>

      </FadeUp>

    </div>

  );

}
