// src/components/sections/learningGroups/LearningGroupGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import LearningGroupCard from "./LearningGroupCard";

import learningGroups from "./learningGroupsData";

import {
  GraduationCap,
  School,
  BriefcaseBusiness,
  Code2,
  Users,
  Target,
} from "lucide-react";



/**
 * Icon Mapping
 *
 * Keeps learningGroups.js clean
 * by storing icon names.
 */


const iconMap = {


  students: School,


  graduates: GraduationCap,


  professionals: BriefcaseBusiness,


  developers: Code2,


  community: Users,


  aspirants: Target,


};





export default function LearningGroupGrid(){



  return (

    <StaggerContainer

      className="
      grid
      gap-8
      sm:grid-cols-2
      lg:grid-cols-3
      learning-groups-grid
      mobile-grid-3
      "

    >





      {
        learningGroups.map(

          (group)=>(



            <LearningGroupCard


              key={group.id}


              icon={
                iconMap[
                  group.icon
                ]
              }



              title={
                group.title
              }



              description={
                group.description
              }



              students={
                group.students
              }



              courses={
                group.courses
              }



              accent={
                group.accent
              }



            />
          )

        )
      }




    </StaggerContainer>


  );

}
