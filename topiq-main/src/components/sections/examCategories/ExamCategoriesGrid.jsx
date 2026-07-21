// src/components/sections/examCategories/ExamCategoriesGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import ExamCategoryCard from "./ExamCategoryCard";

import examCategories from "./examCategoriesData";

import {
  Landmark,
  GraduationCap,
  Train,
  ShieldCheck,
  BriefcaseBusiness,
  Calculator,
} from "lucide-react";



/**
 * Icon mapping
 *
 * Keeps data file clean by storing
 * icon names instead of components.
 */

const iconMap = {

  banking: Landmark,

  upsc: GraduationCap,

  railway: Train,

  defence: ShieldCheck,

  government: BriefcaseBusiness,

  aptitude: Calculator,

};



export default function ExamCategoriesGrid() {


  return (

    <StaggerContainer

      className="
      mt-14
      grid
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
      ui-card-grid
      exam-category-grid
      mobile-grid-3
      "

    >


      {
        examCategories.map(
          (category)=>(


            <ExamCategoryCard

              key={category.id}


              icon={
                iconMap[
                  category.icon
                ]
              }


              title={
                category.title
              }


              description={
                category.description
              }


              exams={
                category.exams
              }


              accent={
                category.accent
              }


            />


          )
        )
      }


    </StaggerContainer>

  );

}
