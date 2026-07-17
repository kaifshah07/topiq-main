// src/components/sections/smartExam/SmartExamFeatures.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import SmartExamFeatureCard from "./SmartExamFeatureCard";

import smartExamData from "./smartExamData";

import {
  Brain,
  Sparkles,
  BarChart3,
  Timer,
  ShieldCheck,
  Target,
} from "lucide-react";



const iconMap = {

  ai: Brain,

  smart: Sparkles,

  analytics: BarChart3,

  speed: Timer,

  accuracy: ShieldCheck,

  target: Target,

};



export default function SmartExamFeatures(){


  return (

    <StaggerContainer

      className="
      grid
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
      ui-card-grid
      "

    >


      {
        smartExamData.map(

          (feature)=>(


            <SmartExamFeatureCard

              key={feature.id}


              icon={
                iconMap[feature.icon]
              }


              title={
                feature.title
              }


              description={
                feature.description
              }


              accent={
                feature.accent
              }


            />

          )

        )
      }


    </StaggerContainer>

  );

}
