// src/components/sections/visionMission/VisionMissionGrid.jsx

import StaggerContainer from "../../../animations/StaggerContainer";

import VisionCard from "./VisionCard";
import MissionCard from "./MissionCard";

import visionMissionData from "./visionMissionData";

import {
  Eye,
  Target,
  Compass,
  Lightbulb,
  Rocket,
  HeartHandshake,
} from "lucide-react";



/**
 * Icon Mapping
 *
 * Keeps visionMission.js clean
 * by storing icon names.
 */


const iconMap = {


  eye: Eye,


  target: Target,


  compass: Compass,


  idea: Lightbulb,


  rocket: Rocket,


  heart: HeartHandshake,


};





export default function VisionMissionGrid(){



  return (

    <div


      className="
      grid
      gap-8
      lg:grid-cols-2
      vision-mission-mobile-row
      "


    >







      {/* Vision */}



      <StaggerContainer>



        <VisionCard



          icon={

            iconMap[
              visionMissionData.vision.icon
            ]

          }



          title={

            visionMissionData.vision.title

          }



          description={

            visionMissionData.vision.description

          }



          points={

            visionMissionData.vision.points

          }



          accent={

            visionMissionData.vision.accent

          }



        />



      </StaggerContainer>









      {/* Mission */}



      <StaggerContainer>



        <MissionCard



          icon={

            iconMap[
              visionMissionData.mission.icon
            ]

          }



          title={

            visionMissionData.mission.title

          }



          description={

            visionMissionData.mission.description

          }



          actions={

            visionMissionData.mission.actions

          }



          accent={

            visionMissionData.mission.accent

          }



        />



      </StaggerContainer>







    </div>


  );

}
