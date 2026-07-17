// src/components/sections/whyTopiq/WhyTopiqCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";

/**
 * ==========================================================
 * WhyTopiqCard
 * ==========================================================
 *
 * Features
 * ----------
 * ✅ Scale entrance animation
 * ✅ Card hover lift
 * ✅ Icon hover animation
 * ✅ Gradient icon background
 * ✅ Responsive
 * ✅ Production Ready
 *
 */

export default function WhyTopiqCard({
  icon: Icon,
  title,
  description,
  accent = "from-blue-500 to-cyan-500",
}) {
  return (
    <ScaleIn className="h-full">
      <motion.article
        {...cardHover}
        className="
          group h-full
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          transition-all
          duration-300
          hover:shadow-2xl
        "
      >
        {/* Top Gradient Line */}

        <div
          className={`
            absolute
            left-0
            top-0
            h-1
            w-full
            bg-gradient-to-r
            ${accent}
          `}
        />

        {/* Icon */}

        <motion.div
          {...iconHover}
          className={`
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${accent}
            text-white
            shadow-lg
          `}
        >
          <Icon size={30} />
        </motion.div>

        {/* Title */}

        <h3
          className="
            text-xl
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4
            leading-7
            text-slate-600
          "
        >
          {description}
        </p>

        {/* Decorative Background */}

        <div
          className="
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-blue-100/20
            blur-2xl
            transition-all
            duration-500
            group-hover:scale-125
          "
        />
      </motion.article>
    </ScaleIn>
  );
}
