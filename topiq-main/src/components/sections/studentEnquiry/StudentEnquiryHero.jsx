// src/components/sections/studentEnquiry/StudentEnquiryHero.jsx

import { motion } from "framer-motion";
import {
  UserPlus,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";
import AnimatedText from "../../../animations/AnimatedText";

import {
  iconHover,
  buttonHover,
} from "../../../utils/animationVariants";


/**
 * ==========================================================
 * StudentEnquiryHero
 * ==========================================================
 *
 * Premium Student Enquiry Header
 *
 * Features:
 * ----------
 * ✅ Animated badge
 * ✅ Gradient heading
 * ✅ Student counselling CTA
 * ✅ Trust message
 *
 */


export default function StudentEnquiryHero(){

return(

<div
className="
student-enquiry-hero
mx-auto
max-w-6xl
"
>


{/* Badge */}

<FadeUp className="enquiry-hero-badge">

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

<Sparkles size={16}/>

Start Your Learning Journey

</span>

</FadeUp>



{/* Icon */}

<ScaleIn delay={0.15} className="enquiry-hero-icon flex justify-center">

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

<UserPlus size={36}/>

</motion.div>

</ScaleIn>




{/* Heading */}

<h1
className="
enquiry-hero-title
mt-8
text-4xl
font-extrabold
leading-tight
text-slate-900
md:text-5xl
lg:text-6xl
"
>

<AnimatedText>

Join TOPIQ Today

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

Get Expert Guidance For Your Exams

</span>


</h1>




{/* Description */}

<FadeUp delay={0.25} className="enquiry-hero-description">

<p
className="
mx-auto
mt-6
max-w-3xl
text-lg
leading-8
text-slate-600
"
>

Fill the enquiry form and connect with our academic
experts. Get personalized guidance, exam preparation
strategies, scholarship information, and the right
learning path for your success.

</p>

</FadeUp>




{/* CTA */}

<ScaleIn delay={0.4} className="enquiry-hero-action">

<motion.a
{...buttonHover}
href="#student-enquiry-form"
className="
mt-8
inline-flex
items-center
gap-3
rounded-2xl
bg-gradient-to-r
from-blue-600
via-indigo-600
to-cyan-500
px-7
py-4
font-semibold
text-white
shadow-lg
shadow-blue-200
"
>

Submit Enquiry

<ArrowRight size={20}/>

</motion.a>

</ScaleIn>




{/* Trust Points */}

<FadeUp delay={0.55} className="enquiry-hero-trust">

<div
className="
mt-10
flex
flex-wrap
justify-center
gap-4
"
>


{[
"AI Powered Learning",
"Scholarship Opportunities",
"Expert Counselling",
"Personalized Study Plans",
].map((item)=>(

<span
key={item}
className="
rounded-full
border
border-slate-200
bg-white
px-5
py-2
text-sm
font-medium
text-slate-700
shadow-sm
"
>

{item}

</span>

))}


</div>

</FadeUp>



</div>

)

}
