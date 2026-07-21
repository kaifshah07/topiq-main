// src/components/sections/franchise/FranchiseBenefits.jsx

import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";

import franchiseData from "./franchiseData";

export default function FranchiseBenefits() {
  return (
    <div className="w-full">
      {/* Section Header */}

      <div className="mx-auto max-w-3xl text-center">
        <span
          className="
            inline-flex
            items-center
            justify-center
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
          <Sparkles size={16} />

          Why Partner With TOPIQ
        </span>

        <h2
          className="
            mt-7
            text-center
            text-4xl
            font-extrabold
            text-slate-900
            md:text-5xl
          "
        >
          <span className="block">
            Grow Your Education Business
          </span>

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
            With A Powerful Ecosystem
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-center
            text-lg
            leading-8
            text-slate-600
          "
        >
          Become a TOPIQ franchise partner and provide students with
          next-generation AI-powered exam preparation solutions.
        </p>
      </div>

      {/* Benefits Grid */}

      <div
        className="
          mt-14
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          franchise-benefits-mobile-grid
        "
      >
        {franchiseData.benefits.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.id}
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
                text-left
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Icon */}

              <motion.div
                {...iconHover}
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${item.bg}
                  ${item.color}
                `}
              >
                <Icon size={32} />
              </motion.div>

              {/* Content */}

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              {/* Bottom Badge */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-blue-600
                "
              >
                <BriefcaseBusiness size={16} />

                TOPIQ Partner Advantage
              </div>

              {/* Hover Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-44
                  w-44
                  rounded-full
                  bg-blue-100/40
                  blur-3xl
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
