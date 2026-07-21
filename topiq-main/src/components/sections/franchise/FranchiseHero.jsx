import { motion } from "framer-motion";
import {
  Handshake,
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";

import {
  buttonHover,
  iconHover,
} from "../../../utils/animationVariants";

import franchiseData from "./franchiseData";


/**
 * ==========================================================
 * FranchiseHero
 * ==========================================================
 *
 * Premium Franchise Hero Section
 *
 * Features
 * ----------
 * ✅ Animated badge
 * ✅ Gradient heading
 * ✅ Business CTA
 * ✅ Trust indicators
 * ✅ Responsive design
 *
 */


export default function FranchiseHero() {


  return (

    <div
      className="
        franchise-hero
        mx-auto
        flex
        w-full
        flex-col
        items-center
        max-w-4xl
        text-center
        lg:items-start
        lg:text-left
      "
    >


      {/* Badge */}

      <FadeUp className="franchise-hero-badge">

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

          {franchiseData.badge}

        </span>

      </FadeUp>



      {/* Icon */}

      <ScaleIn delay={0.15} className="franchise-hero-icon flex justify-center">

        <motion.div
          {...iconHover}
          className="
            franchise-hero-icon-box
            mx-auto
            mt-7
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-cyan-500
            text-white
            shadow-xl
          "
        >

          <Handshake size={38}/>

        </motion.div>

      </ScaleIn>



      {/* Heading */}

      <h1
        className="
          mt-8
          text-4xl
          font-extrabold
          leading-tight
          text-slate-900
          md:text-6xl
        "
      >

        <span className="block text-center lg:text-left">
          {franchiseData.title}
        </span>


        <span
          className="
            franchise-hero-highlight
            mt-3
            block
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >

          {franchiseData.highlight}

        </span>


      </h1>



      {/* Description */}

      <FadeUp delay={0.3}>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
          "
        >

          {franchiseData.description}

        </p>

      </FadeUp>



      {/* CTA */}

      <ScaleIn delay={0.45} className="flex w-full justify-center lg:justify-start">

        <motion.a
          {...buttonHover}
          href="#franchise-form"
          className="
            franchise-apply-button
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-cyan-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            shadow-blue-200
            transition-all
          "
        >

          Apply For Franchise

          <ArrowRight size={20}/>

        </motion.a>

      </ScaleIn>



      {/* Trust Card */}

      <FadeUp delay={0.6}>

        <div
          className="
            mx-auto
            mt-14
            grid
            w-full
            max-w-3xl
            gap-5
            sm:grid-cols-3
            franchise-trust-grid
          "
        >

          <div
            className="
              franchise-trust-card
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-center
              shadow-sm
            "
          >

            <Building2
              className="
                mx-auto
                text-blue-600
              "
              size={28}
            />

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-slate-700
              "
            >
              Education Business Opportunity
            </p>

          </div>



          <div
            className="
              franchise-trust-card
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-center
              shadow-sm
            "
          >

            <Handshake
              className="
                mx-auto
                text-indigo-600
              "
              size={28}
            />

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-slate-700
              "
            >
              Complete Partner Support
            </p>

          </div>



          <div
            className="
              franchise-trust-card
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-center
              shadow-sm
            "
          >

            <Sparkles
              className="
                mx-auto
                text-cyan-600
              "
              size={28}
            />

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-slate-700
              "
            >
              AI Learning Ecosystem
            </p>

          </div>


        </div>

      </FadeUp>


    </div>

  );

}
