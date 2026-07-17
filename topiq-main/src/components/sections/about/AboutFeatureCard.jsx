// src/components/sections/about/AboutFeatureCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";

export default function AboutFeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <ScaleIn className="h-full">
      <motion.div
        {...cardHover}
        className="
          group
          flex
          h-full
          flex-col
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-blue-100
          hover:shadow-xl

          sm:flex-row
          sm:items-start
          sm:gap-5

          lg:p-7
        "
      >
        {/* Icon */}

        <motion.div
          {...iconHover}
          className="
            mb-5
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-50
            to-cyan-50
            text-blue-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-gradient-to-br
            group-hover:from-blue-600
            group-hover:to-cyan-500
            group-hover:text-white

            sm:mb-0
          "
        >
          <Icon size={30} />
        </motion.div>

        {/* Content */}

        <div className="flex-1">
          <h3
            className="
              text-xl
              font-bold
              text-slate-900
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-slate-600

              sm:text-[15px]
            "
          >
            {description}
          </p>
        </div>
      </motion.div>
    </ScaleIn>
  );
}