// src/components/sections/howItWorks/HowItWorksStep.jsx

import { motion } from "framer-motion";

import ScaleIn from "../../../animations/ScaleIn";

import {
  cardHover,
  iconHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * HowItWorksStep
 * ==========================================================
 *
 * Production Ready Step Card
 *
 * Features
 * ----------
 * ✅ Scale entrance animation
 * ✅ Step number badge
 * ✅ Icon animation
 * ✅ Hover interaction
 * ✅ Timeline compatible
 * ✅ Responsive
 *
 */


export default function HowItWorksStep({

  number,

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
        rounded-2xl
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



        {/* Step Number */}

        <div

          className={`
          absolute
          -left-4
          -top-4
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          ${accent}
          text-sm
          font-bold
          text-white
          shadow-lg
          `}

        >

          {number}


        </div>





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





        {/* Content */}

        <h3

          className="
          mt-6
          text-xl
          font-bold
          text-slate-900
          transition-colors
          group-hover:text-blue-600
          "

        >

          {title}


        </h3>




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




        {/* Decorative Element */}

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
          transition-transform
          duration-500
          group-hover:scale-150
          "

        />


      </motion.article>


    </ScaleIn>

  );

}