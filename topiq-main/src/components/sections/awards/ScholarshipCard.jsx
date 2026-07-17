// src/components/sections/awards/ScholarshipCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";



/**
 * ==========================================================
 * ScholarshipCard
 * ==========================================================
 *
 * Production Ready Scholarship Card
 *
 * Features
 * ----------
 * ✅ Scroll reveal animation
 * ✅ Hover interaction
 * ✅ Scholarship reward badge
 * ✅ Eligibility details
 * ✅ Gradient premium design
 *
 */



export default function ScholarshipCard({

  icon: Icon,

  title,

  description,

  amount,

  eligibility,

  accent = "from-green-500 to-emerald-500",

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


          <Icon size={30}/>


        </motion.div>









        {/* Scholarship Amount */}


        {

          amount && (


            <div


              className="
              mt-6
              inline-flex
              items-center
              rounded-full
              bg-green-50
              px-4
              py-2
              text-sm
              font-bold
              text-green-700
              "


            >


              {amount}


            </div>


          )

        }








        {/* Title */}


        <h3


          className="
          mt-5
          text-xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          group-hover:text-green-600
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









        {/* Eligibility */}


        {

          eligibility && (


            <div


              className="
              mt-6
              rounded-2xl
              bg-slate-50
              p-4
              "


            >


              <p


                className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-slate-500
                "


              >

                Eligibility


              </p>




              <p


                className="
                mt-2
                text-sm
                font-medium
                text-slate-700
                "


              >

                {eligibility}


              </p>



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
          bg-green-100/40
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