// src/components/sections/examCategories/ExamCategoryContent.jsx

import { motion } from "framer-motion";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import {
  buttonHover,
} from "../../../utils/animationVariants";


const benefits = [

  "Complete syllabus coverage",

  "AI-based personalized preparation",

  "Real exam pattern mock tests",

  "Performance tracking and analytics",

];



export default function ExamCategoryContent(){


  return (

    <div
      className="
      exam-support-flow
      flex
      flex-col
      "
    >



      {/* Left Content */}

      <FadeUp>


        <div className="exam-preparation-copy">


          <h3
            className="
            text-3xl
            font-extrabold
            text-slate-900
            "
          >

            Prepare For Every Competitive Exam
            With Confidence

          </h3>



          <p
            className="
            mt-5
            text-lg
            leading-8
            text-slate-600
            "
          >

            TOPIQ provides structured preparation
            resources for different competitive exams.
            Choose your goal, follow a smart learning
            path, and track your progress.

          </p>




          {/* Benefits */}

          <div
            className="
            mt-8
            space-y-4
            "
          >

            {
              benefits.map(
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

                    transition={{
                      delay:index*0.12,
                    }}

                    viewport={{
                      once:true,
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


        </div>


      </FadeUp>






      {/* Right CTA Card */}

      <ScaleIn className="order-first w-full">


        <motion.div

          className="
          relative
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          from-blue-600
          to-indigo-700
          mx-auto
          max-w-3xl
          p-10
          text-center
          text-white
          shadow-2xl
          "

        >


          {/* Decoration */}

          <div

            className="
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
            bg-white/10
            blur-2xl
            "

          />



          <h4

            className="
            relative
            text-2xl
            font-bold
            "

          >

            Start Your Exam Preparation Today

          </h4>



          <p

            className="
            relative
            mt-4
            leading-7
            text-blue-100
            "

          >

            Join thousands of aspirants who are
            preparing smarter with TOPIQ.

          </p>




          <motion.button

            {...buttonHover}

            className="
            relative
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-white
            px-6
            py-3
            font-bold
            text-blue-700
            "

          >

            Explore Exams

            <ArrowRight size={18}/>


          </motion.button>



        </motion.div>


      </ScaleIn>



    </div>


  );

}
