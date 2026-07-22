// src/components/sections/smartExam/SmartExamIllustration.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";

import useParallax from "../../../hooks/useParallax";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * SmartExamIllustration
 * ==========================================================
 *
 * Production Ready Illustration Component
 *
 * Features
 * ----------
 * ✅ Slide entrance animation
 * ✅ Parallax movement
 * ✅ Floating dashboard cards
 * ✅ Performance widgets
 * ✅ Image hover interaction
 *
 */


export default function SmartExamIllustration(){


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
          -left-10
          top-20
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

          transition={{
            delay:1,
          }}

          className="
          absolute
          -right-10
          bottom-10
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

            Accuracy

          </p>



          <h3

            className="
            mt-1
            text-2xl
            font-bold
            text-green-600
            "

          >

            98%

          </h3>


        </motion.div>









        {/* Mock Test Card */}

        <motion.div

          animate={{

            y:[
              0,
              10,
              0
            ]

          }}

          transition={{

            duration:6,

            repeat:Infinity,

            ease:"easeInOut",

          }}


          className="
          absolute
          -left-6
          bottom-20
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

            Mock Tests

          </p>


          <h3

            className="
            mt-1
            text-2xl
            font-bold
            text-blue-600
            "

          >

            500+

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
          overflow-hidden
          rounded-[2rem]
          "

        >



          <img

            src="/image/4.png"

            alt="TOPIQ smart exam analytics dashboard"

            className="
            h-[340px]
            w-full
            object-cover
            sm:h-[420px]
            lg:h-[480px]
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
