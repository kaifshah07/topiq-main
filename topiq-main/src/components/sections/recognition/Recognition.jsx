// src/components/sections/recognition/Recognition.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import RecognitionContent from "./RecognitionContent";
import RecognitionImage from "./RecognitionImage";
import RecognitionGrid from "./RecognitionGrid";



/**
 * ==========================================================
 * Recognition
 * ==========================================================
 *
 * Complete Recognition Section
 *
 * Includes:
 * ----------
 * ✅ Recognition Introduction
 * ✅ Trust Illustration
 * ✅ Recognition Cards
 * ✅ Scroll Animations
 * ✅ Responsive Layout
 *
 */



export default function Recognition(){


  return (

    <section


      id="recognition"


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







          {/* Main Recognition Layout */}



          <div


            className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            "


          >




            {/* Content */}



            <RecognitionContent />








            {/* Illustration */}



            <RecognitionImage />






          </div>









          {/* Recognition Cards */}



          <div


            className="
            mt-24
            lg:mt-28
            "


          >



            <RecognitionGrid />



          </div>







        </AnimatedSection>






      </div>






    </section>


  );

}
