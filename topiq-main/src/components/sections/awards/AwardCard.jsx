// src/components/sections/awards/AwardCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * AwardCard
 * ==========================================================
 *
 * Production Ready Award Card
 *
 * Features
 * ----------
 * ✅ Scroll reveal animation
 * ✅ Hover lift effect
 * ✅ Achievement icon animation
 * ✅ Gradient accent
 * ✅ Award details support
 *
 */



export default function AwardCard({

  icon: Icon,

  title,

  description,

  year,

  category,

  accent = "from-yellow-400 to-orange-500",

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




        {/* Top Gradient Border */}


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









        {/* Category Badge */}


        {

          category && (

            <span


              className="
              mt-6
              inline-flex
              rounded-full
              bg-yellow-50
              px-4
              py-1.5
              text-xs
              font-semibold
              text-yellow-700
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
          group-hover:text-yellow-600
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








        {/* Year */}


        {

          year && (


            <div


              className="
              mt-6
              inline-flex
              items-center
              rounded-full
              bg-slate-100
              px-4
              py-2
              text-sm
              font-semibold
              text-slate-700
              "


            >


              {year}


            </div>


          )

        }








        {/* Hover Glow */}


        <div


          className="
          absolute
          -bottom-12
          -right-12
          h-36
          w-36
          rounded-full
          bg-yellow-100/40
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