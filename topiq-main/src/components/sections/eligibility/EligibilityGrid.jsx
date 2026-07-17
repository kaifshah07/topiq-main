// src/components/sections/eligibility/EligibilityGrid.jsx


import StaggerContainer from "../../../animations/StaggerContainer";

import EligibilityCard from "./EligibilityCard";

import {
eligibilityData
} from "./eligibilityData";


export default function EligibilityGrid(){


return (

<StaggerContainer>


<div

className="
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
"

>


{

eligibilityData.map(item=>(


<EligibilityCard

key={item.id}

{...item}

/>


))


}


</div>


</StaggerContainer>


);


}