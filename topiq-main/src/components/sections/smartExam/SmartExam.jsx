// src/components/sections/smartExam/SmartExam.jsx

import AnimatedSection from "../../../animations/AnimatedSection";
import SmartExamContent from "./SmartExamContent";
import SmartExamIllustration from "./SmartExamIllustration";
import SmartExamFeatures from "./SmartExamFeatures";



/**
 * ==========================================================
 * SmartExam
 * ==========================================================
 *
 * Complete Smart Exam Section
 *
 * Includes:
 * ----------
 * ✅ Animated Content
 * ✅ AI Dashboard Illustration
 * ✅ Feature Cards
 * ✅ Responsive Layout
 * ✅ Premium SaaS Design
 *
 */


export default function SmartExam(){


  return (

    <section

      id="smart-exam"

      className="
      relative
      overflow-hidden
      bg-white
      py-20
      lg:py-28
      "

    >




      {/* Background Decorations */}

      <div

        className="
        absolute
        -left-40
        top-20
        h-96
        w-96
        rounded-full
        bg-blue-100/40
        blur-3xl
        "

      />



      <div

        className="
        absolute
        -right-40
        bottom-20
        h-96
        w-96
        rounded-full
        bg-cyan-100/40
        blur-3xl
        "

      />







      <div

        className="
        container
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        lg:px-8
        "

      >




        <AnimatedSection

          animation="fadeUp"

        >





          {/* Main Hero Area */}

          <div

            className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            "

          >



            {/* Content */}

            <SmartExamContent />





            {/* Illustration */}

            <SmartExamIllustration />



          </div>







         

          {/* Features */}

          <div

            className="
            section-followup
            "

          >


            <SmartExamFeatures />


          </div>






        </AnimatedSection>



      </div>



    </section>

  );

}
