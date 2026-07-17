// src/components/sections/recognition/RecognitionCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * RecognitionCard
 * ==========================================================
 *
 * Production Ready Recognition Card
 *
 * Features
 * ----------
 * ✅ Scroll reveal animation
 * ✅ Hover elevation
 * ✅ Recognition badge
 * ✅ Organization details
 * ✅ Gradient identity
 *
 */



export default function RecognitionCard({

  icon: Icon,

  title,

  description,

  organization,

  year,

  category,

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
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:shadow-2xl
        "


      >





        {/* Gradient Top Line */}


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



          <Icon size={30}/>



        </motion.div>









        {/* Category */}



        {

          category && (


            <span


              className="
              mt-6
              inline-flex
              rounded-full
              bg-blue-50
              px-4
              py-1.5
              text-xs
              font-semibold
              text-blue-700
              "


            >


              {category}


            </span>


          )


        }









        {/* Title */}



        <h3


          className="
          mt-4
          text-xl
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
          mt-3
          text-sm
          leading-7
          text-slate-600
          "


        >


          {description}



        </p>









        {/* Organization + Year */}



        <div


          className="
          mt-6
          flex
          flex-wrap
          gap-3
          "


        >




          {

            organization && (


              <span


                className="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-xs
                font-semibold
                text-slate-700
                "


              >


                {organization}



              </span>


            )

          }







          {

            year && (


              <span


                className="
                rounded-full
                bg-green-50
                px-4
                py-2
                text-xs
                font-semibold
                text-green-700
                "


              >


                {year}



              </span>


            )


          }



        </div>









        {/* Hover Glow */}



        <div


          className="
          absolute
          -bottom-12
          -right-12
          h-36
          w-36
          rounded-full
          bg-blue-100/40
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