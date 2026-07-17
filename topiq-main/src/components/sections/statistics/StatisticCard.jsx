import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
} from "../../../utils/animationVariants";

import CountUpNumber from "./CountUpNumber";

export default function StatisticCard({
  icon: Icon,
  value,
  suffix,
  title,
  description,
}) {
  return (
    <ScaleIn>
      <motion.div
        {...cardHover}
        className="
          group
          h-full
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          sm:p-8
          text-center
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Icon */}

        <div
          className="
            mx-auto
            flex
            h-14
            w-14
            sm:h-16
            sm:w-16
            items-center
            justify-center
            rounded-2xl
            bg-blue-100
            text-blue-600
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          <Icon size={28} className="sm:h-8 sm:w-8" />
        </div>

        {/* Number */}

        <h3
          className="
            mt-5
            text-3xl
            font-extrabold
            text-slate-900
            sm:mt-6
            sm:text-4xl
          "
        >
          <CountUpNumber
            value={value}
            suffix={suffix}
          />
        </h3>

        {/* Title */}

        <h4
          className="
            mt-3
            text-lg
            font-bold
            text-slate-800
            sm:text-xl
          "
        >
          {title}
        </h4>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-3
            max-w-xs
            text-sm
            leading-6
            text-slate-500
            sm:text-base
          "
        >
          {description}
        </p>
      </motion.div>
    </ScaleIn>
  );
}