// src/components/sections/studentEnquiry/StudentEnquiry.jsx


import AnimatedSection from "../../../animations/AnimatedSection";

import StudentEnquiryHero from "./StudentEnquiryHero";
import StudentEnquiryForm from "./StudentEnquiryForm";
import StudentEnquiryBenefits from "./StudentEnquiryBenefits";
import StudentEnquiryStats from "./StudentEnquiryStats";


/**
 * ==========================================================
 * StudentEnquiry
 * ==========================================================
 *
 * Student Lead Generation Section
 *
 * Features:
 * ----------
 * ✅ Student counselling enquiry
 * ✅ Lead capture form
 * ✅ Benefits
 * ✅ Trust statistics
 * ✅ Premium conversion UI
 *
 */


export default function StudentEnquiry(){

return(

<section
id="student-enquiry"
className="
relative
overflow-hidden
bg-gradient-to-b
from-white
via-slate-50
to-white
py-20
lg:py-28
"
>


{/* Background Glow */}


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


{/* Hero */}

<StudentEnquiryHero />




<div
className="
mt-16
grid
items-start
gap-12
lg:grid-cols-2
"
>


{/* Left */}

<div>

<StudentEnquiryBenefits />

</div>




{/* Right */}

<div>

<StudentEnquiryForm />

</div>



</div>


<StudentEnquiryStats />



</AnimatedSection>



</div>



</section>


)

}
