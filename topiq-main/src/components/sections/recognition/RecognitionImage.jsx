// src/components/sections/recognition/RecognitionImage.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";
import useParallax from "../../../hooks/useParallax";

import {
  BadgeCheck,
  Trophy,
  ShieldCheck,
} from "lucide-react";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * RecognitionImage
 * ==========================================================
 *
 * Production Ready Recognition Illustration
 *
 * Features
 * ----------
 * ✅ Slide entrance animation
 * ✅ Parallax scroll movement
 * ✅ Floating recognition cards
 * ✅ Trust indicators
 * ✅ Premium education branding
 *
 */



export default function RecognitionImage(){



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
        max-w-[460px]
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
          bg-indigo-200/40
          blur-3xl
          "


        />









        {/* Recognition Badge Card */}



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
          -left-6
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


              <BadgeCheck

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

                Verified

              </p>




              <h4

                className="
                text-xl
                font-bold
                text-slate-900
                "

              >

                100%

              </h4>



            </div>




          </div>



        </motion.div>









        {/* Awards Card */}



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
              bg-yellow-100
              "

            >



              <Trophy

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

                Recognition

              </p>




              <h4

                className="
                text-xl
                font-bold
                text-slate-900
                "

              >

                50+

              </h4>



            </div>





          </div>




        </motion.div>









        {/* Trust Card */}



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
          left-14
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
              bg-green-100
              "

            >


              <ShieldCheck

                size={22}

                className="
                text-green-600
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

                Trusted By

              </p>




              <h4

                className="
                text-xl
                font-bold
                text-slate-900
                "

              >

                25K+

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


            src="/image/9.png"



            alt="TOPIQ recognition and achievements"



            className="
            h-[260px]
            w-full
            object-cover
            sm:h-[300px]
            lg:h-[340px]
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
