// src/components/sections/studentEnquiry/StudentEnquiryStats.jsx

import {
  Users,
  Trophy,
  ClipboardCheck,
  MapPinned,
} from "lucide-react";

import FadeUp from "../../../animations/FadeUp";
import ScaleIn from "../../../animations/ScaleIn";


/**
 * ==========================================================
 * StudentEnquiryStats
 * ==========================================================
 *
 * Trust Building Statistics Section
 *
 * Features:
 * ----------
 * ✅ Student trust metrics
 * ✅ Animated cards
 * ✅ Premium UI
 * ✅ Responsive layout
 *
 */


const stats = [

  {
    id:1,

    value:"25K+",

    label:"Students Connected",

    description:
      "Learners improving their preparation with TOPIQ",

    icon:Users,

    accent:
      "from-blue-500 to-cyan-500",

  },


  {
    id:2,

    value:"1000+",

    label:"Mock Tests",

    description:
      "Practice tests designed for exam success",

    icon:ClipboardCheck,

    accent:
      "from-indigo-500 to-purple-500",

  },


  {
    id:3,

    value:"50+",

    label:"Scholarships",

    description:
      "Rewards and recognition opportunities",

    icon:Trophy,

    accent:
      "from-orange-500 to-yellow-500",

  },


  {
    id:4,

    value:"36+",

    label:"Districts Covered",

    description:
      "Students from across Maharashtra",

    icon:MapPinned,

    accent:
      "from-emerald-500 to-green-500",

  },

];



export default function StudentEnquiryStats(){


return(

<FadeUp delay={0.3}>


<div
className="
student-enquiry-stats
mt-12
grid
gap-5
sm:grid-cols-2
lg:grid-cols-4
"
>


{stats.map((item,index)=>{


const Icon=item.icon;


return(

<ScaleIn
key={item.id}
delay={index*0.1}
>


<div
className="
student-enquiry-stat-card
group
relative
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
"
>


{/* Top Gradient */}

<div
className={`
absolute
left-0
top-0
h-1
w-full
bg-gradient-to-r
${item.accent}
`}
/>



<div
className="
flex
items-center
gap-4
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
bg-gradient-to-br
${item.accent}
text-white
shadow-lg
transition-transform
duration-300
group-hover:scale-110
`}
>

<Icon size={26}/>

</div>



<div>

<h3
className="
text-3xl
font-extrabold
text-slate-900
"
>

{item.value}

</h3>


<p
className="
mt-1
text-sm
font-semibold
text-blue-600
"
>

{item.label}

</p>


</div>


</div>




<p
className="
mt-5
text-sm
leading-6
text-slate-600
"
>

{item.description}

</p>



{/* Glow */}

<div
className="
absolute
-bottom-16
-right-16
h-32
w-32
rounded-full
bg-blue-100/40
blur-3xl
transition-transform
duration-500
group-hover:scale-150
"
/>


</div>


</ScaleIn>

)


})}


</div>


</FadeUp>

)

}
