// src/components/sections/visionMission/VisionMissionImage.jsx

import { motion } from "framer-motion";

import SlideRight from "../../../animations/SlideRight";
import useParallax from "../../../hooks/useParallax";

import {
  Eye,
  Target,
  Rocket,
} from "lucide-react";

import {
  floatingAnimation,
  imageHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * VisionMissionImage
 * ==========================================================
 *
 * Production Ready Vision Mission Illustration
 *
 * Features
 * ----------
 * ✅ Slide entrance animation
 * ✅ Parallax scroll effect
 * ✅ Floating vision cards
 * ✅ Mission goal indicators
 * ✅ Premium education ecosystem style
 *
 */



export default function VisionMissionImage(){



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
          bg-orange-200/40
          blur-3xl
          "


        />









        {/* Vision Card */}



        <motion.div


          animate={{


            y:[0,-12,0]


          }}



          transition={{


            duration:5,


            repeat:Infinity,


            ease:"easeInOut"


          }}



          className="
          absolute
          -left-6
          top-14
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



              <Eye


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

                Vision

              </p>




              <h4

                className="
                text-lg
                font-bold
                text-slate-900
                "

              >

                Future

              </h4>



            </div>




          </div>



        </motion.div>









        {/* Mission Card */}



        <motion.div


          animate={{


            y:[0,10,0]


          }}



          transition={{


            duration:6,


            repeat:Infinity,


            ease:"easeInOut"


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
              bg-orange-100
              "


            >



              <Target


                size={22}


                className="
                text-orange-600
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

                Mission

              </p>




              <h4

                className="
                text-lg
                font-bold
                text-slate-900
                "

              >

                Impact

              </h4>



            </div>




          </div>



        </motion.div>









        {/* Growth Card */}



        <motion.div


          animate={{


            y:[0,-8,0]


          }}



          transition={{


            duration:4.5,


            repeat:Infinity,


            ease:"easeInOut"


          }}



          className="
          absolute
          bottom-0
          left-16
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
              w-11
              items-center
              justify-center
              rounded-xl
              bg-green-100
              "


            >



              <Rocket


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

                Growth

              </p>




              <h4

                className="
                text-lg
                font-bold
                text-slate-900
                "

              >

                Future Ready

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



            src="/image/10.png"




            alt="TOPIQ vision and mission"




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