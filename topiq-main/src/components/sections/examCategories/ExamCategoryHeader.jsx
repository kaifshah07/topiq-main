// src/components/sections/examCategories/ExamCategoryHeader.jsx

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";


/**
 * ==========================================================
 * ExamCategoryHeader
 * ==========================================================
 *
 * Production Ready Section Header
 *
 * Features
 * ----------
 * ✅ Badge animation
 * ✅ Animated heading
 * ✅ Description reveal
 * ✅ Responsive typography
 *
 */


export default function ExamCategoryHeader() {


  return (

    <FadeUp>


      <div
        className="
        mx-auto
        max-w-3xl
        text-center
        ui-section-header
        "
      >



        {/* Badge */}

        <span

          className="
          inline-flex
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
          "

        >

          Explore Exam Categories

        </span>





        {/* Heading */}

       <h2
  className="
    mt-6
    text-4xl
    font-extrabold
    leading-tight
    md:text-5xl
  "
>
  <span className="text-black">
    <AnimatedText>
      {"Choose\u00A0Your"}
    </AnimatedText>
  </span>

  <span
    className="
      block
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-indigo-600
      bg-clip-text
      text-transparent
    "
  >
    Dream Exam Path
  </span>
</h2>





        {/* Description */}

        <p

          className="
          mt-5
          text-lg
          leading-8
          text-slate-600
          "

        >

          Select your target examination and get
          personalized preparation plans, mock tests,
          and expert guidance designed for success.

        </p>



      </div>


    </FadeUp>

  );

}
