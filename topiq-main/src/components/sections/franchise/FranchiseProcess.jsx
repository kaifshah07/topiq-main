import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import ScaleIn from "../../../animations/ScaleIn";

import {
  iconHover,
} from "../../../utils/animationVariants";

import franchiseData from "./franchiseData";


/**
 * ==========================================================
 * FranchiseProcess
 * ==========================================================
 *
 * Premium Franchise Journey Timeline
 *
 * Features
 * ----------
 * ✅ Step timeline
 * ✅ Animated cards
 * ✅ Data driven
 * ✅ Responsive layout
 *
 */


export default function FranchiseProcess() {


  return (

    <div className="franchise-process">


      {/* Heading */}

      <FadeUp>


        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >

          <Sparkles size={16}/>

          Franchise Journey

        </span>


      </FadeUp>



      <h2
        className="
          mt-7
          text-4xl
          font-extrabold
          leading-tight
          text-slate-900
        "
      >

        <AnimatedText>

          Start Your TOPIQ Partnership

        </AnimatedText>


        <span
          className="
            block
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >

          In Simple Steps

        </span>


      </h2>



      <FadeUp delay={0.25}>

        <p
          className="
            mt-5
            max-w-xl
            text-lg
            leading-8
            text-slate-600
          "
        >

          Our simple onboarding process helps you
          launch and grow your TOPIQ education
          center with complete guidance.

        </p>


      </FadeUp>





      {/* Timeline */}


      <div
        className="
          franchise-process-list
          relative
          mt-12
          space-y-8
        "
      >


        {/* Vertical Line */}

        <div
          className="
            absolute
            left-7
            top-8
            h-[calc(100%-60px)]
            w-px
            bg-slate-200
            md:left-8
          "
        />



        {franchiseData.process.map((item,index)=>(


          <ScaleIn
            key={item.id}
            delay={index * 0.1}
          >


            <motion.div
              {...iconHover}
              className="
                franchise-process-row
                relative
                flex
                gap-6
              "
            >


              {/* Step Circle */}


              <div
                className="
                  franchise-step-number
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  via-indigo-600
                  to-cyan-500
                  text-lg
                  font-bold
                  text-white
                  shadow-lg
                "
              >

                {index + 1}

              </div>





              {/* Content Card */}


              <div
                className="
                  franchise-process-card
                  flex-1
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >


                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >

                    {item.title}

                  </h3>


                  <CheckCircle2
                    size={22}
                    className="
                      shrink-0
                      text-green-500
                    "
                  />


                </div>



                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >

                  {item.description}

                </p>



                {index !== franchiseData.process.length - 1 && (

                  <div
                    className="
                      franchise-next-step
                      mt-4
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-blue-600
                    "
                  >

                    Next Step

                    <ArrowRight size={16}/>

                  </div>

                )}


              </div>



            </motion.div>


          </ScaleIn>


        ))}


      </div>


    </div>

  );

}
