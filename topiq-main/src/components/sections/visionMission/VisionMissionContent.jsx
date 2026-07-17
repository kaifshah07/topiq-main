// src/components/sections/visionMission/VisionMissionContent.jsx

import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import ScaleIn from "../../../animations/ScaleIn";

import {
  buttonHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * VisionMissionContent
 * ==========================================================
 *
 * Production Ready Vision Mission Section Content
 *
 * Features
 * ----------
 * ✅ Animated badge
 * ✅ Purpose-driven heading
 * ✅ Description reveal
 * ✅ Core values
 * ✅ CTA interaction
 *
 */



const values = [

  "Student-first learning approach",

  "Innovation through technology",

  "Accessible education for everyone",

  "Continuous improvement and excellence",

];





export default function VisionMissionContent(){



  return (

    <div>







      {/* Badge */}



      <FadeUp>


        <span


          className="
          inline-flex
          rounded-full
          bg-indigo-100
          px-4
          py-2
          text-sm
          font-semibold
          text-indigo-700
          "


        >


          Our Vision & Mission



        </span>



      </FadeUp>









      {/* Heading */}



      <h2


        className="
        mt-6
        text-4xl
        font-extrabold
        leading-tight
        text-slate-900
        md:text-5xl
        "


      >




        <AnimatedText>

          Inspiring Growth,

        </AnimatedText>





        <span


          className="
          block
          bg-gradient-to-r
          from-blue-600
          via-indigo-500
          to-purple-600
          bg-clip-text
          text-transparent
          "


        >


          Creating The Future



        </span>





      </h2>









      {/* Description */}



      <FadeUp delay={0.25}>


        <p


          className="
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-slate-600
          "


        >



          At TOPIQ, our vision is to redefine learning
          through innovation and technology, while our
          mission is to empower every student with the
          knowledge, skills, and confidence required to
          succeed in a rapidly changing world.



        </p>



      </FadeUp>









      {/* Core Values */}



      <FadeUp delay={0.4}>


        <div


          className="
          mt-8
          space-y-4
          "


        >




          {


            values.map(


              (value,index)=>(



                <motion.div



                  key={index}



                  initial={{


                    opacity:0,


                    x:-20,


                  }}




                  whileInView={{


                    opacity:1,


                    x:0,


                  }}




                  viewport={{


                    once:true,


                  }}




                  transition={{


                    delay:index*0.12,


                  }}




                  className="
                  flex
                  items-center
                  gap-3
                  "



                >





                  <CheckCircle2


                    size={22}


                    className="
                    text-blue-600
                    "


                  />





                  <span


                    className="
                    font-medium
                    text-slate-700
                    "


                  >


                    {value}



                  </span>





                </motion.div>




              )


            )


          }





        </div>




      </FadeUp>









      {/* CTA */}



      <ScaleIn delay={0.7}>


        <motion.button



          {...buttonHover}




          className="
          vision-more-cta
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-indigo-600
          px-7
          py-4
          font-bold
          text-white
          shadow-lg
          shadow-indigo-200
          "



        >




          Know More About TOPIQ




          <ArrowRight size={20}/>




        </motion.button>



      </ScaleIn>







    </div>


  );

}
