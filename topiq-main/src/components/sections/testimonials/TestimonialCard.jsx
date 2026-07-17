// src/components/sections/testimonials/TestimonialCard.jsx

import { motion } from "framer-motion";
import { Quote, Star, Award } from "lucide-react";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";

/**
 * ==========================================================
 * TestimonialCard
 * ==========================================================
 *
 * Premium Student Testimonial Card
 *
 * Features
 * ----------
 * ✅ Scroll reveal
 * ✅ Premium hover animation
 * ✅ Rating stars
 * ✅ Student profile
 * ✅ Achievement badge
 * ✅ Quote icon
 *
 */

export default function TestimonialCard({
  name,
  role,
  location,
  image,
  rating = 5,
  review,
  achievement,
  exam,
  accent = "from-blue-500 to-cyan-500",
}) {
  return (
    <ScaleIn>
      <motion.article
        {...cardHover}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Gradient Border */}

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

        {/* Quote */}

        <motion.div
          {...iconHover}
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${accent}
            text-white
            shadow-lg
          `}
        >
          <Quote size={24} />
        </motion.div>

        {/* Review */}

        <p
          className="
            mt-6
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          "{review}"
        </p>

        {/* Rating */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-1
          "
        >
          {[...Array(rating)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className="
                fill-yellow-400
                text-yellow-400
              "
            />
          ))}
        </div>

        {/* Student */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-16
              w-16
              overflow-hidden
              rounded-full
              border-2
              border-slate-100
              shadow-md
            "
          >
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </div>

          <div className="flex-1">
            <h3
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              {name}
            </h3>

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              {role}
            </p>

            <p
              className="
                text-xs
                text-slate-400
              "
            >
              {location}
            </p>
          </div>
        </div>

        {/* Achievement */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            rounded-2xl
            bg-slate-50
            px-4
            py-3
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Award
              size={18}
              className="
                text-amber-500
              "
            />

            <span
              className="
                text-sm
                font-semibold
                text-slate-700
              "
            >
              {achievement}
            </span>
          </div>

          <span
            className={`
              rounded-full
              bg-gradient-to-r
              ${accent}
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            `}
          >
            {exam}
          </span>
        </div>

        {/* Hover Glow */}

        <div
          className="
            absolute
            -bottom-20
            -right-20
            h-48
            w-48
            rounded-full
            bg-blue-100/40
            blur-3xl
            transition-transform
            duration-500
            group-hover:scale-150
          "
        />
      </motion.article>
    </ScaleIn>
  );
}