// src/components/sections/about/AboutImage.jsx

import { motion } from "framer-motion";
import SlideLeft from "../../../animations/SlideLeft";
import useParallax from "../../../hooks/useParallax";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";

import logo from "../../../assets/images/logos/logo.png";

export default function AboutImage() {
  const { ref, style } = useParallax({
    speed: 0.08,
    direction: "up",
  });

  return (
    <SlideLeft>
      <div className="page-visual about-page-visual relative mx-auto flex w-full max-w-[120px] sm:max-w-[120px] lg:max-w-[400px] items-center justify-center">

        {/* Background Blob */}

        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="
            absolute
            -left-8
            top-10
            h-40
            w-40
            rounded-full
            bg-blue-200/40
            blur-3xl
            sm:h-52
            sm:w-52
          "
        />

        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
          className="
            absolute
            -right-6
            bottom-0
            h-44
            w-44
            rounded-full
            bg-cyan-200/40
            blur-3xl
            sm:h-60
            sm:w-60
          "
        />

        {/* Success Card */}

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-4
            z-20
            rounded-2xl
            bg-white/95
            px-4
            py-3
            shadow-xl
            backdrop-blur-xl
            sm:-left-6
            sm:px-5
            sm:py-4
          "
        >
          <p className="text-xs text-slate-500">
            Success Rate
          </p>

          <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">
            95%
          </h3>
        </motion.div>

        {/* Students Card */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-6
            right-0
            z-20
            rounded-2xl
            bg-white/95
            px-4
            py-3
            shadow-xl
            backdrop-blur-xl
            sm:-right-6
            sm:bottom-12
            sm:px-5
            sm:py-4
          "
        >
          <p className="text-xs text-slate-500">
            Active Students
          </p>

          <h3 className="text-xl font-bold text-emerald-600 sm:text-2xl">
            50K+
          </h3>
        </motion.div>

        {/* Image */}

        <motion.div
          ref={ref}
          style={style}
          {...imageHover}
          className="
            relative
            z-10
            overflow-hidden
            rounded-[28px]
            bg-white
            p-2
            shadow-2xl
          "
        >
          <img
src="/image/2.png"            alt="TOPIQ Learning Platform"
            loading="lazy"
            className="
              w-full
              max-w-[100px]
              rounded-[24px]
              object-cover
              sm:max-w-[340px]
              lg:max-w-[380px]
            "
          />
        </motion.div>

      </div>
    </SlideLeft>
  );
}
