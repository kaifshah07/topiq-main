// src/components/sections/awards/AwardsIllustration.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";
import useParallax from "../../../hooks/useParallax";

import {
  Trophy,
  Gift,
  GraduationCap,
} from "lucide-react";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * AwardsIllustration
 * ==========================================================
 *
 * Production Ready Awards Illustration
 *
 * Features
 * ----------
 * ✅ Slide-in animation
 * ✅ Parallax movement
 * ✅ Floating achievement cards
 * ✅ Premium illustration
 * ✅ Responsive
 *
 */


export default function AwardsIllustration() {


  const { ref, style } = useParallax({

    speed: 0.08,

    direction: "up",

  });



  return (

    <SlideRight>

      <div
        className="
        relative
        mx-auto
        max-w-xl
        "
      >



        {/* Background Glow */}

        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="
          absolute
          -left-10
          top-16
          h-72
          w-72
          rounded-full
          bg-yellow-200/40
          blur-3xl
          "
        />

        <motion.div
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
          className="
          absolute
          -right-10
          bottom-10
          h-64
          w-64
          rounded-full
          bg-orange-200/40
          blur-3xl
          "
        />





        {/* Achievement Card */}

        <motion.div

          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
          absolute
          -left-5
          top-12
          z-20
          rounded-2xl
          bg-white
          p-4
          shadow-xl
          "

        >

          <div className="flex items-center gap-3">

            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-yellow-100
              "
            >

              <Trophy
                size={22}
                className="text-yellow-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Awards
              </p>

              <h4 className="text-xl font-bold text-slate-900">
                25+
              </h4>

            </div>

          </div>

        </motion.div>







        {/* Scholarship Card */}

        <motion.div

          animate={{
            y: [0, 10, 0],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
          absolute
          -right-5
          top-1/2
          z-20
          rounded-2xl
          bg-white
          p-4
          shadow-xl
          "

        >

          <div className="flex items-center gap-3">

            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-green-100
              "
            >

              <GraduationCap
                size={22}
                className="text-green-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Scholarships
              </p>

              <h4 className="text-xl font-bold text-slate-900">
                ₹10L+
              </h4>

            </div>

          </div>

        </motion.div>







        {/* Rewards Card */}

        <motion.div

          animate={{
            y: [0, -8, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="
          absolute
          bottom-0
          left-14
          z-20
          rounded-2xl
          bg-white
          p-4
          shadow-xl
          "

        >

          <div className="flex items-center gap-3">

            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-orange-100
              "
            >

              <Gift
                size={22}
                className="text-orange-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Rewards
              </p>

              <h4 className="text-xl font-bold text-slate-900">
                5K+
              </h4>

            </div>

          </div>

        </motion.div>







        {/* Main Illustration */}

        <motion.div

          ref={ref}

          style={style}

          {...imageHover}

          className="
          relative
          z-10
          overflow-hidden
          rounded-[2rem]
          "

        >

          <img

            src="/images/awards-scholarships.webp"

            alt="TOPIQ Awards and Scholarships"

            className="
            w-full
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            shadow-2xl
            "

            loading="lazy"

          />

        </motion.div>



      </div>

    </SlideRight>

  );

}