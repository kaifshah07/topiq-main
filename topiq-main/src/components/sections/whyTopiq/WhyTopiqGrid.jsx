// src/components/sections/whyTopiq/WhyTopiqGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import WhyTopiqCard from "./WhyTopiqCard";

import {
  Brain,
  ChartNoAxesCombined,
  CalendarCheck,
  Target,
  BookOpenCheck,
  Users,
} from "lucide-react";


const whyTopiqFeatures = [

  {
    id:1,
    icon:Brain,
    title:"AI Powered Learning",
    description:
      "Get personalized learning recommendations based on your preparation level, strengths, and improvement areas.",
    accent:"from-blue-500 to-cyan-500",
  },


  {
    id:2,
    icon:ChartNoAxesCombined,
    title:"Smart Exam Analytics",
    description:
      "Analyze mock test performance, accuracy, speed, and progress with detailed insights.",
    accent:"from-purple-500 to-indigo-500",
  },


  {
    id:3,
    icon:CalendarCheck,
    title:"Personalized Study Plans",
    description:
      "Follow smart study schedules designed according to your exam goals and learning pace.",
    accent:"from-emerald-500 to-teal-500",
  },


  {
    id:4,
    icon:Target,
    title:"Practice With Confidence",
    description:
      "Improve preparation with exam pattern questions, mock tests, and instant solutions.",
    accent:"from-orange-500 to-red-500",
  },


  {
    id:5,
    icon:BookOpenCheck,
    title:"Expert Content",
    description:
      "Learn from quality study material prepared by educators and exam experts.",
    accent:"from-pink-500 to-rose-500",
  },


  {
    id:6,
    icon:Users,
    title:"Student Success Community",
    description:
      "Stay motivated and connected with thousands of aspirants.",
    accent:"from-sky-500 to-blue-500",
  },

];



export default function WhyTopiqGrid(){


  return (

    <StaggerContainer

      className="
      mt-14
      grid
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
      ui-card-grid
      why-feature-grid
      "

    >

      {
        whyTopiqFeatures.map(
          (feature)=>(

            <WhyTopiqCard

              key={feature.id}

              {...feature}

            />

          )
        )
      }


    </StaggerContainer>

  );

}
