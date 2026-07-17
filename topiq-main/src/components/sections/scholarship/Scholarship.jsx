// src/components/sections/scholarship/Scholarship.jsx


import AnimatedSection from "../../../animations/AnimatedSection";


import ScholarshipContent from "./ScholarshipContent";
import ScholarshipIllustration from "./ScholarshipIllustration";
import ScholarshipGrid from "./ScholarshipGrid";


export default function Scholarship(){


return (

<section

id="scholarship"

className="
relative
overflow-hidden
bg-slate-50
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
bg-yellow-100/40
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
bg-orange-100/40
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


<ScholarshipContent/>


<ScholarshipIllustration/>


</div>



<div className="mt-24 lg:mt-28">

<ScholarshipGrid/>

</div>


</AnimatedSection>


</div>



</section>


)

}
