// src/components/sections/eligibility/Eligibility.jsx


import AnimatedSection from "../../../animations/AnimatedSection";

import EligibilityContent from "./EligibilityContent";

import EligibilityGrid from "./EligibilityGrid";



export default function Eligibility(){


return (

<section

id="eligibility"

className="
relative
overflow-hidden
bg-white
py-20
lg:py-28
"

>


<div

className="
absolute
-left-40
top-20
h-96
w-96
rounded-full
bg-blue-100/40
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


<AnimatedSection animation="fadeUp">


<EligibilityContent/>


<div className="eligibility-grid-block">


<EligibilityGrid/>


</div>


</AnimatedSection>


</div>


</section>


);


}
