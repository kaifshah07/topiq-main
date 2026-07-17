// src/components/sections/whyTopiq/WhyTopiq.jsx

import FadeUp from "../../../animations/FadeUp";
import AnimatedText from "../../../animations/AnimatedText";
import AnimatedSection from "../../../animations/AnimatedSection";

import WhyTopiqGrid from "./WhyTopiqGrid";


export default function WhyTopiq() {


  return (

    <section
      id="why-topiq"

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
        left-0
        top-20
        h-72
        w-72
        rounded-full
        bg-blue-200/30
        blur-3xl
        "
      />


      <div
        className="
        absolute
        bottom-10
        right-0
        h-80
        w-80
        rounded-full
        bg-cyan-200/30
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


          {/* Header */}

          <FadeUp>


            <div
              className="
              mx-auto
              max-w-3xl
              text-center
              ui-section-header
              "
            >


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

                Why Choose TOPIQ?

              </span>



              <h2
                className="
                mt-6
                text-4xl
                font-extrabold
                leading-tight
  text-white
                md:text-5xl
                "
              >


                

                  Everything You Need




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

                  To Crack Your Dream Exam

                </span>


              </h2>




              <p
                className="
                mt-5
                text-lg
                leading-8
                text-slate-600
                "
              >

                TOPIQ combines AI technology,
                expert content, smart analytics,
                and personalized learning to help
                students achieve better results.

              </p>


            </div>


          </FadeUp>





          {/* Feature Grid */}

          <WhyTopiqGrid />



        </AnimatedSection>


      </div>


    </section>

  );

}
