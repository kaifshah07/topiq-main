// src/components/sections/visionMission/VisionCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * VisionCard
 * ==========================================================
 *
 * Production Ready Vision Card
 *
 * Features
 * ----------
 * ✅ Scroll reveal animation
 * ✅ Hover elevation
 * ✅ Vision icon animation
 * ✅ Purpose-focused design
 * ✅ Premium SaaS style
 *
 */



export default function VisionCard({

  icon: Icon,

  title,

  description,

  points = [],

  accent = "from-blue-500 to-cyan-500",

}) {



  return (

    <ScaleIn>


      <motion.article


        {...cardHover}



        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:shadow-2xl
        "


      >






        {/* Gradient Top Border */}



        <div


          className={`

          absolute

          left-0

          top-0

          h-1

          w-full

          bg-gradient-to-r

          ${accent}

          `}



        />









        {/* Icon */}



        <motion.div


          {...iconHover}



          className={`

          flex

          h-16

          w-16

          items-center

          justify-center

          rounded-2xl

          bg-gradient-to-br

          ${accent}

          text-white

          shadow-lg

          `}



        >



          <Icon size={32}/>



        </motion.div>









        {/* Title */}



        <h3


          className="
          mt-6
          text-2xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-blue-600
          "



        >


          {title}



        </h3>









        {/* Description */}



        <p


          className="
          mt-4
          text-sm
          leading-7
          text-slate-600
          "



        >


          {description}



        </p>









        {/* Vision Points */}



        {

          points.length > 0 && (


            <ul


              className="
              mt-6
              space-y-3
              "



            >



              {

                points.map(


                  (point,index)=>(



                    <motion.li



                      key={index}



                      initial={{


                        opacity:0,


                        x:-15,


                      }}



                      whileInView={{


                        opacity:1,


                        x:0,


                      }}



                      viewport={{


                        once:true,


                      }}



                      transition={{


                        delay:index*0.1,


                      }}




                      className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      font-medium
                      text-slate-700
                      "



                    >




                      <span


                        className="
                        mt-2
                        h-2
                        w-2
                        rounded-full
                        bg-blue-500
                        "


                      />




                      {point}





                    </motion.li>




                  )

                )

              }



            </ul>


          )


        }









        {/* Hover Glow */}



        <div


          className="
          absolute
          -bottom-14
          -right-14
          h-40
          w-40
          rounded-full
          bg-blue-100/50
          blur-3xl
          transition-transform
          duration-500
          group-hover:scale-150
          "



        />





      </motion.article>




    </ScaleIn>


  );

}