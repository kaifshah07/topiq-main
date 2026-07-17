// src/components/sections/learningGroups/LearningGroups.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import LearningGroupContent from "./LearningGroupContent";
import LearningGroupImage from "./LearningGroupImage";
import LearningGroupGrid from "./LearningGroupGrid";



/**
 * ==========================================================
 * LearningGroups
 * ==========================================================
 *
 * Complete Learning Groups Section
 *
 * Includes:
 * ----------
 * ✅ Hero Content
 * ✅ Education Illustration
 * ✅ Learning Group Cards
 * ✅ Scroll Animations
 * ✅ Responsive Layout
 *
 */



export default function LearningGroups(){


  return (

    <section


      id="learning-groups"


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






          {/* Main Section */}

          <div


            className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            "


          >




            {/* Content */}

            <LearningGroupContent />







            {/* Illustration */}

            <LearningGroupImage />





          </div>









          {/* Learning Group Cards */}


          <div


            className="
            learning-grid-block
            "


          >



            <LearningGroupGrid />



          </div>






        </AnimatedSection>





      </div>





    </section>


  );

}
