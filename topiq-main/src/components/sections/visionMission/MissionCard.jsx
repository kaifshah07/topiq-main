// src/components/sections/visionMission/MissionCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * MissionCard
 * ==========================================================
 *
 * Production Ready Mission Card
 *
 * Features
 * ----------
 * ✅ Scroll reveal animation
 * ✅ Hover elevation
 * ✅ Mission icon animation
 * ✅ Action-oriented layout
 * ✅ Premium SaaS style
 *
 */



export default function MissionCard({

  icon: Icon,

  title,

  description,

  actions = [],

  accent = "from-orange-500 to-yellow-500",

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
          group-hover:text-orange-600
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









        {/* Mission Actions */}



        {

          actions.length > 0 && (


            <div


              className="
              mt-6
              space-y-3
              "



            >



              {

                actions.map(


                  (action,index)=>(



                    <motion.div



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
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      text-slate-700
                      "



                    >





                      <span


                        className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-100
                        text-xs
                        font-bold
                        text-orange-600
                        "


                      >


                        ✓



                      </span>





                      {action}





                    </motion.div>




                  )

                )

              }




            </div>


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
          bg-orange-100/50
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