// src/components/sections/smartExam/SmartExamFeatureCard.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * SmartExamFeatureCard
 * ==========================================================
 *
 * Production Ready Feature Card
 *
 * Features
 * ----------
 * ✅ Scroll entrance animation
 * ✅ Hover lift effect
 * ✅ Animated icon
 * ✅ Gradient accent support
 * ✅ Responsive design
 *
 */


export default function SmartExamFeatureCard({

  icon: Icon,

  title,

  description,

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







        {/* Title */}

        <h3

          className="
          mt-6
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







        {/* Hover Glow */}

        <div

          className="
          absolute
          -bottom-12
          -right-12
          h-36
          w-36
          rounded-full
          bg-blue-100/30
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