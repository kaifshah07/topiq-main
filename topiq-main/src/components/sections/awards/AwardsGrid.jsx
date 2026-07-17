// src/components/sections/awards/AwardsGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import AwardCard from "./AwardCard";
import ScholarshipCard from "./ScholarshipCard";

import awardsData from "./awardsData";

import {
  Trophy,
  Medal,
  Award,
  Gift,
  GraduationCap,
  Star,
} from "lucide-react";



/**
 * Icon Mapping
 *
 * Keeps awards.js clean
 * by storing icon names.
 */


const iconMap = {


  trophy:Trophy,


  medal:Medal,


  award:Award,


  gift:Gift,


  scholarship:GraduationCap,


  star:Star,


};





export default function AwardsGrid(){


  return (

    <div

      className="
      space-y-14
      "

    >





      {/* Awards Grid */}


      <div>


        <h3

          className="
          mb-8
          text-2xl
          font-bold
          text-slate-900
          "

        >

          Achievements & Awards

        </h3>




        <StaggerContainer

          className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          awards-content-grid
          "

        >



          {
            awardsData.awards.map(

              (award)=>(



                <AwardCard


                  key={award.id}



                  icon={

                    iconMap[
                      award.icon
                    ]

                  }



                  title={
                    award.title
                  }



                  description={
                    award.description
                  }



                  category={
                    award.category
                  }



                  year={
                    award.year
                  }



                  accent={
                    award.accent
                  }



                />


              )

            )
          }



        </StaggerContainer>



      </div>

      {/* Scholarship Grid */}



      <div>



        <h3

          className="
          mb-8
          text-2xl
          font-bold
          text-slate-900
          "

        >

          Scholarships & Rewards

        </h3>





        <StaggerContainer

          className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          awards-content-grid
          "

        >



          {
            awardsData.scholarships.map(

              (scholarship)=>(



                <ScholarshipCard



                  key={
                    scholarship.id
                  }




                  icon={

                    iconMap[
                      scholarship.icon
                    ]

                  }



                  title={
                    scholarship.title
                  }



                  description={
                    scholarship.description
                  }



                  amount={
                    scholarship.amount
                  }



                  eligibility={
                    scholarship.eligibility
                  }



                  accent={
                    scholarship.accent
                  }



                />


              )

            )
          }




        </StaggerContainer>




      </div>






    </div>


  );

}
