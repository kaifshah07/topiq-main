// src/components/sections/talentTest/TalentTest.jsx


import AnimatedSection from "../../../animations/AnimatedSection";

import TalentTestContent from "./TalentTestContent";
import TalentTestTimeline from "./TalentTestTimeline";
import TalentTestBenefits from "./TalentTestBenefits";
import TalentTestIllustration from "./TalentTestIllustration";


export default function TalentTest(){


return (

<section
id="talent-test"
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
absolute
-right-40
bottom-20
h-96
w-96
rounded-full
bg-indigo-100/40
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


<div
className="
grid
items-center
gap-16
lg:grid-cols-2
"
>


<TalentTestContent/>


<TalentTestIllustration/>


</div>



<div className="talent-timeline-block">

<TalentTestTimeline/>

</div>



<div className="talent-benefits-block">

<TalentTestBenefits/>

</div>


</AnimatedSection>


</div>


</section>

);


}
