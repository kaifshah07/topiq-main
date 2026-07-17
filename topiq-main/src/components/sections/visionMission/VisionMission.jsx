// src/components/sections/visionMission/VisionMission.jsx

import AnimatedSection from "../../../animations/AnimatedSection";

import VisionMissionContent from "./VisionMissionContent";
import VisionMissionImage from "./VisionMissionImage";
import VisionMissionGrid from "./VisionMissionGrid";



/**
 * ==========================================================
 * VisionMission
 * ==========================================================
 *
 * Complete Vision & Mission Section
 *
 * Includes:
 * ----------
 * ✅ Vision & Mission Introduction
 * ✅ Purpose Illustration
 * ✅ Vision Card
 * ✅ Mission Card
 * ✅ Scroll Animations
 * ✅ Responsive Layout
 *
 */



export default function VisionMission(){


  return (

    <section


      id="vision-mission"


      className="
      relative
      overflow-hidden
      bg-slate-50
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
        bg-indigo-100/40
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
        bg-orange-100/40
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








          {/* Main Hero Layout */}



          <div


            className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
            "


          >





            {/* Content */}



            <VisionMissionContent />








            {/* Illustration */}



            <VisionMissionImage />






          </div>









          {/* Vision Mission Cards */}



          <div


            className="
            vision-cards-block
            "


          >



            <VisionMissionGrid />



          </div>








        </AnimatedSection>






      </div>






    </section>


  );

}
