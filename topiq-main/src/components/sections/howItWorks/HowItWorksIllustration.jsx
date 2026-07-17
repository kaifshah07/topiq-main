// src/components/sections/howItWorks/HowItWorksIllustration.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";

import useParallax from "../../../hooks/useParallax";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * HowItWorksIllustration
 * ==========================================================
 *
 * Production Ready Illustration Component
 *
 * Features
 * ----------
 * ✅ Slide entrance animation
 * ✅ Parallax movement
 * ✅ Floating background elements
 * ✅ Image hover effect
 * ✅ Decorative UI cards
 *
 */


export default function HowItWorksIllustration(){


  const {
    ref,
    style,
  } = useParallax({

    speed:0.08,

    direction:"up",

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
          top-10
          h-64
          w-64
          rounded-full
          bg-blue-200/40
          blur-3xl
          "

        />



        <motion.div

          variants={floatingAnimation}

          animate="animate"

          transition={{
            delay:1,
          }}

          className="
          absolute
          -right-10
          bottom-10
          h-60
          w-60
          rounded-full
          bg-cyan-200/40
          blur-3xl
          "

        />






        {/* Floating Analytics Card */}

        <motion.div

          animate={{

            y:[
              0,
              -12,
              0
            ]

          }}

          transition={{

            duration:5,

            repeat:Infinity,

            ease:"easeInOut",

          }}

          className="
          absolute
          -right-5
          top-16
          z-20
          rounded-2xl
          bg-white
          px-5
          py-4
          shadow-xl
          "

        >

          <p
            className="
            text-xs
            text-slate-500
            "
          >

            Performance

          </p>


          <h3
            className="
            mt-1
            text-2xl
            font-bold
            text-blue-600
            "
          >

            +95%

          </h3>


        </motion.div>







        {/* Main Illustration */}


        <motion.div

          ref={ref}

          style={style}

          {...imageHover}

          className="
          relative
          z-10
          "

        >


          <img

            src="/images/how-it-works.webp"

            alt="TOPIQ learning process"

            className="
            w-full
            rounded-[2rem]
            drop-shadow-2xl
            "

            loading="lazy"

          />


        </motion.div>




      </div>


    </SlideRight>


  );

}