// src/components/sections/examCategories/ExamCategoryCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * ExamCategoryCard
 * ==========================================================
 *
 * Production Ready Exam Category Card
 *
 * Features
 * ----------
 * ✅ Scale entrance animation
 * ✅ Card hover lift
 * ✅ Icon animation
 * ✅ Gradient category badge
 * ✅ Responsive design
 * ✅ Reusable component
 *
 */


export default function ExamCategoryCard({

  icon: Icon,

  title,

  description,

  exams,

  accent = "from-blue-500 to-cyan-500",

}) {


  return (

    <ScaleIn className="h-full">


      <motion.article

        {...cardHover}

        className="
        group h-full
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



        {/* Top Gradient */}

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





        {/* Title */}

        <h3
          className="
          mt-6
          text-xl
          font-bold
          text-slate-900
          group-hover:text-blue-600
          transition-colors
          "
        >

          {title}


        </h3>





        {/* Description */}

        <p
          className="
          mt-3
          text-sm
          leading-6
          text-slate-600
          "
        >

          {description}


        </p>





        {/* Exam Count */}

        {
          exams && (

            <div
              className="
              mt-6
              inline-flex
              rounded-full
              bg-slate-100
              px-4
              py-2
              text-sm
              font-semibold
              text-slate-700
              "
            >

              {exams}

            </div>

          )
        }





        {/* Hover Decoration */}

        <div
          className="
          absolute
          -bottom-10
          -right-10
          h-32
          w-32
          rounded-full
          bg-blue-100/30
          blur-2xl
          transition-all
          duration-500
          group-hover:scale-150
          "
        />



      </motion.article>


    </ScaleIn>

  );

}
