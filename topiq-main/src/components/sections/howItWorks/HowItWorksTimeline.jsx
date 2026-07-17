// src/components/sections/howItWorks/HowItWorksTimeline.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import HowItWorksStep from "./HowItWorksStep";

import howItWorksData from "./howItWorksData";

import {
  UserPlus,
  Target,
  BookOpen,
  BarChart3,
} from "lucide-react";



/**
 * ==========================================================
 * HowItWorksTimeline
 * ==========================================================
 *
 * Complete Process Timeline
 *
 * Features:
 * ✅ Responsive timeline layout
 * ✅ Animated step cards
 * ✅ Dynamic data rendering
 * ✅ Icon mapping
 * ✅ Production ready
 *
 */



const iconMap = {

  profile: UserPlus,

  goal: Target,

  learn: BookOpen,

  analysis: BarChart3,

};



export default function HowItWorksTimeline(){


  return (

    <div
      className="
      section-followup
      relative
      "
    >


      {/* Timeline Line */}

      <div

        className="
        absolute
        left-1/2
        top-10
        hidden
        h-[80%]
        w-px
        -translate-x-1/2
        bg-slate-200
        lg:block
        "

      />




      <StaggerContainer

        className="
        relative
        grid
        gap-10
        lg:grid-cols-2
        "

      >



        {
          howItWorksData.map(

            (step,index)=>(


              <div

                key={step.id}

                className={`
                
                ${
                  index % 2 === 0
                  ? "lg:pr-12"
                  : "lg:pl-12 lg:mt-20"
                }

                `}

              >



                <HowItWorksStep


                  number={
                    String(index + 1)
                    .padStart(2,"0")
                  }



                  icon={
                    iconMap[step.icon]
                  }



                  title={
                    step.title
                  }



                  description={
                    step.description
                  }



                  accent={
                    step.accent
                  }



                />



              </div>


            )

          )
        }



      </StaggerContainer>




    </div>

  );

}
