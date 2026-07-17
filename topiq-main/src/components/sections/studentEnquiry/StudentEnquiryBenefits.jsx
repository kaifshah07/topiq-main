// src/components/sections/studentEnquiry/StudentEnquiryBenefits.jsx

import {
  Brain,
  Trophy,
  Target,
  Users,
  BookOpenCheck,
  Headphones,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";


/**
 * ==========================================================
 * StudentEnquiryBenefits
 * ==========================================================
 *
 * Student Conversion Benefits Section
 *
 * Features:
 * ----------
 * ✅ Benefit cards
 * ✅ Icon highlights
 * ✅ Premium UI
 * ✅ Responsive grid
 *
 */


const benefits = [

  {
    id:1,

    title:"AI Powered Learning",

    description:
      "Get personalized study recommendations, smart practice plans, and AI-based performance insights.",

    icon:Brain,

    color:"text-blue-600",

    bg:"bg-blue-50",
  },


  {
    id:2,

    title:"Scholarship Opportunities",

    description:
      "Participate in TOPIQ Talent Tests and unlock scholarships, awards, and recognition.",

    icon:Trophy,

    color:"text-yellow-600",

    bg:"bg-yellow-50",
  },


  {
    id:3,

    title:"Exam Focused Preparation",

    description:
      "Prepare with mock tests, previous year questions, quizzes, and real exam pattern practice.",

    icon:Target,

    color:"text-red-500",

    bg:"bg-red-50",
  },


  {
    id:4,

    title:"Expert Guidance",

    description:
      "Receive counselling from academic experts to choose the right preparation strategy.",

    icon:Users,

    color:"text-green-600",

    bg:"bg-green-50",
  },


  {
    id:5,

    title:"Complete Learning Resources",

    description:
      "Access notes, revision materials, practice sets, and digital learning resources.",

    icon:BookOpenCheck,

    color:"text-purple-600",

    bg:"bg-purple-50",
  },


  {
    id:6,

    title:"Dedicated Support",

    description:
      "Get assistance throughout your learning journey with student-friendly support.",

    icon:Headphones,

    color:"text-orange-500",

    bg:"bg-orange-50",
  },

];



export default function StudentEnquiryBenefits(){


return(

<div className="student-benefits-block">


{/* Section Heading */}

<FadeUp>

<div>

<h2
className="
text-3xl
font-extrabold
text-slate-900
md:text-4xl
"
>

Why Students Choose TOPIQ

</h2>


<p
className="
mt-4
max-w-xl
leading-7
text-slate-600
"
>

Everything you need to improve your preparation,
track performance, and achieve your academic goals.

</p>


</div>

</FadeUp>



{/* Benefits Grid */}

<div
className="
mt-10
grid
gap-6
sm:grid-cols-2
student-benefits-grid
"
>


{benefits.map((item,index)=>{


const Icon=item.icon;


return(

<ScaleIn
key={item.id}
delay={index*0.08}
>


<div
className="
group
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
"
>


<div
className={`
flex
h-14
w-14
items-center
justify-center
rounded-2xl
${item.bg}
${item.color}
transition-transform
duration-300
group-hover:scale-110
`}
>

<Icon size={28}/>

</div>



<h3
className="
mt-5
text-lg
font-bold
text-slate-900
"
>

{item.title}

</h3>



<p
className="
mt-3
text-sm
leading-6
text-slate-600
"
>

{item.description}

</p>



</div>


</ScaleIn>

)


})}


</div>


</div>

)

}
