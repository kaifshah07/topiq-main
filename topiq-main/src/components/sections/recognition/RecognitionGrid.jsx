// src/components/sections/recognition/RecognitionGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import RecognitionCard from "./RecognitionCard";

import recognitionData from "./recognitionData";

import {
  BadgeCheck,
  Building2,
  Trophy,
  Medal,
  Star,
  ShieldCheck,
} from "lucide-react";



/**
 * Icon Mapping
 *
 * Keeps recognition.js clean
 * by storing icon names.
 */


const iconMap = {


  badge: BadgeCheck,


  organization: Building2,


  trophy: Trophy,


  medal: Medal,


  star: Star,


  verified: ShieldCheck,


};





export default function RecognitionGrid(){



  return (

    <StaggerContainer


      className="
      grid
      gap-8
      md:grid-cols-2
      lg:grid-cols-3
      recognition-content-grid
      "


    >






      {

        recognitionData.map(

          (item)=>(



            <RecognitionCard



              key={item.id}



              icon={

                iconMap[
                  item.icon
                ]

              }



              title={
                item.title
              }



              description={
                item.description
              }



              organization={
                item.organization
              }



              category={
                item.category
              }



              year={
                item.year
              }



              accent={
                item.accent
              }



            />



          )

        )


      }





    </StaggerContainer>


  );

}
