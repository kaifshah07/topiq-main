// src/components/sections/learningGroups/LearningGroupImage.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";

import useParallax from "../../../hooks/useParallax";

import {
  Users,
  BookOpen,
  Award,
} from "lucide-react";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * LearningGroupImage
 * ==========================================================
 *
 * Production Ready Illustration Component
 *
 * Features
 * ----------
 * ✅ Slide entrance animation
 * ✅ Parallax scrolling
 * ✅ Floating learner cards
 * ✅ Premium education visual
 * ✅ Image hover effect
 *
 */



export default function LearningGroupImage(){


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








        {/* Learners Card */}


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
          -left-5
          top-12
          z-20
          rounded-2xl
          bg-white
          p-4
          shadow-xl
          "

        >



          <div

            className="
            flex
            items-center
            gap-3
            "

          >



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

              <Users

                size={22}

                className="
                text-blue-600
                "

              />


            </div>




            <div>


              <p

                className="
                text-xs
                text-slate-500
                "

              >

                Active Learners

              </p>



              <h4

                className="
                text-xl
                font-bold
                text-slate-900
                "

              >

                50K+

              </h4>



            </div>


          </div>



        </motion.div>









        {/* Courses Card */}


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
          -right-6
          top-1/2
          z-20
          rounded-2xl
          bg-white
          p-4
          shadow-xl
          "

        >




          <div

            className="
            flex
            items-center
            gap-3
            "

          >



            <div

              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-purple-100
              "

            >

              <BookOpen

                size={22}

                className="
                text-purple-600
                "

              />


            </div>





            <div>


              <p

                className="
                text-xs
                text-slate-500
                "

              >

                Courses

              </p>



              <h4

                className="
                text-xl
                font-bold
                text-slate-900
                "

              >

                200+

              </h4>



            </div>



          </div>



        </motion.div>









        {/* Achievement Card */}


        <motion.div


          animate={{

            y:[

              0,

              -8,

              0

            ]

          }}


          transition={{

            duration:4.5,

            repeat:Infinity,

            ease:"easeInOut",

          }}




          className="
          absolute
          bottom-0
          left-12
          z-20
          rounded-2xl
          bg-white
          p-4
          shadow-xl
          "

        >



          <div

            className="
            flex
            items-center
            gap-3
            "

          >



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

              <Award

                size={22}

                className="
                text-yellow-600
                "

              />

            </div>




            <div>


              <p

                className="
                text-xs
                text-slate-500
                "

              >

                Success Rate

              </p>



              <h4

                className="
                text-xl
                font-bold
                text-slate-900
                "

              >

                95%

              </h4>



            </div>


          </div>



        </motion.div>









        {/* Main Image */}


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


            src="/image/6.png"


            alt="TOPIQ learning groups"


            className="
            h-[340px]
            w-full
            object-cover
            sm:h-[420px]
            lg:h-[480px]
            rounded-[2rem]
            shadow-2xl
            "

            loading="lazy"


          />




        </motion.div>




      </div>




    </SlideRight>

  );

}
