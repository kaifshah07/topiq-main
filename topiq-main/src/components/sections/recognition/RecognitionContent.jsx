// src/components/sections/recognition/RecognitionContent.jsx

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
 * RecognitionContent
 * ==========================================================
 *
 * Production Ready Recognition Section Content
 *
 * Features
 * ----------
 * ✅ Animated badge
 * ✅ Trust focused heading
 * ✅ Description reveal
 * ✅ Recognition highlights
 * ✅ CTA interaction
 *
 */



const highlights = [

  "Trusted by thousands of learners and educators",

  "Recognized for innovation in digital education",

  "Committed to quality learning standards",

  "Building a future-ready education ecosystem",

];





export default function RecognitionContent(){



  return (

    <div className="recognition-copy">






      {/* Badge */}



      <FadeUp>


        <span


          className="
          inline-flex
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
          "


        >


          Trusted Recognition



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

          Building Trust,

        </AnimatedText>





        <span


          className="
          block
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-indigo-600
          bg-clip-text
          text-transparent
          "


        >


          Creating Impact



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



          TOPIQ is committed to delivering exceptional
          learning experiences through technology,
          innovation, and student-focused solutions.
          Our achievements and recognitions reflect
          our dedication towards building a reliable
          and impactful education platform.



        </p>



      </FadeUp>









      {/* Highlights */}



      <FadeUp delay={0.4}>


        <div


          className="
          mt-8
          space-y-4
          "


        >




          {


            highlights.map(


              (item,index)=>(



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
                    text-green-500
                    "


                  />





                  <span


                    className="
                    font-medium
                    text-slate-700
                    "


                  >


                    {item}



                  </span>




                </motion.div>




              )


            )


          }





        </div>




      </FadeUp>









      {/* CTA */}



      <ScaleIn delay={0.7} className="recognition-cta">


        <motion.button



          {...buttonHover}



          className="
          recognition-explore-cta
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-blue-600
          px-7
          py-4
          font-bold
          text-white
          shadow-lg
          shadow-blue-200
          "



        >




          Explore Our Journey




          <ArrowRight size={20}/>




        </motion.button>



      </ScaleIn>







    </div>


  );

}
