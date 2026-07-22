// src/components/sections/performanceDashboard/DashboardIllustration.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";
import useParallax from "../../../hooks/useParallax";

import {
  TrendingUp,
  Trophy,
  Target,
} from "lucide-react";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * DashboardIllustration
 * ==========================================================
 *
 * Production Ready Dashboard Illustration
 *
 * Features
 * ----------
 * ✅ Slide-in animation
 * ✅ Parallax effect
 * ✅ Floating stat cards
 * ✅ Dashboard image hover
 * ✅ Decorative background glow
 *
 */


export default function DashboardIllustration() {


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
        w-full
        max-w-[540px]
        "
      >



        {/* Background Glow */}

        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="
          absolute
          -left-12
          top-10
          h-72
          w-72
          rounded-full
          bg-blue-200/40
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
          bottom-0
          h-64
          w-64
          rounded-full
          bg-cyan-200/40
          blur-3xl
          "
        />





        {/* Accuracy Card */}

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
          -left-6
          top-10
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

              <TrendingUp
                size={22}
                className="text-green-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Accuracy
              </p>

              <h4 className="text-xl font-bold text-slate-900">
                92%
              </h4>

            </div>

          </div>

        </motion.div>







        {/* Rank Card */}

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
                Rank
              </p>

              <h4 className="text-xl font-bold text-slate-900">
                #12
              </h4>

            </div>

          </div>

        </motion.div>







        {/* Goal Card */}

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
          left-16
          -bottom-6
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
              bg-blue-100
              "
            >

              <Target
                size={22}
                className="text-blue-600"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Goal
              </p>

              <h4 className="text-xl font-bold text-slate-900">
                96%
              </h4>

            </div>

          </div>

        </motion.div>







        {/* Dashboard Image */}

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
            src="/image/5.png"
            alt="TOPIQ performance dashboard"
            className="h-[340px] w-full rounded-[2rem] object-cover drop-shadow-2xl sm:h-[420px] lg:h-[480px]"
            loading="lazy"
          />

        </motion.div>



      </div>

    </SlideRight>

  );

}
