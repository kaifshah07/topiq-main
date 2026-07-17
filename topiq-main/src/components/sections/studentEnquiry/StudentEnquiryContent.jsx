// src/components/sections/studentEnquiry/StudentEnquiryContent.jsx

import { motion } from "framer-motion";
import {
  UserRoundPlus,
  Sparkles,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";
import AnimatedText from "../../../animations/AnimatedText";

import {
  iconHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * StudentEnquiryContent
 * ==========================================================
 *
 * Student Enquiry Section Header
 *
 * Features:
 * ----------
 * ✅ Animated badge
 * ✅ Gradient heading
 * ✅ Description
 * ✅ Trust indicators
 * ✅ Premium TOPIQ style
 *
 */


export default function StudentEnquiryContent(){


const highlights=[

{
title:"Expert Counselling",
icon:GraduationCap,
},


{
title:"AI Powered Learning",
icon:Sparkles,
},


{
title:"Secure Registration",
icon:ShieldCheck,
},


];


return(

<div
className="
mx-auto
max-w-3xl
text-center
"
>


{/* Badge */}

<FadeUp>

<span
className="
inline-flex
items-center
gap-2
rounded-full
border
border-blue-200
bg-blue-50
px-5
py-2
text-sm
font-semibold
text-blue-700
"
>

<UserRoundPlus size={16}/>

Student Admission Enquiry

</span>

</FadeUp>





{/* Icon */}

<ScaleIn delay={0.15}>

<motion.div

{...iconHover}

className="
mx-auto
mt-6
flex
h-20
w-20
items-center
justify-center
rounded-3xl
bg-gradient-to-br
from-blue-600
via-indigo-600
to-cyan-500
text-white
shadow-xl
"

>

<UserRoundPlus size={36}/>

</motion.div>

</ScaleIn>





{/* Heading */}

<h2
className="
mt-8
text-4xl
font-extrabold
leading-tight
text-slate-900
md:text-5xl
"
>


<AnimatedText>

Start Your Success Journey

</AnimatedText>


<span
className="
block
bg-gradient-to-r
from-blue-600
via-indigo-600
to-cyan-500
bg-clip-text
text-transparent
"
>

With TOPIQ Learning Platform

</span>


</h2>





{/* Description */}

<FadeUp delay={0.25}>

<p
className="
mx-auto
mt-6
max-w-2xl
text-lg
leading-8
text-slate-600
"
>

Submit your enquiry and get personalized guidance
for competitive exams, school learning, Talent Tests,
scholarships, and career-focused preparation.

</p>

</FadeUp>





{/* Highlights */}

<FadeUp delay={0.4}>


<div
className="
mt-10
grid
gap-5
sm:grid-cols-3
"
>


{
highlights.map((item)=>{


const Icon=item.icon;


return(

<div
key={item.title}
className="
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-sm
"
>


<div
className="
mx-auto
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-blue-50
text-blue-600
"
>

<Icon size={24}/>

</div>



<h3
className="
mt-4
text-sm
font-bold
text-slate-900
"
>

{item.title}

</h3>



</div>


)


})

}


</div>


</FadeUp>



</div>

)

}